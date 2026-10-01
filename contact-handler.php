<?php
/**
 * contact-handler.php — processes the Sky Rocket Jet Fuel contact form.
 *
 * Upload this file to the SAME folder as contact.html on GoDaddy
 * (the skyrocketjetfuel.com folder in public_html), alongside your
 * other site files. Nothing else to configure — GoDaddy shared
 * hosting's built-in mail() function sends the message.
 *
 * If mail() doesn't reliably reach the inbox (shared hosting is
 * sometimes flaky / lands in spam), ask for the SMTP version instead,
 * which sends through your real fltops@skyrocketjetfuel.com mailbox.
 */

header('Content-Type: application/json');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

function field($key) {
    return isset($_POST[$key]) ? trim(strip_tags($_POST[$key])) : '';
}

$name    = field('name');
$email   = field('email');
$company = field('company');
$phone   = field('phone');
$service = field('service');
$icao    = field('icao');
$message = field('message');

// Basic server-side validation (never trust the browser alone)
if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Please fill in your name, email, and message.']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Please enter a valid email address.']);
    exit;
}

// Simple honeypot support: if contact.html includes a hidden field
// named "website", a real visitor never fills it; bots often do.
if (field('website') !== '') {
    // Pretend success so bots don't learn the trick, but send nothing.
    echo json_encode(['ok' => true]);
    exit;
}

$to      = 'fltops@skyrocketjetfuel.com';
$subject = 'Quote request — ' . ($service !== '' ? $service : 'General enquiry') . ($icao !== '' ? ' — ' . $icao : '');

$body  = "New message from the Sky Rocket Jet Fuel contact form:\n\n";
$body .= "Name: $name\n";
$body .= "Company: " . ($company !== '' ? $company : '—') . "\n";
$body .= "Email: $email\n";
$body .= "Phone / WhatsApp: " . ($phone !== '' ? $phone : '—') . "\n";
$body .= "Service required: " . ($service !== '' ? $service : '—') . "\n";
$body .= "Airport / ICAO code: " . ($icao !== '' ? $icao : '—') . "\n\n";
$body .= "Message:\n$message\n";

// Reply-To is the visitor's address, so hitting "Reply" in your inbox
// goes straight back to them. The From address stays on your own
// domain, since many mail servers reject a From that isn't local.
$safeName = str_replace(["\r", "\n"], '', $name);
$headers  = "From: Sky Rocket Website <no-reply@skyrocketjetfuel.com>\r\n";
$headers .= "Reply-To: $safeName <$email>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = @mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Message could not be sent. Please email us directly at fltops@skyrocketjetfuel.com.']);
}
