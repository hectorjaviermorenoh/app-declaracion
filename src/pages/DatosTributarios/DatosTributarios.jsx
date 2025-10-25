import React, { useRef, useState, useEffect } from "react";
import { useDatosTributarios } from "../../context/DatosTributariosContext";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import "./DatosTributarios.scss";

export default function DatosTributarios() {
  // const { datos, fetchDatos, addDato, updateDato, deleteDato, loading } = useDatosTributarios();
  const { datos, getDatos, addDato, updateDato, deleteDato, moveDato, loading } = useDatosTributarios();

  const [nuevo, setNuevo] = useState({ label: "", valor: "" });
  const [editando, setEditando] = useState(null);
  const [editValores, setEditValores] = useState({ label: "", valor: "" });

  const fetchRef = useRef(getDatos);

  useEffect(() => {
    fetchRef.current = getDatos;
  }, [getDatos]);

  useEffect(() => {
    fetchRef.current();
  }, []);

  const handleSaveNuevo = async () => {
    if (!nuevo.label.trim() || !nuevo.valor.trim()) return;
    await addDato(nuevo);
    setNuevo({ label: "", valor: "" });
  };

  const handleSaveEdit = async (id) => {
    await updateDato(id, editValores);
    setEditando(null);
  };

  return (
    <div className="datos-tributarios container">
      <h2 className="mb-4">📊 Datos Tributarios</h2>

      {/* Nueva fila */}
      <div className="fila fila-nueva">
        <textarea
          placeholder="Etiqueta (label)"
          value={nuevo.label}
          onChange={(e) => setNuevo({ ...nuevo, label: e.target.value })}
        />
        <textarea
          placeholder="Valor"
          value={nuevo.valor}
          onChange={(e) => setNuevo({ ...nuevo, valor: e.target.value })}
        />
        <button className="btn btn-success" onClick={handleSaveNuevo}>
          💾 Guardar
        </button>
      </div>

      {/* Filas existentes */}

      {datos
        .sort((a, b) => (a.orden || 0) - (b.orden || 0))
        .map((d) => (
          <div className="fila" key={d.id}>
            {editando === d.id ? (
              <>
                <textarea
                  value={editValores.label}
                  onChange={(e) =>
                    setEditValores({ ...editValores, label: e.target.value })
                  }
                />
                <textarea
                  value={editValores.valor}
                  onChange={(e) =>
                    setEditValores({ ...editValores, valor: e.target.value })
                  }
                />
                <button
                  className="btn btn-success"
                  onClick={() => handleSaveEdit(d.id)}
                >
                  💾
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setEditando(null)}
                >
                  ✖️
                </button>
              </>
            ) : (
              <>
                <div className="label fila-label-valor fila-label">{d.label}</div>
                <div className="valor fila-label-valor">
                  {d.valor.startsWith("http://") || d.valor.startsWith("https://") ? (
                    <a href={d.valor} target="_blank" rel="noopener noreferrer">
                      {d.valor}
                    </a>
                  ) : (
                    d.valor
                  )}
                </div>
                <div className="acciones">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => {
                      setEditando(d.id);
                      setEditValores({ label: d.label, valor: d.valor, orden: d.orden });
                    }}
                  >
                    ✏️
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteDato(d.id)}
                  >
                    ❌
                  </button>

                  <div className="btn-subir-bajar">
                    <button
                      className="btn btn-sm btn-light"
                      onClick={() => moveDato(d.id, -1)}
                      disabled={d.orden === 1}
                    >
                      🔼
                    </button>
                    <button
                      className="btn btn-sm btn-light"
                      onClick={() => moveDato(d.id, 1)}
                    >
                      🔽
                    </button>
                  </div>

                </div>
              </>
            )}
          </div>
        ))}



      <LoadingOverlay show={loading} /> {/* 🔹 bloquea pantalla mientras carga */}
    </div>
  );
}
