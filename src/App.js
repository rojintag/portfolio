import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './app.scss';
import Name from './components/Name';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Works from './components/Works';

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <QueryClientProvider client={queryClient}>

        <Routes>
          <Route path="/" element={<Name />} />
          <Route path="/projects" element={<Works />} />
        </Routes>
        </QueryClientProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;
