import React from 'react'
import './Carrito.css'
import { BsFillTrash3Fill } from "react-icons/bs";

const CarritoContenedor = () => {
  return (
      <div className="container_carrito">

        <div className=" fila_carrito">
          <div className="columna-1_carrito">
              <div className='carrito_header'>
                <h1>Carrito</h1>
                <div className='header_conteo'>
                  <p>Productos:</p>
                  <h2>2</h2>
                </div>
              </div>
              <div className='carrito_productos'>
                <img src='public/images/img-example-carrito.jpg' alt=""/>
                <div>
                  <h4>Apunte de Análisis Matematico 1 UBA CBC</h4>
                  <p>$4.000</p>
                  <button className='btn-producto-comprar'>Comprar ahora</button>
                  <button className='btn-producto-eliminar'>< BsFillTrash3Fill className="icon-style" /></button>
                  {/* Icons - https://react-icons.github.io/react-icons/search/#q=trash */}
                </div>
              </div>
          </div>

          <div className="columna-2_carrito">
              <div className='carrito_totalYprecio'>
                <h5>Total de Compra</h5>
                {/* <h5 className='carrito_totalYprecio'>${calcularTotal()}</h5> */}
                <p>$4.000</p>
                {/* <button className='btn-carrito_comprar' onClick={() => alert("Comprar funcionalidad en desarrollo")}>
                Comprar
                </button> */}
              </div>
              <button className='btn-carrito_comprar'>Comprar</button>
          </div>
        </div>

      </div>
  )
}

export default CarritoContenedor
