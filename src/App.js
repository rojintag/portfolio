import './app.scss';
import Name from './components/Name';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header />
        <Routes>
          <Route path="/" element={<Name />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
