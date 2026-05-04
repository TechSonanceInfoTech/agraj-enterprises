self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // A simple pass-through service worker to satisfy PWA requirements
  // without interfering with Next.js caching and routing
  event.respondWith(fetch(event.request));
});
