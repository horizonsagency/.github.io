const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  '/index.html',
  '/style.css',
  '/css/your-css-file.css',
  '/script/your-script.js',
  '/images/icon-192x192.png',
  '/images/icon-512x512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});