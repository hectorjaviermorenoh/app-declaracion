import { useState } from "react";
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import AppsScriptTab from "./AppsScriptTab";
import WorkerTab from "./WorkerTab";

const BackendSetup = () => {

  const [activeTab, setActiveTab] = useState("appsScript");

  return (
      <Container fluid className="p-3">
        <Row>
          <Col>
            <h3 className="mb-4 text-center fw-bold">⚙️ Configuración Backend</h3>
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
              <Tab eventKey="appsScript" title="🧱 Apps Script" />
              <Tab eventKey="worker" title="🏰 Worker" />
            </Tabs>

            {activeTab === "appsScript" && <AppsScriptTab />}
            {activeTab === "worker" && <WorkerTab />}

          </Col>
        </Row>
      </Container>

  );
};

export default BackendSetup;