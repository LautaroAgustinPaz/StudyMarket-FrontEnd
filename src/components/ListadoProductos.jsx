import React from 'react'

// Hijo de pages - Apuntes y Libros
const ListadoProductos = ({ productos }) => {   // Recibe los productos desde la prop

  return (
    // Realizaremos el Filtrado en este lugar de Apuntes Y Libros
    <div className="row">
      {productos.map((producto) => (
        <div className="col-md-4" key={producto.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">{producto.descripcion}</p>
              <p className="card-text">${producto.precio}</p>
              <button className="btn btn-primary">Comprar</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListadoProductos