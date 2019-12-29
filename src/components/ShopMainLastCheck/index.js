import React from "react";
import "./index.scss";
const ShopMainLastLongCheck = props => {
  return (
    <div className="agreeCheck">
      <label className="checkBoxContainer">
        <input type="checkbox" className="checkBox2"></input>
        <span className="checkmark2"></span>
      </label>
      <span>
        Tesla의 <a href="">{props.text} </a>
        <span>{props.text2} </span>
        <a href="">{props.text3}</a>
        <span> {props.text4}</span>
      </span>
    </div>
  );
};

export default ShopMainLastLongCheck;
