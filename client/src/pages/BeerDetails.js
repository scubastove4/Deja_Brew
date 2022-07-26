import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'

const BeerDetails = () => {
  const [beerContents, setBeerContents] = useState({})
  const [beerContentsHere, setBeerContentsHere] = useState(false)
  const [formDisplay, setFormDisplay] = useState('none')
  const [rerender, setRerender] = useState(true)
  const { beerId } = useParams()
  const initialState = {
    beer_id: beerId,
    author: '',
    rating: '',
    comment: ''
  }
  const [newReview, setNewReview] = useState(initialState)
  const [numReviews, setNumReviews] = useState(0)
  const [avgRating, setAvgRating] = useState(0)

  let navigate = useNavigate()

  useEffect(() => {
    const renderBeerContents = async () => {
      try {
        const res = await axios.get(`/api/beers/id/${beerId}`)
        setBeerContents(res.data)
        setBeerContentsHere(true)
        setRerender(true)
      } catch (e) {
        console.error(e)
      }
    }
    renderBeerContents()
  }, [!rerender])

  useEffect(() => {
    const getRatingAndReviews = async () => {
      let ratingArr = []
      let ratingSum
      let avgRatingCalc
      let numReviewsCalc
      if (beerContents.reviews) {
        beerContents.reviews.forEach((review) => ratingArr.push(review.rating))
        ratingSum = ratingArr.reduce(
          (accumulator, value) => accumulator + value,
          0
        )
        avgRatingCalc =
          Math.round((ratingSum / beerContents.reviews.length) * 100) / 100
        numReviewsCalc = beerContents.reviews.length
      } else {
        avgRatingCalc = 0
        numReviewsCalc = 0
      }
      setAvgRating(avgRatingCalc)
      setNumReviews(numReviewsCalc)
    }
    getRatingAndReviews()
  }, [beerContents.reviews])

  const displayNewReviewForm = () => {
    formDisplay === 'none' ? setFormDisplay('block') : setFormDisplay('none')
  }

  const newReviewInput = (e) => {
    e.target.id === 'newRating'
      ? setNewReview({
          ...newReview,
          rating: Number(e.target.value)
        })
      : setNewReview({ ...newReview, [e.target.id]: e.target.value })
  }

  const updateReview = (review) => {
    navigate(`/beers-page/review/${review._id}`)
  }

  const addNewReview = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`/api/beers/id/${beerId}`, newReview)
      setNewReview(initialState)
      setRerender(false)
    } catch (e) {
      console.error(e)
    }
    formDisplay === 'block' ? setFormDisplay('none') : setFormDisplay('block')
  }

  return (
    <div id="beerDetailsPage">
      {beerContentsHere ? (
        <main id="beerDetailsContainer">
          <div id="beerNameAndRating">
            <h1>{beerContents.beer.beer_name}</h1>
            {beerContents.reviews ? (
              <h2>Number of Reviews: {numReviews}</h2>
            ) : (
              <h2>Number of Reviews: 0</h2>
            )}
            {beerContents.reviews.length > 0 ? (
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
