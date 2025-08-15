// src/components/SearchBar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/SearchBar.css';

const SearchBar = ({ 
  searchTerm, 
  onSearchChange, 
  filters, 
  onFilterChange, 
  onClearFilters 
}) => {
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleFilterChange = (filterType, value) => {
    onFilterChange(filterType, value);
  };

  return (
    <motion.div 
      className="search-bar-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="search-section">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search cards by name, set, or description..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <div className="search-icon">🔍</div>
        </div>
      </div>

      <div className="filters-section">
        <div className="filter-group">
          <label htmlFor="set-filter" className="filter-label">Set:</label>
          <select
            id="set-filter"
            value={filters.set || ''}
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
        </div>

        <div className="filter-group">
          <label htmlFor="type-filter" className="filter-label">Type:</label>
          <select
            id="type-filter"
            value={filters.type || ''}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className="filter-select"
          >
            <option value="">All Types</option>
            <option value="C">Common</option>
            <option value="UC">Uncommon</option>
            <option value="R">Rare</option>
            <option value="SR">Super Rare</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="rarity-filter" className="filter-label">Rarity:</label>
          <select
            id="rarity-filter"
            value={filters.rarity || ''}
            onChange={(e) => handleFilterChange('rarity', e.target.value)}
            className="filter-select"
          >
            <option value="">All Rarities</option>
            <option value="N">Normal</option>
            <option value="R">Rare</option>
            <option value="SR">Super Rare</option>
            <option value="UR">Ultra Rare</option>
          </select>
        </div>

        <motion.button 
          className="clear-filters-button"
          onClick={onClearFilters}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Clear Filters
        </motion.button>
      </div>

      <div className="sort-section">
        <div className="filter-group">
          <label htmlFor="sort-filter" className="filter-label">Sort by:</label>
          <select
            id="sort-filter"
            value={filters.sortBy || 'number'}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            className="filter-select"
          >
            <option value="number">Card Number</option>
            <option value="set">Set</option>
            <option value="type">Type</option>
            <option value="rarity">Rarity</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="order-filter" className="filter-label">Order:</label>
          <select
            id="order-filter"
            value={filters.order || 'asc'}
            onChange={(e) => handleFilterChange('order', e.target.value)}
            className="filter-select"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchBar;