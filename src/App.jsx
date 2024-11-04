import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rutas from "./routers/Rutas"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import './index.css'; // Estilos globales
import './App.css'; // Estilos a componentes puntuales

import Inicio from './pages/Inicio';
import Conocenos from './pages/Conocenos';
import Ayuda from './pages/Ayuda';
import Tienda from './pages/Tienda';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/tienda' element={<Tienda />} />
          <Route path='/conocenos' element={<Conocenos />} />
          <Route path='/ayuda' element={<Ayuda />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App;