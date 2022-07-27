import { useState } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react-17'

const googlMapApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const BrewMap = ({ userLocation, google, nearbyBreweries }) => {
  return (
    <div>
      {userLocation ? (
        <Map google={google} zoom={12} initialCenter={userLocation}>
          {nearbyBreweries.map((brewery) => (
            <Marker
              key={brewery.id}
              position={{
                lat: Number(brewery.latitude),
                lng: Number(brewery.longitude)
              }}
            />
          ))}
        </Map>
      ) : null}
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: googlMapApiKey
})(BrewMap)
