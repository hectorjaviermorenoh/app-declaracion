export const validators = {

  // ====== FACTURAS ======

  anio: (value) => {
    if (!value || !value.toString().trim()) {
      return "El año es obligatorio.";
    }
    if (!/^\d{4}$/.test(value)) {
      return "El año debe tener 4 dígitos.";
    }
    return "";
  },

  entidad: (value) => {
    if (!value || !value.trim()) {
      return "El campo Entidad es obligatorio.";
    }
    return "";
  },

  descripcion: (value) => {
    if (!value) return "";
    if (value.length > 50) {
      return "La descripción no debe superar los 50 caracteres.";
    }
    return "";
  },

  valor: (value) => {
    if (value == null || value === "") {
      return "El valor es obligatorio.";
    }

    // Asegurar que value sea string
    const clean = String(value).replace(/\D/g, "");

    if (!/^\d+$/.test(clean)) {
      return "El valor debe ser un número entero sin decimales.";
    }

    return "";
  },


  metodoPago: (value) => {
    if (!value || value.trim() === "") {
      return "Debe seleccionar un método de pago.";
    }
    return "";
  },


  archivo: (file) => {
    if (!file) return "Debe seleccionar un archivo.";
    return "";
  },

  // ====== PRODUCTOS ======

  nombre: (value) => {
    if (!value || !value.trim()) {
      return "El nombre del producto es obligatorio.";
    }
    // No permite caracteres especiales
    if (!/^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ\s]+$/.test(value)) {
      return "El nombre no puede contener caracteres especiales.";
    }
    return "";
  },

  entidadProducto: (value) => {
    if (!value || !value.trim()) {
      return "La entidad del producto es obligatoria.";
    }
    return "";
  },


  tipo: (value) => {
    if (!value) return "";
    // Solo letras y espacios
    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(value)) {
      return "El tipo solo debe contener letras.";
    }
    return "";
  },


  // ====== ADD USUARIOS ======

  correo: (value) => {
    if (!value || !value.trim()) return "El correo es obligatorio.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "El correo no es válido.";
    return "";
  },

  nombreUsuario: (value) => {
    if (!value || !value.trim()) return "El nombre es obligatorio.";

    if (value.length > 50) return "El nombre no debe superar los 50 caracteres.";

    // Solo letras y espacios
    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(value))
      return "El nombre solo puede contener letras.";

    return "";
  },


  rol: (value) => {
    if (!value || value.trim() === "") return "Debe seleccionar un rol.";
    return "";
  },

  // ====== ROLES ======

  rolNombre: (value) => {
    if (!value || !value.trim()) {
      return "El nombre del rol es obligatorio.";
    }
    // Solo letras y espacios
    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(value)) {
      return "El nombre del rol solo puede contener letras.";
    }
    if (value.trim().length < 3) {
      return "El nombre del rol debe tener al menos 3 caracteres.";
    }
    if (value.trim().length > 30) {
      return "El nombre del rol no debe superar los 30 caracteres.";
    }
    return "";
  },

  rolPermisos: (arr) => {
    if (!arr || arr.length === 0) {
      return "Debe seleccionar al menos un permiso.";
    }
    return "";
  },





};


export function normalizeField(text = "") {
  if (!text) return "";

  // Convertir todo a minúscula y limpiar espacios
  const cleaned = text.toLowerCase().trim().replace(/\s+/g, " ");

  // Capitalizar solo la primera letra de TODA la oración
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

