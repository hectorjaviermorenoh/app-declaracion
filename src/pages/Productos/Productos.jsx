import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AddProductoModal from "../../components/Modals/Productos/AddProductoModal/AddProductoModal";
import UploadModal from "../../components/Modals/Productos/UploadModal/UploadModal";
import SelectProductosModal from "../../components/Modals/Productos/SelectProductosModal/SelectProductosModal";
import ConfirmActionModal from "../../components/Modals/ConfirmActionModal/ConfirmActionModal";
import { useProductos } from "../../context/ProductosContext.jsx";
import { useToast } from "../../context/ToastContext";
import { confirmarAccion } from "../../utils/alerts.js";
import ProductSkeleton from "../../components/Skeletons/ProductSkeleton/ProductSkeleton";
import { usePermisos } from "../../hooks/usePermisos.js";
import "./Productos.scss";

export default function Productos() {
  const isMobile = window.innerWidth < 2000;

  const { puede } = usePermisos();
  const puedesubirArchivo = puede("subirArchivoProducto");
  const puedeRemplazarArchivo = puede("remplaceArchivo");
  const puedeEliminarProducto = puede("eliminarProducto");
  const puedeAgregarProducto = puede("agregarProducto");
  const puedeEditarProducto = puede("actualizarProducto");

  const {
    registroProductos,
    loading,
    anioAnterior,
    refreshProductos,
    subirArchivo,
    remplaceArchivo,
    deleteProducto,
  } = useProductos();



  const { showToast } = useToast();

  const [setBtnPos] = useState({ top: 80, left: null, right: 20 });
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
  }, [setBtnPos]);



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
  async function manejarArchivo({
    tipo,
    productoIds,
    anio,
    file,
    replaceOnlyThis = false,
    nombreProducto = "",
    usarExistente = false,
    forzarTodosLosAnios = false
  }) {

    let respuesta;

    // 1️⃣ Primera llamada al backend
    if (tipo === "reemplazar") {
      respuesta = await remplaceArchivo(
        productoIds[0],
        anio,
        file,
        replaceOnlyThis,
        nombreProducto,
        usarExistente,
        forzarTodosLosAnios
      );
    } else {
      respuesta = await subirArchivo(productoIds, anio, file, usarExistente);
    }

    // 2️⃣ Si el backend detecta archivo existente
    if (respuesta.existe) {

      const confirmar = await confirmarAccion({
        titulo: "Archivo existente",
        mensaje: respuesta.mensaje,
        textoConfirmar: "✅ Usar archivo existente",
        textoCancelar: "❌ Cancelar"
      });

      if (!confirmar) {
        showToast("❌ Operación cancelada por el usuario", "warning", 3000, "Productos");
        return;
      }

      // 3️⃣ Repetir llamada usando archivo existente
      if (tipo === "reemplazar") {
        respuesta = await remplaceArchivo(
          productoIds[0],
          anio,
          file,
          replaceOnlyThis,
          nombreProducto,
          true, // 👈 forzado
          forzarTodosLosAnios
        );
      } else {
        respuesta = await subirArchivo(productoIds, anio, file, true);
      }
    }

    // 4️⃣ Mostrar resultado final
    showToast(respuesta.mensaje, respuesta.ok ? "success" : "danger", 10000, "Productos");
  }

  /* =============================
     Confirm UploadModal
  ============================== */
  const handleUploadConfirm = async (anio, aplicaVarios, file, replaceOnlyThis) => {
    // setShowUploadModal(false);
    setArchivo(file);
    setAnioSeleccionado(anio);

    if (aplicaVarios) {
      setProductoOrigen(selectedProducto);
      setShowSelectModal(true);
      setShowUploadModal(false);
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

    setShowUploadModal(false);
  };

  /* =============================
     Confirm SelectProductosModal
  ============================== */
  const handleSelectProductos = async (selectedIds) => {



    if (!archivo || !anioSeleccionado) return;

    await manejarArchivo({
      tipo: "subir",
      productoIds: selectedIds,
      anio: anioSeleccionado,
      file: archivo,
    });

    setShowSelectModal(false);

  };

  return (
    <>
      <Container className="productos-page">
        <div className="productos-container">
          <h2 className="mb-4">Productos</h2>
        </div>
        <Row>
          {loading ? (
            // 1. Muestra Skeletons mientras carga
            Array.from({ length: 6 }).map((_, i) => (
              <ProductSkeleton key={`skeleton-${i}`} />
            ))
          ) : (
            // 2. Muestra los productos reales SOLO cuando loading es false
            registroProductos.map((prod) => (
              <Col xs={12} md={6} lg={4} key={prod.id} className="mb-3">
                <Card className={`producto-card ${prod.tieneArchivo ? "producto-ok" : ""}`}>
                  <Card.Body>

                    {/* Contenedor de acciones (Esquina superior derecha) */}
                    <div className="position-absolute top-0 end-0 m-2 d-flex gap-2 align-items-center">

                      {/* ✏️ BOTÓN EDITAR */}
                      <button
                        type="button"
                        className="editicon accion-icon"
                        disabled={!puedeEditarProducto || prod.tieneArchivo}
                        onClick={() => {
                          if(!puedeEditarProducto) return;
                          setSelectedProducto(prod); // Cargamos los datos del producto
                          setShowAddModal(true);     // Abrimos el modal
                        }}
                        // title="Editar producto"
                        title={
                            prod.tieneArchivo
                              ? "No se puede editar un producto con archivo vinculado"
                              : !puedeEditarProducto
                                ? "No tienes permisos para editar"
                                : "Editar producto"
                          }
                          style={{
                              // Aplicamos opacidad visual si está deshabilitado
                              opacity: (!puedeEditarProducto || prod.tieneArchivo) ? 0.3 : 1,
                              cursor: (!puedeEditarProducto || prod.tieneArchivo) ? 'not-allowed' : 'pointer'
                            }}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>

                      {/* 🗑️ BOTÓN ELIMINAR (Tu botón original) */}
                      <button
                        type="button"
                        className="editicon accion-icon text-danger"
                        disabled={!puedeEliminarProducto}
                        style={!puedeEliminarProducto ? { opacity: 0.3, cursor: 'not-allowed' } : {}}
                        onClick={() => {
                          if(!puedeEliminarProducto) return;
                          setSelectedProducto(prod);
                          setShowDeleteModal(true);
                        }}
                      >
                        <i className="bi bi-x-circle"></i>
                      </button>
                    </div>


                    <Card.Title className="producto-title-t">{prod.entidad} {prod.nombre}</Card.Title>
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
                          disabled={!puedeRemplazarArchivo}
                          title={!puedeRemplazarArchivo ? "No tienes permisos para remplazar" : ""}
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
                        disabled={!puedesubirArchivo}
                        title={!puedesubirArchivo ? "No tienes permisos para subir archivos" : ""}
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
            ))
          )}
        </Row>
        {isMobile && (
          <button
          className="fab-subir"
          disabled={!puedeAgregarProducto} // Si es un <button> normal de HTML
          title={!puedeAgregarProducto ? "No tienes permisos para agregar productos" : ""}
          style={!puedeAgregarProducto ? { opacity: 0.3, cursor: 'not-allowed' } : {}}
          onClick={() => setShowAddModal(true)}
          >
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
          loading={loading}
        />
        <AddProductoModal
          show={showAddModal}
          onHide={() => {setShowAddModal(false); setSelectedProducto(null);}}
          productoAEditar={selectedProducto}
          onProductoAgregado={() => {setShowAddModal(false); setSelectedProducto(null);}}
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
      </Container>
    </>
  );
}
