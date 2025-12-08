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

};


export function normalizeField(text = "") {
  if (!text) return "";

  // Convertir todo a minúscula y limpiar espacios
  const cleaned = text.toLowerCase().trim().replace(/\s+/g, " ");

  // Capitalizar solo la primera letra de TODA la oración
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

