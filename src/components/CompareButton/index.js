import React from "react";
import "./index.scss";

const CompareButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="btn-compare">
      {text}
    </button>
  );
};

export default CompareButton;
