import {Link} from "react-router-dom";

const Navbar = () => {



  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary absolute-top">
      <div className="container-fluid">
        <Link className="navbar-brand navbar-brand-spacing" to="/">
          <img src="/logo/Logo.png" alt="StudyMarket" width="40" height="42"/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Study Market</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav navbar-spacing justify-content-start flex-grow-1 pe-3 mt-2">
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/">Inicio</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link nav-link-custom dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item nav-link-custom" to="/productos/apuntes">Apuntes</Link></li>
                  <li><Link className="dropdown-item nav-link-custom" to="/productos/libros">Libros</Link></li>           
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/conocenos">Conócenos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/ayuda">Ayuda</Link>
              </li>
            </ul>
            <form className="d-flex mt-2" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>

            <div className="line-personalizada"></div>

            <div className="Icons-PerfilyCarrito">            
              <Link to="#" className="Icon-container-p">
                <img src="/images/Perfil.svg" alt="Perfil" width="40" height="42"/>
              </Link>
              <Link to="/carrito" className="Icon-container-c">
                <img src="../../public/images/Carrito.svg" alt="Perfil" width="40" height="42"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
