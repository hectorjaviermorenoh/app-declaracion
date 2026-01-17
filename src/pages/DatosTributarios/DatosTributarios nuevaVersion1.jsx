import React, { useEffect, useState, useCallback } from "react";
import { useDatosTributarios } from "../../context/DatosTributariosContext";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import "./DatosTributarios.scss";

export default function DatosTributarios() {
  const {
    datos,
    setDatos,
    getDatos,
    saveChanges,
    isDirty,
    discardChanges,
    loading
  } = useDatosTributarios();

  const [editandoId, setEditandoId] = useState(null);
  const [nuevo, setNuevo] = useState({ label: "", valor: "" });

  // --- LÓGICA LOCAL (BUFFER) ---

  // Mover registros arriba/abajo localmente
  const moveLocal = (index, direction) => {
    const newItems = [...datos];
    const targetIndex = index + direction;

    if (targetIndex < 0 || targetIndex >= newItems.length) return;

    // Intercambio de posiciones
    [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];

    // Re-asignar la propiedad 'orden' basada en el nuevo índice
    const reordered = newItems.map((item, idx) => ({
      ...item,
      orden: idx + 1
    }));

    setDatos(reordered);
  };

  // Eliminar localmente
  const deleteLocal = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este registro localmente? (Deberás guardar para confirmar)")) {
      const filtered = datos
        .filter((d) => d.id !== id)
        .map((d, idx) => ({ ...d, orden: idx + 1 }));
      setDatos(filtered);
    }
  };

  // Editar campo localmente
  const handleFieldChange = (id, field, value) => {
    setDatos((prev) =>
      prev.map((d) => (d.id === id ? { ...d, [field]: value } : d))
    );
  };

  // Adicionar localmente
  const addLocal = () => {
    if (!nuevo.label.trim() || !nuevo.valor.trim()) return;

    const nuevoRegistro = {
      id: `new_${Date.now()}`, // ID temporal
      label: nuevo.label,
      valor: nuevo.valor,
      orden: datos.length + 1
    };

    setDatos([...datos, nuevoRegistro]);
    setNuevo({ label: "", valor: "" });
  };

  return (
    <div className="datos-tributarios container mt-4">
      {/* HEADER DINÁMICO CON ESTADO DE GUARDADO */}
      <div className="d-flex justify-content-between align-items-center mb-4 sticky-top bg-white py-3 border-bottom shadow-sm px-3 rounded">
        <div>
          <h2 className="m-0">📊 Datos Tributarios</h2>
          {isDirty && (
            <small className="text-danger fw-bold pulse-animation">
              ⚠️ Tienes cambios sin guardar en el servidor
            </small>
          )}
        </div>
        <div className="d-flex gap-2">
          {isDirty && (
            <button className="btn btn-outline-danger" onClick={discardChanges}>
              Descartar
            </button>
          )}
          <button
            className={`btn ${isDirty ? 'btn-success px-4' : 'btn-secondary'}`}
            disabled={!isDirty || loading}
            onClick={saveChanges}
          >
            {loading ? "Guardando..." : "💾 Guardar Todo"}
          </button>
        </div>
      </div>

      {/* FORMULARIO DE ADICIÓN RÁPIDA */}
      <div className="card mb-4 border-primary shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-primary">Adicionar Nuevo Dato</h5>
          <div className="row g-2">
            <div className="col-md-5">
              <input
                type="text" className="form-control" placeholder="Etiqueta (ej: NIT)"
                value={nuevo.label} onChange={(e) => setNuevo({...nuevo, label: e.target.value})}
              />
            </div>
            <div className="col-md-5">
              <input
                type="text" className="form-control" placeholder="Valor"
                value={nuevo.valor} onChange={(e) => setNuevo({...nuevo, valor: e.target.value})}
              />
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary w-100" onClick={addLocal}>+ Añadir</button>
            </div>
          </div>
        </div>
      </div>

      {/* LISTA DE REGISTROS */}
      <div className="list-group shadow-sm">
        {datos.map((d, index) => (
          <div key={d.id} className={`list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 ${editandoId === d.id ? 'bg-light border-primary' : ''}`}>

            {/* Control de Orden */}
            <div className="d-flex flex-column align-items-center bg-light rounded border p-1">
              <button
                className="btn btn-sm p-0 border-0"
                onClick={() => moveLocal(index, -1)}
                disabled={index === 0}
              >🔼</button>
              <span className="fw-bold small text-muted">{d.orden}</span>
              <button
                className="btn btn-sm p-0 border-0"
                onClick={() => moveLocal(index, 1)}
                disabled={index === datos.length - 1}
              >🔽</button>
            </div>

            {/* Contenido del Registro */}
            <div className="flex-grow-1">
              {editandoId === d.id ? (
                <div className="row g-2">
                  <div className="col-5">
                    <input
                      className="form-control form-control-sm fw-bold"
                      value={d.label}
                      onChange={(e) => handleFieldChange(d.id, 'label', e.target.value)}
                    />
                  </div>
                  <div className="col-7">
                    <input
                      className="form-control form-control-sm"
                      value={d.valor}
                      onChange={(e) => handleFieldChange(d.id, 'valor', e.target.value)}
                      onBlur={() => setEditandoId(null)} // Guardar enfoque al salir
                      autoFocus
                    />
                  </div>
                </div>
              ) : (
                <div onDoubleClick={() => setEditandoId(d.id)} style={{cursor: 'pointer'}}>
                  <strong className="text-primary">{d.label}:</strong>
                  <span className="ms-2">
                    {d.valor.toString().startsWith('http') ? (
                      <a href={d.valor} target="_blank" rel="noreferrer" className="text-truncate d-inline-block shadow-none" style={{maxWidth: '200px'}}>
                        {d.valor}
                      </a>
                    ) : d.valor}
                  </span>
                </div>
              )}
            </div>

            {/* Acciones Rápidas */}
            <div className="btn-group">
              <button
                className={`btn btn-sm ${editandoId === d.id ? 'btn-success' : 'btn-outline-primary'}`}
                onClick={() => setEditandoId(editandoId === d.id ? null : d.id)}
              >
                {editandoId === d.id ? '✔' : '✏️'}
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteLocal(d.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {datos.length === 0 && !loading && (
        <div className="alert alert-info text-center mt-4">No hay datos tributarios registrados.</div>
      )}

      <LoadingOverlay show={loading} />
    </div>
  );
}