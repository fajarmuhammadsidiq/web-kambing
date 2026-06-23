import React from 'react';
import { breeds } from '../data/goats';

export default function FilterBar({ 
  searchTerm, 
  setSearchTerm, 
  selectedBreed, 
  setSelectedBreed, 
  sortBy, 
  setSortBy 
}) {
  return (
    <div className="filter-bar-container">
      <div className="search-box-wrapper">
        <span className="search-icon">🔍</span>
        <input 
          type="text" 
          placeholder="Cari kambing idaman Anda... (e.g. Etawa, Boer, Garut)" 
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter-options-row">
        <div className="breed-filters">
          {breeds.map((breed) => (
            <button
              key={breed}
              className={`filter-chip ${selectedBreed === breed ? 'active' : ''}`}
              onClick={() => setSelectedBreed(breed)}
            >
              {breed}
            </button>
          ))}
        </div>

        <div className="sort-selector">
          <label htmlFor="sort-select" className="sort-label">Urutkan:</label>
          <select 
            id="sort-select" 
            className="sort-dropdown"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Terbaru</option>
            <option value="price-asc">Harga Terendah</option>
            <option value="price-desc">Harga Tertinggi</option>
            <option value="weight-desc">Bobot Terberat</option>
          </select>
        </div>
      </div>
    </div>
  );
}
