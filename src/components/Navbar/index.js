import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <Link className="navbar-brand mx-5 px-5" to="/">
        Tiffany Weaver
      </Link>
      <div className="justify-content-end">
        <ul className="navbar-nav" >
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About Me
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              My Portfolio
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
