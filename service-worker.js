const CACHE_VERSION = "v0102261154am"; 
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
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
