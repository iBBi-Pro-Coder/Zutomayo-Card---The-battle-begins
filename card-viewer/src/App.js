import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TitlePage from './TitlePage';
import GameMenu from './GameMenu';  // Your existing game menu component
// Import other components

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TitlePage />} />
        <Route path="/menu" element={<GameMenu />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;