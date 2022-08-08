import { Wrapper, Status } from '@googlemaps/react-wrapper'
import Map from '../components/Map'

let status = Status()

console.log(status)

const render = () => {
  if (status === Status.FAILURE) return <ErrorComponent />
  return <Spinner />
}

const MapDisplay = () => {
  return (
    <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} render={render}>
      <Map />
    </Wrapper>
  )
}

export default MapDisplay
