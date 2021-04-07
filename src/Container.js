import React, { useContext } from "react";
import Information from "./Information";
import Buy from "./Buy";
import "./css/Container.css";
import { DataContext } from "./context/Data";

const Container = () => {
  const { state, slide, products } = useContext(DataContext);

  function handleLeft() {
    const after = state.after - 16;
    const before = state.before - 16;
    if (state.before !== 0) {
      slide(before, after);
    }
  }
  function handleRigth() {
    const after = state.after + 16;
    const before = state.after;
    if (state.after !== products.length) {
      slide(before, after);
    }
  }

  return (
    <div className="Container">
      <Information
        handleRigth={handleRigth}
        handleLeft={handleLeft}
        {...state}
      />
      <Buy {...state} />
      <Information
        handleRigth={handleRigth}
        handleLeft={handleLeft}
        exist="true"
        {...state}
      />
    </div>
  );
};

export default Container;
