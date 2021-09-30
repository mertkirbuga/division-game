import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="icon">
        <span className="fa fa-user-circle-o fa-2x"></span>
      </div>
      <div className="info">
        <p className="info-item_cliked_number">
          {props.number === undefined ? "" : props.number}
        </p>
        <p className="info-item " style={{ padding: "5px" }}>
          {props.statement === undefined ? "" : props.statement}
        </p>
        <p className="info-item ">
          <b>{props.result === undefined ? "" : props.result}</b>
        </p>
      </div>
    </div>
  );
};

export default Card;
