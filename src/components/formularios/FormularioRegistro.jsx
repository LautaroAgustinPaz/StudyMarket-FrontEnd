import { useState } from 'react';
import './FormularioRegistro.css';
import { useDispatch } from 'react-redux';
import { createUsuario } from '../../store/slice/usuarios/acciones-thunk/createUser';
 
const FormularioRegistro = () => {

  const formInicial = {
    //id: null,
    name: '',
    apellido: '',
    email: '',
    repetirEmail: '',
    password: '',
    imagen: '',
    confirm_password: '',
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
    handleResetear()
  }
  
  const handleResetear = () => {
    setForm(formInicial)
  }

  return (
    <div className="main-content d-lg-flex justify-content-center align-items-center vh-100 ms-2 me-1">
      <div className="form-container col-lg-4 col-12 d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-center mb-4">Registro</h1>
        <form className="w-100" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="lbl-name" name='name' onChange={handleChange} value={form.name}/>
            <div id="emailHelp" className="form-text">Tu nombre completo</div>
          </div>
          <div className="mb-3">
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input type="text" className="form-control" id="lbl-apellido" name='apellido' onChange={handleChange} value={form.apellido}/>
            <div id="emailHelp" className="form-text">Tu apellido completo</div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo</label>
            <input type="email" className="form-control" id="lbl-email" name='email' onChange={handleChange} value={form.email}/>
            <div id="emailHelp" className="form-text">Nunca compartiremos tu correo con nadie</div>
          </div>
          <div className="mb-3">
            <label htmlFor="repetirEmail" className="form-label">Repetir correo</label>
            <input type="email" className="form-control" id="lbl-repetirEmail" name='repetirEmail' onChange={handleChange} value={form.repetirEmail}/>
            <div id="emailHelp" className="form-text">Repetir el correo que colocaste</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="lbl-password" name='password' onChange={handleChange} value={form.password}/>
          </div>
          <div className="mb-3">
            <label htmlFor="confirm_password" className="form-label">Repetir Contraseña</label>
            <input type="confirm_password" className="form-control" id="lbl-confirm_password" name='confirm_password' onChange={handleChange} value={form.confirm_password}/>
          </div>
          <div className="d-grid gap-2 d-md-flex boton">
            <button type="submit" className="btn col-6 mx-auto">Registrarse</button>
          </div>
        </form>
      </div>
      <div className="image-container d-none d-lg-flex justify-content-center align-items-center col-lg-8">
        <img src="/images/image_registro.png" alt="Estudiantes" className="img-fluid ms-2" />
      </div>
    </div>
  );
}

export default FormularioRegistro;
