import { useState } from 'react'
import './App.css'
import RatingCard from './RatingCard'
import SubmittedCard from './SubmittedCard'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(undefined);
  return (
   <div className='App'>
    {
      !isSubmitted ? 
        <RatingCard  setRating={setRating} setIsSubmitted={setIsSubmitted} rating={rating} /> :
        <SubmittedCard rating={rating} />
    }
   </div>
  )
}

export default App
