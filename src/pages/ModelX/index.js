import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const ModelX = () => {
  return (
    <ReactFullpage
      verticalCentered={false}
      navigation={true}
      // anchors={ANCHORS}
      // navigationTooltips={TOOLTIPS}
      showActiveTooltip={true}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <section className="section modelx__first">
              {/* <modelxSection1 /> */}
            </section>
            <section className="section modelx__second">
              {/* <modelxSection2 /> */}
            </section>
            <section className="section modelx__third">
              {/* <modelxSection3 /> */}
            </section>
            <section className="section modelx__fourth">
              {/* <modelxSection4 /> */}
            </section>
            <section className="section modelx__fifth">
              {/* <modelxSection5 /> */}
            </section>
            <section className="section modelx__sixth">
              {/* <modelxSection6 /> */}
            </section>
            <section className="section modelx__seventh">
              {/* <modelxSection7 /> */}
            </section>
            <section className="section"></section>
            <section className="section"></section>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default ModelX;
