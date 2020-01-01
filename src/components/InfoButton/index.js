import React from "react";
import "./index.scss";

const InfoButton = ({ text, id }) => {
  return (
    <div id={id} className="main_button-container">
      <button className="main_button">{text}</button>
    </div>
  );
};

export default InfoButton;
