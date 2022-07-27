import { useState, useEffect, useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import axios from 'axios'

import Map from '../components/Map'

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

  const center = useMemo(() => userLocation, [])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  if (!isLoaded) return <div>Loading...</div>

  // geolocation help https://youtu.be/U3dLjHN0UvM and https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs

  // Google Maps help https://www.npmjs.com/package/@react-google-maps/api and https://youtu.be/9e-5QHpadi0

  return (
    <GoogleMap
      zoom={10}
      setCenter={center}
      mapContainerClassName="map-container"
      // mapContainerStyle={containerStyle}
      // onLoad={Load}
    >
      <Marker setPosition={center} />
    </GoogleMap>
  )
}

export default Breweries
