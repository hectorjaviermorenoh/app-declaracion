import React, { useState } from "react";
import { useFacturas } from "../../../context/FacturasContext";
import "./AddFacturaModal.scss";

function AddFacturaModal({ onClose }) {

  const { subirFactura } = useFacturas();

  const [form, setForm] = useState({
    anio: new Date().getFullYear(),
    entidad: "",
    descripcion: "",
    valor: "",
    metodoPago: "",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!file) return alert("Debes seleccionar un archivo");

    const payload = {
      ...form,
      file,
    };

    console.log("Payload enviado:", payload);

    const resp = await subirFactura(payload);

    if (resp.ok) {
      alert("Factura subida correctamente.");
      onClose();
    } else {
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
            onChange={handleChange}
          />

          <label>Método de Pago</label>
          <select
            className="form-control"
            name="metodoPago"
            onChange={handleChange}
          >
            <option>Tarjeta Débito</option>
            <option>Tarjeta Crédito</option>
            <option>Transferencia</option>
            <option>Efectivo</option>
            <option>Otro</option>
          </select>

          <label>Archivo</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <div className="mt-3 d-flex gap-2">
            <button className="btn btn-primary" onClick={handleSubmit}>Subir</button>
            <button className="btn btn-secondary" onClick={onClose}>Cancelar</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddFacturaModal;
