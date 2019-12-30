import React from "react";
import Navbar from "../Navbar";
import InfoHeader from "../InfoHeader";
import InfoSubHeader from "../InfoSubHeader";
import ButtonDownWhite from "../ButtonDownWhite";
import OuterFrame from "../../img/ModelS/speedometer/outerframe.svg";
import { MODEL3_INFO } from "./data";
import "../../styles/common.scss";
import "./index.scss";

const Model3Section1 = () => {
  return (
    <>
      <Navbar />
      <div className="model3__first__inner">
        <div className="main-header">
          <InfoSubHeader text="Tesla" />
          <InfoHeader text="Model 3" />
        </div>
        <div className="main-vehicle-info-outer">
          <div className="main-vehicle-info">
            <div className="box zero-to-hundred">
              <div className="top">
                <div className="speedometer">
                  <img src={OuterFrame} alt="outerframe" />
                </div>
                <div>
                  <span className="txt-big">{MODEL3_INFO.zeroToHundred}</span>
                  <span className="txt-small">초</span>
                </div>
              </div>
              <div className="bottom">
                <p>
                  0-100km/h
                  <br />
                  도달 시간
                </p>
              </div>
            </div>
            <div className="box fuel-efficiency">
              <div className="top">
                <div>
                  <span className="txt-big">{MODEL3_INFO.fuelEconomy}</span>
                  <span className="txt-small">km</span>
                </div>
              </div>
              <div className="bottom">
                <p>주행 가능 거리</p>
              </div>
            </div>
            <div className="box ">
              <div className="top">
                <div>
                  <span className="txt-big">{MODEL3_INFO.drive}</span>
                </div>
              </div>
              <div className="bottom">상시 사륜구동</div>
            </div>
            <div className="box btn-order-now">
              <button>지금 주문하기</button>
            </div>
          </div>
        </div>
        <ButtonDownWhite section="#section2" />
      </div>
    </>
  );
};

export default Model3Section1;
