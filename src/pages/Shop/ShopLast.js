import * as React from "react";
import ShopNav from "../../components/ShopNav";
import ShopMainLast from "../../components/ShopMainLast";
import ShopRightLast from "../../components/ShopRightLast";
import ShopBottomLast from "../../components/ShopBottomLast";

class ShopLast extends React.Component {
  render() {
    return (
      <div className="Layout">
        <ShopNav></ShopNav>
        <div className="main">
          <ShopMainLast></ShopMainLast>
          <ShopRightLast></ShopRightLast>
        </div>
        <ShopBottomLast></ShopBottomLast>
      </div>
    );
  }
}

export default ShopLast;
