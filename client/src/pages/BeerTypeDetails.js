import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import BeerCard from '../components/BeerCard'

const BeerTypeDetails = () => {
  const [beerTypeContents, setBeerTypeContents] = useState({})
  const [beerTypContentsHere, setBeerTypeContentsHere] = useState(false)
  const { beerTypeId } = useParams()

  useEffect(() => {
    const renderBeerTypeContents = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/beer-types/id/${beerTypeId}`
        )
        // console.log(res.data)
        setBeerTypeContents(res.data)
        setBeerTypeContentsHere(true)
      } catch (e) {
        console.error(e)
      }
    }
    renderBeerTypeContents()
  }, [])

  return (
    <div>
      <button>Add New Beer!</button>
      {beerTypContentsHere ? (
        <section>
          <h1>{beerTypeContents.beerType.style_name}</h1>
          <main>
            {beerTypeContents.beers.map((beer) => (
              <div key={beer._id}>
                <BeerCard beer={beer} />
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

export default BeerTypeDetails
