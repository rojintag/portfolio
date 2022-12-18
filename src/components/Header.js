import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className='header'>
        <Link to="/">About</Link>
        <Link to="/pojects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  )
}

export default Header
