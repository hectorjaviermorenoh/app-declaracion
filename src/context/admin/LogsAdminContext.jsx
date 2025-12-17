import React, { createContext, useContext, useState, useCallback } from "react";
import { apiGet, apiPost } from "../../utils/apiClient.js";
import { useToast } from "../ToastContext";

// Crear el contexto
const LogsAdminContext = createContext(null);

// Provider
export function LogsAdminProvider({ children }) {

  const { showToast } = useToast();

  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 GET: obtener todos los logs
  const getDatos = useCallback(async () => {
    setLoading(true);

    try {
      const response = await apiGet("getLogs");
      if (response.status === "ok") {
        setLogs(response.logs || []);
      } else {
        showToast(response.mensaje || "⚠️ No se pudieron cargar los logs.", "warning", 4000, "LogsAdmin");
        // return [];
      }
    } catch (err) {
      console.error("❌ getLogs error:", err);
      showToast("❌ Error de conexión al cargar logs.", "danger", 4000, "LogsAdmin");
      // return [];
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  // 🔹 POST: limpiar logs antiguos (mantiene los 10 más recientes)
  const clearDatos = useCallback(async () => {
    setLoading(true);

    try {
      const response = await apiPost("limpiarLogsAntiguos");
      if (response.status === "ok") {
        showToast(response.mensaje || "🧹 Logs limpiados correctamente", "success", 3000, "LogsAdmin");
        await getDatos(); // 👈 opcional: vuelve a cargar los logs actualizados
        // return true;
      } else {
        showToast(response.mensaje || `⚠️ No se pudo limpiar logs`, "warning", 4000, "LogsAdmin");
      }
      // return false;
    } catch (err) {
      console.error("❌ clearLogs error:", err);
      showToast("❌ Error al limpiar logs", "danger", 4000, "LogsAdmin");
      // return false;
    } finally {
      setLoading(false);
    }
  }, [showToast, getDatos]);




  // Valor expuesto al resto de la app
  return (
    <LogsAdminContext.Provider
      value={{
        logs,
        loading,
        getDatos,
        clearDatos,
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
