import React from "react";
import "./index.scss";
const RightLastPay = props => {
  return (
    <div className="tabList">
      <ol>
        <li>현금</li>
        <li>리스</li>
        <li>할부</li>
      </ol>
      <div className="finally">
        <div className="oneTwo">
          <span className="one">{props.one}</span>
          <span className="two">₩{props.money}</span>
        </div>
        <div className="oneTwo">
          <span className="one">{props.two}</span>
          <span className="two">₩{props.money2}</span>
        </div>
        <div className="tax">
          <span>{props.three}</span>
        </div>
        <div className="finallyPayment">
          <span className="fp">주문대금</span>
          <span className="fpMoney">₩{props.money3}</span>
        </div>
      </div>
    </div>
  );
};

export default RightLastPay;
