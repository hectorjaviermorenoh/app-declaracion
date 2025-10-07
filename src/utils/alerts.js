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
  });

  return result.isConfirmed; // ✅ Devuelve true si el usuario acepta
}
