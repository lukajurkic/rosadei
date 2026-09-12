# Vodič za Integraciju Novog v0 (by Vercel) Dizajna

Ovaj dokument je detaljan vodič i "tutorial" za programere i dizajnere kako pripremiti, preuzeti i spojiti novi dizajn s **v0 by Vercel** u postojeću Rosa Dei web aplikaciju.

---

## 1. Arhitektura Višestranog Sustava (Multi-Page Architecture)

Rosa Dei se širi iz specijaliziranog obrta za bukete od satena u brend s **više područja stručnosti**. Kako bi svako područje imalo dovoljno prostora, web stranica koristi sljedeću strukturu ruta:

| Ruta | Naziv / Svrha | Status |
| :--- | :--- | :--- |
| **`/`** | **Glavni Početni Ekran (Hub / Portal)** | Trenutno prazan / pripremljen za novi **v0** dizajn. Automatski preusmjerava na `/ruze`. |
| **`/ruze`** | **Ruže & Buketi od Satena** | Aktivno. Glavni katalog buketa, krunica, box buketa, revera i paketa. |
| **`/ruze/personaliziraj`** | **Opcije Personalizacije** | Aktivno (podstranica ruža). Prikaz dostupnih traka, papira, kutija i dodataka. |
| **`/ruze/kontakti-i-narudzbe`** | **Kontakt & Narudžbe** | Aktivno (podstranica ruža). Kontakt podaci, obrasci i upute za narudžbu. |
| **`/<novo-podrucje>`** | **Buduća područja stručnosti** | Pripremljeno za dodavanje novih ruta prema potrebi (npr. `/dekoracije`, `/radionice`). |

---

## 2. Trenutno Stanje Glavne Stranice (`/`)

Datoteka [`app/page.tsx`](file:///e:/RosaDei%20Web/app/page.tsx) je novi početni sloj:
- Sadrži komponentu `<RootRedirect target="/ruze" />` koja automatski preusmjerava posjetitelje na ponudu ruža dok novi dizajn ne bude spreman.
- Usklađena je s Next.js statičkim izvozom (`output: 'export'`) pomoću instantnog preusmjeravanja i `<meta http-equiv="refresh">` taga.

---

## 3. Kako Dizajnirati Novi Hub na v0 (by Vercel)

Prilikom generiranja nove početne stranice na [v0.dev](https://v0.dev), preporučuje se koristiti sljedeće smjernice i prompt:

### Dizajnerski Sustav i Boje Rosa Dei:
- **Font naslova**: Cormorant Garamond (`font-serif`, lagani i elegantni rezovi `font-light`).
- **Font teksta**: Jost (`font-sans`).
- **Pozadina**: Topla organska boja platna (`#fdf6f1`, klasa `bg-background`).
- **Akcentna boja (Zlato)**: `#c69255` (Tailwind klasa `text-gold` / `bg-gold` / `border-gold`).
- **Primarna boja**: Tamna ruža / bordo (`#5c2e3b` / klasa `bg-primary`, `text-primary-foreground`).
- **Okviri i kartice**: Suptilni stakleni efekt (`bg-white/60 backdrop-blur-md border border-rose-200/50 shadow-lg shadow-rose-900/10`).

### Primjer Prompt-a za v0:
```text
Create a luxurious, minimalist landing portal for "Rosa Dei", an artisan design studio expanding into multiple expertise areas. 
The design must have:
1. An elegant Hero section with subtitle "Po slici prirode - Napravljeno da traje" and a warm, organic artisan aesthetic.
2. A showcase grid featuring different expertise cards:
   - "Ruže i Buketi od Satena" (linking to /ruze)
   - "Personalizirani Pokloni i Dodatci" (linking to /ruze/personaliziraj)
   - "Vjenčani Program i Dekoracije" (placeholder for new services)
3. Soft glassmorphic cards, gold accents (#c69255), warm cream background (#fdf6f1), serif headings.
4. Fully responsive, using Tailwind CSS and Lucide React icons.
```

---

## 4. Korak-po-korak: Spajanje v0 Dizajna u Kod

Kada v0 generira dizajn, slijedite ove korake:

### Korak 1: Spremanje novih komponenti
Svako područje na stranici organizirano je kao zaseban "projekt" u mapi `projects/<ime-projekta>/`.
Za novi landing page spremite generirane v0 komponente u:
```
projects/landing/
├── components/
│   ├── header.tsx           # Zaglavlje za landing portal
│   ├── footer.tsx           # Podnožje za landing portal
│   ├── hub-hero.tsx         # Hero sekcija portala
│   └── expertise-grid.tsx   # Prikaz područja stručnosti
└── styles/
    └── landing.css          # (Opcionalno) specifični stilovi
```
Sve ikone iz `lucide-react` već su instalirane u projektu i spremne za rad.

### Korak 2: Ažuriranje `app/page.tsx`
Otvorite [`app/page.tsx`](file:///e:/RosaDei%20Web/app/page.tsx):

1. **Uklonite / zakomentirajte preusmjeravanje**:
   ```diff
   - <RootRedirect target="/ruze" />
   ```

2. **Uvezite nove komponente iz `projects/landing/`**:
   ```tsx
   import { LandingHeader } from '@/projects/landing/components/header'
   import { HubHero } from '@/projects/landing/components/hub-hero'
   import { ExpertiseGrid } from '@/projects/landing/components/expertise-grid'
   import { LandingFooter } from '@/projects/landing/components/footer'
   ```

3. **Ubacite komponente u stranicu**:
   ```tsx
   export default function HomePage() {
     return (
       <div className="min-h-screen flex flex-col justify-between">
         <LandingHeader />
         <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
           <HubHero />
           <ExpertiseGrid />
         </main>
         <LandingFooter />
       </div>
     )
   }
   ```

### Korak 3: Povezivanje poveznica (Links)
U novim v0 komponentama osigurajte da kartice i gumbi vode na točne rute:
- Kartica za ruže i bukete:
  ```tsx
  <Link href="/ruze" className="...">Istraži ruže &rarr;</Link>
  ```
- Kartica za personalizaciju ruža:
  ```tsx
  <Link href="/ruze/personaliziraj" className="...">Personaliziraj &rarr;</Link>
  ```
- Kartica za narudžbe ruža:
  ```tsx
  <Link href="/ruze/kontakti-i-narudzbe" className="...">Kontakt &rarr;</Link>
  ```

### Korak 4: Ažuriranje navigacije
Svaki projekt ima svoje vlastito zaglavlje:
- Zaglavlje za ruže: [`projects/ruze/components/header.tsx`](file:///e:/RosaDei%20Web/projects/ruze/components/header.tsx)
- Zaglavlje za landing portal: [`projects/landing/components/header.tsx`](file:///e:/RosaDei%20Web/projects/landing/components/header.tsx)
- Svaki projekt je u potpunosti neovisan sa svojim zaglavljem, podnožjem, komponentama i stilovima.

---

## 5. Dodavanje Novih Područja / Stranica (`app/<novo-podrucje>/page.tsx`)

Kada Rosa Dei pokrene potpuno novu kategoriju (npr. aranžiranje evenata ili dekoracije):

1. **Kreirajte novu rutu**:
   Napravite novu mapu i datoteku:
   ```
   app/dekoracije/page.tsx
   ```
2. **Dodajte slike u folder**:
   Napravite mapu:
   ```
   public/images/dekoracije/
   ```
3. **Optimizirajte slike**:
   Pokrenite skriptu u terminalu:
   ```bash
   npm run process-images
   ```
   Skripta će automatski sve slike pretvoriti u `.webp` i numerirati ih (`dekoracije_1.webp`, itd.).
4. **Prikažite slike u kodu**:
   U novoj stranici pozovite pomoćnu funkciju iz `lib/images.ts`:
   ```tsx
   import { getImagesFromFolder } from '@/lib/images'

   export default function DekoracijePage() {
     const slike = getImagesFromFolder('dekoracije')
     // ... vaš prikaz ...
   }
   ```
   Nema ručnog popisa slika – sve se učitava automatski!

---

## 6. Provjera i Testiranje

Nakon spajanja koda, uvijek pokrenite provjere u terminalu:

```bash
# 1. Provjera TypeScript tipova
npx tsc --noEmit

# 2. Provjera izrade produkcijskog paketa
npm run build
```

Ako obje naredbe završe s kodom 0, web stranica je spremna za objavu na GitHub Pages!
