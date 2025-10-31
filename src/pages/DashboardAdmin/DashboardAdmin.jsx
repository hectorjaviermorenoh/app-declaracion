import React from "react";
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import { UsuariosAdminPanel } from "./UsuariosAdminPanel";
import RolesAdminPanel from "./RolesAdminPanel";
import { LogsAdminPanel }  from "./LogsAdminPanel";
import { ConfigAdminPanel } from "./ConfigAdminPanel";
import { AdminProvider } from "../../context/admin/AdminProvider";


export function DashboardAdmin() {
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
              defaultActiveKey="usuarios"
              id="admin-tabs"
              className="mb-3"
              justify
            >
              <Tab eventKey="usuarios" title="👥 Usuarios">
                <UsuariosAdminPanel />
              </Tab>

              <Tab eventKey="roles" title="🧩 Roles">
                <RolesAdminPanel />
              </Tab>

              <Tab eventKey="config" title="⚙️ Configuración">
                <ConfigAdminPanel />
              </Tab>

              <Tab eventKey="logs" title="⚙️ Logs">
                <LogsAdminPanel />
              </Tab>


            </Tabs>
          </Col>
        </Row>
      </Container>
    </AdminProvider>
  );
}
