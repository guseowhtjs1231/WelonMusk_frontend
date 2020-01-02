// @flow strict

import * as React from "react";
import modelwhite1 from "../../img/shop/1.png";
import modelblack1 from "../../img/shop/2.png";
import modelsilver1 from "../../img/shop/3.png";
import modelblue1 from "../../img/shop/4.png";
import modelred1 from "../../img/shop/5.png";
import white from "../../img/shop/white.png";
import black from "../../img/shop/black.png";
import silver from "../../img/shop/silver.png";
import blue from "../../img/shop/blue.png";
import red from "../../img/shop/red.png";
import wheel from "../../img/shop/wheel.png";
import wheel2 from "../../img/shop/wheel2.png";
import ColorButton from "../../components/ColorButton";
import ColorButtonInfo from "../../components/ColorButtonInfo";
import modelwhite from "../../img/shop/model3.png";
import modelblack from "../../img/shop/modelblack.png";
import modelsilver from "../../img/shop/modelsilver.png";
import modelblue from "../../img/shop/modelblue.png";
import modelred from "../../img/shop/modelred.png";
import "./second.scss";
import Layout from "./Layout/Layout";

class ShopSecond extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carColor: [],
      wheel: [],
      carImages: [
        modelwhite,
        modelblack,
        modelsilver,
        modelblue,
        modelred,
        modelwhite1,
        modelblack1,
        modelsilver1,
        modelblue1,
        modelred1
      ],
      selectId: 1,
      id: 4,
      isLoading: true,
      isLoading2: true
    };
  }

  handleClick = id => {
    this.setState({ selectId: id });
  };

  handleClickTwo = id => {
    this.setState({ id });
  };

  componentDidMount() {
    fetch("http://10.58.7.74:8000/price/color/2")
      .then(res => res.json())
      .then(res => this.setState({ carColor: res.data, isLoading: false }));
    fetch(" http://10.58.7.74:8000/price/wheel/2")
      .then(res => res.json())
      .then(res => this.setState({ wheel: res.data, isLoading2: false }));
  }

  render() {
    const {
      carColor,
      selectId,
      wheel,
      id,
      isLoading,
      carImages,
      isLoading2
    } = this.state;

    if (isLoading || isLoading2) {
      return <div>Loading...</div>;
    }

    let selectedColor = carColor[0];
    let selectedWheel = wheel[0];
    let imageIndex = 0;

    if (id === 4) {
      if (selectId === 1) {
        selectedColor = carColor[0];
        selectedWheel = wheel[0];
        imageIndex = 0;
      } else if (selectId === 2) {
        selectedColor = carColor[1];
        selectedWheel = wheel[0];
        imageIndex = 1;
      } else if (selectId === 3) {
        selectedColor = carColor[2];
        selectedWheel = wheel[0];
        imageIndex = 2;
      } else if (selectId === 4) {
        selectedColor = carColor[3];
        selectedWheel = wheel[0];
        imageIndex = 3;
      } else if (selectId === 5) {
        selectedColor = carColor[4];
        selectedWheel = wheel[0];
        imageIndex = 4;
      }
    } else if (id === 5) {
      if (selectId === 1) {
        selectedColor = carColor[0];
        selectedWheel = wheel[1];
        imageIndex = 5;
      } else if (selectId === 2) {
        selectedColor = carColor[1];
        selectedWheel = wheel[1];
        imageIndex = 6;
      } else if (selectId === 3) {
        selectedColor = carColor[2];
        selectedWheel = wheel[1];
        imageIndex = 7;
      } else if (selectId === 4) {
        selectedColor = carColor[3];
        selectedWheel = wheel[1];
        imageIndex = 8;
      } else if (selectId === 5) {
        selectedColor = carColor[4];
        selectedWheel = wheel[1];
        imageIndex = 9;
      }
    }

    return (
      <Layout>
        <div className="main">
          <div
            className="mainLeft"
            style={{ backgroundImage: `url(${carImages[imageIndex]}` }}
          ></div>
        </div>
        <div className="mainRightSecond">
          <div className="selectSecond">
            <div className="secondSelectTop">
              <div className="selectList">
                <span>색상 선택하기</span>
              </div>
              <div className="colors">
                <ColorButton
                  onClick={this.handleClick}
                  select={selectId === 1}
                  id={carColor[0].color_id}
                  color={carColor[0].img_url}
                />
                <ColorButton
                  onClick={this.handleClick}
                  select={selectId === 2}
                  id={carColor[1].color_id}
                  color={carColor[1].img_url}
                />
                <ColorButton
                  onClick={this.handleClick}
                  select={selectId === 3}
                  id={carColor[2].color_id}
                  color={carColor[2].img_url}
                />
                <ColorButton
                  onClick={this.handleClick}
                  select={selectId === 4}
                  id={carColor[3].color_id}
                  color={carColor[3].img_url}
                />
                <ColorButton
                  onClick={this.handleClick}
                  select={selectId === 5}
                  id={carColor[4].color_id}
                  color={carColor[4].img_url}
                />
              </div>
              <ColorButtonInfo
                id={selectedColor.color_id}
                name={selectedColor.color_name}
                vhgka={selectedColor.color_price}
              />
            </div>
            <div className="line"></div>
            <div className="selectBottom">
              <div className="selectList">
                <span>휠 선택하기</span>
              </div>
              <div className="colors">
                <ColorButton
                  onClick={this.handleClickTwo}
                  select={id === 4}
                  color={wheel[0].img_url}
                  id={wheel[0].wheel_id}
                />
                <ColorButton
                  onClick={this.handleClickTwo}
                  select={id === 5}
                  color={wheel[1].img_url}
                  id={wheel[1].wheel_id}
                />
              </div>
              <ColorButtonInfo
                id={selectedWheel.wheel_id}
                name={selectedWheel.wheel_name}
                vhgka={selectedWheel.wheel_price}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ShopSecond;
