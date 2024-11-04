import { Link } from "react-router-dom";
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Sobre Nosotros</h5>
            <p>Somos una tienda dedicada a ofrecer los mejores productos a los mejores precios.</p>
          </div>
          <div className="col-md-4">
            <h5>Enlaces Útiles</h5>
            <ul className="list-unstyled">
              <li><Link to="#home" className="text-dark">Inicio</Link></li>
              <li><Link to="#about" className="text-dark">Sobre Nosotros</Link></li>
              <li><Link to="#contact" className="text-dark">Contacto</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p>Email: contacto@studymarket.com</p>
            <p>Teléfono: +54 11 1234-5678</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p>&copy; {new Date().getFullYear()} Study Market. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

