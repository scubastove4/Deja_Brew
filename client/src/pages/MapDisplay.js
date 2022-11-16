import { useEffect, useRef, useState } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import axios from 'axios'
import Map from '../components/Map'
import Marker from '../components/Marker'
import Spinner from '../components/Spinner'
import ErrorComponent from '../components/ErrorComponent'

const MapDisplay = () => {
  const userLocation = useRef({
    lat: 0,
    lng: 0
  })
  const [nearbyBreweries, setNearbyBreweries] = useState(null)

  const getUserLocation = (position) => {
    userLocation.current.lat = Number(position.coords.latitude)
    userLocation.current.lng = Number(position.coords.longitude)
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
        `https://api.openbrewerydb.org/breweries?by_dist=${userLocation.current.lat},${userLocation.current.lng}&per_page=10`
      )
      setNearbyBreweries(res.data)
      // setBreweriesHere(true)
    } catch (e) {
      console.error(e)
    }
  }

  const render = (status) => {
    if (status === Status.FAILURE) return <ErrorComponent />
    return <Spinner />
  }

  useEffect(() => {
    getLocation()
    getNearbyBreweries()
  }, [])

  // geolocation help https://youtu.be/U3dLjHN0UvM and https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs

  return (
    <Wrapper
      apiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
      render={render}
    >
      <Map userLocation={userLocation.current}>
        {nearbyBreweries && nearbyBreweries.length > 0
          ? nearbyBreweries.map((brewery) => (
              <Marker
                position={{ lat: brewery.latitude, lng: brewery.longitude }}
                key={brewery.id}
              />
            ))
          : null}
      </Map>
    </Wrapper>

    // <button onClick={() => console.log(userLocation.current)}>get UL</button>
  )
}

export default MapDisplay
