import { useRoutes } from 'react-router-dom'
import Inicio from '../pages/Inicio'
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
import Productos from '../pages/Productos'
import ProductosDetalle from '../pages/ProductosDetalle'


const Rutas = () => {

    const rutas = useRoutes(
        [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/api/productos',
                element: <Productos />
            },
            {
                path: '/cargar-producto',
                element: <CargarProducto />
            },
            {
                path: '/api/productos/:id',
                element: <ProductosDetalle/>
            },
            {
                path: '/conocenos',
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
                path: '/usuarios/perfil/:id',
                element: <Perfil />
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