import React from "react";
import Button from "../button/Button";
import "./Winner.css";
import Luke from "../../image/luke.png";

const Winner = (props) => {
  return (
    <div className="winner">
      <h1>You Win!</h1>
      <img src={Luke} alt="Winner" className="image" />
      <Button clicked={props.cliked} buttonValue="New Game" class={"buttom-padding"}/>
    </div>
  );
};

export default Winner;
