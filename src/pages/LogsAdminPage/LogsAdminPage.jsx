import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useLogsAdmin } from "../../context/Admin/LogsAdminContext";
import ConfirmActionModal from "../../components/Modals/ConfirmActionModal/ConfirmActionModal";
import "./LogsAdminPage.scss";

export default function LogsAdminPage() {
  const { logs, fetchLogs, clearLogs, loading } = useLogsAdmin();
  const [showClearModal, setShowClearModal] = useState(false);

  // 🔹 Cargar logs al montar
  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  return (
    <div className="p-4">
      <h2 className="mb-4">📜 Administración de Logs</h2>

      {/* 🔘 Botón para limpiar logs */}
      <div className="d-flex justify-content-end mb-3">
        <Button
          variant="danger"
          onClick={() => setShowClearModal(true)}
          disabled={loading}
        >
          🧹 Limpiar Logs Antiguos
        </Button>
      </div>

      {/* 📋 Tabla de logs */}
      <Table striped bordered hover size="sm" responsive className="logs-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Acción</th>
            <th>Usuario</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          {logs.length > 0 ? (
            logs.map((log, i) => (
              <tr key={i}>
                <td>{new Date(log.fecha).toLocaleString()}</td>
                <td>{log.accion}</td>
                <td>{log.usuario}</td>
                <td>
                  <pre className="bg-light p-2 rounded small mb-0">
                    {JSON.stringify(log.detalle, null, 2)}
                  </pre>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center text-muted">
                {loading ? "Cargando logs..." : "No hay logs disponibles"}
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* 📱 Vista tipo tarjetas (para móviles y tablets hasta 1024px) */}
      <div className="logs-cards">
        {logs.length > 0 ? (
          logs.map((log, i) => (
            <div className="log-card" key={i}>
              <div className="log-header">
                <h6>{log.accion}</h6>
                <span>{new Date(log.fecha).toLocaleString()}</span>
              </div>
              <div className="log-body">
                <p>
                  <strong>Usuario:</strong> {log.usuario}
                </p>
                <pre>{JSON.stringify(log.detalle, null, 2)}</pre>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">
            {loading ? "Cargando logs..." : "No hay logs disponibles"}
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
            <p className="text-danger fw-semibold mt-2">
              ⚠️ Esta operación no se puede deshacer.
            </p>
          </>
        }
        confirmLabel="Limpiar Logs"
        confirmVariant="danger"
        onConfirm={clearLogs}
      />
    </div>
  );
}
