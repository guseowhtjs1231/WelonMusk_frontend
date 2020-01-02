// @flow strict

import * as React from "react";
import ShopNav from "../../components/ShopNav";
import ShopMainFourth from "../../components/ShopMainFourth";
import ShopRightFourth from "../../components/ShopRightFourth";
import ShopBottom from "../../components/ShopBottom";
import Layout from "./Layout/Layout";
class ShopFourth extends React.Component {
  render() {
    return (
      <Layout>
        <ShopMainFourth></ShopMainFourth>
        <ShopRightFourth></ShopRightFourth>
      </Layout>
    );
  }
}

export default ShopFourth;
