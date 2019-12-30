import * as React from "react";
import carImage from "../../img/shop/tesla.png";
import "./index.scss";
import ShopRightLastItem from "../ShopRightLastItem";
class ShopRightLast extends React.Component {
  render() {
    return (
      <div className="mainRightLast">
        <div className="carPayment">
          <div className="carImage">
            <img src={carImage}></img>
          </div>
          <div className="carName">
            <span>
              귀하의 <strong>Model 3</strong>
            </span>
          </div>
          <div className="paymentMiddle">
            <span>요약</span>
          </div>
          <ul>
            <ShopRightLastItem
              span1="Model 3 Standard Plus RWD"
              dollor="₩"
              span2="53,690,000"
            />
            <ShopRightLastItem span1="Pearl White Multi-Coat" span2="포함" />
            <ShopRightLastItem span1="18인치 에어로 휠" span2="포함" />
            <ShopRightLastItem
              span1="Black & White 부분 프리미엄 인테리어"
              dollor="₩"
              span2="1,286,000"
            />
            <ShopRightLastItem span1="오토파일럿" span2="포함" />
            <ShopRightLastItem
              span1="완전 자율 주행 기능"
              dollor="₩"
              span2="7,714,000"
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default ShopRightLast;
