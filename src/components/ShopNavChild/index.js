import React from "react";
import "./index.scss";
const ShopNavChild = props => {
  return (
    <li className="navChild">
      {props.id}
      <h2>{props.name}</h2>
    </li>
  );
};

export default ShopNavChild;
