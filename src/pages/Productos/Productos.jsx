import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Toast, ToastContainer } from "react-bootstrap";
import UploadModal from "../../components/productos/UploadModal/UploadModal";
import SelectProductosModal from "../../components/productos/SelectProductosModal/SelectProductosModal";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import { useBackendUrl } from "../../hooks/useBackendUrl.js";
import "./Productos.scss";

export default function Productos() {
  const { backendUrl } = useBackendUrl();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Estados para flujo de subida
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showSelectModal, setShowSelectModal] = useState(false);
  const [selectedProducto, setSelectedProducto] = useState(null);
  const [archivo, setArchivo] = useState(null);
  const [anioSeleccionado, setAnioSeleccionado] = useState("");

  const [toastMsg, setToastMsg] = useState("");
  const [toastVariant, setToastVariant] = useState("success");
  const [showToast, setShowToast] = useState(false);


  // ✅ Cargar productos al inicio
  useEffect(() => {
    if (backendUrl) {
      fetchProductos();
    }

    if (!backendUrl) {
      setToastVariant("danger");
      setToastMsg("⚠️ No hay URL configurada para el backend.");
      setShowToast(true);
      return;
    }

  }, [backendUrl]);

  const fetchProductos = async () => {
    try {
      setLoading(true);
      const resp = await fetch(`${backendUrl}?accion=getProductos`);
      const data = await resp.json();
      setProductos(data.data);
    } catch (err) {
      console.error("❌ Error cargando productos:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Abrir modal de subir archivo
  const handleUpload = (producto) => {
    setSelectedProducto(producto);
    setArchivo(null);
    setAnioSeleccionado("");
    setShowUploadModal(true);
  };

  // ✅ Confirmación en primer modal
  const handleUploadConfirm = async (anio, aplicaVarios, file) => {
    setShowUploadModal(false);
    setAnioSeleccionado(anio);
    setArchivo(file);

    if (aplicaVarios) {
      setShowSelectModal(true);
    } else {
      await subirArchivo([selectedProducto.id], anio, file);
    }
  };

  // ✅ Confirmación en segundo modal (varios productos)
  const handleSelectProductos = async (selectedIds) => {
    setShowSelectModal(false);
    if (archivo && anioSeleccionado) {
      await subirArchivo(selectedIds, anioSeleccionado, archivo);
    }
  };

  // ✅ Función subir archivo al backend
  const subirArchivo = async (productosId, anio, file) => {
    if (!backendUrl) return alert("⚠️ Configure primero la URL del backend");
    if (!file) return alert("⚠️ Seleccione un archivo");

    setLoading(true);

    try {
      const base64 = await toBase64(file);

      const payload = {
        accion: "subirArchivo",
        anio,
        productosId,
        archivo: {
          nombre: file.name,
          base64,
          tipo: file.type,
        },
      };

      const resp = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await resp.json();
      console.log("📩 Respuesta backend:", data);

      if (data.status === "ok") {
        setToastVariant("success");
        setToastMsg("✅ Archivo subido correctamente");
        setShowToast(true);
        fetchProductos(); // refrescar productos
      } else {
        alert("⚠️ Error L119: " + data.mensaje);
      }



    } catch (error) {
      setToastVariant("danger");
      setToastMsg("❌ Error al guardar el producto");
      setShowToast(true);
      console.error("❌ Error subiendo archivo:", error);

    } finally {
      setLoading(false);
    }
  };

  // 🔧 Helper: archivo a Base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });

  return (
    <>
      <Container className="productos-page">
        <h2 className="mb-4">Productos</h2>
        <Row>
          {productos.map((prod) => (
            <Col xs={12} md={6} lg={4} key={prod.id} className="mb-3">
              <Card className="producto-card">
                <Card.Body>
                  <Card.Title>{prod.nombre}</Card.Title>
                  <Card.Text>{prod.descripcion}</Card.Text>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleUpload(prod)}
                  >
                    Subir Archivo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modales */}
        <UploadModal
          show={showUploadModal}
          onClose={() => setShowUploadModal(false)}
          onConfirm={handleUploadConfirm}
        />

        <SelectProductosModal
          show={showSelectModal}
          onClose={() => setShowSelectModal(false)}
          productos={productos}
          onConfirm={handleSelectProductos}
        />

        {/* Overlay loading */}
        <LoadingOverlay show={loading} />
      </Container>
      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          bg={toastVariant}
          show={showToast}
          autohide
          delay={3000}
          onClose={() => setShowToast(false)}
        >
          <Toast.Header>
            <strong className="me-auto">Productos</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMsg}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
