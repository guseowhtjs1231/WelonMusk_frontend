import React from "react";
import ButtonDownWhite from "../../ButtonDownWhite";
import NavbarMiniBlack from "../../NavbarMiniBlack";
import Video from "../../../videos/models_bg_fourth.mp4";
import DetailsAndOrder from "../../DetailsAndOrder";
import "./index.scss";

const index = () => {
  return (
    <>
      <NavbarMiniBlack />
      <div className="fourth__inner-sections">
        <div className="fourth__left">
          <video
            className="bg-vid"
            data-src={Video}
            type="video/mp4"
            autoPlay
            data-keepplaying
            loop
            muted
          />
          <div className="main-vehicle-info-outer">
            <div className="main-vehicle-info">
              <div className="box max-range">
                <div className="top">
                  <div>
                    <span className="txt-big">487</span>
                    <span className="txt-small">km</span>
                  </div>
                </div>
                <div className="bottom">
                  <p>전기 구동 차량 중 가장 긴 주행 가능 거리 487 km</p>
                </div>
              </div>
              <div className="box zero-to-hundred">
                <div className="top">
                  <div>
                    <span className="txt-big">15</span>
                    <span className="txt-small">분</span>
                  </div>
                </div>
                <div className="bottom">
                  <p>수퍼차저로 15분 내에 최대 171 km 충전</p>
                </div>
              </div>
              <div className="box max-speed">
                <div className="top">
                  <div>
                    <span className="txt-big">14,000+</span>
                  </div>
                </div>
                <div className="bottom">전 세계의 통행량이 많은 경로에</div>
              </div>
            </div>
          </div>
        </div>
        <div className="fourth__right">
          <div className="right__container">
            <div className="right__info">
              <div className="info__header">주행 가능 거리</div>
              <div className="info__sub-header">자유로운 장거리 여행</div>
              <p className="info__content">
                업계 최고의 주행 가능 거리와 편리한 충전 옵션을 자랑하는 Model
                S로 전 세계 어디든 원하는 곳으로 떠날 수 있습니다.
              </p>
            </div>
            <DetailsAndOrder />
          </div>
        </div>
      </div>
      <ButtonDownWhite section="#section5" />
    </>
  );
};

export default index;
