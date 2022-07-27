import { useMemo, useRef, useState, useEffect } from 'react'
// import { GoogleMap, Marker } from '@react-google-maps/api'

const Map = ({ userLocation }) => {
  // const center = useMemo(() => userLocation, [])
  const ref = useRef(null)
  const [map, setMap] = useState()

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}))
    }
  }, [ref, map])

  return (
    <div
      className="map-container"
      ref={ref}
      center={userLocation}
      zoom="14"
    ></div>
  )
}

export default Map
