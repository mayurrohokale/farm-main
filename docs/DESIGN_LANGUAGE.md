# Rohokale Farm — Design Language

This file records the brand audit of the previous site and the new design system that replaced it.

---

## 1. Audit of the previous design

| Area | What was there | Problems |
| --- | --- | --- |
| **Logo** | `rf-logo.png` / `cropped-logo.png`: white hand-drawn "rf" letters on a green gradient circle (`#1E7B30` → `#3DDC45`). Unused extras: `logo.png`, `logo2.png`, `logo3.png`/`logo4.png` (a black line-art fruit basket). | Raster only (no SVG), looked generic, and the gradient went muddy at small sizes. The favicon was declared as `image/svg+xml` but pointed to a PNG at a path that didn't exist. |
| **Colour** | Stock Tailwind: `green-600 #16A34A`, `green-700 #15803D`, `emerald-400`, `gray-50…900`, and one-off `orange-600`, `yellow-600`, `blue-600`, `purple-600`, `cyan-600` accents. | No brand palette. Six unrelated accent hues, and a green that matched the photos poorly. |
| **Type** | Google Fonts Inter, Poppins, Merriweather and Roboto Slab were all loaded. `tailwind.config.js` defined `fontFamily` twice, and `index.html` had stray `+` diff markers in `<head>`. | Four families with no hierarchy. In practice everything rendered as Poppins/Inter bold. |
| **Tagline** | "Generations of Quality" | Strong line, kept. |
| **Voice** | "Premium", "organic", "modern" repeated in every block. | Repetitive and generic. |
| **Layout** | Centred icon-in-circle → big heading → paragraph → card grid, repeated in every section. | Every section looked the same, with no rhythm. |
| **Motion** | Hover lift on cards and a crossfading hero carousel. | No scroll or entrance animation. |
| **Imagery** | Excellent real farm photos, served at 5–20 MB each (e.g. `field.jpg` at 20.6 MB). | A very slow first load, especially on mobile data. |
| **Content bugs** | Three different phone numbers across components, including a placeholder `+91 98765 43210`. "Inquire Now" and "Quick View" buttons did nothing. The form only fired `alert()` and threw the data away. Privacy and Terms links were dead. An "Aplpha" typo in the alpha tooltip. | — |

---

## 2. New brand system

### Concept: **"Rooted in soil. Grown for generations."**
The whole palette comes from the farm's own photographs: deep field greens, red-onion rose, Keshar-mango saffron, turned-earth brown and a warm cream sky.

### Logo
No graphic logo: the farm name **Rohokale Farm** is set simply in Manrope ExtraBold (`src/components/ui/Logo.tsx`). It's forest green on light backgrounds and cream on dark ones or over photos. The favicon is a bold "R" on forest green.

### Colour tokens (`tailwind.config.js`)

| Token | Hex | Use |
| --- | --- | --- |
| `forest` / `leaf-900` | `#14301F` | Primary dark: text, dark sections, primary dark button |
| `leaf-600` | `#2F7D3A` | Brand green: eyebrows, italic accents, links |
| `leaf-300` | `#9CCB5B` | Sprout highlight, logo leaf |
| `keshar-500` | `#E9A23B` | Primary CTA, highlights on dark, logo sun |
| `onion-500` | `#A83A5E` | Tertiary accent (onion tags, heart) |
| `soil-500` | `#6B4A36` | Grain and seed tags |
| `cream-100` | `#F7F2E8` | Page background |
| `cream-50` | `#FCFAF5` | Cards |
| `cream-200` | `#EFE6D4` | Alternate section background |
| `ink` | `#1B1A17` | Body text (used at 65–80% opacity) |

`green-*` is aliased to the `leaf` scale, so older pages (privacy and terms) pick up the brand automatically.

### Typography
Both fonts are self-hosted from `/public/fonts`, so the site makes no Google Fonts request.

- **Display: Fraunces (variable).** Used for headings, numbers and the wordmark. Italic Fraunces carries emphasis words ("*generations.*", "*good soil.*").
- **Text/UI: Manrope (variable).** Used for body, buttons and labels.
- **Eyebrow:** 11–12 px Manrope Bold, uppercase, 0.22em tracking, with a leading rule.
- **Scale:** section headings run 34 → 48 → 60 px with `text-wrap: balance`. The hero headline runs 46 → 72 → 99 px.

### Components
- Pill buttons: `btn-primary` (keshar), `btn-dark` (forest), `btn-outline` and `btn-ghost` (on photos). All of them get a shine sweep on hover.
- Cards: 24–28 px radius on `cream-50`, with a soft forest-tinted shadow.
- Section header: eyebrow, then a split-reveal Fraunces headline with italic accent words, then an intro paragraph.

### Motion (`src/lib/motion.ts`, `src/index.css`)
| Effect | Where |
| --- | --- |
| Word-by-word headline reveal | Hero, every section heading, footer |
| Ken Burns slideshow with progress-bar pills, swipe support and pause | Hero |
| Count-up stats | Hero stats strip |
| Rotating text badge, floating badge | Hero, Our Story |
| Scroll reveals (up / zoom / left / clip-wipe) with stagger | Every section |
| Parallax image collage (desktop only) | Our Story |
| Progress line that draws across the steps | Seed-to-shipment |
| 3D tilt with cursor spotlight (fine pointers only) | Produce cards |
| Sliding filter pill | Produce filter |
| Infinite marquee (pauses on hover) | Below hero, footer |
| Circular clip-path mobile menu with staggered links | Header (mobile) |
| Scroll progress bar, active-section nav underline | Header |
| Lightbox with keyboard and swipe navigation | Gallery |

All motion is switched off under `prefers-reduced-motion`.

### Responsive
Layouts are mobile-first and checked at 390 px, 820 px and 1440 px with no horizontal overflow. The hero uses `100svh`. Parallax and tilt turn off on touch and small screens, and tap targets are at least 40 px.

### Performance
Photos are generated by `scripts/optimize-images.cjs` as **AVIF (q62) with a WebP (q80) fallback**, at 720, 1280 and 1920 px, and served through `<picture>`/`srcset`, so each device downloads only the size it needs. At 100% crop they look the same as the originals. The originals in `public/images` are kept as masters: JPGs are re-saved at high quality (mozjpeg q90) with a 2560 px maximum edge, and PNGs are recompressed losslessly.
