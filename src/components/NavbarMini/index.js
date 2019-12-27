import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../img/main_logo.svg";
import ArrowImg from "../../img/button_down.svg";
import "./index.scss";

const NavbarMini = () => {
  return (
    <div className="navbar-mini">
      <div className="navbar-mini__left">
        <Link to="/">
          <img src={LogoImg} alt="tesla_logo" />
        </Link>
      </div>
      <div className="navbar-mini__right">
        <Link to="/">
          <img src={ArrowImg} alt="arrow_img" />
        </Link>
      </div>
    </div>
  );
};

export default NavbarMini;
