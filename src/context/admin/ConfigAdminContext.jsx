import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { useBackends } from "../BackendsContext";
import { apiGet, apiPost, getAuthToken  } from "../../utils/apiClient";
import { useToast } from "../ToastContext";

const ConfigAdminContext = createContext();

export const ConfigAdminProvider = ({ children }) => {
  const { activeBackend } = useBackends();
  const backendUrl = activeBackend?.url || null;
  const { showToast } = useToast();

  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(false);

  /*******************************
   * ⚙️ Obtener configuración
   *******************************/
  const getConfig = useCallback(async () => {
    if (!backendUrl) return;
    setLoading(true);
    try {
      const response = await apiGet(backendUrl, "getConfig");
      if (response.status === "ok") {
        setConfig(response.datos || response.data || {});
        showToast(response.mensaje || "⚙️ Configuración cargada correctamente", "info", 2000, "ConfigAdmin");
      } else {
        showToast(response.mensaje || "⚠️ Error al obtener configuración", "warning", 4000, "ConfigAdmin");
      }
    } catch (err) {
      console.error("❌ getConfig error:", err);
      showToast("❌ Error al obtener configuración del servidor", "danger", 4000, "ConfigAdmin");
    } finally {
      setLoading(false);
    }
  }, [backendUrl, showToast]);

  /*******************************
   * 💾 Actualizar configuración
   *******************************/
  const updateConfig = async (nuevaConfig) => {
    if (!backendUrl) return;
    setLoading(true);
    try {
      const response = await apiPost(backendUrl, "updateConfig", nuevaConfig);
      if (response.status === "ok") {
        setConfig(response.datos || nuevaConfig);
        showToast(response.mensaje || "✅ Configuración actualizada correctamente", "success", 2000, "ConfigAdmin");
      } else {
        showToast(response.mensaje || "⚠️ No se pudo actualizar la configuración", "warning", 4000, "ConfigAdmin");
      }
    } catch (err) {
      console.error("❌ updateConfig error:", err);
      showToast("❌ Error de conexión con el servidor al actualizar configuración", "danger", 4000, "ConfigAdmin");
    } finally {
      setLoading(false);
    }
  };

  /*******************************
   * 🚀 Cargar al inicio
   *******************************/
  useEffect(() => {

    // Si no hay token, no intentar cargar datos aquí (AuthContext ya maneja evento global)
    const token = getAuthToken();
    if (!token) return;

    getConfig();
  }, [getConfig]);

  return (
    <ConfigAdminContext.Provider
      value={{
        config,
        loading,
        getConfig,
        updateConfig,
      }}
    >
      {children}
    </ConfigAdminContext.Provider>
  );
};

export const useConfigAdmin = () => useContext(ConfigAdminContext);
