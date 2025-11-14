import { test, expect } from '@playwright/test';

test('Checkbox demo page', { tag : ['@checkbox' , '@sanity'] }, async ({ page }) => {
 await page.goto('https://www.lambdatest.com/selenium-playground/');
 await page.getByText('Checkbox Demo').click();
 await expect(page.getByText('Single Checkbox Demo')).toBeVisible();
});

test('Radio button demo page',{ tag : '@radio' }, async ({ page }) => {
 await page.goto('https://www.lambdatest.com/selenium-playground/');
 await page.getByText('Radio Buttons Demo').click();
 await expect(page.getByText('Radio Button 1')).toBeVisible();
});
