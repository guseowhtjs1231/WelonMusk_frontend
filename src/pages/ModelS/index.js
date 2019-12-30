import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import ModelSSection1 from "../../components/ModelS/ModelSSection1";
import ModelSSection2 from "../../components/ModelS/ModelSSection2";
import ModelSSection3 from "../../components/ModelS/ModelSSection3";
import ModelSSection4 from "../../components/ModelS/ModelSSection4";
import ModelSSection5 from "../../components/ModelS/ModelSSection5";
import ModelSSection6 from "../../components/ModelS/ModelSSection6";
import ModelSSection7 from "../../components/ModelS/ModelSSection7";
import ModelSSection8 from "../../components/ModelS/ModelSSection8";
import ModelSSection9 from "../../components/ModelS/ModelSSection9";
import { TOOLTIPS, ANCHORS } from "./data";
import "../../styles/common.scss";
import "./index.scss";

const ModelS = () => (
  <ReactFullpage
    verticalCentered={false}
    navigation={true}
    anchors={ANCHORS}
    navigationTooltips={TOOLTIPS}
    showActiveTooltip={true}
    render={() => {
      return (
        <ReactFullpage.Wrapper>
          <section className="section models__first">
            <ModelSSection1 />
          </section>
          <section className="section models__second">
            <ModelSSection2 />
          </section>
          <section className="section models__third">
            <ModelSSection3 />
          </section>
          <section className="section models__fourth">
            <ModelSSection4 />
          </section>
          <section className="section models__fifth">
            <ModelSSection5 />
          </section>
          <section className="section models__sixth">
            <ModelSSection6 />
          </section>
          <section className="section models__seventh">
            <ModelSSection7 />
          </section>
          <section className="section models__eighth">
            <ModelSSection8 />
          </section>
          <section className="section models__ninth">
            <ModelSSection9 />
          </section>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default ModelS;
