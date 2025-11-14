import { test, expect } from '@playwright/test';

test('login with valid credentials', { tag : ['@auth' , '@sanity'] }, async ({ page }) => {
 await page.goto('https://www.lambdatest.com/automation-demos/');
 await page.locator('id=username').fill('valid@example.com');
 await page.locator('id=password').fill('test@123');
 await page.locator('button[type="submit"]').nth(1).click();

});

test('login with invalid credentials', { tag : ['@auth', "@negative" ] }, async ({ page }) => {
 await page.goto('https://www.lambdatest.com/automation-demos/');
 await page.locator('id=username').fill('invalid@example.com');
 await page.locator('id=password').fill('test@123');
 await page.locator('button[type="submit"]').nth(1).click();
});
