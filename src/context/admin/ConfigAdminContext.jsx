import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { apiGet, apiPost, getAuthToken  } from "../../utils/apiClient";
import { useToast } from "../ToastContext";

const ConfigAdminContext = createContext();

export const ConfigAdminProvider = ({ children }) => {

  const { showToast } = useToast();
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(false);

  /*******************************
   * ⚙️ Obtener configuración
   *******************************/
  const getConfig = useCallback(async () => {

    setLoading(true);
    try {
      const response = await apiGet("getConfig");
      if (response.status === "ok") {
        setConfig(response.datos || response.data || {});
      }
    } catch (err) {
      console.error("❌ getConfig error:", err);
      showToast("❌ Error al obtener configuración del servidor", "danger", 4000, "ConfigAdmin");
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  /*******************************
   * 💾 Actualizar configuración
   *******************************/
  const updateConfig = async (nuevaConfig) => {
    setLoading(true);
    try {
      const response = await apiPost("updateConfig", nuevaConfig);
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
   * 🧨 Reinicializar sistema forzado (Nuevo)
   *******************************/
  const reinicializarSistemaForzado = async (confirmar, borrarCarpetas = false) => {
    setLoading(true);
    try {
      const response = await apiPost("inicializarSistemaForzado", {
        confirmar,           // debe ser "INICIALIZAR"
        borrarCarpetas,      // true o false
      });

      if (response.status === "ok") {
        showToast(response.mensaje || "✅ Sistema reinicializado correctamente", "success", 3000, "ConfigAdmin");
      } else if (response.status === "sin_permiso") {
        showToast(response.mensaje || "⛔ No tiene permisos para reinicializar", "warning", 4000, "ConfigAdmin");
      } else {
        showToast(response.mensaje || "⚠️ Error al reinicializar el sistema", "warning", 4000, "ConfigAdmin");
      }

      return response;
    } catch (err) {
      console.error("❌ reinicializarSistemaForzado error:", err);
      showToast( `❌ Reinicializar Sistema ${err}`, "danger", 20000, "ConfigAdmin");
      return { status: "error", mensaje: err.message };
    } finally {
      setLoading(false);
    }
  };


  const generarBackup = async () => {
    setLoading(true);
    try {
      const response = await apiPost("generarBackupZIP", {});

      if (response.status === "ok" && response.blob) {
        showToast("✅ Backup generado correctamente", "success", 3000, "ConfigAdmin");
        console.log(response.blob);

        const url = URL.createObjectURL(response.blob);
        const a = document.createElement("a");
        a.href = url;
        // ⭐ MEJORA: Usar el nombre de archivo dinámico
        a.download = response.nombreArchivo || "Backup_Declaracion.zip";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } else {
        showToast(response.mensaje || "⚠️ No se pudo generar el backup", "warning", 4000, "ConfigAdmin");
      }
    } catch (err) {
      console.error("❌ generarBackup error:", err);
      showToast("❌ Error al generar el backup", "danger", 4000, "ConfigAdmin");
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
        reinicializarSistemaForzado,
        generarBackup,
      }}
    >
      {children}
    </ConfigAdminContext.Provider>
  );
};

export const useConfigAdmin = () => useContext(ConfigAdminContext);
