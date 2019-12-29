import * as React from "react";
import "./index.scss";
import ShopMainLastText from "../ShopMainLastText";
import ShopMainLastLongText from "../ShopMainLastLongText";
import ShopMainLastCheck from "../ShopMainLastCheck";
import ShopMainLastLongCheck from "../ShopMainLastCheck";
class ShopMainLast extends React.Component {
  render() {
    return (
      <div className="mainLeftLast">
        <form className="return">
          <button type="submit">
            <i>&lt;</i>디자인 편집
          </button>
        </form>
        <div className="reviewPage">
          <span className="input">계정 세부 사항 입력</span>
          <div className="radioBoxs">
            <label className="radioBoxContainer">
              <input type="radio" className="radioBox"></input>
              <span>개인</span>
            </label>
            <label className="radioBoxContainer">
              <input type="radio" className="radioBox"></input>
              <span>기업</span>
            </label>
          </div>
          <div className="longLine"></div>
          <div className="infoFirst">
            <ShopMainLastText info="성명 (한글)" />
          </div>
          <div className="infoFirst">
            <ShopMainLastText info="이름 (영문)" />
            <ShopMainLastText info="성 (영문)" />
          </div>
          <div className="infoFirst">
            <ShopMainLastText info="이메일 주소" />
            <ShopMainLastText info="전화번호" />
          </div>
          <ShopMainLastLongCheck
            text="개인정보처리방침"
            text2="에 따른 개인정보
                수집·이용 및 국내외 사업자에 대한 개인정보 제공에 동의 합니다."
          />
          <ShopMainLastLongCheck
            text="자동차구매계약"
            text2="상세조건 및"
            text3="수퍼차저 공정 이용 정책"
            text4=" 에 동의합니다."
          />
          <ShopMainLastLongCheck
            text="위치기반서비스약관"
            text2="에 동의 합니다."
          />
        </div>
      </div>
    );
  }
}

export default ShopMainLast;
