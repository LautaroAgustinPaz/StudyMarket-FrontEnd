import React from 'react';

const Item = ({ producto }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={producto.imagen} alt={producto.nombre} />
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-price">${producto.precio}</p>
        <p className="card-text">{producto.descripcion}</p>
        <a  to={`/item/${producto.id}`}className="btn btn-primary">Ver Producto</a>
        <a href="#" className="btn btn-secundary">Comprar</a>
      </div>
    </div>
  );
};

export default Item;