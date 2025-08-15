import React from 'react';
import './SearchBar.css';

const SearchBar = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedSet, 
  setSelectedSet, 
  selectedType, 
  setSelectedType, 
  selectedRarity, 
  setSelectedRarity,
  sortBy,
  setSortBy 
}) => {
  return (
    <div className="search-bar">
      <div className="search-controls">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search cards by number or name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filter-controls">
          <select 
            value={selectedSet} 
            onChange={(e) => setSelectedSet(e.target.value)}
            className="filter-select"
          >
            <option value="">All Sets</option>
            <option value="Set1">Set 1</option>
            <option value="Set2">Set 2</option>
          </select>
          
          <select 
            value={selectedType} 
            onChange={(e) => setSelectedType(e.target.value)}
            className="filter-select"
          >
            <option value="">All Types</option>
            <option value="Character">Character</option>
            <option value="Event">Event</option>
          </select>
          
          <select 
            value={selectedRarity} 
            onChange={(e) => setSelectedRarity(e.target.value)}
            className="filter-select"
          >
            <option value="">All Rarities</option>
            <option value="UR">Ultra Rare</option>
            <option value="SR">Super Rare</option>
            <option value="R">Rare</option>
            <option value="N">Normal</option>
          </select>
          
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select sort-select"
          >
            <option value="number">Sort by Number</option>
            <option value="rarity">Sort by Rarity</option>
            <option value="type">Sort by Type</option>
            <option value="set">Sort by Set</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;