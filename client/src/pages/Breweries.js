import { useEffect, Geolocation } from 'react'

const Breweries = () => {
  useEffect(() => {
    if ('geolocation' in navigator) {
      console.log('Available')
    } else {
      console.log('Not available')
    }
  })
  return <div>Breweries</div>
}

export default Breweries
