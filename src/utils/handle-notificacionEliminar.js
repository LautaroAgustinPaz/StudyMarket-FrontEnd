import Swal from "sweetalert2"

const handleNotificacionElimiar = (cb) => {
    Swal.fire({
        title: "¿Estás seguro de que querés borrar el producto",
        text: "No podras volver a trás",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borrar el producto",
        cancelButtonText: "No"
    }).then((result) => {
        if (result.isConfirmed) {

            cb()
            
            Swal.fire({
            title: "Borrado!",
            text: "El producto fue borrado.",
            icon: "success"
            });
        }
    });
}

export default handleNotificacionElimiar