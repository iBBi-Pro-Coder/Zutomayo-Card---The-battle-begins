// utilities/cardData.js
// Card data parser and utilities

// Parse card filename to extract metadata
export const parseCardFilename = (filename) => {
  // Format: XXX_SetX_Y_Z.png
  // XXX = card number (001-312)
  // SetX = set number (Set1, Set2)
  // Y = type (C = Character, E = Event)
  // Z = rarity (UR = Ultra Rare, SR = Super Rare, R = Rare, N = Normal)
  
  const match = filename.match(/(\d{3})_(Set\d)_([CE])_([URSN]+)\.png$/);
  if (!match) return null;

  const [, number, set, type, rarity] = match;
  
  return {
    id: parseInt(number),
    filename,
    number: number,
    set: set,
    type: type === 'C' ? 'Character' : 'Event',
    rarity: rarity,
    name: `${type === 'C' ? 'Character' : 'Event'} Card ${number}`,
    imagePath: `/Zutomayo-Card---The-battle-begins/Card images/${filename}`
  };
};

// Get rarity color for styling
export const getRarityColor = (rarity) => {
  const colors = {
    'UR': '#ff6b9d', // Ultra Rare - Pink
    'SR': '#ffd93d', // Super Rare - Gold
    'R': '#6bcf7f',  // Rare - Green
    'N': '#74c0fc'   // Normal - Blue
  };
  return colors[rarity] || '#ffffff';
};

// Get rarity name
export const getRarityName = (rarity) => {
  const names = {
    'UR': 'Ultra Rare',
    'SR': 'Super Rare', 
    'R': 'Rare',
    'N': 'Normal'
  };
  return names[rarity] || rarity;
};

// Generate all card data
export const generateCardData = () => {
  const cards = [];
  
  // Generate Set 1 cards (001-104)
  for (let i = 1; i <= 104; i++) {
    const number = String(i).padStart(3, '0');
    let type, rarity;
    
    // Set 1 structure based on the image list pattern
    if (i <= 8) {
      type = 'C'; rarity = 'UR';
    } else if (i <= 24) {
      type = 'C'; rarity = 'SR';
    } else if (i <= 32) {
      type = 'E'; rarity = 'SR';
    } else if (i <= 52) {
      type = 'C'; rarity = 'R';
    } else if (i <= 64) {
      type = 'E'; rarity = 'R';
    } else if (i <= 80) {
      type = 'C'; rarity = 'N';
    } else {
      type = 'E'; rarity = 'N';
    }
    
    const filename = `${number}_Set1_${type}_${rarity}.png`;
    cards.push(parseCardFilename(filename));
  }
  
  // Generate Set 2 cards (105-312) - following the same pattern structure
  for (let i = 105; i <= 312; i++) {
    const number = String(i).padStart(3, '0');
    let type, rarity;
    
    // Set 2 follows similar pattern but with different ranges
    if ((i >= 105 && i <= 112) || (i >= 209 && i <= 216)) {
      type = 'C'; rarity = 'UR';
    } else if ((i >= 113 && i <= 128) || (i >= 217 && i <= 232)) {
      type = 'C'; rarity = 'SR';
    } else if ((i >= 129 && i <= 136) || (i >= 233 && i <= 240)) {
      type = 'E'; rarity = 'SR';
    } else if ((i >= 137 && i <= 156) || (i >= 241 && i <= 260)) {
      type = 'C'; rarity = 'R';
    } else if ((i >= 157 && i <= 168) || (i >= 261 && i <= 272)) {
      type = 'E'; rarity = 'R';
    } else if ((i >= 169 && i <= 184) || (i >= 273 && i <= 288)) {
      type = 'C'; rarity = 'N';
    } else {
      type = 'E'; rarity = 'N';
    }
    
    const filename = `${number}_Set2_${type}_${rarity}.png`;
    cards.push(parseCardFilename(filename));
  }
  
  return cards.filter(card => card !== null);
};

// Filter and search utilities
export const filterCards = (cards, filters) => {
  return cards.filter(card => {
    if (filters.set && card.set !== filters.set) return false;
    if (filters.type && card.type !== filters.type) return false;
    if (filters.rarity && card.rarity !== filters.rarity) return false;
    if (filters.search && !card.name.toLowerCase().includes(filters.search.toLowerCase()) && 
        !card.number.includes(filters.search)) return false;
    return true;
  });
};

// Sort cards utility
export const sortCards = (cards, sortBy = 'number') => {
  return [...cards].sort((a, b) => {
    switch (sortBy) {
      case 'number':
        return a.id - b.id;
      case 'rarity':
        const rarityOrder = { 'UR': 4, 'SR': 3, 'R': 2, 'N': 1 };
        return rarityOrder[b.rarity] - rarityOrder[a.rarity];
      case 'type':
        return a.type.localeCompare(b.type);
      case 'set':
        return a.set.localeCompare(b.set);
      default:
        return 0;
    }
  });
};