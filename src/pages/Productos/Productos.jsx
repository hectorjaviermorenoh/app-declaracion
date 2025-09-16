import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Toast, ToastContainer } from "react-bootstrap";
import UploadModal from "../../components/productos/UploadModal/UploadModal";
import { useToast } from "../../context/ToastContext";
import SelectProductosModal from "../../components/productos/SelectProductosModal/SelectProductosModal";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import AddProductoModal from "../../components/AddProductoModal/AddProductoModal";
import DeleteProductoModal from "../../components/DeleteProductoModal/DeleteProductoModal";
import { useBackends } from "../../context/BackendsContext";
import { useProductos } from "../../context/ProductosContext.jsx";
import "./Productos.scss";

export default function Productos() {
  // const { activeBackend } = useBackends();
  const { activeBackend, loading: backendsLoading } = useBackends();
  const { productos, loading, anioAnterior, refreshProductos, subirArchivo, replaceArchivo } = useProductos();

  const { showToast } = useToast();

  const [btnPos, setBtnPos] = useState({ top: 80, left: null, right: 20 });
  const [showAddModal, setShowAddModal] = useState(false);

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showSelectModal, setShowSelectModal] = useState(false);
  const [selectedProducto, setSelectedProducto] = useState(null);
  const [archivo, setArchivo] = useState(null);
  const [anioSeleccionado, setAnioSeleccionado] = useState("");
  const [showTitle, setshowTitle] = useState("");

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [productoOrigen, setProductoOrigen] = useState(null);



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
    if (!backendsLoading && !activeBackend ) {
      showToast("⚠️ No hay URL configurada para el backend.", "info", 2000, "Productos");
      return;
    }
    refreshProductos(); // ahora lo hace el contexto
  }, [activeBackend, refreshProductos]);

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

    console.log("📤 UploadConfirm payload:", {
      aplicaVarios,
      productoOrigen: selectedProducto?.id,
      anio,
      file: file?.name,
      replaceOnlyThis
    });

    // if (aplicaVarios) {
    //   setProductoOrigen(selectedProducto);   // ✅ Guardar producto inicial
    //   setShowSelectModal(true);
    // } else {
    //   subirArchivo(selectedProducto, anio, file);
    // }

    // if (selectedProducto && selectedProducto.tieneArchivo) {
    //   const r = await replaceArchivo(selectedProducto.id, anio, file, replaceOnlyThis);
    //   showToast(`${r.mensaje}`, `${r.ok ? "success" : "danger"}`, 3000, "Productos");
    // } else {
    //   const r = await subirArchivo([selectedProducto.id], anio, file);
    //   showToast(`${r.mensaje}`, `${r.ok ? "success" : "danger"}`, 3000, "Productos");
    // }

    if (aplicaVarios) {
      // 👉 solo abrir el modal, NO subir nada todavía
      setProductoOrigen(selectedProducto);
      setShowSelectModal(true);
    } else {
      if (selectedProducto && selectedProducto.tieneArchivo) {
        const r = await replaceArchivo(selectedProducto.id, anio, file, replaceOnlyThis);
        console.log("📥 Backend response (replaceArchivo):", r);
        showToast(`${r.mensaje}`, `${r.ok ? "success" : "danger"}`, 3000, "Productos");
      } else {
        const r = await subirArchivo([selectedProducto.id], anio, file);
        console.log("📥 Backend response (subirArchivo uno):", r);
        showToast(`${r.mensaje}`, `${r.ok ? "success" : "danger"}`, 3000, "Productos");
      }
    }

  };

  // confirm del SelectProductosModal (varios)
  const handleSelectProductos = async (selectedIds) => {
    setShowSelectModal(false);

    console.log("📤 SelectProductos payload:", {
      selectedIds,
      anio: anioSeleccionado,
      file: archivo?.name
    });

    if (archivo && anioSeleccionado) {
      const r = await subirArchivo(selectedIds, anioSeleccionado, archivo);
      console.log("📥 Backend response (subirArchivo varios):", r);
      showToast(`${r.mensaje}`, `${r.ok ? "success" : "danger"}`, 3000, "Productos");
    }
  };

  const deleteProducto = async (productoId) => {
    if (!activeBackend ) return;

    setShowDeleteModal(false); // 👈 cerrar modal siempre

    try {
      const payload = {
        accion: "deleteProducto",
        id: productoId,
      };

      const resp = await fetch(activeBackend.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });


      const data = await resp.json();
      console.log("🗑️ Respuesta deleteProducto:", data);

      if (data.status === "ok") {
        showToast("✅ Producto eliminado correctamente", "success", 3000, "Productos");
        await refreshProductos();   // 👈 refrescar productos
      } else {
        showToast(`❌ Error al eliminar: ${(data.mensaje || "sin detalle")}`, "success", 3000, "Productos");
      }
    } catch (err) {
      console.error("❌ Error eliminando producto:", err);
      showToast("❌ Error eliminando producto", "success", 3000, "Productos");
    } finally {
      setShowDeleteModal(false); // 👈 cerrar modal siempre
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

                  <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 m-2"
                    aria-label="borrar"
                    onClick={() => {
                      setSelectedProducto(prod);
                      setShowDeleteModal(true);
                    }}
                  ></button>


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
                          setshowTitle("Remplazar archivo");
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
                        setshowTitle("Subir Archivo");
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
          productoOrigen={productoOrigen}   // ✅ nuevo prop
          productos={productos}
        />


        <AddProductoModal
          show={showAddModal}
          onHide={() => setShowAddModal(false)}
          onProductoAgregado={() => setShowAddModal(false)}
        />

        <DeleteProductoModal
          show={showDeleteModal}
          onHide={() => setShowDeleteModal(false)}
          producto={selectedProducto}
          onDelete={deleteProducto}
        />


        <LoadingOverlay show={loading} />
      </Container>

    </>
  );
}
