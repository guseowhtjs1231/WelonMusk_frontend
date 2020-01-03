// @flow strict

import * as React from "react";
import ShopNav from "../../components/ShopNav";
import ShopMainFourth from "../../components/ShopMainFourth";
import ShopRightFourth from "../../components/ShopRightFourth";
import RightThirdChild from "../../components/RightThirdChild";
import ShopBottom from "../../components/ShopBottom";
import Layout from "./Layout/Layout";
import "./ShopFourth.scss";

class ShopFourth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
      footerPrice: {},
      isLoading: true
    };
  }

  async componentDidMount() {
    await fetch("http://10.58.7.74:8000/price/autopilot/2", {
      method: "POST",
      body: JSON.stringify({
        autopilot: "False"
      })
    });

    fetch("http://10.58.7.74:8000/price/option/2")
      .then(res => res.json())
      .then(res => this.setState({ footerPrice: res.price, isLoading: false }));
  }

  handleClick = async () => {
    this.setState({ isChecked: !this.state.isChecked });

    if (this.state.isChecked) {
      await fetch("http://10.58.7.74:8000/price/autopilot/2", {
        method: "POST",
        body: JSON.stringify({
          autopilot: "False"
        })
      });
    } else {
      await fetch("http://10.58.7.74:8000/price/autopilot/2", {
        method: "POST",
        body: JSON.stringify({
          autopilot: "True"
        })
      });
    }

    fetch("http://10.58.7.74:8000/price/option/2")
      .then(res => res.json())
      .then(res => this.setState({ footerPrice: res.price }));
  };

  render() {
    const { footerPrice, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Layout>
        <ShopMainFourth></ShopMainFourth>
        <div className="mainRightFourth">
          <div className="selectFourth">
            <div className="lorderText">
              <div className="lorderTop">
                <span className="lorderFont">오토파일럿</span>
                <span className="miniLine"></span>
                <span>포함</span>
              </div>
              <ul>
                <RightThirdChild info="주행 중인 차선의 차량 및 보행자에 맞춰 차량의 조향 및 속도 조절과 차량 제동을 할 수 있습니다." />
              </ul>
              <span className="lorderFont">완전 자율 주행 기능</span>
              <ul>
                <RightThirdChild info="자동 차선 변경: 고속도로 주행 시 자동으로 차선을 변경합니다." />
                <RightThirdChild info="오토파크(Autopark): 평행 및 직각 주차 공간을 감지합니다." />
                <RightThirdChild info="서몬(Summon): 차고에서 주차된 차량을 호출할 수 있습니다." />
              </ul>
              <p>올해 출시 예정:</p>
              <ul>
                <RightThirdChild info="내비게이트 온 오토파일럿: 차로와 저속 추행 차량 추월 등을 포함한 고속도로 진입로 및 진출 차선에서 자동 주행합니다." />
                <RightThirdChild info="교통 신호등 및 정지 표지판을 인지하여 작동합니다." />
                <RightThirdChild info="시내에서 자동 주행합니다." />
              </ul>
            </div>
            <div className="buttonPadding">
              <button type="button" className="optionBox">
                <label className="checkBoxContainer">
                  <input
                    onClick={this.handleClick}
                    type="checkbox"
                    className="checkBox"
                  ></input>
                  <span className="checkmark"></span>
                </label>
                <p className="optionBoxName">옵션 선택하기</p>
                <p className="priceBoxMoney">￦7,714,000</p>
              </button>
              <div className="vhsxmPadding">
                <p className="vhsxm">
                  완전 자율 주행 기능은 차량 인도 후에도 구입할 수 있으며,
                  새로운 기능이 출시됨에 따라 추후에 가격이 인상될 수 있습니다.
                </p>
                <p className="vhsxm2">
                  현재 활성화된 오토파일럿 기능은 운전자의 적극적인 제어가
                  필요하며 완전 자율 주행이 가능한 것은 아닙니다. 이 기능을
                  활성화하고 실제로 사용하기까지 수십억 마일의 주행 테스트를
                  통해 차량의 자율 주행 능력이 운전자의 주행 능력보다 크게
                  앞선다는 신뢰성과 규제 기관의 승인에 달려 있으며 일부
                  관할권에서는 규제 승인이 더 오래 걸릴 수 있습니다. 자율 주행
                  기능이 진화함에 따라 차량도 무선 소프트웨어(Over-The-Air)를
                  통해 지속적으로 업그레이드 됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ShopBottom
          nextPage="/shop/model3/5"
          expectedPrice={footerPrice.expected_price}
          savingPrice={footerPrice.saving_price}
        />
      </Layout>
    );
  }
}

export default ShopFourth;
