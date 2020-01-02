import React from "react";
import NavbarMiniWhite from "../../NavbarMiniWhite";
import DetailsAndOrder from "../../DetailsAndOrder";
import ButtonDownBlack from "../../ButtonDownBlack";
import Video from "../../../videos/model3_bg_seventh.mp4";
import CarImg from "../../../img/ModelS/models_seventh_car_white.svg";
import "./index.scss";

const Model3Section7 = () => {
  return (
    <>
      <NavbarMiniWhite />
      <div className="seventh__inner-sections">
        <div className="seventh__top">
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
                    <span className="txt-big">15</span>
                    <span className="txt-small">인치</span>
                  </div>
                </div>
                <div className="bottom">
                  <p>지속적으로 업데이트 되는 터치스크린 디스플레이</p>
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
                    <img src={CarImg} alt="carimg" />
                  </div>
                </div>
                <div className="bottom">
                  넓은 글래스 루프로 여유로운 헤드룸 및 UV 보호 제공
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="seventh__bottom">
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
                Model 3의 내부는 다른 차량과 다릅니다. 스마트폰을 키로 사용하고
                중앙의 15인치 터치스크린에서 모든 운전자 컨트롤에 액세스할 수
                있습니다. 풀 글래스 루프가 전면에서 후면까지 덮어서 모든 좌석에
                개방감을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ButtonDownBlack section="#section8" />
    </>
  );
};

export default Model3Section7;
