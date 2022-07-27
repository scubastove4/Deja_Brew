import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import ReviewCard from '../components/ReviewCard'

const BeerDetails = () => {
  const [beerContents, setBeerContents] = useState({})
  const [beerContentsHere, setBeerContentsHere] = useState(false)
  const [formDisplay, setFormDisplay] = useState('none')
  const { beerId } = useParams()
  const initialState = {
    beer_id: '',
    author: '',
    brewery: '',
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
        console.log(res.data)
        // setBeerContents(res.data)
        setBeerContentsHere(true)
      } catch (e) {
        console.error(e)
      }
    }
    renderBeerTypeContents()
  }, [])
  return <div></div>
}

export default BeerDetails
