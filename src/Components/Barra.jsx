// src/components/Barra.jsx
import { Link } from "react-router-dom";
import './Barra.css';

function Barra() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark cordabarra">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">FAST ENGLISH</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item bordinha">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item bordinha">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item bordinha">
              <Link className="nav-link" to="/services">Services</Link>
            </li>

            <li className="nav-item bordinha">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Barra;
