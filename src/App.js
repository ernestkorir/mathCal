import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
