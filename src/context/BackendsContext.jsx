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
      url: url.trim(),
      avatar,
    };

    setBackends((prev) => [...prev, newBackend]);
    if (!activeBackend) setActiveBackend(newBackend);
  };

  const deleteBackend = (alias) => {
    setBackends((prev) => prev.filter((b) => b.alias !== alias));
    if (activeBackend?.alias === alias) setActiveBackend(null);
  };

  const setActiveByAlias = (alias) => {
    const backend = backends.find((b) => b.alias === alias);
    if (backend) setActiveBackend(backend);
  };

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
