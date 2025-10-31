import React, { useEffect } from "react";
import { Button, Table, Spinner } from "react-bootstrap";
import { useUsuariosAdmin } from "../../context/admin/UsuariosAdminContext";

export function UsuariosAdminPanel() {
  const { usuarios, loading, getUsuarios, addUsuario, deleteUsuario } = useUsuariosAdmin();

  useEffect(() => {
    getUsuarios();
  }, [getUsuarios]);

  if (loading) return <Spinner animation="border" variant="primary" />;

  return (
    <div className="p-3">
      <h5>Gestión de Usuarios</h5>
      <Button
        variant="success"
        className="mb-3"
        onClick={() =>
          addUsuario({
            usuario: { correo: "nuevo@correo.com", nombre: "Nuevo", rol: "usuario" },
          })
        }
      >
        ➕ Agregar Usuario
      </Button>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Correo</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.correo}>
              <td>{u.correo}</td>
              <td>{u.nombre}</td>
              <td>{u.rol}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteUsuario(u.correo, "admin@correo.com")}
                >
                  🗑 Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
