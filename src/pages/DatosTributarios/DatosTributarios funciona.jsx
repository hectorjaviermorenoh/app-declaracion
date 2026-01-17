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
      {/* Header */}
      {/* <div className="d-flex justify-content-between align-items-center mb-4 sticky-top bg-white py-3 border-bottom shadow-sm px-2">
        <div>
          <h2 className="m-0 h4">📊 Datos Tributarios</h2>
          {isDirty && <small className="text-danger fw-bold pulse-animation">⚠️ Cambios pendientes</small>}
        </div>
        <div className="d-flex gap-2">
          {isDirty && <button className="btn btn-sm btn-outline-secondary" onClick={discardChanges}>Descartar</button>}
          <button className={`btn btn-sm ${isDirty ? 'btn-success' : 'btn-secondary'}`} disabled={!isDirty || loading} onClick={saveChanges}>
            {loading ? '...' : '💾 Guardar'}
          </button>
        </div>
      </div> */}

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

      {/* Input de Nuevo Registro */}
      <div className="card mb-3 border-0 shadow-sm bg-light">
        <div className="card-body p-2 row g-2">
          <div className="col-5"><input className="form-control form-control-sm" placeholder="Etiqueta" value={nuevo.label} onChange={e => setNuevo({...nuevo, label: e.target.value})}/></div>
          <div className="col-5"><input className="form-control form-control-sm" placeholder="Valor" value={nuevo.valor} onChange={e => setNuevo({...nuevo, valor: e.target.value})}/></div>
          <div className="col-2"><button className="btn btn-sm btn-primary w-100" onClick={addLocal}>+</button></div>
        </div>
      </div>

      {/* Lista Principal */}
      <div className="list-group">
        {datos.map((d, index) => (
          <div key={d.id} className={`fila ${d.importante ? 'resaltado' : ''}`}>

            {/* 1. Controles de Movimiento */}
            <div className="btn-subir-bajar align-items-center">
              <i className={`bi bi-chevron-up ${index === 0 ? 'text-muted' : 'text-primary'}`} onClick={() => moveLocal(index, -1)}></i>
              <span className="small fw-bold">{d.orden}</span>
              <i className={`bi bi-chevron-down ${index === datos.length -1 ? 'text-muted' : 'text-primary'}`} onClick={() => moveLocal(index, 1)}></i>
            </div>

            {/* 2. Etiqueta y Valor */}
            <div className="fila-label">
              {editandoId === d.id ?
                <input className="form-control form-control-sm" value={d.label} onChange={e => handleFieldChange(d.id, 'label', e.target.value)}/>
                : d.label}
            </div>

            <div className="fila-valor">
              {editandoId === d.id ?
                <textarea className="form-control form-control-sm" value={d.valor} onChange={e => handleFieldChange(d.id, 'valor', e.target.value)}/>
                : (d.valor.toString().startsWith('http') ? <a href={d.valor} target="_blank" rel="noreferrer">Ver Link</a> : d.valor)
              }
            </div>

            {/* 3. Iconos de Acción */}
            <div className="acciones">
              {/* Icono de Resaltado (Punto 1) */}
              <i
                className={`bi ${d.importante ? 'bi-bookmark-star-fill text-danger' : 'bi-bookmark-star text-secondary'} accion-icon`}
                title="Marcar como importante"
                onClick={() => toggleResaltado(d.id)}
              ></i>

              {/* Iconos de Editar y Eliminar (Punto 2) */}
              <i
                className={`bi ${editandoId === d.id ? 'bi-check-circle-fill text-success' : 'bi-pencil-square text-primary'} accion-icon`}
                title="Editar"
                onClick={() => setEditandoId(editandoId === d.id ? null : d.id)}
              ></i>

              <i
                className="bi bi-x-circle accion-icon text-danger"
                title="Eliminar"
                onClick={() => deleteLocal(d.id)}
              ></i>
            </div>
          </div>
        ))}
      </div>

      <LoadingOverlay show={loading} />
    </div>
  );
}