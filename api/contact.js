// api/contact.js — Vercel serverless function (Node 18+, no dependencies)
//
// Handles BOTH the full contact form (contact.html) and the homepage
// quick-lead popup. Sends the message via Resend (resend.com).
//
// Setup (one-time):
//   1. Create a free Resend account at resend.com
//   2. Add and verify your domain (skyrocketjetfuel.com) under Resend > Domains
//      — this lets you send FROM an @skyrocketjetfuel.com address, which
//      lands far more reliably than an unverified sender.
//      (No domain verified yet? You can still test right away using
//      Resend's own onboarding@resend.dev sender — see FROM_EMAIL below.)
//   3. Create an API key under Resend > API Keys
//   4. In your Vercel project: Settings > Environment Variables, add:
//        RESEND_API_KEY = <the key from step 3>
//      then redeploy (env var changes need a redeploy to take effect).
//
// Deploy: this file at /api/contact.js is automatically picked up by Vercel.

const TO_EMAIL = "fltops@skyrocketjetfuel.com";
// Swap to an @skyrocketjetfuel.com address once that domain is verified in Resend.
const FROM_EMAIL = "Sky Rocket Website <onboarding@resend.dev>";

function esc(s) {
  return String(s || "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

async function sendEmail(subject, text, html, replyTo) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not set in Vercel environment variables");

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: "Bearer " + apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: replyTo || undefined,
      subject,
      text,
      html
    })
  });
  if (!r.ok) {
    const detail = await r.text().catch(() => "");
    throw new Error("Resend error " + r.status + ": " + detail);
  }
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") { res.status(204).end(); return; }
  if (req.method !== "POST") { res.status(405).json({ ok: false, error: "Method not allowed" }); return; }

  try {
    let body = req.body;
    if (typeof body === "string") { try { body = JSON.parse(body); } catch (_) { body = {}; } }
    body = body || {};

    // Honeypot: real visitors never fill this hidden field.
    if (body.website) { res.status(200).json({ ok: true }); return; }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailOk) {
      res.status(400).json({ ok: false, error: "Please provide your name and a valid email address." });
      return;
    }

    if (body.kind === "quick-lead") {
      // The homepage popup: name, phone, email only.
      const phone = String(body.phone || "").trim();
      const text = `New quick-lead from the homepage popup:\n\nName: ${name}\nPhone: ${phone || "—"}\nEmail: ${email}\n`;
      const html = `<p><strong>New quick-lead from the homepage popup</strong></p>
        <p>Name: ${esc(name)}<br>Phone: ${esc(phone) || "—"}<br>Email: ${esc(email)}</p>`;
      await sendEmail("Quick lead — " + name, text, html, `${name} <${email}>`);
      res.status(200).json({ ok: true });
      return;
    }

    // Full contact form.
    const message = String(body.message || "").trim();
    if (!message) {
      res.status(400).json({ ok: false, error: "Please fill in your name, email, and message." });
      return;
    }
    const company = String(body.company || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "").trim();
    const icao = String(body.icao || "").trim();

    const subject = "Quote request — " + (service || "General enquiry") + (icao ? " — " + icao : "");
    const text =
      "New message from the Sky Rocket Jet Fuel contact form:\n\n" +
      `Name: ${name}\nCompany: ${company || "—"}\nEmail: ${email}\n` +
      `Phone / WhatsApp: ${phone || "—"}\nService required: ${service || "—"}\n` +
      `Airport / ICAO code: ${icao || "—"}\n\nMessage:\n${message}\n`;
    const html = `<p><strong>New message from the Sky Rocket Jet Fuel contact form</strong></p>
      <p>Name: ${esc(name)}<br>Company: ${esc(company) || "—"}<br>Email: ${esc(email)}<br>
      Phone / WhatsApp: ${esc(phone) || "—"}<br>Service required: ${esc(service) || "—"}<br>
      Airport / ICAO code: ${esc(icao) || "—"}</p>
      <p><strong>Message:</strong><br>${esc(message).replace(/\n/g, "<br>")}</p>`;

    await sendEmail(subject, text, html, `${name} <${email}>`);
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: "Message could not be sent. Please email us directly at " + TO_EMAIL + "." });
  }
};
