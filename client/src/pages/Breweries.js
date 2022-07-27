import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

import BrewMap from '../components/BrewMap'

const Breweries = () => {
  const [userLocation, setUserLocation] = useState({
    lat: '',
    lng: ''
  })
  const [nearbyBreweries, setNearbyBreweries] = useState({})
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
      } catch (e) {
        console.error(e)
      }
    }
    getNearbyBreweries()
  }, [userLocation])

  // geolocation help https://youtu.be/U3dLjHN0UvM and https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs

  // Google Maps help https://www.npmjs.com/package/@react-google-maps/api and https://youtu.be/9e-5QHpadi0

  return (
    <BrewMap userLocation={userLocation} nearbyBreweries={nearbyBreweries} />
  )
}

export default Breweries
