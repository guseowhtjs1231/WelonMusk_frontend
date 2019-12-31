import React from "react";
import Model3Section1 from "../../components/Model3/Model3Section1";
import Model3Section2 from "../../components/Model3/Model3Section2";
import Model3Section3 from "../../components/Model3/Model3Section3";
import Model3Section4 from "../../components/Model3/Model3Section4";
import Model3Section5 from "../../components/Model3/Model3Section5";
import Model3Section6 from "../../components/Model3/Model3Section6";
import Model3Section7 from "../../components/Model3/Model3Section7";
import Model3Section8 from "../../components/Model3/Model3Section8";
import ReactFullpage from "@fullpage/react-fullpage";
import { TOOLTIPS, ANCHORS } from "./data";
import "./index.scss";

const Model3 = () => {
  return (
    <ReactFullpage
      verticalCentered={false}
      navigation={true}
      anchors={ANCHORS}
      navigationTooltips={TOOLTIPS}
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
            <section className="section model3__third">
              <Model3Section3 />
            </section>
            <section className="section model3__fourth">
              <Model3Section4 />
            </section>
            <section className="section model3__fifth">
              <Model3Section5 />
            </section>
            <section className="section model3__sixth">
              <Model3Section6 />
            </section>
            <section className="section model3__seventh">
              <Model3Section7 />
            </section>
            <section className="section model3__eighth">
              <Model3Section8 />
            </section>
            <section className="section"></section>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Model3;
