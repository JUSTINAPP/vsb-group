# South Beach Mount Martha — Claude Code Implementation Brief
**Project:** Full rebrand of the Volpino Next.js + Tailwind CSS codebase for South Beach (sbmm.com.au)  
**Approved mockup:** `southbeach_homepage.html` (delivered separately)  
**Reference site to clone from:** volpino.com.au (already built in this codebase)

---

## 0. Context & Goal

You are working inside a Next.js + Tailwind CSS codebase that was built for **Volpino Pizzeria**. The structure, routing, components and CMS wiring are complete and working. Your job is to **rebrand every visual, content and config layer** so the site becomes **South Beach Mount Martha** (sbmm.com.au). Do not change the framework, routing or build setup — only the brand layer.

The approved visual direction is in `southbeach_homepage.html`. Match it precisely.

---

## 1. Typography — CRITICAL CHANGE

The Volpino codebase uses **Playfair Display** and **Inter/system fonts**. Replace both entirely.

### New font stack
```
Display / headings:  Cormorant  (Google Fonts)
                     weights: 300, 400, 500 — italic variants of each
UI / body / labels:  Jost       (Google Fonts)
                     weights: 200, 300, 400, 500
```

### In `app/layout.tsx` (or `pages/_app.tsx`)
```tsx
import { Cormorant, Jost } from 'next/font/google'

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})
```

Apply both variables to `<html>` tag: `className={`${cormorant.variable} ${jost.variable}`}`

### In `tailwind.config.ts`
```ts
fontFamily: {
  display: ['var(--font-cormorant)', 'Georgia', 'serif'],
  sans:    ['var(--font-jost)', 'system-ui', 'sans-serif'],
},
fontWeight: {
  light:  '300',
  normal: '400',
  medium: '500',
},
```

### Typography usage rules (match Volpino HTML exactly)
| Element | Font | Weight | Size (mobile → desktop) |
|---|---|---|---|
| `h1` hero tagline | Cormorant italic | 300 | 44px → 80px |
| `h1` page title | Cormorant | 300 | 52px → 72px |
| `h2` section headings | Cormorant | 300 | 34px → 42px |
| Italic sub-headings | Cormorant italic | 300 | 18px → 20px |
| Menu item names | Cormorant | 400 | 17px |
| Menu item prices | Cormorant | 400 | 18–19px |
| Event card titles | Cormorant | 400 | 19px |
| Footer tagline | Cormorant italic | 300 | 14px |
| All body copy | Jost | 300 | 13px, line-height 1.8 |
| Nav links | Jost | 300 | 11px, letter-spacing 0.12em |
| Eyebrow labels | Jost | 400 | 10px, letter-spacing 0.20em, uppercase |
| Buttons | Jost | 400 | 11px, letter-spacing 0.12em, uppercase |
| Footer links | Jost | 300 | 11px |
| Footer col headings | Jost | 400 | 9px, letter-spacing 0.14em, uppercase |

---

## 2. Brand Colours

Replace ALL Volpino green/gold tokens. Add these to `tailwind.config.ts` and as CSS custom properties in `globals.css`.

```ts
// tailwind.config.ts — extend.colors
colors: {
  charcoal:  '#1A1916',
  warm:      '#6B6459',
  cream:     '#FAF8F3',
  sky:       { DEFAULT: '#2A9AB8', dark: '#1A5C7A', light: '#E0EEF4' },
  navy:      { DEFAULT: '#1A5C7A', dark: '#0E3D52' },
  gold:      { DEFAULT: '#D4A017', light: '#F0E0B0' },
  coral:     { DEFAULT: '#E07050', dark: '#B83228' },
  seafoam:   '#7EC4C4',
  sage:      '#8A9A88',
  slate:     '#5A6A68',
  lime:      '#D4D830',
  cyan:      '#2AB8E0',
  sand:      '#F0ECE4',
}
```

```css
/* globals.css */
:root {
  --sky:        #2A9AB8;
  --sky-dark:   #1A5C7A;
  --sky-light:  #E0EEF4;
  --gold:       #D4A017;
  --coral:      #E07050;
  --coral-dark: #B83228;
  --charcoal:   #1A1916;
  --warm:       #6B6459;
  --cream:      #FAF8F3;
  --sand:       #F0ECE4;
}
```

**Volpino → South Beach colour mapping:**
| Volpino token | South Beach replacement |
|---|---|
| `--green` (#00856A) | `--sky` (#2A9AB8) |
| `--green-dark` (#005A47) | `--sky-dark` (#1A5C7A) |
| `--green-light` (#E5F2EE) | `--sky-light` (#E0EEF4) |
| `--gold` (#D4A853) | `--gold` (#D4A017) |
| `--gold-light` (#F0E0B0) | unchanged |
| `--cream` (#FAF8F4) | `--cream` (#FAF8F3) |
| `--charcoal` (#1A1916) | unchanged |
| `--warm` (#6B6459) | unchanged |
| Volpino green nav Book button | sky blue |
| Volpino green eyebrow labels | sky blue |
| Volpino green footer stripe | colour device strip (see §5) |

---

## 3. Asset Replacements

All assets live in `public/assets/`. Replace as follows — **do not rename the dimensions or folders**, just swap the files.

### Logo
- **File:** `public/assets/logo.png` (or whatever the Volpino logo file is called)  
- **Replace with:** `South-Beach-Project_logo_no_subline_1465x495.png`  
- **Usage:** White logo on dark nav background. In the nav, render as `<Image>` with `width={180} height={61}` (maintain aspect ratio 1465:495 ≈ 2.96:1).  
- **SVG fallback for nav:** The logo consists of a beach-hut icon above spaced-letter "SOUTH BEACH" wordmark — both white on transparent. An SVG version is defined in the mockup HTML (`southbeach_homepage.html`) — copy it directly into the `<Logo />` component if the PNG has a black background that doesn't work on the nav.

### Hero images (Ken Burns carousel)
Replace all `volpino-hero-*.jpg` with South Beach images in the same order:
```
volpino-hero-1.jpg  →  South-Beach-Project-Exterior-05-2400x1300-1.jpg  (PRIMARY - use this first)
volpino-hero-2.jpg  →  southbeach_function_1080x1080.jpg
volpino-hero-3.jpg  →  SOUTH-BEACH_01-1500x1000-1.jpg
volpino-hero-4.jpg  →  south-beach-food-2_1080x1080.jpg
volpino-hero-5.jpg  →  southbeach_wedding_1080x1080.jpg
volpino-hero-6.jpg  →  SouthBeach_function1.jpg
volpino-hero-7.png  →  southbeach_function3_1080x1080.jpg
```

### About / Story image
- `Volpino_spoons_2228x1086.png` → `South_beach_about_1080x745.jpg`

### Restaurant section images
- Burger image: `SBMM_buger_420x594.jpg`
- Food image: `south-beach-food-2_1080x1080.jpg`

### Decorative device (replaces fox/spoons tile)
- **The Volpino fox band:** `<div class="fox-band">` with SVG foxes
- **Replace with:** Beach Shack Band component (see §5 below)
- **The Volpino spoons tile strip:** `Volpino_tile_trim.png` used as full-width image strip
- **Replace with:** Colour Device Strip component (see §5 below)

### Favicon
- Replace `public/favicon.ico` and any `apple-touch-icon` with `south_beach_512x512.png` (referenced in brief but supply separately)

---

## 4. Content Replacements — Page by Page

### 4.1 Homepage (`app/page.tsx`)

**Hero section**
- Tagline: `"Local. Earthy. Shared."` → `"Simple. Coastal. Good."`
- Sub copy: remove Volpino sub-copy
- Hours line: `"Mon–Thu 4pm till late · Fri–Sun 12pm till late"` → `"Open daily · Breakfast, Brunch & Lunch 7.30am – 2.30pm · Afternoon menu Fri & Sat from 4.30pm"`
- Buttons: Keep "Book a Table" (same SevenRooms link — see §6). Add "View Menu" → `/eat-drink`. Add "Functions" → `/functions`.

**Hours notice bar** (add above nav, red background `#B83228`)
```
Notice: 28 Apr — Closed all day  ·  1 May — Closes 2pm  ·  2 May — Closes 11am
```
Remove this component after 3 May 2026.

**Our Story section**
- Eyebrow: `"Our Story"`
- H2: `"Fresh, coastal, crafted with care"` (second line in italic)
- Sub: `"A beachfront restaurant & bar in Mount Martha"`
- Body: `"South Beach is a restaurant, bar, and events venue in Mount Martha, on Victoria's Mornington Peninsula. Overlooking the beachfront, we serve fresh coastal flavours, innovative drinks, and showcase relaxed yet stylish spaces. Ideal for casual dining, private events, and sunset drinks, South Beach brings the spirit of Mount Martha alive."`
- Address block: `"Find Us\n464 Esplanade, Mount Martha VIC 3934\nevents@southbeachproject.com.au"`
- CTA: `"Our Story →"` → `/about`
- Image: `South_beach_about_1080x745.jpg`

**Decorative divider** — after Our Story section, insert:
1. Colour Device Strip (§5.1)
2. Beach Shack Band (§5.2)

**Menu preview section**
- Eyebrow: `"Menu"`
- H2: `"What we're serving"`
- Sub: `"Fresh coastal flavours · Locally sourced · All day dining"`
- Left column heading: `"All Day Dining"`
- Right column heading: `"Afternoon Menu — Fri & Sat from 4.30pm"`
- Use items from the menu data below (§7)
- CTAs: `"Full Menu"` → `/eat-drink` and `"Drinks Menu"` → `/eat-drink`

**Events section**
- Eyebrow: `"What's On"`
- H2: `"Events & News"`
- Sub: `"Functions, specials & coastal gatherings"`
- Replace Volpino event cards with South Beach events (sourced from Sanity CMS — keep the same CMS query, just update field mappings)
- "All Events & News →" → `/whats-on`

**Book CTA section**
- Eyebrow: `"Reserve your table"`
- H2: `"Book online or call us direct"`
- Sub: `"We'd love to welcome you to South Beach"`
- Buttons: `"Book Online"` (SevenRooms), `"Ticketed Events"` (SevenRooms events), `"Functions Enquiry"` → `/functions`
- Surcharge note: `"Sundays incur a 10% surcharge · Public Holidays 20% surcharge · All credit card payments incur a 1.5% surcharge"`

**Find Us section**
- Eyebrow: `"Find Us"`
- H2: `"Mount Martha"`
- Address card: `"464 Esplanade\nMount Martha VIC 3934"`
- Hours card: `"Open daily 7.30am – 2.30pm\nAfternoon menu Fri & Sat from 4.30pm"`
- Contact card: `"events@southbeachproject.com.au"`
- Map: embed Google Maps for `464 Esplanade Mount Martha VIC 3934`

---

### 4.2 Menu / Eat & Drink (`app/eat-drink/page.tsx` or `app/menu/page.tsx`)

**Page hero**
- Eyebrow: `"South Beach · Mount Martha"`
- H1: `"Eat & Drink"`
- Sub: `"Fresh coastal flavours · Locally sourced · All day"`

**Opening hours block** (add prominent block near top)
```
SUMMER HOURS
Breakfast, Brunch & Lunch  7.30am – 2.30pm  Every day
Afternoon menu             4.30pm – close    Fridays & Saturdays (Dec–Feb)
```

**Menu sections** — use exact copy from `New_Menu.pdf`. Sections:
1. Snacks (banana bread, fruit toast, bircher, sourdough toast, brekkie burger, fries, madeleines, macarons, pastries)
2. Eggs All Day (two eggs, sides list)
3. Hot Cakes (two-stack with toppings)
4. All Day Dining (acai bowl, avo toast, benny, chilli scram, rostis, salmon bowl, duck san choy bow, pork belly, crab linguine, fish & chips, beef burger, calamari salad, greens salad)
5. Afternoon Menu — Fri & Sat (feed me set, mini prawn roll, fish roll, rice paper rolls, san choy bow, fries, spring rolls)
6. For the Little Ones (kids items)
7. Coffee & Tea (allpress, chai, tea)
8. Smoothies & Cold Press Juice
9. Shakes
10. Drinks — Bubbles, Whites, Rosé, Reds, Tap Beer, Cocktails

**PDF links:**
- All Day Menu PDF: `https://sbmm.com.au/wp-content/uploads/2026/01/New_Menu.pdf`
- Drinks Menu PDF: same URL

**Dietary key badges:** GR, GRA, V, VA, DF (sky-blue colour scheme, matching Volpino badge style)

---

### 4.3 What's On (`app/whats-on/page.tsx`)

Keep Volpino's Sanity CMS query structure unchanged. Update:
- Page hero: H1 `"What's On"`, sub `"Events, functions & seasonal happenings"`
- Eyebrow colour: sky blue (was green)
- Event card accent colour: sky blue
- "Book now →" link colour: sky blue

---

### 4.4 About (`app/about/page.tsx`)

**Page hero**
- Eyebrow: `"South Beach · Mount Martha"`
- H1: `"About South Beach"`
- Sub: `"Simple, coastal, good"`

**Our Story section**
- H2: `"A restaurant, bar & events venue by the sea"`
- Sub: `"Overlooking the beachfront at Mount Martha"`
- Body: `"South Beach is a restaurant, bar, and events venue in Mount Martha, on Victoria's Mornington Peninsula. Overlooking the beachfront, we serve fresh coastal flavours, innovative drinks, and showcase relaxed yet stylish spaces. Ideal for casual dining, private events, and sunset drinks, South Beach brings the spirit of Mount Martha alive.\n\nSIMPLE. COASTAL. GOOD."`
- Image: `South_beach_about_1080x745.jpg`

**Team photo section**
- H2: `"The people behind South Beach"`
- Sub: `"A tight team who love what they do"`
- Image: `South_beach_about_1080x745.jpg` (team photo)
- Body: `"South Beach is a community restaurant through and through. Every decision — from the produce on the plate to the wine in the glass — is made with care and intention. We're proud to have built something that feels genuinely local, genuinely coastal, and genuinely ours."`

**How we do it section** (3 cards, replace Volpino's Wood Fired / House Made / Natural Wine)
- Card 1: **Coastal & Fresh** — "Our menu changes with the seasons and the tides. We source locally wherever possible — from the Peninsula's farms, fishermen and makers."
- Card 2: **All Day** — "From golden morning pastries to long lunches and sunset drinks, South Beach is open from 7.30am every day. Drop in, stay a while."
- Card 3: **Events & Functions** — "Four beautifully designed spaces for 15–60 guests. From garden brunches to waterfront weddings, we make every occasion special."

---

### 4.5 Functions (`app/functions/page.tsx`)

**Page hero**
- H1: `"Functions & Events"`
- Sub: `"Private dining · Weddings · Corporate · Celebrations"`

**Intro copy**
`"South Beach offers beautifully designed spaces for private and corporate events, from garden gatherings to full-venue celebrations. Complete the form below and our team will respond with availability and options.\n\nPlease email us at events@southbeachproject.com.au"`

**Four spaces — replace Volpino's function rooms:**

| Space | Pax | Image | Copy |
|---|---|---|---|
| Terrace | 15–30 | `southbeach_wedding_1080x1080.jpg` | "Our north and beach-facing terrace is perfect for al fresco dining and sunset drinks. Bathed in sunlight throughout the day, it's ideal for cocktail-style functions or seated group meals with views of the bay just beyond the railing." |
| Garden | 15–35 | `southbeach_function_1080x1080.jpg` | "Nestled in a beach-facing corner and shaded beneath a large magnolia tree, the Garden is a semi-private outdoor area that feels both relaxed and refined. A guest favourite in warmer months — perfect for brunches, baby showers, or casual receptions." |
| Atrium | 20–40 | `SouthBeach_function1.jpg` | "The Atrium is a flexible, light-filled space with oversized windows framing sweeping bay views. Designed with multiple layout options in mind, it's ideal for long-table lunches, private meetings, or product launches." |
| The Room | 40–60 | `southbeach_function3_1080x1080.jpg` | "For those cooler months or larger groups, The Room offers indoor comfort without losing the view. Featuring two fireplaces, moody lighting, and a cozy but open floor plan, it's perfect for winter weddings, intimate parties, or special occasions." |

**Enquiry form** — keep Volpino's form structure, update:
- Button: `"Send Enquiry"` colour → sky blue
- Confirmation text: `"We'll be in touch within 24 hours · events@southbeachproject.com.au"`

---

### 4.6 Contact / Bookings (`app/contact/page.tsx`, `app/bookings/page.tsx`)

**Contact page**
- H1: `"Contact Us"`
- Sub: `"We'd love to hear from you"`
- Body intro: `"Whether you're reserving a table, sharing your thoughts, or simply wanting to know more about South Beach, get in touch anytime. We're here to make your visit special."`
- Address: `464 Esplanade, Mount Martha VIC 3934`
- Email: `events@southbeachproject.com.au`
- Map embed: `464 Esplanade Mount Martha VIC 3934`

**Bookings page**
- H1: `"Make a Booking"`
- Sub: `"Reserve your table at South Beach"`
- Three booking options as cards:

| Option | Label | Link |
|---|---|---|
| Restaurant | `"Cafe / Restaurant Bookings"` | `https://www.sevenrooms.com/explore/southbeachproject/reservations/create/search/?date=2026-01-16&venues=southbeachproject%2Cvolpinopizzeriaandwinebar` |
| Events | `"Ticketed Events"` | `https://www.sevenrooms.com/events/southbeachproject/paella-pintos-night-5599261673078784` |
| Functions | `"Functions Enquiries"` | `/functions` |

---

## 5. New Brand Components

### 5.1 `<ColourDeviceStrip />` — replaces `Volpino_tile_trim.png`

Create `components/ColourDeviceStrip.tsx`:

```tsx
// Replace every instance of the Volpino tile/spoons strip image with this component.
// Also used as the footer-stripe (narrower version at height 5px).
const COLOURS = [
  '#2A9AB8','#1A5C7A','#F0ECE4','#D4A017','#1A5C7A',
  '#D4A017','#F0ECE4','#B83228','#E07050','#2A9AB8',
  '#7EC4C4','#F0ECE4','#8A9A88','#5A6A68','#F0ECE4',
  '#D4D830','#2AB8E0'
]

export function ColourDeviceStrip({ height = 8 }: { height?: number }) {
  return (
    <div className="flex w-full" style={{ height }}>
      {COLOURS.map((c, i) => (
        <div key={i} className="flex-1" style={{ background: c }} />
      ))}
    </div>
  )
}
```

**Usage:** Insert wherever `<img src="/assets/Volpino_tile_trim.png" />` appears, and at the top of the footer replacing the green/gold/blue repeating gradient stripe.

---

### 5.2 `<BeachShackBand />` — replaces fox SVG band

Create `components/BeachShackBand.tsx`:

```tsx
// Five beach shack illustrations on a black background.
// Replaces the Volpino fox illustration band.
// Shack colours in order: Green, Gold, Navy, Coral/Terracotta, Cyan
// Each shack: pitched roof (right panel filled), horizontal timber slats, central door with window panes.

const SHACKS = [
  { stroke: '#4A8A4A', roofFill: '#4A8A4A', doorFill: 'none' },
  { stroke: '#C8980A', roofFill: '#C8980A', doorFill: '#C8980A' },
  { stroke: '#2A3480', roofFill: '#2A3480', doorFill: 'none' },
  { stroke: '#D85040', roofFill: '#F0ECE4', doorFill: '#D85040' },
  { stroke: '#1AA0C8', roofFill: '#1AA0C8', doorFill: 'none' },
]

// SVG viewBox="0 0 80 88" per shack
// Roof: <polygon points="40,4 76,28 4,28" /> + right-panel fill <polygon points="40,4 76,28 58,28" />
// Body: <rect x="4" y="28" width="72" height="56" />
// Slats: 7x <line> at y = 37,45,53,61,69,77 with opacity 0.45
// Door: <rect x="26" y="50" width="14" height="34" />
// Door divider: <line x1="33" y1="50" x2="33" y2="84" />
// Windows (on open-door shacks): two <rect x="26" y="53" width="5" height="5" fill="#fff" />

export function BeachShackBand() {
  return (
    <div className="bg-black flex items-center justify-around px-10 py-6">
      {SHACKS.map((s, i) => (
        <ShackSVG key={i} {...s} />
      ))}
    </div>
  )
}
```

**Placement:** Immediately after the Our Story section on the homepage, and on the About page. Replaces `<div className="fox-band">` in the Volpino layout.

---

### 5.3 Logo Component update

Update `components/Logo.tsx` (or wherever the Volpino SVG logo lives):

- Use `public/assets/South-Beach-Project_logo_no_subline_1465x495.png` via `next/image`
- On the nav (dark background): render white version — the PNG is white-on-black so either use CSS `filter: brightness(0) invert(1)` if needed, or supply a separate white-on-transparent PNG
- On white backgrounds (footer, about page): the SVG version from the mockup HTML works as inline SVG

```tsx
// In nav: white logo, height 32px desktop / 26px mobile
<Image
  src="/assets/South-Beach-Project_logo_no_subline_1465x495.png"
  alt="South Beach Mount Martha"
  width={180}
  height={61}
  priority
/>
```

---

## 6. External Links & Integrations

| Purpose | Volpino URL | South Beach URL |
|---|---|---|
| Restaurant booking | `sevenrooms.com/explore/volpinopizzeriaandwinebar/...` | `https://www.sevenrooms.com/explore/southbeachproject/reservations/create/search/?date=2026-01-16&venues=southbeachproject%2Cvolpinopizzeriaandwinebar` |
| Ticketed events | Volpino events URL | `https://www.sevenrooms.com/events/southbeachproject/paella-pintos-night-5599261673078784` |
| All Day Menu PDF | Volpino menu PDF | `https://sbmm.com.au/wp-content/uploads/2026/01/New_Menu.pdf` |
| Kiosk / Afternoon PDF | — | Same PDF URL |
| Instagram | `instagram.com/volpinopizzeria` | `https://www.instagram.com/southbeachmtmartha/` |
| Facebook | `facebook.com/volpinopizzeria` | `https://www.facebook.com/southbeachmtmartha` |
| Contact email | `info@volpino.com.au` | `events@southbeachproject.com.au` |
| Functions email | same | `events@southbeachproject.com.au` |
| Domain | `volpino.com.au` | `sbmm.com.au` |

**Remove entirely:** Takeaway page / Gift Vouchers page / Takeaway nav link (South Beach has no equivalent). Replace with: `eat-drink` (menu page) and `whats-on` (events).

---

## 7. Nav Structure

### Volpino nav links → South Beach nav links
```
Menu          → Menu           /eat-drink
What's On     → What's On      /whats-on
About         → About          /about
Contact       → Contact        /contact
Functions     → Functions      /functions
Takeaway      → REMOVE
Gift Vouchers → REMOVE
```

### Mobile bottom nav (5 tabs — keep same structure)
```
Home | Menu | Events | Book | Find Us
```
Active tab accent colour: sky blue (`#2A9AB8`)

### Book button (top-right nav)
- Label: `"Book"` (mobile) / `"Book a Table"` (desktop)
- Background: sky blue (`#2A9AB8`)
- Link: SevenRooms restaurant booking URL (see §6)

---

## 8. Metadata & SEO

Update `app/layout.tsx` metadata:

```ts
export const metadata: Metadata = {
  title: {
    default: 'South Beach Mount Martha',
    template: '%s | South Beach Mount Martha',
  },
  description: 'South Beach is a restaurant, bar, and events venue in Mount Martha on Victoria\'s Mornington Peninsula. Fresh coastal flavours, innovative drinks, and relaxed stylish spaces.',
  metadataBase: new URL('https://sbmm.com.au'),
  openGraph: {
    siteName: 'South Beach Mount Martha',
    locale: 'en_AU',
  },
}
```

Per-page titles:
```
/             → 'South Beach Mount Martha | Simple. Coastal. Good.'
/eat-drink    → 'Menu | South Beach Mount Martha'
/whats-on     → 'What\'s On | South Beach Mount Martha'
/about        → 'About | South Beach Mount Martha'
/functions    → 'Functions & Events | South Beach Mount Martha'
/contact      → 'Contact | South Beach Mount Martha'
/bookings     → 'Bookings | South Beach Mount Martha'
```

---

## 9. File Changes Summary

A quick checklist of every file that needs touching:

```
tailwind.config.ts              — font family + colour tokens
app/layout.tsx                  — font imports, metadata, body className
app/globals.css                 — CSS custom properties
public/assets/                  — swap all image files (see §3)
components/Logo.tsx             — South Beach logo
components/Nav.tsx              — links, colours, Book button URL
components/Footer.tsx           — tagline, links, address, colours, ColourDeviceStrip
components/ColourDeviceStrip.tsx — NEW (see §5.1)
components/BeachShackBand.tsx   — NEW (see §5.2)
app/page.tsx                    — full home page content (see §4.1)
app/eat-drink/page.tsx          — menu content (see §4.2)
app/whats-on/page.tsx           — events page (see §4.3)
app/about/page.tsx              — about page (see §4.4)
app/functions/page.tsx          — functions page (see §4.5)
app/contact/page.tsx            — contact page (see §4.6)
app/bookings/page.tsx           — bookings page (see §4.6)
app/takeaway/                   — DELETE or redirect to /eat-drink
app/vouchers/                   — DELETE or redirect to /
```

---

## 10. Do Not Change

- Next.js version, Tailwind version, or any package.json dependencies
- Sanity CMS schema, queries or studio config
- SevenRooms booking widget embed code (only update the URLs)
- Image optimisation config in `next.config.js`
- Vercel / hosting config
- Any API routes
- The Ken Burns hero image carousel animation logic — just swap the image sources

---

## 11. Sanity CMS — Field Updates

If Sanity is used for events/news (which it is on Volpino), update the studio defaults:

```
siteTitle:    "South Beach Mount Martha"
siteTagline:  "Simple. Coastal. Good."
accentColor:  "#2A9AB8"
address:      "464 Esplanade, Mount Martha VIC 3934"
email:        "events@southbeachproject.com.au"
instagram:    "https://www.instagram.com/southbeachmtmartha/"
facebook:     "https://www.facebook.com/southbeachmtmartha"
```

---

## 12. Definition of Done (First Iteration)

The first iteration is complete when:

- [ ] Homepage renders with correct hero image, "Simple. Coastal. Good." tagline, ColourDeviceStrip, BeachShackBand, and all South Beach content
- [ ] Cormorant weight 300 is used for all headings — visually light and editorial
- [ ] Jost weight 200–300 is used for all body and UI text
- [ ] Nav shows South Beach logo, correct nav links, sky-blue Book button
- [ ] ColourDeviceStrip appears: after hero, between menu/events sections, as footer stripe
- [ ] BeachShackBand appears after Our Story section (replacing fox band)
- [ ] Footer shows "Simple. Coastal. Good." in Cormorant italic, correct address and social links
- [ ] No Volpino colours (green #00856A) remain anywhere
- [ ] No Volpino copy ("Local. Earthy. Shared.", "Pizzeria", "Lochiel Avenue") remains anywhere
- [ ] All external links point to South Beach URLs (SevenRooms, Instagram, Facebook, PDF)
- [ ] Hours notice bar visible (red, above nav)
- [ ] Mobile bottom nav uses sky blue accent
- [ ] `npm run build` passes with no TypeScript errors

---

*Brief prepared from: approved mockup `southbeach_homepage.html`, brand assets in `public/assets/`, menu from `New_Menu.pdf`, and visual reference at volpino.com.au.*
