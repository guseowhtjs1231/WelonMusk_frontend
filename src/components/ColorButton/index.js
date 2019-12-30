import React from "react";
import "./index.scss";
const ColorButton = props => {
  return (
    <div className="paddingBlock">
      <div className="colorBorder">
        <img className="color" src={props.color}></img>
      </div>
    </div>
  );
};

export default ColorButton;
