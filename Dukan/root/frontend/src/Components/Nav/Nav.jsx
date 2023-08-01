import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Images/logonew.png";
import "./Nav.css";

const Nav = () => {
  const vendor_token = JSON.parse(sessionStorage.getItem("vendor_token"));
  const customer_token = JSON.parse(sessionStorage.getItem("customer-token"));

  const Navigate = useNavigate();
  const handleLogOut = () => {
    Navigate("/Vendor/Login");
    sessionStorage.removeItem("vendor_token");
    sessionStorage.removeItem("id");
  };
  const handleOut = () => {
    Navigate("/Cutoumers/Login");
    sessionStorage.removeItem("customer-token");
    sessionStorage.removeItem("id");
  };

  // useEffect(() => {
  //   if (!token) {
  //     Navigate("/Vendor/Login");
  //   }
  // }, []);
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
          {vendor_token ? null : (
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
                <a className="nav-link disabled"> تواصل معنا</a>
              </li>
            </ul>
          )}
        </div>
        {vendor_token || customer_token ? (
          <button
            className="btn"
            onClick={() => {
              handleLogOut();
              handleOut();
            }}
          >
            الخروج
          </button>
        ) : (
          <div id="buttons">
            <Link to="/Vendor/Login">
              <button className="btn">الدخول إلى المتجر</button>
            </Link>
            <Link to="/Cutoumers/Login">
              <button className="btn">تسجيل دخول</button>
            </Link>
          </div>
        )}
        <div>
          <HashLink smooth to="/Home#" className="Logo">
            Dukan
            <img src={Logo} alt="" />
          </HashLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
