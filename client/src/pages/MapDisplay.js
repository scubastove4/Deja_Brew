import { Wrapper } from '@googlemaps/react-wrapper'
import Map from '../components/Map'

const MapDisplay = ({ userLocation }) => {
  return (
    <Wrapper apiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}>
      <Map userLocation={userLocation} />
    </Wrapper>
  )
}

export default MapDisplay
