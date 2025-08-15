// src/components/CardGrid.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { generateCardData, filterCards, sortCards } from '../utils/cardData.js';
import '../styles/CardGrid.css';

const CardGrid = ({ onCardClick, onBackToMenu, onCardsLoad }) => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    set: '',
    type: '',
    rarity: '',
    search: ''
  });

  useEffect(() => {
    // Load placeholder cards for now
    const loadCards = async () => {
      setLoading(true);
      try {
        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 500));
        const cardData = generateCardData();
        setCards(cardData);
        setFilteredCards(cardData);
        if (onCardsLoad) {
          onCardsLoad(cardData);
        }
      } catch (error) {
        console.error('Error loading cards:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCards();
  }, []);

  useEffect(() => {
    // Apply filters when filters change
    let filtered = filterCards(cards, filters);
    filtered = sortCards(filtered, 'number', 'asc');
    setFilteredCards(filtered);
  }, [cards, filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (loading) {
    return (
      <div className="card-grid-loading">
        <motion.div 
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          ⚡
        </motion.div>
        <p>Loading card collection...</p>
      </div>
    );
  }

  return (
    <div className="card-grid-container">
      <motion.header 
        className="card-grid-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button className="back-button" onClick={onBackToMenu}>
          ← Back to Menu
        </button>
        <h1>Card Collection</h1>
        <div className="card-count">
          {filteredCards.length} / {cards.length} cards
        </div>
      </motion.header>

      <motion.div 
        className="filters-section"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <input
          type="text"
          placeholder="Search cards..."
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
          className="search-input"
        />
        
        <select
          value={filters.set}
          onChange={(e) => handleFilterChange('set', e.target.value)}
          className="filter-select"
        >
          <option value="">All Sets</option>
          <option value="Set1">Set 1</option>
          <option value="Set2">Set 2</option>
          <option value="Set3">Set 3</option>
          <option value="Set4">Set 4</option>
          <option value="Set5">Set 5</option>
          <option value="Set6">Set 6</option>
        </select>

        <select
          value={filters.type}
          onChange={(e) => handleFilterChange('type', e.target.value)}
          className="filter-select"
        >
          <option value="">All Types</option>
          <option value="C">Common</option>
          <option value="UC">Uncommon</option>
          <option value="R">Rare</option>
          <option value="SR">Super Rare</option>
        </select>

        <select
          value={filters.rarity}
          onChange={(e) => handleFilterChange('rarity', e.target.value)}
          className="filter-select"
        >
          <option value="">All Rarities</option>
          <option value="N">Normal</option>
          <option value="R">Rare</option>
          <option value="SR">Super Rare</option>
          <option value="UR">Ultra Rare</option>
        </select>
      </motion.div>

      <motion.div 
        className="card-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {filteredCards.map((card, index) => (
          <motion.div
            key={card.id}
            className={`card-item rarity-${card.rarity.toLowerCase()}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: Math.min(index * 0.02, 1) // Stagger animation, max 1s delay
            }}
            whileHover={{ 
              scale: 1.05, 
              zIndex: 10,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCardClick(card)}
          >
            <div className="card-image-container">
              <img 
                src={card.imagePath} 
                alt={card.title}
                className="card-image"
                onError={(e) => {
                  e.target.src = '/placeholder-card.jpg'; // Fallback image
                }}
              />
              <div className="card-overlay">
                <div className="card-number">#{card.number.toString().padStart(3, '0')}</div>
                <div className="card-rarity">{card.rarity}</div>
              </div>
            </div>
            <div className="card-info">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.set}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredCards.length === 0 && !loading && (
        <motion.div 
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p>No cards found matching your criteria.</p>
          <button onClick={() => setFilters({ set: '', type: '', rarity: '', search: '' })}>
            Clear Filters
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default CardGrid;