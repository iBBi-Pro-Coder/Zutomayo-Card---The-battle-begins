// src/components/CardViewer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CardViewer.css';

const CardViewer = ({ card, onClose, onPrevious, onNext, hasPrevious, hasNext }) => {
  if (!card) return null;

  return (
    <motion.div 
      className="card-viewer-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div 
        className="card-viewer-modal"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="card-viewer-content">
          <div className="card-image-section">
            <motion.div 
              className="card-display"
              initial={{ rotateY: -15 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={card.imagePath} 
                alt={card.title}
                className="card-large-image"
                onError={(e) => {
                  e.target.src = '/placeholder-card.jpg'; // Fallback image
                }}
              />
              <div className="card-glow"></div>
            </motion.div>
          </div>

          <div className="card-details-section">
            <motion.div 
              className="card-details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card-header">
                <h2 className="card-title">{card.title}</h2>
                <div className={`rarity-badge rarity-${card.rarity.toLowerCase()}`}>
                  {card.rarity}
                </div>
              </div>

              <div className="card-metadata">
                <div className="metadata-item">
                  <span className="label">Card Number:</span>
                  <span className="value">#{card.number.toString().padStart(3, '0')}</span>
                </div>
                <div className="metadata-item">
                  <span className="label">Set:</span>
                  <span className="value">{card.set}</span>
                </div>
                <div className="metadata-item">
                  <span className="label">Type:</span>
                  <span className="value">{card.type}</span>
                </div>
                <div className="metadata-item">
                  <span className="label">Rarity:</span>
                  <span className="value">{card.rarity}</span>
                </div>
              </div>

              <div className="card-description">
                <h3>Description</h3>
                <p>{card.description}</p>
              </div>

              {card.isPlaceholder && (
                <div className="placeholder-notice">
                  <p><em>This is a placeholder card. Actual card images will be loaded when available.</em></p>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        <div className="navigation-controls">
          <motion.button 
            className="nav-button prev-button"
            disabled={!hasPrevious}
            onClick={onPrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ← Previous
          </motion.button>
          
          <span className="card-position">
            Card Details
          </span>
          
          <motion.button 
            className="nav-button next-button"
            disabled={!hasNext}
            onClick={onNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Next →
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CardViewer;