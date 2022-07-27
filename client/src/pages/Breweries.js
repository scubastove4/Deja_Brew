import { set } from 'mongoose'
import { useState, useEffect } from 'react'

const Breweries = () => {
  const [userLocation, setUserLocation] = useState({
    lat: '',
    long: ''
  })
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getUserLocation)
      } else {
        console.log('Not available')
      }
    }
    const getUserLocation = (position) => {
      setUserLocation({
        ...userLocation,
        lat: position.coords.latitude,
        long: position.coords.longitude
      })
      console.log(userLocation)
    }
    getLocation()
  }, [])

  // geolocation help https://youtu.be/U3dLjHN0UvM
  return <div>Breweries</div>
}

export default Breweries
