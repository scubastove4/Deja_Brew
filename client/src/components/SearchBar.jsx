const SearchBar = ({
  newSearchQuery,
  changeSearchType,
  clickSearch,
  searchQuery,
  searchType
}) => {
  let buttonText = 'Search'
  if (searchType === 'beer') {
    buttonText = 'Find a Brew!'
  } else if (searchType === 'beerType') {
    buttonText = 'Find a Style!'
  }

  return (
    <div>
      <form onSubmit={(e) => clickSearch(e)}>
        <input
          type="text"
          value={searchQuery}
          placeholder="Search Beers or Types!"
          onInput={newSearchQuery}
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
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  )
}

export default SearchBar
