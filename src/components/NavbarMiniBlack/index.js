import React from "react";
import LogoImg from "../../img/main_logo_black.svg";
import ArrowImg from "../../img/button_down_black.svg";
import "./index.scss";

const NavbarMini = () => {
  return (
    <div className="navbar-mini">
      <div className="navbar-mini__left">
        <a href="/">
          <img src={LogoImg} alt="tesla_logo" />
        </a>
      </div>
      <div className="navbar-mini__right">
        <a href="#section1">
          <img src={ArrowImg} alt="arrow_img" />
        </a>
      </div>
    </div>
  );
};

export default NavbarMini;
