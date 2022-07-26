import { useEffect, useState } from 'react'
import axios from 'axios'

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState({})
  const [beerPicked, setBeerPicked] = useState(false)

  useEffect(() => {
    // const getRandomBeer = async () => {
    //   let random
    //   try {
    //     const res = await axios.get(`http://localhost:3001/api/random-beer`)
    //     setBeerPicked(true)
    //     beerPicked && setBeerArr(res.data.beers)
    //     random = Math.ceil(Math.random() * (beerArr.length - 1))
    //     if (random === -0) random = 0
    //     setRandomBeer(beerArr[random])
    //     console.log(beerArr)
    //     console.log(random)
    //     console.log(randomBeer)
    //   } catch (e) {
    //     console.error(e)
    //   }
    // }
    // getRandomBeer()
    const renderRandomBeer = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/random-beer`)
        // console.log(res.data.randomBeer)
        setRandomBeer(res.data.randomBeer)
        setBeerPicked(true)
      } catch (e) {
        console.error(e)
      }
    }
    renderRandomBeer()
  }, [])

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
      <button>Get New Beer!</button>
    </div>
  )
}

export default RandomBeer
