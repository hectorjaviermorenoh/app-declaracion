
// 🧠 Configuración opcional
const ENABLE_LOGS = true; // muestra errores en consola si true

export async function apiGet(backendUrl, accion, params = {}) {
  if (!backendUrl) throw new Error("Backend no configurado");

  const query = new URLSearchParams({ accion, ...params });

  try {
    const resp = await fetch(`${backendUrl}?${query.toString()}`);

    // 🔹 Detectar errores de red o servidor
    if (!resp.ok) {
      throw new Error(`Error HTTP ${resp.status}: ${resp.statusText}`);
    }

    const data = await resp.json();

    // 🔹 Validar estructura esperada del backend
    if (data.status && data.status !== "ok") {
      throw new Error(data.mensaje || "Error en respuesta del servidor");
    }

    return data;
  } catch (err) {
    if (ENABLE_LOGS) console.error(`❌ apiGet [${accion}]`, err);
    // toast.error(`Error al obtener datos (${accion})`); // opcional
    throw err; // Propaga el error al contexto
  }
}

export async function apiPost(backendUrl, accion, body = {}) {
  if (!backendUrl) throw new Error("Backend no configurado");

  const payload = { accion, ...body };

  try {
    const resp = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      throw new Error(`Error HTTP ${resp.status}: ${resp.statusText}`);
    }

    const data = await resp.json();

    console.log("apiClient Data", data)

    if (data.status && !["ok", "exists"].includes(data.status)) {
      throw new Error(data.mensaje || "Error en respuesta del servidor");
    }

    return data;
  } catch (err) {
    if (ENABLE_LOGS) console.error(`❌ apiPost [${accion}]`, err);
    throw err;
  }
}
