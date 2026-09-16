const VERSIONE = "risparmio-postale-v10";

self.addEventListener("install", event => {
  console.log(VERSIONE + " installato");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    (async () => {

      // Elimina qualsiasi cache precedente
      const cacheNames = await caches.keys();

      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );

      // Prende immediatamente il controllo delle pagine aperte
      await self.clients.claim();

      // Disinstalla completamente questo Service Worker
      await self.registration.unregister();

    })()
  );
});

// NESSUN fetch handler.
// HTML, CSS, JS e immagini vengono quindi gestiti
// direttamente dal browser/rete senza cache del Service Worker.
