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
  }, [])

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
          <main>
            {beerContents.reviews.map((review) => (
              <div key={review._id}>
                <ReviewCard review={review} newReviewInput={newReviewInput} />
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
