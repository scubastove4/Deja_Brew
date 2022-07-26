import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import SearchBar from '../components/SearchBar'
import DB_URL from '../global'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchType, toggleSearchType] = useState('')
  const [searchUrl, toggleSearchUrl] = useState('')

  let navigate = useNavigate()

  const newSearchQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  const changeSearchType = (e) => {
    toggleSearchType(e.target.value)
  }

  const changeSearchUrl = () => {
    if (searchType === 'beer') {
      toggleSearchUrl('beers/name/')
    } else if (searchType === 'beerType') {
      toggleSearchUrl('beer-types/name/')
    }
  }

  const clickSearch = (e) => {
    e.preventDefault()
    if (searchType === 'beer') {
      toggleSearchUrl('beers/name/')
    } else if (searchType === 'beerType') {
      toggleSearchUrl('beer-types/name/')
    }
    navigate(`${DB_URL}${searchUrl}${searchQuery}`)
  }

  return (
    <div>
      <SearchBar
        newSearchQuery={newSearchQuery}
        changeSearchType={changeSearchType}
        clickSearch={clickSearch}
        searchType={searchType}
      />
    </div>
  )
}

export default Home
