import React from 'react';
import Item from './Item';


const ItemListado = ({ productos }) => {

  console.log(Array.isArray(productos));
  return (
    <div className="container-card">
      {Array.isArray(productos) 
        ? productos.map((prod) => <Item producto={prod} key={prod.id} />) 
        : <p>No hay productos para mostrar.</p>}
    </div>
  );
};

export default ItemListado;