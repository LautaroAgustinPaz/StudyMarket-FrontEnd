
const FormularioCargarProducto = () => {
  return (
    <div className="main-content d-lg-flex justify-content-center align-items-center vh-100 ms-2 me-1">
      <div className="form-container col-lg-4 col-12 d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-center mb-4">Cargar un producto</h1>
        <form className="w-100">
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">Titulo</label>
            <input type="text" className="form-control" id="titulo"/>
            <div id="titulolHelp" className="form-text">Titulo del producto</div>
          </div>
          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">Descripción</label>
            <input type="text" className="form-control" id="descripcion"/>
            <div id="emailHelp" className="form-text">Agrega una descripción del producto</div>
          </div>
          <div className="mb-3">
            <label htmlFor="precio" className="form-label">Precio</label>
            <input type="number" className="form-control" id="precio"/>
            <div id="emailHelp" className="form-text">El precio completo</div>
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Archvi</label>
            <input type="file" className="form-control" id="formFile"/>
            <div id="emailHelp" className="form-text">Carga el producto que vas a vender</div>
          </div>
          <div className="mb-3">
            <label htmlFor="imagen" className="form-label">Imagen</label>
            <input type="file" className="form-control" id="imagen"/>
            <div id="emailHelp" className="form-text">Coloca una imagen de portada</div>
          </div>
          <div className="d-grid gap-2 d-md-flex boton">
            <button type="submit" className="btn col-6 mx-auto">Cargar</button>
          </div>
        </form>
      </div>
      <div className="image-container d-none d-lg-flex justify-content-center align-items-center col-lg-8">
        <img src="/images/image_registro.png" alt="Estudiantes" className="img-fluid ms-2" />
      </div>
    </div>
  )
}

export default FormularioCargarProducto