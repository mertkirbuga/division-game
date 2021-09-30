import React from "react";
import Button from "../button/Button";
import "./Main.css";

const Main = (props) => {
  const getPlayerOption = (playerOption) => {
    props.clicked(playerOption);
  };
  return (
    <div className="main">
        <div className="header">
            <h1 style = {{margin : "10px"}}>Select option and start!</h1>
        </div>
      <div className="main-button">
        <Button clicked={getPlayerOption} buttonValue={"One Player"} class={"button-padding"}></Button>
        <Button clicked={getPlayerOption} buttonValue={"Two Player"} class={"button-padding"}></Button>
      </div>
    </div>
  );
};

export default Main;
