import './Inicio.css';

const Inicio = () => {
  return (
    <>
      <div className='container-banner_principal'>
        {/* Video de fondo */}
        <video autoPlay muted loop id="background-video">
          <source src="public/video/video-4.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        {/* Contenido sobre el video */}
        <div className='content'>
          <h1 className='banner-p_titulo'>TUS APUNTES EN UN SOLO LUGAR</h1>
          <p className='banner-p_descripcion'>
            Descubre en STUDYMARKET el acceso rápido y sencillo a los mejores apuntes para tus estudios. 
            Aquí, cada recurso está diseñado para ayudarte a aprender, aprobar y alcanzar tus objetivos.
            <br />¡Explora ahora y potencia tu aprendizaje con un solo clic!
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="container mt-5">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 col-sm-12 mb-4">
            <div className="card text-bg-dark text-center align-middle">
              <img src="public/cards/card-ganacontusapuntes.jpg" className="card-gana" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Gana dinero</h5>
                <p className="card-text">
                  Podrás vender tus apuntes y libros usados, nadie te cobrará comisión por tu esfuerzo
                </p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-md-4 col-sm-12 mb-4">
            <div className="card text-bg-dark text-center align-middle">
              <img src="/cards/card-tips.jpg" className="card-tips" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Consejos</h5>
                <p className="card-text">
                  Aprende a exprimir al 100% todos esos apuntes que adquiriste. Lee nuestros posts sobre técnicas de estudio
                </p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-md-4 col-sm-12 mb-4">
            <div className="card text-bg-dark text-center align-middle">
              <img src="/cards/card-conocenos.jpg" className="card-conocenos" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Conócenos</h5>
                <p className="card-text">
                  Conoce más sobre quienes están detrás de STUDYMARKET y su por qué, todas las respuestas en un solo lugar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
