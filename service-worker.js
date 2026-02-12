const CACHE_VERSION = "v" + Date.now();
const CACHE_NAME = `app-declaracion-${CACHE_VERSION}`;

/* Solo assets estáticos reales (NO index.html) */
const STATIC_ASSETS = [
  "/app-declaracion/manifest.json",
  "/app-declaracion/icons/icon-192.png",
  "/app-declaracion/icons/icon-512.png"
];

/* INSTALL */
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
});

/* ACTIVATE */
self.addEventListener("activate", (event) => {
  self.clients.claim();
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names.map((name) => {
          if (name !== CACHE_NAME) return caches.delete(name);
        })
      )
    )
  );
});

/* FETCH */
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // 🔴 HTML SIEMPRE desde red (evita quedarse pegado)
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match("/app-declaracion/"))
    );
    return;
  }

  // 🟢 Assets → cache-first (rápidos y seguros)
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        return response;
      });
    })
  );
});

/* Permite activar nueva versión inmediatamente */
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
