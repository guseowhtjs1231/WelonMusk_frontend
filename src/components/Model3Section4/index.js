import React from "react";
import NavbarMiniBlack from "../NavbarMiniBlack";
import DetailsAndOrder from "../DetailsAndOrder";
import ButtonDownBlack from "../ButtonDownBlack";
import WeatherIcon from "../../img/Model3/weather-icon.svg";
import "./index.scss";

const Model3Section4 = () => {
  return (
    <>
      <NavbarMiniBlack />
      <div className="fourth__inner-sections">
        <div className="fourth__top">
          <div className="fourth__info-outer">
            <div className="fourth__info">
              <div className="box motors">
                <div className="top">
                  <div>
                    <span className="txt-big">2</span>
                  </div>
                </div>
                <div className="bottom">
                  <p>독립 모터가 전면 및 후면 휠 토크를 디지털로 제어</p>
                </div>
              </div>
              <div className="box reaction-time">
                <div className="top">
                  <div>
                    <span className="txt-big">10</span>
                    <span className="txt-small">ms</span>
                  </div>
                </div>
                <div className="bottom">
                  <p>
                    듀얼 모터는 주행 환경의 변화에 10밀리초 이내에 반응합니다.
                  </p>
                </div>
              </div>
              <div className="box control">
                <div className="top">
                  <div>
                    <img src={WeatherIcon} alt="weather-icon" />
                  </div>
                </div>
                <div className="bottom">
                  모든 기후 조건에서 독보적인 트랙션 및 제어
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fourth__bottom">
          <div className="bottom__contents">
            <div className="contents__left">
              <div className="left__top">
                <div className="info__header">상시 사륜구동 (AWD)</div>
                <div className="info__sub-header">상시 사륜구동</div>
              </div>
              <div className="left__bottom">
                <DetailsAndOrder />
              </div>
            </div>
            <div className="contents__right">
              <p>
                Tesla AWD에는 두 개의 독립 모터가 있습니다. 이 두 개의 모터는
                전통적인 AWD 시스템과 달리 전륜 및 후륜에 전달하는 토크를
                디지털로 제어하여 한층 더 뛰어난 핸들링과 트랙션 컨트롤을
                제공합니다. 차량은 하나의 모터만 있어도 주행 가능하기에 도로에서
                멈춰 서는 것을 걱정할 필요가 없습니다. 한 모터가 작동을
                멈추더라도 다른 모터를 사용하여 안전하게 목적지까지 이동할 수
                있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ButtonDownBlack section="#section5" />
    </>
  );
};

export default Model3Section4;
