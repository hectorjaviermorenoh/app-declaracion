import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup, Table, Spinner, Row, Col, NavDropdown, Dropdown, Modal } from "react-bootstrap";
import { useConfigAdmin } from "../../context/admin/ConfigAdminContext";
import ConfirmActionModal from "../../components/Modals/ConfirmActionModal/ConfirmActionModal";
import ConfigSkeleton from "../../components/Skeletons/Admin/ConfigSkeleton/ConfigSkeleton";
import { usePermisos } from "../../hooks/usePermisos.js";
import NoPermiso from "../../components/NoPermiso/NoPermiso";
import ReinitModal from "../../components/Modals/ReinitModal/ReinitModal";
import "./Styles/ConfigAdminPanel.scss";


export const ConfigAdminPanel = () => {
  const { config, getConfig, versionBackend, updateConfig, generarBackup, reinicializarSistemaForzado, loading } = useConfigAdmin();

  const [tamanoMax, setTamanoMax] = useState(10);
  const [tokenExp, setTokenExp] = useState(60); // 👈 Nuevo estado (valor por defecto 60)
  const [tiposPermitidos, setTiposPermitidos] = useState([]);
  const [nuevoTipo, setNuevoTipo] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [tipoAEliminar, setTipoAEliminar] = useState("");
  const [showReinitModal, setShowReinitModal] = useState(false);

  const [versionFrontend, setVersionFrontend] = useState("Cargando...");

  const { puede } = usePermisos();
  const puedeVerConfig = puede("getConfig");

  const [loadingBackup, setLoadingBackup] = useState(false);
  const [loadingReinit, setLoadingReinit] = useState(false);
  const [loadingGuardar, setLoadingGuardar] = useState(false);

/*******************************
   * 🛠️ Obtener versión desde SW
   *******************************/
  useEffect(() => {
    const fetchSWVersion = async () => {
      try {
        // Ajustamos la ruta según lo que veo en tu captura (localhost:5174/app-declaracion/)
        const response = await fetch("/app-declaracion/service-worker.js");
        const text = await response.text();

        // Usamos Regex para buscar: const CACHE_VERSION = "valor";
        const match = text.match(/const\s+CACHE_VERSION\s*=\s*"([^"]+)"/);

        if (match && match[1]) {
          setVersionFrontend(match[1]);
        } else {
          setVersionFrontend("No encontrada");
        }
      } catch (error) {
        console.error("Error leyendo el Service Worker:", error);
        setVersionFrontend("Error al cargar");
      }
    };

    fetchSWVersion();
  }, []);
  
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
      setTokenExp(config.TOKEN_EXP_MINUTOS || 60);
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

  const handleGuardarConfig = async () => {
    setLoadingGuardar(true);
    try {
      await updateConfig({
        CARPETA_PRINCIPAL: config.CARPETA_PRINCIPAL,
        TAMANO_MAX_MB: Number(tamanoMax),
        TOKEN_EXP_MINUTOS: Number(tokenExp),
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

      {loading && !config ? (
        <ConfigSkeleton />
      ) : (
        <>
          {/* ===== Tarjeta 1: Configuración general ===== */}
          <div className="card shadow-sm p-3 mb-4">

            <h5 className="fw-bold mb-3">🔧 Configuración General</h5>

            <Row className="gy-3">
              <Col xs={12} md={5}>
                <Form.Group>
                  <Form.Label className="fw-semibold">📁 Carpeta Principal</Form.Label>
                  <Form.Control
                    type="text"
                    value={config.CARPETA_PRINCIPAL || ""}
                    readOnly
                    plaintext
                  />
                  <Form.Text muted>
                    <p>Versión Backend: <span className="version-backend">{`${versionBackend}`}</span></p>
                    <p>Versión FrontEnd: <span className="version-frontEnd">{versionFrontend}</span></p>
                  </Form.Text>
                </Form.Group>

                <Button variant="danger" className="btn-CAP-inicializarproyecto" onClick={() => setShowReinitModal(true)} disabled={loadingReinit}>
                  {loadingReinit ? (
                    <>
                      <Spinner as="span" animation="border" size="sm" /> Procesando...
                    </>
                  ) : (
                    "⚠️ Reinicializar Proyecto"
                  )}
                </Button>
              </Col>

              <Col xs={12} md={5}>
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

                <Form.Group>
                  <Form.Label className="fw-semibold">🔑 Expiración Token (Min)</Form.Label>
                  <Form.Control
                    type="number"
                    min={1}
                    value={tokenExp} // Asegúrate de haber definido este estado arriba
                    onChange={(e) => setTokenExp(e.target.value)}
                  />
                  <Form.Text muted>
                    Duración de la sesión.
                  </Form.Text>
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
              <Button variant="success" className="btn-CAP-guardar" onClick={handleGuardarConfig} disabled={loadingGuardar}>
                {loadingGuardar ? (
                  <>
                    <Spinner as="span" animation="border" size="sm" /> Guardando...
                  </>
                ) : (

                  <div className="btn-CAP-guardar-iconText">
                    <span className="icon-disk"></span>
                    <span>Guardar Cambios</span>
                  </div>


                  // "💾 Guardar Cambios"
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
        onConfirm={async (confirmText, borrarCarpetas) => {
          if (confirmText !== "INICIALIZAR") return;
          setLoadingReinit(true);
          try {
            const resp = await reinicializarSistemaForzado(confirmText, borrarCarpetas);
            console.log("reinicialización del sistema", resp.mensaje, resp.ok)
          } finally {
            setLoadingReinit(false);
            setShowReinitModal(false);
          }
        }}
        loading={loading}
      />
    </div>
  );



  // return (
  //     <div className="config-admin-page container py-3">
  //       <h3 className="fw-bold mb-4 text-primary">
  //         ⚙️ Administración de Configuración
  //       </h3>

  //       {/* Si no tiene permisos */}
  //       {!puedeVerConfig && <NoPermiso />}

  //       {/* 🔹 Renderizado condicional con Skeleton */}
  //       {loading && !config ? (
  //         <ConfigSkeleton />
  //       ) : (
  //         <>
  //           {/* ===== Tarjeta 1: Configuración general ===== */}
  //           <div className="card shadow-sm p-3 mb-4">
  //             <h5 className="fw-bold mb-3">🔧 Configuración General</h5>

  //             <Row className="gy-3">
  //               <Col xs={12} md={5}>
  //                 <Form.Group>
  //                   <Form.Label className="fw-semibold">📁 Carpeta Principal</Form.Label>
  //                   <Form.Control
  //                     type="text"
  //                     value={config?.CARPETA_PRINCIPAL || ""}
  //                     readOnly
  //                     plaintext
  //                   />
  //                   <Form.Text muted>
  //                     Carpeta base en Google Drive.
  //                   </Form.Text>
  //                 </Form.Group>
  //                 <br />
  //                 <Button
  //                   variant="danger"
  //                   onClick={() => setShowReinitModal(true)}
  //                   disabled={loadingReinit}
  //                 >
  //                   {loadingReinit ? (
  //                     <>
  //                       <Spinner as="span" animation="border" size="sm" className="me-2" />
  //                       Procesando...
  //                     </>
  //                   ) : (
  //                     "⚠️ Reinicializar Proyecto"
  //                   )}
  //                 </Button>
  //               </Col>

  //               <Col xs={12} md={5}>
  //                 <Form.Group>
  //                   <Form.Label className="fw-semibold">📦 Tamaño máximo (MB)</Form.Label>
  //                   <Form.Control
  //                     type="number"
  //                     min={1}
  //                     max={500}
  //                     value={tamanoMax}
  //                     onChange={(e) => setTamanoMax(e.target.value)}
  //                   />
  //                 </Form.Group>

  //                 <Form.Group className="mt-2">
  //                   <Form.Label className="fw-semibold">🔑 Expiración Token (Min)</Form.Label>
  //                   <Form.Control
  //                     type="number"
  //                     min={1}
  //                     value={tokenExp}
  //                     onChange={(e) => setTokenExp(e.target.value)}
  //                   />
  //                   <Form.Text muted>
  //                     Duración de la sesión.
  //                   </Form.Text>
  //                 </Form.Group>
  //               </Col>

  //               <Col xs={12} md={2} className="d-grid">
  //                 <Button
  //                   variant="primary"
  //                   onClick={handleBackup}
  //                   disabled={loadingBackup}
  //                   className="align-self-start"
  //                 >
  //                   {loadingBackup ? (
  //                     <>
  //                       <Spinner as="span" animation="border" size="sm" className="me-2" />
  //                       Generando...
  //                     </>
  //                   ) : (
  //                     "🗄️ Generar Backup"
  //                   )}
  //                 </Button>
  //               </Col>
  //             </Row>
  //           </div>

  //           {/* ===== Tarjeta 2: Tipos permitidos ===== */}
  //           <div className="card shadow-sm p-3 mb-4">
  //             <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
  //               <h5 className="fw-bold mb-2 mb-md-0">🧩 Tipos de archivo permitidos</h5>

  //               <InputGroup style={{ maxWidth: 260 }}>
  //                 <Form.Control
  //                   type="text"
  //                   placeholder="Ej: pdf"
  //                   value={nuevoTipo}
  //                   onChange={(e) => setNuevoTipo(e.target.value)}
  //                 />
  //                 <Button onClick={handleAgregarTipo}>➕</Button>
  //               </InputGroup>
  //             </div>

  //             <Table bordered hover responsive className="small shadow-inner-sm">
  //               <thead className="table-light">
  //                 <tr>
  //                   <th>Extensión</th>
  //                   <th className="text-center">Acciones</th>
  //                 </tr>
  //               </thead>
  //               <tbody>
  //                 {tiposPermitidos.map((tipo, idx) => (
  //                   <tr key={idx}>
  //                     <td className="fw-semibold">{tipo}</td>
  //                     <td className="text-center">
  //                       <Button
  //                         size="sm"
  //                         variant="outline-danger"
  //                         onClick={() => confirmarEliminarTipo(tipo)}
  //                       >
  //                         🗑️ Eliminar
  //                       </Button>
  //                     </td>
  //                   </tr>
  //                 ))}

  //                 {tiposPermitidos.length === 0 && (
  //                   <tr>
  //                     <td colSpan={2} className="text-center text-muted py-3">
  //                       No hay extensiones configuradas.
  //                     </td>
  //                   </tr>
  //                 )}
  //               </tbody>
  //             </Table>

  //             <div className="text-end mt-3">
  //               <Button
  //                 variant="success"
  //                 onClick={handleGuardarConfig}
  //                 disabled={loadingGuardar}
  //               >
  //                 {loadingGuardar ? (
  //                   <>
  //                     <Spinner as="span" animation="border" size="sm" className="me-2" />
  //                     Guardando...
  //                   </>
  //                 ) : (
  //                   "💾 Guardar Cambios"
  //                 )}
  //               </Button>
  //             </div>
  //           </div>
  //         </>
  //       )}

  //       {/* === Modal Eliminar === */}
  //       <ConfirmActionModal
  //         show={showConfirmModal}
  //         onHide={() => setShowConfirmModal(false)}
  //         title="Eliminar tipo de archivo"
  //         message={
  //           <>¿Seguro que deseas eliminar <strong>{tipoAEliminar}</strong>?</>
  //         }
  //         confirmLabel="Eliminar"
  //         confirmVariant="danger"
  //         onConfirm={handleEliminarTipo}
  //       />

  //       {/* === Modal Reinicializar === */}
  //       <ReinitModal
  //         show={showReinitModal}
  //         onHide={() => setShowReinitModal(false)}
  //         onConfirm={async (confirmText, borrarCarpetas) => {
  //           if (confirmText !== "INICIALIZAR") return;
  //           setLoadingReinit(true);
  //           try {
  //             const resp = await reinicializarSistemaForzado(confirmText, borrarCarpetas);
  //             console.log("reinicialización del sistema", resp?.mensaje, resp?.ok)
  //           } finally {
  //             setLoadingReinit(false);
  //             setShowReinitModal(false);
  //           }
  //         }}
  //         loading={loadingReinit}
  //       />
  //     </div>
  // );





};

export default ConfigAdminPanel;
