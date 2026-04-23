# Nexora Developers — Freelance Web Developer Portfolio

A premium, modern portfolio website built with **React + Vite + Framer Motion**.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run dev server
```bash
npm run dev
```
Open **http://localhost:5173** in your browser.

### 3. Build for production
```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 📁 Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── README.md
└── src/
    ├── main.jsx                  ← React root
    ├── App.jsx                   ← Router + AnimatePresence
    ├── index.css                 ← Global styles & CSS variables
    ├── components/
    │   ├── Navbar.jsx            ← Sticky nav, mobile hamburger
    │   ├── Footer.jsx            ← Site footer
    │   ├── PageTransition.jsx    ← Framer Motion page wrapper
    │   ├── GoldDivider.jsx       ← Decorative gold divider
    │   └── SectionLabel.jsx      ← Mono-font eyebrow labels
    └── pages/
        ├── Home.jsx              ← Hero, stats, service teasers, CTA
        ├── Services.jsx          ← Full service cards with pricing
        ├── About.jsx             ← Bio, values, skills
        ├── Work.jsx              ← Demo projects + testimonials
        └── Contact.jsx           ← WhatsApp form + call/email buttons
```

---

## 🎨 Design System

### Color Palette
| Token        | Value      | Usage                        |
|--------------|------------|------------------------------|
| `--obsidian` | `#0a0a0f`  | Main page background         |
| `--ink`      | `#0f0f1a`  | Section backgrounds          |
| `--gold`     | `#c9a84c`  | Primary accent, CTAs         |
| `--gold-light`| `#e8c96a` | Button hover state           |
| `--cream`    | `#f5f0e8`  | Primary text                 |
| `--muted`    | `#6b6b8a`  | Secondary / subdued text     |
| `--border`   | `rgba(201,168,76,0.15)` | Subtle borders |

### Typography
| Role    | Font                  | Weights         |
|---------|-----------------------|-----------------|
| Display | Cormorant Garamond    | 300, 400, 500   |
| Body    | DM Sans               | 300, 400, 500   |
| Mono    | Space Mono            | 400, 700        |

---

## ✏️ Customisation

### Update contact details
Edit `src/pages/Contact.jsx`:
```js
const PHONE = '+91 98765 43210'       // displayed phone number
const PHONE_CLEAN = '+919358383671'    // for wa.me and tel: links (no spaces/+)
const EMAIL = 'hello@aryanmehta.dev'
```

### Change your name / brand
- `index.html` — page `<title>`
- `src/components/Navbar.jsx` — logo initials (`AM`)
- `src/components/Footer.jsx` — name + tagline
- `src/pages/About.jsx` — bio content

### Add real project images
In `src/pages/Work.jsx`, replace the emoji + mock UI inside each `ProjectCard` with:
```jsx
<img src="/projects/your-image.jpg" alt="Project name"
  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
```
Put images in the `public/projects/` folder.

---

## 🌐 Deployment

### Vercel (recommended — free)
1. Push the project to GitHub
2. Go to vercel.com → Import project
3. Framework: Vite — Deploy ✓

### Netlify
```bash
npm run build
# drag-drop the dist/ folder onto netlify.com/drop
```

---

## 📦 Tech Stack
- **React 18** — UI framework
- **Vite 5** — build tool & dev server
- **React Router v6** — client-side routing
- **Framer Motion 11** — animations & page transitions
- **Lucide React** — icon library
- **Google Fonts** — Cormorant Garamond, DM Sans, Space Mono
