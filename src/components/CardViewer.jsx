import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getRarityColor, getRarityName } from '../utilities/cardData';
import './CardViewer.css';

const CardViewer = ({ card, isOpen, onClose, onPrevious, onNext, hasPrevious, hasNext }) => {
  if (!card) return null;

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        if (hasPrevious) onPrevious();
        break;
      case 'ArrowRight':
        if (hasNext) onNext();
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, hasPrevious, hasNext]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="card-viewer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="card-viewer-modal"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <button className="close-button" onClick={onClose}>×</button>
            
            <div className="card-viewer-content">
              <div className="card-image-container">
                <img 
                  src={card.imagePath}
                  alt={card.name}
                  className="card-image-large"
                  onError={(e) => {
                    e.target.src = '/placeholder-card.png';
                    e.target.alt = 'Card image not found';
                  }}
                />
              </div>
              
              <div className="card-details">
                <h2 className="card-name">{card.name}</h2>
                <div className="card-info">
                  <div className="info-item">
                    <span className="info-label">Number:</span>
                    <span className="info-value">#{card.number}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Set:</span>
                    <span className="info-value">{card.set}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Type:</span>
                    <span className="info-value">{card.type}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Rarity:</span>
                    <span 
                      className="info-value rarity-badge"
                      style={{ 
                        backgroundColor: getRarityColor(card.rarity),
                        color: '#000'
                      }}
                    >
                      {getRarityName(card.rarity)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="navigation-controls">
              <button 
                className={`nav-button prev-button ${!hasPrevious ? 'disabled' : ''}`}
                onClick={onPrevious}
                disabled={!hasPrevious}
              >
                ← Previous
              </button>
              
              <button 
                className={`nav-button next-button ${!hasNext ? 'disabled' : ''}`}
                onClick={onNext}
                disabled={!hasNext}
              >
                Next →
              </button>
            </div>
            
            <div className="keyboard-hint">
              Use ← → arrow keys to navigate, ESC to close
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CardViewer;