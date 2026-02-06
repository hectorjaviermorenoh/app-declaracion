import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { apiGet, apiPost, getAuthToken } from "../../utils/apiClient.js";
import { useToast } from "../ToastContext";


const RolesAdminContext = createContext();

export const RolesAdminProvider = ({ children }) => {
  const { showToast } = useToast();

  const [roles, setRoles] = useState([]);
  const [funcionesDisponibles, setFuncionesDisponibles] = useState([]);
  const [loading, setLoading] = useState(false);

  /*******************************
   * 📘 Obtener funciones del backend
   *******************************/
  const getFunciones = useCallback(async () => {

    try {
      const response = await apiGet("listarFuncionesLogicaNegocio");
      if (response.status === "ok") {
        setFuncionesDisponibles(response.datos || []);
      }
    } catch (err) {
      console.error("❌ Error al Cargar Funciones", err);
      showToast("❌ Error al Cargar Funciones", "danger", 4000, "RolesAdmin");
    }
  }, [showToast]);

  const getDatos = useCallback(async () => {
    setLoading(true);
    try {
      const response = await apiGet("obtenerRoles");
      if (response.status === "ok") {
        setRoles(response.data || []);
      } else {
        showToast(response.mensaje || "⚠️ No se pudieron cargar los roles.", "warning", 4000, "RolesAdmin");
      }
    } catch (err) {
      console.error("❌ obtenerRoles error:", err);
      showToast("❌ Error de conexión con el servidor al cargar roles.", "danger", 4000, "RolesAdmin");
    } finally {
      setLoading(false);
    }
  }, [showToast]);


  const addDato = async (nuevoRol, permisosSeleccionados) => {
    if (!nuevoRol) return showToast("⚠️ Debe ingresar un nombre para el rol", "warning", 4000, "AdminRoles");
    setLoading(true);
    try {
      const payload = {
        // accion: "agregarRol",
        rol: nuevoRol,
        permisos: permisosSeleccionados || [],
      };
      const response = await apiPost("agregarRol", payload)
      if (response.status === "ok") {
        showToast(response.mensaje || "✅ Rol creado correctamente.", "success", 2000, "RolesAdmin");
        setRoles(response.datos || []);
      } else {
        showToast(response.mensaje || "⚠️ No se pudo crear el rol.", "warning", 4000, "RolesAdmin");
      }
    } catch (err) {
      console.error("❌ agregarRol error:", err);
      showToast("❌ Error de conexión con el servidor al crear el rol.", "danger", 4000, "RolesAdmin");
    } finally {
    setLoading(false);
    }
  };

  const updateDato = async (rol, permisosActualizados) => {
    setLoading(true);

    try {
      const payload = {
        rol,
        permisos: permisosActualizados,
      };
      const response = await apiPost("actualizarRol", payload)
      if (response.status === "ok") {
        showToast(response.mensaje || `✅ Rol "${rol}" actualizado correctamente.`, "success", 2000, "RolesAdmin");
        setRoles(response.datos || []);
      } else {
        showToast(response.mensaje || `⚠️ No se pudo actualizar el rol "${rol}".`, "warning", 4000, "RolesAdmin");
      }
    } catch (err) {
      console.error("❌ actualizarRol error:", err);
      showToast(`❌ Error de conexión con el servidor al actualizar el rol "${rol}".`, "danger", 4000, "RolesAdmin");
    } finally {
      setLoading(false);
    }
  };

  const deleteDato = async (rol) => {
    setLoading(true);

    if (rol === "administrador") {
      return showToast("⚠️ No se puede eliminar el rol administrador", "warning", 4000, "RolesAdmin");
    }

    try {
            const payload = { rol };
      const response = await apiPost("eliminarRol", payload)
      if (response.status === "ok") {
        showToast(response.mensaje, "success", 3000, "RolesAdmin");
        setRoles(response.datos || []);
      } else {
        showToast(response.mensaje, "warning", 4000, "RolesAdmin");
      }

    } catch (err) {
      console.error("❌ eliminarRol error:", err);
      showToast(`❌ Error al eliminar el rol: ${err?.message || err.toString()}`, "danger", 8000, "RolesAdmin")

    } finally {
      setLoading(false);
    }

  }

  /*******************************
   * 🔄 Cargar funciones al inicio
   *******************************/
  useEffect(() => {

    // Si no hay token, no intentar cargar datos aquí (AuthContext ya maneja evento global)
    const token = getAuthToken();
    if (!token) return;

    getFunciones();
  }, [getFunciones]);


  return (
    <RolesAdminContext.Provider
      value={{
        roles,
        funcionesDisponibles,
        loading,
        getDatos,
        addDato,
        updateDato,
        deleteDato,
      }}
    >
      {children}
    </RolesAdminContext.Provider>
  );
};

export const useRolesAdmin = () => useContext(RolesAdminContext);
