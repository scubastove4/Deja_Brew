import { useState, useEffect, useMemo } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react-17'
import axios from 'axios'

const Breweries = () => {
  const [userLocation, setUserLocation] = useState({
    lat: '',
    lng: ''
  })
  const [error, setError] = useState('')
  let map

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
          setError(error.message)
        })
      } else {
        console.log('Not available')
      }
    }
    getLocation()
  }, [])

  // geolocation help https://youtu.be/U3dLjHN0UvM and https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs

  // Google Maps help https://www.npmjs.com/package/@react-google-maps/api and https://youtu.be/9e-5QHpadi0

  return (

  )
}

export default Breweries
