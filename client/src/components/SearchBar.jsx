const SearchBar = ({
  newSearchQuery,
  changeSearchType,
  clickSearch,
  searchQuery,
  searchType
}) => {
  let buttonText = 'Pick an Option'
  if (searchType === 'beer') {
    buttonText = 'Find a Brew!'
  } else if (searchType === 'beerType') {
    buttonText = 'Find a Style!'
  }

  return (
    <form onSubmit={(e) => clickSearch(e)} id="searchForm">
      <input
        type="text"
        value={searchQuery}
        placeholder="Search Beers or Types!"
        onInput={newSearchQuery}
        id="searchBar"
      />
      <label htmlFor="beerInput">Beers</label>
      <input
        type="radio"
        id="beerInput"
        name="beers/name/"
        value="beer"
        onChange={changeSearchType}
        checked={searchType === 'beer'}
      />
      <label htmlFor="beerTypeInput">Beer Types</label>
      <input
        type="radio"
        id="beerTypeInput"
        name="beer-types/name/"
        value="beerType"
        onChange={changeSearchType}
        checked={searchType === 'beerType'}
      />
      <button type="submit" id="searchButton">
        {buttonText}
      </button>
    </form>
  )
}

export default SearchBar
