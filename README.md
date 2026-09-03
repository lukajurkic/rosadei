# Rosa Dei — Web Presentation

Official repository for the **Rosa Dei** web presentation (`rosadei.hr`), an artisan craft business based in Garešnica, Croatia, specializing in handcrafted flower bouquets, rosaries, custom gift arrangements, and bespoke event favors.

For complete architectural details, technology rationale, deployment setup, and developer guidelines, refer to [Documentation.md](./Documentation.md).

---

## About the Project

Rosa Dei (Obrt Za Usluge, owner Željka Jurkić) provides custom handcrafted floral arrangements and religious art items created with high-quality materials. The website is engineered as a responsive multi-page web application serving as an interactive catalog, customization preview, and customer inquiry portal.

- **Live Site**: [https://rosadei.hr](https://rosadei.hr)
- **Location**: Đurđice Rijetković 9, 43280 Garešnica, Hrvatska
- **Owner**: Željka Jurkić (OIB: 76565059947)

---

## Site Pages & Functionalities

1. **Header & Navigation**: Sticky navigation header with official branding logo, active route highlighting, and smooth multi-page navigation.
2. **Home Page (`/`)**:
   - **Hero Showcase**: Brand introduction with "Istraži ponudu" and "Pogledaj galeriju" actions.
   - **Full Image Gallery Overlay (`GalleryModal`)**: Fullscreen modal opening a randomized 30-image 4:3 grid with lightbox viewer.
   - **Product Categories (`CategoryGalleries`)**: Slideshows for Buketi, Krunice, Box Buketi, and specialized items.
   - **Personalization CTA (`PersonalizeCtaBanner`)**: Feature banner linking to `/personaliziraj`.
   - **Order CTA (`OrderCtaBanner`)**: Feature banner linking to `/kontakti-i-narudzbe`.
3. **Personalization Subpage (`/personaliziraj`)**:
   - **Customization Options (`CustomizationOptions`)**: Categorized preview for *Dodatci*, *Boje traka*, *Papir za zamatanje*, and *Box kutije* with interactive filter tabs and lightbox viewer.
4. **Ordering & Contact Subpage (`/kontakti-i-narudzbe`)**:
   - **Order Process Guide (`OrderingJourney`)**: 3-step guide explaining how to choose, contact, and receive custom orders.
   - **Contact Section (`ContactSection`)**: Business card with direct contact channels (Email, Phone, Instagram), location, and operating hours.
5. **Global Footer (`ContactFooter`)**: Shared footer bar displayed across all pages featuring developer contact, branding mark, and legal copyright details.

---

## Technical Overview

- **Framework**: Next.js 16 (App Router, Static HTML Export)
- **Library**: React 19
- **Styling**: Tailwind CSS 4
- **Image Pipeline**: Custom `sharp`-powered optimization script (`scripts/process-images.mjs`)
- **Hosting**: GitHub Pages
- **CDN & DNS**: Cloudflare (SSL/HTTPS and custom domain proxying)

For full technical specifications and stack rationale, see [Documentation.md](./Documentation.md#technology-stack-and-rationale).

---

## Project Status

**Current Phase**: Active Maintenance & Feature Enhancement Phase

The website is active, stable, and features dynamic subpage routing and automated image management.

---

## Maintainers

- **Luka Jurkić**
  - GitHub: [@lukajurkic](https://github.com/lukajurkic)
  - Role: Project Lead & Maintainer
  - Contact: `lukajurkic1@gmail.com`

---

## Documentation Link

Detailed documentation covering local development, component breakdown, image scripts, CI/CD pipeline, and future roadmap is available in [Documentation.md](./Documentation.md).
