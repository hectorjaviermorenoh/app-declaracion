import React, { useState, useEffect } from "react";
import { useRolesAdmin } from "../../context/admin/RolesAdminContext";
import { Button, Form, Table, Spinner, Modal, Badge } from "react-bootstrap";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";

const RolesAdminPanel = () => {
  const {
    roles,
    funcionesDisponibles,
    getDatos,
    addDato,
    updateDato,
    deleteDato,
    loading,
  } = useRolesAdmin();

  const [showModal, setShowModal] = useState(false);
  const [nuevoRol, setNuevoRol] = useState("");
  const [permisosSeleccionados, setPermisosSeleccionados] = useState([]);
  const [rolEditando, setRolEditando] = useState(null);

  /******************************
   * 🔄 Cargar roles al abrir
   ******************************/
  useEffect(() => {
    getDatos();
  }, [getDatos]);

  /******************************
   * 🧩 Crear o actualizar rol
   ******************************/
  const handleGuardarRol = async () => {
    if (!nuevoRol.trim()) return alert("Debe ingresar un nombre para el rol");

    if (rolEditando) {
      await updateDato(rolEditando.rol, permisosSeleccionados);
    } else {
      await addDato(nuevoRol, permisosSeleccionados);
    }

    setShowModal(false);
    setNuevoRol("");
    setPermisosSeleccionados([]);
    setRolEditando(null);
  };

  /******************************
   * ⚙️ Editar permisos de rol existente
   ******************************/
  const handleEditarPermisos = (rol) => {
    setRolEditando(rol);
    setNuevoRol(rol.rol);
    setPermisosSeleccionados(rol.permisos || []);
    setShowModal(true);
  };

  /******************************
   * 🗑️ Eliminar rol
   ******************************/
  const handleEliminarRol = async (rol) => {
    if (window.confirm(`¿Eliminar el rol "${rol}"?`)) {
      await deleteDato(rol);
    }
  };

  /******************************
   * ✅ Manejo de checkboxes
   ******************************/
  const togglePermiso = (permiso) => {
    setPermisosSeleccionados((prev) =>
      prev.includes(permiso)
        ? prev.filter((p) => p !== permiso)
        : [...prev, permiso]
    );
  };

  const seleccionarTodos = () => {
    if (permisosSeleccionados.length === funcionesDisponibles.length) {
      setPermisosSeleccionados([]);
    } else {
      setPermisosSeleccionados(funcionesDisponibles);
    }
  };

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Administración de Roles</h4>
        <Button onClick={() => setShowModal(true)} variant="primary">
          ➕ Nuevo Rol
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Rol</th>
              <th>Permisos</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((rol, idx) => (
              <tr key={idx}>
                <td>
                  <strong>{rol.rol}</strong>
                  {rol.rol === "administrador" && (
                    <Badge bg="warning" className="ms-2">
                      Protegido
                    </Badge>
                  )}
                </td>
                <td>
                  {rol.permisos?.includes("*")
                    ? "Todos los permisos"
                    : rol.permisos?.join(", ") || "—"}
                </td>
                <td className="text-center">
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    className="me-2"
                    onClick={() => handleEditarPermisos(rol)}
                  >
                    ✏️ Editar
                  </Button>
                  {rol.rol !== "administrador" && (
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => handleEliminarRol(rol.rol)}
                    >
                      🗑️ Eliminar
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* MODAL CREAR/EDITAR ROL */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {rolEditando ? "Editar Permisos del Rol" : "Crear Nuevo Rol"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!rolEditando && (
            <Form.Group className="mb-3">
              <Form.Label>Nombre del Rol</Form.Label>
              <Form.Control
                type="text"
                value={nuevoRol}
                onChange={(e) => setNuevoRol(e.target.value)}
                placeholder="Ejemplo: contador, revisor, supervisor..."
              />
            </Form.Group>
          )}

          <div className="d-flex justify-content-between align-items-center mb-2">
            <Form.Label className="fw-bold mb-0">
              Permisos del Rol ({permisosSeleccionados.length})
            </Form.Label>
            <Button
              size="sm"
              variant="outline-primary"
              onClick={seleccionarTodos}
            >
              {permisosSeleccionados.length === funcionesDisponibles.length
                ? "Deseleccionar todos"
                : "Seleccionar todos"}
            </Button>
          </div>

          <div
            style={{
              maxHeight: "400px",
              overflowY: "auto",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            {funcionesDisponibles.map((permiso) => (
              <Form.Check
                key={permiso}
                type="checkbox"
                label={permiso}
                checked={permisosSeleccionados.includes(permiso)}
                onChange={() => togglePermiso(permiso)}
              />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleGuardarRol}>
            💾 Guardar
          </Button>
        </Modal.Footer>
        <LoadingOverlay show={loading} />
      </Modal>


    </div>
  );
};

export default RolesAdminPanel;
