import React from "react";
import NavbarMiniBlack from "../../NavbarMiniBlack";
import DetailsAndOrder from "../../DetailsAndOrder";
import ButtonDownBlack from "../../ButtonDownBlack";
import "../../../styles/common.scss";
import "./index.scss";

const index = () => {
  return (
    <>
      <NavbarMiniBlack />
      <div className="second__inner-sections">
        <div className="second__left">
          <div className="left__info">
            <div className="info__header">안전</div>
            <div className="info__sub-header">높은 충격 보호</div>
            <p className="info__content">
              개발 단계부터 전기차로 제작된 Model S는 견고한 구조와 바닥에
              탑재된 배터리 팩으로 탁월한 충격 보호를 제공합니다.
            </p>
          </div>
          <DetailsAndOrder />
        </div>
        <div className="second__right">
          <div className="right__car-img"></div>
        </div>
      </div>
      <ButtonDownBlack section="#section3" />
    </>
  );
};

export default index;
