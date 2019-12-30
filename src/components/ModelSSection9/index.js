import React from "react";
import NavbarMiniBlack from "../NavbarMiniBlack";
import Footer from "../Footer";
import "./index.scss";

const ModelSSection9 = () => {
  return (
    <>
      <NavbarMiniBlack />
      <div className="ninth__inner-sections">
        <div className="ninth__left">
          <h1>Model S 주문하기</h1>
          <button className="ninth__btn-order">지금 주문하기</button>
        </div>
        <div className="ninth__right"></div>
      </div>
      <Footer />
    </>
  );
};

export default ModelSSection9;
