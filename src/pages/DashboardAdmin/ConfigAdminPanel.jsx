import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup, Table, Spinner, Row, Col, NavDropdown, Dropdown, Modal } from "react-bootstrap";
import { useConfigAdmin } from "../../context/admin/ConfigAdminContext";
import ConfirmActionModal from "../../components/Modals/ConfirmActionModal/ConfirmActionModal";
import { usePermisos } from "../../hooks/usePermisos.js";
import NoPermiso from "../../components/NoPermiso/NoPermiso";
import { useToast } from "../../context/ToastContext";
import ReinitModal from "../../components/ReinitModal/ReinitModal";
import "./Styles/ConfigAdminPanel.scss";


export const ConfigAdminPanel = () => {
  const { config, getConfig, updateConfig, generarBackup, reinicializarSistemaForzado, loading } = useConfigAdmin();

  const [tamanoMax, setTamanoMax] = useState(10);
  const [tiposPermitidos, setTiposPermitidos] = useState([]);
  const [nuevoTipo, setNuevoTipo] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [tipoAEliminar, setTipoAEliminar] = useState("");

  const [showReinitModal, setShowReinitModal] = useState(false);
  const { showToast } = useToast();
  // const [show, setShow] = useState(false);

  const { puede } = usePermisos();
  const puedeVerConfig = puede("getConfig");

  const [loadingBackup, setLoadingBackup] = useState(false);
  const [loadingReinit, setLoadingReinit] = useState(false);
  const [loadingGuardar, setLoadingGuardar] = useState(false);

  /*******************************
   * 🔄 Cargar configuración
   *******************************/
  useEffect(() => {
    if(puedeVerConfig){
      getConfig();
    }
  }, [getConfig, puedeVerConfig]);

  /*******************************
   * 📦 Sincronizar datos al cargar config
   *******************************/
  useEffect(() => {
    if (config) {
      setTamanoMax(config.TAMANO_MAX_MB || 10);
      setTiposPermitidos(config.TIPOS_PERMITIDOS || []);
    }
  }, [config]);

  /*******************************
   * ➕ Agregar nueva extensión
   *******************************/
  const handleAgregarTipo = () => {
    const tipo = nuevoTipo.trim().toLowerCase();
    if (!tipo) return;
    if (tiposPermitidos.includes(tipo)) return alert("⚠️ Esa extensión ya está permitida.");

    setTiposPermitidos([...tiposPermitidos, tipo]);
    setNuevoTipo("");
  };

  /*******************************
   * 🗑️ Confirmar eliminación
   *******************************/
  const confirmarEliminarTipo = (tipo) => {
    setTipoAEliminar(tipo);
    setShowConfirmModal(true);
  };

  const handleEliminarTipo = () => {
    setTiposPermitidos(tiposPermitidos.filter((t) => t !== tipoAEliminar));
    setShowConfirmModal(false);
    setTipoAEliminar("");
  };

  /*******************************
   * 💾 Guardar configuración
   *******************************/
  // const handleGuardarConfig = async () => {
  //   const nuevaConfig = {
  //     CARPETA_PRINCIPAL: config.CARPETA_PRINCIPAL,
  //     TAMANO_MAX_MB: Number(tamanoMax),
  //     TIPOS_PERMITIDOS: tiposPermitidos,
  //   };
  //   await updateConfig(nuevaConfig);
  // };

  const handleGuardarConfig = async () => {
    setLoadingGuardar(true);
    try {
      await updateConfig({
        CARPETA_PRINCIPAL: config.CARPETA_PRINCIPAL,
        TAMANO_MAX_MB: Number(tamanoMax),
        TIPOS_PERMITIDOS: tiposPermitidos,
      });
    } finally {
      setLoadingGuardar(false);
    }
  };

  const handleBackup = async () => {
    setLoadingBackup(true);
    try {
      await generarBackup();
    } finally {
      setLoadingBackup(false);
    }
  };


  if (!puedeVerConfig) return <NoPermiso />;

  return (
    <div className="config-admin-page container py-3">

      <h3 className="fw-bold mb-4 text-primary">
        ⚙️ Administración de Configuración
      </h3>

      {/* Si no tiene permisos */}
      {!puedeVerConfig && <NoPermiso />}

      {!config ? (
        <div className="text-center py-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          {/* ===== Tarjeta 1: Configuración general ===== */}
          <div className="card shadow-sm p-3 mb-4">

            <h5 className="fw-bold mb-3">🔧 Configuración General</h5>

            <Row className="gy-3">
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold">📁 Carpeta Principal</Form.Label>
                  <Form.Control
                    type="text"
                    value={config.CARPETA_PRINCIPAL || ""}
                    readOnly
                    plaintext
                  />
                  <Form.Text muted>
                    Carpeta base en Google Drive.
                  </Form.Text>
                </Form.Group>
              </Col>

              <Col xs={12} md={4}>
                <Form.Group>
                  <Form.Label className="fw-semibold">📦 Tamaño máximo (MB)</Form.Label>
                  <Form.Control
                    type="number"
                    min={1}
                    max={500}
                    value={tamanoMax}
                    onChange={(e) => setTamanoMax(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={2} className="d-grid">
                <Button variant="primary" onClick={handleBackup} disabled={loadingBackup}>
                  {loadingBackup ? (
                    <>
                      <Spinner as="span" animation="border" size="sm" /> Generando...
                    </>
                  ) : (
                    "🗄️ Generar Backup"
                  )}
                </Button>

              </Col>

              <Col xs={12} md={3} className="d-grid">
                <Button variant="danger" onClick={() => setShowReinitModal(true)} disabled={loadingReinit}>
                  {loadingReinit ? (
                    <>
                      <Spinner as="span" animation="border" size="sm" /> Procesando...
                    </>
                  ) : (
                    "⚠️ Reinicializar Proyecto"
                  )}
                </Button>
              </Col>
            </Row>

          </div>

          {/* ===== Tarjeta 2: Tipos permitidos ===== */}
          <div className="card shadow-sm p-3 mb-4">

            <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
              <h5 className="fw-bold mb-2 mb-md-0">🧩 Tipos de archivo permitidos</h5>

              <InputGroup style={{ maxWidth: 260 }}>
                <Form.Control
                  type="text"
                  placeholder="Ej: pdf"
                  value={nuevoTipo}
                  onChange={(e) => setNuevoTipo(e.target.value)}
                />
                <Button onClick={handleAgregarTipo}>➕</Button>
              </InputGroup>
            </div>

            <Table bordered hover responsive className="small shadow-inner-sm">
              <thead className="table-light">
                <tr>
                  <th>Extensión</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {tiposPermitidos.map((tipo, idx) => (
                  <tr key={idx}>
                    <td className="fw-semibold">{tipo}</td>
                    <td className="text-center">
                      <Button
                        size="sm"
                        variant="outline-danger"
                        onClick={() => confirmarEliminarTipo(tipo)}
                      >
                        🗑️ Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}

                {tiposPermitidos.length === 0 && (
                  <tr>
                    <td colSpan={2} className="text-center text-muted py-3">
                      No hay extensiones configuradas.
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>

            <div className="text-end mt-3">
              <Button variant="success" onClick={handleGuardarConfig} disabled={loadingGuardar}>
                {loadingGuardar ? (
                  <>
                    <Spinner as="span" animation="border" size="sm" /> Guardando...
                  </>
                ) : (
                  "💾 Guardar Cambios"
                )}
              </Button>
            </div>

          </div>
        </>
      )}

      {/* === Modal Eliminar === */}
      <ConfirmActionModal
        show={showConfirmModal}
        onHide={() => setShowConfirmModal(false)}
        title="Eliminar tipo de archivo"
        message={
          <>¿Seguro que deseas eliminar <strong>{tipoAEliminar}</strong>?</>
        }
        confirmLabel="Eliminar"
        confirmVariant="danger"
        onConfirm={handleEliminarTipo}
      />

      {/* === Modal Reinicializar === */}
      <ReinitModal
        show={showReinitModal}
        onHide={() => setShowReinitModal(false)}
        // onConfirm={async (confirmText, borrarCarpetas) => {
        //   if (confirmText !== "INICIALIZAR") return;
        //   setShowReinitModal(false);

        //   try {
        //     const resp = await reinicializarSistemaForzado(confirmText, borrarCarpetas);
        //     showToast(resp.mensaje, resp.ok ? "success" : "danger", 3000);
        //   } finally {
        //       // setLoadingOverlay(false);
        //   }
        // }}
        onConfirm={async (confirmText, borrarCarpetas) => {
          if (confirmText !== "INICIALIZAR") return;

          setLoadingReinit(true);

          try {
            const resp = await reinicializarSistemaForzado(confirmText, borrarCarpetas);
            showToast(resp.mensaje, resp.ok ? "success" : "danger", 3000);
          } finally {
            setLoadingReinit(false);
            setShowReinitModal(false);
          }
        }}
      />
    </div>
  );




};

export default ConfigAdminPanel;
