import React from "react";
import NavbarMiniBlack from "../../NavbarMiniBlack";
import DetailsAndOrder from "../../DetailsAndOrder";
import ButtonDownBlack from "../../ButtonDownBlack";
import OuterFrame from "../../../img/ModelS/speedometer/speedometer_white.svg";
import "../../../styles/common.scss";
import "./index.scss";

const ModelSSection3 = () => {
  return (
    <>
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
                    듀얼 모터 AWD로 모든 기상 조건에서도 트랙션 및 토크 즉시
                    제어
                  </p>
                </div>
              </div>
              <div className="box zero-to-hundred">
                <div className="top">
                  <div className="speedometer">
                    <img src={OuterFrame} alt="outerframe" />
                  </div>
                  <div>
                    <span className="txt-big">2.7</span>
                    <span className="txt-small">초</span>
                  </div>
                </div>
                <div className="bottom">
                  <p>
                    0-100km/h 도달 시간이 2.6초에 불과해 지구에서 가장 빠른
                    가속을 제공하는 세단입니다.
                  </p>
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
                Model S는 성능과 안전 측면에서 업계의 표준이 되고 있습니다.
                Tesla의 순수 전기 파워트레인은 모든 기상 조건에서 비교가
                불가능한 성능을 자랑하며 듀얼 모터 상시 사륜 구동, 루디크러스
                가속을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ButtonDownBlack section="#section4" />
    </>
  );
};

export default ModelSSection3;
