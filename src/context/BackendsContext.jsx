import React, { createContext, useContext, useState, useEffect } from "react";
import { setBackendURLGlobal } from "./backendURLGlobal"; // ⬅ importante

const STORAGE_KEY = "backends_config";

const BackendsContext = createContext();

export function BackendsProvider({ children }) {
  const [backends, setBackends] = useState([]);
  const [activeBackend, setActiveBackend] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setBackends(parsed.backends || []);
        setActiveBackend(parsed.active || null);
      } catch (err) {
        console.error("⚠️ Error parseando backends_config", err);
      }
    }
    setIsLoaded(true);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ backends, active: activeBackend })
    );
  }, [backends, activeBackend, isLoaded]);

  // 🔥 actualizar apiClient.js
  useEffect(() => {
    if (activeBackend?.url) {
      setBackendURLGlobal(activeBackend.url);
    }
  }, [activeBackend]);

  const addBackend = (alias, url, avatar = null) => {
    if (!alias?.trim() || !url?.trim()) {
      throw new Error("Alias y URL son obligatorios");
    }

    if (backends.some((b) => b.alias === alias.trim())) {
      throw new Error(`Ya existe un backend con alias "${alias}"`);
    }

    const newBackend = {
      id: crypto.randomUUID(),
      alias: alias.trim(),
      // url: url.trim().charAt(0).toLowerCase() + url.trim().slice(1),
      url: url.trim().charAt(0).toLowerCase() + url.trim().slice(1),
      avatar,
    };

    setBackends((prev) => [...prev, newBackend]);
    if (!activeBackend) setActiveBackend(newBackend);
  };

  const deleteBackend = (alias) => {
    setBackends((prev) => prev.filter((b) => b.alias !== alias));
    if (activeBackend?.alias === alias) setActiveBackend(null);
  };

  // const setActiveByAlias = (alias) => {
  //   const backend = backends.find((b) => b.alias === alias);
  //   if (backend) setActiveBackend(backend);
  // };

  // const setActiveByAlias = (alias) => {
  //   const backend = backends.find((b) => b.alias === alias);

  //   if (backend && activeBackend?.alias !== backend.alias) {
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("user");

  //     setActiveBackend(backend);

  //     // En lugar de navigate + reload, puedes forzar la carga en la raíz:
  //     window.location.href = window.location.origin + window.location.pathname;

  //   }
  // };

  const setActiveByAlias = (alias) => {
    const backend = backends.find((b) => b.alias === alias);

    if (backend && activeBackend?.alias !== backend.alias) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // 2. Actualizar el backend de forma inmediata en el objeto de persistencia
      // Esto asegura que aunque el estado de React no termine de cambiar, el storage ya tiene la info
      const updatedConfig = { backends, active: backend };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedConfig));



      setActiveBackend(backend);

      setTimeout(() => {
        window.location.replace(window.location.origin + window.location.pathname);
      }, 100);

      // En lugar de navigate + reload, puedes forzar la carga en la raíz:
      // window.location.href = window.location.origin + window.location.pathname;

    }
  };

  // const setActiveByAlias = (alias) => {
  //   const backend = backends.find((b) => b.alias === alias);

  //   if (backend && activeBackend?.alias !== backend.alias) {
  //     // 1. Limpiar sesión
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("user");

  //     // 2. Actualizar el backend de forma inmediata en el objeto de persistencia
  //     // Esto asegura que aunque el estado de React no termine de cambiar, el storage ya tiene la info
  //     const updatedConfig = { backends, active: backend };
  //     localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedConfig));

  //     // 3. Pequeña pausa (delay) para que el SO del celular confirme la escritura
  //     // y luego forzar la limpieza de caché de la URL
  //     setTimeout(() => {
  //       window.location.replace(window.location.origin + window.location.pathname);
  //     }, 100);
  //   }
  // };

  return (
    <BackendsContext.Provider
      value={{
        backends,
        activeBackend,
        addBackend,
        deleteBackend,
        setActiveBackend: setActiveByAlias,
        loading,
      }}
    >
      {children}
    </BackendsContext.Provider>
  );
}

export function useBackends() {
  return useContext(BackendsContext);
}
