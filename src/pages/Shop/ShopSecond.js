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
      carColor: [
        {
          id: 0,
          color: white,
          name: "Pearl White Multi-Coat",
          price: "포함",
          carImage: modelwhite
        },
        {
          id: 1,
          color: black,
          name: "Solid Black",
          price: "1,286,000",
          carImage: modelblack
        },
        {
          id: 2,
          color: silver,
          name: "Midnight Silver Metallic",
          price: "1,286,000",
          carImage: modelsilver
        },
        {
          id: 3,
          color: blue,
          name: "Deep Blue Metallic",
          price: "1,286,000",
          carImage: modelblue
        },
        {
          id: 4,
          color: red,
          name: "Red Multi-Coat",
          price: "2,571,000",
          carImage: modelred
        },
        {
          id: 5,
          color: white,
          name: "Pearl White Multi-Coat",
          price: "포함",
          carImage: modelwhite1
        },
        {
          id: 6,
          color: black,
          name: "Solid Black",
          price: "1,286,000",
          carImage: modelblack1
        },
        {
          id: 7,
          color: silver,
          name: "Midnight Silver Metallic",
          price: "1,286,000",
          carImage: modelsilver1
        },
        {
          id: 8,
          color: blue,
          name: "Deep Blue Metallic",
          price: "1,286,000",
          carImage: modelblue1
        },
        {
          id: 9,
          color: red,
          name: "Red Multi-Coat",
          price: "2,571,000",
          carImage: modelred1
        }
      ],
      wheel: [
        {
          id: 0,
          size: "18",
          span: "인치 에어로 휠",
          price: "포함",
          image: wheel
        },
        {
          id: 1,
          size: "19",
          span: "인치 스포츠 휠",
          price: "1,929,000",
          image: wheel2
        }
      ],
      selectId: 0,
      id: 0
    };
  }
  handleClick = id => {
    this.setState({ selectId: id });
  };
  handleClickTwo = id => {
    this.setState({ id: id });
  };

  render() {
    const { carColor, selectId, wheel, id } = this.state;
    let w = carColor[0];
    let q = wheel[0];
    if (id === 0) {
      if (selectId === 0) {
        w = carColor[0];
        q = wheel[0];
      } else if (selectId === 1) {
        w = carColor[1];
        q = wheel[0];
      } else if (selectId === 2) {
        w = carColor[2];
        q = wheel[0];
      } else if (selectId === 3) {
        w = carColor[3];
        q = wheel[0];
      } else if (selectId === 4) {
        w = carColor[4];
        q = wheel[0];
      }
    } else if (id === 1) {
      if (selectId === 0) {
        w = carColor[5];
        q = wheel[1];
      } else if (selectId === 1) {
        w = carColor[6];
        q = wheel[1];
      } else if (selectId === 2) {
        w = carColor[7];
        q = wheel[1];
      } else if (selectId === 3) {
        w = carColor[8];
        q = wheel[1];
      } else if (selectId === 4) {
        w = carColor[9];
        q = wheel[1];
      }
    }

    return (
      <Layout>
        <div className="main">
          <div
            className="mainLeft"
            style={{ backgroundImage: `url(${w.carImage}` }}
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
                  select={selectId === 0}
                  id={carColor[0].id}
                  color={carColor[0].color}
                />
                <ColorButton
                  onClick={this.handleClick}
                  select={selectId === 1}
                  id={carColor[1].id}
                  color={carColor[1].color}
                />
                <ColorButton
                  onClick={this.handleClick}
                  select={selectId === 2}
                  id={carColor[2].id}
                  color={carColor[2].color}
                />
                <ColorButton
                  onClick={this.handleClick}
                  select={selectId === 3}
                  id={carColor[3].id}
                  color={carColor[3].color}
                />
                <ColorButton
                  onClick={this.handleClick}
                  select={selectId === 4}
                  id={carColor[4].id}
                  color={carColor[4].color}
                />
              </div>
              <ColorButtonInfo id={w.id} name={w.name} vhgka={w.price} />
            </div>
            <div className="line"></div>
            <div className="selectBottom">
              <div className="selectList">
                <span>휠 선택하기</span>
              </div>
              <div className="colors">
                <ColorButton
                  onClick={this.handleClickTwo}
                  select={id === 0}
                  color={wheel[0].image}
                  id={wheel[0].id}
                />
                <ColorButton
                  onClick={this.handleClickTwo}
                  select={id === 1}
                  color={wheel[1].image}
                  id={wheel[1].id}
                />
              </div>
              <ColorButtonInfo
                id={q.id}
                name={q.size}
                span={q.span}
                vhgka={q.price}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ShopSecond;
