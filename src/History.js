import React, { useState, useContext, useEffect } from "react";
import "./css/history.css";
import { peticionHistory } from "./fetch/peticiones";
import { DataContext } from "./context/Data";

const History = ({ viewHistory }) => {
  const [history, setHistory] = useState([]);
  const { user } = useContext(DataContext);

  async function callHistory() {
    try {
      const waitHistory = await peticionHistory();
      setHistory(waitHistory);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    callHistory();
  }, []);
  //
  return (
    <div className="History">
      <div className="div-history">
        <h3 className="h3-history">History</h3>
        <div className="div-sub-history">
          {history.length === 0 && (
            <div className="div-history-emergent">
              <p className="p-rendeem">No redeemed product was found ...</p>
              <button className="button-util" onClick={viewHistory}>
                Cancel
              </button>
            </div>
          )}
          {history
            .map((data, index) => {
              const result = user.points - data.cost;

              return (
                <div key={index} className="div-user-history">
                  <p>
                    You bought <small>{data.name}.</small>
                  </p>
                  <strong>
                    Cost you {data.cost} dollars and you stayed with {result}.
                  </strong>
                </div>
              );
            })
            .reverse()}
          {history.length !== 0 && (
            <button className="button-util" onClick={viewHistory}>
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
