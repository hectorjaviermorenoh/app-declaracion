import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { apiGet, apiPost, getAuthToken } from "../utils/apiClient.js";
import { useToast } from "../context/ToastContext";

const DatosTributariosContext = createContext(null);

export function DatosTributariosProvider({ children }) {
  const { showToast } = useToast();

  const [datos, setDatos] = useState([]);          // Estado de trabajo (el que se renderiza)
  const [originales, setOriginales] = useState([]); // Estado de referencia (servidor)
  const [loading, setLoading] = useState(false);

  /**
   * Carga inicial de datos desde el Backend
   */
  const getDatos = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiGet("obtenerDatosTributarios");
      if (data.status === "ok") {
        // Ordenamos por el campo 'orden' antes de guardar
        const sortedData = (data.data || []).sort((a, b) => a.orden - b.orden);

        setDatos(sortedData);
        // Guardamos una copia profunda para comparar después
        setOriginales(JSON.parse(JSON.stringify(sortedData)));

        return { ok: true };
      }
      showToast(data.mensaje || "Error al obtener datos", "error");

      return { ok: false };
    } catch (err) {
      console.error("❌ obtenerDatosTributarios error:", err);
      showToast("Error de conexión al cargar datos", "error");
      return { ok: false };
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  /**
   * Guarda todo el array actual en el servidor de una sola vez
   */
  const saveChanges = useCallback(async () => {
    setLoading(true);
    try {
      // Enviamos un objeto que contiene el array, esto es más compatible con apiPost
      const res = await apiPost("actualizarDatosTributarios", { data: datos });

      if (res.status === "ok") {
        setOriginales(JSON.parse(JSON.stringify(datos)));
        showToast("✅ Todos los cambios han sido guardados", "success");
        return { ok: true };
      } else {
        showToast("❌ " + res.mensaje, "error");
        return { ok: false };
      }
    } catch (err) {
      showToast("❌ Error al sincronizar con el servidor", "error");
      return { ok: false };
    } finally {
      setLoading(false);
    }
  }, [datos, showToast]);

  /**
   * Cancela los cambios locales y vuelve al estado original del servidor
   */
  const discardChanges = useCallback(() => {
    setDatos(JSON.parse(JSON.stringify(originales)));
    showToast("Cambios descartados", "info");
  }, [originales, showToast]);

  /**
   * Determina si el estado actual es diferente al original (detecta cambios)
   */
  const isDirty = useMemo(() => {
    return JSON.stringify(datos) !== JSON.stringify(originales);
  }, [datos, originales]);

  // Efecto para carga inicial automática si hay token
  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      getDatos();
    }
  }, [getDatos]);

  /**
   * Calcula el número de registros marcados como importantes
   */
  const conteoImportantes = useMemo(() => {
    return datos.filter(d => d.importante === true || d.importante === 1).length;
  }, [datos]);

  return (
    <DatosTributariosContext.Provider
      value={{
        datos,
        setDatos,      // La vista usará setDatos para manipular el array localmente
        loading,
        getDatos,
        saveChanges,
        discardChanges,
        isDirty,       // Útil para habilitar/deshabilitar el botón de guardar
        conteoImportantes,
      }}
    >
      {children}
    </DatosTributariosContext.Provider>
  );
}

export const useDatosTributarios = () => {
  const context = useContext(DatosTributariosContext);
  if (!context) {
    throw new Error("useDatosTributarios debe usarse dentro de DatosTributariosProvider");
  }
  return context;
};