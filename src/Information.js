import React, { useContext } from "react";
import Button from "./button";
import arrowRigth from "./images/arrow-right.svg";
import arrowLeft from "./images/arrow-left.svg";
import "./css/Information.css";
import { DataContext } from "./context/Data";

const Information = ({
  handleRigth,
  handleLeft,
  after = 0,
  data,
  exist,
  handleClick,
}) => {
  const { products } = useContext(DataContext);
  //
  return (
    <div className="Information">
      {exist ? (
        <div className="div-inforamtion">
          <p className="p-information">
            {after} of {products.length} products
          </p>
        </div>
      ) : (
        <div className="div-inforamtion">
          <p className="p-information">
            {after} of {products.length} products
          </p>
          <small>Sort by:</small>
          <div className="section-buttons">
            <Button name="Most recent" data={data} handleClick={handleClick} />
            <Button name="Lowest price" data={data} handleClick={handleClick} />
            <Button
              name="Highest price"
              data={data}
              handleClick={handleClick}
            />
          </div>
        </div>
      )}
      <div>
        {after === products.length ? (
          <>
            <div className="section-arrows">
              <img
                src={arrowLeft}
                alt="arrow-rigth"
                className="arrow"
                onClick={handleLeft}
              />
              <img
                src={arrowRigth}
                alt="arrow-rigth"
                className="arrow"
                onClick={handleRigth}
              />
            </div>
          </>
        ) : (
          <div className="section-arrows">
            <img
              src={arrowRigth}
              alt="arrow-rigth"
              className="arrow"
              onClick={handleRigth}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Information;
