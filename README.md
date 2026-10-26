# Rahmos Consultancies: website

Next.js (App Router) + TypeScript, exported as a static site. Styling is CSS Modules driven by design tokens.

## Run
    npm install
    npm run dev        # http://localhost:3000
    npm run build      # static output in /out

## Structure
    src/
      app/            Routes only: layout.tsx, page.tsx per route. No styling or copy here.
      components/
        layout/       Header, Footer
        ui/           Container, Button, SectionHeading (reusable primitives)
        sections/     Page sections (Hero, ServicesList, Process, WhyUs, Coverage, EnquiryForm)
        icons/        Custom SVG icons (empty: to be drawn)
      content/        ALL copy, typed. Edit text here, never in JSX.
      styles/         tokens.css (colours, type, spacing) + global.css (reset, base)
      lib/            Small helpers (cx, contact links)
    public/           images, fonts, logo

## Rules
1. Copy lives in `src/content`. Components only render it.
2. Colours, sizes, spacing come from `tokens.css` variables, never hard-coded.
3. One CSS Module per component, colocated.
4. Anything marked TODO in `content/site.ts` is missing from the brochure and must come from the client.

## Open items
- Logo, phone, WhatsApp, email, address (content/site.ts)
- Exact brand colours (sample from logo/PDF; tokens.css)
- Form endpoint (components/sections/EnquiryForm.tsx)
- Confirm per-country service scope for the GCC section (content/coverage.ts)
