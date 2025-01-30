import './Inicio.css';

const Inicio = () => {
  return (
    <>
      <div className='container-banner_principal'>
        {/* Video de fondo */}
        <video autoPlay muted loop id="background-video">
          <source src="public/video/video-3.mp4" type="video/mp4" />
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

      <h2 className='section-cards_h1'>Beneficios de usar<br />StudyMarket</h2>
      {/* Cards */}
      <div className="container cards-conteiner mt-0">
        <div className="row">

          {/* Card 1 */}
          <div className="col-md-4 col-sm-12 mb-4">

              <div className="card-background">
                <div className='card-redondo'>
                  <img className='card-mini-img' src="public/cards/man-money.svg" alt="" srcset="" />
                </div>
                <h5 className="card-titles">Gana dinero</h5>
                <p className="card-text">
                  Podrás vender tus apuntes y libros usados, nadie te cobrará comisión por tu esfuerzo. Carga tus apuntes!
                </p>
              </div>

          </div>     
          {/* Card 2 */}
          <div className="col-md-4 col-sm-12 mb-4">

              <div className="card-background">
                <div className='card-redondo'>
                  <img className='card-mini-img' src="public/cards/lamparita.svg" alt="" srcset="" />
                </div>
                <h5 className="card-titles">Consejos</h5>
                <p className="card-text">
                  Aprende a exprimir al 100% todos esos apuntes que adquiriste. Lee nuestros posts sobre técnicas de estudio
                </p>
              </div>

          </div>  
          {/* Card 3 */}
          <div className="col-md-4 col-sm-12 mb-4">
              <div className="card-background">
                <div className='card-redondo'>
                  <img className='card-mini-img' src="public/cards/people.svg" alt="" srcset="" />
                </div>
                <h5 className="card-titles">Conócenos</h5>
                <p className="card-text text-center">
                  Conoce más sobre quienes están detrás de STUDYMARKET y su por qué, todas las respuestas en un solo lugar.
                </p>
              </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Inicio;
