# Technical Documentation — Rosa Dei Web Presentation

This document provides complete technical documentation for the Rosa Dei web application, including architecture decisions, component design, technology rationale, development setup, CI/CD pipeline, and future development roadmap.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack and Rationale](#technology-stack-and-rationale)
3. [Architecture & Component Breakdown](#architecture--component-breakdown)
4. [Development Environment & Setup](#development-environment--setup)
5. [CI/CD Deployment Pipeline](#cicd-deployment-pipeline)
6. [Maintenance & Operational Procedures](#maintenance--operational-procedures)
7. [Future Features & Technical Roadmap](#future-features--technical-roadmap)

---

## Project Overview

Rosa Dei (`rosadei.hr`) is an artisan business based in Garešnica, Croatia (Obrt Za Usluge, vl. Željka Jurkić), specializing in handcrafted floral arrangements, rosaries, and specialized gift items.

The web application serves as a single-page interactive showcase and customer inquiry portal. It is engineered as a static-exported web application hosted on GitHub Pages and served through Cloudflare for global caching, SSL security, and DNS resolution.

---

## Technology Stack and Rationale

The project leverages a modern web technology stack optimized for performance, maintainability, zero server overhead, and high visual standards.

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Enables static HTML export (`output: 'export'`), producing static HTML/CSS/JS assets that require no dynamic Node.js server. Provides optimal SEO performance, page load speed, and static optimization. |
| **UI Library** | React 19 | Latest version of React delivering efficient state handling, client-side slideshow components, and smooth UI transitions. |
| **Styling** | Tailwind CSS 4 | Modern utility-first CSS framework with custom color tokens (`gold`, `primary`, `card`), custom fonts, and responsive layout classes without CSS overhead. |
| **Icons & UI** | Lucide React & Base UI | Lightweight, accessible SVG icon library providing clean iconography without inflating bundle size. |
| **Hosting** | GitHub Pages | Zero-cost, high-reliability static hosting directly linked to the GitHub repository source code. |
| **CDN & DNS** | Cloudflare | Provides free TLS/SSL encryption, edge caching, DDoS mitigation, and custom domain mapping (`rosadei.hr`) to GitHub Pages. |

### Technical Rationale for Stack Selection

1. **Next.js Static Export (`output: 'export'`)**:
   - **Performance**: Pre-rendered static HTML is served instantly from edge nodes without server-side rendering latency.
   - **Cost Efficiency**: Removes the need for hosting server instances (e.g. Vercel Pro, AWS EC2, VPS), resulting in 0 USD monthly infrastructure cost.
   - **Security**: Eliminates backend attack surfaces, database vulnerabilities, and server-side code execution risks.

2. **Tailwind CSS 4**:
   - Compiles unused utility classes away during production build.
   - Standardizes design tokens (colors, typography, spacing, border radii) across all presentation components.

3. **Cloudflare CDN + GitHub Pages**:
   - **Automated SSL/TLS**: Cloudflare automatically manages HTTPS certificates for `rosadei.hr`.
   - **Global Caching**: Assets are cached worldwide, guaranteeing quick loading times for visitors across Croatia and Europe.

---

## Architecture & Component Breakdown

The codebase is organized following the Next.js App Router convention:

```
rosadei/
├── .github/
│   └── workflows/
│       ├── ci.yml               # PR validation workflow
│       └── deploy.yml           # GitHub Pages deployment workflow
├── app/
│   ├── globals.css              # Custom styling, fonts, and theme tokens
│   ├── layout.tsx               # Root layout wrapper
│   └── page.tsx                 # Main entry page assembling core sections
├── components/
│   ├── category-galleries.tsx   # Product galleries and slideshows
│   ├── contact-footer.tsx       # Contact details, business hours, and legal footer
│   ├── customization-options.tsx# Bespoke product customization preview
│   ├── hero-section.tsx         # Hero section with primary brand message
│   ├── ordering-journey.tsx     # 3-step order process section
│   ├── rosa-marks.tsx           # SVG brand marks and social icons
│   ├── site-header.tsx          # Sticky navigation header
│   └── ui/                      # Base reusable UI primitives
├── public/
│   └── images/                  # Static product images organized by category
├── next.config.mjs              # Next.js configuration (static export enabled)
├── package.json                 # Node.js dependencies and scripts
└── tsconfig.json                # TypeScript configuration
```

### Key Components

1. **`SiteHeader` (`components/site-header.tsx`)**:
   - Sticky header with glassmorphism backdrop blur.
   - Displays official logo (`/images/rosadei_logo.png`) and responsive navigation links.

2. **`HeroSection` (`components/hero-section.tsx`)**:
   - Primary hero area featuring the slogan *"Po slici prirode - Napravljeno da traje"*.
   - Includes subtle ambient glow effects and call-to-action button linking to collections.

3. **`CategoryGalleries` (`components/category-galleries.tsx`)**:
   - Displays three product categories:
     - **Buketi** (Bouquets)
     - **Krunice** (Rosaries)
     - **Box Buketi** (Box Bouquets)
   - Features automated image rotation (4-second interval) with dot navigation indicators.

4. **`CustomizationOptions` (`components/customization-options.tsx`)**:
   - Interactive options drawer showcasing customization categories: *Silk Ribbon Finishes*, *Wrapping Paper Tones*, and *Botanical Accents*.
   - Includes hover tooltips displaying swatch previews and descriptions.

5. **`OrderingJourney` (`components/ordering-journey.tsx`)**:
   - Illustrates the three-step ordering process (*Odaberi i Zamisli*, *Kontaktirajte nas*, *Ručni rad*).

6. **`ContactFooter` (`components/contact-footer.tsx`)**:
   - Displays contact options (Email, Phone, Instagram), operating hours, business location (Garešnica), legal details (OIB), and updated 3-column footer (Left: web version & developer contact; Center: ROSA DEI title; Right: 2-row legal copyright).

---

## Development Environment & Setup

### Prerequisites

- **Node.js**: Version 20.x or higher (LTS release recommended).
- **Package Manager**: `npm` (v10+) or `pnpm`.

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
   The application will be accessible at `http://localhost:3001` (or `http://localhost:3000` depending on port availability).

4. **Build Production Static Export**:
   ```bash
   npm run build
   ```
   Output files will be generated in the `./out` directory.

---

## CI/CD Deployment Pipeline

The project utilizes two GitHub Actions workflows located in `.github/workflows/`:

### 1. Continuous Integration (`ci.yml`)
- **Triggers**: Pull requests targeting `main` or `develop` branches.
- **Actions**:
  - Sets up Node.js 20.
  - Installs dependencies using `npm ci`.
  - Runs `npm run build` to verify code compiles without TypeScript or build errors.

### 2. Continuous Deployment (`deploy.yml`)
- **Triggers**: Pushes to `main` or `master` branch, or manual trigger (`workflow_dispatch`).
- **Actions**:
  - Checks out code and installs dependencies.
  - Executes `npm run build` to compile the app into `./out`.
  - Uploads the `./out` folder as a Pages artifact.
  - Deploys static files directly to **GitHub Pages**.

### 3. Cloudflare Routing Setup
- **DNS**: Domain `rosadei.hr` DNS is managed by Cloudflare.
- **Proxy**: Cloudflare proxies traffic to GitHub Pages backend servers (`<username>.github.io`).
- **SSL**: Cloudflare handles SSL/TLS certificate issuing and automatic HTTPS redirection.

---

## Maintenance & Operational Procedures

The project is currently in **Maintenance Phase**. Recommended operational procedures:

### Image Processing & Optimization Script (`scripts/process-images.mjs`)

The project includes an automated script (`scripts/process-images.mjs`) powered by `sharp` for batch image web optimization, standardized renaming, and component synchronization.

#### Purpose & Functionality
1. **WebP Conversion**: Scans subfolders under `public/images/` (`bouquets/`, `rosaries/`, `box_bouquets/`) and converts all raw image files (`.jpg`, `.jpeg`, `.png`, etc.) to lightweight `.webp` format for web optimization.
2. **Standardized Renaming**: Renames images based on their subfolder name following the pattern `<subfolder_name>_<ID>.webp` (e.g. `rosaries_1.webp`, `rosaries_2.webp`, `bouquets_1.webp`).
3. **Sequential ID Preservation**: Detects existing numbered files in a subfolder and continues numbering sequentially for new images (e.g. if `rosaries_11.webp` is the highest existing file, new images will automatically become `rosaries_12.webp`, `rosaries_13.webp`, etc.).
4. **Automated Component Sync**: Automatically updates the image file arrays in `components/category-galleries.tsx` (`bouquetFiles`, `rosaryFiles`, `boxBouquetsFiles`) so new images appear in the site slideshows instantly.

#### When to Use
Run the script whenever you add new raw photos into any subfolder inside `/public/images/`.

#### How to Use
Run the following command from the project root:

```bash
npm run process-images
```

#### Step-by-Step Workflow for Adding New Images:
1. Copy raw product photos (e.g., `my_new_bouquet.jpg`, `custom_rosary.jpeg`) into the appropriate subfolder (`public/images/bouquets/`, `public/images/rosaries/`, or `public/images/box_bouquets/`).
2. Run `npm run process-images` in your terminal.
3. Verify that the files were converted to `.webp`, renamed, and registered in `components/category-galleries.tsx`.
4. Commit and push the changes to GitHub.

---

## Future Features & Technical Roadmap

1. **New Content Sections**:
   - Introduce dedicated *O nama* (About Us) and *Česta pitanja* (FAQ) sections.

2. **Customization Module Activation**:
   - Re-enable and integrate the `CustomizationOptions` component into the active layout in `app/page.tsx`.

3. **Featured Products Section ("Novo u ponudi")**:
   - Add a dedicated showcase section on the homepage highlighting new product releases.

4. **Developer & Support Contact**:
   - Include dedicated developer/technical support contact details in the footer.

5. **Improved Lightbox Gallery**:
   - Upgrade category slideshows to interactive, full-screen lightbox galleries with pinch-to-zoom support.

6. **Image Management Pipeline**:
   - Implement a lightweight image management solution or automated build script to register image files dynamically without manual code edits.
