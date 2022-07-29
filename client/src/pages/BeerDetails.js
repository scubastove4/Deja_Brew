import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'

const BeerDetails = () => {
  const [beerContents, setBeerContents] = useState({})
  const [beerContentsHere, setBeerContentsHere] = useState(false)
  const [formDisplay, setFormDisplay] = useState('none')
  const { beerId } = useParams()
  const initialState = {
    beer_id: beerId,
    author: '',
    rating: '',
    comment: ''
  }
  const [newReview, setNewReview] = useState(initialState)
  let avgRating
  let navigate = useNavigate()

  useEffect(() => {
    const renderBeerContents = async () => {
      try {
        const res = await axios.get(`/beers/id/${beerId}`)
        setBeerContents(res.data)
        setBeerContentsHere(true)
      } catch (e) {
        console.error(e)
      }
    }
    renderBeerContents()
  }, [avgRating])

  const displayNewReviewForm = () => {
    formDisplay === 'none' ? setFormDisplay('block') : setFormDisplay('none')
  }

  const newReviewInput = (e) => {
    setNewReview({ ...setNewReview, [e.target.id]: e.target.value })
  }

  const addNewReview = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`/beers/id/${beerId}`, newReview)
      console.log(res)
      setNewReview(initialState)
    } catch (e) {
      console.error(e)
    }
  }

  const updateReview = (review) => {
    navigate(`/beers-page/review/${review._id}`)
  }

  const getAvgRating = () => {
    const ratingArr = []
    let avgRating
    beerContents.reviews
      ? beerContents.reviews.forEach((review) =>
          ratingArr.push(Number(review.rating))
        )
      : (avgRating = '')

    const ratingSum = ratingArr.reduce(
      (accumulator, value) => accumulator + value,
      0
    )
    beerContents.reviews
      ? (avgRating =
          Math.round((ratingSum / beerContents.reviews.length) * 100) / 100)
      : (avgRating = '')
    return avgRating
  }

  avgRating = getAvgRating()

  return (
    <div id="beerDetailsPage">
      {beerContentsHere ? (
        <main id="beerDetailsContainer">
          <div id="beerNameAndRating">
            <h1>{beerContents.beer.beer_name}</h1>
            <h2>Number of Reviews: {beerContents.reviews.length}</h2>
            {avgRating ? (
              <h2>Average Rating: {avgRating}</h2>
            ) : (
              <h2>Be the first to review and rate this beer!</h2>
            )}
          </div>
          {beerContents.beer.image ? (
            <img
              className="beerDetailsImg"
              src={beerContents.beer.image}
              alt="Beer"
            />
          ) : (
            <img
              className="beerDetailsImg"
              src={beerContents.beerType[0].image}
              alt="Beer Type"
            />
          )}
          <section id="beerReviews">
            <button onClick={displayNewReviewForm}>Add New Review!</button>
            <div style={{ display: `${formDisplay}` }} id="reviewForm">
              <ReviewForm
                beer={beerContents.beer}
                newReview={newReview}
                newReviewInput={newReviewInput}
                addNewReview={addNewReview}
              />
            </div>
            <section id="reviewCardContainer">
              {beerContents.reviews.map((review) => (
                <div key={review._id} className="card reviewCard">
                  <ReviewCard review={review} updateReview={updateReview} />
                </div>
              ))}
            </section>
          </section>
        </main>
      ) : (
        <h1>Please reload page</h1>
      )}
    </div>
  )
}

export default BeerDetails
