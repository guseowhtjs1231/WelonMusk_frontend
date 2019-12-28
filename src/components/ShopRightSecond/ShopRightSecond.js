// @flow strict

import * as React from 'react';
import './ShopRightSecond.css';
import white from './white.png';
import black from './black.png';
import silver from './silver.png';
import blue from './blue.png';
import red from './red.png';
import wheel from './wheel.png';
import wheel2 from './wheel2.png';


class ShopRightSecond extends React.Component {
  render() {
    return (
      <div className="mainRight">
        <div className="select">
          <div className="selectTop">
            <div className="selectList">
              <span>색상 선택하기</span>
            </div>
            <div className="colors">
              <div className="paddingBlock">
                <div className="colorBorder">
                  <img className="color" src={white}></img>
                </div>
              </div>
              <div className="paddingBlock">
                <div className="colorBorder">
                  <img className="color" src={black}></img>
                </div>
              </div>
              <div className="paddingBlock">
                <div className="colorBorder">
                  <img className="color" src={silver}></img>
                </div>
              </div>
              <div className="paddingBlock">
                <div className="colorBorder">
                  <img className="color" src={blue}></img>
                </div>
              </div>
              <div className="paddingBlock">
                <div className="colorBorder">
                  <img className="color" src={red}></img>
                </div>
              </div>
            </div>
            <div className="colorNames">
              <p className="carColorName">Pearl White Multi-Coat</p>
              <p className="vhgka">포함</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="selectBottom">
            <div className="selectList">
              <span>휠 선택하기</span>
            </div>
            <div className="colors">
              <div className="paddingBlock">
                <div className="colorBorder">
                  <img className="color" src={wheel}></img>
                </div>
              </div>
              <div className="paddingBlock">
                <div className="colorBorder">
                  <img className="color" src={wheel2}></img>
                </div>
              </div>
            </div>
            <div className="colorNames">
              <p className="carColorName">18</p><span>인치 에어로 휠</span>
              <p className="vhgka">포함</p>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default ShopRightSecond;