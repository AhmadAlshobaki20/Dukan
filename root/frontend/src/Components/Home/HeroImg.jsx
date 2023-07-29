import React from "react";
import "./Home.css";
import heroImg from "../../Images/heroImg.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero-container">
      <img src={heroImg} alt="Hand craft" />
      <div className="content-container">
        <h1 className="title">بِحُب ... صنعنا منتجاتنا لكم</h1>
        <p className="description">
          <span className="dukan">دكان</span> نكتشف الفن في كل يد
        </p>

        <Link to={`/Cutoumers/SiginUp`} className="card-link">
          {" "}
          <button className="cta-button">سجل الآن</button>
        </Link>
        <Link to={`/Aboutus`} className="card-link">
          {" "}
          <button className="cta-button">اعرف أكثر</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroImg;
