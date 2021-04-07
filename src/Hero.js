import React from "react";
import hero from "./images/header-x2.png";
import "./css/Hero.css";

const Hero = () => {
  return (
    <div className="Hero">
      <img src={hero} alt="hero" />
      <h1>Electronics</h1>
    </div>
  );
};

export default Hero;
