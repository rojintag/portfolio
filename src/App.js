import './app.scss';
import Name from './components/Name';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header />
        <Routes>
          <Route path="/" element={<Name />} />
          <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
