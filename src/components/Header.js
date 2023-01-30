import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, themes } from '../context/themeContext';


function Header() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <>
      <nav className='header'>
        <div>
        <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <label class="switch" onChange={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
              }}>
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
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
