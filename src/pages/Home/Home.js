import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavbarMini from "../../components/NavbarMini/NavbarMini";
import InfoWrapper from "../../components/InfoWrapper/InfoWrapper";
import Video from "../../videos/experience-hero-desktop.mp4";
import Footer from "../../components/Footer/Footer";
import ReactFullpage from "@fullpage/react-fullpage";
import "./Home.scss";

const Home = () => (
  <ReactFullpage
    verticalCentered={false}
    navigation={true}
    navigationTooltips={[
      "TESLA",
      "TESLA 알아보기",
      "모든 전력을 공급",
      "MODEL Y"
    ]}
    showActiveTooltip={true}
    render={() => {
      return (
        <ReactFullpage.Wrapper>
          <section className="section home__first">
            <Navbar />
            <InfoWrapper content="Model 3" text="지금 주문하기" />
          </section>
          <section className="section home__second">
            <NavbarMini className="navnav" />
            <video
              className="bg-vid"
              data-src={Video}
              type="video/mp4"
              autoPlay
              data-keepplaying
              loop
              muted
            />
            <div className="second__content">
              <InfoWrapper content="Tesla 알아보기" text="시승 신청" />
            </div>
          </section>
          <section className="section home__third">
            <NavbarMini />
            <InfoWrapper content="모든 전력을 공급" text="자세히 알아보기" />
          </section>
          <section className="section home__last">
            <NavbarMini />
            <InfoWrapper content="Model Y" text="자세히 알아보기" />
            <Footer />
          </section>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Home;
