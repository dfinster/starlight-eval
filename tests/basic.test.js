import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Starlight/);
  await expect(page.locator('h1')).toContainText('Welcome to Starlight');
});

test('navigation works', async ({ page }) => {
  await page.goto('/');
  
  // Check that sidebar navigation exists
  const sidebar = page.locator('[role="navigation"]').first();
  await expect(sidebar).toBeVisible();
  
  // Check that main content is present
  const main = page.locator('main');
  await expect(main).toBeVisible();
});