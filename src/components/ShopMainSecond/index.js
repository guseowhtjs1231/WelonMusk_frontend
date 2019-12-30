// @flow strict

import * as React from "react";
import "./index.scss";
import carImage from "../../img/shop/tesla.png";
class ShopMainSecond extends React.Component {
  render() {
    return (
      <div
        className="mainLeft"
        style={{ backgroundImage: `url(${carImage}` }}
      ></div>
    );
  }
}

export default ShopMainSecond;
