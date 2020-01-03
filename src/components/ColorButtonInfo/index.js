import React from "react";
import "./index.scss";
const ColorButtonInfo = props => {
  return (
    <div className="colorNames">
      <p className="carColorName">{props.name}</p>
      <span>{props.span}</span>
      <p className="vhgka">₩{props.vhgka}</p>
    </div>
  );
};

export default ColorButtonInfo;
