// @flow strict

import React from "react";
import { Link, withRouter } from "react-router-dom";
import img from "../../img/shop/korea.png";
import tesla from "../../img/shop/tesla.svg";
import "./index.scss";
import ShopNavChild from "../ShopNavChild";

class ShopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navTab: [
        { step: "1", name: "1. 자동차", active: false },
        { step: "2", name: "2. 외부", active: false },
        { step: "3", name: "3. 인테리어", active: false },
        { step: "4", name: "4. 오토파일럿", active: false },
        { step: "5", name: "5. 결제", active: false }
      ]
    };
  }

  componentDidMount() {
    const newState = this.state.navTab.map(tab => {
      if (tab.step === this.props.match.params.step) {
        return { ...tab, active: true };
      }
      return { ...tab };
    });

    this.setState({ navTab: newState });
  }

  render() {
    return (
      <div className="nav">
        <div className="carNav">
          <div className="teslaLogo">
            <h1>
              <img className="Logo" src={tesla} alt="teslalogo"></img>
            </h1>
          </div>
          <div className="packageOptions">
            <ul>
              {this.state.navTab.map((el, index) => {
                return (
                  <Link
                    className="shopnav__links"
                    to={`/shop/model3/${index + 1}`}
                  >
                    <ShopNavChild name={el.name} isActive={el.active} />
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="country">
            <img src={img} alt="iggimgmi"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ShopNav);
