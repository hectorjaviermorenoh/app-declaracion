import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useFacturas } from "../../../context/FacturasContext";
import { useProductos } from "../../../context/ProductosContext";
import LoadingOverlay from "../../LoadingOverlay/LoadingOverlay";
import "./AddFacturaModal.scss";
import { normalizeText } from "../../../utils/validations.js";

function AddFacturaModal({ onClose, onSaved }) {

  const { subirFactura } = useFacturas();
  const { getProductos } = useProductos();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    anio: new Date().getFullYear(),
    entidad: "",
    descripcion: "",
    valor: "",
    metodoPago: "",
  });

  const [file, setFile] = useState(null);
  const [metodosDinamicos, setMetodosDinamicos] = useState([]);
  const [loadingMetodos, setLoadingMetodos] = useState(true);

  const capitalizar = (texto) =>
    texto
      .toLowerCase()
      .split(" ")
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join(" ");

  useEffect(() => {
    async function cargarMetodos() {
      setLoadingMetodos(true);

      const resp = await getProductos();
      const productos = resp?.data || resp || [];

      const filtrados = productos
        .filter((p) => p.nombre?.toLowerCase().startsWith("tarjeta"))
        .map((p) => capitalizar(p.nombre));

      setMetodosDinamicos(filtrados);
      setLoadingMetodos(false);
    }

    cargarMetodos();
  }, [getProductos]);

  const metodosFijos = [
    "Tarjeta Débito",
    "Tarjeta Crédito",
    "Transferencia",
    "Efectivo",
    "Bre-B",
    "Nequi",
    "Daviplata"
  ];

  const metodosPago = Array.from(new Set([...metodosFijos, ...metodosDinamicos]))
    .sort((a, b) => {
      const aTar = a.toLowerCase().startsWith("tarjeta");
      const bTar = b.toLowerCase().startsWith("tarjeta");
      if (aTar && !bTar) return -1;
      if (!aTar && bTar) return 1;
      return a.localeCompare(b);
    });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {

    if (!form.entidad.trim()) {
      alert("El campo ENTIDAD es obligatorio.");
      return;
    }

    if (!form.valor.trim()) {
      alert("El campo VALOR es obligatorio.");
      return;
    }

    if (!file) return alert("Debes seleccionar un archivo");


    setLoading(true);

    // const payload = {
    //   ...form,
    //   file,
    // };

    const payload = {
      ...form,
      entidad: normalizeText(form.entidad),
      descripcion: normalizeText(form.descripcion),
      metodoPago: normalizeText(form.metodoPago),
      file,
    };

    const resp = await subirFactura(payload);

    if (resp.ok) {
      alert("Factura subida correctamente.");

      if (onSaved) onSaved();
      setLoading(false);
      onClose();
    } else {
      setLoading(false);
      alert("Error: " + resp.mensaje);
    }
  };

  return (
    <div className="Add-Factura-Modal">
      <div className="modal-backdrop">
        <div className="modal-content">

          <h4>Subir factura</h4>

          <label>Año</label>
          <input
            type="number"
            className="form-control"
            name="anio"
            value={form.anio}
            onChange={handleChange}
          />

          <label>Entidad</label>
          <input
            className="form-control"
            name="entidad"
            required
            onChange={handleChange}
          />

          <label>Descripción</label>
          <input
            className="form-control"
            name="descripcion"
            onChange={handleChange}
          />

          <label>Valor (COP)</label>
          <input
            type="number"
            className="form-control"
            name="valor"
            required
            onChange={handleChange}
          />

          <label>Método de Pago</label>

          <select
            className="form-control"
            name="metodoPago"
            onChange={handleChange}
            value={form.metodoPago}
            disabled={loadingMetodos}
          >
            {loadingMetodos ? (
              <option>Cargando métodos...</option>
            ) : (
              <>
                <option value="">Seleccione...</option>
                {metodosPago.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </>
            )}
          </select>

          {loadingMetodos && (
            <div className="mt-1 d-flex align-items-center gap-2" style={{ fontSize: "0.9rem" }}>
              <Spinner animation="border" size="sm" />
              <span>Cargando métodos de pago...</span>
            </div>
          )}

          <label>Archivo</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <div className="mt-3 d-flex gap-2">
            <button className="btn btn-primary" onClick={handleSubmit}>

               {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  {" "}Guardando...
                </>
              ) : (
                "Subir"
              )}


            </button>
            <button className="btn btn-secondary" onClick={onClose}>Cancelar</button>
          </div>

        </div>
      </div>
      <LoadingOverlay show={loading} />
    </div>

  );
}

export default AddFacturaModal;
