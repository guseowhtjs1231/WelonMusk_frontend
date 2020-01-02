import React from "react";
import { Link } from "react-router-dom";
// import { MdMenu } from 'react-icons/md'
import LogoImg from "../../img/main_logo_white.svg";
import "./index.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={LogoImg} alt="tesla_logo" />
        </Link>
      </div>
      <div className="navbar-center">
        <Link to="/models">MODEL S</Link>
        <Link to="/model3">MODEL 3</Link>
        <Link to="/">MODEL X</Link>
        <Link to="/">MODEL Y</Link>
        <Link to="/">CYBERTRUCK</Link>
        <Link to="/">ROADSTER</Link>
        <Link to="/">ENERGY</Link>
      </div>
      <div className="navbar-right">
        <Link to="/" className="btn-login">
          로그인
        </Link>
        <Link to="/">
          <i className="fas fa-bars"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
