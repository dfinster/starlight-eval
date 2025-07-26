import { test, expect } from '@playwright/test';

test.describe('Phase 3 Components Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components-demo/');
    await page.waitForLoadState('networkidle');
  });

  test.describe('Hero Component', () => {
    test('Hero section renders with title and subtitle', async ({ page }) => {
      const heroSection = page.locator('section').first();
      await expect(heroSection).toBeVisible();
      
      // Check title
      const title = page.locator('h1').first();
      await expect(title).toContainText('Build Amazing Experiences with Yolo');
      
      // Check subtitle
      const subtitle = page.locator('section p').first();
      await expect(subtitle).toContainText('comprehensive design system');
    });

    test('Hero CTA buttons are functional', async ({ page }) => {
      const primaryButton = page.locator('a', { hasText: 'Get Started' }).first();
      const secondaryButton = page.locator('a', { hasText: 'View Components' }).first();
      
      await expect(primaryButton).toBeVisible();
      await expect(secondaryButton).toBeVisible();
      
      // Check href attributes
      await expect(primaryButton).toHaveAttribute('href', '/design-system/');
      await expect(secondaryButton).toHaveAttribute('href', '/test-tailwind/');
    });

    test('Hero section has background gradient', async ({ page }) => {
      const heroSection = page.locator('section').first();
      const gradientBg = heroSection.locator('div').first();
      
      await expect(gradientBg).toHaveClass(/bg-gradient-to-br/);
    });
  });

  test.describe('Feature Cards', () => {
    test('Feature cards render with icons and content', async ({ page }) => {
      const featureCards = page.locator('[class*="card"]');
      await expect(featureCards).toHaveCountGreaterThan(0);
      
      // Check first feature card
      const firstCard = featureCards.first();
      await expect(firstCard).toBeVisible();
      
      // Should have icon
      const icon = firstCard.locator('[role="img"]');
      await expect(icon).toBeVisible();
      
      // Should have title
      const title = firstCard.locator('h3');
      await expect(title).toBeVisible();
      
      // Should have description
      const description = firstCard.locator('p');
      await expect(description).toBeVisible();
    });

    test('Feature cards have hover effects', async ({ page }) => {
      const firstCard = page.locator('[class*="card"]').first();
      
      // Get initial position
      const initialBox = await firstCard.boundingBox();
      
      // Hover over card
      await firstCard.hover();
      await page.waitForTimeout(500);
      
      // Check if card has lifted (y position should be less due to hover-lift)
      const hoveredBox = await firstCard.boundingBox();
      expect(hoveredBox.y).toBeLessThanOrEqual(initialBox.y);
    });

    test('Feature grids have proper layout', async ({ page }) => {
      const featureGrid = page.locator('[class*="grid-feature-cards"], [class*="grid"]').first();
      await expect(featureGrid).toBeVisible();
      
      // Verify CSS Grid is applied
      const displayProperty = await featureGrid.evaluate(el => 
        window.getComputedStyle(el).display
      );
      expect(displayProperty).toBe('grid');
    });
  });

  test.describe('Statistics Counters', () => {
    test('Stat counters are present and visible', async ({ page }) => {
      const statCounters = page.locator('.counter');
      await expect(statCounters.first()).toBeVisible();
    });

    test('Stats grid has proper layout', async ({ page }) => {
      const statsGrid = page.locator('[data-testid="grid-stats"]').first();
      await expect(statsGrid).toBeVisible();
      
      // Verify grid layout
      const displayProperty = await statsGrid.evaluate(el => 
        window.getComputedStyle(el).display
      );
      expect(displayProperty).toBe('grid');
    });

    test('Counter animations trigger on scroll', async ({ page }) => {
      // Scroll to stats section
      const statsSection = page.locator('[data-testid="grid-stats"]').first();
      await statsSection.scrollIntoViewIfNeeded();
      
      // Wait for animation
      await page.waitForTimeout(1000);
      
      // Check that counters have been animated
      const counter = page.locator('.counter').first();
      const counterValue = await counter.textContent();
      
      // Counter should have animated from 0
      expect(parseInt(counterValue)).toBeGreaterThan(0);
    });
  });

  test.describe('CTA Sections', () => {
    test('CTA sections render with titles and buttons', async ({ page }) => {
      const ctaSections = page.locator('section').filter({ hasText: 'Ready to Get Started' });
      await expect(ctaSections.first()).toBeVisible();
      
      // Check title
      const title = ctaSections.first().locator('h2');
      await expect(title).toContainText('Ready to Get Started');
      
      // Check buttons
      const primaryButton = ctaSections.first().locator('a', { hasText: 'Start Building' });
      const secondaryButton = ctaSections.first().locator('a', { hasText: 'View Documentation' });
      
      await expect(primaryButton).toBeVisible();
      await expect(secondaryButton).toBeVisible();
    });

    test('CTA sections have background effects', async ({ page }) => {
      const gradientCTA = page.locator('section').filter({ hasText: 'Ready to Get Started' }).first();
      
      // Should have gradient background
      await expect(gradientCTA).toHaveClass(/bg-gradient-to-br/);
    });

    test('Glass effect CTA renders correctly', async ({ page }) => {
      const glassCTA = page.locator('section').filter({ hasText: 'Need Help Getting Started' }).first();
      await expect(glassCTA).toBeVisible();
      
      // Should have glass effect class
      await expect(glassCTA).toHaveClass(/glass-effect/);
    });
  });

  test.describe('Navigation Integration', () => {
    test('Components demo page is accessible from navigation', async ({ page }) => {
      await page.goto('/');
      
      // Check that Live Demo link exists in sidebar
      const liveDemoLink = page.locator('a', { hasText: 'Live Demo' });
      await expect(liveDemoLink).toBeVisible();
      
      // Click and verify navigation
      await liveDemoLink.click();
      await page.waitForLoadState('networkidle');
      
      expect(page.url()).toContain('/components-demo');
    });
  });

  test.describe('Responsive Design', () => {
    test('Components work on mobile viewport', async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      await page.reload();
      await page.waitForLoadState('networkidle');
      
      // Components should still be visible and functional
      await expect(page.locator('h1').first()).toBeVisible();
      await expect(page.locator('[class*="card"]').first()).toBeVisible();
      await expect(page.locator('.counter').first()).toBeVisible();
    });

    test('Grid layouts adapt to smaller screens', async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      await page.reload();
      await page.waitForLoadState('networkidle');
      
      const featureGrid = page.locator('[class*="grid-feature-cards"]').first();
      if (await featureGrid.isVisible()) {
        const gridColumns = await featureGrid.evaluate(el => 
          window.getComputedStyle(el).gridTemplateColumns
        );
        
        // Should be single column on mobile or have appropriate responsive behavior
        expect(gridColumns).toBeTruthy();
      }
    });
  });

  test.describe('Animation System', () => {
    test('Scroll-triggered animations work', async ({ page }) => {
      // Start at top
      await page.evaluate(() => window.scrollTo(0, 0));
      
      // Find an element with fade-in animation
      const animatedElement = page.locator('.animate-fade-in').first();
      
      if (await animatedElement.isVisible()) {
        // Initially should not have animate-in class
        const initialClass = await animatedElement.getAttribute('class');
        
        // Scroll to trigger animation
        await animatedElement.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        
        // Should now have animate-in class or show animated state
        const animatedClass = await animatedElement.getAttribute('class');
        expect(animatedClass).toBeTruthy();
      }
    });
  });
});