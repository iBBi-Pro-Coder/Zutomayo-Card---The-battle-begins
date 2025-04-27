// src/components/InfoModal.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/InfoModal.css';

const InfoModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="info-modal"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <button className="close-button" onClick={onClose}>×</button>
            <h2>About This Collection</h2>
            <p>Welcome to the Zutomayo Card Collection! This is a fan-made card collection featuring characters and artwork inspired by Zutomayo.</p>
            <p>Browse through different cards sorted by rarity, character, and sets.</p>
            <h3>How to use:</h3>
            <ul>
              <li>Click on "Enter Gallery" to view all cards</li>
              <li>Use filters to sort by character or set</li>
              <li>Click on any card to view it in detail</li>
              <li>Navigate between cards in the detail view</li>
            </ul>
            <p className="credits">Created with ♥ by iBBi-Pro-Coder</p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;