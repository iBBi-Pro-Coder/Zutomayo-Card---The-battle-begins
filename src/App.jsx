import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import CardGrid from './components/CardGrid'
import './App.css'

function App() {
  const [selectedCard, setSelectedCard] = useState(null)

  const handleCardSelect = (card) => {
    setSelectedCard(card)
  }

  return (
    <Router basename="/Zutomayo-Card---The-battle-begins">
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/gallery" 
            element={
              <CardGrid 
                selectedCard={selectedCard}
                onCardSelect={handleCardSelect}
              />
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App