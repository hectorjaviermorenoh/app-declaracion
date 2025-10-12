// src/context/admin/ConfigAdminContext.jsx
import React, { createContext, useContext, useState } from "react";

const ConfigAdminContext = createContext(null);

export function ConfigAdminProvider({ children }) {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔹 placeholder: lo implementaremos luego
  const fetchConfig = async () => {
    console.log("fetchConfig() aún no implementado");
  };

  const updateConfig = async (newConfig) => {
    console.log("updateConfig() aún no implementado", newConfig);
  };

  return (
    <ConfigAdminContext.Provider
      value={{
        config,
        loading,
        fetchConfig,
        updateConfig,
      }}
    >
      {children}
    </ConfigAdminContext.Provider>
  );
}

export function useConfigAdmin() {
  const ctx = useContext(ConfigAdminContext);
  if (!ctx) {
    throw new Error("useConfigAdmin debe usarse dentro de <ConfigAdminProvider>");
  }
  return ctx;
}
