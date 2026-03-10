# Sudut Kedai × Waroeng Soeroboyo Lawas

Landing page profesional untuk restoran/kafe di Cileungsi, Bogor.
Dibangun dengan [Astro](https://astro.build) — framework modern untuk static sites.

## 🔗 Live Demo
[sudutkedai.netlify.app](https://sudutkedai.netlify.app)

## 🛠️ Tech Stack
- [Astro 4](https://astro.build) — Static Site Generator
- CSS Custom Properties (no framework)
- Vanilla JavaScript
- Netlify (deployment)

## ✨ Features
- Dual brand: Sudut Kedai (modern café) + Waroeng Soeroboyo (tradisional)
- Menu data dikelola di satu file: `src/data/menu.ts`
- Interactive menu tabs (3 kategori)
- Paket buffet 3 tier (Lilium / Melati / Anggrek)
- 2 lokasi + Google Maps embed
- WhatsApp CTA langsung ke nomor bisnis
- Scroll reveal animations
- Custom cursor
- Mobile responsive
- SEO-ready (meta tags, OG tags)

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Development server (localhost:4321)
npm run dev

# Build untuk production
npm run build

# Preview hasil build
npm run preview
```

## 📁 Struktur Project

```
sudutkedai-astro/
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── MarqueeBand.astro
│   │   └── MenuSection.astro
│   ├── data/
│   │   └── menu.ts          ← Edit menu di sini
│   ├── layouts/
│   │   └── Layout.astro     ← SEO meta tags
│   ├── pages/
│   │   └── index.astro      ← Halaman utama
│   └── styles/
│       └── global.css       ← CSS variables & utilities
├── public/                  ← Static assets (foto, dll)
├── astro.config.mjs
└── netlify.toml
```

## 📝 Cara Update Menu

Semua data menu ada di **`src/data/menu.ts`**.
Edit file itu → otomatis update di seluruh halaman. Tidak perlu edit HTML.

```ts
// Contoh tambah menu baru
export const makananTematik: MenuItem[] = [
  { name: "Menu Baru", sub: "Deskripsi", price: "Rp 30.000", tag: "new" },
  // ...
];
```

## 🌐 Deploy ke Netlify

1. Push ke GitHub
2. Connect repo di [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Auto-deploy setiap push ke main ✅

## 👤 Developer
Jiku — [@jikuown](https://instagram.com/jikuown)
