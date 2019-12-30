// @flow strict

import * as React from "react";
import "./index.scss";
import RightChildName from "../RightChildName";
import RightChildButton from "../RightChildButton";

class ShopRight extends React.Component {
  render() {
    return (
      <div className="mainRight">
        <div className="mainRightItem">
          <div className="itemTop">
            <p>차량 선택하기</p>
          </div>
          <div className="emptyBlockRight"></div>
          <div className="item">
            <RightChildName one="후륜구동 (RWD)" two="부분 프리미엄 인테리어" />
            <RightChildButton name="Standard Range Plus" price="53,690,000" />
          </div>
          <div className="item">
            <RightChildName
              one="듀얼 모터 상시 사륜구동 (AWD)"
              two="프리미엄 인테리어"
            />
            <RightChildButton name="Long Range" price="63,690,000" />
            <RightChildButton name="Performance" price="73,690,000" />
          </div>
        </div>
      </div>
    );
  }
}

export default ShopRight;
