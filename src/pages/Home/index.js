import React from "react";
import Navbar from "../../components/Navbar";
import NavbarMiniWhite from "../../components/NavbarMiniWhite";
import InfoHeader from "../../components/InfoHeader";
import InfoSubHeader from "../../components/InfoSubHeader";
import InfoButton from "../../components/InfoButton";
import ButtonDownWhite from "../../components/ButtonDownWhite";
import Video from "../../videos/experience-hero-desktop.mp4";
import Footer from "../../components/Footer";
import { TOOLTIPS, ANCHORS } from "./data";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.scss";

const Home = () => {
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
              <div className="home__first__inner">
                <Navbar />
                <div className="main-header">
                  <InfoHeader id="header__model3" text="Model 3" />
                  <InfoHeader id="header__models" text="Model S" />
                  <InfoHeader id="header__modelx" text="Model X" />
                  <InfoButton id="header__orderbtn" text="지금 주문하기" />
                </div>
                <ButtonDownWhite section="#section2" />
              </div>
            </section>
            <section className="section home__second">
              <NavbarMiniWhite />
              <video
                className="bg-vid"
                data-src={Video}
                type="video/mp4"
                autoPlay
                data-keepplaying
                loop
                muted
              />
              <div className="main-header">
                <InfoHeader text="Tesla 알아보기" />
                <InfoButton text="시승 신청" />
              </div>
              <ButtonDownWhite section="#section3" />
            </section>
            <section className="section home__third">
              <NavbarMiniWhite />
              <div className="main-header">
                <InfoHeader text="모든 전력을 공급" />
                <InfoSubHeader text="태양광과 Powerwall" />
                <InfoButton text="자세히 알아보기" />
              </div>
              <ButtonDownWhite section="#section4" />
            </section>
            <section className="section home__last">
              <NavbarMiniWhite />
              <div className="main-header">
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
