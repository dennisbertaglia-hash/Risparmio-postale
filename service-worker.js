const CACHE_NAME = "risparmio-postale-v9";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {

  if (event.request.method !== "GET") {
    return;
  }

  const url = new URL(event.request.url);

  /*
   * HTML, CSS e JavaScript
   * vengono sempre richiesti alla rete,
   * così le modifiche compaiono subito.
   */

  if (
    url.pathname.endsWith(".html") ||
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".js") ||
    url.pathname === "/" ||
    url.pathname.endsWith("/")
  ) {

    event.respondWith(
      fetch(event.request, {
        cache: "no-store"
      })
    );

    return;
  }

  /*
   * Tutti gli altri file:
   * prima rete, poi cache come fallback.
   */

  event.respondWith(

    fetch(event.request)

      .then(response => {

        const responseClone = response.clone();

        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });

        return response;

      })

      .catch(() => {

        return caches.match(event.request);

      })

  );

});
