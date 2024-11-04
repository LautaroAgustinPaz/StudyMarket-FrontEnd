import { useRoutes } from 'react-router-dom'
import Inicio from '../pages/Inicio'

const Rutas = () => {
  const rutas = useRoutes(
    [
      { path: '/',
        element: <Inicio/>
      }
    ]
  )
  return rutas
}

export default Rutas