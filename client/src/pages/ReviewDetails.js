import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const ReviewDetails = () => {
  const [reviewContents, setReviewContents] = useState({})
  const [updateReview, setUpdateReview] = useState({
    rating: Number(),
    comment: ''
  })
  const [beerId, setBeerId] = useState(reviewContents.beer_id)
  const { reviewId } = useParams()

  let navigate = useNavigate()

  useEffect(() => {
    const getReview = async () => {
      const res = await axios.get(`/beers/review/${reviewId}`)
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
    e.target.id === 'rating'
      ? setUpdateReview({
          ...updateReview,
          [e.target.id]: Number(e.target.value)
        })
      : setUpdateReview({ ...updateReview, [e.target.id]: e.target.value })
  }

  const goBack = () => {
    navigate(`/beers-page/id/${beerId}`)
  }

  const putReview = async (e) => {
    e.preventDefault()
    const res = await axios.put(`/beers/review/${reviewId}`, updateReview)
    console.log(res)
    goBack()
  }

  const deleteReview = async (e) => {
    e.preventDefault()
    const res = await axios.delete(`/beers/review/${reviewId}`)
    console.log(res)
    goBack()
  }

  return (
    <div id="reviewDetailsPage">
      <h2>{reviewContents.author}</h2>
      <form onSubmit={putReview} id="reviewDetailsForm">
        <div id="rangeAndLabelContainer">
          <div id="rangeDiv">
            <input
              id="rating"
              type="range"
              min="0"
              max="5"
              step=".1"
              value={updateReview.rating}
              onInput={updateInputValue}
            />
          </div>
          <label htmlFor="rating">{updateReview.rating}</label>
        </div>
        <textarea
          id="comment"
          value={updateReview.comment}
          onInput={updateInputValue}
          maxLength="100"
        ></textarea>
        <button type="submit">Update Review</button>
      </form>
      <section>
        <button onClick={deleteReview}>Delete Review</button>
        <button onClick={goBack}>Return to Beer</button>
      </section>
    </div>
  )
}

export default ReviewDetails
