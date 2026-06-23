import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <a href="#" className="logo">
          <span className="logo-icon">🐐</span>
          <span className="logo-text">Kambing<span className="accent-text">Hub</span></span>
        </a>
        
        <nav className="nav-menu">
          <a href="#" className="nav-link">Beranda</a>
          <a href="#katalog" className="nav-link">Katalog Kambing</a>
          <a href="#kalkulator" className="nav-link">Kalkulator Estimasi</a>
          <a href="#testimoni" className="nav-link">Mengapa Kami</a>
        </nav>

        <div className="header-actions">
          <a 
            href="https://wa.me/6281234567890?text=Halo%20KambingHub,%20saya%20ingin%20tanya%20mengenai%20kambing%20yang%20tersedia." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-nav"
          >
            <span className="btn-icon">💬</span> Chat Admin
          </a>
        </div>
      </div>
    </header>
  );
}
