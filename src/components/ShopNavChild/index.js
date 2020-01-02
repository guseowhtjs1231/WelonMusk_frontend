import React from "react";
import "./index.scss";
const ShopNavChild = ({ name, isActive }) => {
  return (
    <li className={`navChild ${isActive ? "isActive" : ""}`}>
      <h2>{name}</h2>
    </li>
  );
};

export default ShopNavChild;
