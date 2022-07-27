import { set } from 'mongoose'
import { useState, useEffect } from 'react'

const Breweries = () => {
  const [userLocation, setUserLocation] = useState({
    lat: '',
    long: ''
  })
  const [error, setError] = useState('')
  let map

  useEffect(() => {
    const getUserLocation = async (position) => {
      await setUserLocation({
        ...userLocation,
        lat: position.coords.latitude,
        long: position.coords.longitude
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

  const initMap = () => {
    map = new google.maps.Map()
  }

  // geolocation help https://youtu.be/U3dLjHN0UvM and https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs

  return (
    <div>
      <div id="map"></div>
    </div>
  )
}

export default Breweries
