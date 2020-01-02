import React from "react";
import NavbarMiniBlack from "../../NavbarMiniBlack";
import Video from "../../../videos/model3_bg_third.mp4";
import DetailsAndOrder from "../../DetailsAndOrder";
import ButtonDownBlack from "../../ButtonDownBlack";
import OuterFrame from "../../../img/Model3/speedometer.svg";
import "./index.scss";

const Model3Section3 = () => {
  return (
    <>
      <NavbarMiniBlack />
      <div className="third__inner-sections">
        <div className="third__top">
          <video
            className="bg-vid"
            data-src={Video}
            type="video/mp4"
            autoPlay
            data-keepplaying
            loop
            muted
          ></video>
          <div className="top__info-outer">
            <div className="top__info">
              <div className="box zero-to-hundred">
                <div className="top">
                  <div className="speedometer">
                    <img src={OuterFrame} alt="outerframe" />
                  </div>
                  <div>
                    <span className="txt-big">3.4</span>
                    <span className="txt-small">초</span>
                  </div>
                </div>
                <div className="bottom">
                  <p>가장 빠른 가속— 0-100 km/h 도달시간 3.4초</p>
                </div>
              </div>
              <div className="box max-speed">
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
              <div className="box drive">
                <div className="top">
                  <div>
                    <span className="txt-big">AWD</span>
                  </div>
                </div>
                <div className="bottom">
                  <p>
                    듀얼 모터 AWD로 어떤 기후 조건에서도 트랙션 및 토크 즉시
                    제어
                  </p>
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
                Model 3는 듀얼 모터 AWD, 20인치 퍼포먼스 휠 및 브레이크와 낮아진
                서스펜션 등이 탑재되어 어떤 기후조건에서도 완벽한 차량 제어를
                제공합니다. 또한, Model 3의 카본 파이버 스포일러는 고속 주행 시
                안정성을 향상시켜 0-100 km/h 도달 시간이 3.4초에 불과합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ButtonDownBlack section="#section4" />
    </>
  );
};

export default Model3Section3;
