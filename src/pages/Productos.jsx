import React from 'react'
import ContenedorListadoProductos from '../components/productos/ContenedorListadoProductos'
import TodosLosProductos from '../components/TodosLosProductos'
import BannerSecundario from '../components/BannerSecundario'

const Productos = () => {
  return (
    <>
      <BannerSecundario />
      <TodosLosProductos /> 
       {/* <ContenedorListadoProductos /> */}
    </>
  // <ContenedorProductosDetalle ItemID={2} />
  )
}

export default Productos