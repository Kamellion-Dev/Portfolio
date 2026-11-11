// Retire the previous cache-first portfolio worker for returning visitors.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    await caches.delete('portfolio-v1.0.0');
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    for (const client of clients) client.postMessage({ type: 'portfolio-cache-retired' });
  })());
});
