# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the standalone Starlight documentation website built with Astro. It showcases Starlight's capabilities while serving as comprehensive documentation for the framework. The site supports 14+ languages and demonstrates advanced Astro/Starlight features.

## Essential Commands

**Development:**
```bash
npm run dev          # Start development server
npm run typecheck    # Run TypeScript validation
npm run test         # Run Playwright accessibility tests (installs deps automatically)
```

**Production:**
```bash
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run linkcheck    # Build with link validation enabled
```

**Specialized:**
```bash
npm run lunaria:build    # Build i18n translation dashboard
npm run grammars         # Generate syntax highlighting grammars
```

## Architecture

**Content Structure:**
- `src/content/docs/` - Documentation in MDX format, mirrored across 14+ language directories
- `src/content/i18n/` - Translation files (JSON) for UI strings
- Content collections defined in `src/content.config.ts` using Starlight's schema loaders

**Key Directories:**
- `src/components/` - Custom Astro components including theme designer, showcase grids, and interactive previews
- `src/assets/` - Static assets organized by type (logos, hero images, showcase screenshots, testimonial photos, theme previews)
- `grammars/` - Custom TextMate syntax highlighting grammars with generation script
- `lunaria/` - i18n tooling configuration and custom styling
- `__a11y__/` - Accessibility testing suite using Playwright + axe

**Configuration:**
- `astro.config.mjs` - Main config with extensive i18n setup, Netlify deployment, and Starlight integration
- `lunaria.config.json` - Translation progress tracking configuration
- `netlify.toml` - Deployment configuration for Netlify

## Development Patterns

**Internationalization:**
- All content must be mirrored across supported language directories
- UI translations go in `src/content/i18n/{locale}.json`
- Lunaria tracks translation progress and generates dashboards

**Testing:**
- Accessibility testing is mandatory - run `npm run test` before commits
- Tests use Playwright to validate entire site against WCAG standards
- Link validation available via `CHECK_LINKS=true` environment variable

**Content Guidelines:**
- Documentation files use MDX format with Starlight components
- Component examples should include interactive previews where possible
- Showcase entries require screenshots in `src/assets/showcase/`

**Build Artifacts:**
- `.astro/` directory contains auto-generated files and should remain in `.gitignore`
- `dist/` contains build output for deployment

## Special Features

**Theme Designer:** Interactive color palette editor in `src/components/theme-designer/` with real-time preview capabilities.

**Multi-language Routing:** Automatic locale detection and routing configured in Astro config with comprehensive sidebar translations.

**Component Showcase:** Living examples of Starlight components with copy-paste code snippets.

**Custom Grammars:** TextMate grammar generation for enhanced syntax highlighting of specialized formats like Markdoc.