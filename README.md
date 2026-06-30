# TurfBook Landing Page

Marketing landing page for **TurfBook** — an automated WhatsApp booking system for turf owners in India.

Built with **Next.js 15 · TypeScript · App Router**.

---

## Stack

- Next.js 15 (App Router, static export)
- TypeScript
- CSS (global, no Tailwind) — design tokens via CSS custom properties
- Archivo variable font via `next/font/google`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx      # Root layout — metadata, font, viewport
  page.tsx        # Assembles all sections
  globals.css     # All styles and animations

components/
  Navbar.tsx      # Fixed nav — scroll state + mobile menu (client)
  Hero.tsx        # Hero section with scroll indicator
  TrustStrip.tsx  # Social proof strip
  Benefits.tsx    # Feature grid
  HowItWorks.tsx  # 3-step process
  Pricing.tsx     # Pricing plans
  FAQ.tsx         # Accordion FAQ
  Contact.tsx     # Lead form → WhatsApp redirect (client)
  Footer.tsx      # Footer
  ClientEffects.tsx # Reveal observer, parallax, ripple, FAQ animation (client)

lib/
  config.ts       # WA_NUMBER constant

public/
  hero.webp / hero.png   # Hero background image
```

## Configuration

Before going live, update two values:

**`lib/config.ts`** — set your WhatsApp number (digits only, no `+` or spaces):
```ts
export const WA_NUMBER = '91XXXXXXXXXX'
```

**`app/layout.tsx`** — set your production domain:
```ts
metadataBase: new URL('https://your-domain.com'),
```

## Deploy

```bash
npx vercel
```

Or connect the GitHub repo to [Vercel](https://vercel.com) for automatic deploys on push.
