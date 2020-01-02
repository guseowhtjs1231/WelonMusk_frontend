// @flow strict

import * as React from "react";
import ShopMainThird from "../../components/ShopMainThird";
import ShopRightThird from "../../components/ShopRightThird";
import "./index.scss";
import Layout from "./Layout/Layout";
class ShopThird extends React.Component {
  render() {
    return (
      <Layout>
        <ShopMainThird></ShopMainThird>
        <ShopRightThird></ShopRightThird>
      </Layout>
    );
  }
}

export default ShopThird;
