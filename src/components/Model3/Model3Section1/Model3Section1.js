import React from "react";
import { useSpring, animated } from "react-spring";
import Navbar from "../../Navbar";
import InfoHeader from "../../InfoHeader";
import InfoSubHeader from "../../InfoSubHeader";
import ButtonDownWhite from "../../ButtonDownWhite";
import OuterFrame from "../../../img/Model3/speedometer.svg";
import { MODEL3_INFO } from "./data";
import "../../../styles/common.scss";
import "./index.scss";

const Model3Section1 = () => {
  const num1 = useSpring({
    config: { duration: 1500 },
    delay: 2000,
    number: 3,
    from: { number: 20 }
  });

  const num2 = useSpring({
    config: { duration: 1800 },
    delay: 2000,
    number: 4,
    from: { number: 9 }
  });

  const num3 = useSpring({
    config: { duration: 1500, delay: 1200 },
    delay: 2200,
    number: 446,
    from: { number: 0 }
  });

  return (
    <>
      <Navbar />
      <div className="model3__first__inner">
        <div className="main-header">
          <InfoSubHeader text="Tesla" />
          <InfoHeader text="Model 3" />
        </div>
        <div className="main-vehicle-info-outer">
          <div className="main-vehicle-info">
            <div className="box zero-to-hundred">
              <div className="top">
                <div className="speedometer">
                  <img src={OuterFrame} alt="outerframe" />
                </div>
                <div>
                  <animated.span className="txt-big">
                    {num1.number.interpolate(number => Math.floor(number))}
                  </animated.span>
                  <span className="txt-big">.</span>
                  <animated.span className="txt-big">
                    {num2.number.interpolate(number => Math.floor(number))}
                  </animated.span>
                  <span className="txt-small">초</span>
                </div>
              </div>
              <div className="bottom">
                <p>
                  0-100km/h
                  <br />
                  도달 시간
                </p>
              </div>
            </div>
            <div className="box fuel-efficiency">
              <div className="top">
                <div>
                  <span className="txt-big">
                    <animated.span className="txt-big">
                      {num3.number.interpolate(number => Math.floor(number))}
                    </animated.span>
                  </span>
                  <span className="txt-small">km</span>
                </div>
              </div>
              <div className="bottom">
                <p>주행 가능 거리</p>
              </div>
            </div>
            <div className="box drive">
              <div className="top">
                <div>
                  <span className="txt-big">{MODEL3_INFO.drive}</span>
                </div>
              </div>
              <div className="bottom">상시 사륜구동</div>
            </div>
            <div className="box btn-order-now">
              <button>지금 주문하기</button>
            </div>
          </div>
        </div>
        <ButtonDownWhite section="#section2" />
      </div>
    </>
  );
};

export default Model3Section1;
