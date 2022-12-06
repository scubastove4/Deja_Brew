import {
  useState,
  useEffect,
  useRef,
  isValidElement,
  cloneElement,
  Children
} from 'react'

const Map = ({ userLocation, children }) => {
  const ref = useRef(null)
  const [map, setMap] = useState()

  // const generateMap = () => {}

  useEffect(() => {
    // userLocation && generateMap()
    if (userLocation) {
      if (ref.current && !map) {
        setMap(
          new window.google.maps.Map(ref.current, {
            center: { lat: userLocation.lat, lng: userLocation.lng },
            zoom: 11
          })
        )
      }
    }
  }, [ref, map, !userLocation.lat])

  return (
    <>
      <div ref={ref} style={{ height: '400px', width: '400px' }} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { map })
        }
      })}
    </>
  )
}

export default Map
