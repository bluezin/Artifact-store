import React, { useContext, useState } from "react";
import coin from "./images/coin.svg";
import { DataContext } from "./context/Data";
import History from "./History";
import { peticionAumentPoints } from "./fetch/peticiones";

const User = () => {
  const { user } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const [points, setPoints] = useState(1000);
  //

  function viewHistory() {
    setOpen(!open);
  }

  async function AumentPoints() {
    const waitAumentPoints = await peticionAumentPoints(points);
    setPoints(points + 1000);
    alert("You auments 1000 points!!!!");
    return waitAumentPoints;
  }

  return (
    <div className="User">
      <p>{user.name || "Jose"}</p>
      <div className="div-sub-util div-User">
        <p>{user.points || 1000}</p>
        <img src={coin} alt="coin" />
      </div>
      <div>
        <input id="eye" type="checkbox" />
        <label htmlFor="eye"></label>
        <div className="open-modal">
          <h2>User</h2>
          <p>
            Name: <span className="span-user">{user.name || "Jose"}</span>
          </p>
          <p>
            Points: <span className="span-user">{user.points || 1000}</span>
          </p>
          <p>Rendem History:</p>
          <div>
            <button className="button-util" onClick={viewHistory}>
              View history
            </button>
          </div>
          <button className="button-util button-points" onClick={AumentPoints}>
            Aument points
          </button>
        </div>
      </div>
      {open && <History viewHistory={viewHistory} />}
    </div>
  );
};

export default User;
