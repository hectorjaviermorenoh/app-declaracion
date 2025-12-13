import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import UploadModal from "../../components/Productos/UploadModal/UploadModal";
import SelectProductosModal from "../../components/productos/SelectProductosModal/SelectProductosModal";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import AddProductoModal from "../../components/Modals/AddProductoModal/AddProductoModal";
import ConfirmActionModal from "../../components/Modals/ConfirmActionModal/ConfirmActionModal";
import { useProductos } from "../../context/ProductosContext.jsx";
import { useToast } from "../../context/ToastContext";
import { confirmarAccion } from "../../utils/alerts.js";
import "./Productos.scss";

export default function Productos() {
  const isMobile = window.innerWidth < 2000;
  const {
    registroProductos,
    loading,
    anioAnterior,
    refreshProductos,
    subirArchivo,
    replaceArchivo,
    deleteProducto,
  } = useProductos();

  const { showToast } = useToast();

  const [btnPos, setBtnPos] = useState({ top: 80, left: null, right: 20 });
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showSelectModal, setShowSelectModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedProducto, setSelectedProducto] = useState(null);
  const [productoOrigen, setProductoOrigen] = useState(null);

  const [archivo, setArchivo] = useState(null);
  const [anioSeleccionado, setAnioSeleccionado] = useState("");
  const [showTitle, setShowTitle] = useState("");

  /* =============================
     Posición FAB
  ============================== */
  useEffect(() => {
    const savedPos = localStorage.getItem("btnAddProductoPos");
    if (savedPos) setBtnPos(JSON.parse(savedPos));
  }, []);

  // const handleDragEnd = (e) => {
  //   const btnWidth = 45;
  //   const btnHeight = 45;
  //   const padding = 10;

  //   let left = e.clientX - btnWidth / 2;
  //   let top = e.clientY - btnHeight / 2;

  //   left = Math.max(padding, Math.min(left, window.innerWidth - btnWidth - padding));
  //   top = Math.max(padding, Math.min(top, window.innerHeight - btnHeight - padding));

  //   const newPos = { top, left, right: "auto" };
  //   setBtnPos(newPos);
  //   localStorage.setItem("btnAddProductoPos", JSON.stringify(newPos));
  // };

  /* =============================
     Carga inicial
  ============================== */
  useEffect(() => {
    refreshProductos();
  }, [refreshProductos]);

  /* =============================
     Abrir modal upload
  ============================== */
  const handleUpload = (producto) => {
    setSelectedProducto(producto);
    setArchivo(null);
    setAnioSeleccionado("");
    setShowUploadModal(true);
  };

  /* =============================
     FUNCIÓN CENTRAL 🔥
  ============================== */
  const manejarArchivo = async ({
    tipo,              // "subir" | "reemplazar"
    productoIds,
    anio,
    file,
    replaceOnlyThis,
    nombreProducto,
  }) => {
    const accion =
      tipo === "reemplazar"
        ? () =>
            replaceArchivo(
              productoIds[0],
              anio,
              file,
              replaceOnlyThis,
              nombreProducto
            )
        : () => subirArchivo(productoIds, anio, file);

    const r = await accion();

    if (r.existe) {
      const confirmar = await confirmarAccion({
        titulo: "Archivo existente",
        mensaje: r.mensaje,
        textoConfirmar: "✅ Usar archivo existente",
        textoCancelar: "❌ Cancelar",
      });

      if (!confirmar) {
        showToast(
          "❌ Operación cancelada por el usuario",
          "warning",
          3000,
          "Productos"
        );
        return;
      }

      const r2 =
        tipo === "reemplazar"
          ? await replaceArchivo(
              productoIds[0],
              anio,
              file,
              true,
              nombreProducto
            )
          : await subirArchivo(productoIds, anio, file, true);

      showToast(r2.mensaje, r2.ok ? "success" : "danger", 3000, "Productos");
      return;
    }

    showToast(r.mensaje, r.ok ? "success" : "danger", 3000, "Productos");
  };

  /* =============================
     Confirm UploadModal
  ============================== */
  const handleUploadConfirm = async (anio, aplicaVarios, file, replaceOnlyThis) => {
    setShowUploadModal(false);
    setArchivo(file);
    setAnioSeleccionado(anio);

    if (aplicaVarios) {
      setProductoOrigen(selectedProducto);
      setShowSelectModal(true);
      return;
    }

    if (selectedProducto.tieneArchivo) {
      await manejarArchivo({
        tipo: "reemplazar",
        productoIds: [selectedProducto.id],
        anio,
        file,
        replaceOnlyThis,
        nombreProducto: selectedProducto.nombre,
      });
    } else {
      await manejarArchivo({
        tipo: "subir",
        productoIds: [selectedProducto.id],
        anio,
        file,
      });
    }
  };

  /* =============================
     Confirm SelectProductosModal
  ============================== */
  const handleSelectProductos = async (selectedIds) => {
    setShowSelectModal(false);

    if (!archivo || !anioSeleccionado) return;

    await manejarArchivo({
      tipo: "subir",
      productoIds: selectedIds,
      anio: anioSeleccionado,
      file: archivo,
    });
  };

  return (
    <>
      <Container className="productos-page">
        <div className="productos-container">
          <h2 className="mb-4">Productos</h2>

          {/* <Button
            className="btn-add-producto fab-move"
            style={{
              top: btnPos.top,
              left: btnPos.left,
              right: btnPos.right,
              position: "fixed",
            }}
            draggable
            onDragEnd={handleDragEnd}
            onClick={() => setShowAddModal(true)}
            title="Adicionar Producto"
          >
            +
          </Button> */}
          
        </div>

        <Row>
          {registroProductos.map((prod) => (
            <Col xs={12} md={6} lg={4} key={prod.id} className="mb-3">
              <Card className={`producto-card ${prod.tieneArchivo ? "producto-ok" : ""}`}>
                <Card.Body>
                  <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 m-2"
                    onClick={() => {
                      setSelectedProducto(prod);
                      setShowDeleteModal(true);
                    }}
                  />

                  <Card.Title>{prod.entidad} {prod.nombre}</Card.Title>
                  <Card.Text>{prod.descripcion}</Card.Text>

                  {prod.tieneArchivo ? (
                    <>
                      <p className="mb-2">
                        <small>
                          Archivo ({prod.archivoInfo?.anio}):{" "}
                          <a
                            href={prod.archivoInfo?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {prod.archivoInfo?.nombreArchivo || "Ver archivo"}
                          </a>
                        </small>
                      </p>

                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => {
                          setShowTitle("Remplazar archivo");
                          handleUpload(prod);
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
                        setShowTitle("Subir Archivo");
                        handleUpload(prod);
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

        {isMobile && (
          <button className="fab-subir" onClick={() => setShowAddModal(true)}>
            <i className="bi bi-plus-lg"></i>
          </button>
        )}

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
          onConfirm={handleSelectProductos}
          productoOrigen={productoOrigen}
          productos={registroProductos}
        />

        <AddProductoModal
          show={showAddModal}
          onHide={() => setShowAddModal(false)}
          onProductoAgregado={() => setShowAddModal(false)}
        />

        <ConfirmActionModal
          show={showDeleteModal}
          onHide={() => setShowDeleteModal(false)}
          title="Eliminar Producto"
          message={
            <>
              ¿Seguro que deseas eliminar el producto{" "}
              <strong>{selectedProducto?.nombre}</strong>?
            </>
          }
          confirmLabel="Eliminar"
          confirmVariant="danger"
          onConfirm={() => deleteProducto(selectedProducto.id)}
        />

        <LoadingOverlay show={loading} />
      </Container>
    </>
  );
}
