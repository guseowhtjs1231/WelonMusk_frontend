import React from "react";
import "./index.scss";
const ShopMainLastItem = props => {
  return (
    <li className="Lastli">
      <span className="span1">{props.span1}</span>
      <span className="span2">
        {props.dollor}
        {props.span2}
      </span>
    </li>
  );
};

export default ShopMainLastItem;
