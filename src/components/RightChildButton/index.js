import React from "react";
import "./index.scss";
const RightChildButton = ({ id, name, price, onClick, selected }) => {
  return (
    <button
      type="button"
      className={`priceBox ${selected ? "selected" : ""}`}
      id={id}
      onClick={() => onClick(id)}
    >
      <p className="priceBoxName">{name}</p>
      <p className="priceBoxMoney">₩{price}</p>
    </button>
  );
};

export default RightChildButton;
