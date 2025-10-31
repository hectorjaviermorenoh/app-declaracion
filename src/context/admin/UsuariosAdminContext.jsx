import React, { createContext, useContext, useState, useCallback } from "react";
import { useBackends } from "../BackendsContext";
import { apiGet, apiPost } from "../../utils/apiClient";
import { useToast } from "../ToastContext";

// Crear el contexto
const UsuariosAdminContext = createContext(null);

// Provider principal
export function UsuariosAdminProvider({ children }) {

  const { activeBackend } = useBackends();
  const backendUrl = activeBackend?.url || null;

  const { showToast } = useToast();

  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 GET: Obtener lista de usuarios
  const getUsuarios = useCallback(async () => {
    if (!backendUrl?.url) {
      console.warn("⚠️ No hay backend activo configurado.");
      return [];
    }

    setLoading(true);
    try {
      const data = await apiGet(backendUrl.url, "getUsuarios");
      if (data.status === "ok") {
        setUsuarios(data.data || []);
        showToast("👥 Usuarios cargados correctamente", "info", 2000, "UsuariosAdmin");
        return data.data;
      } else {
        showToast("❌ Error obteniendo usuarios", "danger", 4000, "UsuariosAdmin");
        return [];
      }
    } catch (err) {
      console.error("❌ fetchUsuarios error:", err);
      showToast("⚠️ Error al cargar usuarios", "danger", 4000, "UsuariosAdmin");
      return [];
    } finally {
      setLoading(false);
    }
  }, [backendUrl, showToast]);

  // 🔹 POST: Agregar usuario
  const addUsuario = useCallback(async (usuario) => {
    if (!backendUrl?.url) return;
    setLoading(true);
    try {
      const payload = { accion: "addUsuario", usuario };
      const data = await apiPost(backendUrl.url, "addUsuario", payload);

      if (data.status === "ok") {
        showToast("✅ Usuario agregado correctamente", "success", 3000, "UsuariosAdmin");
        await getUsuarios();
        return true;
      } else {
        showToast(data.mensaje || "⚠️ No se pudo agregar usuario", "warning", 4000, "UsuariosAdmin");
        return false;
      }
    } catch (err) {
      console.error("❌ addUsuario error:", err);
      showToast("⚠️ Error agregando usuario", "danger", 4000, "UsuariosAdmin");
      return false;
    } finally {
      setLoading(false);
    }
  }, [backendUrl, getUsuarios, showToast]);

  // 🔹 POST: Eliminar usuario
  const deleteUsuario = useCallback(async (correo, correoEjecutor) => {
    if (!backendUrl?.url) return;
    setLoading(true);
    try {
      const payload = { accion: "deleteUsuario", correo, correoEjecutor };
      const data = await apiPost(backendUrl.url, "deleteUsuario", payload);

      if (data.status === "ok") {
        showToast(`🗑️ Usuario ${correo} eliminado`, "success", 3000, "UsuariosAdmin");
        await fetchUsuarios();
        return true;
      } else {
        showToast(data.mensaje || "⚠️ No se pudo eliminar usuario", "warning", 4000, "UsuariosAdmin");
        return false;
      }
    } catch (err) {
      console.error("❌ deleteUsuario error:", err);
      showToast("⚠️ Error eliminando usuario", "danger", 4000, "UsuariosAdmin");
      return false;
    } finally {
      setLoading(false);
    }
  }, [backendUrl, getUsuarios, showToast]);

  // 🔹 POST: Actualizar usuario
  const updateUsuario = useCallback(async (correo, correoEjecutor) => {
    if (!backendUrl?.url) return;
    setLoading(true);
    try {
      const payload = { accion: "deleteUsuario", correo, correoEjecutor };
      const data = await apiPost(backendUrl.url, "deleteUsuario", payload);

      if (data.status === "ok") {
        showToast(`🗑️ Usuario ${correo} eliminado`, "success", 3000, "UsuariosAdmin");
        await fetchUsuarios();
        return true;
      } else {
        showToast(data.mensaje || "⚠️ No se pudo eliminar usuario", "warning", 4000, "UsuariosAdmin");
        return false;
      }
    } catch (err) {
      console.error("❌ deleteUsuario error:", err);
      showToast("⚠️ Error eliminando usuario", "danger", 4000, "UsuariosAdmin");
      return false;
    } finally {
      setLoading(false);
    }
  }, [backendUrl, getUsuarios, showToast]);

  // Valor expuesto
  return (
    <UsuariosAdminContext.Provider
      value={{
        usuarios,
        loading,
        getUsuarios,
        addUsuario,
        deleteUsuario,
        updateUsuario
      }}
    >
      {children}
    </UsuariosAdminContext.Provider>
  );
}

// Hook personalizado
export function useUsuariosAdmin() {
  const ctx = useContext(UsuariosAdminContext);
  if (!ctx) {
    throw new Error("useUsuariosAdmin debe usarse dentro de <UsuariosAdminProvider>");
  }
  return ctx;
}
