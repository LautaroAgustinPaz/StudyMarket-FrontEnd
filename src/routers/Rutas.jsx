import { useRoutes } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Nosotros from '../pages/Conocenos'
import Productos from '../pages/Productos'
import NoEncontrado from '../pages/NoEncontrado'
import Ayuda from '../pages/Ayuda'
import Registro from '../pages/Registro'
import Login from '../pages/Login'

const Rutas = () => {

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
                path: '/registro',
                element: <Registro />
            },
            {
                path: '/login',
                element: <Login />
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