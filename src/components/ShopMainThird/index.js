// @flow strict

import * as React from "react";
import "./index.scss";
import compositor from "../../img/shop/compositor.png";

class ShopMainThird extends React.Component {
  render() {
    return (
      <div className="mainLeft">
        <img src={compositor}></img>
      </div>
    );
  }
}

export default ShopMainThird;
