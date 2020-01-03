import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  handleEmail = e => {
    this.setState(
      {
        email: e.target.value
      },
      () => console.log("email", this.state.email)
    );
  };
  handlePassword = e => {
    this.setState(
      {
        password: e.target.value
      },
      console.log("password", this.state.password)
    );
  };
  trySignin = () => {
    fetch("http://10.58.7.74:8000/user/signin", {
      method: "post",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(res => localStorage.setItem("access_token", res.access_token));
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="Signin">
        <div className="signin_body">
          <div className="login_body">
            <div className="login_detail">
              <h1>로그인</h1>
              <div className="account email">
                <input
                  onChange={this.handleEmail}
                  className="input"
                  type="text"
                  placeholder="이메일"
                />
              </div>
              <div className="account password">
                <input
                  onChange={this.handlePassword}
                  className="input"
                  type="password"
                  placeholder="비밀번호"
                />
              </div>
              <div className="reset_psw">
                <div className="reset_password">비밀번호 재설정</div>
              </div>
              <div className="login_button">
                <button onClick={this.trySignin} className="login">
                  로그인
                </button>
              </div>
            </div>
          </div>
          <div className="make_account">
            <Link to="/signup" className="signup">
              계정 만들기
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
