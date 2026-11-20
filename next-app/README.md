# iQSetters — Next.js

The iQSetters marketing site rebuilt on the Next.js App Router with reusable
components, Framer Motion and Lenis smooth scrolling. It renders pixel-for-pixel
identical to the static build in `../` (verified at 1440, 1120, 768 and 390px).

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static prerender
npm start
npm run typecheck
```

## How it is put together

```
src/
  app/
    layout.tsx           root shell: sprite, smooth scroll, header, footer
    page.tsx             section composition
    globals.css          copied verbatim from ../styles.css
    home-sections.css    copied verbatim from ../home-sections.css
    motion-safety.css    reduced-motion net for server-rendered entrances
  components/
    layout/              SiteHeader, ProductDropdown, MobileNav, SiteFooter
    motion/              Reveal, SmoothScroll, OrbitVisual, presets
    sections/            one component per page section
      showcase/          hero product preview (sidebar, dashboard, chart)
      benefits/          benefit-card visuals
      diagrams/          product illustration SVGs
    ui/                  Button, Icon + sprite
  data/                  nav, products, testimonials, FAQs, footer, partners
  hooks/                 reduced-motion and media-query subscriptions
  lib/cx.ts              class name joiner
```

### Styling

The two stylesheets are byte-for-byte copies of the originals; only `url()`
asset paths were rewritten to `/assets/…`. That is deliberate — it is what keeps
the port pixel-exact. Treat them as the design source of truth, and prefer
changing them over adding component-level styles.

`motion-safety.css` is the one addition. Entrance animations are server-rendered
in their "before" state, so without it a reduced-motion visitor would see hidden
content until hydration.

### Motion

GSAP and its ScrollTrigger timelines were replaced with Framer Motion:

| Static build | Here |
| --- | --- |
| GSAP intro timeline | `HERO_SEQUENCE` delays in `motion-presets.ts` |
| `[data-reveal]` batch | `<Reveal>` with `whileInView` |
| `[data-reveal-image]` | `<RevealImage>` (clip-path wipe) |
| Orbit ring timeline | `OrbitVisual`, paused off-screen via `useInView` |
| Opacity yoyo loops | `fadeLoop()` keyframes |
| `gsap.quickTo` cursors | `useSpring` motion values in `TaskIllustration` |

The GSAP easings were converted to their cubic-bezier equivalents
(`power1/2/3.out`) so the timing feels the same. Lenis still drives smooth
scrolling, now through `lenis/react`.

Component-level state (dropdowns, mobile nav, FAQ, marquee) keeps its CSS
transitions. Those animate intrinsic sizes and are already tuned; moving them to
JS would have risked drift for no gain.

### Conventions

- Sections are server components; only genuinely interactive pieces are `"use client"`.
- Copy and link lists live in `src/data`, not in markup.
- Images are plain `<img>` with explicit dimensions, matching the original DOM.
- Icons come from one inline SVG sprite mounted once in the layout.
