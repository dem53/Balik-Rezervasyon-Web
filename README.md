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


## 🌐 Çoklu Dil Sistemi

### Mevcut Diller
- 🇹🇷 **Türkçe (tr)**: Ana dil
- 🇬🇧 **İngilizce (en)**: Uluslararası ziyaretçiler için
- 🇩🇪 **Almanca (de)**: Varsayılan fallback dil
- 🇫🇷 **Fransızca (fr)**: Avrupa pazarı için
- 🇷🇺 **Rusça (rs)**: Rus turistler için
- 🇸🇦 **Arapça (sa)**: Arap turistler için


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


## 📄 Lisans

Bu proje özel mülkiyettir. Tüm hakları saklıdır.

## 📞 İletişim

- **Telefon**: +90 507 724 96 53


## 👨‍💻 Geliştirici

**Demir** tarafından geliştirilmiştir.

---

*© 2024 VIP Fishing Tours - Tüm hakları saklıdır*
