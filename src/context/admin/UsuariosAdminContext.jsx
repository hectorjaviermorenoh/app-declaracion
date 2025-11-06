import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useBackends } from "../BackendsContext";
import { apiGet, apiPost } from "../../utils/apiClient.js";
import { useToast } from "../ToastContext";

const UsuariosAdminContext = createContext();

export const UsuariosAdminProvider = ({ children }) => {
  const { activeBackend } = useBackends();
  const backendUrl = activeBackend?.url || null;
  const { showToast } = useToast();

  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [rolesDisponibles, setRolesDisponibles] = useState([]);

  /*******************************
   * 📘 Obtener roles disponibles
   *******************************/
  const getRoles = useCallback(async () => {
    if (!backendUrl) return;
    try {
      const response = await apiGet(backendUrl, "getRoles");
      if (response.status === "ok") {
        setRolesDisponibles(response.data || []);
      } else {
        showToast(response.mensaje || "⚠️ No se pudieron cargar los roles.", "warning", 4000, "UsuariosAdmin");
      }
    } catch (err) {
      console.error("❌ Error al cargar roles:", err);
      showToast("❌ Error de conexión al obtener roles.", "danger", 4000, "UsuariosAdmin");
    }
  }, [backendUrl, showToast]);

  /*******************************
   * 📋 Obtener lista de usuarios
   *******************************/
  const getDatos = useCallback(async () => {
    if (!backendUrl) return;
    setLoading(true);
    try {
      const response = await apiGet(backendUrl, "getUsuarios");
      if (response.status === "ok") {
        setUsuarios(response.datos || []);
        showToast(response.mensaje || "📜 Usuarios cargados correctamente.", "info", 2000, "UsuariosAdmin");
      } else {
        showToast(response.mensaje || "⚠️ No se pudieron cargar los usuarios.", "warning", 4000, "UsuariosAdmin");
      }
    } catch (err) {
      console.error("❌ getUsuarios error:", err);
      showToast("❌ Error de conexión al cargar usuarios.", "danger", 4000, "UsuariosAdmin");
    } finally {
      setLoading(false);
    }
  }, [backendUrl, showToast]);

  /*******************************
   * ➕ Crear nuevo usuario
   *******************************/
  const addDato = async (nuevoUsuario) => {
    if (!backendUrl) return;
    if (!nuevoUsuario?.correo || !nuevoUsuario?.nombre || !nuevoUsuario?.rol) {
      return showToast("⚠️ Todos los campos son obligatorios (correo, nombre, rol).", "warning", 4000, "UsuariosAdmin");
    }

    setLoading(true);
    try {
      const payload = {
        correo: nuevoUsuario.correo,
        nombre: nuevoUsuario.nombre,
        rol: nuevoUsuario.rol,
      };

      const response = await apiPost(backendUrl, "addUsuario", payload);
      if (response.status === "ok") {
        setUsuarios(response.datos || []);
        showToast(response.mensaje || "✅ Usuario creado correctamente.", "success", 2000, "UsuariosAdmin");
      } else {
        showToast(response.mensaje || "⚠️ No se pudo crear el usuario.", "warning", 4000, "UsuariosAdmin");
      }
    } catch (err) {
      console.error("❌ addUsuario error:", err);
      showToast("❌ Error de conexión al crear usuario.", "danger", 4000, "UsuariosAdmin");
    } finally {
      setLoading(false);
    }
  };

  /*******************************
   * ✏️ Actualizar usuario
   *******************************/
  const updateDato = async (correo, datosActualizados) => {
    if (!backendUrl) return;
    setLoading(true);
    try {
      const payload = { correo, ...datosActualizados };
      const response = await apiPost(backendUrl, "updateUsuario", payload);

      if (response.status === "ok") {
        setUsuarios(response.datos || []);
        showToast(response.mensaje || `✅ Usuario "${correo}" actualizado correctamente.`, "success", 2000, "UsuariosAdmin");
      } else {
        showToast(response.mensaje || `⚠️ No se pudo actualizar el usuario "${correo}".`, "warning", 4000, "UsuariosAdmin");
      }
    } catch (err) {
      console.error("❌ updateUsuario error:", err);
      showToast(`❌ Error de conexión al actualizar usuario "${correo}".`, "danger", 4000, "UsuariosAdmin");
    } finally {
      setLoading(false);
    }
  };

  /*******************************
   * 🔄 Activar / Desactivar usuario
   *******************************/
  const toggleActivo = async (correo, activo) => {
    if (!backendUrl) return;
    setLoading(true);
    try {
      const payload = { correo, activo };
      const response = await apiPost(backendUrl, "toggleUsuarioActivo", payload);
      if (response.status === "ok") {
        setUsuarios(response.datos || []);
        showToast(response.mensaje || `🔁 Estado de "${correo}" actualizado.`, "success", 2000, "UsuariosAdmin");
      } else {
        showToast(response.mensaje || `⚠️ No se pudo cambiar el estado de "${correo}".`, "warning", 4000, "UsuariosAdmin");
      }
    } catch (err) {
      console.error("❌ toggleUsuarioActivo error:", err);
      showToast(`❌ Error al cambiar el estado de "${correo}".`, "danger", 4000, "UsuariosAdmin");
    } finally {
      setLoading(false);
    }
  };

  /*******************************
   * 🗑️ Eliminar usuario
   *******************************/
  const deleteDato = async (correo) => {
    if (!backendUrl) return;
    setLoading(true);
    try {
      const payload = { correo };
      const response = await apiPost(backendUrl, "deleteUsuario", payload);
      if (response.status === "ok") {
        setUsuarios(response.datos || []);
        showToast(response.mensaje || `🗑️ Usuario "${correo}" eliminado correctamente.`, "success", 3000, "UsuariosAdmin");
      } else {
        showToast(response.mensaje || `⚠️ No se pudo eliminar el usuario "${correo}".`, "warning", 4000, "UsuariosAdmin");
      }
    } catch (err) {
      console.error("❌ deleteUsuario error:", err);
      showToast(`❌ Error al eliminar el usuario "${correo}".`, "danger", 4000, "UsuariosAdmin");
    } finally {
      setLoading(false);
    }
  };

  /*******************************
   * 🔄 Cargar datos iniciales
   *******************************/
  useEffect(() => {
    getRoles();
    getDatos();
  }, [getRoles, getDatos]);

  return (
    <UsuariosAdminContext.Provider
      value={{
        usuarios,
        rolesDisponibles,
        loading,
        getDatos,
        addDato,
        updateDato,
        toggleActivo,
        deleteDato,
      }}
    >
      {children}
    </UsuariosAdminContext.Provider>
  );
};

export const useUsuariosAdmin = () => useContext(UsuariosAdminContext);
