// src/context/admin/RolesAdminContext.jsx
import React, { createContext, useContext, useState } from "react";

// 1️⃣ Crear el contexto
const RolesAdminContext = createContext(null);

// 2️⃣ Provider
export function RolesAdminProvider({ children }) {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Función para obtener roles (placeholder)
  const fetchRoles = async () => {
    console.log("fetchRoles() aún no implementado");
  };

  // 🔹 Función para agregar un rol (placeholder)
  const addRole = async (roleData) => {
    console.log("addRole() aún no implementado", roleData);
  };

  // 🔹 Función para eliminar un rol (placeholder)
  const deleteRole = async (roleId) => {
    console.log("deleteRole() aún no implementado", roleId);
  };

  return (
    <RolesAdminContext.Provider
      value={{
        roles,
        loading,
        fetchRoles,
        addRole,
        deleteRole,
      }}
    >
      {children}
    </RolesAdminContext.Provider>
  );
}

// 3️⃣ Hook personalizado
export function useRolesAdmin() {
  const ctx = useContext(RolesAdminContext);
  if (!ctx) {
    throw new Error("useRolesAdmin debe usarse dentro de <RolesAdminProvider>");
  }
  return ctx;
}
