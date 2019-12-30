import React from "react";
import NavbarMiniBlack from "../NavbarMiniBlack";
import Video from "../../videos/models_bg_fifth.mp4";
import DetailsAndOrder from "../DetailsAndOrder";
import ButtonDownBlack from "../ButtonDownBlack";
import "./index.scss";

const Model3Section6 = () => {
  return (
    <>
      <NavbarMiniBlack />
      <div className="sixth__inner-sections">
        <div className="sixth__top">
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
              <div className="box max-range">
                <div className="top">
                  <div>
                    <span className="txt-big">360°</span>
                  </div>
                </div>
                <div className="bottom">
                  <p>후방, 측방 및 전방 카메라가 최고의 가시성 제공</p>
                </div>
              </div>
              <div className="divider"></div>
              <div className="box zero-to-hundred">
                <div className="top">
                  <div>
                    <span className="txt-big">160</span>
                    <span className="txt-small">m</span>
                  </div>
                </div>
                <div className="bottom">
                  <p>전방 레이더가 원거리 물체에 대한 장거리 탐지 제공</p>
                </div>
              </div>
              <div className="divider"></div>
              <div className="box max-speed">
                <div className="top">
                  <div>
                    <span className="txt-big">울트라소닉 센서</span>
                  </div>
                </div>
                <div className="bottom">
                  주변 차량 감지를 통한 잠재적 충돌 방지 및 주차 보조
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sixth__bottom">
          <div className="bottom__contents">
            <div className="contents__left">
              <div className="left__top">
                <div className="info__header">오토파일럿</div>
                <div className="info__sub-header">운전의 미래</div>
              </div>
              <div className="left__bottom">
                <DetailsAndOrder />
              </div>
            </div>
            <div className="contents__right">
              <p>
                오토파일럿의 첨단 안전 및 편의 기술은 주행 시에 가장 부담스러울
                수 있는 부분을 돕도록 설계되었습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ButtonDownBlack section="#section7" />
    </>
  );
};

export default Model3Section6;
