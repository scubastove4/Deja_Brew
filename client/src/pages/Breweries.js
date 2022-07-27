import { set } from 'mongoose'
import { useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

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
        lat: position.coords.latitude,
        lng: position.coords.longitude
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

  const center = userLocation

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
  })

  // geolocation help https://youtu.be/U3dLjHN0UvM and https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs and https://www.npmjs.com/package/@react-google-maps/api

  return (
    <div>
      <div id="map"></div>
    </div>
  )
}

export default Breweries
