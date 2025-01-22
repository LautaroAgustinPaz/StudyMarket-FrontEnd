import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slice/productos/acciones-thunk/getAllProducts'
import { useEffect } from 'react'
import ListadoProductos from './ListadoProductos'
import BannerSecundario from './BannerSecundario'

const TodosLosProductos = () => {
    
    const { productos } = useSelector(store => store.productosReducer)
    const dispatch = useDispatch()
    //console.log("[TodosLosProductos]", productos);   

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

  return (
    <>
    <>
        {
            productos && productos.map(producto => (
                <ListadoProductos
                key={producto._id}
                producto={producto}
                />
            ))
        }
    </>
    
    </>
  )
}

export default TodosLosProductos