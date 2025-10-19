import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import TVShows from './pages/TVShows/TVShows';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<TVShows />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;