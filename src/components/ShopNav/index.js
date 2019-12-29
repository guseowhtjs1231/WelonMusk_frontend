// @flow strict

import * as React from "react";
import img from "../../img/shop/korea.png";
import tesla from "../../img/shop/tesla.svg";
import "./index.scss";
import ShopNavChild from "../ShopNavChild";

class ShopNav extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="carNav">
          <div className="teslaLogo">
            <h1>
              <img className="Logo" src={tesla}></img>
            </h1>
          </div>
          <div className="packageOptions">
            <ul>
              <ShopNavChild id="1." name="자동차" />
              <ShopNavChild id="2." name="외부" />
              <ShopNavChild id="3." name="인테리어" />
              <ShopNavChild id="4." name="오토파일럿" />
              <ShopNavChild id="5." name="결제" />
            </ul>
          </div>
          <div className="country">
            <img src={img}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopNav;
