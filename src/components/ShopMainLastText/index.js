import React from "react";
import "./index.scss";
const ShopMainLastText = props => {
  return (
    <div className="informationInput">
      <span className="informationName">{props.info}</span>
      <input type="text" className="informationText"></input>
      <span className="warningText">필수 정보 입니다.</span>
    </div>
  );
};

export default ShopMainLastText;
