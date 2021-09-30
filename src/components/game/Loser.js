import React from "react";
import Button from "../button/Button";
import "./Loser.css";
import Vader from "../../image/vader.png";

const Loser = (props) => {
  return (
    <div className="loser">
      <h1>You Lose!</h1>
      <img src={Vader} alt="Loser" className="image" />
      <Button clicked={props.cliked} buttonValue="New Game" class={"buttom-padding"}/>
    </div>
  );
};

export default Loser;
