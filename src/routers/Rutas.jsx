import { useRoutes } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Apuntes from '../pages/Apuntes'
import Libros from '../pages/Libros'
import Ayuda from '../pages/Ayuda'
import Conocenos from '../pages/Conocenos'
import Registro from '../pages/Registro'
import Login from '../pages/Login'
import OlvidoContraseña from '../pages/OlvidoContraseña'
import RecuperarContraseña from '../pages/RecuperarContraseña'
import Carrito from '../pages/Carrito'
import NoEncontrado from '../pages/NoEncontrado'
import CargarProducto from '../pages/CargarProducto'
import Perfil from '../pages/Perfil'


const Rutas = () => {

    const rutas = useRoutes(
        [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/productos/apuntes',
                element: <Apuntes/>
            },
                        {
                path: '/productos/libros',
                element: <Libros/>
            },
            {
                path: '/nosotros',
                element: <Conocenos />
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
                path: '/olvido-contraseña',
                element: <OlvidoContraseña />
            },
            {
                path: '/recuperar-contraseña',
                element: <RecuperarContraseña />
            },
            {
                path: '/carrito',
                element: <Carrito />
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