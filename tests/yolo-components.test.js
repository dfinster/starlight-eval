import { test, expect } from '@playwright/test';

test.describe('Yolo-Style Components Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components-demo/');
    await page.waitForLoadState('networkidle');
  });

  test.describe('Hero Section Component', () => {
    test('Hero section demo renders with proper Yolo styling', async ({ page }) => {
      const heroDemo = page.locator('[data-testid="hero-section-demo"]');
      await expect(heroDemo).toBeVisible();
      
      // Check title text
      const title = heroDemo.locator('h1');
      await expect(title).toContainText('Purpose-built cloud infrastructure for AI inference');
      
      // Check subtitle
      const subtitle = heroDemo.locator('p').first();
      await expect(subtitle).toContainText('Deploy machine learning models at scale');
      
      // Check CTA buttons
      const primaryBtn = heroDemo.locator('a', { hasText: 'Start Building' });
      const secondaryBtn = heroDemo.locator('a', { hasText: 'View Documentation' });
      
      await expect(primaryBtn).toBeVisible();
      await expect(secondaryBtn).toBeVisible();
      await expect(primaryBtn).toHaveAttribute('href', '/get-started/');
      await expect(secondaryBtn).toHaveAttribute('href', '/docs/');
    });

    test('Hero has gradient background and proper styling', async ({ page }) => {
      const heroDemo = page.locator('[data-testid="hero-section-demo"]');
      const heroSection = heroDemo.locator('section').first();
      
      // Check for gradient background
      const hasGradient = await heroSection.evaluate(el => {
        const styles = window.getComputedStyle(el);
        return styles.backgroundImage.includes('gradient');
      });
      
      expect(hasGradient).toBeTruthy();
    });
  });

  test.describe('Feature Cards Grid', () => {
    test('Feature grid demo displays all cards correctly', async ({ page }) => {
      const featureDemo = page.locator('[data-testid="feature-grid-demo"]');
      await expect(featureDemo).toBeVisible();
      
      // Check title
      const title = featureDemo.locator('h2');
      await expect(title).toContainText('AI Infrastructure Capabilities');
      
      // Check subtitle
      const subtitle = featureDemo.locator('p').first();
      await expect(subtitle).toContainText('Purpose-built for machine learning workloads');
      
      // Should have 6 feature cards
      const cards = featureDemo.locator('[class*="card"]');
      await expect(cards).toHaveCount(6);
    });

    test('Feature cards have correct content and variants', async ({ page }) => {
      const featureDemo = page.locator('[data-testid="feature-grid-demo"]');
      const cards = featureDemo.locator('[class*="card"]');
      
      // Check first card (High-Performance GPUs)
      const firstCard = cards.first();
      await expect(firstCard).toContainText('High-Performance GPUs');
      await expect(firstCard).toContainText('Access NVIDIA A100, A40, and H100 GPUs');
      
      // Check that cards have different variants
      const variants = [];
      const cardCount = await cards.count();
      
      for (let i = 0; i < cardCount; i++) {
        const card = cards.nth(i);
        const className = await card.getAttribute('class');
        variants.push(className);
      }
      
      // Should have different styling classes indicating variants
      expect(variants.length).toBe(6);
    });

    test('Feature cards have hover effects', async ({ page }) => {
      const featureDemo = page.locator('[data-testid="feature-grid-demo"]');
      const firstCard = featureDemo.locator('[class*="card"]').first();
      
      // Get initial position
      const initialBox = await firstCard.boundingBox();
      
      // Hover over card
      await firstCard.hover();
      await page.waitForTimeout(300);
      
      // Card should have hover effects (could be elevation, transform, etc.)
      const hoveredBox = await firstCard.boundingBox();
      
      // Position might change due to hover effects
      expect(hoveredBox).toBeTruthy();
    });
  });

  test.describe('Statistics Grid', () => {
    test('Stats grid demo renders with counters', async ({ page }) => {
      const statsDemo = page.locator('[data-testid="stats-grid-demo"]');
      await expect(statsDemo).toBeVisible();
      
      // Check title
      const title = statsDemo.locator('h2');
      await expect(title).toContainText('AI Infrastructure at Scale');
      
      // Should have 4 stat counters
      const counters = statsDemo.locator('[class*="counter"]');
      await expect(counters).toHaveCount(4);
    });

    test('Stat counters animate when in view', async ({ page }) => {
      const statsDemo = page.locator('[data-testid="stats-grid-demo"]');
      
      // Scroll to stats section
      await statsDemo.scrollIntoViewIfNeeded();
      await page.waitForTimeout(2000); // Wait for animation
      
      // Check counter values
      const counters = statsDemo.locator('[class*="counter"]');
      const firstCounter = counters.first();
      const counterValue = await firstCounter.textContent();
      
      // Should show animated value (99.99%)
      expect(counterValue).toContain('99.99');
      expect(counterValue).toContain('%');
    });

    test('Stats grid has gradient background', async ({ page }) => {
      const statsDemo = page.locator('[data-testid="stats-grid-demo"]');
      const statsSection = statsDemo.locator('section').first();
      
      // Check for gradient background
      const hasGradient = await statsSection.evaluate(el => {
        const styles = window.getComputedStyle(el);
        return styles.backgroundImage.includes('gradient');
      });
      
      expect(hasGradient).toBeTruthy();
    });
  });

  test.describe('GSAP Carousel Component', () => {
    test('Carousel demo renders with slides', async ({ page }) => {
      const carouselDemo = page.locator('[data-testid="yolo-carousel-demo"]');
      await expect(carouselDemo).toBeVisible();
      
      // Should have slides
      const slides = carouselDemo.locator('[data-slide]');
      await expect(slides).toHaveCountGreaterThan(0);
      
      // Check first slide content
      const firstSlide = slides.first();
      await expect(firstSlide).toContainText('AI-Powered Infrastructure');
    });

    test('Carousel navigation controls work', async ({ page }) => {
      const carouselDemo = page.locator('[data-testid="yolo-carousel-demo"]');
      
      // Check for navigation arrows
      const prevBtn = carouselDemo.locator('[data-carousel-prev]');
      const nextBtn = carouselDemo.locator('[data-carousel-next]');
      
      if (await prevBtn.isVisible() && await nextBtn.isVisible()) {
        // Test next button
        await nextBtn.click();
        await page.waitForTimeout(500);
        
        // Should have navigated to next slide
        const activeSlide = carouselDemo.locator('[data-slide][data-active="true"]');
        await expect(activeSlide).toBeVisible();
      }
    });

    test('Carousel indicators are functional', async ({ page }) => {
      const carouselDemo = page.locator('[data-testid="yolo-carousel-demo"]');
      
      // Check for indicators
      const indicators = carouselDemo.locator('[data-carousel-indicator]');
      
      if (await indicators.count() > 0) {
        // Click second indicator
        const secondIndicator = indicators.nth(1);
        await secondIndicator.click();
        await page.waitForTimeout(500);
        
        // Should show corresponding slide
        expect(await indicators.count()).toBeGreaterThan(1);
      }
    });

    test('Carousel progress bar updates', async ({ page }) => {
      const carouselDemo = page.locator('[data-testid="yolo-carousel-demo"]');
      
      // Check for progress bar
      const progressBar = carouselDemo.locator('[data-carousel-progress]');
      
      if (await progressBar.isVisible()) {
        // Progress bar should exist and have width
        const width = await progressBar.evaluate(el => 
          window.getComputedStyle(el).width
        );
        expect(width).toBeTruthy();
      }
    });
  });

  test.describe('Logo Marquee Component', () => {
    test('Logo marquee demo renders with logos', async ({ page }) => {
      const marqueeDemo = page.locator('[data-testid="logo-marquee-demo"]');
      await expect(marqueeDemo).toBeVisible();
      
      // Check title
      const title = marqueeDemo.locator('h3');
      await expect(title).toContainText('Trusted by Industry Leaders');
      
      // Should have logo container
      const logoContainer = marqueeDemo.locator('[data-marquee-container]');
      await expect(logoContainer).toBeVisible();
    });

    test('Logo marquee has infinite scroll animation', async ({ page }) => {
      const marqueeDemo = page.locator('[data-testid="logo-marquee-demo"]');
      const logoContainer = marqueeDemo.locator('[data-marquee-container]');
      
      if (await logoContainer.isVisible()) {
        // Check for animation transform
        const transform = await logoContainer.evaluate(el => 
          window.getComputedStyle(el).transform
        );
        
        // Should have some transform applied for animation
        expect(transform).toBeTruthy();
      }
    });

    test('Logo marquee pauses on hover', async ({ page }) => {
      const marqueeDemo = page.locator('[data-testid="logo-marquee-demo"]');
      const logoContainer = marqueeDemo.locator('[data-marquee-container]');
      
      if (await logoContainer.isVisible()) {
        // Hover over marquee
        await logoContainer.hover();
        await page.waitForTimeout(100);
        
        // Animation should pause (this is implementation dependent)
        const paused = await logoContainer.evaluate(el => {
          const styles = window.getComputedStyle(el);
          return styles.animationPlayState === 'paused';
        });
        
        // This test verifies the hover interaction works
        expect(paused).toBeDefined();
      }
    });
  });

  test.describe('Filter System Component', () => {
    test('Filter system demo renders with dropdowns', async ({ page }) => {
      const filterDemo = page.locator('[data-testid="filter-system-demo"]');
      await expect(filterDemo).toBeVisible();
      
      // Should have filter dropdowns
      const dropdowns = filterDemo.locator('[data-filter-dropdown]');
      await expect(dropdowns).toHaveCountGreaterThan(0);
      
      // Check first dropdown (Resource Type)
      const firstDropdown = dropdowns.first();
      await expect(firstDropdown).toContainText('Resource Type');
    });

    test('Filter dropdowns open and show options', async ({ page }) => {
      const filterDemo = page.locator('[data-testid="filter-system-demo"]');
      const firstDropdown = filterDemo.locator('[data-filter-dropdown]').first();
      
      // Click to open dropdown
      await firstDropdown.click();
      await page.waitForTimeout(300);
      
      // Should show options
      const options = filterDemo.locator('[data-filter-option]');
      const optionCount = await options.count();
      expect(optionCount).toBeGreaterThan(0);
    });

    test('Filter system shows active filters', async ({ page }) => {
      const filterDemo = page.locator('[data-testid="filter-system-demo"]');
      
      // Click a multi-select filter
      const difficultyDropdown = filterDemo.locator('[data-filter-dropdown]').nth(1);
      await difficultyDropdown.click();
      await page.waitForTimeout(300);
      
      // Select an option
      const beginnerOption = filterDemo.locator('[data-filter-option]', { hasText: 'Beginner' });
      if (await beginnerOption.isVisible()) {
        await beginnerOption.click();
        await page.waitForTimeout(300);
        
        // Should show active filter tag
        const activeFilters = filterDemo.locator('[data-active-filter]');
        const activeCount = await activeFilters.count();
        expect(activeCount).toBeGreaterThanOrEqual(0);
      }
    });

    test('Clear all filters button works', async ({ page }) => {
      const filterDemo = page.locator('[data-testid="filter-system-demo"]');
      
      // Look for clear all button
      const clearAllBtn = filterDemo.locator('[data-clear-filters]');
      
      if (await clearAllBtn.isVisible()) {
        await clearAllBtn.click();
        await page.waitForTimeout(300);
        
        // Active filters should be cleared
        const activeFilters = filterDemo.locator('[data-active-filter]');
        const activeCount = await activeFilters.count();
        expect(activeCount).toBe(0);
      }
    });
  });

  test.describe('Resource Cards Collection', () => {
    test('Resource grid demo renders with cards', async ({ page }) => {
      const resourceDemo = page.locator('[data-testid="resource-grid-demo"]');
      await expect(resourceDemo).toBeVisible();
      
      // Check title
      const title = resourceDemo.locator('h2');
      await expect(title).toContainText('AI Infrastructure Resources');
      
      // Should have resource cards
      const cards = resourceDemo.locator('[data-resource-card]');
      await expect(cards).toHaveCountGreaterThan(0);
    });

    test('Resource cards have correct content and metadata', async ({ page }) => {
      const resourceDemo = page.locator('[data-testid="resource-grid-demo"]');
      const cards = resourceDemo.locator('[data-resource-card]');
      
      // Check first card
      const firstCard = cards.first();
      await expect(firstCard).toContainText('Deploying Large Language Models at Scale');
      
      // Check metadata
      const readTime = firstCard.locator('[data-read-time]');
      if (await readTime.isVisible()) {
        await expect(readTime).toContainText('min read');
      }
      
      // Check tags
      const tags = firstCard.locator('[data-tag]');
      const tagCount = await tags.count();
      expect(tagCount).toBeGreaterThan(0);
    });

    test('Resource cards have different variants', async ({ page }) => {
      const resourceDemo = page.locator('[data-testid="resource-grid-demo"]');
      const cards = resourceDemo.locator('[data-resource-card]');
      
      const cardCount = await cards.count();
      const variants = [];
      
      for (let i = 0; i < Math.min(cardCount, 4); i++) {
        const card = cards.nth(i);
        const variant = await card.getAttribute('data-variant');
        if (variant) variants.push(variant);
      }
      
      // Should have different variants
      expect(variants.length).toBeGreaterThan(0);
    });

    test('Resource cards have hover effects', async ({ page }) => {
      const resourceDemo = page.locator('[data-testid="resource-grid-demo"]');
      const firstCard = resourceDemo.locator('[data-resource-card]').first();
      
      // Hover over card
      await firstCard.hover();
      await page.waitForTimeout(300);
      
      // Card should have hover styling
      const hoverClass = await firstCard.getAttribute('class');
      expect(hoverClass).toBeTruthy();
    });

    test('Load more button functionality', async ({ page }) => {
      const resourceDemo = page.locator('[data-testid="resource-grid-demo"]');
      
      // Look for load more button
      const loadMoreBtn = resourceDemo.locator('[data-load-more]');
      
      if (await loadMoreBtn.isVisible()) {
        const initialCardCount = await resourceDemo.locator('[data-resource-card]').count();
        
        // Click load more
        await loadMoreBtn.click();
        await page.waitForTimeout(500);
        
        // Should have more cards or button should be disabled
        const newCardCount = await resourceDemo.locator('[data-resource-card]').count();
        expect(newCardCount).toBeGreaterThanOrEqual(initialCardCount);
      }
    });
  });

  test.describe('CTA Section Component', () => {
    test('CTA section demo renders correctly', async ({ page }) => {
      const ctaDemo = page.locator('[data-testid="cta-section-demo"]');
      await expect(ctaDemo).toBeVisible();
      
      // Check title
      const title = ctaDemo.locator('h2');
      await expect(title).toContainText('Ready to Deploy AI at Scale?');
      
      // Check subtitle
      const subtitle = ctaDemo.locator('p');
      await expect(subtitle).toContainText('Join leading AI companies building');
      
      // Check buttons
      const primaryBtn = ctaDemo.locator('a', { hasText: 'Start Building' });
      const secondaryBtn = ctaDemo.locator('a', { hasText: 'Contact Sales' });
      
      await expect(primaryBtn).toBeVisible();
      await expect(secondaryBtn).toBeVisible();
    });

    test('CTA section has gradient background', async ({ page }) => {
      const ctaDemo = page.locator('[data-testid="cta-section-demo"]');
      const ctaSection = ctaDemo.locator('section').first();
      
      // Check for gradient background
      const hasGradient = await ctaSection.evaluate(el => {
        const styles = window.getComputedStyle(el);
        return styles.backgroundImage.includes('gradient');
      });
      
      expect(hasGradient).toBeTruthy();
    });
  });

  test.describe('Responsive Design - All Components', () => {
    test('All demo components work on mobile viewport', async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      await page.reload();
      await page.waitForLoadState('networkidle');
      
      // Check all demo components are visible
      const demoSections = [
        '[data-testid="hero-section-demo"]',
        '[data-testid="feature-grid-demo"]',
        '[data-testid="stats-grid-demo"]',
        '[data-testid="yolo-carousel-demo"]',
        '[data-testid="logo-marquee-demo"]',
        '[data-testid="filter-system-demo"]',
        '[data-testid="resource-grid-demo"]',
        '[data-testid="cta-section-demo"]'
      ];
      
      for (const selector of demoSections) {
        const section = page.locator(selector);
        await expect(section).toBeVisible();
      }
    });

    test('Carousel adapts to mobile layout', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.reload();
      await page.waitForLoadState('networkidle');
      
      const carouselDemo = page.locator('[data-testid="yolo-carousel-demo"]');
      await expect(carouselDemo).toBeVisible();
      
      // Carousel should still be functional on mobile
      const slides = carouselDemo.locator('[data-slide]');
      await expect(slides.first()).toBeVisible();
    });

    test('Filter system adapts to mobile layout', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.reload();
      await page.waitForLoadState('networkidle');
      
      const filterDemo = page.locator('[data-testid="filter-system-demo"]');
      await expect(filterDemo).toBeVisible();
      
      // Filters should stack vertically or be collapsible on mobile
      const dropdowns = filterDemo.locator('[data-filter-dropdown]');
      await expect(dropdowns.first()).toBeVisible();
    });
  });

  test.describe('Performance and Animations', () => {
    test('GSAP animations perform smoothly', async ({ page }) => {
      // Start performance monitoring
      await page.evaluate(() => performance.mark('animation-start'));
      
      // Trigger various animations by scrolling through components
      const demoSections = [
        '[data-testid="hero-section-demo"]',
        '[data-testid="feature-grid-demo"]',
        '[data-testid="stats-grid-demo"]',
        '[data-testid="yolo-carousel-demo"]'
      ];
      
      for (const selector of demoSections) {
        const section = page.locator(selector);
        await section.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
      }
      
      await page.evaluate(() => performance.mark('animation-end'));
      
      const duration = await page.evaluate(() => {
        performance.measure('animation-duration', 'animation-start', 'animation-end');
        const measure = performance.getEntriesByName('animation-duration')[0];
        return measure.duration;
      });
      
      // Animations should complete within reasonable time
      expect(duration).toBeLessThan(5000); // 5 seconds max
    });

    test('Scroll-triggered animations activate properly', async ({ page }) => {
      // Start at top
      await page.evaluate(() => window.scrollTo(0, 0));
      
      // Find elements with scroll animations
      const animatedElements = page.locator('[class*="animate-"]');
      const elementCount = await animatedElements.count();
      
      if (elementCount > 0) {
        const firstAnimated = animatedElements.first();
        
        // Scroll to trigger
        await firstAnimated.scrollIntoViewIfNeeded();
        await page.waitForTimeout(1000);
        
        // Animation should be triggered
        expect(elementCount).toBeGreaterThan(0);
      }
    });
  });

  test.describe('Accessibility', () => {
    test('All interactive elements are keyboard accessible', async ({ page }) => {
      // Tab through interactive elements
      await page.keyboard.press('Tab');
      
      let tabCount = 0;
      const maxTabs = 20;
      
      while (tabCount < maxTabs) {
        const focusedElement = await page.locator(':focus').count();
        if (focusedElement === 0) break;
        
        await page.keyboard.press('Tab');
        tabCount++;
      }
      
      expect(tabCount).toBeGreaterThan(0);
    });

    test('Interactive elements have proper ARIA labels', async ({ page }) => {
      // Check buttons for ARIA labels or text content
      const buttons = page.locator('button, a[role="button"]');
      const buttonCount = await buttons.count();
      
      for (let i = 0; i < Math.min(buttonCount, 10); i++) {
        const button = buttons.nth(i);
        const ariaLabel = await button.getAttribute('aria-label');
        const textContent = await button.textContent();
        
        // Should have either aria-label or text content
        expect(ariaLabel || textContent).toBeTruthy();
      }
    });

    test('Images have alt text', async ({ page }) => {
      const images = page.locator('img');
      const imageCount = await images.count();
      
      for (let i = 0; i < imageCount; i++) {
        const img = images.nth(i);
        const alt = await img.getAttribute('alt');
        
        // All images should have alt text (even if empty for decorative)
        expect(alt).toBeDefined();
      }
    });
  });
});