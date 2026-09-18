const CACHE_NAME = "risparmio-postale-v13";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json"
];


/* =========================================================
   INSTALLAZIONE
   ========================================================= */

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())

  );

});


/* =========================================================
   ATTIVAZIONE
   ========================================================= */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys()
      .then(cacheNames => {

        return Promise.all(

          cacheNames
            .filter(name => name !== CACHE_NAME)
            .map(name => caches.delete(name))

        );

      })
      .then(() => self.clients.claim())

  );

});


/* =========================================================
   RICHIESTE
   ========================================================= */

self.addEventListener("fetch", event => {

  /*
     Per le richieste GET proviamo prima la rete
     senza utilizzare la cache HTTP del browser.

     In questo modo index.html, style.css e script.js
     vengono aggiornati realmente.
  */

  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(

    fetch(event.request, {
      cache: "no-store"
    })

      .then(response => {

        if (
          response &&
          response.status === 200 &&
          response.type !== "opaque"
        ) {

          const copia = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {

              cache.put(
                event.request,
                copia
              );

            });

        }

        return response;

      })

      .catch(() => {

        return caches.match(event.request);

      })

  );

});
