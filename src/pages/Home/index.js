import React from "react";
import Navbar from "../../components/Navbar";
import NavbarMini from "../../components/NavbarMini";
import InfoHeader from "../../components/InfoHeader";
import InfoSubHeader from "../../components/InfoSubHeader";
import InfoButton from "../../components/InfoButton";
import ButtonDown from "../../components/ButtonDown";
import Video from "../../videos/experience-hero-desktop.mp4";
import Footer from "../../components/Footer";
import { TOOLTIPS, ANCHORS } from "./data";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.scss";

const Home = () => {
  // const [mouseDownPosX, setMouseDownPosX] = useState(0);
  // const [mouseUpPosX, setMouseUpPosX] = useState(0);
  // const [bgPos, setBgPos] = useState(0);

  // const positionStyle = {
  //   "-1": { backgroundSize: "200%", backgroundPosition: "0% 55%" },
  //   "0": { backgroundSize: "200%", backgroundPosition: "51% 55%" },
  //   "1": { backgroundSize: "200%", backgroundPosition: "100% 55%" }
  // };

  // const onMouseDown = e => {
  //   setMouseDownPosX(e.clientX);
  // };

  // const onMouseUp = e => {
  //   setMouseUpPosX(e.clientX);
  //   if (mouseDownPosX > mouseUpPosX) {
  //     if (bgPos === -1 || bgPos === 0) {
  //       setBgPos(bgPos + 1);
  //     }
  //   } else if (mouseDownPosX < mouseUpPosX) {
  //     if (bgPos === 0 || bgPos === 1) {
  //       setBgPos(bgPos - 1);
  //     }
  //   }
  // };

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
            <section className="section home__first">
              <div
                className="home__first__inner"
                // style={positionStyle[bgPos]}
                // onMouseDown={onMouseDown}
                // onMouseUp={onMouseUp}
              >
                <Navbar />
                <div className="info__content">
                  <InfoHeader text="Tesla" />
                  <InfoButton text="지금 주문하기" />
                </div>
                <ButtonDown section="#section2" />
              </div>
            </section>
            <section className="section home__second">
              <NavbarMini />
              <video
                className="bg-vid"
                data-src={Video}
                type="video/mp4"
                autoPlay
                data-keepplaying
                loop
                muted
              />
              <div className="info__content">
                <InfoHeader text="Tesla 알아보기" />
                <InfoButton text="시승 신청" />
              </div>
              <ButtonDown section="#section3" />
            </section>
            <section className="section home__third">
              <NavbarMini />
              <div className="info__content">
                <InfoHeader text="모든 전력을 공급" />
                <InfoSubHeader text="태양광과 Powerwall" />
                <InfoButton text="자세히 알아보기" />
              </div>
              <ButtonDown section="#section4" />
            </section>
            <section className="section home__last">
              <NavbarMini />
              <div className="info__content">
                <InfoSubHeader text="Tesla" />
                <InfoHeader text="Model Y" />
                <InfoButton text="자세히 알아보기" />
              </div>
              <Footer />
            </section>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Home;
