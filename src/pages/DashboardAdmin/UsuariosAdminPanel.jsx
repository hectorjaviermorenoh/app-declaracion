import React, { useState, useEffect } from "react";
import { useUsuariosAdmin } from "../../context/admin/UsuariosAdminContext";
import { useAuth } from "../../context/AuthContext";
import { Button, Form, Table, Spinner, Modal, Badge, Row, Col, Card,} from "react-bootstrap";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import ConfirmActionModal from "../../components/Modals/ConfirmActionModal/ConfirmActionModal";
import { usePermisos } from "../../hooks/usePermisos.js";
import NoPermiso from "../../components/NoPermiso/NoPermiso";
import FormErrorList from "../../components/FormErrorList/FormErrorList";
import { useFormValidator } from "../../hooks/useFormValidator";
import { normalizeField } from "../../utils/formValidator";
import "./Styles/UsuariosAdminPanel.scss";

const UsuariosAdminPanel = () => {
  const { usuarios, rolesDisponibles, rolesErrorPermisos, getDatos, addDato, updateDato, toggleActivo, deleteDato, loading } = useUsuariosAdmin();
  const { errors, validateField, validateForm, clearErrors, clearError } = useFormValidator();

  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [usuarioEditando, setUsuarioEditando] = useState(null);

  const [nuevoUsuario, setNuevoUsuario] = useState({
    correo: "",
    nombreUsuario: "",
    rol: "",
  });

  const [selectedUsuario, setSelectedUsuario] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { puede } = usePermisos();
  const puedeVerUsuarios = puede("getUsuarios");

  useEffect(() => {
    if (puedeVerUsuarios) {
      getDatos();
    }
  }, [getDatos, puedeVerUsuarios]);

  // --------------------------------------
  // Guardar usuario (crear / editar)
  // --------------------------------------
  const handleGuardarUsuario = async () => {
    clearErrors();

    const isValid = validateForm({
      correo: nuevoUsuario.correo,
      nombreUsuario: nuevoUsuario.nombreUsuario,
      rol: nuevoUsuario.rol,
    });

    if (!isValid) return;

    const payload = {
      correo: nuevoUsuario.correo.toLowerCase(),
      nombre: normalizeField(nuevoUsuario.nombreUsuario),
      rol: nuevoUsuario.rol,
    };

    if (usuarioEditando) {
      await updateDato(usuarioEditando.correo, payload);
    } else {
      await addDato(payload);
    }

    setShowModal(false);
    setUsuarioEditando(null);
    setNuevoUsuario({ correo: "", nombreUsuario: "", rol: "" });
  };


  const handleEditarUsuario = (usuario) => {
    setUsuarioEditando(usuario);
    setNuevoUsuario({
      correo: usuario.correo,
      nombreUsuario: usuario.nombre,
      rol: usuario.rol,
    });

    setShowModal(true);
  };


  const handleToggleActivo = async (usuario) => {
    await toggleActivo(usuario.correo, !usuario.activo);
  };

  if (!puedeVerUsuarios) return <NoPermiso />;

  return (
    <div className="usuarios-admin p-3">
      {/* ---------- ENCABEZADO --------- */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold mb-0">
          👥 Administración de Usuarios
        </h4>

        <Button onClick={() => setShowModal(true)} variant="primary" size="sm">
          ➕ Crear Usuario
        </Button>
      </div>

      {/* ---------- TABLA PRINCIPAL --------- */}
      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" />
        </div>
      ) : usuarios.length === 0 ? (
        <div className="text-center text-muted py-4">
          No hay usuarios registrados.
        </div>
      ) : (
        <>
          <div className="table-responsive shadow-sm rounded">
            <Table hover className="align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Correo</th>
                  <th>Nombre</th>
                  <th>Rol</th>
                  <th className="text-center">Estado</th>
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
                        bg={
                          u.rol === "administrador"
                            ? "warning"
                            : u.rol === "contador"
                            ? "info"
                            : "secondary"
                        }
                        text={
                          u.rol === "administrador" ? "dark" : "white"
                        }
                        className="px-2 py-1 text-capitalize"
                      >
                        {u.rol}
                      </Badge>
                    </td>

                    <td className="text-center">
                      <Form.Check
                        type="switch"
                        checked={u.activo}
                        onChange={() => handleToggleActivo(u)}
                        label={
                          <span
                            className={
                              u.activo ? "text-success" : "text-danger"
                            }
                          >
                            {u.activo ? "Activo" : "Inactivo"}
                          </span>
                        }
                      />
                    </td>

                    <td className="text-center">
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        className="me-2"
                        onClick={() => handleEditarUsuario(u)}
                      >
                        ✏️
                      </Button>

                      <Button
                        size="sm"
                        variant="outline-danger"
                        disabled={user?.correo === u.correo}
                        onClick={() => {
                          if (user?.correo === u.correo) return;
                          setSelectedUsuario(u);
                          setShowDeleteModal(true);
                        }}
                      >
                        🗑️
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <div className="usuarios-cards">
            {usuarios.map((u, idx) => (
              <div className="usuario-card" key={idx}>
                <div className="card-header">
                  <strong>{u.nombre}</strong>
                  <Badge
                    bg={u.rol === "administrador" ? "warning" : "info"}
                    text={u.rol === "administrador" ? "dark" : "white"}
                    className="ms-2"
                  >
                    {u.rol}
                  </Badge>
                </div>

                <div className="card-body">
                  <p><strong>Correo:</strong><br /> {u.correo}</p>

                  <Form.Check
                    type="switch"
                    id={`switch-mobile-${u.correo}`}
                    checked={u.activo}
                    onChange={() => handleToggleActivo(u)}
                    label={u.activo ? "Activo" : "Inactivo"}
                  />

                  <div className="d-flex gap-2 mt-3">
                    <Button
                      size="sm"
                      variant="outline-secondary"
                      onClick={() => handleEditarUsuario(u)}
                    >
                      ✏️ Editar
                    </Button>

                    <Button
                      size="sm"
                      variant="outline-danger"
                      disabled={user?.correo === u.correo}
                      onClick={() => {
                        if (user?.correo === u.correo) return;
                        setSelectedUsuario(u);
                        setShowDeleteModal(true);
                      }}
                    >
                      🗑️ Eliminar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>


      )}

      {/* ---------- MODAL AGREGAR / EDITAR --------- */}
      <Modal show={showModal} centered onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {usuarioEditando ? "Editar Usuario" : "Nuevo Usuario"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>

          {/* 🔥 MOSTRAR ERRORES DEL FORMULARIO */}
          <FormErrorList errors={errors} />

          <Form>

            <Form.Group className="mb-3">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                value={nuevoUsuario.correo}
                onChange={(e) => {
                  const value = e.target.value.toLowerCase();
                  setNuevoUsuario({ ...nuevoUsuario, correo: value });
                  clearError("correo");
                }}
                onBlur={(e) => validateField("correo", e.target.value)}
                disabled={usuarioEditando}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                type="text"
                value={nuevoUsuario.nombreUsuario}
                onChange={(e) => {
                  setNuevoUsuario({ ...nuevoUsuario, nombreUsuario: e.target.value });
                  clearError("nombreUsuario");
                }}
                onBlur={(e) => validateField("nombreUsuario", e.target.value)}
              />
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>Rol</Form.Label>

              {rolesErrorPermisos ? (
                <div className="alert alert-warning py-2">
                  ⚠️ No tienes permiso para ver la lista de roles.
                  <br />
                  Contacta al usuario administrador.
                </div>
              ) : (
                <Form.Select
                  value={nuevoUsuario.rol}
                  onChange={(e) => {
                    setNuevoUsuario({ ...nuevoUsuario, rol: e.target.value });
                    clearError("rol");
                  }}
                  onBlur={(e) => validateField("rol", e.target.value)}
                >
                  <option value="">Seleccionar rol...</option>
                  {rolesDisponibles.map((r, i) => (
                    <option key={i} value={r.rol}>
                      {r.rol}
                    </option>
                  ))}
                </Form.Select>
              )}
            </Form.Group>






          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>

          <Button variant="success" onClick={handleGuardarUsuario}>
            {loading ? (
              <>
                <Spinner size="sm" animation="border" /> Guardando...
              </>
            ) : (
              "💾 Guardar"
            )}
          </Button>
        </Modal.Footer>

        <LoadingOverlay show={loading} />
      </Modal>

      {/* ---------- MODAL ELIMINAR --------- */}
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
