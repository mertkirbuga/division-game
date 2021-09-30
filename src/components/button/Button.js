import React from "react";
import "./Button.css";

const Button = (props) => {
  const getButtonValue = () => {
    props.clicked(props.buttonValue);
  };

  return (
    <div className={props.class === undefined ? "" : props.class}>
      <button className="button" onClick={getButtonValue}>
        {props.buttonValue}
      </button>
    </div>
  );
};

export default Button;
