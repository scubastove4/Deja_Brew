import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import BeerTypes from './pages/BeerTypes'
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
          <Route path="/" element={<BeerTypes />} />
          <Route path="/" element={<BeerDetails />} />
          <Route path="/" element={<RandomBeer />} />
          <Route path="/" element={<ReviewDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
