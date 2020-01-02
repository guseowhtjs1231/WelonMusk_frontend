import React from "react";
import Navbar from "../../Navbar";
import InfoHeader from "../../InfoHeader";
import InfoSubHeader from "../../InfoSubHeader";
import ButtonDownBlack from "../../ButtonDownBlack";
import OuterFrame from "../../../img/ModelS/speedometer/speedometer_black.svg";
import { MODELS_INFO } from "./data";
import "../../../styles/common.scss";
import "./index.scss";

const ModelSSection1 = () => {
  return (
    <>
      <Navbar />
      <div className="models__first__inner">
        <div className="main-header">
          <InfoSubHeader text="Tesla" />
          <InfoHeader text="Model S" />
        </div>
        <div className="main-vehicle-info-outer">
          <div className="main-vehicle-info">
            <div className="box zero-to-hundred">
              <div className="top">
                <div className="speedometer">
                  <img src={OuterFrame} alt="outerframe" />
                </div>
                <div>
                  <span className="txt-big">{MODELS_INFO.zeroToHundred}</span>
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
            <div className="box space">
              <div className="top">
                <div>
                  <span className="txt-big">{MODELS_INFO.carSpace}</span>
                  <span className="txt-small">리터</span>
                </div>
              </div>
              <div className="bottom">
                <p>등급 최고의 적재 공간</p>
              </div>
            </div>
            <div className="box fuel-efficiency">
              <div className="top">
                <div>
                  <span className="txt-big">{MODELS_INFO.fuelEconomy}</span>
                  <span className="txt-small">km</span>
                </div>
              </div>
              <div className="bottom">주행 가능 거리</div>
            </div>
            <div className="box btn-order-now">
              <button>지금 주문하기</button>
            </div>
          </div>
        </div>
        <ButtonDownBlack section="#section2" />
      </div>
    </>
  );
};

export default ModelSSection1;
