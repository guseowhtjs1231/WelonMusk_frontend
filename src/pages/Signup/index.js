import React from "react";
import "./index.scss";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      consent: false,
      consent2: false
    };
  }
  postInfo = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      rePassword,
      consent,
      consent2
    } = this.state;
    if (consent === false || consent2 === false) {
      alert("동의를 해주세요.");
    } else if (password === rePassword) {
      fetch("http://10.58.7.74:8000/user/signup", {
        method: "post",
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: this.state.password
        })
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === "SUCCESS") {
            this.props.history.push("/signin");
          }
        });
    }
  };
  handleFirsttName = e => {
    this.setState({ firstName: e.target.value }, () =>
      console.log("firstName: ", this.state)
    );
  };
  handleLastName = e => {
    this.setState({ lastName: e.target.value }, () =>
      console.log("lastName: ", this.state.lastName)
    );
  };
  handleEmail = e => {
    this.setState({ email: e.target.value }, () =>
      console.log("email", this.state.email)
    );
  };
  handlepassword = e => {
    this.setState({ password: e.target.value }, () =>
      console.log("password", this.state.password)
    );
  };
  handlerePassword = e => {
    this.setState({ rePassword: e.target.value }, () =>
      console.log("rePassword", this.state.rePassword)
    );
  };
  handleCheckBox = e => {
    console.dir(e.target);
    if (e.target.name === "consent") {
      this.setState({ consent: e.target.checked }, () =>
        console.log("consent", this.state.consent)
      );
    } else if (e.target.name === "consent2") {
      this.setState({ consent2: e.target.checked }, () =>
        console.log("consent2", this.state.consent2)
      );
    }
  };
  render() {
    return (
      <div className="body">
        <div className="head" />
        <div className="signup_body">
          <div className="move_signin">
            <span className="account">이미 계정이 있으신가요?</span>
            <span className="login">로그인</span>
          </div>
          <div className="make_account">
            <h2>계정 만들기</h2>
            <hr />
            <div className="signup_info">
              <div className="info firstname">
                <input className="input" type="text" placeholder="이름" />
              </div>
              <div className="info lastname">
                <input className="input" type="text" placeholder="성" />
              </div>
              <div className="info email">
                <input className="input" type="text" placeholder="이메일주소" />
              </div>
              <div className="info password">
                <input
                  onChange={this.handleFirtstName}
                  className="input"
                  type="text"
                  placeholder="이름"
                />
              </div>
              <div className="info lastname">
                <input
                  onChange={this.handleLastName}
                  className="input"
                  type="text"
                  placeholder="성"
                />
              </div>
              <div className="info email">
                <input
                  onChange={this.handleEmail}
                  className="input"
                  type="text"
                  placeholder="이메일주소"
                />
              </div>
              <div className="info password">
                <input
                  onChange={this.handlepassword}
                  className="input"
                  type="password"
                  placeholder="비밀번호"
                />
              </div>
              <div className="info confirmpassword">
                <input
                  onChange={this.handlerePassword}
                  className="input"
                  type="password"
                  placeholder="비밀번호를 다시 입력해 주십시오."
                />
                <p className="psw_condition">
                  최소 8자이며 1개의 문자와 숫자가 포함되어야 합니다.
                </p>
              </div>
            </div>
            <div className="checkbox_area">
              <div className="checkbox_container">
                <input className="checkbox" type="checkbox" name="consent" />
                <input
                  onClick={this.handleCheckBox}
                  className="checkbox"
                  type="checkbox"
                  name="consent"
                />
              </div>
              <div className="checkbox_text">
                Tesla의
                <a href="" className="consent">
                  개인정보처리방침
                </a>
                에 따른 개인정보 수집∙이용 및 국내외 사업자에 대한 개인정보
                제공에 동의 합니다.
              </div>
            </div>
            <div className="checkbox_area">
              <div className="checkbox_container">
                <input className="checkbox" type="checkbox" />

                <input
                  onClick={this.handleCheckBox}
                  className="checkbox"
                  type="checkbox"
                  name="consent2"
                />
              </div>
              <div className="checkbox_text">
                Tesla 업데이트: Tesla e-뉴스, 이벤트 및 제품 업데이트 소식
                수신을 동의합니다. 언제든지 구독 중지할 수 있습니다.
                <a
                  className="consent"
                  href="https://www.tesla.com/ko_KR/about/legal?redirect=no#tesla-updates"
                >
                  (자세히 보기)
                </a>
              </div>
            </div>
            <div className="do_signup">
              <button>계정만들기</button>

              <button onClick={this.postInfo}>계정만들기</button>
            </div>
            <div className="agree">
              <div>
                계정을 생성하면{" "}
                <a
                  className="consent private_info"
                  href="https://www.tesla.com/ko_KR/about/legal?redirect=no#privacy-statement"
                >
                  고객 개인정보 취급방침
                </a>{" "}
                과
                <a
                  className="consent regulation"
                  href="https://www.tesla.com/ko_KR/about/legal?redirect=no#supercharger-fair-use"
                >
                  수퍼차저 공정 이용 정책
                </a>{" "}
                정책에 동의하시는 것입니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
