import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const ReviewDetails = () => {
  const [reviewContents, setReviewContents] = useState({})
  const [updateReview, setUpdateReview] = useState({
    rating: '',
    comment: ''
  })
  const [beerId, setBeerId] = useState(reviewContents.beer_id)
  const { reviewId } = useParams()

  let navigate = useNavigate()

  useEffect(() => {
    const getReview = async () => {
      const res = await axios.get(
        `http://localhost:3001/api/beers/review/${reviewId}`
      )
      setReviewContents(res.data.review)
    }
    getReview()
  }, [])

  useEffect(() => {
    setBeerId(reviewContents.beer_id)
    setUpdateReview({
      rating: reviewContents.rating,
      comment: reviewContents.comment
    })
  }, [reviewContents])

  const updateInputValue = (e) => {
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

  const goBack = () => {
    navigate(`/beers/id/${beerId}`)
  }

  return (
    <div>
      <h2>{reviewContents.author}</h2>
      <form onSubmit={putReview}>
        <input
          id="rating"
          value={updateReview.rating}
          onInput={updateInputValue}
          minLength="0"
          maxLength="4"
        />
        <textarea
          id="comment"
          value={updateReview.comment}
          onInput={updateInputValue}
          maxLength="100"
          minLength="0"
        ></textarea>
        <button type="submit">Update Review</button>
      </form>
      <button onClick={deleteReview}>Delete Review</button>
      <button onClick={goBack}>Return to Beer</button>
    </div>
  )
}

export default ReviewDetails
