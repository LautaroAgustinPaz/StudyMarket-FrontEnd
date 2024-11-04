import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rutas from "./routers/Rutas"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import './index.css'; // Estilos globales
import './App.css'; // Estilos a componentes puntuales

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Rutas/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;