import React from 'react'
import Item from './Item'

const ItemListado = ({ productos }) => {
  return (
    <div className="container">
      { productos.map((prod) => <Item producto={prod} key={prod.id}/>) }
    </div>
  )
}

export default ItemListado
