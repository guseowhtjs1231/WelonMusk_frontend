import React from "react";
import Model3Section1 from "../../components/Model3Section1";
import Model3Section2 from "../../components/Model3Section2";
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
            <section className="section model3__first">
              <Model3Section1 />
            </section>
            <section className="section model3__second">
              <Model3Section2 />
            </section>
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
