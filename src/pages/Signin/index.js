import React from "react";
import "./index.scss";

class Signin extends React.Component {
  render() {
    return (
      <div className="Signin">
        <div className="signin_body">
          <div className="login_body">
            <div className="login_detail">
              <h1>로그인</h1>
              <div className="account email">
                <input className="input" type="text" placeholder="이메일" />
              </div>
              <div className="account password">
                <input
                  className="input"
                  type="password"
                  placeholder="비밀번호"
                />
              </div>
              <div className="reset_psw">
                <div className="reset_password">비밀번호 재설정</div>
              </div>
              <div className="login_button">
                <button className="login">로그인</button>
              </div>
            </div>
          </div>
          <div className="make_account">
            <div className="signup">계정 만들기</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
