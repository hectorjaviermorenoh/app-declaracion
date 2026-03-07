import Swal from "sweetalert2";

export async function confirmarAccion({
  titulo = "¿Estás seguro?",
  mensaje = "Confirma para continuar.",
  icono = "warning",
  textoConfirmar = "Sí, continuar",
  textoCancelar = "Cancelar",
}) {
  const result = await Swal.fire({
    title: titulo,
    text: mensaje,
    icon: icono,
    showCancelButton: true,
    confirmButtonText: textoConfirmar,
    cancelButtonText: textoCancelar,
    reverseButtons: true,
    confirmButtonColor: "#0d6efd", // azul Bootstrap
    cancelButtonColor: "#6c757d",  // gris Bootstrap

    /* CONFIGURACIÓN PARA EVITAR CONFLICTOS CON MODALES (ARIA)
    */
    returnFocus: false,     // No intenta devolver el foco al botón que abrió el Swal
    heightAuto: false,      // Evita que Swal modifique el alto del body (rompe scroll de modales)
    backdrop: true,         // Mantiene el fondo oscuro

    // Esta función se ejecuta justo cuando se abre el SweetAlert
    didOpen: () => {
      // Buscamos si hay un modal de Bootstrap abierto que tenga aria-hidden
      const activeModal = document.querySelector('.modal.show[aria-hidden="true"]');
      if (activeModal) {
        activeModal.removeAttribute('aria-hidden');
      }
    },

    // Esta función se ejecuta al cerrar el SweetAlert
    willClose: () => {
      const activeModal = document.querySelector('.modal.show');
      if (activeModal) {
          // activeModal.setAttribute('aria-hidden', 'true');
          // No restauramos el aria-hidden para evitar que el error regrese
          // al devolver el foco al modal de Bootstrap
      }
    }
  });

  return result.isConfirmed;
}