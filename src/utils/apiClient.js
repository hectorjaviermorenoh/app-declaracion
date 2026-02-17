import { getBackendURLGlobal } from "../context/backendURLGlobal";

// src/utils/apiClient.js
const ENABLE_LOGS = true;
const AUTH_STORAGE_KEY = "auth_session";

/** Error específico para indicar que se requiere autenticación */
export class AuthRequiredError extends Error {
  constructor(message = "Autenticación requerida") {
    super(message);
    this.name = "AuthRequiredError";
  }
}

export function getAuthToken() {
  try {
    const session = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY));
    return session?.token || null;
  } catch {
    return null;
  }
}

function notifyAuthRequired(message) {
  if (ENABLE_LOGS) console.warn("notifyAuthRequired:", message);
  try {
    window.dispatchEvent(new CustomEvent("auth:required", { detail: { message } }));
  } catch (e) {
    if (ENABLE_LOGS) console.error("Error dispatching auth:required", e);
  }
}


// async function handleResponse(resp, accion) {
async function handleResponse(resp) {
  if (!resp.ok) {
    throw new Error(`Error HTTP ${resp.status}: ${resp.statusText}`);
  }

  const data = await resp.json();

  // ⚠️ CASO 1: Token inválido → cerrar sesión
  if (
    data.status === "token_invalido" ||
    data.autorizado === false && data.motivo === "token_invalido"
  ) {
    const msg = data.mensaje || "Token inválido o sesión expirada";
    notifyAuthRequired(msg);  // 👉 indica al sistema que debe cerrar sesión
    throw new AuthRequiredError(msg);
  }

  // ⚠️ CASO 2: Usuario sin permiso → NO cerrar sesión
  if (data.status === "sin_permiso") {
    const msg = data.mensaje || "No tiene permiso para realizar esta acción";
    if (ENABLE_LOGS) console.warn("⛔ Acción bloqueada por permisos:", msg);
    throw new Error(msg);   // 👉 lanza error normal, NO AuthRequiredError
  }

  // ✔️ Caso normal: validar estado
  if (data.status && !["ok", "exists", "error_validacion"].includes(data.status)) {
    throw new Error(data.mensaje || "Error en respuesta del servidor");
  }

  return data;
}


export async function apiGet(accion, params = {}) {

  const backendUrl = getBackendURLGlobal();

  if (!backendUrl) throw new Error("Backend no configurado");

  const token = getAuthToken();
  if (!token) {
    notifyAuthRequired("No hay token en localStorage");
    throw new AuthRequiredError("No hay token de sesión");
  }

  const query = new URLSearchParams({ accion, ...params, token });

  try {
    const resp = await fetch(`${backendUrl}?${query.toString()}`, { credentials: "omit" });
    return await handleResponse(resp, accion);
  } catch (err) {
    if (ENABLE_LOGS) console.error(`❌ apiGet [${accion}]`, err);
    throw err;
  }
}

export async function apiPost(accion, body = {}) {

  const backendUrl = getBackendURLGlobal();

  if (!backendUrl) throw new Error("Backend no configurado");

  const token = getAuthToken();
  if (!token) {
    notifyAuthRequired("No hay token en localStorage");
    throw new AuthRequiredError("No hay token de sesión");
  }

  const payload = { accion, ...body, token };

  try {
    const resp = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      credentials: "omit",
    });

    // 🧩 EXCEPCIÓN: si la acción es generarBackupZIP, devolver blob
    if (accion === "generarBackupZIP") {
      if (!resp.ok) throw new Error(`Error HTTP ${resp.status}: ${resp.statusText}`);

      // ⭐ CAMBIO CLAVE A: Leer la respuesta como JSON
      const data = await resp.json();

      if (data.status === "ok" && data.base64) {
          // ⭐ CAMBIO CLAVE B: Función de decodificación de Base64 a Blob
          const byteCharacters = atob(data.base64);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: data.mimeType || 'application/zip' });

          return {
              status: "ok",
              mensaje: data.mensaje,
              blob: blob, // Este es el Blob real que estabas buscando
              nombreArchivo: data.nombreArchivo
          };
      }
      return data; // Retornar status de error
    }

    // 🔄 Resto de casos normales (respuestas JSON)
    return await handleResponse(resp, accion);
  } catch (err) {
    if (ENABLE_LOGS) console.error(`❌ apiPost [${accion}]`, err);
    throw err;
  }
}

