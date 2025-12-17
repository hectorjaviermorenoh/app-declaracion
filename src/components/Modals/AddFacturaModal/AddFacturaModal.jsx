import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

// Contextos
import { useFacturas } from "../../../context/FacturasContext";
import { useProductos } from "../../../context/ProductosContext";

// Componentes reutilizables
import LoadingOverlay from "../../LoadingOverlay/LoadingOverlay";
import FormErrorList from "../../FormErrorList/FormErrorList";

// Hooks y utilidades
import { useFormValidator } from "../../../hooks/useFormValidator";
import { normalizeField } from "../../../utils/formValidator";

// Estilos
import "./AddFacturaModal.scss";

/**
 * Modal para subir una factura.
 *
 * Responsabilidades:
 * - Capturar información básica de la factura
 * - Validar el formulario
 * - Subir archivo + metadata al backend (Drive)
 *
 * @param {Function} onClose  Cierra el modal
 * @param {Function} onSaved  Callback cuando la factura se guarda correctamente
 */
function AddFacturaModal({ onClose, onSaved }) {
  /* ============================
   * Contextos
   * ============================ */
  const { subirFactura } = useFacturas();
  const { getProductos } = useProductos();

  /* ============================
   * Validaciones
   * ============================ */
  const {
    errors,
    validateField,
    validateForm,
    clearErrors,
    clearError,
  } = useFormValidator();

  /* ============================
   * Estados
   * ============================ */
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

  const [metodosDinamicos, setMetodosDinamicos] = useState([]);

  /* ============================
   * Handlers
   * ============================ */

  /**
   * Maneja cambios en inputs de texto/select
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  /**
   * Maneja selección de archivo
   */
  const handleFile = (e) => {
    const file = e.target.files[0];
    setForm((prev) => ({ ...prev, archivo: file }));
    validateField("archivo", file);
  };

  /* ============================
   * Utilidades
   * ============================ */

  /**
   * Capitaliza cada palabra de un texto
   */
  const capitalizar = (texto) =>
    texto
      .toLowerCase()
      .split(" ")
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join(" ");

  /**
   * Formatea valores numéricos a COP
   */
  const formatCOP = (num) => {
    if (!num) return "";
    return new Intl.NumberFormat("es-CO").format(num);
  };

  /* ============================
   * Carga métodos de pago dinámicos
   * ============================ */
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

  /* ============================
   * Métodos de pago
   * ============================ */
  const metodosFijos = [
    "Tarjeta Débito",
    "Tarjeta Crédito",
    "Transferencia",
    "Efectivo",
    "Bre-B",
    "Nequi",
    "Daviplata",
  ];

  const metodosPago = Array.from(
    new Set([...metodosFijos, ...metodosDinamicos])
  ).sort((a, b) => {
    const aTar = a.toLowerCase().startsWith("tarjeta");
    const bTar = b.toLowerCase().startsWith("tarjeta");
    if (aTar && !bTar) return -1;
    if (!aTar && bTar) return 1;
    return a.localeCompare(b);
  });

  /* ============================
   * Submit
   * ============================ */
  const handleSubmit = async () => {
    clearErrors();

    const isValid = validateForm(form);
    if (!isValid) return;

    setLoading(true);

    const payload = {
      ...form,
      entidad: normalizeField(form.entidad),
      descripcion: form.descripcion
        ? normalizeField(form.descripcion)
        : "",
      metodoPago: normalizeField(form.metodoPago),
      file: form.archivo,
    };

    const resp = await subirFactura(payload);

    setLoading(false);

    if (resp.ok) {
      onSaved?.();
      onClose();
    } else {
      alert("Error: " + resp.mensaje);
    }
  };

  /* ============================
   * Render
   * ============================ */
  return (
    <div className="Add-Factura-Modal">
      <div className="modal-backdrop">
        <div className="modal-content">
          <h4>Subir factura</h4>

          {/* Errores de validación */}
          <FormErrorList errors={errors} />

          {/* Archivo */}
          <label>Archivo de la Factura</label>
          <div className="d-flex flex-column gap-2">
            <input
              type="file"
              id="fileInput"
              accept="image/*,application/pdf"
              className="d-none"
              onChange={handleFile}
            />

            {!form.archivo ? (
              <button
                type="button"
                className="btn btn-outline-info w-100 d-flex align-items-center justify-content-center gap-2"
                onClick={() => document.getElementById("fileInput").click()}
              >
                <i className="bi bi-camera"></i>
                Escanear o Seleccionar Archivo
              </button>
            ) : (
              <div className="alert alert-success d-flex justify-content-between align-items-center p-2 mb-0">
                <small className="text-truncate">✅ {form.archivo.name}</small>
                <button
                  className="btn btn-sm btn-link text-danger"
                  onClick={() => setForm((p) => ({ ...p, archivo: null }))}
                >
                  Cambiar
                </button>
              </div>
            )}
          </div>

          {/* Año */}
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
          />

          <datalist id="listaAnios">
            {Array.from({ length: 10 }).map((_, i) => {
              const y = new Date().getFullYear() - i;
              return <option key={y} value={y} />;
            })}
          </datalist>

          {/* Entidad */}
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

          {/* Descripción */}
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

          {/* Valor */}
          <label>Valor (COP)</label>
          <input
            type="text"
            className="form-control"
            name="valor"
            value={form.valor ? formatCOP(form.valor) : ""}
            onChange={(e) => {
              const raw = e.target.value.replace(/\D/g, "");
              setForm((p) => ({ ...p, valor: raw }));
              validateField("valor", raw);
              clearError("valor");
            }}
            onBlur={() => validateField("valor", form.valor)}
          />

          {/* Método de pago */}
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

          {/* Acciones */}
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
