import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Toast, ToastContainer } from "react-bootstrap";
import UploadModal from "../../components/productos/UploadModal/UploadModal";
import SelectProductosModal from "../../components/productos/SelectProductosModal/SelectProductosModal";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import AddProductoModal from "../../components/AddProductoModal/AddProductoModal";
import { useBackendUrl } from "../../hooks/useBackendUrl.js";
import { useProductos } from "../../context/ProductosContext.jsx";
import "./Productos.scss";

export default function Productos() {
  const { backendUrl } = useBackendUrl();
  const {
    productos,
    loading,
    anioAnterior,
    refreshProductos,
    subirArchivo,
    replaceArchivo
  } = useProductos();

  const [btnPos, setBtnPos] = useState({ top: 80, left: null, right: 20 });
  const [showAddModal, setShowAddModal] = useState(false);

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showSelectModal, setShowSelectModal] = useState(false);
  const [selectedProducto, setSelectedProducto] = useState(null);
  const [archivo, setArchivo] = useState(null);
  const [anioSeleccionado, setAnioSeleccionado] = useState("");
  const [showTitle, setshowTitle] = useState("");

  const [toastMsg, setToastMsg] = useState("");
  const [toastVariant, setToastVariant] = useState("success");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const savedPos = localStorage.getItem("btnAddProductoPos");
    if (savedPos) setBtnPos(JSON.parse(savedPos));
  }, []);

  const handleDragEnd = (e) => {
    const btnWidth = 45;
    const btnHeight = 45;
    const padding = 10;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let newLeft = e.clientX - btnWidth / 2;
    let newTop = e.clientY - btnHeight / 2;
    if (newLeft < padding) newLeft = padding;
    if (newTop < padding) newTop = padding;
    if (newLeft + btnWidth > viewportWidth - padding)
      newLeft = viewportWidth - btnWidth - padding;
    if (newTop + btnHeight > viewportHeight - padding)
      newTop = viewportHeight - btnHeight - padding;

    const newPos = { top: newTop, left: newLeft, right: "auto" };
    setBtnPos(newPos);
    localStorage.setItem("btnAddProductoPos", JSON.stringify(newPos));
  };

  // ✅ carga inicial
  useEffect(() => {
    if (!backendUrl) {
      setToastVariant("danger");
      setToastMsg("⚠️ No hay URL configurada para el backend.");
      setShowToast(true);
      return;
    }
    refreshProductos(); // ahora lo hace el contexto
  }, [backendUrl, refreshProductos]);

  // abrir modal subir/replace
  const handleUpload = (producto) => {
    setSelectedProducto(producto);
    setArchivo(null);
    setAnioSeleccionado("");
    setShowUploadModal(true);
  };

  // confirm del UploadModal
  const handleUploadConfirm = async (anio, aplicaVarios, file, replaceOnlyThis) => {
    setShowUploadModal(false);
    setAnioSeleccionado(anio);
    setArchivo(file);

    if (aplicaVarios) {
      setShowSelectModal(true);
      return;
    }

    if (selectedProducto && selectedProducto.tieneArchivo) {
      const r = await replaceArchivo(selectedProducto.id, anio, file, replaceOnlyThis);
      setToastVariant(r.ok ? "success" : "danger");
      setToastMsg(r.mensaje);
      setShowToast(true);
    } else {
      const r = await subirArchivo([selectedProducto.id], anio, file);
      setToastVariant(r.ok ? "success" : "danger");
      setToastMsg(r.mensaje);
      setShowToast(true);
    }
  };

  // confirm del SelectProductosModal (varios)
  const handleSelectProductos = async (selectedIds) => {
    setShowSelectModal(false);
    if (archivo && anioSeleccionado) {
      const r = await subirArchivo(selectedIds, anioSeleccionado, archivo);
      setToastVariant(r.ok ? "success" : "danger");
      setToastMsg(r.mensaje);
      setShowToast(true);
    }
  };

  return (
    <>
      <Container className="productos-page">
        <div className="productos-container">
          <h2 className="mb-4">Productos</h2>

          {/* FAB solo < 992px (ya lo limitaste en SCSS) */}
          <Button
            className="btn-add-producto fab-move"
            style={{ top: btnPos.top, left: btnPos.left, right: btnPos.right, position: "fixed" }}
            draggable
            onDragEnd={handleDragEnd}
            onClick={() => setShowAddModal(true)}
            title="Adicionar Producto"
          >
            +
          </Button>
        </div>

        <Row>
          {productos.map((prod) => (
            <Col xs={12} md={6} lg={4} key={prod.id} className="mb-3">
              <Card className={`producto-card ${prod.tieneArchivo ? "producto-ok" : ""}`}>
                <Card.Body>
                  <Card.Title>{prod.nombre}</Card.Title>
                  <Card.Text>{prod.descripcion}</Card.Text>

                  {prod.tieneArchivo ? (
                    <>
                      <p className="mb-2 hector">
                        <small>
                          Archivo ({prod.archivoInfo?.anio}):{" "}
                          <a href={prod.archivoInfo?.link} target="_blank" rel="noopener noreferrer">
                            {prod.archivoInfo?.nombreArchivo || "Ver archivo"}
                          </a>
                        </small>
                      </p>
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => {
                          handleUpload(prod);
                          setshowTitle("Remplazar archivo");
                        }}
                      >
                        Modificar archivo
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => {
                        handleUpload(prod);
                        setshowTitle("Subir Archivo");
                      }}
                    >
                      Subir Archivo
                    </Button>
                  )}
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
          title={showTitle}
          anioDefault={showTitle === "Remplazar archivo" ? anioAnterior : ""}
        />

        <SelectProductosModal
          show={showSelectModal}
          onClose={() => setShowSelectModal(false)}
          productos={productos}
          onConfirm={handleSelectProductos}
        />

        <AddProductoModal
          show={showAddModal}
          onHide={() => setShowAddModal(false)}
          onProductoAgregado={() => refreshProductos()}
        />

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
