// @flow strict

import React from "react";

import "./third.scss";
import Layout from "./Layout/Layout";
import compositor from "../../img/shop/compositor.png";
import compositor2 from "../../img/shop/compositor2.png";
import ColorButton from "../../components/ColorButton";
import ColorButtonInfo from "../../components/ColorButtonInfo";
import RightThirdChild from "../../components/RightThirdChild";
import ShopBottom from "../../components/ShopBottom";

class ShopThird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      insideColor: [],
      interiorImage: [compositor, compositor2],
      target: 6,
      footerPrice: {},
      isLoading: true
    };
  }

  async componentDidMount() {
    fetch("http://13.209.16.32:8000/price/interior/2")
      .then(res => res.json())
      .then(res => this.setState({ insideColor: res.data, isLoading: false }));

    await fetch("http://13.209.16.32:8000/price/interior/2", {
      method: "POST",
      body: JSON.stringify({
        interior_id: 6
      })
    });

    fetch("http://13.209.16.32:8000/price/option/2")
      .then(res => res.json())
      .then(res => this.setState({ footerPrice: res.price }));
  }

  handleClick = async id => {
    this.setState({ target: id });

    await fetch("http://13.209.16.32:8000/price/interior/2", {
      method: "POST",
      body: JSON.stringify({
        interior_id: id
      })
    }).then(res => console.log("INTERIOR POST Success!", res));

    fetch("http://13.209.16.32:8000/price/option/2")
      .then(res => res.json())
      .then(res => this.setState({ footerPrice: res.price }));
  };

  render() {
    const {
      insideColor,
      target,
      interiorImage,
      isLoading,
      footerPrice
    } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    let key = insideColor[0];
    let indexNumber = 0;

    if (target === 6) {
      key = insideColor[0];
      indexNumber = 0;
    } else if (target === 7) {
      key = insideColor[1];
      indexNumber = 1;
    }

    return (
      <Layout>
        <div className="mainLeft">
          <img src={interiorImage[indexNumber]} alt="car"></img>
        </div>
        <div className="mainRightThird">
          <div className="selectThird">
            <div className="selectTopThird">
              <div className="selectList">
                <span>인테리어 선택하기</span>
              </div>
              <div className="colorOptions">
                <ColorButton
                  onClick={this.handleClick}
                  select={target === 6}
                  id={insideColor[0].interior_id}
                  color={insideColor[0].img_url}
                />
                <ColorButton
                  onClick={this.handleClick}
                  select={target === 7}
                  id={insideColor[1].interior_id}
                  color={insideColor[1].img_url}
                />
              </div>
              <ColorButtonInfo
                name={key.interior_en_name}
                vhgka={key.interior_price}
              />
            </div>
            <div className="textLorder">
              <p>기본사항:</p>
              <ul>
                <RightThirdChild info="12방향 전동 조절식 앞좌석 열선 시트" />
                <RightThirdChild info="프리미엄 시트 소재 및 트림" />
                <RightThirdChild info="오디오 업그레이드 - 높은 몰입도의 사운드" />
                <RightThirdChild info="자외선 및 적외선 보호장치가 장착된 틴티드 글래스 루프" />
                <RightThirdChild info="자동 조도 조절, 전동식 폴딩이 가능한 열선 사이드 미러" />
                <RightThirdChild info="Bluetooth®를 통한 음악 및 미디어 재생" />
                <RightThirdChild info="사용자 지정 운전자 프로필" />
                <RightThirdChild info="수납 공간, 4개의 USB 포트 및 2개의 스마트폰 도킹을 포함한 센터 콘솔" />
              </ul>
            </div>
          </div>
        </div>
        <ShopBottom
          nextPage="/shop/model3/4"
          expectedPrice={footerPrice.expected_price}
          savingPrice={footerPrice.saving_price}
        />
      </Layout>
    );
  }
}

export default ShopThird;
