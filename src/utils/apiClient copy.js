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

/**
 * Maneja la respuesta del backend verificando estructura y permisos
 */
// async function handleResponse(resp, accion) {
async function handleResponse(resp) {
  if (!resp.ok) {
    throw new Error(`Error HTTP ${resp.status}: ${resp.statusText}`);
  }

  const data = await resp.json();

  // backend indica que la sesión/token no es válido
  if (data.autorizado === false || data.status === "token_invalido" || data.status === "sin_permiso") {
    const msg = data.mensaje || "Token inválido o sesión expirada";
    notifyAuthRequired(msg);
    throw new AuthRequiredError(msg);
  }

  // validar estructura de estado
  if (data.status && !["ok", "exists"].includes(data.status)) {
    throw new Error(data.mensaje || "Error en respuesta del servidor");
  }

  return data;
}


export async function apiGet(backendUrl, accion, params = {}) {
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

/**
 * Petición POST con token automático
 */
export async function apiPost(backendUrl, accion, body = {}) {
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

    return await handleResponse(resp, accion);
  } catch (err) {
    if (ENABLE_LOGS) console.error(`❌ apiPost [${accion}]`, err);
    throw err;
  }
}
