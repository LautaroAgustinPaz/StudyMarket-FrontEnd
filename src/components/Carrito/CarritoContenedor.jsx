import { useState } from 'react';
import './Carrito.css'
import { BsFillTrash3Fill } from "react-icons/bs";
import CarritoVacio from './CarritoVacio.jsx'

const productosIniciales = [
  {
    id: 1,
    nombre: "Apunte de Análisis Matemático 1 UBA CBC",
    precio: 4000,
    imagen: "public/images/img-example-carrito.jpg"
  },
  {
    id: 2,
    nombre: "Resumen de Historia del Arte",
    precio: 3500,
    imagen: "public/images/img-example-carrito.jpg"
  },
  {
    id: 3,
    nombre: "Libro de Física I - Resumen completo",
    precio: 5000,
    imagen: "public/images/img-example-carrito.jpg"
  }
];

const CarritoContenedor = () => {

  const [productos, setProductos] = useState(productosIniciales);

  // CALCULA EL TOTAL DEL CARRITO: Suma todos los precios de los productos
  const total = productos.reduce((acumuladorSumaTemporal, p) => acumuladorSumaTemporal + p.precio, 0);
  // - 'acc' es el acumulador (lleva la suma temporal)
  // - 'p' es cada producto en el array
  // - Partimos de 0 y sumamos cada precio

  const cantidad = productos.length;

  // Función Eliminar Productos
  const eliminarProducto = (id) => {
    // sino es diferente, es decir es igual, se elimna
    // guarda los que son difentes en un nuevo array y actualiza el estado, osea el array
    const nuevosProductos = productos.filter(p => p.id !== id);
    setProductos(nuevosProductos);
  };

  return (
      <div className="container_carrito">
        {productos.length === 0 ? (
          <CarritoVacio/>
        ) : (
        <div>
        <div className=" fila_carrito">
        {/* Columna 1 - Carrito productos */}
          <div className="columna-1_carrito">
              <div className='carrito_header'>
                <h1>Carrito</h1>
                <div className='header_conteo'>
                  <p>Productos:</p>
                  <h2>{cantidad}</h2>
                </div>
              </div>
              <div className='carrito_productos'>
                {productos.map((producto) => (
                  <div key={producto.id} className='producto_item'>
                    <img src={producto.imagen} alt={producto.nombre}/>
                    <div className='item'>
                        <h4>{producto.nombre}</h4>
                        <p>${producto.precio} </p>
                        <button className='btn-producto-comprar'>Comprar ahora</button>
                        <button 
                        className='btn-producto-eliminar'
                        onClick={ ()=> eliminarProducto(producto.id)}
                        >
                        < BsFillTrash3Fill className="icon-style" />
                        </button>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            {/* Columna 2 - Button Comprar */}
            <div className="columna-2_carrito">
              <div className='carrito_totalYprecio'>
                <h5>Total de Compra</h5>
                <p>${total}</p>
              </div>
              <button className='btn-carrito_comprar'>Comprar</button>
            </div>
          </div>


          
          </div>
          )}

        </div>
  )
}

export default CarritoContenedor
