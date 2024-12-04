import React from 'react'
import './Carrito.css'
import { Link } from 'react-router-dom'

const CarritoVacio = () => {
  return (
    /* Pantalla - No agrego un producto */
    <div className='container__pantalla'>
      <img src="/images/img-pantalla-de-carga.png" alt="pantalla de carga"/>
      <h1>Agregá productos al carrito</h1>
        <Link className='btn-descubrirProductos' to={"api/productos"}>Descubrir productos
          <button className='btn-redondo'>
            <img className='flecha' src="public\images\flecha.svg" alt="flecha" />
          </button>
        </Link>
    </div>
  )
}

export default CarritoVacio
