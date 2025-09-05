import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Toast, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UploadModal from "../../components/productos/UploadModal/UploadModal";
import SelectProductosModal from "../../components/productos/SelectProductosModal/SelectProductosModal";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import { useBackendUrl } from "../../hooks/useBackendUrl.js";
import "./Productos.scss";

// email autorizado para reemplazar archivos (configurable)
const AUTH_REEMPLAZO_EMAIL = "hectorjaviermorenoh@gmail.com";
// año que se declara: año actual - 1 (si estamos en 2025, será 2024)
const anioAnterior = new Date().getFullYear() - 1;

export default function Productos() {

  const navigate = useNavigate();
  const { backendUrl } = useBackendUrl();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Estados para flujo de subida
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showSelectModal, setShowSelectModal] = useState(false);
  const [selectedProducto, setSelectedProducto] = useState(null);
  const [archivo, setArchivo] = useState(null);
  const [anioSeleccionado, setAnioSeleccionado] = useState("");
  const [showTitle, setshowTitle] = useState("");

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

  const fetchArchivosPorAnio = async (anio) => {
    if (!backendUrl) return [];
    try {
      const resp = await fetch(`${backendUrl}?accion=getArchivosPorAnio&anio=${anio}`);
      const data = await resp.json();
      if (data && data.status === "ok") return data.archivos || [];
      return data.archivos || [];
    } catch (err) {
      console.error("❌ Error al obtener archivos por año:", err);
      return [];
    }
  };


  const fetchProductos = async () => {
    try {
      setLoading(true);
      // 1. obtener productos
      const resp = await fetch(`${backendUrl}?accion=getProductos`);
      const data = await resp.json();
      const productosRaw = data.data || [];

      // 2. obtener archivos del año anterior
      const archivos = await fetchArchivosPorAnio(String(anioAnterior)); // usar string por compatibilidad

      // 3. cruzar y marcar estado
      const productosConEstado = productosRaw.map((prod) => {
        // buscar si existe un registro para este producto en ese año
        const archivoAsociado =
          archivos.find(a => {
            // comparar productoId y año (string/number)
            const mismoProducto = a.productoId === prod.id || a.productoId === prod.id;
            const mismoAnio = String(a.anio) === String(anioAnterior);
            return mismoProducto && mismoAnio;
          }) || null;

        return {
          ...prod,
          tieneArchivo: !!archivoAsociado,
          archivoInfo: archivoAsociado,
        };
      });

      setProductos(productosConEstado);
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
  const handleUploadConfirm = async (anio, aplicaVarios, file, replaceOnlyThis) => {
    setShowUploadModal(false);
    setAnioSeleccionado(anio);
    setArchivo(file);

    if (aplicaVarios) {
      // abrir modal de seleccionar varios productos
      setShowSelectModal(true);
      return;
    }

    // si no aplica para varios y el producto ya tenía archivo, llamar replaceArchivo
    if (selectedProducto && selectedProducto.tieneArchivo) {
      await replaceArchivo(selectedProducto.id, anio, file, replaceOnlyThis);
    } else {
      // caso normal: subir archivo (single product)
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
  // const replaceArchivo = async (productoId, anio, file) => {
  //   if (!backendUrl) return alert("⚠️ Configure primero la URL del backend");
  //   if (!file) return alert("⚠️ Seleccione un archivo para reemplazar");

  //   setLoading(true);
  //   try {
  //     const base64 = await toBase64(file);

  //     const payload = {
  //       accion: "replaceArchivo",
  //       productoId,
  //       anio: String(anio),
  //       correo: AUTH_REEMPLAZO_EMAIL,
  //       archivo: {
  //         nombre: file.name,
  //         base64,
  //         tipo: file.type,
  //       },
  //     };

  //     const resp = await fetch(backendUrl, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(payload),
  //     });

  //     const data = await resp.json();
  //     console.log("🔁 Respuesta replaceArchivo:", data);

  //     if (data.status === "ok" || data.success === true) {
  //       setToastVariant("success");
  //       setToastMsg("✅ Archivo reemplazado correctamente");
  //       setShowToast(true);
  //       await fetchProductos();
  //     } else {
  //       setToastVariant("danger");
  //       setToastMsg("❌ Error al reemplazar: " + (data.mensaje || data.message || "sin detalle"));
  //       setShowToast(true);
  //       console.error("replaceArchivo error", data);
  //     }
  //   } catch (err) {
  //     setToastVariant("danger");
  //     setToastMsg("❌ Error en replaceArchivo");
  //     setShowToast(true);
  //     console.error("❌ Error reemplazando archivo:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const replaceArchivo = async (productoId, anio, file, replaceOnlyThis = false) => {
    if (!backendUrl) return alert("⚠️ Configure primero la URL del backend");
    if (!file) return alert("⚠️ Seleccione un archivo para reemplazar");

    setLoading(true);
    try {
      const base64 = await toBase64(file);

      const payload = {
        accion: "replaceArchivo",
        productoId,
        anio: String(anio),
        correo: AUTH_REEMPLAZO_EMAIL,
        replaceOnlyThis,   // 👈 bandera
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
      console.log("🔁 Respuesta replaceArchivo:", data);

      if (data.status === "ok" || data.success === true) {
        setToastVariant("success");
        setToastMsg("✅ Archivo reemplazado correctamente");
        setShowToast(true);
        await fetchProductos();
      } else {
        setToastVariant("danger");
        setToastMsg("❌ Error al reemplazar: " + (data.mensaje || data.message || "sin detalle"));
        setShowToast(true);
        console.error("replaceArchivo error", data);
      }
    } catch (err) {
      setToastVariant("danger");
      setToastMsg("❌ Error en replaceArchivo");
      setShowToast(true);
      console.error("❌ Error reemplazando archivo:", err);
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

        <div className="productos-container">
          <h2 className="mb-4">Productos</h2>
          <Button
            className="btn-add-producto"
            draggable
            onDragEnd={(e) => {
              const btn = e.target;
              btn.style.top = `${e.clientY - 20}px`;
              btn.style.left = `${e.clientX - 20}px`;
              btn.style.right = "auto"; // quitamos right si el user lo mueve
              btn.style.position = "fixed";
            }}
            onClick={() => navigate("/productos/add")}
            title="Adicionar Producto"
          >
            +
          </Button>

          {/* <Button
            className="btn-add-producto"
            onClick={() => navigate("/productos/add")}
            title="Adicionar Producto"
          >
            +
          </Button> */}
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
                          handleUpload(prod)
                          setshowTitle("Remplazar archivo");
                        } }
                      >
                        Modificar archivo
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => {
                        handleUpload(prod)
                        setshowTitle("Subir Archivo");
                      } }
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
          anioDefault={
            showTitle === "Remplazar archivo"
              ? anioAnterior   // 👈 le mandamos el año calculado
              : ""             // para subir archivo normal lo dejamos vacío
          }
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





