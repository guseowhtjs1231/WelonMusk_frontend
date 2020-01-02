import React from "react";
import NavbarMiniWhite from "../../NavbarMiniWhite";
import FooterBlack from "../../FooterBlack";
import "./index.scss";

const Model3Section9 = () => {
  return (
    <>
      <NavbarMiniWhite />
      <div className="ninth__inner-sections">
        <div className="ninth__left">
          <h1>Model 3 주문하기</h1>
          <button className="ninth__btn-order">지금 주문하기</button>
        </div>
        <div className="ninth__right"></div>
      </div>
      <FooterBlack />
    </>
  );
};

export default Model3Section9;
