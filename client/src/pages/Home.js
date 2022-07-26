import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <div>
      <SearchBar searchQuery={searchQuery} searchType={searchType} />
    </div>
  )
}

export default Home
