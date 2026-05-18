<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Portfolio Website - Development Instructions

## Project Overview
Professional Next.js portfolio website for a Software Development internship with dark mode design, modern animations, and responsive layout.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + PostCSS
- **Animations**: Framer Motion
- **Package Manager**: npm

## Project Structure
```
portfolio/
├── app/                 # Next.js App Router pages
├── components/          # React components (Navigation, Footer)
├── styles/             # Global styles
├── public/             # Static assets
└── tailwind.config.ts  # Tailwind configuration
```

## Key Files
- `app/layout.tsx` - Root layout with Navigation and Footer
- `app/page.tsx` - Home page with hero section
- `app/about/page.tsx` - About/skills page
- `app/portfolio/page.tsx` - Projects showcase
- `app/contact/page.tsx` - Contact form
- `components/Navigation.tsx` - Navigation bar
- `components/Footer.tsx` - Footer component
- `tailwind.config.ts` - Color scheme and theme config
- `styles/globals.css` - Global styles and animations

## Design System
### Colors
- Primary: `#00d4ff` (Cyan)
- Secondary: `#0a0e27` (Dark Blue)
- Tertiary: `#16213e` (Medium Dark Blue)
- Accent: `#e0aaff` (Purple)

### Breakpoints
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md)
- Desktop: > 1024px (lg)

## Important Rules
1. Always use 'client' directive for interactive components
2. Use Framer Motion for animations
3. Keep TypeScript types strict (strict mode enabled)
4. Use Tailwind CSS utilities for styling
5. Maintain dark theme throughout
6. All text content should support Dutch language
7. Components should be responsive by default

## Customization Checklist
When user wants to customize:
- [ ] Update personal information in pages
- [ ] Replace placeholder project details
- [ ] Update contact information
- [ ] Modify colors in tailwind.config.ts if needed
- [ ] Add real social media links
- [ ] Update metadata in layout.tsx

## Running the Project
```bash
npm install          # Install dependencies
npm run dev          # Start development server on localhost:3000
npm run build        # Build for production
npm run start        # Start production server
```

## Deployment
- Recommended: Vercel (automatic from GitHub)
- Alternative: Manual build with `npm run build && npm run start`
