import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import InfoWrapper from '../../components/InfoWrapper/InfoWrapper'
import Video from '../../videos/experience-hero-desktop.mp4'
import Footer from '../../components/Footer/Footer'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <section className='home__first'>
        <Navbar />
        <InfoWrapper content='Model 3' text='지금 주문하기' />
      </section>
      <section className='home__second'>
        <div className='video-wrap'>
          <video
            className='bg-vid'
            src={Video}
            type='video/mp4'
            autoPlay
            loop
            muted
          />
        </div>
        <div className='second__content'>
          <InfoWrapper content='Tesla 알아보기' text='시승 신청' />
        </div>
      </section>
      <section className='home__third'>
        <InfoWrapper content='모든 전력을 공급' text='자세히 알아보기' />
      </section>
      <section className='home__last'>
        <InfoWrapper content='Model Y' text='자세히 알아보기' />
      </section>
      <section className='home__footer'>
        <Footer />
      </section>
    </div>
  )
}

export default Home
