import { useRoutes } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Nosotros from '../pages/Nosotros'
import Contacto from '../pages/Contacto'
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
                element: <Nosotros />
            },
            {
                path: '/contacto',
                element: <Contacto />
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