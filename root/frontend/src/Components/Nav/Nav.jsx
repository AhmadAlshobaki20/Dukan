import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarCenteredExample"
          aria-controls="navbarCenteredExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarCenteredExample"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            {/* Example with HashLink (for HashRouter) */}
            <li className="nav-item">
              <HashLink className="nav-link" to="/Products#pro">
                تسوق
              </HashLink>
            </li>
            {/* Example with Link (for BrowserRouter) */}
            <li className="nav-item">
              <HashLink className="nav-link" to="Home#about">
                من نحن
              </HashLink>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">تواصل</a>
            </li>
          </ul>
        </div>
        <HashLink smooth to="/Home#" className="Logo">
          Dukan
        </HashLink>
      </div>
    </nav>
  );
};

export default Nav;