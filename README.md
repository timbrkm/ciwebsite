# CHECK IN (C.I.) - Hagen City Skateboarding

Eine moderne, immersive Web-Applikation für den lokalen Skateshop "CHECK IN" (ehemals Concrete Infinity) in Hagen. Das Projekt kombiniert High-End Webtechnologien mit einer authentischen, roughen "Street"-Ästhetik und integriert KI-Features.

## 🛹 Projektübersicht

Diese Website dient nicht nur als Online-Shop, sondern als digitaler Hub für die Hagener Skate-Szene. Sie bietet Informationen zu Teamfahrern, Events und integriert einen interaktiven KI-Coach.

### Key Features
*   **Immersives Design:** Parallax-Effekte, Noise-Overlays und "Rough"-Ästhetik.
*   **AI Trick Coach:** Ein integrierter Chatbot (powered by Google Gemini), der als erfahrener Skater "Coach C.I." Tipps zu Tricks und Hardware gibt.
*   **Multi-Page SPA:** Vollständiges Client-Side Routing für Home, Shop, Team, Events und About.
*   **Responsive:** Mobile-First Ansatz mit Hamburger-Menü und touch-freundlichen Elementen.

---

## 🛠 Tech Stack

Das Projekt basiert auf einem modernen React-Ökosystem:

*   **Core:** React 19, TypeScript
*   **Build/Runtime:** Vite (impliziert), ES Modules
*   **Styling:** Tailwind CSS
*   **Animationen:** Framer Motion (Page Transitions, Scroll-Effekte, Hover-States)
*   **Routing:** React Router DOM (HashRouter für maximale Kompatibilität)
*   **Icons:** Lucide React
*   **AI Integration:** Google GenAI SDK (`@google/genai`) - Modell: `gemini-2.5-flash`

---

## 🎨 Design & Style Guide

Das Design ("C.I. Blackout Aesthetic") bricht bewusst mit cleanen, sterilen Webstandards und orientiert sich an Marken wie Thrasher, Supreme und DIY-Zines.

### Farbpalette
Die Farben sind in der `tailwind.config` in der `index.html` definiert:
*   **Skate Black (`#0a0a0a`):** Der primäre Hintergrund. Nicht ganz schwarz, um Kontraste weicher zu machen.
*   **Skate Accent (`#ffeb3b`):** "Caution Tape" Gelb. Für Call-to-Actions und Highlights.
*   **Skate Red (`#ff1744`):** Aggressives Rot für Sale-Tags und wichtige Badges.
*   **Concrete (`#808080`):** Für sekundäre Texte.

### Typografie
*   **Headlines:** `Anton` - Laut, fett, kondensiert. Für maximale Aufmerksamkeit.
*   **Accents:** `Permanent Marker` - Handschriftlich, DIY-Look.
*   **Body:** `Roboto Condensed` - Industriell und gut lesbar.

### Visuelle Effekte
1.  **Noise Overlay:** Ein SVG-Rauschfilter liegt über der gesamten Seite (`mix-blend-overlay`), um digitalen Elementen Textur zu verleihen.
2.  **Skew & Rotate:** Container und Texte sind oft leicht geneigt (-2deg bis -12deg), um Dynamik zu erzeugen.
3.  **Marquee:** Laufschriften ("Ticker") für News und Vibe.

---

## 🤖 AI Coach Integration

Der "Coach C.I." nutzt die Google Gemini API.
*   **System Prompt:** Die KI nimmt die Persona eines lokalen Hagner Skaters an. Sie nutzt Slang, ist motivierend, aber direkt.
*   **Kontext:** Die KI weiß, dass sie für den Shop "CHECK IN" arbeitet und referenziert lokale Gegebenheiten.

---

## 🗂 Projektstruktur

```bash
/
├── components/         # Wiederverwendbare UI-Komponenten
│   ├── Navbar.tsx      # Sticky Navigation mit Active-States
│   ├── Hero.tsx        # Parallax Startbildschirm
│   ├── AiCoach.tsx     # Chat-Interface Logik
│   ├── ProductGrid.tsx # Shop-Ansicht (Teaser & Full)
│   ├── TeamSection.tsx # Rider Profile & Video
│   ├── BrandSlider.tsx # Infinite Logo Scroll
│   └── ...
├── pages/              # Hauptansichten (Routes)
│   ├── Home.tsx        # Landing Page
│   ├── Shop.tsx        # Produktkatalog
│   ├── Team.tsx        # Team & Sponsoring
│   ├── Events.tsx      # Kalender & News
│   ├── About.tsx       # Geschichte & FAQ
│   └── Coach.tsx       # Fullscreen AI Tool
├── services/
│   └── geminiService.ts # API Kommunikation mit Google
├── App.tsx             # Routing Setup & Global Layout
├── index.html          # Global CSS, Fonts & Tailwind Config
└── metadata.json       # App Metadaten
```

---

## 📅 Changelog / Bisherige Entwicklung

1.  **Initial Setup:**
    *   Erstellung der Single-Page Struktur.
    *   Integration von Tailwind und Google Fonts.
    *   Aufbau der "Skater"-Ästhetik (Farben, Fonts).

2.  **AI Integration:**
    *   Implementierung des `GeminiService`.
    *   Bau des Chat-Interfaces mit Lade-Zuständen.

3.  **Expansion (Multi-Page):**
    *   Einrichtung von `react-router-dom`.
    *   Aufsplittung in `pages/` Ordner.
    *   Hinzufügen von `ScrollToTop` für bessere UX beim Seitenwechsel.

4.  **Rebranding "CHECK IN":**
    *   Anpassung an den realen Laden in Hagen (Adresse, Name, Vibe).
    *   Erweiterung um `About` und `Events` Seiten.
    *   "Blackout" Mode für die Navbar (bessere Lesbarkeit).

5.  **Visual Polish:**
    *   Ersetzen von Platzhaltern durch hochwertige Skateboard-Fotografie (Unsplash).
    *   Verfeinerung der Parallax-Effekte im Hero-Bereich.
    *   Hinzufügen des Brand-Sliders.

---

## 🚀 Installation & Setup

1.  Repository klonen.
2.  Abhängigkeiten installieren (`npm install`).
3.  `.env` Datei erstellen und `API_KEY` (Google Gemini) hinterlegen.
4.  Dev Server starten (`npm run dev`).

---

*Est. 2024 - Built for the Culture.*
