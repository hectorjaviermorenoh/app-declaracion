import { Modal, Button, Form } from "react-bootstrap";
import { useBackends } from "../../../context/BackendsContext";
import { useToast } from "../../..//context/ToastContext";
import { useState } from "react";

const BackendConfigModal = ({ show, onHide }) => {
  const {
    backends,
    activeBackend,
    addBackend,
    deleteBackend,
    setActiveBackend,
  } = useBackends();

  const { showToast } = useToast();

  const [newAlias, setNewAlias] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [aliasToDelete, setAliasToDelete] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAdd = () => {
    try {
      addBackend(newAlias, newUrl);
      showToast(`✅ Backend "${newAlias}" agregado`, "success", 3000);
      setNewAlias("");
      setNewUrl("");
      setShowAddForm(false);
    } catch (err) {
      showToast(`❌ ${err.message}`, "danger", 3000);
    }
  };

  const handleDeleteBackend = (alias) => {
    deleteBackend(alias);
    setAliasToDelete(null);
    showToast(`✅ Backend "${alias}" eliminado`, "success", 3000);
  };

  return (
    <>
      {/* Modal principal */}
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Configurar Backends</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {backends.length === 0 ? (
            <p>No hay backends configurados.</p>
          ) : (
            <ul className="list-group">
              {backends.map((b) => (
                <li
                  key={b.alias}
                  className={`list-group-item d-flex justify-content-between align-items-center ${
                    activeBackend?.alias === b.alias ? "active" : ""
                  }`}
                >
                  <span>{b.alias}</span>
                  <div className="d-flex gap-2">
                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => setActiveBackend(b.alias)}
                    >
                      Usar
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => setAliasToDelete(b.alias)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <hr />

          <h6
            style={{ cursor: "pointer", color: "#0d6efd" }}
            onClick={() => setShowAddForm((prev) => !prev)}
          >
            {showAddForm ? "➖ Cancelar" : "➕ Agregar nuevo Backend"}
          </h6>

          {showAddForm && (
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Alias</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Cliente1"
                  value={newAlias}
                  onChange={(e) => setNewAlias(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="http://localhost:8080"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" onClick={handleAdd}>
                Guardar
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>

      {/* Modal confirmación eliminación */}
      <Modal
        show={!!aliasToDelete}
        onHide={() => setAliasToDelete(null)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Backend</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          ¿Seguro que deseas eliminar la configuración{" "}
          <strong>{aliasToDelete}</strong>?
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAliasToDelete(null)}>
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={() => handleDeleteBackend(aliasToDelete)}
          >
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BackendConfigModal;
