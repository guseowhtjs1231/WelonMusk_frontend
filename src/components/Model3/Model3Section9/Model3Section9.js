import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/shop/model3/1">
            <button className="ninth__btn-order">지금 주문하기</button>
          </Link>
        </div>
        <div className="ninth__right"></div>
      </div>
      <FooterBlack />
    </>
  );
};

export default Model3Section9;
