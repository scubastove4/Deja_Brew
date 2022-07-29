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

import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <main id="routeMain">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/beer-types-page" element={<BeerTypes />} />
          <Route
            path="/beer-types-page/id/:beerTypeId"
            element={<BeerTypeDetails />}
          />
          <Route path="/random-beer-page" element={<RandomBeer />} />
          <Route path="/beers-page/id/:beerId" element={<BeerDetails />} />
          <Route
            path="/beers-page/review/:reviewId"
            element={<ReviewDetails />}
          />
          <Route path="/breweries-page" element={<Breweries />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
