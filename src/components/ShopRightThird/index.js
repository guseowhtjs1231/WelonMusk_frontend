// @flow strict

import * as React from "react";
import purewhite from "../../img/shop/purewhite.png";
import pureblack from "../../img/shop/pureblack.png";
import "./index.scss";
import ColorButton from "../ColorButton";
import ColorButtonInfo from "../ColorButtonInfo";
import RightThirdChild from "../RightThirdChild";

class ShopRightThird extends React.Component {
  render() {
    return (
      <div className="mainRightThird">
        <div className="selectThird">
          <div className="selectTopThird">
            <div className="selectList">
              <span>인테리어 선택하기</span>
            </div>
            <div className="colorOptions">
              <ColorButton color={pureblack} />
              <ColorButton color={purewhite} />
            </div>
            <ColorButtonInfo name="All Black" vhgka="₩  1,286,000" />
          </div>
          <div className="textLorder">
            <p>기본사항:</p>
            <ul>
              <RightThirdChild info="12방향 전동 조절식 앞좌석 열선 시트" />
              <RightThirdChild info="프리미엄 시트 소재 및 트림" />
              <RightThirdChild info="오디오 업그레이드 - 높은 몰입도의 사운드" />
              <RightThirdChild info="자외선 및 적외선 보호장치가 장착된 틴티드 글래스 루프" />
              <RightThirdChild info="자동 조도 조절, 전동식 폴딩이 가능한 열선 사이드 미러" />
              <RightThirdChild info="Bluetooth®를 통한 음악 및 미디어 재생" />
              <RightThirdChild info="사용자 지정 운전자 프로필" />
              <RightThirdChild info="수납 공간, 4개의 USB 포트 및 2개의 스마트폰 도킹을 포함한 센터 콘솔" />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopRightThird;
