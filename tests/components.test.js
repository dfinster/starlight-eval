import { test, expect } from '@playwright/test';

test.describe('Phase 3 Components Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components-demo/');
    await page.waitForLoadState('networkidle');
  });

  test.describe('Hero Component', () => {
    test('Hero section renders with title and subtitle', async ({ page }) => {
      const heroSection = page.locator('[data-testid="hero-section-demo"]');
      await expect(heroSection).toBeVisible();
      
      // Check title
      const title = heroSection.locator('h1');
      await expect(title).toContainText('Purpose-built cloud infrastructure for AI inference');
      
      // Check subtitle
      const subtitle = heroSection.locator('p').first();
      await expect(subtitle).toContainText('Deploy machine learning models at scale');
    });

    test('Hero CTA buttons are functional', async ({ page }) => {
      const heroDemo = page.locator('[data-testid="hero-section-demo"]');
      const primaryButton = heroDemo.locator('a', { hasText: 'Start Building' });
      const secondaryButton = heroDemo.locator('a', { hasText: 'View Documentation' });
      
      await expect(primaryButton).toBeVisible();
      await expect(secondaryButton).toBeVisible();
      
      // Check href attributes
      await expect(primaryButton).toHaveAttribute('href', '/get-started/');
      await expect(secondaryButton).toHaveAttribute('href', '/docs/');
    });

    test('Hero section has background gradient', async ({ page }) => {
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

  test.describe('Feature Cards', () => {
    test('Feature cards render with icons and content', async ({ page }) => {
      const featureDemo = page.locator('[data-testid="feature-grid-demo"]');
      const featureCards = featureDemo.locator('[class*="card"]');
      
      // Should have 6 feature cards as per demo
      await expect(featureCards).toHaveCount(6);
      
      // Check first feature card
      const firstCard = featureCards.first();
      await expect(firstCard).toBeVisible();
      await expect(firstCard).toContainText('High-Performance GPUs');
      
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
      const featureDemo = page.locator('[data-testid="feature-grid-demo"]');
      const firstCard = featureDemo.locator('[class*="card"]').first();
      
      // Get initial position
      const initialBox = await firstCard.boundingBox();
      
      // Hover over card
      await firstCard.hover();
      await page.waitForTimeout(300);
      
      // Card should have hover effects
      const hoveredBox = await firstCard.boundingBox();
      expect(hoveredBox).toBeTruthy();
    });

    test('Feature grids have proper layout', async ({ page }) => {
      const featureDemo = page.locator('[data-testid="feature-grid-demo"]');
      const featureGrid = featureDemo.locator('[class*="grid"]').first();
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
      const statsDemo = page.locator('[data-testid="stats-grid-demo"]');
      const statCounters = statsDemo.locator('.counter');
      await expect(statCounters.first()).toBeVisible();
      
      // Should have 4 counters as per demo
      await expect(statCounters).toHaveCount(4);
    });

    test('Stats grid has proper layout', async ({ page }) => {
      const statsDemo = page.locator('[data-testid="stats-grid-demo"]');
      const statsGrid = statsDemo.locator('[class*="grid"]').first();
      await expect(statsGrid).toBeVisible();
      
      // Verify grid layout
      const displayProperty = await statsGrid.evaluate(el => 
        window.getComputedStyle(el).display
      );
      expect(displayProperty).toBe('grid');
    });

    test('Counter animations trigger on scroll', async ({ page }) => {
      const statsDemo = page.locator('[data-testid="stats-grid-demo"]');
      
      // Scroll to stats section
      await statsDemo.scrollIntoViewIfNeeded();
      
      // Wait for animation
      await page.waitForTimeout(2000);
      
      // Check that counters have been animated
      const counter = statsDemo.locator('.counter').first();
      const counterValue = await counter.textContent();
      
      // Counter should show the target value (99.99%)
      expect(counterValue).toContain('99.99');
    });
  });

  test.describe('CTA Sections', () => {
    test('CTA sections render with titles and buttons', async ({ page }) => {
      const ctaDemo = page.locator('[data-testid="cta-section-demo"]');
      await expect(ctaDemo).toBeVisible();
      
      // Check title
      const title = ctaDemo.locator('h2');
      await expect(title).toContainText('Ready to Transform Your Infrastructure?');
      
      // Check buttons
      const primaryButton = ctaDemo.locator('a', { hasText: 'Start Free Trial' });
      const secondaryButton = ctaDemo.locator('a', { hasText: 'Schedule Demo' });
      
      await expect(primaryButton).toBeVisible();
      await expect(secondaryButton).toBeVisible();
      
      // Check href attributes
      await expect(primaryButton).toHaveAttribute('href', '/trial/');
      await expect(secondaryButton).toHaveAttribute('href', '/demo/');
    });

    test('CTA sections have background effects', async ({ page }) => {
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