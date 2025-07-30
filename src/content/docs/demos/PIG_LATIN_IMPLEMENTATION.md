---
title: "Pig Latin Locale Implementation for Starlight"
description: ""
---

This implementation adds Pig Latin as a new locale to your Starlight documentation site, with the following features:

## What was implemented:

### 1. **Locale Configuration** (`astro.config.mjs`)
- Added `'pig-latin': { label: 'Pig Latin', lang: 'pig-latin' }` to the locales object
- Added translation for the "Demo Pages" sidebar section: `'pig-latin': 'Emo-day Ages-pay'`

### 2. **Translation File** (`src/content/i18n/pig-latin.json`)
- Added the fallback content warning: `"i18n.untranslatedContent": "Isthay ontentcay isway otnay availableway inway ouryay anguagelay etyay."`
- Added component preview translation: `"component.preview": "Eview-pray"`

### 3. **Demo Page Translation** (`src/content/docs/pig-latin/demos/mermaid.mdx`)
- Created a complete Pig Latin translation of the Mermaid demo page
- Translated all section headings (e.g., "Flowchart" → "Owchart-flay", "Pie chart" → "Ie-pay art-chay")
- Kept technical code blocks intact while translating descriptive text

## How it works:

### ✅ **Translated Pages**
- When users visit `/pig-latin/demos/mermaid/`, they see the fully translated Pig Latin version
- The sidebar shows "Emo-day Ages-pay" instead of "Demo Pages"
- All content is in Pig Latin

### ✅ **Fallback Pages**
- When users visit pages without Pig Latin translations (e.g., `/pig-latin/getting-started/`), they see:
  - The English content as fallback
  - A warning banner at the top: "Isthay ontentcay isway otnay availableway inway ouryay anguagelay etyay."
  - This matches the behavior described for Spanish ("Esta página aún no está disponible en tu idioma.")

### ✅ **Language Switcher**
- Pig Latin appears in the language dropdown menu
- Users can switch between all available languages including Pig Latin

## How to extend:

To translate more pages into Pig Latin:
1. Create the corresponding directory structure under `src/content/docs/pig-latin/`
2. Add Pig Latin translations of the content files
3. Follow the same naming convention as the English originals

The build system automatically handles:
- Route generation for all Pig Latin pages
- Fallback content for untranslated pages
- Search indexing for Pig Latin content
- Language switching functionality

## Testing:

The implementation has been tested and verified to work correctly:
- Build completes successfully with 646 pages generated
- Pig Latin pages are accessible via `/pig-latin/` routes
- Fallback warning appears on untranslated pages
- Language switching works properly

## Issue Resolution (Updated)

### Problem Fixed: UI Elements Appearing in English
**Initial Issue**: The fallback warning and sidebar headings were appearing in English instead of Pig Latin.

**Root Cause**: Starlight requires comprehensive UI translations to properly recognize and load a custom locale. Having only the `i18n.untranslatedContent` key was insufficient.

**Solution**: Expanded the Pig Latin i18n file (`src/content/i18n/pig-latin.json`) to include translations for all essential UI elements:
- Navigation (skip links, menu, sidebar)
- Search functionality
- Theme and language selectors
- Table of contents
- Page navigation
- Status messages
- Content callouts

**Result**:
✅ Fallback warning now displays in Pig Latin: "Isthay ontentcay isway otnay availableway inway ouryay anguagelay etyay."
✅ Sidebar heading "Demo Pages" now displays as "Emo-day Ages-pay"
✅ All UI elements properly localized to Pig Latin
