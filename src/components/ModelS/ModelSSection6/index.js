import React from "react";
import NavbarMiniWhite from "../../NavbarMiniWhite";
import DetailsAndOrder from "../../DetailsAndOrder";
import ButtonDownBlack from "../../ButtonDownBlack";
import "./index.scss";

const ModelSSection6 = () => {
  return (
    <>
      <NavbarMiniWhite />
      <div className="sixth__inner-sections">
        <div className="sixth__top">
          <div className="top__info-outer">
            <div className="top__info">
              <div className="box max-range">
                <div className="top">
                  <div>
                    <span className="txt-big">17</span>
                    <span className="txt-small">인치</span>
                  </div>
                </div>
                <div className="bottom">
                  <p>지속적으로 향상되는 거대한 터치스크린 디스플레이</p>
                </div>
              </div>
              <div className="divider"></div>
              <div className="box zero-to-hundred">
                <div className="top">
                  <div>
                    <span className="txt-big">
                      <i className="fas fa-wifi"></i>
                    </span>
                  </div>
                </div>
                <div className="bottom">
                  <p>
                    OTA(Over-The-Air) 소프트웨어 업데이트를 통해 새로운 기능,
                    성능 및 퍼포먼스 도입
                  </p>
                </div>
              </div>
              <div className="divider"></div>
              <div className="box max-speed">
                <div className="top">
                  <div>
                    <span className="txt-big">804</span>
                    <span className="txt-small">리터</span>
                  </div>
                </div>
                <div className="bottom">
                  동급 최고의 적재 공간으로 일반적인 SUV 차량보다 많은 적재 공간
                  제공
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sixth__bottom">
          <div className="bottom__contents">
            <div className="contents__left">
              <div className="left__top">
                <div className="info__header">인테리어</div>
                <div className="info__sub-header">운전자 중심의 디자인</div>
              </div>
              <div className="left__bottom">
                <DetailsAndOrder />
              </div>
            </div>
            <div className="contents__right">
              <p>
                Model S에는 동급 최고의 적재 공간, 성인 최대 5명이 착석할 수
                있는 시트 및 거대한 17인치 터치스크린이 장착되어 있습니다. 고급
                음향 엔지니어링으로 녹음 스튜디오에 필적할 사운드 다이내믹을
                제공하며 글래스 루프는 모든 탑승자에게 넓은 실내 경험을
                제공합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ButtonDownBlack section="#section7" />
    </>
  );
};

export default ModelSSection6;
