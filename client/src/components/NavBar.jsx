import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/">About</Link>
      <Link to="/">Random Beer</Link>
      <Link to="/">Beer Types</Link>
    </nav>
  )
}

export default NavBar
