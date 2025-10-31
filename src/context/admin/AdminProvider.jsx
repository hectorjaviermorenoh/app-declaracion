
import React from "react";
import { LogsAdminProvider } from "./LogsAdminContext";
import { UsuariosAdminProvider } from "./UsuariosAdminContext";
import { ConfigAdminProvider } from "./ConfigAdminContext";
import { RolesAdminProvider } from "./RolesAdminContext";


export function AdminProvider({ children }) {
  return (
    <LogsAdminProvider>
      <UsuariosAdminProvider>
        <ConfigAdminProvider>
          <RolesAdminProvider>
            {children}
          </RolesAdminProvider>
        </ConfigAdminProvider>
      </UsuariosAdminProvider>
    </LogsAdminProvider>
  );
}