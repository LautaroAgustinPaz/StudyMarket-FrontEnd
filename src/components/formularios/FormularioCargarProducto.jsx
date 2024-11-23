import { useState } from "react"
import { useDispatch } from "react-redux"
import { createProducto } from "../../store/slice/productos/acciones-thunk/addProduct"

const FormularioCargarProducto = () => {
  const formInicial = {
    nombre: '',
    precio: '',
    descripcion: '',
    categoria: '',
    imagen: ''

  }

  const [ form, setForm ] = useState(formInicial)

  const dispatch = useDispatch()
  
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setForm({ ...form, 
      [name]: name === 'precio' ? parseFloat(value) : value 
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createProducto(form))
    handleResetear()
  }

  const handleResetear = () => {
    setForm(formInicial)
  }

  return (
    <div className="main-content d-lg-flex justify-content-center align-items-center vh-75 ms-2 me-1">
      <div className="form-container col-lg-4 col-12 d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-center mb-4">Cargar un producto</h1>
        <form className="w-100" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" name='nombre' onChange={handleChange} value={form.nombre}/>
            <div id="nombrelHelp" className="form-text">Nombre del producto</div>
          </div>
          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">Descripción</label>
            <input type="text" className="form-control" id="descripcion" name='descripcion' onChange={handleChange} value={form.descripcion}/>
            <div id="emailHelp" className="form-text">Agrega una descripción del producto</div>
          </div>
          <div className="mb-3">
            <label htmlFor="precio" className="form-label">Precio</label>
            <input type="number" className="form-control" id="precio" name='precio' onChange={handleChange} value={form.precio}/>
            <div id="emailHelp" className="form-text">El precio completo</div>
          </div>
          <div className="mb-3">
            <label htmlFor="categoria" className="form-label">Categoria</label>
            <input type="text" className="form-control" id="categoria" name='categoria' onChange={handleChange} value={form.formFile}/>
            <div id="emailHelp" className="form-text">Libro | Apunte</div>
          </div>
          {/* <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Archvio</label>
            <input type="text" className="form-control" id="formFile" name='formFile' onChange={handleChange} value={form.formFile}/>
            <div id="emailHelp" className="form-text">Carga el producto que vas a vender</div>
          </div> */}
          <div className="mb-3">
            <label htmlFor="imagen" className="form-label">Imagen</label>
            <input type="text" className="form-control" id="imagen" name='imagen' onChange={handleChange} value={form.imagen}/>
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