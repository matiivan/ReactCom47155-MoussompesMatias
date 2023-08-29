import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Seguridad Virtual SV
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/CamaraCCTV">
                Camaras CCTV
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/CamarasIP">
                Cámaras IP
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/Accesorios">
                Accesorios
              </NavLink>
            </li>
          </ul>
          
        </div>
       
      </div>

      <div><CartWidget/></div>
    </nav>
   
  );
};


export default NavBar;
