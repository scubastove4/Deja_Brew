const SearchBar = ({
  newSearchQuery,
  changeSearchType,
  clickSearch,
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
      <form onClick={clickSearch}>
        <input type="text" onInput={newSearchQuery} />
        <label for="beer">Beers</label>
        <input
          type="radio"
          name="beer"
          value="beer"
          onChange={changeSearchType}
          checked={searchType === 'beer'}
        />
        <label for="beerType">Beer Types</label>
        <input
          type="radio"
          name="beerType"
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
