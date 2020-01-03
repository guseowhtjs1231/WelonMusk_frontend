import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const InfoButton = ({ text, id }) => {
  return (
    <div id={id} className="main_button-container">
      <Link to="/shop/model3/1">
        <button className="main_button">{text}</button>
      </Link>
    </div>
  );
};

export default InfoButton;
