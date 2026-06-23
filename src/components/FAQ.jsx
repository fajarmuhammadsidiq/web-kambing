import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "Bagaimana cara memesan kambing di KambingHub?",
    answer: "Anda bisa memilih kambing yang diinginkan dari katalog kami, kemudian klik tombol 'Pesan via WhatsApp'. Anda akan diarahkan ke chat WhatsApp dengan detail pesanan. Tim kami akan membantu proses selanjutnya."
  },
  {
    id: 2,
    question: "Apakah kambing sudah termasuk ongkos kirim?",
    answer: "Harga yang tertera belum termasuk ongkos kirim. Ongkir akan dihitung berdasarkan jarak pengiriman dan berat kambing. Tim kami akan memberikan estimasi biaya pengiriman sebelum konfirmasi akhir."
  },
  {
    id: 3,
    question: "Apakah kambing sudah memiliki sertifikat kesehatan?",
    answer: "Ya, semua kambing kami telah melalui pemeriksaan dokter hewan dan dilengkapi dengan surat keterangan sehat resmi. Ini menjamin kualitas dan keamanan hewan untuk qurban atau aqiqah Anda."
  },
  {
    id: 4,
    question: "Berapa lama waktu pengiriman?",
    answer: "Waktu pengiriman bervariasi tergantung lokasi. Untuk area Jabodetabek biasanya 1-2 hari kerja. Untuk luar kota dapat memakan waktu 3-5 hari kerja. Kami akan menginformasikan estimasi waktu saat pemesanan."
  },
  {
    id: 5,
    question: "Apakah ada garansi jika kambing sakit setelah diterima?",
    answer: "Kami memberikan garansi kesehatan selama 1x24 jam setelah kambing diterima. Jika terjadi kendala kesehatan, silakan hubungi tim kami untuk mendapatkan solusi terbaik."
  },
  {
    id: 6,
    question: "Bisa bayar dengan metode apa saja?",
    answer: "Kami menerima pembayaran melalui transfer bank (BCA, Mandiri, BNI), e-wallet (GoPay, OVO, Dana), atau COD untuk area tertentu. Pembayaran DP minimal 50% untuk konfirmasi pesanan."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section reveal">
      <div className="section-header text-center">
        <div className="badge">❓ FAQ</div>
        <h2>Pertanyaan yang Sering Diajukan</h2>
        <p className="section-desc">
          Temukan jawaban atas pertanyaan umum seputar layanan KambingHub
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={faq.id} 
            className={`faq-item ${openIndex === index ? 'active' : ''}`}
          >
            <button 
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span className="question-text">{faq.question}</span>
              <span className={`toggle-icon ${openIndex === index ? 'open' : ''}`}>
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            
            <div 
              className="faq-answer"
              style={{ 
                maxHeight: openIndex === index ? '500px' : '0',
                opacity: openIndex === index ? 1 : 0
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="faq-cta">
        <p>Masih punya pertanyaan lain?</p>
        <a href="https://wa.me/6281234567890" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          💬 Hubungi Kami via WhatsApp
        </a>
      </div>
    </section>
  );
}
