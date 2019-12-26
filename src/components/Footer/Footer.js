import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='Footer'>
      <ul className='Footer__links'>
        <li>Tesla © 2019</li>
        <li>개인정보 처리방침 및 법적고지</li>
        <li>연락처</li>
        <li>채용정보</li>
        <li>뉴스레터 받기</li>
        <li>위치</li>
      </ul>
      <div className='Footer__info'>
        <p>
          사업자등록번호 : 524-88-00237 | 마크해수스썰다, 데이비드존 파인스타인
          | 주소 : 서울특별시 강남구 영동대로 730 | 대표전화 : 080-822-0291
          |southkorea@tesla.com
        </p>
      </div>
    </footer>
  )
}

export default Footer
