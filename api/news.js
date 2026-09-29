// api/news.js — live aviation-fuel news endpoint (Vercel serverless function, Node 18+, no dependencies)
//
// What it does: fetches Google News RSS on the SERVER (browsers can't do this directly — CORS),
// cleans it up, and returns JSON:  { updated: ISO, items: [{ tag, title, desc, date, source, url }] }
//
// Deploy: put this file at  /api/news.js  in your Vercel project. The site then calls /api/news.
// Different host for the site? Deploy this alone as its own Vercel project and set NEWS_API in
// shared.js to its full URL (CORS is open below).
//
// To change what counts as news, edit FEEDS. To use a paid news API instead (NewsAPI, GNews…),
// swap the fetch inside the handler and keep the same JSON shape.

const FEEDS = [
  { tag: "Fuel Market", query: '("jet fuel" OR "aviation fuel" OR "Jet A-1" OR "airline fuel") when:14d', bing: 'jet fuel OR aviation fuel OR "Jet A-1" OR airline fuel' },
  { tag: "Aviation",    query: '(airline OR airport OR aviation OR "air cargo") when:7d',                  bing: 'airline OR airport OR aviation OR "air cargo"' }
];
const PER_FEED = 10;
const TOTAL = 16;

const rssUrl = q => "https://news.google.com/rss/search?q=" + encodeURIComponent(q) + "&hl=en-US&gl=US&ceid=US:en";

function decode(s) {
  return String(s)
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");
}
function stripTags(s) { return String(s).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(); }

function pick(block, tag) {
  const m = block.match(new RegExp("<" + tag + "(?:\\s[^>]*)?>([\\s\\S]*?)</" + tag + ">", "i"));
  if (!m) return "";
  const v = m[1].trim();
  const cd = v.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/);
  return cd ? cd[1].trim() : decode(v);
}

// Bing News RSS: same idea, but each item carries the article's own photo (<News:Image>)
const bingUrl = q => "https://www.bing.com/news/search?q=" + encodeURIComponent(q) + "&format=rss&qft=sortbydate%3d%221%22&setlang=en-US";

function parseBing(xml, tag) {
  const items = [];
  const re = /<item>([\s\S]*?)<\/item>/gi;
  let m;
  while ((m = re.exec(xml))) {
    const b = m[1];
    const title = pick(b, "title");
    let link = pick(b, "link");
    const u = link.match(/[?&]url=([^&]+)/);            // unwrap Bing's click-tracking redirect
    if (u) { try { link = decodeURIComponent(u[1]); } catch (e) {} }
    let img = pick(b, "News:Image").replace(/^http:\/\//i, "https://");
    if (img && /^\/\//.test(img)) img = "https:" + img;
    const d = new Date(pick(b, "pubDate"));
    let desc = stripTags(pick(b, "description"));
    if (desc.length < 40 || desc.toLowerCase().startsWith(title.toLowerCase().slice(0, 30))) desc = "";
    if (!title || !/^https?:\/\//i.test(link) || isNaN(d)) continue;
    items.push({ tag, title, desc: desc.slice(0, 200), date: d.toISOString(),
                 source: pick(b, "News:Source") || "News", url: link, img: /^https:\/\//i.test(img) ? img : "" });
  }
  return items;
}

function parseRss(xml, tag) {
  const items = [];
  const re = /<item>([\s\S]*?)<\/item>/gi;
  let m;
  while ((m = re.exec(xml))) {
    const b = m[1];
    let title = pick(b, "title");
    const source = pick(b, "source");
    if (source && title.endsWith(" - " + source)) title = title.slice(0, -(source.length + 3));
    const link = pick(b, "link");
    const d = new Date(pick(b, "pubDate"));
    let desc = stripTags(pick(b, "description"));
    // Google News descriptions usually just repeat the headline + source: drop those.
    if (desc.length < 40 || desc.toLowerCase().startsWith(title.toLowerCase().slice(0, 30))) desc = "";
    if (!title || !/^https?:\/\//i.test(link) || isNaN(d)) continue;
    items.push({ tag, title, desc: desc.slice(0, 200), date: d.toISOString(), source: source || "News", url: link });
  }
  return items;
}

async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const bingJobs = FEEDS.map(async f => {
      const r = await fetch(bingUrl(f.bing), {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; SkyRocketNews/1.0)" },
        signal: AbortSignal.timeout(8000)
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      return parseBing(await r.text(), f.tag).slice(0, PER_FEED);
    });
    const googleJobs = FEEDS.map(async f => {
      const r = await fetch(rssUrl(f.query), {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; SkyRocketNews/1.0)" },
        signal: AbortSignal.timeout(8000)
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      return parseRss(await r.text(), f.tag).slice(0, PER_FEED);
    });
    // Bing first: on duplicate headlines the copy with a real photo wins
    const results = await Promise.allSettled([...bingJobs, ...googleJobs]);

    const seen = new Set();
    const items = results
      .flatMap(r => (r.status === "fulfilled" ? r.value : []))
      .filter(n => {
        const k = n.title.toLowerCase().replace(/[^a-z0-9]+/g, " ").slice(0, 60);
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, TOTAL);

    if (!items.length) {
      res.status(502).json({ error: "upstream_unavailable" });
      return;
    }
    // cache at the edge for 10 min; serve stale up to 30 min while refreshing
    res.setHeader("Cache-Control", "public, s-maxage=600, stale-while-revalidate=1800");
    res.status(200).json({ updated: new Date().toISOString(), items });
  } catch (e) {
    res.status(502).json({ error: "server_error" });
  }
}

module.exports = handler;
module.exports.parseRss = parseRss;
module.exports.parseBing = parseBing;   // exported for testing
