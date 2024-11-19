import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slice/productos/acciones-thunk/getAllProducts'
import { useEffect } from 'react'
import ListadoProductos from './ListadoProductos'
import BannerSecundario from './BannerSecundario'

const TodosLosProductos = () => {
    
    const { productos } = useSelector(store => store.productosReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

  return (
    <>
    <BannerSecundario />
    <>
        {
            productos && productos.map(producto => (
                <ListadoProductos
                key={producto.id}
                producto={producto}
                />
            ))
        }
    </>
    
    </>
  )
}

export default TodosLosProductos