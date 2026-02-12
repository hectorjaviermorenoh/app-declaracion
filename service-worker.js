const CACHE_VERSION = "v1202261114am";
const CACHE_NAME = `app-declaracion-${CACHE_VERSION}`;

/* Archivos básicos que queremos disponibles */
const URLS_TO_CACHE = [
  "/app-declaracion/",
  "/app-declaracion/index.html",
  "/app-declaracion/manifest.json"
];

/* Instalación */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting(); // ⬅️ fuerza nuevo SW
});

/* Activación */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache); // ⬅️ borra caches viejos
          }
        })
      )
    )
  );
  self.clients.claim(); // ⬅️ toma control inmediato
});

/* Intercepción de peticiones */
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response || fetch(event.request);
//     })
//   );
// });

// public/service-worker.js corregido
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Si está en caché, lo devuelve, pero TAMBIÉN dispara una petición a la red
      // para actualizar la caché para la próxima vez.
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const cacheCopy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, cacheCopy));
        }
        return networkResponse;
      }).catch(() => {
        // Fallback si no hay red ni caché (ej. mostrar una página offline)
      });

      return response || fetchPromise;
    })
  );
});
