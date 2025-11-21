import React, { useState, useEffect } from "react";
import { useUsuariosAdmin } from "../../context/admin/UsuariosAdminContext";
import { useAuth } from "../../context/AuthContext";
import { Button, Form, Table, Spinner, Modal, Badge } from "react-bootstrap";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import ConfirmActionModal from "../../components/Modals/ConfirmActionModal/ConfirmActionModal";
import { usePermisos } from "../../hooks/usePermisos.js";
import NoPermiso from "../../components/NoPermiso/NoPermiso";

const UsuariosAdminPanel = () => {
  const { usuarios, rolesDisponibles, getDatos, addDato, updateDato, toggleActivo, deleteDato, loading } = useUsuariosAdmin();

  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [usuarioEditando, setUsuarioEditando] = useState(null);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    correo: "",
    nombre: "",
    rol: "",
  });
  const [selectedUsuario, setSelectedUsuario] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { puede } = usePermisos();
  const puedeVerUsuarios = puede("getUsuarios");


  /******************************
   * 🔄 Cargar usuarios al abrir
   ******************************/
  useEffect(() => {
    if(puedeVerUsuarios) {
      getDatos();
    }
  }, [getDatos, puedeVerUsuarios]);

  /******************************
   * 🧩 Crear o actualizar usuario
   ******************************/
  const handleGuardarUsuario = async () => {
    if (!nuevoUsuario.correo || !nuevoUsuario.nombre || !nuevoUsuario.rol) {
      return alert("Todos los campos son obligatorios.");
    }

    if (usuarioEditando) {
      await updateDato(usuarioEditando.correo, nuevoUsuario);
    } else {
      await addDato(nuevoUsuario);
    }

    setShowModal(false);
    setUsuarioEditando(null);
    setNuevoUsuario({ correo: "", nombre: "", rol: "" });
  };

  /******************************
   * ⚙️ Editar usuario existente
   ******************************/
  const handleEditarUsuario = (usuario) => {
    setUsuarioEditando(usuario);
    setNuevoUsuario({
      correo: usuario.correo,
      nombre: usuario.nombre,
      rol: usuario.rol,
    });
    setShowModal(true);
  };

  /******************************
   * 🔄 Cambiar estado activo
   ******************************/
  const handleToggleActivo = async (usuario) => {
    await toggleActivo(usuario.correo, !usuario.activo);
  };


  // Ahora sí retornar condicional
  if (!puedeVerUsuarios) return <NoPermiso />;

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Administración de Usuarios</h4>
        <Button onClick={() => setShowModal(true)} variant="primary">
          ➕ Nuevo Usuario
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
              <th>Correo</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th className="text-center">Activo</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u, idx) => (
              <tr key={idx}>
                <td>{u.correo}</td>
                <td>{u.nombre}</td>
                <td>
                  <Badge
                    bg={u.rol === "administrador" ? "warning" : "info"}
                    text={u.rol === "administrador" ? "dark" : "white"}
                  >
                    {u.rol}
                  </Badge>
                </td>
                <td className="text-center">
                  <Form.Check
                    type="switch"
                    id={`switch-${u.correo}`}
                    checked={u.activo}
                    onChange={() => handleToggleActivo(u)}
                    label={u.activo ? "Activo" : "Inactivo"}
                  />
                </td>
                <td className="text-center">
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    className="me-2"
                    onClick={() => handleEditarUsuario(u)}
                  >
                    ✏️ Editar
                  </Button>

                  <Button
                    size="sm"
                    variant="outline-danger"
                    disabled={user?.correo === u.correo}
                    title={
                      user?.correo === u.correo
                        ? "No puedes eliminar tu propio usuario activo"
                        : "Eliminar usuario"
                    }
                    onClick={() => {
                      if (user?.correo === u.correo) return; // 🚫 Previene abrir el modal
                      setSelectedUsuario(u);
                      setShowDeleteModal(true);
                    }}
                  >
                    🗑️ Eliminar
                  </Button>


                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* MODAL CREAR / EDITAR USUARIO */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {usuarioEditando ? "Editar Usuario" : "Crear Nuevo Usuario"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              value={nuevoUsuario.correo}
              onChange={(e) =>
                setNuevoUsuario({ ...nuevoUsuario, correo: e.target.value })
              }
              placeholder="correo@ejemplo.com"
              disabled={usuarioEditando}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control
              type="text"
              value={nuevoUsuario.nombre}
              onChange={(e) =>
                setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })
              }
              placeholder="Nombre del usuario"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rol asignado</Form.Label>
            <Form.Select
              value={nuevoUsuario.rol}
              onChange={(e) =>
                setNuevoUsuario({ ...nuevoUsuario, rol: e.target.value })
              }
            >
              <option value="">Seleccionar rol...</option>
              {rolesDisponibles.map((r, i) => (
                <option key={i} value={r.rol}>
                  {r.rol}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleGuardarUsuario}>
            {loading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />{" "}
                Guardando...
              </>
            ) : (
              "💾 Guardar"
            )}
          </Button>
        </Modal.Footer>
        <LoadingOverlay show={loading} />
      </Modal>

      {/* CONFIRMAR ELIMINACIÓN */}
      <ConfirmActionModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        title="Eliminar Usuario"
        message={
          <>
            ¿Seguro que deseas eliminar al usuario{" "}
            <strong>{selectedUsuario?.correo}</strong>?
          </>
        }
        confirmLabel="Eliminar"
        confirmVariant="danger"
        onConfirm={() => deleteDato(selectedUsuario?.correo)}
      />
    </div>
  );
};

export default UsuariosAdminPanel;
