import React, { useState, useContext } from "react";
import { DataContext } from "./context/Data";
import { peticionPostRendem } from "./fetch/peticiones";
import Loader from "./Loader";
import coin from "./images/coin.svg";

const Buy = ({ data }) => {
  const [buy, setBuy] = useState([]);
  const { user, state } = useContext(DataContext);
  //
  async function handleOpen(name, cost) {
    let arrayName = [];
    if (user.points > cost) {
      let saveName = await arrayName.concat(name);
      return setBuy(saveName);
    }
  }

  async function SendData(dataSend) {
    const waitRendeem = await peticionPostRendem(dataSend);
    alert("Bought!!!!");
    console.log(waitRendeem);
  }

  return (
    <div className="Buy">
      {state.loading && <Loader />}
      {data.map((data) => {
        const { name, category, img, cost, _id } = data;

        const need = cost - user.points;

        return (
          <div
            className={buy.includes(name) ? "div-Buy add-div-buy" : "div-Buy"}
            style={{ cursor: `${user.points < cost ? "auto" : "pointer"} ` }}
            key={_id}
            onClick={() => handleOpen(name, cost)}
          >
            {user.points < cost ? (
              <div className="div-emenrgent-need">
                <p>You need {need}</p>
                <img src={coin} alt="coin" />
              </div>
            ) : (
              <h3 className="buy-blue">{}</h3>
            )}
            <div className="div-sub-buy">
              <img src={img.url} alt={img.url} className="img-Buy" />
            </div>
            <div className="div-three-buy">
              <h2 className="h2-costo">{cost}</h2>
              <button className="redeem-button" onClick={() => SendData(_id)}>
                Redeem now
              </button>
            </div>
            <p className="type-buy">{category}</p>
            <p className="name-buy">{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Buy;
