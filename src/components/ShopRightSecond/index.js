// @flow strict

import * as React from "react";
import white from "../../img/shop/white.png";
import black from "../../img/shop/black.png";
import silver from "../../img/shop/silver.png";
import blue from "../../img/shop/blue.png";
import red from "../../img/shop/red.png";
import wheel from "../../img/shop/wheel.png";
import wheel2 from "../../img/shop/wheel2.png";
import "./index.scss";
import ColorButton from "../ColorButton";
import ColorButtoInfo from "../ColorButtonInfo";
import ColorButtonInfo from "../ColorButtonInfo";

class ShopRightSecond extends React.Component {
  render() {
    return (
      <div className="mainRightSecond">
        <div className="selectSecond">
          <div className="secondSelectTop">
            <div className="selectList">
              <span>색상 선택하기</span>
            </div>
            <div className="colors">
              <ColorButton color={white} />
              <ColorButton color={black} />
              <ColorButton color={silver} />
              <ColorButton color={blue} />
              <ColorButton color={red} />
            </div>
            <ColorButtonInfo name="Pearl White Multi-Coat" vhgka="포함" />
          </div>
          <div className="line"></div>
          <div className="selectBottom">
            <div className="selectList">
              <span>휠 선택하기</span>
            </div>
            <div className="colors">
              <ColorButton color={wheel} />
              <ColorButton color={wheel2} />
            </div>
            <ColorButtonInfo name="18" span="인치 에어로 휠" vhgka="포함" />
          </div>
        </div>
      </div>
    );
  }
}

export default ShopRightSecond;
