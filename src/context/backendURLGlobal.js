// src/context/backendURLGlobal.js

const STORAGE_KEY = "backends_config";

/**
 * Obtiene la URL del backend activo directamente desde localStorage.
 * No depende de React ni del lifecycle de la app.
 * Seguro ante reload del navegador.
 */
export function getBackendURLGlobal() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);

    return parsed?.active?.url || null;
  } catch (error) {
    console.error("❌ Error leyendo backend desde localStorage", error);
    return null;
  }
}

/**
 * Setter opcional.
 * Se mantiene por compatibilidad, pero ya no es crítico.
 * La fuente de verdad es localStorage.
 */
export function setBackendURLGlobal(url) {
  try {
    if (!url) return;

    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    const parsed = JSON.parse(raw);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ...parsed,
        active: {
          ...parsed.active,
          url,
        },
      })
    );
  } catch (error) {
    console.warn("⚠️ No se pudo sincronizar backendURLGlobal", error);
  }
}
