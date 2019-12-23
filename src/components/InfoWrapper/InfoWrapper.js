import React from 'react'
import InfoHeader from '../InfoHeader/InfoHeader'
import InfoButton from '../InfoButton/InfoButton'
import './InfoWrapper.scss'

const InfoWrapper = ({ content, text }) => {
  return (
    <div className='info_wrapper'>
      <InfoHeader content={content}/>
      <InfoButton text={text}/>
    </div>
  )
}

export default InfoWrapper