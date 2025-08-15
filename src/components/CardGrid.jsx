import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';
import CardViewer from './CardViewer';
import { generateCardData, filterCards, sortCards, getRarityColor } from '../utilities/cardData';
import './CardGrid.css';

const CardGrid = () => {
  const navigate = useNavigate();
  const [cards] = useState(() => generateCardData());
  const [loading, setLoading] = useState(true);
  
  // Search and filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSet, setSelectedSet] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedRarity, setSelectedRarity] = useState('');
  const [sortBy, setSortBy] = useState('number');
  
  // Card viewer state
  const [selectedCard, setSelectedCard] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter and sort cards
  const filteredAndSortedCards = useMemo(() => {
    const filters = {
      search: searchTerm,
      set: selectedSet,
      type: selectedType,
      rarity: selectedRarity
    };
    
    const filtered = filterCards(cards, filters);
    return sortCards(filtered, sortBy);
  }, [cards, searchTerm, selectedSet, selectedType, selectedRarity, sortBy]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
  };

  const handlePreviousCard = () => {
    const currentIndex = filteredAndSortedCards.findIndex(card => card.id === selectedCard.id);
    if (currentIndex > 0) {
      setSelectedCard(filteredAndSortedCards[currentIndex - 1]);
    }
  };

  const handleNextCard = () => {
    const currentIndex = filteredAndSortedCards.findIndex(card => card.id === selectedCard.id);
    if (currentIndex < filteredAndSortedCards.length - 1) {
      setSelectedCard(filteredAndSortedCards[currentIndex + 1]);
    }
  };

  const currentIndex = selectedCard ? filteredAndSortedCards.findIndex(card => card.id === selectedCard.id) : -1;
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < filteredAndSortedCards.length - 1;

  const handleBackToHome = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        Loading card collection...
      </div>
    );
  }

  return (
    <div className="card-grid-container">
      <div className="header">
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Zutomayo Card Collection
        </motion.h1>
        
        <motion.button
          className="back-button btn"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={handleBackToHome}
        >
          ← Back to Home
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedSet={selectedSet}
          setSelectedSet={setSelectedSet}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedRarity={selectedRarity}
          setSelectedRarity={setSelectedRarity}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </motion.div>

      <motion.div 
        className="results-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Showing {filteredAndSortedCards.length} of {cards.length} cards
      </motion.div>

      <motion.div 
        className="card-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {filteredAndSortedCards.map((card, index) => (
          <motion.div
            key={card.id}
            className="card-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: Math.min(index * 0.05, 2) // Cap delay to avoid too long animations
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCardClick(card)}
          >
            <div className="card-image-container">
              <img 
                src={card.imagePath}
                alt={card.name}
                className="card-image"
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/placeholder-card.png';
                  e.target.alt = 'Card image not available';
                }}
              />
              <div 
                className="rarity-indicator"
                style={{ backgroundColor: getRarityColor(card.rarity) }}
              >
                {card.rarity}
              </div>
            </div>
            <div className="card-info">
              <div className="card-number">#{card.number}</div>
              <div className="card-type">{card.type}</div>
              <div className="card-set">{card.set}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredAndSortedCards.length === 0 && (
        <motion.div 
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3>No cards found</h3>
          <p>Try adjusting your search filters to find more cards.</p>
        </motion.div>
      )}

      <CardViewer
        card={selectedCard}
        isOpen={isViewerOpen}
        onClose={handleCloseViewer}
        onPrevious={handlePreviousCard}
        onNext={handleNextCard}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
      />
    </div>
  );
};

export default CardGrid;