import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemListado from './ItemListado'

// Pedir información y setear el estado de los productos
const ContenedorListadoProductos = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => { // se actualiza cuando el componente se monta (no cuando se actualiza)
    pedirDatos()    // ejecuta la funcion de la petición (Helpers -> pedirDatos.js)
      .then((res) => {  // manejamos el estado exitoso de la respuesta:
        setProductos(res); // Respuesta que recibimos, la 'seteamos'
      })
  }, [])

  console.log(productos)

  return (
    // VISTA: 
    <ItemListado productos={productos} /> // Listado De los productos (Pasado por 'PROPS' )
  )
}

export default ContenedorListadoProductos
