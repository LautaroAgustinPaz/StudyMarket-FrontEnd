import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../../store/slice/productos/acciones-thunk/getOneProduct'
import './DetalleProducto.css'

const DetalleProducto = () => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const {producto} = useSelector(store => store.productosReducer)

  useEffect(() => {
    dispatch(getOneProduct(id))

  }, [dispatch, id])
  if (!producto) return <div>Producto no encontrado</div>;

  return (
    <div className="container mt-5 detalle-producto"> 
      <div className="row"> 
        <div className="col-md-6 mb-4"> 
          <img src={producto.imagen} alt="Product" className="img-fluid rounded mb-3 product-image" id="mainImage" /> 
        </div> 
          <div className="col-md-6 shadow p-4 bg-white rounded"> 
              <h2 className="mb-3 product-title">{producto.nombre}</h2> 
              <p className="text-muted mb-2">SKU: WH1000XM4</p> 
            <div className="mb-3"> 
              <span className="h4 me-2">${producto.precio}</span> 
              <span className="text-muted"><s>$399.99</s></span> 
            </div> 
            <div className="mb-3"> 
              <span className="ms-2">4.5 (120 reviews)</span> 
            </div> 
              <p className="mb-4 product-description">{producto.descripcion}</p> 
              <button className="btn btn-primary btn-lg mb-3 me-2 btn-add-to-cart"><i className="bi bi-cart-plus"></i> Añadir al carrito </button> 
              <div className="mt-4"> 
                <h5>Características Clave:</h5> 
                <ul className="product-features"> 
                  <li>Cancelación de ruido líder en la industria</li> 
                  <li>30 horas de duración de la batería</li> 
                  <li>Controles táctiles</li> 
                  <li>Tecnología de hablar para chatear</li> 
                </ul> 
              </div> 
          </div> 
      </div> 
    </div>
  )
    {/* <div className="container">
        <div className="card" style={{ width: '18rem' }}>
        <img src={producto.imagen} alt={producto.nombre} />
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-price">${producto.precio}</p>
            <p className="card-text">{producto.descripcion}</p>
            <a href="#" className="btn btn-secundary">Comprar</a>
          </div>
        </div>
    </div> */}
}

export default DetalleProducto
