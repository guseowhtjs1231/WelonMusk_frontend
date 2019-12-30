// @flow strict

import * as React from "react";
import "./index.scss";
import carImage from "../../img/shop/tesla.png";
import ShopMainChild from "../ShopMainChild";
class ShopMain extends React.Component {
  render() {
    return (
      <div className="mainLeft" style={{ backgroundImage: `url(${carImage}` }}>
        <ul className="carPerformance">
          <ShopMainChild number="352" km="km" drive="주행 가능 거리" />
          <ShopMainChild number="225" km="km/h" drive="최고속도" />
          <ShopMainChild number="5.6" km="초" drive="0~100 km/h 도달시간" />
        </ul>
      </div>
    );
  }
}

export default ShopMain;
