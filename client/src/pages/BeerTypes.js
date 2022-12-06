import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import BeerTypeCard from '../components/BeerTypeCard'

const BeerTypes = () => {
  const [beerTypes, setBeerTypes] = useState([])
  const [beerTypesHere, setBeerTypesHere] = useState(false)

  let navigate = useNavigate()

  useEffect(() => {
    const renderBeerTypes = async () => {
      try {
        const res = await axios.get('/beer-types')
        setBeerTypes(res.data.beerTypes)
        setBeerTypesHere(true)
      } catch (e) {
        console.error(e)
      }
    }
    renderBeerTypes()
  }, [])

  const showBeersByType = (beerType) => {
    navigate(`/beer-types-page/id/${beerType._id}`)
  }

  return (
    <div id="beerTypesDiv">
      {beerTypesHere ? (
        <main id="beerTypesMain">
          {beerTypes.map((beerType) => (
            <div key={beerType._id} className="card">
              <BeerTypeCard
                beerType={beerType}
                showBeersByType={showBeersByType}
              />
            </div>
          ))}
        </main>
      ) : (
        <h1>Please reload page</h1>
      )}
    </div>
  )
}

export default BeerTypes
