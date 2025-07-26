import { test, expect } from '@playwright/test';

test.describe('CoreWeave Design Analysis', () => {
  test('Capture CoreWeave design screenshots', async ({ page }) => {
    // Navigate to CoreWeave
    await page.goto('https://coreweave.com');
    
    // Wait for page to fully load
    await page.waitForLoadState('networkidle');
    
    // Capture full homepage
    await page.screenshot({ 
      path: '__design__/screenshots/coreweave-homepage-full.png',
      fullPage: true 
    });
    
    // Capture hero section
    const hero = page.locator('section').first();
    await hero.screenshot({ 
      path: '__design__/screenshots/coreweave-hero.png' 
    });
    
    // Capture navigation
    const nav = page.locator('nav').first();
    await nav.screenshot({ 
      path: '__design__/screenshots/coreweave-nav.png' 
    });
    
    // Test responsive design
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.screenshot({ 
      path: '__design__/screenshots/coreweave-tablet.png',
      fullPage: true 
    });
    
    await page.setViewportSize({ width: 375, height: 812 });
    await page.screenshot({ 
      path: '__design__/screenshots/coreweave-mobile.png',
      fullPage: true 
    });
  });

  test('Extract CoreWeave design tokens', async ({ page }) => {
    await page.goto('https://coreweave.com');
    await page.waitForLoadState('networkidle');
    
    // Extract computed styles from key elements
    const designTokens = await page.evaluate(() => {
      const extractStyles = (selector: string, properties: string[]) => {
        const element = document.querySelector(selector);
        if (!element) return null;
        
        const computed = getComputedStyle(element);
        const styles: Record<string, string> = {};
        
        properties.forEach(prop => {
          styles[prop] = computed.getPropertyValue(prop);
        });
        
        return styles;
      };

      // Extract font information
      const bodyStyles = extractStyles('body', [
        'font-family', 'font-size', 'line-height', 'color', 'background-color'
      ]);
      
      // Extract heading styles
      const h1Styles = extractStyles('h1', [
        'font-family', 'font-size', 'font-weight', 'line-height', 'color'
      ]);
      
      // Extract button styles
      const buttonStyles = extractStyles('button, .button, [role="button"]', [
        'font-family', 'font-size', 'font-weight', 'color', 'background-color',
        'border', 'border-radius', 'padding'
      ]);
      
      // Extract navigation styles
      const navStyles = extractStyles('nav', [
        'background-color', 'border', 'padding', 'height'
      ]);
      
      return {
        body: bodyStyles,
        h1: h1Styles,
        button: buttonStyles,
        nav: navStyles
      };
    });
    
    // Log design tokens for analysis
    console.log('CoreWeave Design Tokens:', JSON.stringify(designTokens, null, 2));
  });

  test('Analyze CoreWeave color palette', async ({ page }) => {
    await page.goto('https://coreweave.com');
    await page.waitForLoadState('networkidle');
    
    // Extract colors from CSS variables and computed styles
    const colorPalette = await page.evaluate(() => {
      const colors: Record<string, string> = {};
      
      // Get CSS custom properties from root
      const rootStyles = getComputedStyle(document.documentElement);
      
      // Common CSS variables that might contain colors
      const colorVars = [
        '--primary', '--secondary', '--accent', '--background', '--foreground',
        '--text', '--border', '--muted', '--success', '--warning', '--error'
      ];
      
      colorVars.forEach(varName => {
        const value = rootStyles.getPropertyValue(varName).trim();
        if (value) {
          colors[varName] = value;
        }
      });
      
      // Extract colors from key elements
      const elements = document.querySelectorAll('*');
      const usedColors = new Set<string>();
      
      elements.forEach(el => {
        const computed = getComputedStyle(el);
        const bgColor = computed.backgroundColor;
        const textColor = computed.color;
        const borderColor = computed.borderColor;
        
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          usedColors.add(bgColor);
        }
        if (textColor && textColor !== 'rgba(0, 0, 0, 0)') {
          usedColors.add(textColor);
        }
        if (borderColor && borderColor !== 'rgba(0, 0, 0, 0)' && borderColor !== 'transparent') {
          usedColors.add(borderColor);
        }
      });
      
      return {
        cssVariables: colors,
        usedColors: Array.from(usedColors).slice(0, 20) // Limit to first 20 colors
      };
    });
    
    console.log('CoreWeave Color Palette:', JSON.stringify(colorPalette, null, 2));
  });
});