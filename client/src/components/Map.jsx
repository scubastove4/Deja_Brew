// import { useMemo, useRef, useState, useEffect } from 'react'

// const Map = ({ userLocation, center }) => {
//   const ref = useRef(null)
//   const [map, setMap] = useState()

//   useEffect(() => {
//     if (ref.current && !map) {
//       setMap(new window.google.maps.Map(ref.current, {}))
//     }
//   }, [ref, map])

//   return (
//     <div
//       className="map-container"
//       ref={ref}
//     ></div>
//   )
// }

// export default Map
