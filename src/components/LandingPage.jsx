import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import InfoModal from './InfoModal';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(false);

  const handleEnterGallery = () => {
    navigate('/gallery');
  };

  const handleOpenInfo = () => {
    setShowInfo(true);
  };

  const handleCloseInfo = () => {
    setShowInfo(false);
  };

  return (
    <div className="landing-page">
      <div className="content-container">
        <motion.div
          className="logo-container"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/holographic-logo.svg"
            alt="Zutomayo Card Collection"
            className="main-logo"
          />
        </motion.div>
        
        <motion.div 
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          The Battle Begins
        </motion.div>

        <motion.div
          className="card-count"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          312 Cards • 2 Sets • 4 Rarities
        </motion.div>
        
        <motion.button 
          className="enter-button btn"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(255,255,255,0.6)" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleEnterGallery}
        >
          Enter Gallery
        </motion.button>
      </div>
      
      <motion.button 
        className="info-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ rotate: 10 }}
        onClick={handleOpenInfo}
      >
        i
      </motion.button>

      <InfoModal 
        isOpen={showInfo}
        onClose={handleCloseInfo}
      />
    </div>
  );
};

export default LandingPage;