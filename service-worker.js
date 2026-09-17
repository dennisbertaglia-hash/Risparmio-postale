const CACHE_NAME = "risparmio-postale-v12";

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
     Per i file dell'app proviamo sempre a prendere
     la versione aggiornata dalla rete.
  */

  event.respondWith(

    fetch(event.request)
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

        return caches.match(
          event.request
        );

      })

  );

});
