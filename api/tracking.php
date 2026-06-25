<?php
/**
 * Reverse proxy for the DBS tracking server.
 * Forwards GET/POST to the ASP.NET tracking page and relays cookies
 * back to the browser so session state is preserved between requests.
 */
$target = 'http://117.248.110.22/DBSEXP/CSM/TRACKLR.ASPX';

$ch = curl_init($target);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

// Forward cookies the browser already has (needed for ASP.NET session)
$incomingCookies = [];
foreach ($_COOKIE as $name => $value) {
    $incomingCookies[] = rawurlencode($name) . '=' . rawurlencode($value);
}
if ($incomingCookies) {
    curl_setopt($ch, CURLOPT_COOKIE, implode('; ', $incomingCookies));
}

// Handle POST (the form submission with ViewState + CN number)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $rawBody = file_get_contents('php://input');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $rawBody);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/x-www-form-urlencoded',
        'Content-Length: ' . strlen($rawBody),
    ]);
}

$raw = curl_exec($ch);
if ($raw === false) {
    http_response_code(502);
    echo 'Proxy error: ' . curl_error($ch);
    curl_close($ch);
    exit;
}

$headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
curl_close($ch);

$rawHeaders = substr($raw, 0, $headerSize);
$body       = substr($raw, $headerSize);

// Relay Set-Cookie headers — strip the remote Domain so the browser
// stores the cookie under the current site's domain (same as Vite's
// cookieDomainRewrite behaviour in development).
foreach (explode("\r\n", $rawHeaders) as $line) {
    if (stripos($line, 'Set-Cookie:') === 0) {
        $cookie = preg_replace('/;\s*domain=[^;]*/i', '', $line);
        $cookie = preg_replace('/;\s*path=[^;]*/i',   '', $cookie);
        $cookie .= '; Path=/; SameSite=Lax';
        header($cookie, false);
    }
}

header('Content-Type: text/html; charset=utf-8');
echo $body;
