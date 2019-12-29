import React from "react";
import "./index.scss";

const SpecList = ({ category, ans }) => {
  return (
    <div className="spec-list-container">
      <div className="divider"></div>
      <li className="spec-list">
        <span className="spec__category">{category}</span>
        <span className="spec__ans">{ans}</span>
      </li>
    </div>
  );
};

export default SpecList;
