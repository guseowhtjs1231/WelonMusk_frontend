// @flow strict

import * as React from 'react';
import './ShopBottom.css';

class ShopBottom extends React.Component {
    render() {
        return (
            <div className="mainBottom">
            <div className="bottomItems">
                <div className="price">
                    <div className="priceLeft">
                        <span>현금</span>
                        <span></span>
                    </div>
                    <div className="priceCenter">
                        <div className="priceMargin">
                            <p className="pTag">￦48,690,000</p>
                            <span>연료비 절감 후</span>
                        </div>
                        <div className="priceMargin">
                            <p className="pTag">￦53,690,000</p>
                            <span>연료비 절감 전</span>
                        </div>
                        <div className="pcRight">
                            <a href="" className="linkColor">예상 결제 가격</a>
                        </div>
                    </div>
                
                <div className="emptyBlock">
                </div>
                <div className="priceRight">
                    <button type="button" className="nextButton">다음</button>
                </div>
              </div>
            </div>
        </div>
        );
    }
}

export default ShopBottom;