import React from 'react'
import { FaUpload, FaEdit, FaSearch, FaCreditCard } from "react-icons/fa"; 
import "./Ayuda.css"; 

const AyudaContenido = () => {
  return (
       <section className="container py-5 ayuda-section">
      <div className="row">
        {/* Primera pregunta */}
        <div className="col-md-6 mb-4">
          <h3 className="fw-bold d-flex align-items-center">
            <FaUpload className="icon me-2" /> ¿Cómo subo un apunte?
          </h3>
          <p>
            Para subir un apunte, ve a la sección "Subir Apunte" en el menú
            principal. Completa el formulario con los detalles como título,
            descripción, categoría y precio. Luego, selecciona tu archivo y haz
            clic en "Publicar".
          </p>
        </div>
        {/* Segunda pregunta */}
        <div className="col-md-6 mb-4">
          <h3 className="fw-bold d-flex align-items-center">
            <FaEdit className="icon me-2" /> ¿Cómo mejoro el nombre de mi publicación?
          </h3>
          <p>
            Elige un título claro y conciso que describa el contenido del
            apunte. Usa palabras clave que sean relevantes y específicas, como
            el tema, materia o nivel académico. Evita nombres genéricos como
            "Mis Apuntes" o "Documento 1".
          </p>
        </div>
        {/* Tercera pregunta */}
        <div className="col-md-6 mb-4">
          <h3 className="fw-bold d-flex align-items-center">
            <FaSearch className="icon me-2" /> ¿Cómo encuentro apuntes para comprar?
          </h3>
          <p>
            Ve a la sección "Buscar Apuntes" y utiliza los filtros de categoría,
            precio o palabras clave. También puedes explorar las publicaciones
            destacadas en la página principal.
          </p>
        </div>
        {/* Cuarta pregunta */}
        <div className="col-md-6 mb-4">
          <h3 className="fw-bold d-flex align-items-center">
            <FaCreditCard className="icon me-2" /> ¿Qué métodos de pago están disponibles?
          </h3>
          <p>
            Puedes realizar pagos a través de tarjetas de crédito, débito o
            servicios de pago en línea como PayPal o Mercado Pago. Asegúrate de
            verificar las opciones disponibles antes de confirmar la compra.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AyudaContenido
