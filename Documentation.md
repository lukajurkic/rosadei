# Technical Documentation — Rosa Dei Web Presentation

This document provides complete technical documentation for the Rosa Dei web application, including architecture decisions, subpage structure, component design, technology rationale, development setup, CI/CD pipeline, image management scripts, and future development roadmap.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack and Rationale](#technology-stack-and-rationale)
3. [Architecture & Component Breakdown](#architecture--component-breakdown)
4. [Development Environment & Setup](#development-environment--setup)
5. [Image Processing & Optimization Pipeline](#image-processing--optimization-pipeline)
6. [CI/CD Deployment Pipeline](#cicd-deployment-pipeline)
7. [Maintenance & Operational Procedures](#maintenance--operational-procedures)
8. [Future Features & Technical Roadmap](#future-features--technical-roadmap)

---

## Project Overview

Rosa Dei (`rosadei.hr`) is an artisan business based in Garešnica, Croatia (Obrt Za Usluge, vl. Željka Jurkić), specializing in handcrafted floral arrangements, rosaries, customized gift arrangements, and event favors.

The web application is engineered as a modern multi-page static application hosted on GitHub Pages and served through Cloudflare for global caching, SSL security, and DNS resolution.

---

## Technology Stack and Rationale

The project leverages a modern web technology stack optimized for speed, maintainability, zero server overhead, and high visual standards.

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Enables static HTML export (`output: 'export'`), producing static HTML/CSS/JS assets for routes (`/`, `/personaliziraj`, `/kontakti-i-narudzbe`). Provides optimal SEO performance, page load speed, and static optimization. |
| **UI Library** | React 19 | Latest version of React delivering efficient state handling, interactive lightbox modals, and client-side slideshow components. |
| **Styling** | Tailwind CSS 4 | Utility-first CSS framework with custom design tokens (`gold`, `primary`), smooth glassmorphic backdrops, and responsive grid layouts. |
| **Icons & UI** | Lucide React | Lightweight, accessible SVG icon library providing clean iconography (`Images`, `Sparkles`, `Palette`, `ArrowRight`, `X`, `ZoomIn`). |
| **Image Engine** | Sharp | High-performance image processing library used in `scripts/process-images.mjs` for WebP conversion and automatic component array updates. |
| **Hosting** | GitHub Pages | Zero-cost, high-reliability static hosting directly linked to the GitHub repository source code. |
| **CDN & DNS** | Cloudflare | Provides free TLS/SSL encryption, edge caching, DDoS mitigation, and custom domain mapping (`rosadei.hr`). |

---

## Architecture & Component Breakdown

The codebase is organized following the Next.js App Router structure with shared layouts and subpages:

```
rosadei/
├── .github/
│   └── workflows/
│       ├── ci.yml               # PR build validation workflow
│       └── deploy.yml           # GitHub Pages deployment workflow
├── app/
│   ├── globals.css              # Custom styling, fonts, and theme tokens
│   ├── layout.tsx               # RootLayout (neutral HTML shell, fonts, analytics)
│   ├── page.tsx                 # Starting Page Layer / Multi-Area Hub (auto-redirects to /ruze)
│   └── ruze/
│       ├── layout.tsx           # Ruže Layout (canvas styling, RuzeHeader, RuzeFooter)
│       ├── page.tsx             # Satin Roses & Bouquets Catalog
│       ├── personaliziraj/
│       │   └── page.tsx         # Personalization subpage (CustomizationOptions, CTA Banner)
│       └── kontakti-i-narudzbe/
│           └── page.tsx         # Ordering & Contact subpage (OrderingJourney, ContactSection)
├── projects/
│   ├── landing/                 # Project: Landing Portal / Hub
│   │   └── components/
│   │       ├── header.tsx       # Landing header
│   │       ├── footer.tsx       # Landing footer
│   │       └── root-redirect.tsx# Instant redirect to /ruze
│   └── ruze/                    # Project: Satin Roses & Bouquets
│       └── components/
│           ├── header.tsx       # Ruže navigation header
│           ├── footer.tsx       # Ruže footer & ContactSection
│           ├── hero-section.tsx # Ruže hero banner & gallery trigger
│           ├── category-galleries.tsx # Ruže category collections container
│           ├── category-slideshow.tsx # Ruže click-to-advance slideshow
│           ├── customization-options.tsx # Ruže customization drawer
│           ├── gallery-modal.tsx# Ruže fullscreen image gallery
│           ├── order-cta-banner.tsx # Ruže order banner
│           ├── ordering-journey.tsx # Ruže 3-step order process
│           ├── personalize-cta-banner.tsx # Ruže personalization banner
│           └── rosa-marks.tsx   # Ruže SVG marks & icons
├── docs/
│   └── V0_INTEGRATION_GUIDE.md  # Tutorial for generating & merging v0 by Vercel designs
├── lib/
│   └── images.ts                # Dynamic filesystem image loader and category scanner
├── components/
│   └── ui/                      # Base reusable UI primitives (shadcn / Radix)
├── public/
│   └── images/                  # Product and customization images organized by subfolders
├── scripts/
│   └── process-images.mjs       # Image optimization and standardized naming script
├── next.config.mjs              # Next.js configuration (static export enabled)
├── package.json                 # Node.js dependencies and scripts
└── tsconfig.json                # TypeScript configuration
```

### Key Subpages & Components

1. **Root Layout (`app/layout.tsx`)**:
   - Wraps all subpages in a canvas background wrapper (`rosa-canvas rosa-grain relative min-h-screen`).
   - Renders `SiteHeader` at top and `ContactFooter` bar at bottom globally across all pages.

2. **`SiteHeader` (`components/site-header.tsx`)**:
   - Sticky glassmorphic navigation header.
   - Client-side navigation (`Link` & `usePathname()`) connecting `/ruze`, `/ruze/personaliziraj`, and `/ruze/kontakti-i-narudzbe`.

3. **`HeroSection` (`components/hero-section.tsx`)**:
   - Brand showcase featuring slogan *"Po slici prirode - Napravljeno da traje"*.
   - Includes **"Istraži ponudu"** scroll button and **"Pogledaj galeriju"** modal trigger button.

4. **`GalleryModal` (`components/gallery-modal.tsx`)**:
   - Fullscreen overlay modal displaying 30 gallery images in a 4:3 aspect ratio grid (`aspect-[4/3]`).
   - Automatically randomizes image sequence on every open.
   - Includes fullscreen lightbox viewer with previous/next image navigation and Escape key handling.

5. **`CustomizationOptions` (`components/customization-options.tsx`)**:
   - Categorized customization drawer on `/ruze/personaliziraj` covering *Dodatci*, *Boje traka*, *Papir za zamatanje*, and *Box kutije*.
   - Includes interactive tab filtering and image lightbox preview.

6. **`OrderingJourney` & `ContactSection` (`app/ruze/kontakti-i-narudzbe/page.tsx`)**:
   - 3-step customer guide explaining the ordering flow, accompanied by the `ContactSection` card with direct telephone, email, Instagram, operating hours, and location details.

7. **CTA Banners (`PersonalizeCtaBanner` & `OrderCtaBanner`)**:
   - Glassmorphic call-to-action cards connecting the homepage and personalization subpage seamlessly to ordering.

---

## Development Environment & Setup

### Prerequisites

- **Node.js**: Version 20.x or higher (LTS release recommended).
- **Package Manager**: `npm` (v10+).

### Installation & Local Run

1. **Clone Repository**:
   ```bash
   git clone https://github.com/lukajurkic/rosadei.git
   cd rosadei
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Local Development Server**:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3001` (or `http://localhost:3000`).

4. **Build Production Static Export**:
   ```bash
   npm run build
   ```
   Output static HTML routes (`/`, `/ruze`, `/ruze/personaliziraj`, `/ruze/kontakti-i-narudzbe`) will be compiled in `./out`.

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

Next.js Server Components dynamically scan the subfolders in `/public/images/` at build time (and during development) using `lib/images.ts`.
- **No hardcoded image lists**: The components automatically pull and display all images present in each category folder.
- **Zero code changes needed**: Source code files are never modified when images are added or removed.

### How to Add New Images

1. Place raw photos (JPEG, PNG, WebP, etc.) inside the target directory:
   - `public/images/bouquets/`
   - `public/images/rosaries/`
   - `public/images/box_bouquets/`
   - `public/images/combo/`
   - `public/images/hair_clip_and_bow/`
   - `public/images/wedding_lapels/`
   - `public/images/gallery/`
   - `public/images/customization/<additions|boxes|ribbons|decorative_paper>/`
2. Run the naming & optimization script:
   ```bash
   npm run process-images
   ```
3. That is all! The script optimizes each image to WebP format, numbers them sequentially, removes raw originals, and Next.js immediately pulls and displays them across the website.


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

## Maintenance & Operational Procedures

- Run `npm run process-images` whenever new photos are added.
- Run `npm run build` locally to verify static page generation before committing.

---

## Future Features & Technical Roadmap

1. **Content Expansion**:
   - Add dedicated FAQ section (*Česta pitanja*) on `/kontakti-i-narudzbe`.
2. **Interactive Customization Builder**:
   - Enable interactive bouquet configuration preview in `/personaliziraj`.
3. **Multi-language Support (i18n)**:
   - Optional Croatian / English language toggle in header.
