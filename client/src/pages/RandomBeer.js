import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState({})
  const [beerPicked, setBeerPicked] = useState(false)
  let navigate = useNavigate()

  useEffect(() => {
    const renderRandomBeer = async () => {
      try {
        const res = await axios.get('/random-beer')
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

  const showBeer = () => {
    navigate(`/beers-page/id/${randomBeer.randomBeer._id}`)
  }

  return (
    <div id="randomBeerPage">
      {beerPicked ? (
        <main onClick={showBeer} className="card randomBeerContainer">
          <h2 id="randomBeerName">{randomBeer.randomBeer.beer_name}</h2>
          {randomBeer.randomBeer.image ? (
            <img
              src={randomBeer.randomBeer.image}
              alt="Beer"
              className="randomBeerImg"
            />
          ) : (
            <img
              src={randomBeer.beerType[0].image}
              alt="Beer Type"
              className="randomBeerImg"
            />
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
