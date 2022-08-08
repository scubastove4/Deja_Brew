import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import BeerTypes from './pages/BeerTypes'
import BeerTypeDetails from './pages/BeerTypeDetails'
import BeerDetails from './pages/BeerDetails'
import RandomBeer from './pages/RandomBeer'
import ReviewDetails from './pages/ReviewDetails'
import Breweries from './pages/Breweries'
import MapDisplay from './pages/MapDisplay'

import './App.css'

function App() {
  const [userLocation, setUserLocation] = useState({
    lat: '',
    lng: ''
  })

  useEffect(() => {
    const getUserLocation = async (position) => {
      await setUserLocation({
        ...userLocation,
        lat: Number(position.coords.latitude),
        lng: Number(position.coords.longitude)
      })
    }
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getUserLocation, (error) => {
          console.error(`Error = ${error.code}: ${error.message}`)
        })
      } else {
        alert('Geolocation not supported by this browser')
      }
    }

    getLocation()
  }, [])

  // geolocation help https://youtu.be/U3dLjHN0UvM and https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs

  return (
    <div className="App">
      <NavBar />
      <main id="routeMain">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/beer-types" element={<BeerTypes />} />
          <Route
            path="/beer-types/id/:beerTypeId"
            element={<BeerTypeDetails />}
          />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/beers/id/:beerId" element={<BeerDetails />} />
          <Route path="/beers/review/:reviewId" element={<ReviewDetails />} />
          <Route
            path="/breweries"
            element={<Breweries userLocation={userLocation} />}
          />
          <Route
            path="/brewery-map"
            element={<MapDisplay userLocation={userLocation} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
