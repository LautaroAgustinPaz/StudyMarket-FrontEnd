import React from 'react'
import Rutas from '../routers/Rutas'
import { useLocation } from 'react-router-dom'
import '../components/bannersecundario.css'


const BannerSecundario = () => {

    const location = useLocation(); // Hook para obtener la ruta actual

    let titulo = '';
    let descripcion = '';
    let mostrarBotones = false;
    let video = '';

    // Decisiones basadas en la ruta actual
    if (location.pathname === '/api/productos') {
        video = '/video/video-7.mp4';
        titulo = 'Productos';
        descripcion = 'Simplifica el aprendizaje y alcanza tus metas.';
        mostrarBotones = true;
    } else if (location.pathname === '/ayuda') {
        video = '/video/video-1.mp4';
        titulo = 'Ayuda';
        descripcion = 'Estamos aquí para ayudarte en cada paso.';
    } else if (location.pathname === '/conocenos') {
        video = '/video/video-8.mp4';
        titulo = 'Conócenos';
        descripcion = 'Descubre quiénes somos y lo que hacemos.'
    }

  return (
    <div className="banner-secundario">
        {/* Video de fondo */}
        <video autoPlay muted loop id="background-secundario-video">
          <source src={video} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        {/* Contenido sobre el video */}
        <div className='content-secundario'>
          <h1>{titulo}</h1>
          <p className="lead">{descripcion}</p>
          {mostrarBotones && ( 
          <div className="contenedor-btns_banner">
            <a href="#!" className="btn-custom_banner btn-libros">Libros</a>
            <a href="#!" className="btn-custom_banner btn-apuntes">Apuntes</a>
          </div>
          )}
        </div>
    </div>
  )
}

export default BannerSecundario
