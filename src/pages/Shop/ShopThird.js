// @flow strict

import * as React from "react";
import ShopMainThird from "../../components/ShopMainThird";
import ShopRightThird from "../../components/ShopRightThird";
import ShopNav from "../../components/ShopNav";
import ShopBottom from "../../components/ShopBottom";
import "./index.css";

class ShopThird extends React.Component {
  render() {
    return (
      <div className="Layout">
        <ShopNav></ShopNav>
        <div className="main">
          <ShopMainThird></ShopMainThird>
          <ShopRightThird></ShopRightThird>
        </div>
        <ShopBottom></ShopBottom>
      </div>
    );
  }
}

export default ShopThird;
