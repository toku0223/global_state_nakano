import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TopPage from './pages/TopPage'
import SecondPage from './pages/SecondPage'
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<TopPage />} />
          <Route exact path='/secondpage' element={<SecondPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
