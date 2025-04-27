// src/components/LandingPage.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/LandingPage.css';

const LandingPage = ({ onEnterGallery, onOpenInfo }) => {
  return (
    <div className="landing-page">
      <div className="content-container">
        <motion.h1 
          className="title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Zutomayo Card Collection
        </motion.h1>
        
        <motion.div 
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          The Battle Begins
        </motion.div>
        
        <motion.button 
          className="enter-button"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(255,255,255,0.6)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnterGallery}
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
        onClick={onOpenInfo}
      >
        i
      </motion.button>
    </div>
  );
};

export default LandingPage;