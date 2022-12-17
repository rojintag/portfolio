import './app.scss';
import Name from './components/Name';
import About from './components/About';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/pojects">Projects</Link>
          <Link to="/contact">contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Name />} />
          <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
