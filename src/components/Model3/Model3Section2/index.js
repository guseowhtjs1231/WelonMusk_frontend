import React from "react";
import NavbarMiniBlack from "../../NavbarMiniBlack";
import DetailsAndOrder from "../../DetailsAndOrder";
import ButtonDownBlack from "../../ButtonDownBlack";
import Ratings from "../../Ratings";
import { RATINGS } from "./data";
import "./index.scss";

const Model3Section2 = () => {
  return (
    <>
      <NavbarMiniBlack />
      <div className="second__inner-sections">
        <div className="second__left">
          <div className="left__top-container">
            <div className="left__info">
              <div className="info__header">안전</div>
              <div className="info__sub-header">안전을 위한 설계</div>
              <p className="info__content">
                전체 Model 3의 디자인에서 가장 중요한 요소는 안전입니다.
                알루미늄과 강철로 조합된 금속 구조는 차량의 모든 영역에서 최대
                강도를 발휘합니다. Model 3는 전면 글라스 루프가 탑재된 경우에도
                루프 충돌 테스트에서 차체 중량의 네 배를 견뎌내었으며, 이는
                아프리카 코끼리 성체 두 마리에 상당하는 무게입니다.
              </p>
            </div>
            <Ratings data={RATINGS} />
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

export default Model3Section2;
