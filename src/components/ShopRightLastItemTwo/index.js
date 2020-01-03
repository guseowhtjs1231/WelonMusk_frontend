import React from "react";
import "./index.scss";
const ShopMainLastItemTwo = props => {
  return (
    <div className="purchase">
      <span className="purchaseName">{props.name}</span>
      <span className="purchasePrice">{props.price}</span>
    </div>
  );
};

export default ShopMainLastItemTwo;
