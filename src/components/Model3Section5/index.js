import React from "react";
import NavbarMiniBlack from "../NavbarMiniBlack";
import ButtonDownWhite from "../ButtonDownWhite";
import DetailsAndOrder from "../DetailsAndOrder";
import Video from "../../videos/model3_bg_fifth.mp4";
import "./index.scss";

const Model3Section5 = () => {
  return (
    <>
      <NavbarMiniBlack />
      <div className="fifth__inner-sections">
        <div className="fifth__left">
          <video
            className="bg-vid"
            data-src={Video}
            type="video/mp4"
            autoPlay
            data-keepplaying
            loop
            muted
          />
          <div className="fifth__info-outer">
            <div className="fifth__info">
              <div className="box max-range">
                <div className="top">
                  <div>
                    <span className="txt-big">446</span>
                    <span className="txt-small">km</span>
                  </div>
                </div>
                <div className="bottom">
                  <p>1회 충전으로 446 km 이상 주행 가능</p>
                </div>
              </div>
              <div className="box zero-to-hundred">
                <div className="top">
                  <div>
                    <span className="txt-big">30</span>
                    <span className="txt-small">분</span>
                  </div>
                </div>
                <div className="bottom">
                  <p>수퍼차저로 30분 이내에 270 km 충전</p>
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
        <div className="fifth__right">
          <div className="right__container">
            <div className="right__info">
              <div className="info__header">주행 가능 거리</div>
              <div className="info__sub-header">자유로운 장거리 여행</div>
              <p className="info__content">
                Model 3는 순수 전기차이기 때문에 주유소에 갈 필요가 없습니다.
                가정에서 야간에 충전하면 아침에 충전이 완료되어 있습니다.
                도로에서 주행 중일 때는 공공 충전소나 Tesla의 충전 네트워크에서
                쉽게 충전할 수 있습니다. 전 세계에 14,000대 이상의 Tesla
                수퍼차저가 설치되어 있으며 매주 여섯 곳에 새로운 수퍼차저가
                설치됩니다.
              </p>
            </div>
            <DetailsAndOrder />
          </div>
        </div>
      </div>
      <ButtonDownWhite section="#section6" />
    </>
  );
};

export default Model3Section5;
