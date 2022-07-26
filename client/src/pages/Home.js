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

  // let navigate = useNavigate()

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
      console.log(res.data.beerType)
      setSearchResults(res.data.beerType)
      setSearchQuery('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
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
          searchType === 'beerType' ? (
            <main>
              {searchResults.map((result) => (
                <BeerTypeCard key={result._id} beerType={result} />
              ))}
            </main>
          ) : (
            <main>
              {searchResults.map((result) => (
                <BeerCard key={result._id} beerType={result} />
              ))}
            </main>
          )
        ) : (
          <h2>Please Try Search Again</h2>
        )}
      </section>
    </div>
  )
}

export default Home
