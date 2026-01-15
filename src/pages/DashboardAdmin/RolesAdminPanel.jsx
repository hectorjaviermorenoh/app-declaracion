 import React, { useState, useEffect } from "react";
import { useRolesAdmin } from "../../context/admin/RolesAdminContext";
import { Button, Form, Table, Spinner, Modal, Badge } from "react-bootstrap";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import ConfirmActionModal from "../../components/Modals/ConfirmActionModal/ConfirmActionModal";
import RolSkeleton from "../../components/Skeletons/Admin/RolSkeleton/RolSkeleton";
import { usePermisos } from "../../hooks/usePermisos.js";
import NoPermiso from "../../components/NoPermiso/NoPermiso";
import FormErrorList from "../../components/FormErrorList/FormErrorList";
import { useFormValidator } from "../../hooks/useFormValidator";
import { normalizeField } from "../../utils/formValidator";
import "./Styles/RolesAdminPanel.scss";


const RolesAdminPanel = () => {
  const {roles, funcionesDisponibles, getDatos, addDato, updateDato, deleteDato, loading,} = useRolesAdmin();
  const { errors, validateField, validateForm, clearErrors, clearError } = useFormValidator();

  const [showModal, setShowModal] = useState(false);
  const [nuevoRol, setNuevoRol] = useState("");
  const [permisosSeleccionados, setPermisosSeleccionados] = useState([]);
  const [rolEditando, setRolEditando] = useState(null);
  const [selectedRol, setSelectedRol] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { puede } = usePermisos();
  const puedeVerRoles = puede("getRoles");


  /******************************
   * 🔄 Cargar roles al abrir
   ******************************/
  useEffect(() => {
    if(puedeVerRoles){
      getDatos();
    }
  }, [getDatos, puedeVerRoles]);

  /******************************
   * 🧩 Crear o actualizar rol
   ******************************/
  const handleGuardarRol = async () => {
    clearErrors();

    const camposAValidar = {
      rolPermisos: permisosSeleccionados,
    };

    if (!rolEditando) {
      camposAValidar.rolNombre = nuevoRol;
    }

    const isValid = validateForm(camposAValidar);

    if (!isValid) return;

    const nombreNormalizado = normalizeField(nuevoRol);

    if (rolEditando) {
      await updateDato(rolEditando.rol, permisosSeleccionados);
    } else {
      await addDato(nombreNormalizado, permisosSeleccionados);
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
    setPermisosSeleccionados((rol.permisos || []).map(p => p.trim()));

    setShowModal(true);
  };


  /******************************
   * ✅ Manejo de checkboxes
   ******************************/
  const togglePermiso = (permiso) => {
    const updated = permisosSeleccionados.includes(permiso)
      ? permisosSeleccionados.filter((p) => p !== permiso)
      : [...permisosSeleccionados, permiso];

    setPermisosSeleccionados(updated);
    validateField("rolPermisos", updated);
  };


  const seleccionarTodos = () => {
    const updated =
      permisosSeleccionados.length === funcionesDisponibles.length
        ? []
        : funcionesDisponibles;

    setPermisosSeleccionados(updated);
    validateField("rolPermisos", updated);
  };


  // Ahora sí retornar condicional
  if (!puedeVerRoles) return <NoPermiso />;

return (
    <div className="roles-admin-container p-3">
      {/* ---------- ENCABEZADO --------- */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold mb-0">Administración de Roles</h4>
        <Button
          onClick={() => {
            setRolEditando(null);
            setNuevoRol("");
            setPermisosSeleccionados([]);
            setShowModal(true);
          }}
          variant="primary"
          disabled={loading}
        >
          ➕ Nuevo Rol
        </Button>
      </div>

      {/* ---------- TABLA DE ROLES (Adaptativa vía SCSS) --------- */}
      <div className="table-responsive shadow-sm rounded">
        <Table striped bordered hover className="align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th>Rol</th>
              <th>Permisos</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <RolSkeleton key={`rol-skel-${i}`} />
              ))
            ) : roles.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-4 text-muted">
                  No hay roles definidos.
                </td>
              </tr>
            ) : (
              roles.map((rol, idx) => (
                <tr key={idx}>
                  <td data-label="Rol">
                    <strong>{rol.rol}</strong>
                    {rol.rol === "administrador" && (
                      <Badge bg="warning" text="dark" className="ms-2">
                        Protegido
                      </Badge>
                    )}
                  </td>
                  <td data-label="Permisos">
                    <div className="text-muted small text-break">
                      {rol.permisos?.includes("*")
                        ? "Todos los permisos"
                        : rol.permisos?.join(", ") || "—"}
                    </div>
                  </td>

                  <td className="td-acciones text-center" data-label="Acciones">
                    <div className="ico-edit-elim">
                      <i className="bi bi-pencil-square accion-icon" title="Editar" onClick={() => handleEditarPermisos(rol)}></i>
                      {rol.rol !== "administrador" && (
                        <i className="bi bi-x-circle accion-icon text-danger" title="Eliminar" onClick={() => {setSelectedRol(rol.rol); setShowDeleteModal(true);}}></i>
                      )}
                    </div>
                  </td>



                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>

      {/* ---------- MODAL CREAR/EDITAR --------- */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {rolEditando ? `Editar Permisos: ${rolEditando.rol}` : "Crear Nuevo Rol"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormErrorList errors={errors} />

          {!rolEditando && (
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Nombre del Rol</Form.Label>
              <Form.Control
                type="text"
                value={nuevoRol}
                onChange={(e) => {
                  setNuevoRol(e.target.value);
                  clearError("rolNombre");
                }}
                onBlur={(e) => validateField("rolNombre", e.target.value)}
                placeholder="Ejemplo: Contador, Revisor, Supervisor..."
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
            className="p-3 bg-light border rounded"
            style={{ maxHeight: "350px", overflowY: "auto" }}
          >
            <div className="row">
              {funcionesDisponibles.map((permiso) => (
                <div key={permiso} className="col-md-6 col-lg-4 mb-2">
                  <Form.Check
                    type="checkbox"
                    id={`perm-${permiso}`}
                    label={<span className="small">{permiso}</span>}
                    checked={permisosSeleccionados.includes(permiso)}
                    onChange={() => togglePermiso(permiso)}
                  />
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleGuardarRol} disabled={loading}>
            {loading ? (
              <>
                <Spinner size="sm" animation="border" className="me-2" />
                Guardando...
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
        title="Eliminar Rol"
        message={
          <>¿Seguro que deseas eliminar el rol <strong>{selectedRol}</strong>?</>
        }
        confirmLabel="Eliminar"
        confirmVariant="danger"
        onConfirm={() => deleteDato(selectedRol)}
      />
    </div>
  );




};

export default RolesAdminPanel;
