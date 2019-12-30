import React from "react";
import "./index.scss";
const RightChildButton = props => {
  return (
    <button type="button" className="priceBox">
      <p className="priceBoxName">{props.name}</p>
      <p className="priceBoxMoney">￦{props.price}</p>
    </button>
  );
};

export default RightChildButton;
