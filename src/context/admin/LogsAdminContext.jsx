import React, { createContext, useContext, useState, useCallback } from "react";
import { useBackends } from "../BackendsContext";
import { apiGet, apiPost } from "../../utils/apiClient.js";
import { useToast } from "../ToastContext"; // opcional si quieres notificaciones

// Crear el contexto
const LogsAdminContext = createContext(null);

// Provider
export function LogsAdminProvider({ children }) {

  const { activeBackend } = useBackends(); // 👈 obtenemos backend activo
  const backendUrl = activeBackend?.url || null;

  const { showToast } = useToast();
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 GET: obtener todos los logs
  const fetchLogs = useCallback(async () => {
    if (!backendUrl) {
      console.warn("⚠️ No hay backend activo configurado.");
      return [];
    }

    setLoading(true);
    try {
      const data = await apiGet(backendUrl, "getLogs");
      if (data.status === "ok") {
        setLogs(data.logs || []);
        showToast("📜 Logs cargados correctamente", "info", 2000, "LogsAdmin");
        return data.logs;
      } else {
        showToast("❌ Error obteniendo logs", "danger", 4000, "LogsAdmin");
        return [];
      }
    } catch (err) {
      console.error("❌ fetchLogs error:", err);
      showToast("⚠️ Error al cargar logs", "danger", 4000, "LogsAdmin");
      return [];
    } finally {
      setLoading(false);
    }
  }, [backendUrl, showToast]);

  // 🔹 POST: limpiar logs antiguos (mantiene los 10 más recientes)
  const clearLogs = useCallback(async () => {
    if (!backendUrl) return;
    setLoading(true);
    try {
      const data = await apiPost(backendUrl, "limpiarLogsAntiguos");
      if (data.status === "ok") {
        showToast(data.mensaje || "🧹 Logs limpiados correctamente", "success", 3000, "LogsAdmin");
        await fetchLogs(); // 👈 opcional: vuelve a cargar los logs actualizados
        return true;
      }
      showToast(data.mensaje || "❌ No se pudo limpiar logs", "danger", 4000, "LogsAdmin");
      return false;
    } catch (err) {
      console.error("❌ clearLogs error:", err);
      showToast("⚠️ Error limpiando logs", "danger", 4000, "LogsAdmin");
      return false;
    } finally {
      setLoading(false);
    }
  }, [backendUrl, showToast, fetchLogs]);


  // Valor expuesto al resto de la app
  return (
    <LogsAdminContext.Provider
      value={{
        logs,
        loading,
        fetchLogs,
        clearLogs,
      }}
    >
      {children}
    </LogsAdminContext.Provider>
  );
}

// Hook personalizado
export function useLogsAdmin() {
  const ctx = useContext(LogsAdminContext);
  if (!ctx) {
    throw new Error("useLogsAdmin debe usarse dentro de <LogsAdminProvider>");
  }
  return ctx;
}
