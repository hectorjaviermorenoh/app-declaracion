import React, { useEffect, useState } from "react";
import { useDatosTributarios } from "../../context/DatosTributariosContext";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import "./DatosTributarios.scss";

export default function DatosTributarios() {
  const {
    datos, setDatos, getDatos, saveChanges,
    isDirty, discardChanges, loading
  } = useDatosTributarios();

  const [editandoId, setEditandoId] = useState(null);
  const [nuevo, setNuevo] = useState({ label: "", valor: "" });

  useEffect(() => { getDatos(); }, [getDatos]);

  // --- ACCIONES LOCALES ---

  const toggleResaltado = (id) => {
    setDatos(prev => prev.map(d => d.id === id ? { ...d, importante: !d.importante } : d));
  };

  const moveLocal = (index, direction) => {
    const newItems = [...datos];
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;
    [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];
    setDatos(newItems.map((item, idx) => ({ ...item, orden: idx + 1 })));
  };

  const handleFieldChange = (id, field, value) => {
    setDatos(prev => prev.map(d => d.id === id ? { ...d, [field]: value } : d));
  };

  const deleteLocal = (id) => {
    if (window.confirm("¿Eliminar registro?")) {
      setDatos(prev => prev.filter(d => d.id !== id).map((d, i) => ({ ...d, orden: i + 1 })));
    }
  };

  const addLocal = () => {
    if (!nuevo.label.trim()) return;
    const nuevoReg = {
      id: `new_${Date.now()}`,
      label: nuevo.label,
      valor: nuevo.valor,
      orden: datos.length + 1,
      importante: false
    };
    setDatos([...datos, nuevoReg]);
    setNuevo({ label: "", valor: "" });
  };

  return (

<div className="datos-tributarios container mt-4">
    {/* HEADER AJUSTADO */}
    <div className="d-flex justify-content-between align-items-center mb-4 sticky-header-custom border-bottom shadow-sm px-3 rounded">
      <div>
        <h2 className="m-0 h4">📊 Datos Tributarios</h2>
        {isDirty && <small className="text-danger fw-bold pulse-animation">⚠️ Cambios pendientes</small>}
      </div>
      <div className="d-flex gap-2">
        {isDirty && (
          <button className="btn btn-sm btn-outline-secondary" onClick={discardChanges}>
            Descartar
          </button>
        )}
        <button
          className={`btn btn-sm ${isDirty ? 'btn-success' : 'btn-secondary'}`}
          disabled={!isDirty || loading}
          onClick={saveChanges}
        >
          {loading ? '...' : '💾 Guardar'}
        </button>
      </div>
    </div>

    {/* ... resto del código (Formulario de adición) ... */}

    <div className="list-group shadow-sm">
      {datos.map((d, index) => (
        <div key={d.id} className={`fila ${d.importante ? 'resaltado' : ''}`}>

          {/* Controles de Movimiento */}
          <div className="btn-subir-bajar">
            <i className={`bi bi-chevron-up ${index === 0 ? 'text-muted' : 'text-primary'}`}
               onClick={() => moveLocal(index, -1)}></i>
            <span className="fw-bold small">{d.orden}</span>
            <i className={`bi bi-chevron-down ${index === datos.length -1 ? 'text-muted' : 'text-primary'}`}
               onClick={() => moveLocal(index, 1)}></i>
          </div>

          {/* Etiqueta */}
          <div className="fila-label text-truncate">
            {editandoId === d.id ? (
              <input
                className="form-control form-control-sm"
                value={d.label}
                onChange={e => handleFieldChange(d.id, 'label', e.target.value)}
              />
            ) : (
              <span>{d.label}</span>
            )}
          </div>

          {/* Valor */}
          <div className="fila-valor">
            {editandoId === d.id ? (
              <textarea
                className="form-control form-control-sm"
                value={d.valor}
                onChange={e => handleFieldChange(d.id, 'valor', e.target.value)}
                rows="1"
              />
            ) : (
              <span className="text-muted small">
                {d.valor.toString().startsWith('http') ?
                  <a href={d.valor} target="_blank" rel="noreferrer">Ver enlace</a> :
                  d.valor}
              </span>
            )}
          </div>

          {/* Acciones - Agrupadas en un div con min-width */}
          <div className="acciones px-2">
            <i
              className={`bi ${d.importante ? 'bi-bookmark-star-fill text-danger' : 'bi-bookmark-star text-secondary'} accion-icon`}
              onClick={() => toggleResaltado(d.id)}
              title="Resaltar"
            ></i>
            <i
              className={`bi ${editandoId === d.id ? 'bi-check-lg text-success' : 'bi-pencil-square text-primary'} accion-icon`}
              onClick={() => setEditandoId(editandoId === d.id ? null : d.id)}
              title="Editar"
            ></i>
            <i
              className="bi bi-x-circle accion-icon text-danger"
              onClick={() => deleteLocal(d.id)}
              title="Eliminar"
            ></i>
          </div>
        </div>
      ))}
    </div>
  </div>

  );
}