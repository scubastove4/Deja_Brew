import { useEffect, useRef, useState } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import axios from 'axios'
import Map from '../components/Map'
import Marker from '../components/Marker'
import Spinner from '../components/Spinner'
import ErrorComponent from '../components/ErrorComponent'

const MapDisplay = () => {
  const [userLat, setUserLat] = useState(0)
  const [userLng, setUserLng] = useState(0)
  const [nearbyBreweries, setNearbyBreweries] = useState([])

  const getUserLocation = (position) => {
    setUserLat(Number(position.coords.latitude))
    setUserLng(Number(position.coords.longitude))
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
        `https://api.openbrewerydb.org/breweries?by_dist=${userLat},${userLng}&per_page=10`
      )
      setNearbyBreweries(res.data)
      // setBreweriesHere(true)
    } catch (e) {
      console.error(e)
    }
  }

  const render = (status) => {
    console.log(status)
    if (status === Status.FAILURE) return <ErrorComponent />
    else if (status === Status.LOADING) return <Spinner />
  }

  useEffect(() => {
    getNearbyBreweries()
  }, [userLat])

  // geolocation help https://youtu.be/U3dLjHN0UvM and https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs

  return (
    <Wrapper
      apiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
      render={render}
    >
      <Map userLat={userLat} userLng={userLng} getLocation={getLocation}>
        {nearbyBreweries.length
          ? nearbyBreweries.map((brewery) => (
              <Marker
                position={{
                  lat: parseFloat(brewery.latitude),
                  lng: parseFloat(brewery.longitude)
                }}
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
