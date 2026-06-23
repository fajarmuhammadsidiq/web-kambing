import React, { useState } from 'react';

export default function Calculator() {
  const [purpose, setPurpose] = useState('qurban'); // qurban, aqiqah
  const [tier, setTier] = useState('medium'); // economy, medium, premium
  const [quantity, setQuantity] = useState(1);
  const [includeProcessing, setIncludeProcessing] = useState(false);

  // Pricing rates
  const basePrices = {
    qurban: {
      economy: 2500000,
      medium: 4200000,
      premium: 6800000,
    },
    aqiqah: {
      economy: 2200000, // include standard catering option
      medium: 3800000,
      premium: 5800000,
    }
  };

  const getTierDetails = () => {
    switch (tier) {
      case 'economy':
        return {
          name: 'Paket Hemat/Ekonomis',
          weight: '25-30 Kg',
          desc: 'Hewan sehat, memenuhi syarat syar\'i, bobot pas untuk ibadah qurban/aqiqah personal.'
        };
      case 'premium':
        return {
          name: 'Paket Sultan/Super Premium',
          weight: '60-80 Kg',
          desc: 'Hewan jumbo berkelas unggulan, sangat gemuk, karkas melimpah, mengesankan untuk syiar ibadah.'
        };
      case 'medium':
      default:
        return {
          name: 'Paket Medium/Standar',
          weight: '35-45 Kg',
          desc: 'Hewan ideal dengan karkas seimbang, rasio daging tinggi, pilihan paling populer.'
        };
    }
  };

  const currentPricePerUnit = basePrices[purpose][tier];
  const processingFeePerUnit = includeProcessing ? 400000 : 0;
  const totalPrice = (currentPricePerUnit + processingFeePerUnit) * quantity;

  const formatPrice = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleWhatsappSubmit = () => {
    const details = getTierDetails();
    const serviceText = includeProcessing 
      ? 'Termasuk pemotongan & pendistribusian' 
      : 'Kirim hewan hidup ke rumah';
      
    const message = `Halo KambingHub, saya ingin memesan melalui fitur kalkulator estimasi:\n\n` +
      `- *Keperluan*: ${purpose.toUpperCase()}\n` +
      `- *Paket*: ${details.name} (Est. Bobot: ${details.weight})\n` +
      `- *Jumlah*: ${quantity} Ekor\n` +
      `- *Layanan*: ${serviceText}\n` +
      `- *Total Estimasi*: ${formatPrice(totalPrice)}\n\n` +
      `Apakah paket ini bisa diproses sekarang?`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="kalkulator" className="calculator-section">
      <div className="calculator-wrapper">
        <div className="calculator-info">
          <div className="badge">🧮 Kalkulator Cerdas</div>
          <h2>Estimasi Budget Qurban & Aqiqah</h2>
          <p>
            Rencanakan ibadah Anda dengan mudah. Pilih jenis layanan, bobot hewan, dan jumlah yang diinginkan untuk mengetahui estimasi total biaya secara transparan.
          </p>

          <div className="calculator-features-list">
            <div className="calc-feat-item">
              <span className="feat-icon">✅</span>
              <div>
                <h4>100% Syar'i</h4>
                <p>Memenuhi syarat sah hewan qurban/aqiqah (cukup umur, sehat, tidak cacat).</p>
              </div>
            </div>
            <div className="calc-feat-item">
              <span className="feat-icon">🚚</span>
              <div>
                <h4>Gratis Ongkir</h4>
                <p>Pengiriman gratis untuk wilayah JABODETABEK & sekitarnya.</p>
              </div>
            </div>
            <div className="calc-feat-item">
              <span className="feat-icon">📄</span>
              <div>
                <h4>Sertifikat Resmi</h4>
                <p>Mendapatkan sertifikat kesehatan hewan dan bukti dokumentasi penyembelihan.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="calculator-box">
          <div className="calc-group">
            <label className="calc-label">1. Pilih Keperluan</label>
            <div className="calc-tabs">
              <button 
                className={`calc-tab ${purpose === 'qurban' ? 'active' : ''}`}
                onClick={() => setPurpose('qurban')}
              >
                🐏 Qurban
              </button>
              <button 
                className={`calc-tab ${purpose === 'aqiqah' ? 'active' : ''}`}
                onClick={() => setPurpose('aqiqah')}
              >
                👶 Aqiqah
              </button>
            </div>
          </div>

          <div className="calc-group">
            <label className="calc-label">2. Pilih Kelas Berat / Kualitas</label>
            <div className="calc-select-buttons">
              <button 
                className={`tier-btn ${tier === 'economy' ? 'active' : ''}`}
                onClick={() => setTier('economy')}
              >
                <h5>Ekonomis</h5>
                <span>~25-30 kg</span>
              </button>
              <button 
                className={`tier-btn ${tier === 'medium' ? 'active' : ''}`}
                onClick={() => setTier('medium')}
              >
                <h5>Medium</h5>
                <span>~35-45 kg</span>
              </button>
              <button 
                className={`tier-btn ${tier === 'premium' ? 'active' : ''}`}
                onClick={() => setTier('premium')}
              >
                <h5>Premium</h5>
                <span>~60-80 kg</span>
              </button>
            </div>
            <p className="tier-description-text">{getTierDetails().desc}</p>
          </div>

          <div className="calc-row">
            <div className="calc-group qty-group">
              <label className="calc-label" htmlFor="calc-qty">3. Jumlah (Ekor)</label>
              <div className="qty-picker">
                <button 
                  className="qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input 
                  id="calc-qty"
                  type="number" 
                  min="1" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="qty-input"
                />
                <button 
                  className="qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="calc-group processing-group">
              <label className="calc-label">4. Jasa Potong & Distribusi</label>
              <label className="switch-container">
                <input 
                  type="checkbox" 
                  checked={includeProcessing}
                  onChange={(e) => setIncludeProcessing(e.target.checked)}
                />
                <span className="slider round"></span>
                <span className="switch-text">{includeProcessing ? "Ya (Siap Saji/Salurkan)" : "Tidak (Kirim Hidup)"}</span>
              </label>
            </div>
          </div>

          <div className="calc-total-section">
            <div className="calc-total-row">
              <span>Total Estimasi Biaya:</span>
              <span className="total-price-val">{formatPrice(totalPrice)}</span>
            </div>
            {includeProcessing && (
              <p className="processing-note">
                *Sudah termasuk biaya potong, packing rapi, dan sertifikasi dokumentasi (+Rp 400.000 / ekor)
              </p>
            )}
            <button className="btn btn-primary btn-block btn-lg calc-submit-btn" onClick={handleWhatsappSubmit}>
              🟢 Pesan Paket via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
