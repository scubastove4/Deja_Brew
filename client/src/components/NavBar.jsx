import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <h1 id="title">Déjà Brew</h1>
      <div id="linkDiv">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/random-beer">Random Beer</Link>
        <Link to="/beer-types">Beer Types</Link>
        <Link to="/brewery-map">Breweries</Link>
      </div>
    </nav>
  )
}

export default NavBar
