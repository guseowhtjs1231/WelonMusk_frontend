import React from "react";
import "./index.scss";
const ShopMainChild = props => {
  return (
    <li className="mainChild">
      <p>
        {props.number}
        <span className="plColor1">{props.km}</span>
      </p>
      <span className="plColor2">{props.drive}</span>
    </li>
  );
};

export default ShopMainChild;
