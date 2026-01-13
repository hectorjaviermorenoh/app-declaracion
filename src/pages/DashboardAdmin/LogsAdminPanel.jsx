
import React, { useState, useEffect } from "react";
import { Button, Table, Spinner } from "react-bootstrap";
import { useLogsAdmin } from "../../context/admin/LogsAdminContext";
import LogSkeleton from "../../components/Skeletons/Admin/LogSkeleton/LogSkeleton";
import ConfirmActionModal from "../../components/Modals/ConfirmActionModal/ConfirmActionModal";
import { usePermisos } from "../../hooks/usePermisos.js";
import NoPermiso from "../../components/NoPermiso/NoPermiso";
import "./Styles/LogsAdminPanel.scss";

export function LogsAdminPanel() {

  const { puede } = usePermisos();
  const puedeVerLogs = puede("getLogs");

  const { logs, getDatos, clearDatos, loading } = useLogsAdmin();
  const [showClearModal, setShowClearModal] = useState(false);

  // 🔹 Cargar logs al montar
  useEffect(() => {
    if(puedeVerLogs) {
      getDatos();
    }
  }, [getDatos, puedeVerLogs]);

  // Ahora sí retornar condicional
  if (!puedeVerLogs) return <NoPermiso />;

  // return (
  //   <div className="p-4">
  //     <h2 className="mb-4">📜 Administración de Logs</h2>

  //     {/* 🔘 Botón para limpiar logs */}
  //     <div className="d-flex justify-content-end mb-3">
  //       <Button
  //         variant="danger"
  //         onClick={() => setShowClearModal(true)}
  //         disabled={loading}
  //       >
  //         🧹 Limpiar Logs Antiguos
  //       </Button>
  //     </div>

  //     {/* 📋 Tabla de logs */}
  //     <Table striped bordered hover size="sm" responsive className="logs-table">
  //       <thead>
  //         <tr>
  //           <th>Fecha</th>
  //           <th>Acción</th>
  //           <th>Usuario</th>
  //           <th>Detalle</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {logs.length > 0 ? (
  //           logs.map((log, i) => (
  //             <tr key={i}>
  //               <td>{log.fecha}</td>
  //               <td>{log.accion}</td>
  //               <td>{log.usuario}</td>
  //               <td>
  //                 <pre className="bg-light p-2 rounded small mb-0">
  //                   {JSON.stringify(log.detalle, null, 2)}
  //                 </pre>
  //               </td>
  //             </tr>
  //           ))
  //         ) : (
  //           <tr>
  //             <td colSpan={4} className="text-center text-muted">
  //               {loading ? "Cargando logs..." : "No hay logs disponibles"}
  //             </td>
  //           </tr>
  //         )}
  //       </tbody>
  //     </Table>

  //     {/* 📱 Vista tipo tarjetas (para móviles y tablets hasta 1024px) */}
  //     <div className="logs-cards">
  //       {logs.length > 0 ? (
  //         logs.map((log, i) => (
  //           <div className="log-card" key={i}>
  //             <div className="log-header">
  //               <h6>{log.accion}</h6>
  //               <span>{log.fecha}</span>
  //             </div>
  //             <div className="log-body">
  //               <p>
  //                 <strong>Usuario:</strong> {log.usuario}
  //               </p>
  //               <pre>{JSON.stringify(log.detalle, null, 2)}</pre>
  //             </div>
  //           </div>
  //         ))
  //       ) : (
  //         <p className="text-center text-muted">
  //           {loading ? "Cargando logs..." : "No hay logs disponibles"}
  //         </p>
  //       )}
  //     </div>

  //     {/* 🔔 Modal de confirmación de limpieza */}
  //     <ConfirmActionModal
  //       show={showClearModal}
  //       onHide={() => setShowClearModal(false)}
  //       title="🧹 Limpiar Logs Antiguos"
  //       message={
  //         <>
  //           Esta acción eliminará todos los logs antiguos y conservará solo los{" "}
  //           <strong>10 más recientes</strong>.
  //           <p className="text-danger fw-semibold mt-2">
  //             ⚠️ Esta operación no se puede deshacer.
  //           </p>
  //         </>
  //       }
  //       confirmLabel="Limpiar Logs"
  //       confirmVariant="danger"
  //       onConfirm={clearDatos}
  //     />
  //   </div>
  // );

  return (
    <div className="p-4">
      <h2 className="mb-4 fw-bold">📜 Administración de Logs</h2>

      {/* 🔘 Botón para limpiar logs */}
      <div className="d-flex justify-content-end mb-3">
        <Button
          variant="danger"
          onClick={() => setShowClearModal(true)}
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
              Procesando...
            </>
          ) : (
            "🧹 Limpiar Logs Antiguos"
          )}
        </Button>
      </div>

      {/* 📋 Tabla de logs (Escritorio) */}
      <div className="table-responsive shadow-sm rounded mb-4">
        <Table striped bordered hover size="sm" className="logs-table align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th>Fecha</th>
              <th>Acción</th>
              <th>Usuario</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              // Skeletons para la tabla
              Array.from({ length: 8 }).map((_, i) => (
                <LogSkeleton key={`log-row-skel-${i}`} variant="row" />
              ))
            ) : logs.length > 0 ? (
              logs.map((log, i) => (
                <tr key={i}>
                  <td className="text-nowrap">{log.fecha}</td>
                  <td className="fw-semibold">{log.accion}</td>
                  <td>{log.usuario}</td>
                  <td>
                    <pre className="bg-light p-2 rounded small mb-0 border shadow-sm" style={{ maxHeight: '100px', overflowY: 'auto' }}>
                      {JSON.stringify(log.detalle, null, 2)}
                    </pre>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4 text-muted">
                  No hay logs disponibles
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      {/* 📱 Vista tipo tarjetas (Móvil y Tablets hasta 1024px) */}
      <div className="logs-cards">
        {loading ? (
          // Skeletons para las tarjetas
          Array.from({ length: 4 }).map((_, i) => (
            <LogSkeleton key={`log-card-skel-${i}`} variant="card" />
          ))
        ) : logs.length > 0 ? (
          logs.map((log, i) => (
            <div className="log-card shadow-sm border mb-3" key={i}>
              <div className="log-header d-flex justify-content-between align-items-center p-2 bg-light border-bottom">
                <h6 className="mb-0 fw-bold">{log.accion}</h6>
                <small className="text-muted">{log.fecha}</small>
              </div>
              <div className="log-body p-3">
                <p className="mb-2">
                  <strong>Usuario:</strong> {log.usuario}
                </p>
                <pre className="bg-dark text-light p-2 rounded small mb-0">
                  {JSON.stringify(log.detalle, null, 2)}
                </pre>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted py-4">
            No hay logs disponibles
          </p>
        )}
      </div>

      {/* 🔔 Modal de confirmación de limpieza */}
      <ConfirmActionModal
        show={showClearModal}
        onHide={() => setShowClearModal(false)}
        title="🧹 Limpiar Logs Antiguos"
        message={
          <>
            Esta acción eliminará todos los logs antiguos y conservará solo los{" "}
            <strong>10 más recientes</strong>.
            <p className="text-danger fw-semibold mt-2 mb-0">
              ⚠️ Esta operación no se puede deshacer.
            </p>
          </>
        }
        confirmLabel="Limpiar Logs"
        confirmVariant="danger"
        onConfirm={clearDatos}
      />
    </div>
  );

}