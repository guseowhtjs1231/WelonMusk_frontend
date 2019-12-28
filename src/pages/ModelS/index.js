import React from "react";
import Navbar from "../../components/Navbar";
import NavbarMiniBlack from "../../components/NavbarMiniBlack";
import ReactFullpage from "@fullpage/react-fullpage";
import InfoHeader from "../../components/InfoHeader";
import InfoSubHeader from "../../components/InfoSubHeader";
import ButtonDownBlack from "../../components/ButtonDownBlack";
import DetailsAndOrder from "../../components/DetailsAndOrder";
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
          {/* // SECTION 1 */}
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
          {/* // SECTION 2 */}
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
                <DetailsAndOrder />
              </div>
              <div className="second__right">
                <div className="right__car-img"></div>
              </div>
            </div>
          </section>
          {/* // SECTION 3 */}
          <section className="section models__third">
            <NavbarMiniBlack />
            <div className="third__inner-sections">
              <div className="third__top">
                <div className="main-vehicle-info-outer">
                  <div className="main-vehicle-info">
                    <div className="box zero-to-hundred">
                      <div className="top">
                        <div>
                          <span className="txt-big">AWD</span>
                        </div>
                      </div>
                      <div className="bottom">
                        <p>
                          듀얼 모터 AWD로 모든 기상 조건에서도 트랙션 및 토크
                          즉시 제어
                        </p>
                      </div>
                    </div>
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
                          0-100km/h 도달 시간이 2.6초에 불과해 지구에서 가장
                          빠른 가속을 제공하는 세단입니다.
                        </p>
                      </div>
                    </div>
                    <div className="box fuel-efficiency">
                      <div className="top">
                        <div>
                          <span className="txt-big">261</span>
                          <span className="txt-small">km/h</span>
                        </div>
                      </div>
                      <div className="bottom">
                        향상된 핸들링 및 공기역학을 통해 최고 속도 261km/h 달성
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="third__bottom">
                <div className="bottom__contents">
                  <div className="contents__left">
                    <div className="left__top">
                      <div className="info__header">Performance</div>
                      <div className="info__sub-header">가장 빠른 가속</div>
                    </div>
                    <div className="left__bottom">
                      <DetailsAndOrder />
                    </div>
                  </div>
                  <div className="contents__right">
                    <p>
                      Model S는 성능과 안전 측면에서 업계의 표준이 되고
                      있습니다. Tesla의 순수 전기 파워트레인은 모든 기상
                      조건에서 비교가 불가능한 성능을 자랑하며 듀얼 모터 상시
                      사륜 구동, 루디크러스 가속을 제공합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
