# PROJECT_SPEC: Ngon Lam (หง่อนหลำ) High-Converting Restaurant Landing Page

## 1. Project Overview & Objective
* **Client / Subject:** Ngon Lam (ร้านอาหารเวียดนาม หง่อนหลำ จุฬา ซอย 9)
  * Facebook: https://www.facebook.com/ngonlamchula9
  * Location: Chula Soi 9 (Google Maps 4+ Stars, 350+ reviews, ~30 years established)
* **Goal:** High-converting, mobile-first bilingual landing page acting as a flagship portfolio piece for freelance web development services on Fastwork (targeting Standard/Premium tiers).
* **Core Conversion Funnel:** 
  1. Primary: Drive In-Restaurant Dining (Phone Call reservation + Google Maps Walk-in).
  2. Secondary: Direct Delivery orders (LINE MAN & Robinhood integration).
  3. Support / Inquiries: Facebook Messenger & LINE OA.

---

## 2. Target Audience & Positioning
1. **Local Thai Diners & Families:** Seeking authentic Vietnamese comfort food, dining atmosphere, and hassle-free phone reservations.
2. **Vietnamese Food Purists & Foodies:** Attracted by the 30-year legacy, chef's research trips to Vietnam, 12-hour simmered Phở broth, signature Nem Nướng, and fresh spring rolls.
3. **Foreign Expats & Tourists:** Looking for verified, high-rating authentic Asian food near Samyan / Chula with full English support and one-tap directions.

---

## 3. UI/UX & Information Architecture

### A. Global Layout & Navigation
* **Navbar:**
  * Logo & 30-year heritage badge ("Est. 30 Years")
  * Nav links: Menu Highlights, Heritage Story, Reviews, Location
  * **Language Switcher Toggle:** `[ TH | EN ]` (persisted via local state)
  * Desktop CTA: "โทรจองโต๊ะ (Reserve Table)" & "สั่ง Delivery"

### B. Hero Section (First Fold)
* **Visual:** High-impact hero imagery of signature simmering Phở or Nem Nướng platter.
* **Copywriting:**
  * TH: "รสชาติต้นตำรับเวียดนามแท้ ใจกลางจุฬาฯ สืบทอดความอร่อยเกือบ 30 ปี"
  * EN: "Authentic Vietnamese Flavors in Chula 9 — Perfected Over Nearly 30 Years"
* **Proof Badges:**
  * ⭐ 4.0+ Stars on Google Maps (350+ Reviews)
  * 🌿 Traditional Family Recipe & 12-hour Slow-Simmered Broth
* **Dual Action Fork (Hero CTA):**
  * Primary Button: `ทานที่ร้าน / Dine-in` (Scrolls to reservation / calls modal)
  * Secondary Outline Button: `สั่งเดลิเวอรี / Delivery` (Triggers Delivery selector)

### C. Signature Dishes (Menu Showcase)
* Highlight 4–6 core hero dishes with high-res photography, dish descriptions, and pricing:
  1. Traditional Beef/Chicken Phở (สูตรซุปเคี่ยวข้ามคืน)
  2. Authentic Nem Nướng Platter (แหนมเนืองชุดใหญ่ น้ำจิ้มสูตรลับ)
  3. Crispy Vietnamese Spring Rolls (ปอเปี๊ยะทอดเวียดนาม)
  4. Vietnamese Pork Sausage / Bánh mì specials
* Dish modal/preview showing ingredients and authentic heritage notes.

### D. The Heritage & Chef's Story
* Brief narrative on the chef's culinary journeys to Vietnam to source traditional spices and craft the balanced broth.
* Authenticity proof points, fresh daily herbs, and family dining warmth.

### E. Social Proof & Reviews
* Interactive testimonial cards displaying real Google Reviews & customer quotes.
* Live embed link to Google Maps review section.

### F. Location & Hours (Walk-in Readiness)
* Operating hours with dynamic status badge: `🟢 Open Now` / `🔴 Closed`
* Address details (Chula Soi 9, Samyan MRT proximity).
* Interactive Google Map embed + one-tap "Get Directions" button.

### G. Sticky Mobile Conversion Bar (Bottom Dock)
To prevent decision paralysis on mobile devices:
* **Left Button (60% width):** `📞 โทรจองโต๊ะ / จองผ่านไลน์` (Opens contact tray with Phone, LINE, Facebook).
* **Right Button (40% width):** `🛵 สั่ง Delivery` (Quick modal with direct links to LINE MAN & Robinhood).

---

## 4. Technical Constraints & Performance Strategy

* **Platform / Environment:** Antigravity (React / Tailwind CSS / Modern Component Stack).
* **Image Optimization Pipeline:**
  * Convert all client food photography to modern `.webp` / `.avif` formats.
  * Explicit `width` and `height` dimensions to prevent Cumulative Layout Shift (CLS).
  * Native lazy loading (`loading="lazy"`) for below-the-fold menu cards.
  * Target First Contentful Paint (FCP) < 1.5s on simulated 4G mobile.
* **Internationalization (i18n):**
  * Clean JSON dictionary structure (`th.json`, `en.json`) for seamless instantaneous language toggling without page reload.
* **SEO & Metadata:**
  * Schema.org `Restaurant` structured data (address, coordinates, opening hours, price range, cuisine type).
  * OpenGraph meta tags configured for beautiful Facebook / LINE preview cards.

---

## 5. Antigravity Implementation Checklist

- [ ] Initialize project scaffolding with Tailwind CSS and responsive layout base.
- [ ] Configure `i18n` dictionary state (`TH` default, `EN` toggle).
- [ ] Build Hero section with dual dining/delivery CTAs and rating social proof.
- [ ] Implement signature menu grid with clean image card components.
- [ ] Build interactive Bottom Dock / Sticky Action Drawer for mobile viewports.
- [ ] Integrate Google Maps iframe and instant tel/messaging links.
- [ ] Benchmark performance in Lighthouse (target 90+ Mobile Performance).