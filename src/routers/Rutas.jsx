import { useRoutes } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Nosotros from '../pages/Conocenos'
import Productos from '../pages/Productos'
import NoEncontrado from '../pages/NoEncontrado'

const Rutas = () => {

    // Me va a permitir describir como va a ser el router de mi aplicación pero en formato array de objetos
    // https://reactrouter.com/en/main/hooks/use-routes
    const rutas = useRoutes(
        [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/nosotros',
                element: <Productos/>
            },
            {
                path: '/nosotros',
                element: <Nosotros />
            },
                        {
                path: '/ayuda',
                element: <Ayuda />
            },
            {
                path: '*',
                element: <NoEncontrado />
            }
        ]
    )

    return rutas

}

export default Rutas