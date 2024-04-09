import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MoviesList from './pages/MoviesList/MoviesList';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import SearchBar from './components/SearchBar/SearchBar';

import './App.scss';

function App() {

  return (
    <div className="App">
      <Router>
        <SearchBar />
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
