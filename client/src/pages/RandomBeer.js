import { useEffect, useState } from 'react'
import axios from 'axios'

const RandomBeer = () => {
  const [beerArr, setBeerArr] = useState([])
  const [randomBeer, setRandomBeer] = useState({})
  const [beerPicked, setBeerPicked] = useState(false)
  useEffect(() => {
    const getRandomBeer = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/random-beer`)
        // console.log(res.data.beers)
        setBeerArr(res.data.beers)
        setBeerPicked(true)
      } catch (e) {
        console.error(e)
      }
      let random = Math.ceil(Math.random() * (beerArr.length - 1))
      random = parseInt(random, 10)
      if (random === -0) return (random = 0)
      console.log(random)
      console.log(beerArr)
      setRandomBeer(beerArr[random])
      console.log(beerArr[random])
    }
    getRandomBeer()
  }, [])

  return (
    <div>
      {/* {beerPicked ? (
        <main>
          <h2>{randomBeer.beer_name}</h2>
          <img src={randomBeer.image} alt="Beer" />
        </main>
      ) : (
        'Try hitting the button below'
      )}
      <button>Get New Beer!</button> */}
    </div>
  )
}

export default RandomBeer
