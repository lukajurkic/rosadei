# Technical Documentation — RosaDei Grupa Web Presentation

This document provides comprehensive technical documentation for the RosaDei Grupa web application (`rosadei.hr`), covering system architecture, routing layers, component design, state management, technology rationale, development setup, CI/CD pipeline, automated image workflows, versioning, and future development roadmaps.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack and Rationale](#technology-stack-and-rationale)
3. [Architecture & Component Breakdown](#architecture--component-breakdown)
4. [Routing & Page Structure](#routing--page-structure)
5. [Key Components & Features](#key-components--features)
   - [Landing Hub Layer (`/`)](#landing-hub-layer-)
   - [Rosa Dei Roses & Crafts Layer (`/ruze`)](#rosa-dei-roses--crafts-layer-ruze)
   - [Coming Soon Modal & Context (`ComingSoonModal`)](#coming-soon-modal--context-comingsoonmodal)
   - [GDPR Cookie Consent & Google Analytics (`CookieConsent`)](#gdpr-cookie-consent--google-analytics-cookieconsent)
   - [Centralized Versioning & CI/CD Tagging](#centralized-versioning--cicd-tagging)
6. [Team & Leadership Directory](#team--leadership-directory)
7. [Development Environment & Setup](#development-environment--setup)
8. [Image Processing & Optimization Pipeline](#image-processing--optimization-pipeline)
9. [CI/CD Deployment Pipeline](#cicd-deployment-pipeline)
10. [Future Features & Technical Roadmap](#future-features--technical-roadmap)

---

## Project Overview

**RosaDei Grupa** (`rosadei.hr`) is a multidisciplinary family business based in Garešnica, Croatia (Obrt Za Usluge, vl. Željka Jurkić), operating across four interconnected disciplines:

1. **Ruže & Unikatne Rukotvorine (Rosa Dei)**: Handcrafted bouquets made from satin ribbons, flower boxes, everlasting rosaries from various materials, and personalized gifts.
2. **Održavanje doma i posjeda**: Grounds maintenance, horticulture, exterior landscaping, seasonal care programs, and estate upkeep.
3. **IT & Digitalna rješenja**: Full-stack web application development, scalable cloud systems, UI/UX design, and continuous technical maintenance.
4. **Administracija, planiranje i organizacija**: Business operations, project coordination, strategic planning, and administrative documentation.

The web application is engineered as a high-performance multi-page static site with Next.js 16 App Router, hosted on **GitHub Pages**, and distributed globally via **Cloudflare** for SSL/TLS encryption, edge caching, and DDoS mitigation.

- **Production URL**: [https://rosadei.hr](https://rosadei.hr)
- **Headquarters**: Đurđice Rijetković 9, 43280 Garešnica, Hrvatska
- **Owner**: Željka Jurkić (OIB: 76565059947)

---

## Technology Stack and Rationale

The project leverages modern web technologies optimized for speed, zero server runtime overhead, maximum accessibility, and visual elegance.

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Enables static HTML export (`output: 'export'`), producing static assets for `/`, `/ruze`, `/ruze/personaliziraj`, and `/ruze/kontakti-i-narudzbe`. Delivers top-tier SEO performance, fast TTFB, and zero backend maintenance. |
| **UI Library** | React 19 | Provides modern component primitives, hooks, context providers, and fast rendering. |
| **Styling** | Tailwind CSS 4 | Modern utility-first CSS framework with tailored color schemes, glassmorphic backdrops, smooth transitions, and responsive grid layouts. |
| **UI Primitives & Modals** | Radix UI (`@radix-ui/react-dialog`) | Accessible primitives powering `Dialog` (used by `ComingSoonModal`) and `Sheet` (used by mobile `Navbar`). Handles focus trapping, Escape key, and backdrop clicks. |
| **Icons** | Lucide React | Lightweight SVG icon library providing icons (`Mail`, `Phone`, `ArrowUpRight`, `ArrowRight`, `Sparkles`, `Clock`, `Menu`, `X`, `Check`). |
| **Image Engine** | Sharp | High-performance image processor in `scripts/process-images.mjs` for batch WebP conversion and automated file normalization. |
| **Hosting** | GitHub Pages | Reliable static hosting directly linked to the GitHub repository. |
| **CDN & DNS** | Cloudflare | Provides edge caching, automatic HTTPS/SSL, HTTP/2 & HTTP/3 support, and custom domain proxying (`rosadei.hr`). |

---

## Architecture & Component Breakdown

The codebase is organized into modular project directories separating the multidisciplinary landing layer (`projects/landing/`) from the specialized craft boutique layer (`projects/ruze/`):

```
rosadei/
├── .github/
│   └── workflows/
│       ├── ci.yml                 # PR build validation workflow
│       └── deploy.yml             # GitHub Pages deployment workflow
├── app/
│   ├── globals.css                # Custom styling, fonts, and theme tokens
│   ├── layout.tsx                 # RootLayout with ComingSoonProvider, fonts, analytics
│   ├── page.tsx                   # Main Landing Hub (RosaDei Grupa)
│   └── ruze/
│       ├── layout.tsx             # Ruže Layout (canvas styling, RuzeHeader, RuzeFooter)
│       ├── page.tsx               # Satin Roses & Bouquets Catalog
│       ├── personaliziraj/
│       │   └── page.tsx           # Customization subpage (CustomizationOptions, CTA)
│       └── kontakti-i-narudzbe/
│           └── page.tsx           # Ordering & Contact subpage (OrderingJourney, ContactSection)
├── projects/
│   ├── landing/                   # Project: Landing Portal / Hub
│   │   ├── context/
│   │   │   └── LanguageContext.tsx # Multi-language provider with auto-detect & persistence
│   │   ├── translations.ts        # Comprehensive HR/EN dictionaries for landing page
│   │   └── components/
│   │       ├── AboutOverview.tsx  # Editorial full-width statement („Napravljeno da traje”)
│   │       ├── BrandMark.tsx      # RosaDei Grupa logo & typography mark
│   │       ├── DivisionsShowcase.tsx # 3-division showcase with ComingSoon triggers
│   │       ├── Hero.tsx           # Multidisciplinary hero banner
│   │       ├── LanguageToggle.tsx # Segmented HR/EN toggle pill
│   │       ├── Leadership.tsx     # Team section (Upravljanje & Vodstvo) with 3 contacts
│   │       ├── Navbar.tsx         # Main sticky navigation with LanguageToggle & mobile Sheet
│   │       └── footer.tsx         # Landing footer with ComingSoon triggers & version
│   └── ruze/                      # Project: Satin Roses & Bouquets
│       └── components/
│           ├── header.tsx         # Ruže navigation header
│           ├── footer.tsx         # Ruže footer (RuzeFooter) & ContactSection
│           ├── hero-section.tsx   # Ruže hero banner & gallery trigger
│           ├── category-galleries.tsx # Ruže category collections container
│           ├── category-slideshow.tsx # Ruže click-to-advance slideshow
│           ├── customization-options.tsx # Ruže customization drawer
│           ├── gallery-modal.tsx  # Ruže fullscreen image gallery
│           ├── order-cta-banner.tsx # Ruže order banner
│           ├── ordering-journey.tsx # Ruže 3-step order process
│           ├── personalize-cta-banner.tsx # Ruže personalization banner
│           └── rosa-marks.tsx     # Ruže SVG marks & icons
├── components/
│   ├── ComingSoonModal.tsx        # Reusable coming soon popup with context & hook
│   ├── CookieConsent.tsx          # GDPR Cookie Consent banner with dynamic GA4 loader
│   └── ui/
│       ├── button.tsx             # Reusable button with variants (corporate, corporateOutline, ghost)
│       ├── dialog.tsx             # Radix Dialog primitive component
│       └── sheet.tsx              # Radix Sheet mobile menu primitive
├── docs/
│   ├── Documentation.md           # Master technical documentation
│   ├── AGENTS.md                  # Next.js agent rules & configuration notes
│   ├── CLAUDE.md                  # Assistant guidance link
│   ├── LOVABLE_INTEGRATION_GUIDE.md # Guide for generating & merging Lovable.dev designs
│   └── V0_INTEGRATION_GUIDE.md    # Guide for generating & merging v0 by Vercel designs
├── lib/
│   ├── images.ts                  # Dynamic filesystem image loader and category scanner
│   ├── utils.ts                   # Tailwind cn() utility function
│   └── version.ts                 # Centralized APP_VERSION constant
├── public/
│   ├── images/
│   │   ├── landing/               # High-res photography for landing divisions
│   │   └── roses/                 # Product and customization images organized by category
│   ├── icon_black.webp
│   ├── icon_white.webp
│   └── rosadei_logo_white.webp
├── scripts/
│   └── process-images.mjs         # Image optimization and standardized naming script
├── next.config.mjs                # Next.js configuration (static export enabled)
├── package.json                   # Node.js dependencies and scripts
└── tsconfig.json                  # TypeScript configuration
```

---

## Routing & Page Structure

1. **`app/page.tsx` (`/`)**:
   - The primary gateway for **RosaDei Grupa**.
   - Contains `Navbar`, `Hero`, `DivisionsShowcase`, `AboutOverview`, `Leadership`, and `Footer`.

2. **`app/ruze/page.tsx` (`/ruze`)**:
   - Dedicated portal for **Ruže & Unikatne Rukotvorine**.
   - Contains `HeroSection`, `CategoryGalleries` (with interactive slideshows for Buketi, Krunice, Box Buketi, Paketi, Kopče i mašne, Reveri), `PersonalizeCtaBanner`, and `OrderCtaBanner`.

3. **`app/ruze/personaliziraj/page.tsx` (`/ruze/personaliziraj`)**:
   - Interactive customization catalog (`CustomizationOptions`) showcasing options for additions (*Dodatci*), ribbons (*Boje traka*), paper (*Papir za zamatanje*), and gift boxes (*Box kutije*).

4. **`app/ruze/kontakti-i-narudzbe/page.tsx` (`/ruze/kontakti-i-narudzbe`)**:
   - Step-by-step ordering workflow (`OrderingJourney`) and official contact details (`ContactSection`).

---

## Key Components & Features

### Landing Hub Layer (`/`)

- **`Navbar` (`projects/landing/components/Navbar.tsx`)**:
  - Sticky glassmorphic navigation with links to `Djelatnosti (#divisions)`, `O nama (#about)`, and `Kontakti (#contact)`.
  - Includes a mobile sheet drawer for small screens.
- **`Hero` (`projects/landing/components/Hero.tsx`)**:
  - Highlights *„Različite discipline. Jedinstven standard rada.”* and guides visitors to explore divisions or learn about the group's work.
- **`DivisionsShowcase` (`projects/landing/components/DivisionsShowcase.tsx`)**:
  - Displays all 4 operational branches with capabilities and photography.
  - Division 1 (*Ruže & Unikatne Rukotvorine*) links directly to `/ruze`.
  - Divisions 2, 3, and 4 (*Održavanje doma i posjeda*, *IT & Digitalna rješenja*, *Administracija, planiranje i organizacija*) trigger the `ComingSoonModal`.
  - Includes updated capability: *„Ručno rađene krunice od različitih materijala”*.
- **`AboutOverview` (`projects/landing/components/AboutOverview.tsx`)**:
  - Clean full-width editorial statement: *„Napravljeno da traje za nas nije samo marketinška fraza. To je mjerilo koje primjenjujemo na svaki predmet, prostor i sustav koji stvaramo.”*
- **`Leadership` (`projects/landing/components/Leadership.tsx`)**:
  - Section heading: *„Upravljanje & Vodstvo”* in a single line.
  - Grid of 4 cards without image placeholders, featuring names, roles, areas of responsibility, detailed bios, and direct contact details (email with pre-filled subject lines, telephone, and LinkedIn for Luka Jurkić).
- **`Footer` (`projects/landing/components/footer.tsx`)**:
  - Centered 5-column layout without legacy office columns.
  - Links under *Održavanje*, *Digitalno*, and *Administracija* open the `ComingSoonModal`.
  - Bottom bar displays copyright, centralized version tag (`APP_VERSION`), and interactive modal links for *Cjenik*, *Privatnost*, and *Uvjeti poslovanja*.

---

### Rosa Dei Roses & Crafts Layer (`/ruze`)

- **`RuzeHeader` (`projects/ruze/components/header.tsx`)**:
  - Artisan navigation header with official branding, cart/inquiry links, and active page highlighting.
- **`HeroSection` & `GalleryModal` (`projects/ruze/components/hero-section.tsx`, `gallery-modal.tsx`)**:
  - Fullscreen modal opening a randomized 30-image 4:3 grid with lightbox viewer and keyboard navigation.
- **`CategoryGalleries` & `CategorySlideshow` (`projects/ruze/components/category-galleries.tsx`, `category-slideshow.tsx`)**:
  - Multi-category slideshows dynamically loaded via `lib/images.ts`.
- **`RuzeFooter` (`projects/ruze/components/footer.tsx`)**:
  - Matches the structure of the landing footer while retaining the rose color palette and typography.
  - Displays `© 2026 RosaDei Grupa. Sva prava pridržana.`, `APP_VERSION`, `Cjenik`, `Privatnost`, and `Uvjeti poslovanja`.

---

### Coming Soon Modal & Context (`ComingSoonModal`)

A versatile, accessible popup modal that builds anticipation and directs users to contact channels for upcoming sections.

- **Component**: [ComingSoonModal.tsx](file:///e:/RosaDei%20Web/components/ComingSoonModal.tsx)
- **Context Provider**: `ComingSoonProvider` wrapped globally in [app/layout.tsx](file:///e:/RosaDei%20Web/app/layout.tsx).
- **Hook**: `useComingSoonModal()`

#### Usage Example:
```tsx
import { useComingSoonModal } from "@/components/ComingSoonModal";

export function MyComponent() {
  const { openComingSoon } = useComingSoonModal();

  return (
    <button
      type="button"
      onClick={() =>
        openComingSoon({
          title: "Naziv sekcije",
          subtitle: "Podnaslov ili djelatnost",
          description: "Opcionalni prilagođeni opis...",
          contactEmail: "rosadeihr@gmail.com",
        })
      }
    >
      Saznajte više
    </button>
  );
}
```

- **Features**:
  - Closes on top-right **X**, clicking the **backdrop**, pressing **Escape**, or clicking the *„Pričekat ću, zatvori”* button.
  - Animated pulsing status badge: `✦ U pripremi • Uskoro dostupno`.
  - Direct inquiry callout box with a primary button linking to `#contact` or generating a pre-filled `mailto:` when `contactEmail` is passed.

---

### GDPR Cookie Consent & Google Analytics (`CookieConsent`)

The web application implements a fully GDPR-compliant, privacy-first Cookie Consent solution coupled with Google Analytics (GA4: `G-EZWYTM74ZX`):

- **Component**: [components/CookieConsent.tsx](file:///e:/RosaDei%20Web/components/CookieConsent.tsx)
- **Standalone Vanilla Template**: [public/cookie-consent-vanilla.html](file:///e:/RosaDei%20Web/public/cookie-consent-vanilla.html)

#### Privacy & Compliance Rules
1. **Zero Pre-Consent Tracking**: No tracking cookies or external scripts (`googletagmanager.com/gtag/js`) are loaded or executed prior to affirmative consent.
2. **Clear Equal Choice**: Users are provided equal prominence for `Prihvati` (Accept) and `Odbij` (Decline).
3. **Local Persistence**: User preference is stored in `localStorage` under `cookie_consent` (`accepted` | `declined`). The banner is never shown again on subsequent visits unless reset.
4. **Conditional Dynamic Loading**:
   - `accepted`: Dynamically injects the `gtag.js` script with `anonymize_ip: true` and configures `G-EZWYTM74ZX`.
   - `declined`: Tracking is strictly blocked and the official GA disable flag `window['ga-disable-G-EZWYTM74ZX'] = true` is set.
5. **Revocability**: Users can reopen and change their consent preferences anytime by clicking **„Kolačići”** in either footer or calling `window.openCookieConsent()`.

---

### Centralized Versioning & CI/CD Tagging

To allow easy version bumping and automated git tagging in deployment pipelines, the version string is isolated in a single configuration file:

- **File**: [lib/version.ts](file:///e:/RosaDei%20Web/lib/version.ts)
```ts
export const APP_VERSION = "v2.0.1";
```

- Used directly in both [projects/landing/components/footer.tsx](file:///e:/RosaDei%20Web/projects/landing/components/footer.tsx) and [projects/ruze/components/footer.tsx](file:///e:/RosaDei%20Web/projects/ruze/components/footer.tsx).
- In automated CI/CD pipelines, release scripts can update this constant or derive it from the latest git tag.

---

## Team & Leadership Directory

The *„Upravljanje & Vodstvo”* section showcases the 4 key persons responsible for business operations, craft production, field services, and technology infrastructure:

| Ime i Prezime | Funkcija (Uloga) | Nadležnost | Kontakt e-mail | Telefon | LinkedIn |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Željka Jurkić** | Vlasnica obrta | Upravljanje poslovanjem & RosaDei ruže | `rosadeihr@gmail.com`<br>*(Predmet: Upit za bukete i krunice)* | `098 185 7755` | — |
| **Ana Jurkić** | Kreativna suradnica | Ručna izrada & promocija | `rosadeihr@gmail.com`<br>*(Predmet: Upit za bukete i krunice)* | `098 185 7755` | — |
| **Zoran Jurkić** | Voditelj terenskih radova | Održavanje okućnica | `rosadeihr@gmail.com`<br>*(Predmet: Upit za odrzavanje)* | `098 199 2888` | — |
| **Luka Jurkić** | IT razvoj & administracija | Digitalni sustavi & organizacija | `lukajurkic1@gmail.com` | `099 579 2662` | [Profil](https://www.linkedin.com/in/luka-jurki%C4%87-496381327/) |

---

## Development Environment & Setup

### Prerequisites

- **Node.js**: Version 20.x or higher (LTS release recommended).
- **Package Manager**: `npm` (v10+).

### Installation & Local Run

```bash
# 1. Clone repository
git clone https://github.com/lukajurkic/rosadei.git
cd rosadei

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Type check and build static production export
npm run build
```
Static production output will be generated in `./out`.

---

## Image Processing & Optimization Pipeline

The project includes automated image discovery at build/runtime and a script (`scripts/process-images.mjs`) powered by `sharp` for batch image optimization and standardized naming.

### Supported Formats & Naming Standards

- **Supported Formats**: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`, `.tiff`, `.bmp`, `.heic`, `.heif`.
- **Image Conversion**: Converts all raw images to lightweight WebP format (`quality: 82`).
- **Naming Pattern**:
  - Main categories: `bouquets_1.webp`, `rosaries_1.webp`, `box_bouquets_1.webp`, `gallery_1.webp`, `wedding_lapels_1.webp`, etc.
  - Nested subfolders: `customization-additions_1.webp`, `customization-boxes_1.webp`, etc.

### Automated Image Discovery

Next.js Server Components dynamically scan the subfolders in `/public/images/roses/` at build time using `lib/images.ts`.
- **Zero code changes needed**: Source code files are never modified when images are added or removed.

### How to Add New Images

1. Place raw photos (JPEG, PNG, WebP, etc.) inside the target directory:
   - `public/images/roses/bouquets/`
   - `public/images/roses/rosaries/`
   - `public/images/roses/box_bouquets/`
   - `public/images/roses/combo/`
   - `public/images/roses/hair_clip_and_bow/`
   - `public/images/roses/wedding_lapels/`
   - `public/images/roses/gallery/`
   - `public/images/roses/customization/<additions|boxes|ribbons|decorative_paper>/`
2. Run the naming & optimization script:
   ```bash
   npm run process-images
   ```
3. The script optimizes each image to WebP format, numbers them sequentially, and removes raw originals.

---

## CI/CD Deployment Pipeline

1. **Continuous Integration (`.github/workflows/ci.yml`)**:
   - Triggered on PRs targeting `main`.
   - Runs `npm ci` and `npm run build` to validate TypeScript and static compilation.

2. **Continuous Deployment (`.github/workflows/deploy.yml`)**:
   - Triggered on push to `main`.
   - Builds static export `./out` and deploys directly to **GitHub Pages**.

3. **Cloudflare CDN**:
   - Manages SSL/TLS for `rosadei.hr` and proxies traffic to GitHub Pages.

---

## Future Features & Technical Roadmap

1. **Automated Pipeline Git Tagging**:
   - Integrate GitHub Actions release workflow reading `APP_VERSION` from `lib/version.ts` and generating release tags automatically.
2. **Dedicated Division Subpages**:
   - Transitioning `ComingSoonModal` triggers into dedicated presentation subpages for *Održavanje doma i posjeda*, *IT & Digitalna rješenja*, and *Administracija*.
3. **Official Price List (`Cjenik`) Page**:
   - Converting the Cjenik popup into an interactive structured price list and package builder.
4. **FAQ Section (*Česta pitanja*)**:
   - Adding a dedicated FAQ section on `/ruze/kontakti-i-narudzbe`.
