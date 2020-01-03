// @flow strict

import * as React from "react";
import "./index.scss";
import BottomChildPrice from "../BottomChildPrice";
import BottomChildButton from "../BottomChildButton";

class ShopBottom extends React.Component {
  render() {
    return (
      <div className="mainBottom">
        <div className="bottomItems">
          <div className="price">
            <div className="priceLeft">
              <select>
                <option value="현금">현금</option>
                <option value="리스">리스 </option>
                <option value="할부">할부</option>
              </select>
            </div>
            <div className="priceCenter">
              <BottomChildPrice
                price={this.props.savingPrice}
                cost="연료비 절감 후"
              />
              <BottomChildPrice
                price={this.props.expectedPrice}
                cost="연료비 절감 전"
              />
              <div className="pcRight">
                <a href="" className="linkColor">
                  예상 결제 가격
                </a>
              </div>
            </div>

            <div className="emptyBlock"></div>
            <BottomChildButton name="다음" />
          </div>
        </div>
      </div>
    );
  }
}

export default ShopBottom;
