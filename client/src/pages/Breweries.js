import { useState, useEffect } from 'react'
import axios from 'axios'

import BreweryCard from '../components/BreweryCard'

const Breweries = () => {
  const [nearbyBreweries, setNearbyBreweries] = useState({})
  const [breweriesHere, setBreweriesHere] = useState(false)

  const [userLocation, setUserLocation] = useState({
    lat: '',
    lng: ''
  })

  const getUserLocation = (position) => {
    setUserLocation({
      ...userLocation,
      lat: Number(position.coords.latitude),
      lng: Number(position.coords.longitude)
    })
  }
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getUserLocation, (error) => {
        console.error(`Error = ${error.code}: ${error.message}`)
      })
    } else {
      alert('Geolocation not supported by this browser')
    }
  }

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

  useEffect(() => {
    getLocation()

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
