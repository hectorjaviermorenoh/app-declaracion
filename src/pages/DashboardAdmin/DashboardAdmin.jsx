import React, { useState } from "react";
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import UsuariosAdminPanel from "./UsuariosAdminPanel";
import RolesAdminPanel from "./RolesAdminPanel";
import { LogsAdminPanel } from "./LogsAdminPanel";
import { ConfigAdminPanel } from "./ConfigAdminPanel";
import { AdminProvider } from "../../context/admin/AdminProvider";

export function DashboardAdmin() {
  const [activeTab, setActiveTab] = useState("usuarios");

  return (
    <AdminProvider>
      <Container fluid className="p-3">
        <Row>
          <Col>
            <h3 className="mb-4 text-center fw-bold">⚙️ Panel de Administración</h3>
          </Col>
        </Row>

        <Row>
          <Col>
            <Tabs
              activeKey={activeTab}
              onSelect={(key) => setActiveTab(key)}
              id="admin-tabs"
              className="mb-3"
              justify
            >
              <Tab eventKey="usuarios" title="👥 Usuarios" />
              <Tab eventKey="roles" title="🧩 Roles" />
              <Tab eventKey="config" title="⚙️ Configuración" />
              <Tab eventKey="logs" title="📜 Logs" />
            </Tabs>

            {activeTab === "usuarios" && <UsuariosAdminPanel />}
            {activeTab === "roles" && <RolesAdminPanel />}
            {activeTab === "config" && <ConfigAdminPanel />}
            {activeTab === "logs" && <LogsAdminPanel />}
          </Col>
        </Row>
      </Container>
    </AdminProvider>
  );
}
