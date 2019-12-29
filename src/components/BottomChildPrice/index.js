import React from "react";
import "./index.scss";
const BottomChildPrice = props => {
  return (
    <div className="priceMargin">
      <p className="pTag">￦{props.price}</p>
      <span>{props.cost}</span>
    </div>
  );
};

export default BottomChildPrice;
