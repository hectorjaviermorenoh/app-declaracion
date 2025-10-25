import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useBackends } from "./BackendsContext";
import { apiGet, apiPost } from "../utils/apiClient.js";
import { useToast } from "../context/ToastContext";

// 🧠 Contexto global
const DatosTributariosContext = createContext(null);

export function DatosTributariosProvider({ children }) {
  const { activeBackend } = useBackends();
  const backendUrl = activeBackend?.url || null;
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  // 🟢 Cargar todos los datos tributarios
  const getDatos = useCallback(async () => {
    if (!backendUrl) return { ok: false, mensaje: "Configure URL del backend" };

    setLoading(true);
    try {
      const data = await apiGet(backendUrl, "getDatosTributarios");
      console.log("datosTributarios 23", data)
      if (data.status === "ok") {
        setDatos(data.data || []);
        return { ok: true, mensaje: "Datos cargados correctamente" };
      }
      return { ok: false, mensaje: data.mensaje || "Error al obtener datos" };
    } catch (err) {
      console.error("❌ getDatos error:", err);
      return { ok: false, mensaje: "Error al obtener datos" };
    } finally {
      setLoading(false);
    }
  }, [backendUrl]);

  // 🔄 Carga inicial o cambio de backend
  useEffect(() => {
    if (backendUrl) getDatos();
  }, [backendUrl, getDatos]);

  // 🧩 Helper para ejecutar CRUD con refresco automático
  const runWithRefresh = useCallback(
    async (fn, successMsg, errorMsg, tipo = "info") => {
      setLoading(true);
      try {
        const data = await fn();
        const ok = data?.status === "ok";

        if (ok) {
          // Refresca lista y muestra notificación
          await Promise.all([getDatos()]);
          showToast(successMsg, "success", 3000, "DatosTributarios");
        } else {
          showToast(data?.mensaje || errorMsg, "danger", 4000, "DatosTributarios");
        }

        return { ok, mensaje: data?.mensaje, data };
      } catch (err) {
        console.error(`❌ ${tipo} error:`, err);
        showToast(errorMsg, "danger", 4000, "DatosTributarios");
        return { ok: false, mensaje: errorMsg };
      } finally {
        setLoading(false);
      }
    },
    [getDatos, showToast]
  );

  // ➕ Crear dato
  const addDato = useCallback(
    ({ label, valor }) => {
      const payload = {
        id: `${label.toLowerCase().replace(/\s+/g, "_")}_${Date.now()}`,
        label,
        valor,
      };
      return runWithRefresh(
        () => apiPost(backendUrl, "addDatoTributario", payload),
        "✅ Guardado correctamente",
        "❌ Error al guardar",
        "addDato"
      );
    },
    [backendUrl, runWithRefresh]
  );

  // ✏️ Actualizar
  const updateDato = useCallback(
    (id, { valor, label, orden }) => {
      const payload = { id, valor };
      if (label) payload.label = label;
      if (orden !== undefined) payload.orden = orden;

      return runWithRefresh(
        () => apiPost(backendUrl, "updateDatoTributario", payload),
        "✅ Actualizado correctamente",
        "❌ Error al actualizar",
        "updateDato"
      );
    },
    [backendUrl, runWithRefresh]
  );

  // 🗑️ Eliminar
  const deleteDato = useCallback(
    (id) =>
      runWithRefresh(
        () => apiPost(backendUrl, "deleteDatoTributario", { id }),
        "✅ Eliminado correctamente",
        "❌ Error al eliminar",
        "deleteDato"
      ),
    [backendUrl, runWithRefresh]
  );

  // ↕️ Mover (subir/bajar)
  const moveDato = useCallback(
    (id, direction) =>
      runWithRefresh(
        () => apiPost(backendUrl, "moveDatoTributario", { id, direction }),
        "↕️ Orden cambiado",
        "❌ Error al mover",
        "moveDato"
      ),
    [backendUrl, runWithRefresh]
  );

  // 🎯 Exportar valores
  return (
    <DatosTributariosContext.Provider
      value={{
        datos,
        loading,
        getDatos,
        addDato,
        updateDato,
        deleteDato,
        moveDato,
      }}
    >
      {children}
    </DatosTributariosContext.Provider>
  );
}

// 🪝 Hook personalizado
export function useDatosTributarios() {
  const ctx = useContext(DatosTributariosContext);
  if (!ctx) throw new Error("useDatosTributarios debe usarse dentro de <DatosTributariosProvider>");
  return ctx;
}
