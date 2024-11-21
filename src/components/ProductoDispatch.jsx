import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOneProduct } from "../store/slice/productos/acciones-thunk/getOneProduct"
import DetalleProducto from "./productos/DetalleProducto"

const ProductoDispatch = () => {
    const { producto } = useSelector(store.productosReducer)
    const dispatch = useDispatch
    
    useEffect(() => {
        dispatch(getOneProduct())
    }, [])

  return (
    <>
        {
            producto && producto.map(productoDetail => (
                
                <DetalleProducto
                productoDetail={productoDetail}
                />
            ))
        }
    </>
  )
}

export default ProductoDispatch