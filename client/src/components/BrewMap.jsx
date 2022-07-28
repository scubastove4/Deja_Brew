import { useState } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react-17'

const googlMapApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const mapStyles = {
  margin: '0, auto',
  height: '80%',
  width: '80%'
}

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
              icon={{
                url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F185-1852741_emoji-beer-png-transparent-png.png&f=1&nofb=1',
                scaledSize: new window.google.maps.Size(40, 40)
              }}
              optimized={true}
              // mapId={'ece9434bcbd0793d'}
              style={mapStyles}
            />
          ))}
        </Map>
      ) : null}
    </div>
  )
}

//https://youtu.be/Pf7g32CwX_s

export default GoogleApiWrapper({
  apiKey: googlMapApiKey
})(BrewMap)
