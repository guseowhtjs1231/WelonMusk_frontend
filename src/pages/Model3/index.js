import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { TOOLTIPS, ANCHORS } from "./data";
import "./index.scss";

const Model3 = () => {
  return (
    <ReactFullpage
      verticalCentered={false}
      navigation={true}
      //   anchors={ANCHORS}
      //   navigationTooltips={TOOLTIPS}
      showActiveTooltip={true}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <section className="section model3__first"></section>
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
};

export default Model3;
