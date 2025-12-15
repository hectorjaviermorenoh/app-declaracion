import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useFacturas } from "../../../context/FacturasContext";
import { useProductos } from "../../../context/ProductosContext";
import LoadingOverlay from "../../LoadingOverlay/LoadingOverlay";
import FormErrorList from "../../FormErrorList/FormErrorList";
import { useFormValidator } from "../../../hooks/useFormValidator";
import { normalizeField } from "../../../utils/formValidator";
import "./AddFacturaModal.scss";

function AddFacturaModal({ onClose, onSaved }) {
  const { subirFactura } = useFacturas();
  const { getProductos } = useProductos();

  const { errors, validateField, validateForm, clearErrors, clearError } = useFormValidator();

  const [loading, setLoading] = useState(false);
  const [loadingMetodos, setLoadingMetodos] = useState(true);

  const [form, setForm] = useState({
    anio: new Date().getFullYear(),
    entidad: "",
    descripcion: "",
    valor: "",
    metodoPago: "",
    archivo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    validateField(name, value);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, archivo: file });
    validateField("archivo", file);
  };

  const [metodosDinamicos, setMetodosDinamicos] = useState([]);

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
    "Daviplata",
  ];

  const metodosPago = Array.from(new Set([...metodosFijos, ...metodosDinamicos])).sort(
    (a, b) => {
      const aTar = a.toLowerCase().startsWith("tarjeta");
      const bTar = b.toLowerCase().startsWith("tarjeta");
      if (aTar && !bTar) return -1;
      if (!aTar && bTar) return 1;
      return a.localeCompare(b);
    }
  );

  const handleSubmit = async () => {
    clearErrors();

    const isValid = validateForm(form);
    if (!isValid) return;

    setLoading(true);

    const payload = {
      ...form,
      anio: form.anio, // ya validado como número
      entidad: normalizeField(form.entidad),
      descripcion: form.descripcion ? normalizeField(form.descripcion) : "",
      valor: form.valor,
      metodoPago: normalizeField(form.metodoPago),
      file: form.archivo,
    };


    const resp = await subirFactura(payload);

    setLoading(false);

    if (resp.ok) {
      if (onSaved) onSaved();
      onClose();
    } else {
      alert("Error: " + resp.mensaje);
    }
  };

  const formatCOP = (num) => {
    if (!num) return "";
    return new Intl.NumberFormat("es-CO").format(num);
  };

  return (
    <div className="Add-Factura-Modal">
      <div className="modal-backdrop">
        <div className="modal-content">

          <h4>Subir factura</h4>

          {/* LISTA DE ERRORES */}
          <FormErrorList errors={errors} />


          {/* ********************************************* */}
            {/* // ... dentro del return de AddFacturaModal.jsx ... */}

          <label>Archivo / Factura</label>
          <div className="d-flex gap-2">
            {/* Input oculto para manejar la lógica */}
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              capture="camera" // Esto activa la cámara directamente en móviles
              className="d-none"
              onChange={handleFile}
            />

            {/* Botón visual que imita la función de escáner */}
            <button
              type="button"
              className="btn btn-outline-info w-100 d-flex align-items-center justify-content-center gap-2"
              onClick={() => document.getElementById('fileInput').click()}
            >
              <i className="bi bi-camera"></i> Escanear Factura
            </button>
          </div>

          {/* Feedback de que el archivo fue cargado */}
          {form.archivo && (
            <small className="text-success d-block mt-1">
              ✅ Listo para subir: {form.archivo.name}
            </small>
          )}
          {/* ********************************************* */}

          <label>Año</label>
          <input
            list="listaAnios"
            className="form-control"
            name="anio"
            value={form.anio}
            onChange={(e) => {
              handleChange(e);
              clearError("anio");
            }}
            onBlur={(e) => validateField("anio", e.target.value)}
            placeholder="Seleccione o escriba un año"
          />




          {/* ******************************************************* */}

          <datalist id="listaAnios">
            {Array.from({ length: 10 }).map((_, i) => {
              const y = new Date().getFullYear() - i;
              return <option key={y} value={y} />;
            })}
          </datalist>



          <label>Entidad</label>
          <input
            className="form-control"
            name="entidad"
            onChange={(e) => {
              handleChange(e);
              clearError("entidad");
            }}
            onBlur={(e) => validateField("entidad", e.target.value)}
          />

          <label>Descripción</label>
          <input
            className="form-control"
            name="descripcion"
            onChange={(e) => {
              handleChange(e);
              clearError("descripcion");
            }}
            onBlur={(e) => validateField("descripcion", e.target.value)}
          />

          {/* <label>Valor (COP)</label>
          <input
            type="number"
            className="form-control"
            name="valor"
            onChange={(e) => {
              handleChange(e);
              clearError("valor");
            }}
            onBlur={(e) => validateField("valor", e.target.value)}
          /> */}

        <label>Valor (COP)</label>
        <input
          type="text"
          className="form-control"
          name="valor"
          value={form.valor ? formatCOP(form.valor) : ""}
          onChange={(e) => {
            // Quitamos todo lo que NO sea número
            const raw = e.target.value.replace(/\D/g, "");
            // Guardamos el valor sin puntos en el estado
            setForm({ ...form, valor: raw });
            // Validación en tiempo real
            validateField("valor", raw);
            // Limpia error si se corrige
            clearError("valor");
          }}
          // onBlur={(e) => validateField("valor", e.target.value)}
          onBlur={() => validateField("valor", form.valor)}
          placeholder="Ingrese valor sin decimales"
        />

          <label>Método de Pago</label>
          <select
            className="form-control"
            name="metodoPago"
            value={form.metodoPago}
            disabled={loadingMetodos}
            onChange={(e) => {
              handleChange(e);
              clearError("metodoPago");
            }}
            onBlur={(e) => validateField("metodoPago", e.target.value)}
          >
            {loadingMetodos ? (
              <option>Cargando...</option>
            ) : (
              <>
                <option value="">Seleccione...</option>
                {metodosPago.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </>
            )}
          </select>

          <label>Archivo</label>
          <input type="file" className="form-control" onChange={handleFile} />

          <div className="mt-3 d-flex gap-2">
            <button className="btn btn-primary" onClick={handleSubmit}>
              {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" /> Guardando...
                </>
              ) : (
                "Subir"
              )}
            </button>

            <button className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </div>
      </div>

      <LoadingOverlay show={loading} />
    </div>
  );
}

export default AddFacturaModal;
