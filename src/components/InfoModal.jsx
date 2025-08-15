import { motion, AnimatePresence } from 'framer-motion';
import './InfoModal.css';

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
              <li>Use filters to sort by set, type, or rarity</li>
              <li>Use the search bar to find specific cards</li>
              <li>Click on any card to view it in detail</li>
              <li>Navigate between cards in the detail view</li>
            </ul>
            <h3>Card Information:</h3>
            <ul>
              <li><strong>Sets:</strong> Set 1 (Cards 1-104) and Set 2 (Cards 105-312)</li>
              <li><strong>Types:</strong> Character Cards (C) and Event Cards (E)</li>
              <li><strong>Rarities:</strong> Ultra Rare (UR), Super Rare (SR), Rare (R), Normal (N)</li>
              <li><strong>Total Cards:</strong> 312 unique cards</li>
            </ul>
            <p className="credits">Created with ♥ by iBBi-Pro-Coder</p>
            <p className="disclaimer">All card designs are taken from the Zutomayo website. This is a fan-made project.</p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;