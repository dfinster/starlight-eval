import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Starlight/);
  await expect(page.locator('h1').first()).toContainText('Welcome to Starlight');
});

test('navigation works', async ({ page }) => {
  await page.goto('/');
  
  // Check that our custom navigation exists
  const nav = page.locator('[data-testid="main-navigation"]');
  await expect(nav).toBeVisible();
  
  // Check navigation logo
  const logo = page.locator('[data-testid="nav-logo"]');
  await expect(logo).toBeVisible();
  
  // Check that main content is present
  const main = page.locator('main');
  await expect(main).toBeVisible();
});