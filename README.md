# RosaDei Grupa — Web Presentation

Official repository for the **RosaDei Grupa** web presentation (`rosadei.hr`), a multidisciplinary family business based in Garešnica, Croatia, uniting high-end artisan craftsmanship, property maintenance, IT & digital solutions, and business administration.

For comprehensive technical documentation, architecture decisions, and developer guidelines, see [docs/Documentation.md](docs/Documentation.md).

---

## About RosaDei Grupa

RosaDei operates across four distinct disciplines unified under a single standard of precision, transparency, and direct responsibility:

1. **Ruže & Unikatne Rukotvorine (Rosa Dei)**: Handcrafted satin ribbons, bouquets, flower boxes, everlasting rosaries, and bespoke gifts.
2. **Održavanje doma i posjeda**: Comprehensive estate maintenance, horticulture, exterior landscaping, and seasonal care.
3. **IT & Digitalna rješenja**: Full-stack web applications, scalable cloud infrastructure, and product design.
4. **Administracija, planiranje i organizacija**: Business operations, strategic planning, documentation, and office support.

- **Live Site**: [https://rosadei.hr](https://rosadei.hr)
- **Headquarters**: Đurđice Rijetković 9, 43280 Garešnica, Hrvatska
- **Owner**: Željka Jurkić (OIB: 76565059947)

---

## Site Pages & Architecture

The application is structured into two main layers:

### 1. Main Landing Page (`/`) — RosaDei Grupa
- **Navbar (`Navbar`)**: Navigation connecting divisions, about, leadership/contacts, and quick email inquiry. Includes responsive mobile slide-out drawer (`Sheet`).
- **Hero Showcase (`Hero`)**: Brand introduction outlining the four disciplines (*„Različite discipline. Jedinstven standard rada.”*).
- **Divisions Showcase (`DivisionsShowcase`)**: Detailed cards for all 4 operational disciplines. Division 1 links to `/ruze`, while the other divisions open the interactive `ComingSoonModal`.
- **About Overview (`AboutOverview`)**: Full-width statement emphasizing long-term quality: *„Napravljeno da traje za nas nije samo marketinška fraza. To je mjerilo koje primjenjujemo na svaki predmet, prostor i sustav koji stvaramo.”*
- **Leadership & Contacts (`Leadership`)**: Section *„Upravljanje & Vodstvo”* featuring all 4 team members:
  - **Željka Jurkić** — Owner, operational management, invoicing, and final execution of RosaDei roses.
  - **Ana Jurkić** — Creative associate, majority production, design ideas, and marketing/social media.
  - **Zoran Jurkić** — Head of field operations, grounds and estate maintenance.
  - **Luka Jurkić** — Lead backend administrator, IT developer, strategic planning, legal compliance, and LinkedIn profile.
  - Includes direct telephone numbers and pre-filled email links for each member.
- **Landing Footer (`Footer`)**: 5 balanced columns, interactive division links, centralized version tag (`APP_VERSION`), and modal dialogs for *Cjenik*, *Privatnost*, and *Uvjeti poslovanja*.

### 2. Rosa Dei Roses & Crafts (`/ruze`)
- **Ruže Navigation Header (`RuzeHeader`)**: Dedicated artisan navigation connecting the roses catalog, personalization, and ordering.
- **Hero Section (`HeroSection`)**: Slogan *„Po slici prirode — Napravljeno da traje”*, with scroll triggers and a randomized 30-image fullscreen gallery modal (`GalleryModal`).
- **Product Category Galleries (`CategoryGalleries`)**: Interactive slideshows for *Buketi*, *Krunice*, *Box Buketi*, *Paketi*, *Kopče i mašne za kosu*, and *Reveri i svadbeni ukrasi*.
- **Personalization Subpage (`/ruze/personaliziraj`)**: Interactive customization options covering additions, ribbon colors, wrapping paper, and boxes (`CustomizationOptions`).
- **Ordering & Contact Subpage (`/ruze/kontakti-i-narudzbe`)**: 3-step customer guide (`OrderingJourney`) and business contact card (`ContactSection`).
- **Ruže Footer (`RuzeFooter`)**: Synchronized with the landing footer layout, displaying copyright, centralized version tag (`APP_VERSION`), and interactive popups for *Cjenik*, *Privatnost*, and *Uvjeti poslovanja* with the rose color palette.

---

## Technical Overview

- **Framework**: Next.js 16 (App Router, Static HTML Export `output: 'export'`)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **UI Primitives & Modals**: Radix UI Dialog & Sheet (`@radix-ui/react-dialog`)
- **Icons**: Lucide React
- **Image Pipeline**: Custom `sharp`-powered optimization script (`scripts/process-images.mjs`)
- **Version Management**: Centralized `APP_VERSION` in `lib/version.ts`, ready for CI/CD git tagging
- **Hosting**: GitHub Pages
- **CDN & DNS**: Cloudflare (SSL/TLS and custom domain routing)

---

## Getting Started

### Installation & Local Run

```bash
# Clone the repository
git clone https://github.com/lukajurkic/rosadei.git
cd rosadei

# Install dependencies
npm install

# Start local development server
npm run dev

# Run image optimization pipeline
npm run process-images

# Validate TypeScript & build static export
npm run build
```

---

## Versioning & CI/CD

- **Current Version**: Defined in `lib/version.ts` (currently `v2.1.0`).
- Displayed across both website footers next to the *Cjenik* link.
- Ready for automated release workflows to bump versions and create git tags automatically.

---

## Maintainers

- **Luka Jurkić**
  - Role: Lead Developer & Administrator
  - GitHub: [@lukajurkic](https://github.com/lukajurkic)
  - Contact: `lukajurkic1@gmail.com`
  - LinkedIn: [Luka Jurkić](https://www.linkedin.com/in/luka-jurki%C4%87-496381327/)

---

## Documentation Link

For in-depth architectural details, image workflows, and the component directory breakdown, refer to [docs/Documentation.md](docs/Documentation.md).
