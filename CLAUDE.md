# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Starlight documentation site called "Yolo Design System" built with Astro. It's a clean slate evaluation project designed to showcase rapid development capabilities using Starlight and includes a comprehensive UI component library with Tailwind CSS styling.

## Development Commands

- `npm run dev` - Start development server on http://localhost:4321
- `npm run build` - Build for production 
- `npm run preview` - Preview production build
- `npm test` - Run Playwright tests across all browsers
- `npm run test:headed` - Run tests with browser UI visible
- `npm run test:ui` - Run tests with Playwright UI mode

## Testing

The project uses Playwright for end-to-end testing with cross-browser support (Chromium, Firefox, WebKit). Tests are located in `/tests/` and include:

- `basic.test.js` - Basic homepage and navigation tests
- `components.test.js` - Comprehensive component testing including hero sections, feature cards, animations, and responsive design

Tests automatically start the dev server and run against `http://localhost:4321`. Test results are stored in `/test-results/` with HTML reports in `/playwright-report/`.

## Architecture

### Astro + Starlight Configuration
- **astro.config.mjs**: Main configuration with Starlight integration, custom CSS, and Google Fonts
- **tailwind.config.mjs**: Extended Tailwind config with Yolo Design System tokens, animations, and utilities
- **src/styles/global.css**: Comprehensive design system with CSS layers for components and utilities

### Component Library
Components are located in `src/components/` and follow a modular architecture:

- **Hero.astro**: Full-screen hero sections with gradients, animations, and CTA buttons
- **FeatureGrid.astro**: Flexible grid container for feature cards with responsive layouts
- **FeatureCard.astro**: Individual feature cards with icons, hover effects, and animations
- **CTASection.astro**: Call-to-action sections with gradient and glass effect variants
- **StatsGrid.astro**: Statistics display with animated counters
- **StatCounter.astro**: Individual counter components with scroll-triggered animations
- **Navigation.astro**: Site navigation component

### Content Structure
- **src/content/docs/**: Documentation pages using MDX format
- **src/content.config.ts**: Content collection configuration
- Content includes design system documentation, component demos, and test suites

### Styling System
The project uses a comprehensive design system built on Tailwind CSS:

- **Yolo Brand Colors**: Primary blue palette (#2741E7, #6CA1E5) with gradients
- **Typography**: Plus Jakarta Sans for headings/body, Inconsolata for code
- **Component Classes**: Button variants, card styles, badges, icons with hover effects
- **Animation System**: Fade-in, slide, scale, and scroll-triggered animations
- **Glass Effects**: Backdrop blur utilities for modern UI elements
- **Responsive Grid**: Auto-fit, feature cards, stats, and testimonial layouts

### JavaScript Functionality
- Scroll-triggered animations using Intersection Observer API
- Counter animations with CSS custom properties
- Staggered entrance animations for component groups
- Mobile-responsive behavior adaptations

## Key Design Patterns

1. **Animation-First Approach**: Components include built-in animations with stagger delays and scroll triggers
2. **Responsive by Default**: All components adapt from mobile-first to desktop layouts
3. **Design Token System**: Consistent spacing, colors, shadows, and typography scales
4. **Glass Morphism**: Modern UI with backdrop blur and transparency effects
5. **Gradient Branding**: Extensive use of brand gradients for visual hierarchy

## File Naming Conventions

- Components use PascalCase with `.astro` extension
- Utility CSS classes use kebab-case with semantic naming
- Content files use kebab-case with `.md` or `.mdx` extensions
- Test files use kebab-case with `.test.js` extension

## Development Notes

- The project integrates Starlight's theming with custom Yolo branding
- CSS architecture uses Tailwind's layer system for proper specificity
- Components are designed to be reusable with props for customization
- Animation performance is optimized with CSS transforms and opacity changes
- Testing covers component functionality, responsive design, and animation systems