import React from 'react';

export default function GoatCard({ goat, onSelect, onOrder }) {
  const formatPrice = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="goat-card">
      <div className="card-image-wrapper">
        <img src={goat.image} alt={goat.name} className="card-image" />
        <span className="breed-badge">{goat.breed}</span>
        {goat.isAvailable ? (
          <span className="status-badge available">Tersedia</span>
        ) : (
          <span className="status-badge sold">Terjual</span>
        )}
      </div>

      <div className="card-body">
        <div className="card-rating">
          {"★".repeat(Math.floor(goat.rating))}
          <span className="rating-text"> {goat.rating}</span>
        </div>
        <h3 className="card-title">{goat.name}</h3>
        
        <div className="card-specs">
          <div className="spec-tag">
            <span className="spec-icon">⚖️</span> {goat.weight} kg
          </div>
          <div className="spec-tag">
            <span className="spec-icon">📅</span> {goat.age} bln
          </div>
        </div>

        <div className="card-price-row">
          <div className="price-container">
            <span className="price-label">Harga</span>
            <span className="price-value">{formatPrice(goat.price)}</span>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <button className="btn btn-outline btn-sm card-btn" onClick={() => onSelect(goat)}>
          🔎 Detail
        </button>
        <button 
          className="btn btn-primary btn-sm card-btn" 
          disabled={!goat.isAvailable}
          onClick={() => onOrder(goat)}
        >
          🟢 Pesan via WA
        </button>
      </div>
    </div>
  );
}
