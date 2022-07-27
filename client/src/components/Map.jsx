import { useMemo } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'

const Map = ({ userLocation }) => {
  const center = useMemo(() => userLocation, [])

  return (
    <GoogleMap
      zoom={10}
      setCenter={center}
      mapContainerClassName="map-container"
    >
      <Marker setPosition={center} />
    </GoogleMap>
  )
}

export default Map
