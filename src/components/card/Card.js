import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./Card.css";

const Card = ({number, statement, result}) => {
  return (
    <div className="card">
      <div className="icon">
        <span className="fa fa-user-circle-o fa-2x"></span>
      </div>
      <div className="info">
        <p className="info-item_cliked_number">
          {number === undefined ? "" : number}
        </p>
        <p className="info-item " style={{ padding: "5px" }}>
          {statement === undefined ? "" : statement}
        </p>
        <p className="info-item ">
          <b>{result === undefined ? "" : result}</b>
        </p>
      </div>
    </div>
  );
};

export default Card;
