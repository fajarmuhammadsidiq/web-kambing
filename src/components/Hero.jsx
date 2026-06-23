import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="badge">✨ Pilihan Terbaik untuk Qurban & Aqiqah</div>
          <h1 className="hero-title">
            Dapatkan Kambing & Domba <span className="gradient-text">Premium</span> Berkualitas Tinggi
          </h1>
          <p className="hero-subtitle">
            Penyedia hewan ternak terbaik yang dipelihara secara higienis, sehat bersertifikat, dan siap dikirim langsung ke rumah Anda dengan garansi aman sampai tujuan. Pemesanan mudah & cepat langsung terhubung ke WhatsApp.
          </p>
          <div className="hero-actions">
            <a href="#katalog" className="btn btn-primary btn-lg">
              🎯 Jelajahi Katalog
            </a>
            <a href="#kalkulator" className="btn btn-outline btn-lg">
              🧮 Hitung Estimasi
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">1,200+</span>
              <span className="stat-label">Ekor Terjual</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Sehat Bersertifikat</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.9★</span>
              <span className="stat-label">Rating Kepuasan</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-card">
            <img 
              src="https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&q=80&w=800" 
              alt="Kambing Premium" 
              className="hero-img"
            />
            <div className="hero-card-floating">
              <div className="floating-icon">⭐</div>
              <div>
                <h4>Etawa Kaligesing Super</h4>
                <p>Mulai dari Rp 4.500.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
