import React from "react";
import "./Home.css";
import heroImg from "../../Images/heroImg.jpg";
import { NavLink } from "@mantine/core";

const HeroImg = () => {
  return (
    <div className="hero-container">
      <img src={heroImg} alt="Hand craft" />
      <div className="content-container">
        <h1 className="title">بِحُب ... صنعنا منتجاتنا لكم</h1>
        <p className="description">
          <span className="dukan">دكان</span> نكتشف الفن في كل يد
        </p>

        <NavLink to={`/Customers`} className="card-link">
          {" "}
          <button className="cta-button">سجل الآن</button>
        </NavLink>
        <NavLink to={`/Aboutus`} className="card-link">
          {" "}
          <button className="cta-button">اعرف أكثر </button>
        </NavLink>
      </div>
    </div>
  );
};

export default HeroImg;
