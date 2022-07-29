import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

import BrewMap from '../components/BrewMap'
import BreweryCard from '../components/BreweryCard'

const Breweries = () => {
  const [userLocation, setUserLocation] = useState({
    lat: '',
    lng: ''
  })
  const [nearbyBreweries, setNearbyBreweries] = useState({})
  const [breweriesHere, setBreweriesHere] = useState(false)
  // const [error, setError] = useState('')

  useEffect(() => {
    const getUserLocation = async (position) => {
      await setUserLocation({
        ...userLocation,
        lat: Number(position.coords.latitude),
        lng: Number(position.coords.longitude)
      })
      console.log(position)
    }
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getUserLocation, (error) => {
          console.error(`Error = ${error.code}: ${error.message}`)
          // setError(error.message)
        })
      } else {
        console.log('Not available')
      }
    }

    getLocation()
  }, [])

  useEffect(() => {
    const getNearbyBreweries = async () => {
      try {
        const res = await axios.get(
          `https://api.openbrewerydb.org/breweries?by_dist=${userLocation.lat},${userLocation.lng}&per_page=10`
        )
        // console.log(res.data)
        setNearbyBreweries(res.data)
        setBreweriesHere(true)
      } catch (e) {
        console.error(e)
      }
    }
    getNearbyBreweries()
  }, [userLocation])

  // geolocation help https://youtu.be/U3dLjHN0UvM and https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs

  // Google Maps help https://www.npmjs.com/package/@react-google-maps/api and https://youtu.be/9e-5QHpadi0

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
        <h2>Please reload page</h2>
      )}
    </div>
  )
}
{
  /* {breweriesHere && userLocation ? (
      <BrewMap
        userLocation={userLocation}
        nearbyBreweries={nearbyBreweries}
      />
    ) : (
      <h1>Loading Brewery Map</h1>
    )} */
}

export default Breweries
