import React from 'react'
import Rutas from '../routers/Rutas'
import { useLocation } from 'react-router-dom'

const BannerSecundario = () => {

    const location = useLocation(); // Hook para obtener la ruta actual

    let titulo = '';
    let descripcion = '';
    let mostrarBotones = false;

    // Decisiones basadas en la ruta actual
    if (location.pathname === '/productos') {
        titulo = 'Productos';
        descripcion = 'Simplifica el aprendizaje y alcanza tus metas.';
        mostrarBotones = true;
    } else if (location.pathname === '/ayuda') {
        titulo = 'Ayuda';
        descripcion = 'Estamos aquí para ayudarte en cada paso.';
    } else if (location.pathname === '/conocenos') {
        titulo = 'Conócenos';
        descripcion = 'Descubre quiénes somos y lo que hacemos.';
    }

  return (
    <div className="bg-light text-dark py-5 text-center banner-secundario">
        <h1>{titulo}</h1>
        <p className="lead">{descripcion}.</p>
        {mostrarBotones && ( 
        <div className="contenedor-btns_banner">
          <a href="#!" className="btn-custom_banner btn-libros">Libros</a>
          <a href="#!" className="btn-custom_banner btn-apuntes">Apuntes</a>
        </div>
      )}
    </div>
  )
}

export default BannerSecundario
