// @flow strict

import * as React from "react";
import ShopNav from "../../components/ShopNav";
import ShopBottom from "../../components/ShopBottom";
import ShopRightSecond from "../../components/ShopRightSecond";
import ShopMainSecond from "../../components/ShopMainSecond";
import "./index.css";

class ShopSecond extends React.Component {
  render() {
    return (
      <div className="Layout">
        <ShopNav></ShopNav>
        <div className="main">
          <ShopMainSecond></ShopMainSecond>
          <ShopRightSecond></ShopRightSecond>
        </div>
        <ShopBottom></ShopBottom>
      </div>
    );
  }
}

export default ShopSecond;
