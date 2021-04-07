import React from "react";
import logo from "./images/aerolab-logo.svg";
import User from "./User";
import "./css/Header.css";

const Header = () => {
  return (
    <header className="">
      <div className="div-util">
        <img src={logo} alt="logo" />
        <User />
      </div>
    </header>
  );
};

export default Header;
