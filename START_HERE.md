# START HERE - RevBridge Site AI

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Overview

This is the **RevBridge** marketing website - a pay-per-performance CRM platform.

### Key Information
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Primary Color:** #e81111 (red)
- **Language:** English
- **Animations:** Framer Motion
- **Icons:** Lucide React

### Project Structure
```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout (Header/Footer)
│   ├── globals.css       # Tailwind theme
│   ├── icon.svg          # Favicon (RevBridge logo)
│   ├── plataforma/       # Platform features page
│   ├── pricing/          # Pricing + ROI calculator
│   ├── sobre/            # About page
│   └── blog/             # Blog listing + individual posts
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/home/    # Home page sections
│   │   ├── GooeyHero.tsx
│   │   ├── VideoSection.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── CreativeGenerator.tsx
│   │   ├── ValueProps.tsx
│   │   ├── Comparison.tsx
│   │   ├── Metrics.tsx
│   │   ├── Testimonials.tsx
│   │   └── FinalCTA.tsx
│   └── ui/               # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── Container.tsx
│       ├── Section.tsx
│       ├── FeaturesCarousel.tsx
│       ├── HeroVideoDialog.tsx
│       ├── BackgroundGradientAnimation.tsx
│       └── ...
├── data/
│   └── navigation.ts     # Navigation links
└── lib/
    └── utils.ts          # Helpers (cn, getAssetPath)
```

### Public Assets
```
public/
├── logo.svg              # RevBridge logo
├── images/
│   ├── step-1.png to step-5.png  # HowItWorks steps
│   └── video-thumb.png   # Video thumbnail
└── videos/
    └── demo-campaign.mov # Demo video
```

---

## GitHub Pages Deployment

### Repository
https://github.com/revbridge-ai/rbd-site-ai

### Live Site
https://revbridge-ai.github.io/rbd-site-ai/

### Configuration
- Uses `basePath: "/rbd-site-ai"` in production
- Static export via `output: "export"` in next.config.ts
- Auto-deploy via GitHub Actions (`.github/workflows/deploy.yml`)

### Asset Paths (IMPORTANT!)
Always use `getAssetPath()` for images/videos to work on GitHub Pages:

```tsx
import { getAssetPath } from "@/lib/utils";

// Images
<Image src={getAssetPath("/logo.svg")} ... />

// Videos
<video src={getAssetPath("/videos/demo.mov")} ... />

// In data arrays
const steps = [
  { image: getAssetPath("/images/step-1.png") },
  ...
];
```

---

## What Was Done (Nov 26, 2025)

### Completed
- [x] Full website build with all pages
- [x] Home page with 9 sections
- [x] Platform, Pricing, About, Blog pages
- [x] All UI components
- [x] Mobile responsive design
- [x] Translation to English
- [x] GitHub Pages deployment
- [x] Favicon with RevBridge logo
- [x] Demo video integration

### Key Design Decisions
- Buttons: `rounded-full` style
- Section backgrounds: alternating gray/white
- CTA text: "Get $300 free to start"
- Footer tagline: "Handle it for you!"

---

## What's Next?

Possible improvements:
- [ ] Add real blog content/CMS integration
- [ ] Connect CTA buttons to actual signup flow
- [ ] Add contact form functionality
- [ ] SEO optimization (meta tags per page)
- [ ] Analytics integration (GA4, etc.)
- [ ] Custom domain setup
- [ ] Performance optimization
- [ ] A/B testing setup
- [ ] Integrate real Creative Generator API

---

## Session Log

See `SESSION_LOG.md` for detailed work history from today's session.

---

## Useful Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview build locally
npx serve out

# Deploy (automatic via GitHub Actions on push to main)
git push origin main
```

## GitHub Token Note

To push workflow files, the token needs `workflow` scope.
Current user: `juliano-revbridge`
