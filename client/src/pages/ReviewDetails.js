import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ReviewDetails = () => {
  const { reviewId } = useParams()

  return (
    <div>
      <h2>{review.author}</h2>
      <input value={review.rating} />
      <textarea>{review.comment}</textarea>
    </div>
  )
}

export default ReviewDetails
