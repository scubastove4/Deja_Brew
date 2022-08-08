import { Wrapper } from '@googlemaps/react-wrapper'
import Map from '../components/Map'

const MapDisplay = ({ userLocation, mapApiKey }) => {
  return (
    <Wrapper apiKey={mapApiKey}>
      <Map userLocation={userLocation} />
    </Wrapper>
  )
}

export default MapDisplay
