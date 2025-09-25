# VIP Fishing Tours - Balıkçılık Turu Web Sitesi

Türkiye'nin en güzel kıyılarında unutulmaz balıkçılık maceraları sunan profesyonel balıkçılık turu web sitesi.

## 🌊 Proje Hakkında

VIP Fishing Tours, İzmir'de %100 yakalama garantili sarıkanat orkinos avı ve diğer büyük deniz balıkları için profesyonel balıkçılık turları sunan bir web platformudur. Site, hem yeni başlayanlar hem de profesyonel balıkçılar için özel hazırlanmış turlar sunmaktadır.

## ✨ Özellikler

### 🌍 Çoklu Dil Desteği
- **6 Dil Desteği**: Türkçe, İngilizce, Almanca, Fransızca, Rusça, Arapça
- **Otomatik Dil Algılama**: Tarayıcı dil ayarlarına göre otomatik dil seçimi
- **Dinamik Dil Değiştirme**: Header'da bulunan dil seçici ile anlık dil değişimi
- **Yerel Depolama**: Seçilen dil tercihi localStorage'da saklanır

### 🎣 Balıkçılık Türleri
- **Trolling**: Yavaş hareket eden tekne ile yapay yem çekme
- **Jigging**: Metal yem ile dikey balıkçılık
- **Deep Drop Fishing**: Derin deniz balıkçılığı (200-500m)

### 📱 Modern Web Teknolojileri
- **React 19**: En son React sürümü ile geliştirilmiş
- **Vite**: Hızlı geliştirme ve build süreci
- **Tailwind CSS**: Modern ve responsive tasarım
- **React Router**: SPA (Single Page Application) yapısı
- **Axios**: HTTP istekleri için

### 🔧 Backend Özellikleri
- **Node.js & Express**: RESTful API
- **MongoDB**: Veritabanı yönetimi
- **JWT Authentication**: Güvenli kullanıcı doğrulama
- **Nodemailer**: E-posta gönderimi
- **CORS**: Cross-origin istekleri için

## 🚀 Kurulum

### Gereksinimler
- Node.js (v18 veya üzeri)
- MongoDB
- npm veya yarn

### Frontend Kurulumu
```bash
cd frontend
npm install
npm run dev
```

### Backend Kurulumu
```bash
cd backend
npm install
npm start
```

### Ortam Değişkenleri
Backend için `.env` dosyası oluşturun:
```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/vipfishing
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

## 📁 Proje Yapısı

```
vipfishingtour - www/
├── frontend/                 # React frontend uygulaması
│   ├── src/
│   │   ├── components/      # React bileşenleri
│   │   ├── pages/          # Sayfa bileşenleri
│   │   ├── locales/        # Çoklu dil dosyaları
│   │   │   ├── tr/         # Türkçe çeviriler
│   │   │   ├── en/         # İngilizce çeviriler
│   │   │   ├── de/         # Almanca çeviriler
│   │   │   ├── fr/         # Fransızca çeviriler
│   │   │   ├── rs/         # Rusça çeviriler
│   │   │   └── sa/         # Arapça çeviriler
│   │   ├── images/         # Görsel dosyalar
│   │   └── i18n.js         # i18next yapılandırması
│   └── package.json
├── backend/                 # Node.js backend API
│   ├── controllers/        # API kontrolcüleri
│   ├── models/            # MongoDB modelleri
│   ├── routes/            # API rotaları
│   ├── middleware/        # Middleware fonksiyonları
│   ├── config/            # Veritabanı yapılandırması
│   └── server.js          # Ana sunucu dosyası
└── README.md
```

## 🌐 Çoklu Dil Sistemi

### Mevcut Diller
- 🇹🇷 **Türkçe (tr)**: Ana dil
- 🇬🇧 **İngilizce (en)**: Uluslararası ziyaretçiler için
- 🇩🇪 **Almanca (de)**: Varsayılan fallback dil
- 🇫🇷 **Fransızca (fr)**: Avrupa pazarı için
- 🇷🇺 **Rusça (rs)**: Rus turistler için
- 🇸🇦 **Arapça (sa)**: Arap turistler için

### Dil Dosyası Yapısı
Her dil için ayrı JSON dosyası:
```json
{
  "menu": "Menü",
  "home": "Ana Sayfa",
  "reservation": "Rezervasyon",
  "FaqContent": {
    "questions": [...]
  }
}
```

### Kullanım
```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <h1>{t('mainTitle')}</h1>
      <button onClick={() => i18n.changeLanguage('en')}>
        English
      </button>
    </div>
  );
}
```

## 🎯 Sayfalar

### Ana Sayfalar
- **Ana Sayfa**: Hero section, balıkçılık türleri, hakkımızda
- **Hakkımızda**: Şirket bilgileri ve misyon
- **Tur Programı**: Detaylı tur programları
- **Galeri**: Balıkçılık fotoğrafları
- **SSS**: Sık sorulan sorular

### Balıkçılık Türü Sayfaları
- **Trolling**: Trolling tekniği hakkında detaylı bilgi
- **Jigging**: Jigging tekniği ve ekipmanlar
- **Deep Drop Fishing**: Derin deniz balıkçılığı

### Admin Paneli
- **Giriş**: Admin giriş sayfası
- **Panel**: Rezervasyon ve iletişim yönetimi

## 📧 API Endpoints

### Kimlik Doğrulama
- `POST /api/auth/login` - Admin girişi
- `POST /api/auth/logout` - Çıkış

### Rezervasyon
- `POST /api/reservation` - Yeni rezervasyon oluştur
- `GET /api/reservation` - Rezervasyonları listele
- `DELETE /api/reservation/:id` - Rezervasyon sil

### İletişim
- `POST /api/contact` - İletişim formu gönder
- `GET /api/contact` - İletişim mesajlarını listele

## 🎨 Tasarım Özellikleri

- **Responsive Design**: Tüm cihazlarda uyumlu
- **Modern UI**: Tailwind CSS ile şık tasarım
- **Video Backgrounds**: Hero section'da video arka planlar
- **Interactive Elements**: Hover efektleri ve animasyonlar
- **Mobile-First**: Mobil cihazlar öncelikli tasarım

## 🔒 Güvenlik

- **JWT Token**: Güvenli kimlik doğrulama
- **CORS**: Cross-origin güvenliği
- **Input Validation**: Form doğrulama
- **Environment Variables**: Hassas bilgilerin korunması

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Build dosyalarını deploy edin
```

### Backend (Heroku/Railway)
```bash
cd backend
# package.json'da start script'i ekleyin
npm start
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje özel mülkiyettir. Tüm hakları saklıdır.

## 📞 İletişim

- **Telefon**: +90 242 324 55 80
- **E-posta**: info@vipfishingtours.com
- **Website**: [vipfishingtours.com](https://vipfishingtours.com)

## 👨‍💻 Geliştirici

**Demir** tarafından geliştirilmiştir.

---

*© 2024 VIP Fishing Tours - Tüm hakları saklıdır*
