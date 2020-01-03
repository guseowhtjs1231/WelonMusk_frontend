import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import InfoHeader from "../../InfoHeader";
import InfoSubHeader from "../../InfoSubHeader";
import ButtonDownBlack from "../../ButtonDownBlack";
import OuterFrame from "../../../img/ModelS/speedometer.svg";
import { MODELS_INFO } from "./data";
import "../../../styles/common.scss";
import "./index.scss";

const ModelSSection1 = () => {
  const num1 = useSpring({
    config: { duration: 1500 },
    delay: 2000,
    number: 2,
    from: { number: 20 }
  });
  const num2 = useSpring({
    config: { duration: 1800 },
    delay: 2000,
    number: 6,
    from: { number: 0 }
  });
  const num3 = useSpring({
    config: { duration: 1500, delay: 1200 },
    delay: 2200,
    number: 804,
    from: { number: 0 }
  });
  const num4 = useSpring({
    config: { duration: 1800, delay: 1400 },
    delay: 2200,
    number: 487,
    from: { number: 0 }
  });

  return (
    <>
      <Navbar />
      <div className="models__first__inner">
        <div className="main-header">
          <InfoSubHeader text="Tesla" />
          <InfoHeader text="Model S" />
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
            <div className="box space">
              <div className="top">
                <div>
                  <animated.span className="txt-big">
                    {num3.number.interpolate(number => Math.floor(number))}
                  </animated.span>
                  <span className="txt-small">리터</span>
                </div>
              </div>
              <div className="bottom">
                <p>등급 최고의 적재 공간</p>
              </div>
            </div>
            <div className="box fuel-efficiency">
              <div className="top">
                <div>
                  <animated.span className="txt-big">
                    {num4.number.interpolate(number => Math.floor(number))}
                  </animated.span>
                  <span className="txt-small">km</span>
                </div>
              </div>
              <div className="bottom">주행 가능 거리</div>
            </div>

            <div className="box btn-order-now">
              <Link to="/shop/model3/1">
                <button>지금 주문하기</button>
              </Link>
            </div>
          </div>
        </div>
        <ButtonDownBlack section="#section2" />
      </div>
    </>
  );
};

export default ModelSSection1;
