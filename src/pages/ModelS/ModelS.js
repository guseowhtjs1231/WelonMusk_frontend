import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ReactFullpage from "@fullpage/react-fullpage";
import "./ModelS.scss";
import InfoHeader from "../../components/InfoHeader/InfoHeader";

const ModelS = () => (
  <ReactFullpage
    verticalCentered={false}
    navigation={true}
    navigationTooltips={[
      "MODEL S",
      "안전",
      "PERFORMANCE",
      "주행 가능 거리",
      "오토파일럿",
      "인테리어",
      "외부",
      "사양",
      "주문하기"
    ]}
    showActiveTooltip={true}
    render={() => {
      return (
        <ReactFullpage.Wrapper>
          <section className="section models__first">
            <Navbar />
            <InfoHeader text="Model S" />
          </section>
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
          <section className="section"></section>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default ModelS;
