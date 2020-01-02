import React from "react";
import NavbarMiniBlack from "../../NavbarMiniBlack";
import ButtonDownBlack from "../../ButtonDownBlack";
import DetailsAndOrder from "../../DetailsAndOrder";
import img5 from "../../../img/ModelS/models_seventh_5.svg";
import imgCp from "../../../img/ModelS/models_seventh_cd2.png";
import imgCar from "../../../img/ModelS/models_seventh_car.svg";
import "./index.scss";

const ModelSSection7 = () => {
  return (
    <>
      <NavbarMiniBlack />
      <div className="seventh__inner-sections">
        <div className="seventh__top">
          <div className="top__info-outer">
            <div className="top__info">
              <div className="box zero-to-hundred">
                <div className="top">
                  <div className="top-inner">
                    <img src={img5} alt="img5"></img>
                    <span className="txt-small">시그니처 컬러</span>
                  </div>
                </div>
                <div className="bottom">
                  <p>시그니처 멀티레이어 페인트로 Model S 커스터마이즈</p>
                </div>
              </div>
              <div className="box zero-to-hundred">
                <div className="top">
                  <div className="top-inner">
                    <span className="txt-big">0.23</span>
                    <img src={imgCp} alt="imgcp"></img>
                  </div>
                </div>
                <div className="bottom">
                  <p>
                    동급 차량 중 가장 낮은 공기 저항 계수를 자랑하는 가장
                    공기역학적인 차
                  </p>
                </div>
              </div>
              <div className="box max-speed">
                <div className="top">
                  <div className="top-inner">
                    <img src={imgCar} alt="imgcar"></img>
                    <span className="txt-small">루프랙 호환</span>
                  </div>
                </div>
                <div className="bottom">
                  광활한 글래스 루프로 더 넓은 헤드룸과 UV 보호를 제공
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="seventh__bottom">
          <div className="bottom__contents">
            <div className="contents__left">
              <div className="left__top">
                <div className="info__header">외부</div>
                <div className="info__sub-header">효율성을 위한 설계</div>
              </div>
              <div className="left__bottom">
                <DetailsAndOrder />
              </div>
            </div>
            <div className="contents__right">
              <p>
                Model S는 속도와 견고성을 중심으로 설계되어 놀라운 공기역학,
                루디크러스 가속과 타협하지 않는 아름다움을 자랑합니다. 자동
                도어핸들은 차량 접근 시 자동으로 나타나고 도어가 닫히면
                들어갑니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ButtonDownBlack section="#section8" />
    </>
  );
};

export default ModelSSection7;
