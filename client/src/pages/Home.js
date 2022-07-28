import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import SearchBar from '../components/SearchBar'
import BeerTypeCard from '../components/BeerTypeCard'
import BeerCard from '../components/BeerCard'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchType, toggleSearchType] = useState('')
  const [searchUrl, toggleSearchUrl] = useState('')
  const [searchResults, setSearchResults] = useState({})
  const [searched, toggleSearched] = useState(false)

  let navigate = useNavigate()

  const newSearchQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  const changeSearchType = (e) => {
    toggleSearchType(e.target.value)
    toggleSearchUrl(e.target.name)
  }

  const clickSearch = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get(
        `http://localhost:3001/api/${searchUrl}${searchQuery}`
      )
      toggleSearched(true)
      if (searchType === 'beerType') {
        setSearchResults(res.data.beerType)
      } else if (searchType === 'beer') {
        setSearchResults(res.data.beer)
      }
      setSearchQuery('')
    } catch (error) {
      console.log(error)
    }
  }
  const showBeersByType = (beerType) => {
    navigate(`/beer-types/id/${beerType._id}`)
  }

  const showBeer = (beer) => {
    navigate(`/beers/id/${beer._id}`)
  }

  return (
    <div className="home">
      <SearchBar
        newSearchQuery={newSearchQuery}
        changeSearchType={changeSearchType}
        clickSearch={clickSearch}
        searchQuery={searchQuery}
        searchType={searchType}
        searchResults={searchResults}
      />
      <section>
        {searched ? (
          searchResults.length > 0 ? (
            searchType === 'beerType' ? (
              <main className="cardContainer">
                {searchResults.map((result) => (
                  <div key={result._id} className="card">
                    <BeerTypeCard
                      beerType={result}
                      showBeersByType={showBeersByType}
                    />
                  </div>
                ))}
              </main>
            ) : (
              <main className="cardContainer">
                {searchResults.map((result) => (
                  <div key={result._id} className="card">
                    <BeerCard beer={result} showBeer={showBeer} />
                  </div>
                ))}
              </main>
            )
          ) : (
            <h2>Please Try Search Again</h2>
          )
        ) : (
          <h2>Search for Beer or Beer Type Above</h2>
        )}
      </section>
    </div>
  )
}

export default Home
