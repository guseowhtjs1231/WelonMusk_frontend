import React from "react";
import "./index.scss";

const SpecsButton = ({ text, onClick, isClicked }) => {
  return (
    <button
      onClick={onClick}
      className={`btn-specs ${isClicked ? "clicked" : ""}`}
    >
      {text}
    </button>
  );
};

export default SpecsButton;
