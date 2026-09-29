# Ngon Lam (หง่อนหลำ) — Authentic Vietnamese Restaurant

Official high-converting landing page and digital menu for **Ngon Lam Vietnamese Restaurant** (ร้านอาหารเวียดนาม หง่อนหลำ), serving heritage Hanoi flavors at Chula Soi 9 (Samyan, Bangkok) for over 25 years.

---

## ⚡ Quick Start

This project supports both **[Bun](https://bun.sh)** (recommended for blazing fast install and builds) and standard **Node / npm**.

### Option A: Using Bun (Fastest)

```bash
# 1. Install dependencies (~50ms)
bun install

# 2. Start local development server
bun dev

# 3. Build for production
bun run build

# 4. Preview production build locally
bun run preview
```

### Option B: Using npm / Node.js

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler & Dev Server:** Vite 8
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Internationalization:** Custom dual-language context (Thai & English)
- **Deployment Ready:** Static HTML/CSS/JS export in `dist/` (deployable to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static host)

---

## 📁 Project Structure

```
├── public/               # Static assets & dishes photography
│   └── images/
│       ├── dishes/       # Optimized dish photography
│       └── logo/         # Ngon Lam branding assets
├── src/
│   ├── components/       # UI Components (Hero, Menu, Story, TV/Media, Reviews, Location, Modals)
│   ├── context/          # LanguageContext (TH/EN reactive toggle)
│   ├── data/             # Restaurant metadata, dishes database, YouTube showcase, operating hours
│   ├── locales/          # Localization strings (th.json, en.json)
│   ├── App.tsx           # Main application root
│   └── main.tsx          # App entrypoint
├── bun.lock              # Bun lockfile (reproducible installs)
├── package-lock.json     # npm lockfile
└── package.json
```
