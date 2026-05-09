# Commit Directory — Founding Designer v5

**Repo:** https://github.com/vaibhavp218/Founding-Designer-9.5.2026  
**Live site:** https://vaibhavp218.github.io/Founding-Designer-9.5.2026/

---

## Legend

| Agent | Label |
|-------|-------|
| vaibhavp218 (manual) | `Human` |
| Claude Sonnet 4.6 | `Claude` |
| Gemini | `Gemini` |
| Codex | `Codex` |

---

## Shipped Commits

---

### `pending` — 2026-05-09
**Launch loader overlay: #FAFAFA background on mobile**
Agent: `Claude`

| File | Change | Lines |
|------|--------|-------|
| [style-v5.css](style-v5.css) | Added `@media (max-width: 767px)` override — `.launch-loader` bg changed from `#ffffff` to `#FAFAFA` on mobile only | [L2463–L2465](style-v5.css#L2463-L2465) |

---

### `09630dd` — 2026-05-09
**Remove deploy submodule — source files live at root**
Agent: `Claude`

| File | Change | Lines |
|------|--------|-------|
| `.gitmodules` | Submodule entry deleted — `deploy/` removed from git tracking | — |

---

### `88a4883` — 2026-05-09
**Implement launch loader logic and mobile menu styles/js**
Agent: `Human`

| File | Change | Lines |
|------|--------|-------|
| [script.js](script.js) | Launch loader: detects mobile vs desktop, loads correct Lottie JSON, plays on page load, fades out on complete | [L503–L525](script.js#L503-L525) |
| [script.js](script.js) | Mobile menu toggle: hamburger open, close button, nav link close | [L529–L542](script.js#L529-L542) |
| [style-v5.css](style-v5.css) | `.launch-loader` full-screen overlay, fade-out transition, Lottie SVG sizing | [L2434–L2462](style-v5.css#L2434-L2462) |
| [style-v5.css](style-v5.css) | `.mobile-menu` slide-in panel, backdrop, nav links, CTA, close button | [L2464–L2477](style-v5.css#L2464-L2477) |

---

### `a165f42` — 2026-05-09
**Restore Engagement HTML cards and update Transform CTA image**
Agent: `Human`

| File | Change |
|------|--------|
| [index.html](index.html) | Engagement section HTML cards restored |
| Assets | Transform CTA image updated |

---

### `0d8ef3d` — 2026-05-09
**Include style, script and asset changes**
Agent: `Human`

| File | Change |
|------|--------|
| [style-v5.css](style-v5.css) | Style refinements |
| [script.js](script.js) | Script updates |
| Assets | Asset additions |

---

### `da27bf4` — 2026-05-09
**Deploy mobile responsive refinements**
Agent: `Human`

| File | Change |
|------|--------|
| [style-v5.css](style-v5.css) | Mobile responsive layout fixes |

---

### `08bd398` — 2026-05-09
**Add mobile role artifacts**
Agent: `Human`

| File | Change |
|------|--------|
| Assets | Mobile Lottie/SVG role artifacts added |
| [index.html](index.html) | Mobile role artifact containers added |

---

### `ea4f10f` — 2026-05-08
**Increase transform submit CTA size**
Agent: `Human`

| File | Change |
|------|--------|
| [style-v5.css](style-v5.css) | Transform section submit CTA size increased |

---

### `5dfbc4c` — 2026-05-08
**Revert section 6 mobile artwork offset**
Agent: `Human`

| File | Change |
|------|--------|
| [style-v5.css](style-v5.css) | Section 6 mobile artwork offset reverted |

---

### `854baa3` — 2026-05-08
**Align section 6 mobile artwork to tick column**
Agent: `Human`

| File | Change |
|------|--------|
| [style-v5.css](style-v5.css) | Section 6 SVG artwork aligned to tick column on mobile |

---

### `764dbae` — 2026-05-08
**Align section 6 mobile SVG artwork starts**
Agent: `Human`

| File | Change |
|------|--------|
| [style-v5.css](style-v5.css) | Section 6 mobile SVG start alignment |

---

### `3cba43b` — 2026-05-08
**Add AI native mobile asset spacing**
Agent: `Human`

| File | Change |
|------|--------|
| [style-v5.css](style-v5.css) | AI native section mobile spacing |

---

### `403d117` — 2026-05-08
**Center AI native asset on mobile**
Agent: `Human`

| File | Change |
|------|--------|
| [style-v5.css](style-v5.css) | AI native asset centered on mobile |

---

### `11df000` — 2026-05-08
**Align section 6 mobile artwork with bullets**
Agent: `Human`

| File | Change |
|------|--------|
| [style-v5.css](style-v5.css) | Section 6 artwork aligned with bullet points on mobile |

---

### `3137427` — 2026-05-08
**Replace transform CTA artwork**
Agent: `Human`

| File | Change |
|------|--------|
| Assets | Transform CTA artwork replaced |

---

### `45de90f` — 2026-05-08
**Increase section 6 mobile artwork size**
Agent: `Human`

| File | Change |
|------|--------|
| [style-v5.css](style-v5.css) | Section 6 mobile artwork size increased |

---

### `705ae8f` — 2026-05-08
**Fix section 6 engagement cards**
Agent: `Human`

| File | Change |
|------|--------|
| [index.html](index.html) | Section 6 engagement card markup fixed |
| [style-v5.css](style-v5.css) | Engagement card styles fixed |

---

### `082ae3c` — 2026-05-07
**Refine fluid layout and scaling values for mid-sized screens**
Agent: `Human`

| File | Change |
|------|--------|
| [style-v5.css](style-v5.css) | `clamp()` values tuned for mid-range viewports |
| [script.js](script.js) | Card position scale values refined |

---

### `53be300` — 2026-05-07
**Add fluid desktop layout scaling to v5**
Agent: `Human`

| File | Change | Lines |
|------|--------|-------|
| [style-v5.css](style-v5.css) | Fluid scaling across sections using `clamp()` — 185 lines added | [style-v5.css](style-v5.css) |
| [script.js](script.js) | Dynamic card position scaling based on live viewport width — `layoutScaleX`/`layoutScaleY` logic | [L237–L246](script.js#L237-L246) |

---

### `e374017` — 2026-05-07
**Fix: add space to 'Experiences that scale' on desktop**
Agent: `Human`

| File | Change |
|------|--------|
| [index.html](index.html) | Whitespace fix in hero heading |

---

### `be516c6` — 2026-05-07
**Initial release — Founding Designer website v5 (desktop + mobile optimised)**
Agent: `Human`

| File | Lines |
|------|-------|
| [index.html](index.html) | 643 |
| [script.js](script.js) | 474 |
| [style-v5.css](style-v5.css) | 2051 |
| [style-v2.css](style-v2.css) | 241 |
| [style.css](style.css) | 1400 |
| [lottie.min.js](lottie.min.js) | 1 (minified) |
| Lottie JSONs | `Hero Background Animation Lottie File.json`, `01-The-Founder.json`, `02-The-PM.json`, `The-CTO.json`, `Launch animation Desktop.json`, `Launch Animation Mobile.json` |
| Fonts | Switzer (WEB/OTF/TTF), Merriweather (variable + static) |
| SVG assets | All section illustrations, icons, logos |
