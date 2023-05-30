import React from 'react'
import illustration from './images/illustration-thank-you.svg'

const SubmittedCard = ({ rating }) => {
  return (
    <div className='submitted'>
        <img src={illustration} alt="phone-illustration" className='illustration' height={108} width={162}/>

        <div className='submitted-rating-container'>
            <p className='submitted-rating-text'>You selected {rating} out of 5</p>
        </div>

        <div className='content'>
            <h2 className='rating-heading'>Thank you!</h2>
            <p className='rating-description'>
                We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
            </p>
        </div>
    </div>
  )
}

export default SubmittedCard