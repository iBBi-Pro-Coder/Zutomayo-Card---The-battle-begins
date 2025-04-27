// src/App.js
import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import InfoModal from './components/InfoModal';

function App() {
  const [showGallery, setShowGallery] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const handleEnterGallery = () => {
    setShowGallery(true);
  };

  const handleOpenInfo = () => {
    setShowInfoModal(true);
  };

  const handleCloseInfo = () => {
    setShowInfoModal(false);
  };

  return (
    <div className="App">
      {!showGallery ? (
        <LandingPage 
          onEnterGallery={handleEnterGallery}
          onOpenInfo={handleOpenInfo}
        />
      ) : (
        <div className="gallery-placeholder">
          <h2>Gallery View Coming Soon!</h2>
          <button onClick={() => setShowGallery(false)}>Back to Home</button>
        </div>
      )}
      
      <InfoModal 
        isOpen={showInfoModal}
        onClose={handleCloseInfo}
      />
    </div>
  );
}

export default App;