import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const token = false;
  const total = 25000;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Pizzería Mamma Mia!
        </Link>

        <div className="d-flex me-auto gap-2">
          <Link
            to="/"
            className="btn btn-sm btn-outline-light text-white border-light"
          >
            🍕 Home
          </Link>

          {token ? (
            <>
              <Link
                to="/profile"
                className="btn btn-sm btn-outline-light text-white border-light"
              >
                🔓 Profile
              </Link>
              <button className="btn btn-sm btn-outline-light text-white border-light">
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-sm btn-outline-light text-white border-light"
              >
                🔐 Iniciar sesión
              </Link>
              <Link
                to="/register"
                className="btn btn-sm btn-outline-light text-white border-light"
              >
                🔐 Registrarse
              </Link>
            </>
          )}
        </div>

        <div className="d-flex">
          <Link
            to="/cart"
            className="btn btn-sm btn-outline-info text-info border-info fw-bold"
          >
            🛒 Total: ${total.toLocaleString("es-CL")}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
