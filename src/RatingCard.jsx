import React from 'react'
import star from './images/icon-star.svg'

const RatingBubble = ({ ratingLevel, rating, setRating }) => {
    return (
        <div className={`circle rating-container ${(ratingLevel==rating) ? 'active' : ''}`}
                onClick={() => setRating(ratingLevel)}>
            <div>
                <p className='rating-level'>{ratingLevel}</p>
            </div>
            
        </div>
    )
}

const RatingCard = ({ setRating, setIsSubmitted, rating }) => {
    const ratings = [1, 2, 3, 4, 5];

    
  return (
    <>
        <div className='circle star-container'>
            <img src={star} alt="star-icon" className='icon' height={16} width={17}/>
        </div>

        <div className='rating-content'>
            <h2 className='rating-heading'>How did we do?</h2>
            <p className='rating-description'>
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </p>
        </div>

        <div className='bubble-container'>
            {ratings.map((item) => (<RatingBubble key={item} ratingLevel={item} setRating={setRating} rating={rating} />))}
        </div>

        <button className='submit-button'
                onClick={() => rating ? setIsSubmitted(true) : null}>
            SUBMIT
        </button>
    </>
  )
}

export default RatingCard