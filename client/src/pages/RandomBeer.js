import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import ReviewCard from '../components/ReviewCard'

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState({})
  const [beerPicked, setBeerPicked] = useState(false)
  let navigate = useNavigate()

  useEffect(() => {
    const renderRandomBeer = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/random-beer')
        setRandomBeer(res.data)
        setBeerPicked(true)
      } catch (e) {
        console.error(e)
      }
    }
    renderRandomBeer()
  }, [!beerPicked])

  const randomOnClick = (e) => {
    e.preventDefault()
    beerPicked && setBeerPicked(false)
  }

  const getAvgRating = () => {
    const ratingArr = []
    let avgRating
    randomBeer.reviews
      ? randomBeer.reviews.forEach((review) =>
          ratingArr.push(Number(review.rating))
        )
      : (avgRating = '')

    const ratingSum = ratingArr.reduce(
      (accumulator, value) => accumulator + value,
      0
    )
    randomBeer.reviews
      ? (avgRating =
          Math.round((ratingSum / randomBeer.reviews.length) * 100) / 100)
      : (avgRating = '')
    return avgRating
  }

  const avgRating = getAvgRating()

  const showBeer = () => {
    navigate(`/beers/id/${randomBeer.randomBeer._id}`)
  }

  return (
    <div id="randomBeerPage">
      {beerPicked ? (
        <main onClick={showBeer} className="card randomBeerContainer">
          <h2 id="randomBeerName">{randomBeer.randomBeer.beer_name}</h2>
          <img
            src={randomBeer.randomBeer.image}
            alt="Beer"
            className="randomBeerImg"
          />
          {avgRating ? (
            <h2 className="randomBeerRating">Average Rating: {avgRating}</h2>
          ) : (
            <h2 className="randomBeerRating">Average Rating Pending</h2>
          )}
        </main>
      ) : (
        <h1>Try hitting the button below!</h1>
      )}
      <button onClick={randomOnClick}>Get New Beer!</button>
    </div>
  )
}

export default RandomBeer
