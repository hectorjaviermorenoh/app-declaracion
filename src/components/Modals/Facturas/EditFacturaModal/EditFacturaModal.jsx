import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import { useFacturas } from "../../../../context/FacturasContext";
import { useProductos } from "../../../../context/ProductosContext";
import LoadingOverlay from "../../../LoadingOverlay/LoadingOverlay";
import { normalizeField } from "../../../../utils/formValidator";
import "./EditFacturaModal.scss";

function EditFacturaModal({ show, onHide, factura, onUpdated }) {
  const { updateFactura } = useFacturas();
  const { getProductos } = useProductos();
  const [loading, setLoading] = useState(false);
  const [loadingMetodos, setLoadingMetodos] = useState(true);
  const [metodosDinamicos, setMetodosDinamicos] = useState([]);

  const [formData, setFormData] = useState({
    entidad: "",
    descripcion: "",
    valor: "",
    metodoPago: "",
    registroId: "",
  });

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

  const metodosFijos = [
    "Tarjeta Débito",
    "Tarjeta Crédito",
    "Transferencia",
    "Efectivo",
    "Bre-B",
    "Nequi",
    "Daviplata",
  ];

  /* ============================
   * Efectos
   * ============================ */

  // 1. Cargar factura en el formulario
  useEffect(() => {
    if (factura) {
      setFormData({
        registroId: factura.registroId,
        entidad: factura.entidad || "",
        descripcion: factura.descripcion || "",
        valor: factura.valor || "",
        metodoPago: factura.metodoPago || "",
      });
    }
  }, [factura]);

  // 2. Cargar métodos de pago dinámicos
  useEffect(() => {
    async function cargarMetodos() {
      setLoadingMetodos(true);
      try {
        const resp = await getProductos();
        const productos = resp?.data || resp || [];

        const filtrados = productos
          .filter((p) => p.nombre?.toLowerCase().startsWith("tarjeta"))
          .map((p) => {
            const nombreLimpio = capitalizar(p.nombre);
            const entidadLimpia = p.entidad ? capitalizar(p.entidad) : "";
            return entidadLimpia
              ? `${entidadLimpia} - ${nombreLimpio}`
              : nombreLimpio;
          });

        setMetodosDinamicos(filtrados);
      } catch (error) {
        console.error("Error cargando métodos:", error);
      } finally {
        setLoadingMetodos(false);
      }
    }

    if (show) cargarMetodos(); // Solo cargar cuando el modal se abre
  }, [getProductos, show]);

  /* ============================
   * Lógica de Negocio
   * ============================ */

  // Combinar y ordenar métodos de pago
  const listaMetodosPago = Array.from(
    new Set([...metodosFijos, ...metodosDinamicos, formData.metodoPago])
  )
  .filter(Boolean) // Eliminamos nulos o vacíos
  .sort((a, b) => {
    const aTar = a.toLowerCase().startsWith("tarjeta");
    const bTar = b.toLowerCase().startsWith("tarjeta");
    if (aTar && !bTar) return -1;
    if (!aTar && bTar) return 1;
    return a.localeCompare(b);
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "valor") {
      // Eliminamos todo lo que no sea un número antes de guardar en el estado
      const rawValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: rawValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    const payload = {
      ...formData,
      entidad: normalizeField(formData.entidad),
      descripcion: formData.descripcion ? normalizeField(formData.descripcion) : "",
      metodoPago: normalizeField(formData.metodoPago),
    };

    const resp = await updateFactura(payload);

    if (resp.ok) {
      setLoading(false);
      onUpdated();
      onHide();
    } else {
      setLoading(false);
      alert(resp.mensaje || "Error al actualizar la factura");
    }
  };

  if (!factura) return null;

  return (
    <div className="edit-factura-modal">
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>✏️ Editar factura</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Entidad</Form.Label>
              <Form.Control
                type="text"
                name="entidad"
                value={formData.entidad}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Valor (COP)</Form.Label>
              <Form.Control
                type="text"
                name="valor"
                placeholder="Ej: 25.000"
                value={formData.valor ? formatCOP(formData.valor) : ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Método de pago</Form.Label>
              <Form.Select
                name="metodoPago"
                value={formData.metodoPago || ""}
                onChange={handleChange}
                disabled={loadingMetodos}
              >
                {loadingMetodos ? (
                  <option>Cargando métodos...</option>
                ) : (
                  <>
                    <option value="">Seleccione...</option>
                    {listaMetodosPago.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </>
                )}
              </Form.Select>
            </Form.Group>
          </Form>

          <LoadingOverlay show={loading} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancelar
          </Button>

          <Button variant="primary" onClick={handleSubmit} disabled={loading}>
            {loading ? (
              <>
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                {" "}Guardando...
              </>
            ) : (
              "Guardar cambios"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditFacturaModal;