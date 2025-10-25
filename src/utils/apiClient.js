// 🧠 Configuración opcional
const ENABLE_LOGS = true; // muestra errores en consola si true
const AUTH_STORAGE_KEY = "auth_session"; // misma clave usada en AuthContext.jsx

/**
 * Obtiene el token de autenticación guardado en localStorage.
 */
function getAuthToken() {
  try {
    const session = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY));
    return session?.token || null;
  } catch {
    return null;
  }
}

/**
 * Maneja la respuesta del backend, verificando errores, estructura y permisos.
 */
async function handleResponse(resp, accion) {
  if (!resp.ok) {
    throw new Error(`Error HTTP ${resp.status}: ${resp.statusText}`);
  }

  const data = await resp.json();

  // 🔒 Si el backend indica que el usuario no está autorizado
  if (data.autorizado === false) {
    if (ENABLE_LOGS) console.warn(`🚫 Token inválido o sesión expirada (${accion})`, data.mensaje);
    // Limpia sesión local (el AuthContext también lo manejará al detectar esto)
    localStorage.removeItem(AUTH_STORAGE_KEY);
    throw new Error("No autorizado. Por favor, inicia sesión nuevamente.");
  }

  // 🔹 Validar estructura esperada
  if (data.status && !["ok", "exists"].includes(data.status)) {
    throw new Error(data.mensaje || "Error en respuesta del servidor");
  }

  return data;
}

/**
 * Petición GET con token automático.
 */
export async function apiGet(backendUrl, accion, params = {}) {
  if (!backendUrl) throw new Error("Backend no configurado");

  const token = getAuthToken();
  const query = new URLSearchParams({ accion, ...params });
  if (token) query.append("token", token);

  try {
    const resp = await fetch(`${backendUrl}?${query.toString()}`);
    return await handleResponse(resp, accion);
  } catch (err) {
    if (ENABLE_LOGS) console.error(`❌ apiGet [${accion}]`, err);
    throw err;
  }
}

/**
 * Petición POST con token automático.
 */
export async function apiPost(backendUrl, accion, body = {}) {
  if (!backendUrl) throw new Error("Backend no configurado");

  const token = getAuthToken();
  const payload = { accion, ...body };
  if (token) payload.token = token;

  try {
    const resp = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    return await handleResponse(resp, accion);
  } catch (err) {
    if (ENABLE_LOGS) console.error(`❌ apiPost [${accion}]`, err);
    throw err;
  }
}
