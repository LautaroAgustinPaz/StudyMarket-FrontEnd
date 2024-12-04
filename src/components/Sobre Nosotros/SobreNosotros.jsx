import React from 'react'
import './Sobre-nosotros.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SobreNosotros = () => {
  return (
    <>
    
    {/* CARD 1 - Nuestra Misiión */}
    <div className='contenedor-nuestra-mision-y-objetivo'>
        <div className='columna-1_backgorund'>
            <img className='img-mision' src="public/images/img-nuestra-mision.svg" alt="imagen nuestra mision"/>
        </div>
        <div className='columna-2_mision'>
            <h2 className='columna-2_titulo'>Nuestra Misión</h2>
            <p className='columna-2_parrafo'>Facilitar el acceso a contenido educativo de calidad, apoyando tanto a quienes buscan aprender como a quienes desean compartir sus conocimientos. Queremos crear una comunidad donde el aprendizaje sea colaborativo, accesible y valioso para todos.</p>
        </div>
    </div>

    {/* CARD 2 - Nuestro Objetivo */}
    <div className='contenedor-nuestra-mision-y-objetivo'>
        <div className='columna-3_backgorund'>
            <img className='img-obj' src="public/images/img-nuestro-objetivo.svg" alt="imagen nuestro objetivo"/>
        </div>
        <div className='columna-4_mision'>
            <h2 className='columna-4_titulo'>Nuestro Objetivo</h2>
            <p className='columna-4_parrafo'>Convertirnos en la plataforma líder para la venta y compra de recursos académicos, promoviendo la excelencia educativa y ayudando a nuestros usuarios a alcanzar sus metas.</p>
        </div>
    </div>

    {/* Seccion - Nuestro equipo */}
    <section className='contenedor-sobre-nosotros'>
        <h2 className='h2-nuestro-equipo'>Nuestro Equipo</h2>

        
        <div className='contenedor_integrantes'>

            {/* Sandra */}
            <div className="card_integrante">
                <img className='foto_integrante' src="public/images/integrantes/integrante-sandra.jpg" alt="Integrante Sandra Benitez" />
                <h3 className='nombre_integrante'>Benitez, Sandra</h3>
                <div className='habilidad_integrante'>
                    <p>UX / UI</p>
                </div>
                <div className='contenedor-btn_redirecciones'>
                    <a className='btn-linkedin' href="https://www.linkedin.com/in/sbenitez-50/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    <a className='btn-github'><FaGithub /></a>
                </div>
            </div>

            {/* Martin */}
            <div className="card_integrante">
                <img className='foto_integrante' src="public/images/integrantes/integrante-martin.jpg" alt="Integrante Sandra Benitez" />
                <h3 className='nombre_integrante'>Gomez, Martin</h3>
                <div className='habilidad_integrante'>
                    <p>UX / UI</p>
                </div>
                <div className='habilidad_integrante'>
                    <p className='full-stack'>Full Stack</p>
                </div>
                <div className='contenedor-btn_redirecciones'>
                    <a className='btn-linkedin' href="https://www.linkedin.com/in/marting1996/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    <a className='btn-github' href="https://github.com/Marting1996" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
            </div>

            {/* Lautaro */}
            <div className="card_integrante">
                <img className='foto_integrante' src="public/images/integrantes/integrante-lautaropaz.jpg" alt="Integrante Sandra Benitez" />
                <h3 className='nombre_integrante'>Paz, Lautaro</h3>
                <div className='habilidad_integrante'>
                    <p>UX / UI</p>
                </div>
                 <div className='habilidad_integrante'>
                    <p className='front-end'>Front End</p>
                </div>
                <div className='contenedor-btn_redirecciones'>
                    <a className='btn-linkedin' href="https://www.linkedin.com/in/lautaro-paz-71795b243/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    <a className='btn-github' href="https://github.com/LautaroAgustinPaz" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
            </div>

            {/* Ignacio */}
            <div className="card_integrante">
                <img className='foto_integrante' src="public/images/integrantes/Integrante-nacho.jpg" alt="Integrante Sandra Benitez" />
                <h3 className='nombre_integrante'>Lopez, Ignacio</h3>
                <div className='habilidad_integrante'>
                    <p>UX / UI</p>
                </div>
                <div className='contenedor-btn_redirecciones'>
                    <a className='btn-linkedin' href="https://www.linkedin.com/in/ignaciolopezforte/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    <a className='btn-github'><FaGithub /></a>
                </div>
            </div>
        </div>
        
    </section>

    </>
  )
}

export default SobreNosotros
