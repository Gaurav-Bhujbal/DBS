<?php
/**
 * Reverse proxy for /DBSEXP/* assets (images, uploads) from the tracking server.
 * The tracking page references images relative to the same origin, so we need
 * to serve them through our domain to avoid CORS and mixed-content issues.
 */
$path = $_GET['path'] ?? '';
$path = ltrim(preg_replace('/\.\./', '', $path), '/'); // basic path traversal guard

// Remove the 'path' param; pass through any remaining query string to the target
$qs = $_SERVER['QUERY_STRING'] ?? '';
$qs = preg_replace('/(?:^|&)path=[^&]*/', '', $qs);
$qs = ltrim($qs, '&');

$target = 'http://117.248.110.22/' . $path;
if ($qs !== '') {
    $target .= '?' . $qs;
}

$ch = curl_init($target);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_TIMEOUT, 20);

// Forward cookies so authenticated assets load correctly
$incomingCookies = [];
foreach ($_COOKIE as $name => $value) {
    $incomingCookies[] = rawurlencode($name) . '=' . rawurlencode($value);
}
if ($incomingCookies) {
    curl_setopt($ch, CURLOPT_COOKIE, implode('; ', $incomingCookies));
}

$raw = curl_exec($ch);
if ($raw === false) {
    http_response_code(502);
    exit;
}

$info       = curl_getinfo($ch);
$headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
curl_close($ch);

$body        = substr($raw, $headerSize);
$contentType = $info['content_type'] ?? 'application/octet-stream';

// Strip charset from content-type for binary assets
header('Content-Type: ' . $contentType);
echo $body;
