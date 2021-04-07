import React, { useContext } from "react";
import "./css/button.css";
import { DataContext } from "./context/Data";

const Button = ({ name }) => {
  const { selection, products } = useContext(DataContext);
  //
  function conclusion() {
    const most = products.filter((product) => product.cost >= 2100);
    const ligth = products.filter((product) => product.cost <= 1000);
    const Highest = products.filter((product) => product.cost >= 1100);
    //
    switch (name) {
      case "Most recent":
        return most;
      case "Lowest price":
        return ligth;
      case "Highest price":
        return Highest;
      default:
        return;
    }
  }

  function handleClick(name) {
    if (name) {
      const j = conclusion(name);
      selection(j);
    }
  }

  return (
    <>
      <button className="Button" onClick={() => handleClick(name)}>
        {name}
      </button>
    </>
  );
};

export default Button;
