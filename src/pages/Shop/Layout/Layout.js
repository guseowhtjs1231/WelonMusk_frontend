import * as React from "react";
import ShopNav from "../../../components/ShopNav";
import modelwhite1 from "../../../img/shop/1.png";
import modelblack1 from "../../../img/shop/2.png";
import modelsilver1 from "../../../img/shop/3.png";
import modelblue1 from "../../../img/shop/4.png";
import modelred1 from "../../../img/shop/5.png";
import modelwhite from "../../../img/shop/model3.png";
import modelblack from "../../../img/shop/modelblack.png";
import modelsilver from "../../../img/shop/modelsilver.png";
import modelblue from "../../../img/shop/modelblue.png";
import modelred from "../../../img/shop/modelred.png";
import "./Layout.scss";

class Layout extends React.Component {
  render() {
    return (
      <div className="Layout">
        <ShopNav />
        {this.props.children}
        <div className="imgs-display-none">
          <img src={modelwhite1} alt="car-img" />
          <img src={modelblack1} alt="car-img" />
          <img src={modelsilver1} alt="car-img" />
          <img src={modelblue1} alt="car-img" />
          <img src={modelred1} alt="car-img" />
          <img src={modelwhite} alt="car-img" />
          <img src={modelblack} alt="car-img" />
          <img src={modelsilver} alt="car-img" />
          <img src={modelblue} alt="car-img" />
          <img src={modelred} alt="car-img" />
        </div>
      </div>
    );
  }
}

export default Layout;
