# Agraj Enterprise — Website

> **Industrial Painting & Protective Coating Solutions**
> *Protection. Performance. Perfection.*

A fully data-driven, multi-page marketing website for **Agraj Enterprise**, a Bhavnagar-based industrial painting and protective coating company with 7+ years of experience serving factories, warehouses, and process plants across Gujarat.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Content Management](#content-management)
- [Pages & Features](#pages--features)
- [Color Palette](#color-palette)
- [Icons](#icons)
- [Contact Form Setup](#contact-form-setup)
- [Google Maps Setup](#google-maps-setup)
- [Deployment](#deployment)
- [Customization Guide](#customization-guide)
- [Browser Support](#browser-support)
- [License](#license)

---

## Project Overview

This website is built with a **zero hardcoded values** architecture. Every piece of content — company name, phone number, service descriptions, project images, FAQ answers, safety protocols — lives in JSON files or a central `config.js`. Components and templates only contain logic and structure, never raw content strings or color hex values.

This means:
- Updating the phone number → change one line in `config.js`
- Adding a new service → add one object to `content/services.json`
- Changing the brand color → change one value in `config.js`, updates everywhere

---

## Live Demo

> 🔗 **[agrajenterprise.netlify.app](https://agrajenterprise.netlify.app)** *(update this after deployment)*

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | Tailwind CSS |
| Scripting | Vanilla JavaScript (ES6+) |
| Icons | Font Awesome 6 Free (CDN) |
| Animations | AOS — Animate On Scroll |
| Before/After Gallery | `img-comparison-slider` web component |
| Contact Form | Formspree (no backend needed) |
| Maps | Google Maps Embed API |
| Fonts | Inter — Google Fonts |
| Deployment | Netlify / Vercel / GitHub Pages |

---

## Project Structure

```
agraj-enterprise/
│
├── index.html               # Home page
├── about.html               # About Us page
├── services.html            # Services page
├── projects.html            # Projects & Gallery page
├── safety.html              # Safety Standards page
├── contact.html             # Contact page
│
├── config.js                # ⚙️  Central config — all keys, colors, contact info, nav
│
├── content/                 # 📦 All website content in JSON
│   ├── services.json        # 5 service definitions
│   ├── projects.json        # Before/after project portfolio
│   ├── clients.json         # Client names, testimonials, ratings
│   ├── safety.json          # PPE items and standards
│   ├── coatings.json        # Coating types (Epoxy, PU, Alkyd, Zinc)
│   ├── industries.json      # Industries served
│   ├── about.json           # Company story, mission, vision
│   ├── process.json         # 4-step work process
│   ├── faq.json             # Frequently asked questions
│   ├── whyus.json           # Why choose us — 4 key points
│   ├── safetypolicy.json    # Safety policy bullet points
│   ├── safetyprotocol.json  # 6-step site safety protocol
│   └── projectstats.json    # Aggregate project statistics
│
├── assets/
│   ├── images/
│   │   ├── logo.png         # Company logo
│   │   ├── og-image.jpg     # Open Graph share image
│   │   └── clients/         # Client logo images
│   ├── css/
│   │   └── style.css        # Custom styles (Tailwind extended)
│   └── js/
│       └── main.js          # Navbar, counters, accordion, filter logic
│
└── components/
    ├── navbar.html          # Reusable navbar component
    └── footer.html          # Reusable footer component
```

---

## Getting Started

### Prerequisites

- A modern web browser
- A local server (VS Code Live Server, or `npx serve`)
- A [Formspree](https://formspree.io) account (free) for the contact form

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/agraj-enterprise.git

# Navigate into the project
cd agraj-enterprise

# Serve locally (choose one)
npx serve .
# OR use VS Code Live Server extension
# OR python -m http.server 8000
```

Open your browser at `http://localhost:3000` (or whichever port your server uses).

> ⚠️ Do **not** open HTML files directly via `file://` — fetch requests for JSON files will be blocked by the browser. Always use a local server.

---

## Configuration

All site-wide settings live in **`config.js`**. Edit this file to update anything that appears across multiple pages.

```js
// config.js
export const CONFIG = {
  company: {
    name: "Agraj Enterprise",
    tagline: "We Don't Just Paint Structures — We Protect Your Assets.",
    slogan: "Protection. Performance. Perfection.",
    experience: "7+",
    logoPath: "/assets/images/logo.png",
  },
  contact: {
    person: "Shravan K. Bhirbhidiya",
    phone: "+91 78188 11818",
    phoneRaw: "917818811818",       // for tel: and wa.me links
    email: "agrajenterprise925@gmail.com",
    formspreeId: "YOUR_ID_HERE",   // ← paste your Formspree form ID
    mapEmbedUrl: "PASTE_EMBED_URL", // ← paste Google Maps embed URL
    address: { ... },
  },
  social: {
    whatsapp: "https://wa.me/917818811818",
    instagram: "",   // leave empty to hide icon
    linkedin:  "",
    facebook:  "",
  },
  colors: {
    primaryDark:  "#1A3A6B",
    primaryMid:   "#2B6CB0",
    accentOrange: "#DD6B20",
    ...
  },
  nav: {
    links: [ ... ],          // edit to add/remove nav pages
    ctaLabel: "Get a Free Quote",
    ctaHref:  "/contact.html",
  },
  stats: [ ... ],            // counters shown on Home and About
};
```

**Key rules:**
- Never paste `CONFIG.colors` hex values directly into HTML or CSS — always reference via CSS variables generated from config
- Social icons only render if the URL is non-empty
- `phoneRaw` is used for `tel:` and `wa.me` links (no spaces or `+`)

---

## Content Management

All content is stored in the `/content/` directory as JSON files. No developer needed to update text, images, or data — just edit the relevant JSON file.

### Adding a New Service

Open `content/services.json` and add a new object to the array:

```json
{
  "id": "new-service",
  "icon": "fa-solid fa-wrench",
  "title": "New Service Name",
  "shortDesc": "Short description shown on the Home page card.",
  "fullDesc": "Detailed description shown on the Services page.",
  "steps": ["Step 1", "Step 2", "Step 3"],
  "industries": ["Factories", "Warehouses"],
  "image": "/assets/images/services/new-service.jpg"
}
```

The new service card will appear automatically on both the Home page and the Services page.

### Adding a New Project

Open `content/projects.json` and add:

```json
{
  "id": "proj-007",
  "title": "Your Project Title",
  "category": "Coating",
  "location": "City, Gujarat",
  "client": "Client Name or Confidential",
  "description": "Brief description of the work done.",
  "featured": false,
  "beforeImage": "/assets/images/projects/proj-007-before.jpg",
  "afterImage": "/assets/images/projects/proj-007-after.jpg"
}
```

Set `"featured": true` to show it in the Home page before/after gallery slider.

### Adding a Client Testimonial

Open `content/clients.json` and add:

```json
{
  "id": "client-id",
  "name": "Company Name",
  "siteAddress": "Location",
  "logo": "/assets/images/clients/company-logo.png",
  "testimonial": "Their testimonial text here.",
  "rating": 5,
  "personName": "Contact Name",
  "designation": "Their Job Title"
}
```

### Updating FAQ

Open `content/faq.json` and add or edit question/answer pairs:

```json
{ "q": "Your question here?", "a": "The answer here." }
```

---

## Pages & Features

| Page | File | Key Features |
|---|---|---|
| Home | `index.html` | Hero, animated counters, services strip, before/after gallery, testimonials, CTA banner |
| About | `about.html` | Company story, mission/vision, 4-step process timeline, client list |
| Services | `services.html` | Detailed service cards, coating types tabs, industries grid, process stepper |
| Projects | `projects.html` | Filterable before/after card grid, project stats, client references |
| Safety | `safety.html` | PPE showcase, safety policy list, 6-step site protocol, compliance stats |
| Contact | `contact.html` | Contact form (Formspree), info cards, Maps embed, FAQ accordion |

### Global Features (all pages)
- ✅ Sticky responsive navbar with mobile hamburger menu
- ✅ Floating WhatsApp chat button (bottom-right)
- ✅ AOS scroll animations
- ✅ Active nav link detection per page
- ✅ SEO meta tags and Open Graph tags
- ✅ Footer with dynamic copyright year

---

## Color Palette

| Name | Hex | Usage |
|---|---|---|
| Primary Dark | `#1A3A6B` | Navbar, hero overlay, footer, dark sections |
| Primary Mid | `#2B6CB0` | CTA buttons, links, counter strip |
| Accent Orange | `#DD6B20` | Safety icons, highlights, badges |
| Danger Red | `#E53E3E` | Warnings, alerts |
| Dark Text | `#2D3748` | Headings, body text |
| Light BG | `#F7FAFC` | Alternating section backgrounds |
| White | `#FFFFFF` | Cards, containers |
| Border | `#E2E8F0` | Dividers, card borders |

All colors are defined once in `CONFIG.colors` and applied as CSS custom properties. To rebrand, update `config.js` only.

---

## Icons

This project uses **Font Awesome 6 Free** loaded via CDN:

```html
<link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
```

Icon class names are stored in JSON files (never hardcoded in HTML). Example from `services.json`:

```json
"icon": "fa-solid fa-shield-halved"
```

Components render icons dynamically:

```js
iconEl.className = service.icon;
iconEl.setAttribute('aria-hidden', 'true');
```

---

## Contact Form Setup

The contact form uses **Formspree** — no server or backend needed.

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your **Form ID** (looks like `xpzgwqrd`)
3. Open `config.js` and paste it:

```js
contact: {
  formspreeId: "xpzgwqrd",   // ← your ID here
}
```

4. The form action URL is built automatically: `https://formspree.io/f/{formspreeId}`

Formspree sends all submissions to `agrajenterprise925@gmail.com` and shows a success/error state on the form.

---

## Google Maps Setup

1. Go to [Google Maps](https://maps.google.com)
2. Search for the business address:
   `Plot no. 104, 150ft ring road, Sitaram Nagar, Ruva, Bhavnagar, Gujarat 364001`
3. Click **Share → Embed a map → Copy HTML**
4. Extract the `src="..."` URL from the iframe code
5. Paste it into `config.js`:

```js
contact: {
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=...",
}
```

---

## Deployment

### Netlify (Recommended — free)

```bash
# Option 1: Drag & drop
# Go to netlify.com → "Add new site" → drag your project folder

# Option 2: CLI
npm install -g netlify-cli
netlify deploy --prod --dir .
```

### Vercel

```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to **Settings → Pages → Source → Deploy from branch**
3. Select `main` branch and `/ (root)`
4. Your site is live at `https://yourusername.github.io/agraj-enterprise`

---

## Customization Guide

### Swap placeholder images with real photos

Replace `picsum.photos` URLs in JSON files with real image paths:

```json
"beforeImage": "/assets/images/projects/tank-restoration-before.jpg"
```

Add the image file to `/assets/images/projects/`.

### Add a new page

1. Create `newpage.html` following the structure of an existing page
2. Add it to `CONFIG.nav.links` in `config.js`:
   ```js
   { label: "New Page", href: "/newpage.html" }
   ```
3. The navbar and footer update automatically on all pages.

### Change the CTA button text

```js
// config.js
nav: {
  ctaLabel: "Request a Free Quote",   // ← change here
  ctaHref:  "/contact.html",
}
```

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile Chrome | ✅ Full |
| Mobile Safari | ✅ Full |

---

## Contact & Support

**Agraj Enterprise**
- 📞 [+91 78188 11818](tel:+917818811818)
- 📧 [agrajenterprise925@gmail.com](mailto:agrajenterprise925@gmail.com)
- 💬 [WhatsApp](https://wa.me/917818811818)
- 📍 150ft ring road, Plot no. 104, Flat no. A/408, Sitaram Nagar, Ruva, Bhavnagar, Gujarat — 364001

---

## License

This project is built exclusively for **Agraj Enterprise**. All content, branding, and design are proprietary. Not for redistribution or reuse without written permission.

---

*Built with ❤️ for Agraj Enterprise — Protecting Assets, Ensuring Durability.*