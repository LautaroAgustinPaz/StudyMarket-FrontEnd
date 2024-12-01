import Swal from "sweetalert2"

const handleNotificacionCargado = () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "El producto fue cargado con exito",
        showConfirmButton: false,
        timer: 1500
      });
}

export default handleNotificacionCargado