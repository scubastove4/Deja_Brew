import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import BeerTypes from './pages/BeerTypes'
import BeerTypeDetails from './pages/BeerTypeDetails'
import BeerDetails from './pages/BeerDetails'
import RandomBeer from './pages/RandomBeer'
import ReviewDetails from './pages/ReviewDetails'

import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
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
        </Routes>
      </main>
    </div>
  )
}

export default App
