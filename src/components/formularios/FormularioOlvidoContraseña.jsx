import { useState } from "react"
import { useDispatch } from "react-redux"

const FormularioOlvidoContraseña = () => {
  const formInicial = {
    correo: ''
  }

  const [ form, setForm ] = useState(formInicial)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createUsuario(form))
    
  }

  return (
    <div className="main-content d-lg-flex justify-content-center align-items-center vh-75 ms-2 me-1">
      <div className="form-container col-lg-4 col-12 d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-center mb-4">Olvide la contraseña</h1>
        <form className="w-100" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo</label>
            <input type="email" className="form-control" id="lbl-correo" name='correo' onChange={handleChange} value={form.correo}/>
            <div id="emailHelp" className="form-text">Nunca compartiremos tu correo con nadie</div>
          </div>
          <div className="d-grid gap-2 d-md-flex boton">
            <button type="submit" className="btn col-6 mx-auto">Enviar</button>
          </div>
        </form>
      </div>
      <div className="image-container d-none d-lg-flex justify-content-center align-items-center col-lg-8">
        <img src="/images/image_registro.png" alt="Estudiantes" className="img-fluid ms-2" />
      </div>
    </div>
  )
}

export default FormularioOlvidoContraseña