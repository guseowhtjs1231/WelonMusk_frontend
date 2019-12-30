import React from "react";
import "./index.scss";
const ShopMainLastShotText = props => {
  return (
    <div className="infoItems">
      <span className="informationName" placeholder={props.holder}>
        {props.info}{" "}
      </span>
      <input type="text" className="shotInformationText"></input>
      <span className="warningText">필수 정보 입니다.</span>
    </div>
  );
};

export default ShopMainLastShotText;
