import './Inicio.css'
const Inicio = () => {
  return (
    <>
    
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="/images/Banner1.png" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container mt-5">
        <div className="row">
        <div className="col-md-4 col-sm-12 mb-4"> 
          <div className="card text-bg-dark text-center align-middle ">
            <img src="/cards/img-4.jpg" className="card-img" alt="..."/>
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-4"> 
          <div className="card text-bg-dark text-center align-middle ">
            <img src="/cards/img-4.jpg" className="card-img" alt="..."/>
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-4"> 
          <div className="card text-bg-dark text-center align-middle ">
            <img src="/cards/img-4.jpg" className="card-img" alt="..."/>
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        
          
        
          
        </div>
      </div>
    </>
  )
}

export default Inicio