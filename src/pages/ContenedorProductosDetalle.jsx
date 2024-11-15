import React, { useEffect, useState } from 'react'
import { pedirItemPorId } from '../helpers/pedirDatos';
import DetalleProducto from '../components/DetalleProducto';

const ContenedorProductosDetalle = ({ ItemID }) => {

  const [item, setItem] = useState(null);

  useEffect(() => {
    pedirItemPorId(ItemID)
        .then((res) => {
          setItem(res);
        })

    }, [ItemID])

  return (
    <div>
      {item && <DetalleProducto item={item} />} 
    </div>
  )
}

export default ContenedorProductosDetalle
