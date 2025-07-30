---
title: "Testing Broken Links"
description: "A description of testing broken links in the documentation"
---

- This EXTERNAL link is broken: [Broken Link](https://example.broken-com/broken-link)
- This INTERNAL relative link is broken: [Broken Link](../demos/broken-broken-link-test.md)
- This INTERNAL absolute link is broken: [Broken Link](/reference/broken-icons/#starlighticon-type)
- This link should REDIRECT to the Pig Latin Mermaid demo (when run at Netlify): [Pig Latin Demo](/pig-latin/demos/redirect-to-mermaid/)
  - See `redirects:` in astro.config.mjs for the redirect configuration.
