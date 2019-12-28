import React from "react";
import Navbar from "../../components/Navbar";
import NavbarMiniWhite from "../../components/NavbarMiniWhite";
import NavbarMiniBlack from "../../components/NavbarMiniBlack";
import ReactFullpage from "@fullpage/react-fullpage";
import InfoHeader from "../../components/InfoHeader";
import InfoSubHeader from "../../components/InfoSubHeader";
import ButtonDownWhite from "../../components/ButtonDownWhite";
import ButtonDownBlack from "../../components/ButtonDownBlack";
import OuterFrame from "../../img/ModelS/speedometer/outerframe.svg";
import { TOOLTIPS, ANCHORS, MODELS_INFO } from "./data";
import "../../styles/common.scss";
import "./index.scss";

const ModelS = () => (
  <ReactFullpage
    verticalCentered={false}
    navigation={true}
    anchors={ANCHORS}
    navigationTooltips={TOOLTIPS}
    showActiveTooltip={true}
    render={() => {
      return (
        <ReactFullpage.Wrapper>
          <section className="section models__first">
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
                        <span className="txt-big">
                          {MODELS_INFO.zeroToHundred}
                        </span>
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
                        <span className="txt-big">
                          {MODELS_INFO.fuelEconomy}
                        </span>
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
          </section>
          <section className="section models__second">
            <NavbarMiniBlack />
            <div className="second__inner-sections">
              <div className="second__left">
                <div className="left__info">
                  <div className="info__header">안전</div>
                  <div className="info__sub-header">높은 충격 보호</div>
                  <p className="info__content">
                    개발 단계부터 전기차로 제작된 Model S는 견고한 구조와 바닥에
                    탑재된 배터리 팩으로 탁월한 충격 보호를 제공합니다.
                  </p>
                </div>
              </div>
              <div className="second__right">
                <div className="right__car-img"></div>
              </div>
            </div>
          </section>
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default ModelS;
