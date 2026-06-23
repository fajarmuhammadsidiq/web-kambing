import React from 'react';

export default function GoatDetailModal({ goat, onClose, onOrder }) {
  if (!goat) return null;

  const formatPrice = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        
        <div className="modal-grid">
          <div className="modal-image-section">
            <img src={goat.image} alt={goat.name} className="modal-image" />
            <span className="modal-breed-badge">{goat.breed}</span>
          </div>

          <div className="modal-info-section">
            <span className="modal-goat-id">ID: {goat.id}</span>
            <h2 className="modal-goat-title">{goat.name}</h2>
            <div className="modal-price">{formatPrice(goat.price)}</div>
            
            <div className="modal-specs-grid">
              <div className="modal-spec-item">
                <span className="spec-label">⚖️ Bobot</span>
                <span className="spec-value">{goat.weight} kg</span>
              </div>
              <div className="modal-spec-item">
                <span className="spec-label">📅 Umur</span>
                <span className="spec-value">{goat.age} Bulan</span>
              </div>
              <div className="modal-spec-item">
                <span className="spec-label">🛡️ Kesehatan</span>
                <span className="spec-value">{goat.healthStatus}</span>
              </div>
              <div className="modal-spec-item">
                <span className="spec-label">🌾 Jenis Pakan</span>
                <span className="spec-value">{goat.feedType}</span>
              </div>
            </div>

            <div className="modal-description">
              <h3>Deskripsi Hewan:</h3>
              <p>{goat.description}</p>
            </div>

            <div className="modal-actions">
              <button 
                className="btn btn-primary btn-lg btn-block" 
                disabled={!goat.isAvailable}
                onClick={() => onOrder(goat)}
              >
                💬 Pesan & Tanya Admin Sekarang (WhatsApp)
              </button>
              <p className="modal-hint-text">
                *Anda akan diarahkan ke WhatsApp admin kami dengan pesan otomatis berisi kode kambing ini.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
