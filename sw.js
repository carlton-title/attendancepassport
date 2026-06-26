const CACHE_NAME = 'attendance-passport-v8';
const STATIC_ASSETS = [
  '/attendancepassport/',
  '/attendancepassport/index.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Always fetch fresh from network, fall back to cache
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
