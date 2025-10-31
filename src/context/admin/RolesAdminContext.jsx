import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useBackends } from "../BackendsContext";
import { apiGet, apiPost } from "../../utils/apiClient.js";
import { useToast } from "../ToastContext";

const RolesAdminContext = createContext();

export const RolesAdminProvider = ({ children }) => {
  const { activeBackend } = useBackends();
  const backendUrl = activeBackend?.url || null;
  const { showToast } = useToast();

  const [roles, setRoles] = useState([]);
  const [funcionesDisponibles, setFuncionesDisponibles] = useState([]);
  const [loading, setLoading] = useState(false);

  /*******************************
   * 📘 Obtener funciones del backend
   *******************************/
  const getFunciones = useCallback(async () => {
    if (!backendUrl) return;
    try {
      const res = await apiGet(backendUrl, "getFuncionesLogicaNegocio");
      if (res.status === "ok") {
        setFuncionesDisponibles(res.datos || []);
      } else {
        showToast(res.mensaje || "❌ Error al obtener funciones", "warning", 4000, "RolesAdmin");
      }
    } catch (err) {
      console.error("❌ Error al Cargar Funciones", err);
      showToast("❌ Error al Cargar Funciones", "danger", 4000, "RolesAdmin");
    }
  }, [backendUrl, showToast]);

  const getDatos = useCallback(async () => {
    if (!backendUrl) return;
    setLoading(true);
    try {
      const res = await apiGet(backendUrl, "getRoles");
      if (res.status === "ok") {
        setRoles(res.data || []);
        showToast("📜 Roles cargados correctamente", "info", 2000, "RolesAdmin");
      } else {
        showToast(res.mensaje || "❌ Error al Cargar roles", "warning", 4000, "RolesAdmin");
      }
    } catch (err) {
      console.error("❌ getRoles error:", err);
      showToast("❌ Error al Cargar roles", "danger", 4000, "RolesAdmin");
    } finally {
      setLoading(false);
    }
  }, [backendUrl, showToast]);




  const addDato = async (nuevoRol, permisosSeleccionados) => {
    if (!backendUrl) return;
    if (!nuevoRol) return showToast("⚠️ Debe ingresar un nombre para el rol", "warning", 4000, "AdminRoles");
    setLoading(true);
    try {
      const payload = {
        // accion: "addRol",
        rol: nuevoRol,
        permisos: permisosSeleccionados || [],
      };
      const res = await apiPost(backendUrl, "addRol", payload)
      if (res.status === "ok") {
        showToast("👋 Rol creado correctamente", "success", 2000, "RolesAdmin");
        setRoles(res.datos || []);
      } else {
        showToast(res.mensaje || "❌ Error al crear el rol", "warning", 4000, "RolesAdmin");
      }
    } catch (err) {
      console.error("❌ addRol error:", err);
      showToast("❌ Error al crear el rol", "danger", 4000, "RolesAdmin");
    } finally {
    setLoading(false);
    }
  };


  const updateDato = async (rol, permisosActualizados) => {
    if (!backendUrl) return;
    setLoading(true);

    try {
      const payload = {
        rol,
        permisos: permisosActualizados,
      };
      const res = await apiPost(backendUrl, "updateRol", payload)
      if (res.status === "ok") {
        showToast("👋 Rol actualizado correctamente", "success", 2000, "RolesAdmin");
        setRoles(res.datos || []);
      } else {
        showToast(res.mensaje || "❌ Error al actualizar el rol", "warning", 4000, "RolesAdmin");
      }
    } catch (err) {
      console.error("❌ updateRol error:", err);
      showToast("❌ Error al actualizar el rol", "danger", 4000, "RolesAdmin");
    } finally {
      setLoading(false);
    }
  };

  const deleteDato = async (rol) => {
    if (!backendUrl) return;
    setLoading(true);

    if (rol === "administrador") {
      return showToast("⚠️ No se puede eliminar el rol administrador", "warning", 4000, "RolesAdmin");
    }

    try {
      const payload = { rol };
      const res = await apiPost(backendUrl, "deleteRol", payload)
      if (res.status === "ok") {
        showToast("👋 Rol eliminado Correctamente", "success", 4000, "RolesAdmin");
        setRoles(res.datos || []);
      } else {
        console.log("❌ Error al eliminar el rol", res.mensaje);
        showToast(res.mensaje || "❌ Error al eliminar el rol", "warning", 4000, "RolesAdmin");
      }
    } catch (err) {
      console.error("❌ deleteRol HJM error:", err);
      showToast(`❌ Error al eliminar el rol: ${err?.message || err.toString()}`, "danger", 8000, "RolesAdmin"
  );
    } finally {
      setLoading(false);
    }
  };

  /*******************************
   * 🔄 Cargar funciones al inicio
   *******************************/
  useEffect(() => {
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
