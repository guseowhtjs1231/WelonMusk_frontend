import React from "react";
import NavbarMiniWhite from "../../NavbarMiniWhite";
import SpecsButton from "../../SpecsButton";
import SpecList from "../../SpecList";
import ButtonDownWhite from "../../ButtonDownWhite";
import { SPECS_PERFORMANCE, SPECS_LONGRANGE } from "./data";
import "./index.scss";

class ModelSSection8 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      performance: true,
      longRange: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = id => {
    let newMode = this.state;

    if (id === 1 && !newMode.performance) {
      newMode.performance = true;
      newMode.longRange = false;
    }

    if (id === 2 && !newMode.longRange) {
      newMode.performance = false;
      newMode.longRange = true;
    }

    this.setState(newMode);
  };

  render() {
    const { performance, longRange } = this.state;
    const type = performance ? SPECS_PERFORMANCE : SPECS_LONGRANGE;

    return (
      <>
        <NavbarMiniWhite />
        <div className="eighth__inner-sections">
          <div className="eighth__left">
            <div className="left__car-img"></div>
          </div>
          <div className="eighth__right">
            <div className="right__spec-info">
              <div className="spec__header">Model S 제원</div>
              <div className="spec__btn-container">
                <div className="btn-left-container">
                  <SpecsButton
                    id={1}
                    text="PERFORMANCE"
                    onClick={this.handleClick}
                    isClicked={performance}
                  />
                </div>
                <div className="btn-right-container">
                  <SpecsButton
                    id={2}
                    text="LONG RANGE"
                    onClick={this.handleClick}
                    isClicked={longRange}
                  />
                </div>
              </div>
              <div className="spec__specs">
                <div className="specs__left">
                  <SpecList category="배터리" ans={type.battery} />
                  <SpecList category="가속도" ans={type.acceleration} />
                  <SpecList category="주행 가능 거리" ans={type.range} />
                  <SpecList category="드라이브" ans={type.drive} />
                  <SpecList category="좌석수" ans={type.seating} />
                  <SpecList category="휠" ans={type.wheels} />
                </div>
                <div className="specs__right">
                  <SpecList category="중량" ans={type.weight} />
                  <SpecList category="적재공간" ans={type.cargo} />
                  <SpecList category="디스플레이" ans={type.displays} />
                  <SpecList category="제품 보증" ans={type.warranty} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonDownWhite section="#section9" />
      </>
    );
  }
}

export default ModelSSection8;
