import React from 'react'
import './Carrito.css'

const CarritoContenedor = () => {
  return (
      <div className="container container_carrito">
        <div className="row fila_carrito">
          <div className="col columna-1_carrito">
              <h1>Carrito</h1>
              <p>Productos</p>
              <h2>1</h2>
              <div className='productos_carrito'>
                {/* <ul>
                {productos.map((producto) => (
                  <li key={producto.id} className="producto-item">
                  <span>{producto.nombre}</span> -{" "}
                  <span>
                  {producto.cantidad} x ${producto.precio}
                  </span>
                  </li>
                ))}
                </ul> */}
              </div>
          </div>
          <div className="col columna-2_carrito">
              <h4>Total de Compra</h4>
              {/* <p>${calcularTotal()}</p> */}
              <p>$9.000</p>
              {/* <button onClick={() => alert("Comprar funcionalidad en desarrollo")}>
              Comprar
              </button> */}
              <button>Comprar</button>
          </div>
        </div>
      </div>
  )
}

export default CarritoContenedor
