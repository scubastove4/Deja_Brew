import { useState, useEffect } from 'react'
import axios from 'axios'

import BreweryCard from '../components/BreweryCard'

const Breweries = ({ userLocation }) => {
  const [nearbyBreweries, setNearbyBreweries] = useState({})
  const [breweriesHere, setBreweriesHere] = useState(false)

  useEffect(() => {
    const getNearbyBreweries = async () => {
      try {
        const res = await axios.get(
          `https://api.openbrewerydb.org/breweries?by_dist=${userLocation.lat},${userLocation.lng}&per_page=10`
        )
        setNearbyBreweries(res.data)
        setBreweriesHere(true)
      } catch (e) {
        console.error(e)
      }
    }
    getNearbyBreweries()
  }, [])

  return (
    <div id="breweryPage">
      <h2 id="breweryTitle">Breweries in Your Vicinity!</h2>
      {breweriesHere ? (
        <div className="breweryCardContainer">
          {nearbyBreweries.map((brewery) => (
            <BreweryCard brewery={brewery} key={brewery.id} />
          ))}
        </div>
      ) : (
        <h2>Loading some spots</h2>
      )}
    </div>
  )
}

export default Breweries
