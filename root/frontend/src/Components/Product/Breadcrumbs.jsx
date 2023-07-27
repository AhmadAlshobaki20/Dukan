import React from "react";

import "./Product.css";

function BreadCrumb() {
  return (
    <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">
            {" "}
            <i class="fa-solid fa-house" style={{ color: "#0c0d0d" }}></i>
          </a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          تسوق
        </li>
      </ol>
    </nav>
  );
}

export default BreadCrumb;
