import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage.jsx';
import CardGrid from './components/CardGrid.jsx';
import CardViewer from './components/CardViewer.jsx';
import InfoModal from './components/InfoModal.jsx';
import './App.css';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>We're sorry, but something unexpected happened.</p>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main App Content Component
function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCard, setSelectedCard] = useState(null);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [cards, setCards] = useState([]);

  const handleEnterGallery = () => {
    navigate('/gallery');
  };

  const handleBackToMenu = () => {
    navigate('/');
    setSelectedCard(null);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseCardViewer = () => {
    setSelectedCard(null);
  };

  const handlePreviousCard = () => {
    if (cards.length > 0 && selectedCard) {
      const currentIndex = cards.findIndex(card => card.id === selectedCard.id);
      const previousIndex = currentIndex > 0 ? currentIndex - 1 : cards.length - 1;
      setSelectedCard(cards[previousIndex]);
    }
  };

  const handleNextCard = () => {
    if (cards.length > 0 && selectedCard) {
      const currentIndex = cards.findIndex(card => card.id === selectedCard.id);
      const nextIndex = currentIndex < cards.length - 1 ? currentIndex + 1 : 0;
      setSelectedCard(cards[nextIndex]);
    }
  };

  const currentCardIndex = selectedCard && cards.length > 0 
    ? cards.findIndex(card => card.id === selectedCard.id) 
    : -1;

  return (
    <div className="App">
      <ErrorBoundary>
        <Routes>
          <Route 
            path="/" 
            element={
              <LandingPage 
                onEnterGallery={handleEnterGallery}
                onOpenInfo={() => setShowInfoModal(true)}
              />
            } 
          />
          <Route 
            path="/gallery" 
            element={
              <CardGrid 
                onCardClick={handleCardClick}
                onBackToMenu={handleBackToMenu}
                onCardsLoad={setCards}
              />
            } 
          />
        </Routes>

        <AnimatePresence>
          {selectedCard && (
            <CardViewer
              card={selectedCard}
              onClose={handleCloseCardViewer}
              onPrevious={handlePreviousCard}
              onNext={handleNextCard}
              hasPrevious={cards.length > 1}
              hasNext={cards.length > 1}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showInfoModal && (
            <InfoModal
              isOpen={showInfoModal}
              onClose={() => setShowInfoModal(false)}
            />
          )}
        </AnimatePresence>
      </ErrorBoundary>
    </div>
  );
}

function App() {
  return (
    <Router basename="/Zutomayo-Card---The-battle-begins">
      <AppContent />
    </Router>
  );
}

export default App;