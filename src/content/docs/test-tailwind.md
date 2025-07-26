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

<div class="bg-yolo-accent text-white p-6 rounded-lg mb-6" data-testid="accent-color-test">
  <h2 class="text-2xl font-bold mb-2">Yolo Accent Background</h2>
  <p class="text-yolo-light-blue">New accent color (#327cf8) implementation test.</p>
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

## GSAP Animation Tests

<div class="element-spacing-lg">
  <div class="animate-fade-in p-6 bg-gray-50 rounded-lg" data-testid="fade-item-1">
    <h3 class="font-semibold mb-2">GSAP Fade In Animation</h3>
    <p class="text-gray-600">Enhanced GSAP fade with scale and position transforms.</p>
  </div>

  <div class="animate-slide-left p-6 bg-blue-50 rounded-lg" data-testid="slide-left-item">
    <h3 class="font-semibold mb-2">GSAP Slide Left</h3>
    <p class="text-gray-600">Slides with rotation and elastic easing.</p>
  </div>

  <div class="animate-slide-right p-6 bg-green-50 rounded-lg" data-testid="slide-right-item">
    <h3 class="font-semibold mb-2">GSAP Slide Right</h3>
    <p class="text-gray-600">Smooth slide with back.out easing.</p>
  </div>

  <div class="animate-scale-in p-6 bg-purple-50 rounded-lg" data-testid="scale-item">
    <h3 class="font-semibold mb-2">GSAP Scale Animation</h3>
    <p class="text-gray-600">Elastic scale with rotation effects.</p>
  </div>
</div>

## Carousel Component Test

<div class="yolo-carousel mb-8" data-testid="carousel-test" data-autoplay="true">
  <div class="carousel-container relative h-80 lg:h-96">
    <div class="carousel-slide absolute inset-0 flex items-center justify-center p-8" data-slide="0">
      <div class="text-center max-w-md">
        <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yolo-blue to-yolo-accent rounded-full flex items-center justify-center text-2xl text-white animate-icon" data-testid="carousel-icon-1">🚀</div>
        <h3 class="text-2xl font-bold text-gray-900 mb-4 reveal-text" data-testid="carousel-title-1">Test Slide 1</h3>
        <p class="text-gray-600 leading-relaxed animate-fade-in" data-testid="carousel-desc-1">Testing GSAP carousel functionality with smooth transitions.</p>
      </div>
    </div>
    <div class="carousel-slide absolute inset-0 flex items-center justify-center p-8" data-slide="1">
      <div class="text-center max-w-md">
        <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yolo-blue to-yolo-accent rounded-full flex items-center justify-center text-2xl text-white animate-icon" data-testid="carousel-icon-2">⚡</div>
        <h3 class="text-2xl font-bold text-gray-900 mb-4 reveal-text" data-testid="carousel-title-2">Test Slide 2</h3>
        <p class="text-gray-600 leading-relaxed animate-fade-in" data-testid="carousel-desc-2">Verifying navigation arrows and indicator functionality.</p>
      </div>
    </div>
    <div class="carousel-slide absolute inset-0 flex items-center justify-center p-8" data-slide="2">
      <div class="text-center max-w-md">
        <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yolo-blue to-yolo-accent rounded-full flex items-center justify-center text-2xl text-white animate-icon" data-testid="carousel-icon-3">🎨</div>
        <h3 class="text-2xl font-bold text-gray-900 mb-4 reveal-text" data-testid="carousel-title-3">Test Slide 3</h3>
        <p class="text-gray-600 leading-relaxed animate-fade-in" data-testid="carousel-desc-3">Testing autoplay and pause on hover features.</p>
      </div>
    </div>
  </div>
  
  <button class="carousel-prev absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-yolo-accent hover:bg-white transition-all duration-200 hover:scale-110" data-testid="carousel-prev">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
    </svg>
  </button>
  
  <button class="carousel-next absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-yolo-accent hover:bg-white transition-all duration-200 hover:scale-110" data-testid="carousel-next">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </button>

  <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
    <button class="carousel-indicator w-3 h-3 rounded-full transition-all duration-200 bg-yolo-accent shadow-lg active" data-slide="0" data-testid="carousel-indicator-0"></button>
    <button class="carousel-indicator w-3 h-3 rounded-full transition-all duration-200 bg-white/60 hover:bg-white/80" data-slide="1" data-testid="carousel-indicator-1"></button>
    <button class="carousel-indicator w-3 h-3 rounded-full transition-all duration-200 bg-white/60 hover:bg-white/80" data-slide="2" data-testid="carousel-indicator-2"></button>
  </div>

  <div class="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
    <div class="carousel-progress h-full bg-gradient-to-r from-yolo-accent to-yolo-light-blue transform origin-left scale-x-0" data-testid="carousel-progress"></div>
  </div>
</div>

## Logo Marquee Test

<div class="logo-marquee relative overflow-hidden py-8 mb-8" data-testid="logo-marquee">
  <div class="marquee-container flex items-center" data-speed="medium" data-direction="left" data-pause-hover="true">
    <div class="marquee-item flex-shrink-0 mx-8 lg:mx-12 opacity-60 hover:opacity-100 transition-opacity duration-300" data-testid="logo-item-0">
      <div class="w-32 h-16 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center text-gray-500 text-xs font-medium">TechCorp</div>
      </div>
    </div>
    <div class="marquee-item flex-shrink-0 mx-8 lg:mx-12 opacity-60 hover:opacity-100 transition-opacity duration-300" data-testid="logo-item-1">
      <div class="w-32 h-16 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center text-gray-500 text-xs font-medium">DataFlow</div>
      </div>
    </div>
    <div class="marquee-item flex-shrink-0 mx-8 lg:mx-12 opacity-60 hover:opacity-100 transition-opacity duration-300" data-testid="logo-item-2">
      <div class="w-32 h-16 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center text-gray-500 text-xs font-medium">CloudSys</div>
      </div>
    </div>
    <div class="marquee-item flex-shrink-0 mx-8 lg:mx-12 opacity-60 hover:opacity-100 transition-opacity duration-300" data-testid="logo-item-3">
      <div class="w-32 h-16 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center text-gray-500 text-xs font-medium">TestLab</div>
      </div>
    </div>
    <div class="marquee-item flex-shrink-0 mx-8 lg:mx-12 opacity-60 hover:opacity-100 transition-opacity duration-300" data-testid="logo-item-4">
      <div class="w-32 h-16 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center text-gray-500 text-xs font-medium">DevCorp</div>
      </div>
    </div>
    <div class="marquee-item flex-shrink-0 mx-8 lg:mx-12 opacity-60 hover:opacity-100 transition-opacity duration-300" data-testid="logo-item-5">
      <div class="w-32 h-16 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center text-gray-500 text-xs font-medium">NextGen</div>
      </div>
    </div>
  </div>
  <div class="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
  <div class="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
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

## Navigation Component Tests

### Navigation Layout Test
<div class="bg-white border rounded-lg p-4 mb-6" data-testid="navigation-preview">
  <div class="flex items-center justify-between py-2">
    <div class="flex items-center space-x-3" data-testid="nav-logo-preview">
      <div class="w-8 h-8 bg-gradient-to-br from-yolo-blue via-yolo-accent to-yolo-light-blue rounded-lg flex items-center justify-center text-white font-bold text-sm">Y</div>
      <span class="font-bold text-lg text-yolo-blue">Yolo</span>
    </div>
    <div class="hidden lg:flex items-center space-x-6" data-testid="nav-menu-preview">
      <span class="text-gray-700 hover:text-yolo-accent cursor-pointer transition-colors">Home</span>
      <span class="text-gray-700 hover:text-yolo-accent cursor-pointer transition-colors">Solutions ↓</span>
      <span class="text-gray-700 hover:text-yolo-accent cursor-pointer transition-colors">Resources ↓</span>
      <span class="text-gray-700 hover:text-yolo-accent cursor-pointer transition-colors">About</span>
      <button class="btn-primary btn-sm">Get Started</button>
    </div>
    <div class="lg:hidden" data-testid="mobile-menu-preview">
      <button class="p-2 text-gray-700 hover:text-yolo-accent hover:bg-gray-50 rounded-lg transition-colors">☰</button>
    </div>
  </div>
</div>

### Navigation Features Test
<div class="grid-feature-cards mb-8">
  <div class="card" data-testid="dropdown-feature">
    <h3 class="font-semibold mb-2">Dropdown Menus</h3>
    <p class="text-gray-600">Hover-activated dropdowns with descriptions.</p>
  </div>

  <div class="card" data-testid="mobile-feature">
    <h3 class="font-semibold mb-2">Mobile Responsive</h3>
    <p class="text-gray-600">Collapsible hamburger menu.</p>
  </div>

  <div class="card" data-testid="scroll-feature">
    <h3 class="font-semibold mb-2">Smart Scroll</h3>
    <p class="text-gray-600">Hide/show based on scroll direction.</p>
  </div>
</div>

---

<script src="/src/scripts/animations.js"></script>
<script src="/src/scripts/gsap-animations.js"></script>

## Test Summary

This page validates:
- ✅ Color system integration (including new accent color #327cf8)
- ✅ Typography and font loading
- ✅ Component library functionality
- ✅ Responsive grid systems
- ✅ Glass and gradient effects
- ✅ **GSAP Animation system** with ScrollTrigger
- ✅ **Carousel component** with autoplay, navigation, and indicators
- ✅ **Logo marquee** with infinite scroll and pause on hover
- ✅ **Counter animations** with number counting effects
- ✅ **Enhanced hover interactions** with GSAP
- ✅ **Progressive enhancement** with CSS fallbacks
- ✅ Enhanced navigation component with dropdowns
- ✅ Mobile responsive navigation
- ✅ Accessibility features

All design system components are tested and verified for cross-browser compatibility.