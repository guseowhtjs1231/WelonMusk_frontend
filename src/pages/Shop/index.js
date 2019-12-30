// @flow strict

import * as React from "react";
import ShopNav from "../../components/ShopNav";
import ShopMain from "../../components/ShopMain";
import ShopRight from "../../components/ShopRight";
import ShopBottom from "../../components/ShopBottom";
import "./index.css";

class Shop extends React.Component {
  render() {
    return (
      <div className="Layout">
        <ShopNav />
        <div className="main">
          <ShopMain />
          <ShopRight />
        </div>
        <ShopBottom />
      </div>
    );
  }
}

export default Shop;
