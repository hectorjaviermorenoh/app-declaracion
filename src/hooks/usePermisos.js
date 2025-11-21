import { useAuth } from "../context/AuthContext";

/**
 * Hook global para validar permisos del usuario
 */
export function usePermisos() {
  const { user } = useAuth();

  const tienePermiso = (perm) => {
    if (!user) return false;

    // Super admin (*)
    if (user.permisos === "*" || user.permisos?.includes("*")) return true;

    // Lista normal
    return user.permisos?.includes(perm);
  };

  return {
    puede: tienePermiso,
  };
}
