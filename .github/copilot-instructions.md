# AI Coding Agent Instructions

**Purpose:** IB Training single-page marketing site — Vite + React 18 + TypeScript + Tailwind. Act directly; avoid lengthy explanations.

## Architecture Overview

**Entry Flow:** `index.html` → `src/main.tsx` → `src/App.tsx`  
**Pattern:** Single-page app with anchor navigation (#community, #success). No router. All sections stack vertically.

**Core State Management (App.tsx):**
- Modal toggles: `programsOpen`, `activeStory`, `activeTeam`, `registrationOpen`
- Body scroll lock via useEffect when ANY modal open (`anyModalOpen` pattern)
- Child sections receive callbacks (`onOpenPrograms`, `onOpenStory`, `onOpenMember`, `onOpenRegistration`)
- **Adding modals:** Lift minimal state to App, sync body lock logic, follow existing modal callback pattern

## Project Structure

```
src/
  App.tsx              # Orchestrates layout + modal state
  components/
    layout/            # Navbar (own mobile state), Footer
    sections/          # Self-contained sections + modals (ProgramsModal, StoryModal, TeamModal, RegistrationModal)
  data/                # Static content arrays (programs.ts, packages.ts, stories.ts)
  hooks/               # useInterval (carousels), useAnimatedCounter (intersection-based)
  config/              # emailjs.ts (EmailJS credentials)
```

## Critical Patterns

**Data-Driven Content:**
- Programs: `src/data/programs.ts` → `{ title, img, color, desc }` (color = Tailwind gradient classes)
- Packages: `src/data/packages.ts` → `{ id, filter, title, priceUSD, priceEGP, gradient, features[], button, highlight?, border? }`
- Stories: `src/data/stories.ts` → nested `storySlides[][]` with rich metadata (beforeAfterImage, achievements, quotes)
- **Never hardcode content in components** — extend data arrays

**Modal Pattern (all modals follow this):**
```tsx
// Props: { open|storyId|memberId; onClose: ()=>void }
if(!open || !id) return null; // Early return
<div onClick={onClose}> {/* backdrop */}
  <div onClick={e=>e.stopPropagation()}> {/* container */}
    {/* Sticky header with close button */}
  </div>
</div>
```

**Bilingual Arabic/English:**
- Arabic: wrap with `.ar` class (Cairo font, RTL, right-align from `index.css`)
- Pattern: `{englishText} - <span className="ar">{arabicText}</span>`
- Female images: add `.female-image-blur` class (see StoryModal)
- **Preserve all Arabic translations** when editing components

**Custom Hooks:**
- `useInterval`: Carousel auto-advance (Success stories). Reuse instead of raw setInterval
- `useAnimatedCounter`: IntersectionObserver-triggered counter animations (Community stats)

## Styling & Assets

**Tailwind Config:**
- Custom colors: `primary` (#2563eb), `secondary` (#9333ea)
- Custom font: `font-display` → Futura (7 weights via @font-face in index.css) + Cairo (Google Fonts)

**Assets:**
- Root-relative paths: `/assets/...` served from `public/`
- Prefer WebP for new images (current: PNG/JPEG)
- Font Awesome via CDN (`<link>` in index.html)

**Custom CSS (index.css):**
- `.hero-gradient`, `.card-hover`, `.ar` (Arabic RTL)
- `.female-image-blur` (privacy filter for female transformations)

## Development Workflows

**Commands:**
```bash
npm run dev       # Vite dev server (HMR, port 5173)
npm run build     # Production → dist/
npm run preview   # Serve dist/
npm run lint      # ESLint --max-warnings=0 (MUST pass before commit)
```

**ESLint (.eslintrc.cjs):**
- Zero warnings enforced
- React import not required (Vite handles)
- Unused vars allowed if prefixed with `_`

**Deployment (Netlify):**
- Config: `netlify.toml` (SPA redirects, cache headers, security headers)
- Build: `npm run build` → `dist/`

## Email Integration (EmailJS)

**Setup:** `src/config/emailjs.ts`
- Used in `RegistrationModal` for form submissions
- Requires: PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID
- Template vars: `{{full_name}}`, `{{country}}`, `{{whatsapp_number}}`, `{{email}}`, `{{selected_program}}`, `{{selected_package}}`, `{{package_price_usd}}`, `{{package_price_egp}}`, `{{message}}`

## Adding Features

**New Section:**
1. Create in `components/sections/YourSection.tsx`
2. Export as named component with `<section id="anchor-name">`
3. Import and place in `App.tsx` (before Footer)
4. Update Navbar links if needed

**New Modal:**
1. Create following modal pattern (see above)
2. Add state to `App.tsx` (e.g., `const [yourModalOpen, setYourModalOpen] = useState(false)`)
3. Include in `anyModalOpen` check for scroll lock
4. Pass callbacks to triggering sections

**New Content:**
- Programs: append to `programs` array with Tailwind gradient
- Packages: append to `packagePlans` (check filter logic in Packages.tsx)
- Stories: extend `storySlides` structure (flat array for modal lookup)

## Guardrails

- **Static site only** — no server/API routes
- **No global state libs** (Redux/Zustand) unless requested
- **Preserve bilingual content** — add Arabic parallel to English
- **Zero lint warnings** — run before commit
- **TypeScript interfaces** for all data structures (follow existing patterns)
- **Accessibility:** `aria-label` for icon buttons, meaningful alt text

## Examples

**New Program:**
```ts
{ title: 'Mobility', img: '/assets/programs/mobility.png', color: 'from-teal-400 to-teal-600', desc: 'Arabic description...' }
```

**New Story (minimal):**
```ts
{ id:'john', name:'John', arabicName:'جون', age:'30', country:'USA', countryArabic:'الولايات المتحدة', gradient:'from-blue-50 to-indigo-50', progressWidth:80, tags:['Calisthenics'], summary:'Lost 10kg...', mainAchievement:'...', motivationalQuote:'...', motivationalQuoteArabic:'...', rating:5, profileColor:'bg-blue-500' }
```
