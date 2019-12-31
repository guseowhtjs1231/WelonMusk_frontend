import React from "react";
import NavbarMiniWhite from "../../NavbarMiniWhite";
import SpecsButton from "../../SpecsButton";
import CompareButton from "../../CompareButton";
import SpecList from "../../SpecList";
import ButtonDownWhite from "../../ButtonDownWhite";
import Modal from "../../Modal";
import Backdrop from "../../Backdrop";
import {
  SPECS_PERFORMANCE,
  SPECS_LONG_RANGE_AWD,
  SPECS_STANDARD_PLUS
} from "./data";
import "./index.scss";

class Model3Section8 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "performance",
      showModal: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleCompare = this.handleCompare.bind(this);
  }

  handleClick(id) {
    this.setState({ mode: id });
  }

  handleCompare() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { mode, showModal } = this.state;
    let type = {};

    switch (mode) {
      case "performance":
        type = SPECS_PERFORMANCE;
        break;
      case "longRangeAwd":
        type = SPECS_LONG_RANGE_AWD;
        break;
      case "standardPlus":
        type = SPECS_STANDARD_PLUS;
        break;
      default:
        type = SPECS_PERFORMANCE;
    }

    return (
      <>
        {showModal && <Backdrop onClick={this.handleCompare} />}
        {showModal && <Modal onClick={this.handleCompare} />}
        <NavbarMiniWhite />
        <div className="eighth__inner-sections">
          <div className="eighth__left">
            <div className="left__car-img"></div>
          </div>
          <div className="eighth__right">
            <div className="right__spec-info">
              <div className="spec__header">Model 3 규격</div>
              <div className="spec__btn-container">
                <div className="btn-left-container">
                  <SpecsButton
                    id="performance"
                    text="PERFORMANCE"
                    onClick={this.handleClick}
                    isClicked={mode === "performance"}
                  />
                  <SpecsButton
                    id="standardPlus"
                    text="STANDARD PLUS"
                    onClick={this.handleClick}
                    isClicked={mode === "standardPlus"}
                  />
                </div>
                <div className="btn-right-container">
                  <SpecsButton
                    id="longRangeAwd"
                    text="LONG RANGE AWD"
                    onClick={this.handleClick}
                    isClicked={mode === "longRangeAwd"}
                  />
                  <CompareButton
                    text="비교"
                    onClick={this.handleCompare}
                    show={this.state.show}
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

export default Model3Section8;
