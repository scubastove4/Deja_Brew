import { useEffect, useState } from 'react'
import axios from 'axios'

import ReviewCard from '../components/ReviewCard'

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState({})
  const [beerPicked, setBeerPicked] = useState(false)

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

  return (
    <div>
      {beerPicked ? (
        <main>
          <h2>{randomBeer.randomBeer.beer_name}</h2>
          <img src={randomBeer.randomBeer.image} alt="Beer" />
          <div>
            {randomBeer.reviews.map((review) => (
              <div key={review._id}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </main>
      ) : (
        <h1>Try hitting the button below'</h1>
      )}
      <button onClick={randomOnClick}>Get New Beer!</button>
    </div>
  )
}

export default RandomBeer
