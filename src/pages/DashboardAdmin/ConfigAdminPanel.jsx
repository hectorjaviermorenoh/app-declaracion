import React, { useEffect, useState } from "react";
import { useConfigAdmin } from "../../context/admin/ConfigAdminContext";
import { Button, Form, InputGroup, Table, Spinner, Row, Col } from "react-bootstrap";
// import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import ConfirmActionModal from "../../components/Modals/ConfirmActionModal/ConfirmActionModal";

export const ConfigAdminPanel = () => {
  const { config, getConfig, updateConfig, loading } = useConfigAdmin();

  const [tamanoMax, setTamanoMax] = useState(10);
  const [tiposPermitidos, setTiposPermitidos] = useState([]);
  const [nuevoTipo, setNuevoTipo] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [tipoAEliminar, setTipoAEliminar] = useState("");

  /*******************************
   * 🔄 Cargar configuración
   *******************************/
  useEffect(() => {
    getConfig();
  }, [getConfig]);

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
  const handleGuardarConfig = async () => {
    const nuevaConfig = {
      CARPETA_PRINCIPAL: config.CARPETA_PRINCIPAL,
      TAMANO_MAX_MB: Number(tamanoMax),
      TIPOS_PERMITIDOS: tiposPermitidos,
    };
    await updateConfig(nuevaConfig);
  };

  return (
    <div className="p-3">
      <h4 className="fw-bold mb-3">⚙️ Administración de Configuración</h4>

      {!config ? (
        <div className="text-center py-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-bold">📁 Carpeta Principal</Form.Label>
                <Form.Control
                  type="text"
                  value={config.CARPETA_PRINCIPAL || ""}
                  readOnly
                  plaintext
                />
                <Form.Text muted>
                  Este campo es solo informativo. Representa la carpeta base en Google Drive.
                </Form.Text>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-bold">📦 Tamaño máximo de archivo (MB)</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  max={500}
                  value={tamanoMax}
                  onChange={(e) => setTamanoMax(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <hr />

          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold mb-0">🧩 Tipos de archivo permitidos</h5>
            <InputGroup style={{ maxWidth: "300px" }}>
              <Form.Control
                type="text"
                placeholder="Ejemplo: pdf"
                value={nuevoTipo}
                onChange={(e) => setNuevoTipo(e.target.value)}
              />
              <Button variant="primary" onClick={handleAgregarTipo}>
                ➕ Agregar
              </Button>
            </InputGroup>
          </div>

          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Extensión</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tiposPermitidos.map((tipo, idx) => (
                <tr key={idx}>
                  <td>{tipo}</td>
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
                  <td colSpan={2} className="text-center text-muted">
                    No hay extensiones configuradas
                  </td>
                </tr>
              )}
            </tbody>
          </Table>

          <div className="text-end mt-3">
            <Button variant="success" onClick={handleGuardarConfig}>
              {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" /> Guardando...
                </>
              ) : (
                "💾 Guardar Cambios"
              )}
            </Button>
          </div>
        </>
      )}

      <ConfirmActionModal
        show={showConfirmModal}
        onHide={() => setShowConfirmModal(false)}
        title="Eliminar tipo de archivo"
        message={
          <>
            ¿Seguro que deseas eliminar la extensión <strong>{tipoAEliminar}</strong>?
          </>
        }
        confirmLabel="Eliminar"
        confirmVariant="danger"
        onConfirm={handleEliminarTipo}
      />

      {/* <LoadingOverlay show={loading} /> */}
    </div>
  );
};

export default ConfigAdminPanel;
