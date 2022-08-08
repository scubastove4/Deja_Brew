import { useState, useEffect, useRef } from 'react'

const Map = ({ userLocation }) => {
  const ref = useRef(null)
  const [map, setMap] = useState()

  useEffect(() => {
    const generateMap = () => {
      if (ref.current && !map) {
        setMap(
          new window.google.maps.Map(ref.current, {
            center: userLocation,
            zoom: 14
          })
        )
      }
    }
    userLocation && generateMap()
  }, [ref, map])

  return <div ref={ref} style={{ height: '400px', width: '400px' }} />
}

export default Map
