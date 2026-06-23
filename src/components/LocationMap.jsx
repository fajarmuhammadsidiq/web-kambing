import React from 'react';

export default function LocationMap() {
  // Lokasi: -6.382435308769669, 106.84989153623714
  const latitude = -6.382435308769669;
  const longitude = 106.84989153623714;
  
  // URL embed OpenStreetMap
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01},${latitude - 0.01},${longitude + 0.01},${latitude + 0.01}&layer=mapnik&marker=${latitude},${longitude}`;

  return (
    <section id="lokasi" className="location-section reveal">
      <div className="section-header text-center">
        <div className="badge">📍 Kunjungi Kami</div>
        <h2>Lokasi KambingHub</h2>
        <p className="section-desc">
          Datang langsung ke kandang kami untuk melihat kualitas kambing dan domba secara langsung.
        </p>
      </div>

      <div className="map-container">
        <iframe
          width="100%"
          height="450"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={mapUrl}
          title="Lokasi KambingHub"
          className="osm-map"
        ></iframe>
      </div>

      <div className="location-details">
        <div className="detail-card">
          <div className="detail-icon">🏠</div>
          <h3>Alamat Lengkap</h3>
          <p>Jl. Mendo Raya No. 45, Jakarta Selatan, DKI Jakarta</p>
        </div>
        <div className="detail-card">
          <div className="detail-icon">⏰</div>
          <h3>Jam Operasional</h3>
          <p>Senin - Sabtu: 08.00 - 17.00 WIB</p>
          <p>Minggu: Dengan perjanjian</p>
        </div>
        <div className="detail-card">
          <div className="detail-icon">🚗</div>
          <h3>Akses Lokasi</h3>
          <p>Mudah diakses kendaraan roda 2 dan roda 4</p>
          <p>Tersedia area parkir luas</p>
        </div>
      </div>

      <div className="map-actions">
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          🗺️ Buka di Google Maps
        </a>
        <a 
          href={`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=16/${latitude}/${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          📍 Lihat di OpenStreetMap
        </a>
      </div>
    </section>
  );
}
