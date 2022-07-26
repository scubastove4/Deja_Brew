const SearchBar = ({ searchQuery, searchType }) => {
  let buttonText
  if (searchType === 'beer') {
    buttonText = 'Find a Brew!'
  } else if (searchType === 'beerType') {
    buttonText = 'Find a Style!'
  }

  return (
    <div>
      <form>
        <input type="text" onInput={searchQuery} />
        <input
          type="radio"
          value="beer"
          onChange={toggleSearchType}
          checked={searchType === 'beer'}
        />
        <input
          type="radio"
          value="beerType"
          onChange={toggleSearchType}
          checked={searchType === 'beer'}
        />
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  )
}

export default SearchBar
