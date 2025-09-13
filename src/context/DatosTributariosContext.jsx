import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useBackends } from "./BackendsContext";
import { useToast } from "../context/ToastContext";

// Crear contexto
const DatosTributariosContext = createContext(null);

export function DatosTributariosProvider({ children }) {
  const { activeBackend } = useBackends();
  const [datos, setDatos] = useState([]);

  const [loading, setLoading] = useState(false); // 🔹 nuevo estado global de loading

  const { showToast } = useToast();


  // 🔹 Cargar datos tributarios
  const fetchDatos = useCallback(async () => {
    if (!activeBackend?.url) return;
    setLoading(true);

    try {
      const resp = await fetch(`${activeBackend.url}?accion=getDatosTributarios`);
      const data = await resp.json();
      if (data.status === "ok") {
        setDatos(data.data || []);
      } else {
        console.error("⚠️ Error obteniendo datos tributarios:", data);
      }
    } catch (err) {
      console.error("❌ fetchDatos error:", err);
    } finally {
      setLoading(false);
    }
  }, [activeBackend]);


  useEffect(() => {
    fetchDatos();
  }, [fetchDatos]);

  // 🔹 Adicionar
  const addDato = async ({ label, valor }) => {
    if (!activeBackend?.url) return;
    setLoading(true);
    console.log("label", label)
    try {
      const payload = {
        accion: "addDatoTributario",
        id: label.toLowerCase().replace(/\s+/g, "_"), // id auto-generado simple
        label,
        valor,
      };

      const resp = await fetch(activeBackend.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await resp.json();
      if (data.status === "ok") {
        await fetchDatos();
        showToast("✅ Guardados correctamente", "success", 3000, "DatosTributarios");
      } else {
        showToast("❌ Error al guardar", "danger", 4000, "DatosTributarios");
      }
      return data;
    } catch (err) {
      console.error("❌ addDato error:", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Actualizar
  const updateDato = async (id, { valor, label }) => {
    if (!activeBackend?.url) return;
    setLoading(true);
    try {
      const payload = {
        accion: "updateDatoTributario",
        id,
        valor,
      };
      if (label) payload.label = label;

      const resp = await fetch(activeBackend.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await resp.json();
      if (data.status === "ok") {
        await fetchDatos();
        showToast("✅ Actualizado correctamente", "success", 3000, "DatosTributarios");
      } else {
        showToast("❌ Error al modificar", "danger", 4000, "DatosTributarios");
      }
      return data;
    } catch (err) {
      console.error("❌ updateDato error:", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Eliminar
  const deleteDato = async (id) => {
    if (!activeBackend?.url) return;
    setLoading(true);
    try {
      const payload = {
        accion: "deleteDatoTributario",
        id,
      };

      const resp = await fetch(activeBackend.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await resp.json();
      if (data.status === "ok") {
        await fetchDatos();
        showToast("✅ Eliminado correctamente", "success", 3000, "DatosTributarios");
      } else {
        showToast("❌ Error al Eliminar", "danger", 4000, "DatosTributarios");
      }
      return data;
    } catch (err) {
      console.error("❌ deleteDato error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DatosTributariosContext.Provider
      value={{
        datos,
        loading,
        fetchDatos,
        addDato,
        updateDato,
        deleteDato,
      }}
    >
      {children}
    </DatosTributariosContext.Provider>
  );
}

// Hook para usar el contexto
export function useDatosTributarios() {
  const ctx = useContext(DatosTributariosContext);
  if (!ctx) throw new Error("useDatosTributarios debe usarse dentro de <DatosTributariosProvider>");
  return ctx;
}
