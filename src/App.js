import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
