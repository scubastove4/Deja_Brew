import {
  useState,
  useEffect,
  useRef,
  isValidElement,
  cloneElement,
  Children
} from 'react'

const Map = ({ userLat, userLng, getLocation, children }) => {
  const ref = useRef(null)
  const [map, setMap] = useState(null)

  // const generateMap = () => {}

  useEffect(() => {
    if (ref.current && !map) {
      getLocation()
      setMap(
        new window.google.maps.Map(ref.current, {
          center: { lat: userLat, lng: userLng },
          zoom: 10
        })
      )
    }
  }, [ref, map])
  useEffect(() => {
    if (userLat) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: { lat: userLat, lng: userLng },
          zoom: 10
        })
      )
    }
  }, [userLat])

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
