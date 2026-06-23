# 🐐 KambingHub - Platform Jual Beli Kambing & Domba Premium

KambingHub adalah aplikasi web modern untuk pemesanan kambing dan domba berkualitas terbaik di Indonesia. Platform ini dirancang untuk memudahkan pelanggan dalam memilih, melihat detail, dan memesan hewan ternak langsung melalui WhatsApp untuk kebutuhan Qurban, Aqiqah, dan bisnis kuliner.

## ✨ Fitur Utama

- **📦 Katalog Interaktif** - Browse berbagai jenis kambing dan domba dengan filter berdasarkan breed, pencarian, dan sorting (harga, berat)
- **🔍 Detail Produk Lengkap** - Lihat informasi detail setiap hewan termasuk foto, berat, harga, dan deskripsi
- **💬 Pesan via WhatsApp** - Integrasi langsung ke WhatsApp untuk pemesanan yang cepat dan mudah
- **🧮 Kalkulator Estimasi** - Hitung estimasi kebutuhan daging kambing untuk acara Anda
- **✅ Terjamin Kualitasnya** - Informasi kesehatan, pakan premium, pengiriman aman, dan jaminan timbangan

## 🛠️ Teknologi

Proyek ini dibangun menggunakan:

- **[React 19](https://react.dev/)** - Library UI modern dengan performa optimal
- **[Vite](https://vitejs.dev/)** - Build tool yang cepat untuk development experience yang smooth
- **CSS Murni** - Styling custom tanpa framework CSS eksternal
- **ESLint** - Untuk menjaga kualitas kode

## 🚀 Cara Menjalankan

### Prasyarat

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 18 atau lebih baru) dan npm di komputer Anda.

### Instalasi

1. Clone repository ini atau download source code-nya
2. Install semua dependencies:

```bash
npm install
```

3. Jalankan server development:

```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:5173`

## 📜 Available Scripts

| Command | Deskripsi |
|---------|-----------|
| `npm run dev` | Menjalankan server development dengan hot reload |
| `npm run build` | Membangun aplikasi untuk production |
| `npm run lint` | Menjalankan ESLint untuk cek kualitas kode |
| `npm run preview` | Preview hasil build production secara lokal |

## 📁 Struktur Folder

```
web-kambing/
├── public/              # Asset statis
├── src/
│   ├── assets/         # Gambar, icon, dan asset lainnya
│   ├── components/     # Komponen React (Header, Hero, GoatCard, dll)
│   ├── data/           # Data statis (katalog kambing)
│   ├── App.jsx         # Komponen utama aplikasi
│   ├── App.css         # Styling komponen App
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point aplikasi
├── index.html          # HTML template
├── package.json        # Dependencies dan scripts
└── vite.config.js      # Konfigurasi Vite
```

## 🎯 Komponen Utama

- **Header** - Navigasi utama website
- **Hero** - Banner utama dengan call-to-action
- **FilterBar** - Filter pencarian, breed, dan sorting
- **GoatCard** - Card produk untuk setiap kambing/domba
- **GoatDetailModal** - Modal popup untuk detail produk
- **Calculator** - Kalkulator estimasi daging
- **Footer** - Informasi kontak dan navigasi footer

## 🔧 Konfigurasi WhatsApp

Untuk mengubah nomor WhatsApp tujuan pemesanan, edit file `src/App.jsx` pada variabel `WHATSAPP_NUMBER`:

```javascript
const WHATSAPP_NUMBER = '6281234567890'; // Ganti dengan nomor Anda
```

## 📝 License

Proyek ini dibuat sebagai MVP (Minimum Viable Product) untuk demonstrasi purposes.

---

**Dibuat dengan ❤️ menggunakan React & Vite**
