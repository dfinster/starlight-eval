---
title: "Conditional Plugins"
description: "How to conditionally enable plugins in Astro based on environment variables."
---

## Conditional Plugins in Astro

This code creates a **conditional plugin configuration** based on an environment variable:

```javascript
plugins: process.env.CHECK_LINKS
  ? [
      starlightLinksValidator({
        errorOnFallbackPages: false,
        errorOnInconsistentLocale: true,
      }),
    ]
  : [],
```

## What it does:

- **If `CHECK_LINKS` environment variable exists** → Enables the `starlightLinksValidator` plugin
- **If `CHECK_LINKS` is not set** → Uses an empty array (no plugins)

## Purpose:

The `starlightLinksValidator` plugin validates internal links in your documentation to catch:
- Broken links to other pages
- Links to non-existent files
- Inconsistent locale usage in links

## Why conditional?

Link validation can:
- **Slow down builds** significantly
- **Fail builds** if broken links are found
- Be unnecessary during development

## Usage:

```bash
# Enable link checking during build
CHECK_LINKS=1 npm run build

# Normal build without link checking
npm run build
```

This pattern lets you enable thorough link validation when needed (like in CI/CD or before releases) while keeping regular builds fast during development.

The validator configuration shows it will:
- Allow fallback pages (won't error on them)
- Error if links use incorrect locales

## Extending to Multiple Plugins

You can extend this pattern to handle multiple plugins with unique environment variables like this:

````javascript
// ...existing code...
plugins: [
  // Links validator plugin
  ...(process.env.CHECK_LINKS ? [
    starlightLinksValidator({
      errorOnFallbackPages: false,
      errorOnInconsistentLocale: true,
    })
  ] : []),

  // Another plugin with its own env var
  ...(process.env.ENABLE_SEARCH ? [
    starlightSearchPlugin({
      // search config
    })
  ] : []),

  // Third plugin
  ...(process.env.ENABLE_ANALYTICS ? [
    starlightAnalyticsPlugin({
      // analytics config
    })
  ] : []),

  // Always-enabled plugins (no env var)
  alwaysEnabledPlugin(),
],
// ...existing code...
````

## Key pattern changes:

1. **Use spread operator `...`** to flatten conditional arrays
2. **Each plugin gets its own environment variable check**
3. **Mix conditional and always-enabled plugins**

## Usage examples:

```bash
# Enable specific plugins
CHECK_LINKS=1 npm run build

# Enable multiple plugins
CHECK_LINKS=1 ENABLE_SEARCH=1 npm run build

# All plugins enabled
CHECK_LINKS=1 ENABLE_SEARCH=1 ENABLE_ANALYTICS=1 npm run build

# No optional plugins (just always-enabled ones)
npm run build
```

## Alternative approach using a helper function:

````javascript
// ...existing code...

// Helper function for cleaner conditional plugins
const conditionalPlugins = () => {
  const plugins = [];

  if (process.env.CHECK_LINKS) {
    plugins.push(starlightLinksValidator({
      errorOnFallbackPages: false,
      errorOnInconsistentLocale: true,
    }));
  }

  if (process.env.ENABLE_SEARCH) {
    plugins.push(starlightSearchPlugin({}));
  }

  if (process.env.ENABLE_ANALYTICS) {
    plugins.push(starlightAnalyticsPlugin({}));
  }

  return plugins;
};

// Then in your config:
plugins: [
  ...conditionalPlugins(),
  // Always-enabled plugins here
],
// ...existing code...
````

Both approaches work well - the spread operator method is more concise, while the helper function is more readable for complex logic.
