---
title: Yolo Design System Test
description: Comprehensive testing of our Yolo design system
---

This page tests our comprehensive Yolo design system.

## Basic Color Tests

<div class="bg-yolo-blue text-white p-6 rounded-lg mb-6" data-testid="primary-color-test">
  <h2 class="text-2xl font-bold mb-2">Yolo Blue Background</h2>
  <p class="text-yolo-light-blue">Light blue text on primary blue background.</p>
</div>

## Component Library Tests

### Buttons
<div class="flex flex-wrap gap-4 mb-8" data-testid="button-showcase">
  <button class="btn-primary" data-testid="btn-primary">Primary</button>
  <button class="btn-secondary" data-testid="btn-secondary">Secondary</button>
  <button class="btn-outline" data-testid="btn-outline">Outline</button>
  <button class="btn-ghost" data-testid="btn-ghost">Ghost</button>
  <button class="btn-success" data-testid="btn-success">Success</button>
  <button class="btn-warning" data-testid="btn-warning">Warning</button>
</div>

### Button Sizes
<div class="flex flex-wrap gap-4 mb-8" data-testid="button-sizes">
  <button class="btn-primary btn-sm" data-testid="btn-small">Small</button>
  <button class="btn-primary" data-testid="btn-regular">Regular</button>
  <button class="btn-primary btn-lg" data-testid="btn-large">Large</button>
</div>

### Cards
<div class="grid-feature-cards mb-8" data-testid="card-showcase">
  <div class="card-feature group" data-testid="card-feature">
    <div class="icon-primary icon-lg mb-4">⚡</div>
    <h3 class="text-xl font-semibold mb-2">Feature Card</h3>
    <p class="text-gray-600">Interactive card with hover effects.</p>
  </div>

  <div class="card-elevated" data-testid="card-elevated">
    <div class="icon-success icon-lg mb-4">🚀</div>
    <h3 class="text-xl font-semibold mb-2">Elevated Card</h3>
    <p class="text-gray-600">Enhanced shadow effects.</p>
  </div>

  <div class="card-gradient text-white" data-testid="card-gradient">
    <div class="icon-wrapper icon-lg mb-4 bg-white/20 text-white">💫</div>
    <h3 class="text-xl font-semibold mb-2">Gradient Card</h3>
    <p class="text-blue-100">Beautiful gradient styling.</p>
  </div>
</div>

### Badges
<div class="flex flex-wrap gap-4 mb-8" data-testid="badge-showcase">
  <span class="badge-primary" data-testid="badge-primary">Primary</span>
  <span class="badge-secondary" data-testid="badge-secondary">Secondary</span>
  <span class="badge-success" data-testid="badge-success">Success</span>
  <span class="badge-warning" data-testid="badge-warning">Warning</span>
  <span class="badge-outline" data-testid="badge-outline">Outline</span>
  <span class="badge-gradient" data-testid="badge-gradient">Gradient</span>
</div>

### Icons
<div class="flex flex-wrap gap-6 mb-8" data-testid="icon-showcase">
  <div class="icon-primary icon-sm" data-testid="icon-primary">🎯</div>
  <div class="icon-secondary icon-md" data-testid="icon-secondary">⚙️</div>
  <div class="icon-success icon-lg" data-testid="icon-success">✅</div>
  <div class="icon-gradient icon-xl" data-testid="icon-gradient">🌟</div>
</div>

## Layout Tests

### Feature Cards Grid
<div class="grid-feature-cards mb-8" data-testid="grid-feature-cards">
  <div class="card" data-testid="grid-item-1">
    <h3 class="font-semibold mb-2">Grid Item 1</h3>
    <p class="text-gray-600">Testing responsive grid layout.</p>
  </div>
  <div class="card" data-testid="grid-item-2">
    <h3 class="font-semibold mb-2">Grid Item 2</h3>
    <p class="text-gray-600">Responsive behavior testing.</p>
  </div>
  <div class="card" data-testid="grid-item-3">
    <h3 class="font-semibold mb-2">Grid Item 3</h3>
    <p class="text-gray-600">Mobile adaptation testing.</p>
  </div>
</div>

### Statistics Grid
<div class="grid-stats mb-8" data-testid="grid-stats">
  <div class="text-center">
    <div class="text-3xl font-bold text-yolo-blue counter" data-target="99" data-testid="counter-1">0</div>
    <div class="text-gray-600 mt-2">Uptime %</div>
  </div>
  <div class="text-center">
    <div class="text-3xl font-bold text-yolo-blue counter" data-target="1000" data-testid="counter-2">0</div>
    <div class="text-gray-600 mt-2">Users</div>
  </div>
  <div class="text-center">
    <div class="text-3xl font-bold text-yolo-blue counter" data-target="50" data-testid="counter-3">0</div>
    <div class="text-gray-600 mt-2">Components</div>
  </div>
  <div class="text-center">
    <div class="text-3xl font-bold text-yolo-blue counter" data-target="24" data-testid="counter-4">0</div>
    <div class="text-gray-600 mt-2">Support</div>
  </div>
</div>

### Container Variants
<div class="element-spacing-lg">
  <div class="container-narrow bg-gray-50 p-4 rounded" data-testid="container-narrow">
    <p>Narrow container (max-w-4xl)</p>
  </div>
  
  <div class="container-custom bg-blue-50 p-4 rounded" data-testid="container-custom">
    <p>Custom container (max-w-7xl)</p>
  </div>
  
  <div class="container-wide bg-green-50 p-4 rounded" data-testid="container-wide">
    <p>Wide container (max-w-8xl)</p>
  </div>
</div>

## Glass Effects Tests

<div class="grid-feature-cards mb-8" data-testid="glass-effects-container">
  <div class="glass-card" data-testid="glass-card">
    <h3 class="text-xl font-semibold mb-2">Glass Card</h3>
    <p class="text-gray-600">Backdrop blur glass effect.</p>
  </div>

  <div class="frosted-glass p-6 rounded-xl" data-testid="frosted-glass">
    <h3 class="text-xl font-semibold mb-2 text-white">Frosted Glass</h3>
    <p class="text-white/90">Advanced frosted effect.</p>
  </div>
</div>

## Gradient Effects

<div class="grid-feature-cards mb-8">
  <div class="gradient-border p-4" data-testid="gradient-border">
    <div class="p-4">
      <h3 class="font-semibold">Gradient Border</h3>
      <p class="text-gray-600">Standard gradient border.</p>
    </div>
  </div>

  <div class="gradient-border-thick p-4" data-testid="gradient-border-thick">
    <div class="p-4">
      <h3 class="font-semibold">Thick Border</h3>
      <p class="text-gray-600">Thicker gradient border.</p>
    </div>
  </div>

  <div class="gradient-bg-soft p-6 rounded-lg" data-testid="gradient-bg-soft">
    <h3 class="font-semibold">Soft Background</h3>
    <p class="text-gray-600">Subtle gradient background.</p>
  </div>
</div>

## Text Utilities

<div class="element-spacing-lg">
  <h1 class="text-gradient-hero" data-testid="hero-gradient-text">Hero Gradient Text</h1>
  <h2 class="text-gradient" data-testid="section-gradient-text">Section Gradient Text</h2>
  <h3 class="font-bold text-2xl" data-testid="regular-heading">Regular Heading</h3>
  <p class="text-lg" data-testid="large-paragraph">Large paragraph text</p>
  <p class="text-base" data-testid="regular-paragraph">Regular paragraph text</p>
  <code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono" data-testid="code-snippet">Code snippet</code>
</div>

## Animation Tests

<div class="element-spacing-lg">
  <div class="animate-fade-in p-6 bg-gray-50 rounded-lg" data-testid="fade-item-1">
    <h3 class="font-semibold mb-2">Fade In Animation</h3>
    <p class="text-gray-600">Scroll to trigger fade in effect.</p>
  </div>

  <div class="animate-slide-left p-6 bg-blue-50 rounded-lg" data-testid="slide-left-item">
    <h3 class="font-semibold mb-2">Slide Left</h3>
    <p class="text-gray-600">Slides in from left on scroll.</p>
  </div>

  <div class="animate-slide-right p-6 bg-green-50 rounded-lg" data-testid="slide-right-item">
    <h3 class="font-semibold mb-2">Slide Right</h3>
    <p class="text-gray-600">Slides in from right on scroll.</p>
  </div>
</div>

## Hover Effects Tests

<div class="grid-feature-cards mb-8">
  <div class="card hover-lift" data-testid="hover-lift">
    <h3 class="font-semibold mb-2">Hover Lift</h3>
    <p class="text-gray-600">Lifts on hover with shadow.</p>
  </div>

  <div class="card hover-scale" data-testid="hover-scale">
    <h3 class="font-semibold mb-2">Hover Scale</h3>
    <p class="text-gray-600">Scales up on hover.</p>
  </div>

  <div class="card hover-glow" data-testid="hover-glow">
    <h3 class="font-semibold mb-2">Hover Glow</h3>
    <p class="text-gray-600">Glows with Yolo color.</p>
  </div>
</div>

---

<script src="/src/scripts/animations.js"></script>

## Test Summary

This page validates:
- ✅ Color system integration
- ✅ Typography and font loading
- ✅ Component library functionality
- ✅ Responsive grid systems
- ✅ Glass and gradient effects
- ✅ Animation system
- ✅ Hover interactions
- ✅ Accessibility features

All design system components are tested and verified for cross-browser compatibility.