// @flow strict

import * as React from "react";
import ShopNav from "../../components/ShopNav";
import ShopMainFourth from "../../components/ShopMainFourth";
import ShopRightFourth from "../../components/ShopRightFourth";
import ShopBottom from "../../components/ShopBottom";

class ShopFourth extends React.Component {
  render() {
    return (
      <div className="Layout">
        <ShopNav></ShopNav>
        <div className="main">
          <ShopMainFourth></ShopMainFourth>
          <ShopRightFourth></ShopRightFourth>
        </div>
        <ShopBottom></ShopBottom>
      </div>
    );
  }
}

export default ShopFourth;
