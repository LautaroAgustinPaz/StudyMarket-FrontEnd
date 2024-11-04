import React from 'react'
import './FormularioRegistro.css'

const FormularioRegistro = () => {
  return (
    <div className='container'>
        <form>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre"/>
                <div id="emailHelp" className="form-text">Tu nombre completo</div>
            </div>
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="apellido"/>
                <div id="emailHelp" className="form-text">Tu apellido completo</div>
            </div>
            <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input type="email" className="form-control" id="correo"/>
                <div id="emailHelp" className="form-text">Nunca compartiremos tu correo con nadie</div>
            </div>
            <div className="mb-3">
                <label htmlFor="repetircorreo" className="form-label">Repetir correo</label>
                <input type="email" className="form-control" id="repetircorreo"/>
                <div id="emailHelp" className="form-text">Repetir el correo que colocaste</div>
            </div>
            
            <div className="mb-3">
                <label htmlFor="contraseña" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="contraseña"/>
            </div>
            <div className="d-grid gap-2 d-md-flex boton">
                <button type="submit" className="btn col-6 mx-auto ">Registrarse</button>
            </div>
    </form>
    </div>
  )
}

export default FormularioRegistro