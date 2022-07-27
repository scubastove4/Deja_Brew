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
    beer_id: '',
    author: '',
    rating: '',
    comment: ''
  }
  const [newReview, setNewReview] = useState(initialState)
  let navigate = useNavigate()

  useEffect(() => {
    const renderBeerContents = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/beers/id/${beerId}`
        )
        // console.log(res.data)
        setBeerContents(res.data)
        setBeerContentsHere(true)
      } catch (e) {
        console.error(e)
      }
    }
    renderBeerContents()
  }, [newReview])

  const displayNewReviewForm = (beer) => {
    formDisplay === 'none' ? setFormDisplay('flex') : setFormDisplay('none')
    setNewReview({
      ...newReview,
      beer_id: beer._id
    })
  }

  const newReviewInput = (e) => {
    setNewReview({ ...newReview, [e.target.id]: e.target.value })
  }

  const addNewReview = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        `http://localhost:3001/api/beers/id/${beerId}`,
        newReview
      )
      console.log(res)
      setNewReview(initialState)
    } catch (e) {
      console.error(e)
    }
  }

  const updateReview = (review) => {
    navigate(`/beers/review/${review._id}`)
  }

  // const avgRating = beerContents.reviews.map((review) => Number(review.rating))
  // .reduce(
  //   (accumulator, value) =>
  //     (accumulator + value) / beerContents.reviews.length,
  //   0
  // )

  const getAvgRating = () => {
    const ratingArr = []
    beerContents.reviews.forEach((review) =>
      ratingArr.push(Number(review.rating))
    )
    const ratingSum = ratingArr.reduce(
      (accumulator, value) => accumulator + value,
      0
    )
    return Math.round((ratingSum / beerContents.reviews.length) * 100) / 100
  }

  const avgRating = getAvgRating()

  return (
    <div>
      <button onClick={() => displayNewReviewForm(beerContents.beer)}>
        Add New Review!
      </button>
      <div style={{ display: `${formDisplay}` }}>
        <ReviewForm
          beer={beerContents.beer}
          newReview={newReview}
          newReviewInput={newReviewInput}
          addNewReview={addNewReview}
        />
      </div>
      {beerContentsHere ? (
        <section>
          <h1>{beerContents.beer.beer_name}</h1>
          <img src={beerContents.beer.image} alt="Beer" />
          <h2>Number of Reviews: {beerContents.reviews.length}</h2>
          <h2>Average Rating: {avgRating}</h2>
          <main>
            {beerContents.reviews.map((review) => (
              <div key={review._id}>
                <ReviewCard review={review} updateReview={updateReview} />
              </div>
            ))}
          </main>
        </section>
      ) : (
        <h1>Please reload page</h1>
      )}
    </div>
  )
}

export default BeerDetails
