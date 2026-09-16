const CACHE_NAME = "risparmio-postale-v4";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json"
];


self.addEventListener("install", event => {

  self.skipWaiting();

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))

  );

});


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


self.addEventListener("fetch", event => {

  event.respondWith(

    fetch(event.request)
      .then(response => {

        const copia = response.clone();

        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, copia);
          });

        return response;

      })
      .catch(() => {

        return caches.match(event.request);

      })

  );

});
