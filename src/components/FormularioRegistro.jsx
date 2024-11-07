import React from 'react';
import './FormularioRegistro.css';

const FormularioRegistro = () => {
  return (
    <div className="main-content d-lg-flex justify-content-center align-items-center vh-100 ms-2 me-1">
      <div className="form-container col-lg-4 col-12 d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-center mb-4">Registro</h1>
        <form className="w-100">
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
