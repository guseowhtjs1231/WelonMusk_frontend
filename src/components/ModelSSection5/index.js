import React from "react";
import NavbarMiniBlack from "../NavbarMiniBlack";
import Video from "../../videos/models_bg_fifth.mp4";
import DetailsAndOrder from "../DetailsAndOrder";
import "./index.scss";

const ModelSSection5 = () => {
  return (
    <>
      <NavbarMiniBlack />
      <div className="fifth__inner-sections">
        <div className="fifth__top">
          <video
            className="bg-vid"
            data-src={Video}
            type="video/mp4"
            autoPlay
            data-keepplaying
            loop
            muted
          ></video>
        </div>
        <div className="fifth__bottom">
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
    </>
  );
};

export default ModelSSection5;
