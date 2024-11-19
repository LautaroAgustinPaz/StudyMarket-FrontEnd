import React from 'react'

const DetalleProducto = ({ item }) => {
  return (
    <div className="container">
        <div className="card" style={{ width: '18rem' }}>
        <img src={item.imagen} alt={item.nombre} />
          <div className="card-body">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-price">${item.precio}</p>
            <p className="card-text">{item.descripcion}</p>
            <a href="#" className="btn btn-secundary">Comprar</a>
          </div>
        </div>
    </div>
  )
}

export default DetalleProducto
