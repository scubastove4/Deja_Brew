import axios from 'axios'
import { useEffect } from 'react'

const RandomBeer = () => {
  useEffect(() => {
    const getRandomBeer = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/random-beer`)
        console.log(res.data.beers)
      } catch (e) {
        console.error(e)
      }
    }
    getRandomBeer()
  }, [])

  return (
    <div>
      <button>Get Random Beer</button>
    </div>
  )
}

export default RandomBeer
