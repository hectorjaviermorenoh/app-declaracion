// src/context/admin/ConfigAdminContext.jsx
import React, { createContext, useContext, useCallback, useState } from "react";
import { useBackends } from "../BackendsContext";
import { apiPost } from "../../utils/apiClient";

const ConfigAdminContext = createContext(null);

export function ConfigAdminProvider({ children }) {
  const { activeBackend } = useBackends();
  const backendUrl = activeBackend?.url || null;
  const [loading, setLoading] = useState(false);

  const reinicializarSistemaForzado = useCallback(async (confirmar, borrarCarpetas) => {
    if (!backendUrl) return { ok: false, mensaje: "⚠️ Configure URL del backend" };

    setLoading(true);
    try {
      const data = await apiPost(backendUrl, "inicializarForzado", {
        confirmar,
        borrarCarpetas,
      });

      if (data.status === "ok") {
        return { ok: true, mensaje: "✅ Sistema reinicializado correctamente", data };
      }

      return { ok: false, mensaje: data.mensaje || "❌ Error al reinicializar sistema", data };
    } catch (e) {
      console.error("❌ reinicializarSistemaForzado:", e.message);
      return { ok: false, mensaje: "❌ Error al reinicializar sistema" };
    } finally {
      setLoading(false);
    }
  }, [backendUrl]);

  return (
    <ConfigAdminContext.Provider
      value={{
        reinicializarSistemaForzado,
        loading,
      }}
    >
      {children}
    </ConfigAdminContext.Provider>
  );
}

export function useConfigAdmin() {
  return useContext(ConfigAdminContext);
}
