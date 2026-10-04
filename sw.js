const CACHE_NAME = 'pickle-match-v3';

const ASSETS = [
  './index.html',
  './manifest.json',
  './sports_court192_2.png',
  './sports_court512_2.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
