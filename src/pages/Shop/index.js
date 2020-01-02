// @flow strict

import * as React from "react";
import "./index.scss";
import "./Layout/Layout";
import Layout from "./Layout/Layout";
import carImage from "../../img/shop/tesla.png";
import carImage2 from "../../img/shop/model3.png";
import ShopMainChild from "../../components/ShopMainChild";
import RightChildName from "../../components/RightChildName";
import RightChildButton from "../../components/RightChildButton";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: 0,
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch("http://10.58.7.74:8000/price/model/2")
      .then(res => res.json())
      .then(res => this.setState({ data: res.data, isLoading: false }));
  }

  handleClick = id => {
    this.setState({ selectedId: id });
  };
  render() {
    const { selectedId, data, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading..!</p>;
    }

    let type = data[0];

    if (selectedId === 0) {
      type = data[0];
    } else if (selectedId === 1) {
      type = data[1];
    } else if (selectedId === 2) {
      type = data[2];
    }

    return (
      <Layout>
        <div className="main">
          <div
            className="mainLeft"
            style={{
              backgroundImage: `url(${type.img_url}`
            }}
          >
            <ul className="carPerformance">
              <ShopMainChild
                number={type.fuel_economy}
                km="km"
                drive="주행 가능 거리"
              />
              <ShopMainChild
                number={type.max_speed}
                km="km/h"
                drive="최고속도"
              />
              <ShopMainChild
                number={type.acceleration}
                km="초"
                drive="0~100 km/h 도달시간"
              />
            </ul>
          </div>
          <div className="mainRight">
            <div className="mainRightItem">
              <div className="itemTop">
                <p>차량 선택하기</p>
              </div>
              <div className="emptyBlockRight"></div>
              <div className="item">
                <RightChildName
                  one="후륜구동 (RWD)"
                  two="부분 프리미엄 인테리어"
                />
                <RightChildButton
                  selected={selectedId === 0}
                  onClick={this.handleClick}
                  id={0}
                  name={data[0].model_type}
                  price={data[0].basic_price}
                />
              </div>
              <div className="item">
                <RightChildName
                  one="듀얼 모터 상시 사륜구동 (AWD)"
                  two="프리미엄 인테리어"
                />
                <RightChildButton
                  selected={selectedId === 1}
                  onClick={this.handleClick}
                  id={1}
                  name={data[1].model_type}
                  price={data[1].basic_price}
                />
                <RightChildButton
                  selected={selectedId === 2}
                  onClick={this.handleClick}
                  id={2}
                  name={data[2].model_type}
                  price={data[2].basic_price}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Shop;
