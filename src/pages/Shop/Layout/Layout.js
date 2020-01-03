import * as React from "react";
import ShopNav from "../../../components/ShopNav";
import ShopBottom from "../../../components/ShopBottom";

class Layout extends React.Component {
  render() {
    return (
      <div className="Layout">
        <ShopNav />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
