import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className='header'>
        <Link to="/about">About</Link>
        <Link to="/pojects">Projects</Link>
        <Link to="/contact">contact</Link>
      </nav>
    </>
  )
}

export default Header
