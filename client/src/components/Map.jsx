import { useState, useEffect, useRef } from 'react'

const Map = () => {
  const ref = useRef(null)
  const [map, setMap] = useState()

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.__googleMapsCallback.maps.Map(ref.current, {}))
    }
  }, [ref, map])

  return <div ref={ref} />
}

export default Map
