import React from "react";
import "./InfoButton.scss";

const InfoButton = ({ text }) => {
  return (
    <div className="main_button-container">
      <button className="main_button">{text}</button>
    </div>
  );
};

export default InfoButton;
