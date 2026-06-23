import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import GoatCard from './components/GoatCard';
import GoatDetailModal from './components/GoatDetailModal';
import Calculator from './components/Calculator';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import { goatsData } from './data/goats';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('Semua');
  const [sortBy, setSortBy] = useState('default');
  const [selectedGoat, setSelectedGoat] = useState(null);

  // Phone number for WhatsApp
  const WHATSAPP_NUMBER = '6281234567890';

  // Handle WhatsApp Order Link
  const handleOrderGoat = (goat) => {
    const formattedPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(goat.price);

    const message = `Halo KambingHub, saya tertarik untuk memesan kambing berikut:\n\n` +
      `- *ID*: ${goat.id}\n` +
      `- *Nama*: ${goat.name}\n` +
      `- *Jenis*: ${goat.breed}\n` +
      `- *Bobot*: ${goat.weight} kg\n` +
      `- *Harga*: ${formattedPrice}\n\n` +
      `Apakah kambing ini masih tersedia untuk dipesan? Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Filter & Sort dynamic data
  const filteredAndSortedGoats = useMemo(() => {
    let result = [...goatsData];

    // Filter by breed
    if (selectedBreed !== 'Semua') {
      result = result.filter(goat => goat.breed === selectedBreed);
    }

    // Filter by search term
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(goat => 
        goat.name.toLowerCase().includes(term) ||
        goat.breed.toLowerCase().includes(term) ||
        goat.description.toLowerCase().includes(term)
      );
    }

    // Sorting logic
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'weight-desc') {
      result.sort((a, b) => b.weight - a.weight);
    }

    return result;
  }, [searchTerm, selectedBreed, sortBy]);

  return (
    <div className="app-layout">
      <Header />
      <Hero />
      
      {/* Catalog Section */}
      <section id="katalog" className="catalog-section-wrapper">
        <div className="section-header text-center">
          <div className="badge">🐐 Pilihan Terbaik Hari Ini</div>
          <h2>Katalog Kambing & Domba Pilihan</h2>
          <p className="section-desc">
            Pilih kambing/domba berkualitas terbaik kami yang siap dipesan langsung ke WhatsApp Anda.
          </p>
        </div>

        <FilterBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedBreed={selectedBreed}
          setSelectedBreed={setSelectedBreed}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {filteredAndSortedGoats.length > 0 ? (
          <div className="goats-grid">
            {filteredAndSortedGoats.map(goat => (
              <GoatCard 
                key={goat.id} 
                goat={goat} 
                onSelect={(g) => setSelectedGoat(g)}
                onOrder={handleOrderGoat}
              />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <span className="no-results-icon">🐐🔍</span>
            <h3>Kambing tidak ditemukan</h3>
            <p>Cobalah mengganti kata kunci pencarian Anda atau memilih kategori breed lainnya.</p>
          </div>
        )}
      </section>

      {/* Estimator Calculator */}
      <Calculator />

      {/* Testimonials Section - Enhanced */}
      <Testimonials />

      {/* FAQ Section - Enhanced */}
      <FAQ />

      {/* Why Choose Us Section */}
      <section id="testimoni" className="why-choose-us reveal">
        <div className="section-header text-center">
          <div className="badge">⭐ Keunggulan Kami</div>
          <h2>Mengapa Belanja di KambingHub?</h2>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feat-card-icon">🏥</div>
            <h3>Kesehatan Terjamin</h3>
            <p>Semua hewan mendapatkan pengawasan berkala dari dokter hewan dan memiliki surat keterangan sehat resmi.</p>
          </div>
          <div className="feature-card">
            <div className="feat-card-icon">🌾</div>
            <h3>Pakan Premium</h3>
            <p>Pakan bergizi tinggi bebas bahan kimia berbahaya menghasilkan kualitas karkas padat & rasa daging lezat.</p>
          </div>
          <div className="feature-card">
            <div className="feat-card-icon">🚚</div>
            <h3>Pengiriman Aman</h3>
            <p>Kendaraan pengiriman didesain khusus agar hewan tidak stress, lengkap dengan suplemen selama di perjalanan.</p>
          </div>
          <div className="feature-card">
            <div className="feat-card-icon">🤝</div>
            <h3>Amanah & Syar'i</h3>
            <p>Kesesuaian timbangan timbang hidup terpantau transparan dan terjamin keabsahannya untuk ibadah.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">🐐</span>
              <span>Kambing<span className="accent-text">Hub</span></span>
            </div>
            <p className="footer-desc">
              Pusat penjualan hewan ternak kambing & domba premium terpercaya se-Indonesia. Pilihan terbaik untuk kebutuhan Qurban, Aqiqah, dan bisnis kuliner Anda.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-links-col">
              <h4>Navigasi</h4>
              <a href="#">Beranda</a>
              <a href="#katalog">Katalog Kambing</a>
              <a href="#kalkulator">Kalkulator Estimasi</a>
              <a href="#testimoni">Mengapa Kami</a>
            </div>

            <div className="footer-links-col">
              <h4>Kontak Utama</h4>
              <p>📍 Jl. Mendo Raya No. 45, Jakarta Selatan</p>
              <p>📞 +62 812-3456-7890</p>
              <p>✉️ info@kambinghub.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} KambingHub MVP. Built with Premium React & CSS.</p>
        </div>
      </footer>

      {/* Detail Modal Pop-Up */}
      {selectedGoat && (
        <GoatDetailModal 
          goat={selectedGoat} 
          onClose={() => setSelectedGoat(null)}
          onOrder={handleOrderGoat}
        />
      )}
    </div>
  );
}
