import React from "react";
import "./index.scss";
const ColorButton = ({ id, color, onClick, select }) => {
  return (
    <div
      className={`paddingBlock  ${select ? "select" : ""}`}
      id={id}
      onClick={() => onClick(id)}
    >
      <div className="colorBorder ">
        <img className="color" src={color} alt="color"></img>
      </div>
    </div>
  );
};

export default ColorButton;
