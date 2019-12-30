import React from "react";
import "./index.scss";
const ShopMainLastLongText = props => {
  return (
    <div className="longInformationInput">
      <span className="informationName">{props.name} </span>
      <input type="text" className="longInformationText"></input>
      <span className="warningText">필수 정보 입니다.</span>
    </div>
  );
};

export default ShopMainLastLongText;
