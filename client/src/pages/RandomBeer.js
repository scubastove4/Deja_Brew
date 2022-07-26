import { useEffect, useState } from 'react'
import axios from 'axios'

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState({})
  const [beerPicked, setBeerPicked] = useState(false)

  useEffect(() => {
    const renderRandomBeer = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/random-beer`)
        setRandomBeer(res.data.randomBeer)
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
          <h2>{randomBeer.beer_name}</h2>
          <img src={randomBeer.image} alt="Beer" />
        </main>
      ) : (
        'Try hitting the button below'
      )}
      <button onClick={randomOnClick}>Get New Beer!</button>
    </div>
  )
}

export default RandomBeer
