import React from 'react'

const ListadoProductos = () => {
  return (
    <section /* style="background-color: #eee;" */>
    <div className="container py-5">
      <div className="row justify-content-center mb-3">
        <div className="col-md-12 col-xl-10">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                      className="w-100" />
                    <a href="#!">
                      <div className="hover-overlay">
                        <div className="mask" /* style="background-color: rgba(253, 253, 253, 0.15);" */></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <h5>Parcial Analisis Mat 1</h5>
                 
                  <div className="mt-1 mb-0 text-muted small">
                    <span>#UBA</span>
                    <span className="text-primary"> • </span>
                    <span>#AnalisiMatematico</span>
                    <span className="text-primary"> • </span>
                    <span>#Parcial<br /></span>
                  </div>           
                  <p className="text-truncate mb-4 mb-md-0">
                    Descripcion: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, ipsa!
                  </p>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$13.99</h4>
                    <span className="text-danger"><s>$20.99</s></span>
                  </div>
                  <h6 className="text-success">Entrega inmediata!</h6>
                  <div className="d-flex flex-column mt-4">
                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm" type="button">Detalles</button>
                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-sm mt-2" type="button">
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </section>
  )
}

export default ListadoProductos