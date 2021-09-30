import React from "react";
import Button from "../button/Button";
import "./Winner.css";
import { LUKE_IMG } from "../../static";

const Winner = (props) => {
  return (
    <div className="winner">
      <h1>You Win!</h1>
      <img src={LUKE_IMG} alt="Winner" className="image" />
      <Button clicked={props.cliked} buttonValue="New Game" class={"button-padding"}/>
    </div>
  );
};

export default Winner;
