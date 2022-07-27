import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ReviewDetails = () => {
  const [reviewContents, setReviewContents] = useState({})
  const { reviewId } = useParams()
  const initialState = {
    review_id: reviewId,
    author: reviewContents.author,
    rating: reviewContents.rating,
    comment: reviewContents.comment
  }
  const [updateReview, setUpdateReview] = useState(initialState)

  useEffect(() => {
    const getReview = async () => {
      const res = await axios.get(
        `http://localhost:3001/api/beers/review/${reviewId}`
      )
      // console.log(res.data.review)
      setReviewContents(res.data.review)
    }
    getReview()
  }, [])

  const updateInputValue = (e) => {
    setUpdateReview({ ...updateReview, [e.target.id]: e.target.value })
  }

  const putReview = async (e) => {
    e.preventDefault()
    const res = await axios.put(
      `http://localhost:3001/api/beers/review/${reviewId}`,
      reviewId,
      updateReview
    )
    setUpdateReview(initialState)
  }

  return (
    <div>
      <h2>{reviewContents.author}</h2>
      <form>
        <input
          id="rating"
          value={reviewContents.rating}
          onInput={updateInputValue}
        />
        <textarea
          id="comment"
          value={reviewContents.comment}
          onInput={updateInputValue}
        ></textarea>
      </form>
    </div>
  )
}

export default ReviewDetails
