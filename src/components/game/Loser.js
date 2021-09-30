import React from "react";
import Button from "../button/Button";
import "./Loser.css";
import { VADER_IMG } from "../../static";

const Loser = (props) => {
  return (
    <div className="loser">
      <h1>You Lose!</h1>
      <img src={VADER_IMG} alt="Loser" className="image" />
      <Button clicked={props.cliked} buttonValue="New Game" class={"button-padding"}/>
    </div>
  );
};

export default Loser;
