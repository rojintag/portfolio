import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, themes } from '../context/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


function Header() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <>
      <nav className='header'>
        <div>
        <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <div class="switch" onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
              }}>
              <span
            className={darkMode ? 'hidden' : 'icon'}
          >
            <FontAwesomeIcon icon={faMoon} />
          </span>
          <span
            className={darkMode ? 'icon' : 'hidden'}
          >
            <FontAwesomeIcon icon={faSun} />
          </span>
            </div>
            )}
          </ThemeContext.Consumer>
         
        </div>
        <div>
          <Link to="/">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  )
}

export default Header
