import { useState, useEffect } from 'react'
import axios from 'axios'

const BeerTypes = () => {
  const [beerTypeArr, setBeerTypeArr] = useState([])
  const [beerTypesHere, setBeerTypesHere] = useState(false)

  useEffect(() => {
    const renderBeerTypes = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/beer-types`)
        // console.log(res.data.beerTypes)
        setBeerTypeArr(res.data.beerTypes)
        setBeerTypesHere(true)
      } catch (e) {
        console.error(e)
      }
    }
    renderBeerTypes()
  }, [])
  return <div>BeerTypes</div>
}

export default BeerTypes
