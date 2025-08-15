// Utility to parse card filenames and generate card data
// Expected filename format: {number}_{set}_{type}_{rarity}
// Example: "001_Set1_C_UR"

/**
 * Parse card filename into structured data
 * @param {string} filename - The card filename
 * @returns {object} Parsed card data
 */
export const parseCardFilename = (filename) => {
  // Remove file extension if present
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
  
  // Split by underscore
  const parts = nameWithoutExt.split('_');
  
  if (parts.length !== 4) {
    console.warn(`Invalid filename format: ${filename}. Expected format: {number}_{set}_{type}_{rarity}`);
    return null;
  }
  
  const [number, set, type, rarity] = parts;
  
  return {
    id: `${set}_${number}`,
    number: parseInt(number, 10) || 0,
    set,
    type,
    rarity,
    filename,
    imagePath: `/assets/images/${filename}`,
    title: `${type} Card ${number}`,
    description: `Set ${set} - ${type} type - ${rarity} rarity`
  };
};

/**
 * Generate placeholder card data for development
 * Creates 6x52 = 312 placeholder cards
 * @returns {Array} Array of placeholder card objects
 */
export const generatePlaceholderCards = () => {
  const cards = [];
  const sets = ['Set1', 'Set2', 'Set3', 'Set4', 'Set5', 'Set6'];
  const types = ['C', 'UC', 'R', 'SR'];
  const rarities = ['N', 'R', 'SR', 'UR'];
  
  sets.forEach((set, setIndex) => {
    for (let i = 1; i <= 52; i++) {
      const number = String(i).padStart(3, '0');
      const type = types[Math.floor(Math.random() * types.length)];
      const rarity = rarities[Math.floor(Math.random() * rarities.length)];
      const filename = `${number}_${set}_${type}_${rarity}`;
      
      cards.push({
        id: `${set}_${number}`,
        number: i,
        set,
        type,
        rarity,
        filename,
        imagePath: `/assets/images/placeholder-card.jpg`,
        title: `${type} Card ${number}`,
        description: `Set ${set} - ${type} type - ${rarity} rarity`,
        setIndex: setIndex + 1,
        isPlaceholder: true
      });
    }
  });
  
  return cards;
};

/**
 * Filter cards by various criteria
 * @param {Array} cards - Array of card objects
 * @param {object} filters - Filter criteria
 * @returns {Array} Filtered cards
 */
export const filterCards = (cards, filters = {}) => {
  let filtered = [...cards];
  
  if (filters.set) {
    filtered = filtered.filter(card => card.set === filters.set);
  }
  
  if (filters.type) {
    filtered = filtered.filter(card => card.type === filters.type);
  }
  
  if (filters.rarity) {
    filtered = filtered.filter(card => card.rarity === filters.rarity);
  }
  
  if (filters.search) {
    const searchTerm = filters.search.toLowerCase();
    filtered = filtered.filter(card => 
      card.title.toLowerCase().includes(searchTerm) ||
      card.description.toLowerCase().includes(searchTerm) ||
      card.set.toLowerCase().includes(searchTerm)
    );
  }
  
  return filtered;
};

/**
 * Sort cards by various criteria
 * @param {Array} cards - Array of card objects
 * @param {string} sortBy - Sort criteria ('number', 'set', 'type', 'rarity')
 * @param {string} order - Sort order ('asc', 'desc')
 * @returns {Array} Sorted cards
 */
export const sortCards = (cards, sortBy = 'number', order = 'asc') => {
  const sorted = [...cards].sort((a, b) => {
    let aValue = a[sortBy];
    let bValue = b[sortBy];
    
    // Handle numeric sorting
    if (sortBy === 'number') {
      return order === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    // Handle string sorting
    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }
    
    if (order === 'asc') {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });
  
  return sorted;
};

export default {
  parseCardFilename,
  generatePlaceholderCards,
  filterCards,
  sortCards
};