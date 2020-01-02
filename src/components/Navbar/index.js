import React from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import LogoImg from "../../img/main_logo_white.svg";
import "./index.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSidebar: false
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({ showSidebar: !this.state.showSidebar });
  }

  render() {
    return (
      <>
        {this.state.showSidebar && <Sidebar />}
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
            <i
              onClick={this.toggleSidebar}
              className={`fas ${
                this.state.showSidebar ? "fa-times icon-black" : "fa-bars"
              }`}
            ></i>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
