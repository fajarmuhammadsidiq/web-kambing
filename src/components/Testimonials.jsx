import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Ahmad Fauzi",
    location: "Jakarta Selatan",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    rating: 5,
    text: "Alhamdulillah, kambing qurban yang saya pesan sangat sehat dan sesuai ekspektasi. Proses pengiriman cepat dan pelayanan sangat memuaskan!",
    date: "2 minggu yang lalu"
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    location: "Bandung",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    rating: 5,
    text: "Pesan untuk aqiqah anak, hasilnya luar biasa! Kambingnya gemuk, sehat, dan dagingnya berkualitas. Pasti akan order lagi.",
    date: "1 bulan yang lalu"
  },
  {
    id: 3,
    name: "Budi Santoso",
    location: "Surabaya",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    rating: 5,
    text: "Sudah 3 kali order di KambingHub, selalu puas! Timnya responsif, pengiriman aman, dan harga sangat kompetitif.",
    date: "3 minggu yang lalu"
  },
  {
    id: 4,
    name: "Fatimah Az-Zahra",
    location: "Yogyakarta",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
    rating: 5,
    text: "Kualitas kambing etawa yang dijual benar-benar premium. Sesuai untuk acara besar keluarga. Recommended!",
    date: "5 hari yang lalu"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerView = 3; // Desktop default

  // Auto slide every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, testimonials.length - itemsPerView);
        return (prev + 1) > maxIndex ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, testimonials.length - itemsPerView);
      return prev === 0 ? maxIndex : prev - 1;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, testimonials.length - itemsPerView);
      return (prev + 1) > maxIndex ? 0 : prev + 1;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <section id="testimoni-pelanggan" className="testimonials-section reveal">
      <div className="section-header text-center">
        <div className="badge">💬 Kata Mereka</div>
        <h2>Apa Kata Pelanggan Kami?</h2>
        <p className="section-desc">
          Ribuan pelanggan telah mempercayakan kebutuhan qurban dan aqiqah mereka kepada KambingHub
        </p>
      </div>

      <div className="testimonials-slider-container">
        {/* Navigation Arrows */}
        <button 
          className="slider-nav prev" 
          onClick={goToPrevious}
          aria-label="Testimoni sebelumnya"
        >
          ←
        </button>

        {/* Testimonials Cards */}
        <div className="testimonials-track" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p className="location">📍 {testimonial.location}</p>
                  <div className="rating">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
              <div className="testimonial-content">
                <span className="quote-icon">"</span>
                <p>{testimonial.text}</p>
              </div>
              <div className="testimonial-date">{testimonial.date}</div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          className="slider-nav next" 
          onClick={goToNext}
          aria-label="Testimoni berikutnya"
        >
          →
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="slider-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Stats Counter */}
      <div className="testimonials-stats">
        <div className="stat-box">
          <span className="stat-number animated">2,500+</span>
          <span className="stat-label">Pelanggan Puas</span>
        </div>
        <div className="stat-box">
          <span className="stat-number animated">4.9/5</span>
          <span className="stat-label">Rating Rata-rata</span>
        </div>
        <div className="stat-box">
          <span className="stat-number animated">98%</span>
          <span className="stat-label">Rekomendasi</span>
        </div>
      </div>
    </section>
  );
}
