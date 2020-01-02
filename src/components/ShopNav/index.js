// @flow strict

import * as React from "react";
import img from "../../img/shop/korea.png";
import tesla from "../../img/shop/tesla.svg";
import "./index.scss";
import ShopNavChild from "../ShopNavChild";

class ShopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navTab: [
        { id: "1.", name: "자동차" },
        { id: "2.", name: "외부" },
        { id: "3.", name: "인테리어" },
        { id: "4.", name: "오토파일럿" },
        { id: "5.", name: "결제" }
      ]
    };
  }
  render() {
    return (
      <div className="nav">
        <div className="carNav">
          <div className="teslaLogo">
            <h1>
              <img className="Logo" src={tesla}></img>
            </h1>
          </div>
          <div className="packageOptions">
            <ul>
              {this.state.navTab.map(el => {
                return <ShopNavChild id={el.id} name={el.name} />;
              })}
            </ul>
          </div>
          <div className="country">
            <img src={img}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopNav;
