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
    imagePath: `/src/assets/images/${filename}`,
    title: `${type} Card ${number}`,
    description: `Set ${set} - ${type} type - ${rarity} rarity`
  };
};

/**
 * Generate card data from actual card files
 * @returns {Array} Array of card objects based on actual files
 */
export const generateCardData = () => {
  // This represents the actual card files we have
  // In a real implementation, this could be loaded from a JSON file or API
  const cardFiles = [
    // Set 1 Cards
    '001_Set1_C_UR.png', '002_Set1_C_UR.png', '003_Set1_C_UR.png', '004_Set1_C_UR.png',
    '005_Set1_C_UR.png', '006_Set1_C_UR.png', '007_Set1_C_UR.png', '008_Set1_C_UR.png',
    '009_Set1_C_SR.png', '010_Set1_C_SR.png', '011_Set1_C_SR.png', '012_Set1_C_SR.png',
    '013_Set1_C_SR.png', '014_Set1_C_SR.png', '015_Set1_C_SR.png', '016_Set1_C_SR.png',
    '017_Set1_C_SR.png', '018_Set1_C_SR.png', '019_Set1_C_SR.png', '020_Set1_C_SR.png',
    '021_Set1_C_SR.png', '022_Set1_C_SR.png', '023_Set1_C_SR.png', '024_Set1_C_SR.png',
    '025_Set1_E_SR.png', '026_Set1_E_SR.png', '027_Set1_E_SR.png', '028_Set1_E_SR.png',
    '029_Set1_E_SR.png', '030_Set1_E_SR.png', '031_Set1_E_SR.png', '032_Set1_E_SR.png',
    '033_Set1_C_R.png', '034_Set1_C_R.png', '035_Set1_C_R.png', '036_Set1_C_R.png',
    '037_Set1_C_R.png', '038_Set1_C_R.png', '039_Set1_C_R.png', '040_Set1_C_R.png',
    '041_Set1_C_R.png', '042_Set1_C_R.png', '043_Set1_C_R.png', '044_Set1_C_R.png',
    '045_Set1_C_R.png', '046_Set1_C_R.png', '047_Set1_C_R.png', '048_Set1_C_R.png',
    '049_Set1_C_R.png', '050_Set1_C_R.png', '051_Set1_C_R.png', '052_Set1_C_R.png',
    '053_Set1_E_R.png', '054_Set1_E_R.png', '055_Set1_E_R.png', '056_Set1_E_R.png',
    '057_Set1_E_R.png', '058_Set1_E_R.png', '059_Set1_E_R.png', '060_Set1_E_R.png',
    '061_Set1_E_R.png', '062_Set1_E_R.png', '063_Set1_E_R.png', '064_Set1_E_R.png',
    '065_Set1_C_N.png', '066_Set1_C_N.png', '067_Set1_C_N.png', '068_Set1_C_N.png',
    '069_Set1_C_N.png', '070_Set1_C_N.png', '071_Set1_C_N.png', '072_Set1_C_N.png',
    '073_Set1_C_N.png', '074_Set1_C_N.png', '075_Set1_C_N.png', '076_Set1_C_N.png',
    '077_Set1_C_N.png', '078_Set1_C_N.png', '079_Set1_C_N.png', '080_Set1_C_N.png',
    '081_Set1_E_N.png', '082_Set1_E_N.png', '083_Set1_E_N.png', '084_Set1_E_N.png',
    '085_Set1_E_N.png', '086_Set1_E_N.png', '087_Set1_E_N.png', '088_Set1_E_N.png',
    '089_Set1_E_N.png', '090_Set1_E_N.png', '091_Set1_E_N.png', '092_Set1_E_N.png',
    '093_Set1_E_N.png', '094_Set1_E_N.png', '095_Set1_E_N.png', '096_Set1_E_N.png',
    '097_Set1_E_N.png', '098_Set1_E_N.png', '099_Set1_E_N.png', '100_Set1_E_N.png',
    '101_Set1_E_N.png', '102_Set1_E_N.png', '103_Set1_E_N.png', '104_Set1_E_N.png',
    // Set 2 Cards (continuing the pattern)
    '105_Set2_C_UR.png', '106_Set2_C_UR.png', '107_Set2_C_UR.png', '108_Set2_C_UR.png',
    '109_Set2_C_UR.png', '110_Set2_C_UR.png', '111_Set2_C_UR.png', '112_Set2_C_UR.png'
    // Add more as needed - for now showing a subset for performance
  ];

  const cards = [];
  
  cardFiles.forEach(filename => {
    const cardData = parseCardFilename(filename);
    if (cardData) {
      // Override the image path to point to the actual images folder
      cardData.imagePath = `/Card images/${filename}`;
      cards.push(cardData);
    }
  });
  
  return cards;
};

/**
 * Generate placeholder card data for development
 * Creates a smaller set for testing purposes
 * @returns {Array} Array of placeholder card objects
 */
export const generatePlaceholderCards = () => {
  const cards = [];
  const sets = ['Set1', 'Set2', 'Set3', 'Set4', 'Set5'];
  const types = ['C', 'UC', 'R', 'SR'];
  const rarities = ['N', 'R', 'SR', 'UR'];
  
  sets.forEach((set, setIndex) => {
    for (let i = 1; i <= 52; i++) {
      const number = String(i).padStart(3, '0');
      const type = types[Math.floor(Math.random() * types.length)];
      const rarity = rarities[Math.floor(Math.random() * rarities.length)];
      const filename = `${number}_${set}_${type}_${rarity}.png`;
      
      cards.push({
        id: `${set}_${number}`,
        number: i,
        set,
        type,
        rarity,
        filename,
        imagePath: `/src/assets/images/placeholder-card.png`,
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
  generateCardData,
  generatePlaceholderCards,
  filterCards,
  sortCards
};