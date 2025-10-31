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
      // const res = await apiGet(`${backendUrl}?accion=getFuncionesLogicaNegocio`);
      const res = await apiGet(backendUrl, "getFuncionesLogicaNegocio");
      if (res.status === "ok") {
        setFuncionesDisponibles(res.datos || []);
      } else {
        showToast("error", res.mensaje || "Error al obtener funciones");
      }
    } catch (err) {
      showToast("error", "Error al cargar funciones del backend");
      console.error("❌ getFunciones error:", err);
    }
  }, [backendUrl, showToast]);

  const getDatos = useCallback(async () => {
    if (!backendUrl) return;
    setLoading(true);
    try {
      // const res = await apiGet(`${backendUrl}?accion=getRoles`);
      const res = await apiGet(backendUrl, "getRoles");

      if (res.status === "ok") {
        setRoles(res.data || []);
        showToast("📜 Roles cargados correctamente", "info", 2000, "RolesAdmin");
      } else {
        showToast("error", res.mensaje || "Error al obtener roles");
      }
    } catch (err) {
      console.error("❌ getRoles error:", err);
      showToast("error", "Error al obtener roles");
    } finally {
      setLoading(false);
    }
  }, [backendUrl, showToast]);




  const addDato = async (nuevoRol, permisosSeleccionados) => {
    if (!backendUrl) return;
    if (!nuevoRol) return showToast("error", "Debe ingresar un nombre para el rol");

    try {
      const payload = {
        accion: "addRol",
        rol: nuevoRol,
        permisos: permisosSeleccionados || [],
      };
      const res = await apiPost(backendUrl, "addRol", payload)
      if (res.status === "ok") {
        showToast("success", "Rol creado correctamente");
        setRoles(res.datos || []);

      } else {
        showToast("error", res.mensaje || "Error al crear el rol");
      }
    } catch (err) {
      console.error("❌ addRol error:", err);
      showToast("error", "Error al crear rol");
    }
  };


  const updateDato = async (rol, permisosActualizados) => {
    if (!backendUrl) return;

    try {
      const payload = {
        rol,
        permisos: permisosActualizados,
      };
      const res = await apiPost(backendUrl, "updateRol", payload)
      if (res.status === "ok") {
        showToast("success", "Permisos actualizados correctamente");
        setRoles(res.datos || []);
      } else {
        showToast("error", res.mensaje || "Error al actualizar el rol");
      }
    } catch (err) {
      console.error("❌ updateRol error:", err);
      showToast("error", "Error al actualizar el rol");
    }
  };

  const deleteDato = async (rol) => {
    if (!backendUrl) return;

    if (rol === "administrador") {
      return showToast("No se puede eliminar el rol administrador", "warning", 4000, "RolesContext");
    }

    try {
      const payload = { rol };
      const res = await apiPost(backendUrl, "deleteRol", payload)
      if (res.status === "ok") {
        showToast("Rol eliminado Correctamente", "success", 4000, "RolesContext");
        setRoles(res.datos || []);
      } else {
        showToast(res.mensaje || "Error al eliminar el rol", "warning", 4000, "RolesContext");
      }
    } catch (err) {
      console.error("❌ deleteRol error:", err);
      showToast("error", "Error al eliminar el rol");
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
