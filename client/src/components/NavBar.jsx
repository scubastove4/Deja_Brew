import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/random-beer">Random Beer</Link>
      <Link to="/beer-types">Beer Types</Link>
    </nav>
  )
}

export default NavBar
