import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ReviewDetails = () => {
  const [reviewContents, setReviewContents] = useState({})
  const { reviewId } = useParams()
  const [updateReview, setUpdateReview] = useState({
    rating: reviewContents.rating,
    comment: reviewContents.comment
  })

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
    e.target.value &&
      setUpdateReview({ ...updateReview, [e.target.id]: e.target.value })
  }

  const putReview = async (e) => {
    e.preventDefault()
    const res = await axios.put(
      `http://localhost:3001/api/beers/review/${reviewId}`,
      updateReview
    )
    console.log(res)
  }

  const deleteReview = async (e) => {
    e.preventDefault()
    const res = await axios.delete(
      `http://localhost:3001/api/beers/review/${reviewId}`
    )
    console.log(res)
  }

  return (
    <div>
      <h2>{reviewContents.author}</h2>
      <form onSubmit={putReview}>
        <input
          id="rating"
          value={updateReview.rating}
          onInput={updateInputValue}
          placeholder={reviewContents.rating}
          minLength="0"
          maxLength="4"
        />
        <textarea
          id="comment"
          value={updateReview.comment}
          onInput={updateInputValue}
          placeholder={reviewContents.comment}
          maxLength="100"
          minLength="0"
        ></textarea>
        <button type="submit">Update Review</button>
      </form>
    </div>
  )
}

export default ReviewDetails
