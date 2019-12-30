import React from "react";
import "./index.scss";
const BottomChildButton = props => {
  return (
    <div className="priceRight">
      <button type="button" className="nextButton">
        {props.name}
      </button>
    </div>
  );
};

export default BottomChildButton;
