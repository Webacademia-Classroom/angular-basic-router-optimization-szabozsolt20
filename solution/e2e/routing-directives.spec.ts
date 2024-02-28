import { test, expect } from '@playwright/test';

test.describe('Router Directives', () => {
  test('should load HomeComponent', async ({page}) => {
    await page.goto('http://localhost:4200');
    // await page.locator('[data-test="detail-link"]').first().click();
    const body = await page.locator('body').first();
    const content = await body.textContent();
    expect(content).toMatch(/home works/i);
  });

  test('should load AboutComponent', async ({page}) => {
    await page.goto('http://localhost:4200/about');
    const body = await page.locator('body').first();
    const content = await body.textContent();
    expect(content).toMatch(/about works/i);
  });

  test('should load MusicianComponent', async ({page}) => {
    await page.goto('http://localhost:4200/musicians');
    const body = await page.locator('body').first();
    const content = await body.textContent();
    expect(content).toMatch(/musician works/i);
  });

  test('should load InstrumentComponent', async ({page}) => {
    await page.goto('http://localhost:4200/instruments');
    const body = await page.locator('body').first();
    const content = await body.textContent();
    expect(content).toMatch(/instrument works/i);
  });

  test('should load NotFoundComponent', async ({page}) => {
    await page.goto('http://localhost:4200/wrong-path');
    const body = await page.locator('body').first();
    const content = await body.textContent();
    expect(content).toMatch(/not-found works/i);
  });

  // Navigation Tests
  test('Home link should load HomeComponent', async ({page}) => {
    await page.goto('http://localhost:4200');
    await page.locator('a[routerLink="/"]').first().click();
    const body = await page.locator('body').first();
    const content = await body.textContent();
    expect(content).toMatch(/home works/i);
  });

  test('About link should load AboutComponent', async ({page}) => {
    await page.goto('http://localhost:4200');
    await page.locator('a[routerLink="/about"]').first().click();
    const body = await page.locator('body').first();
    const content = await body.textContent();
    expect(content).toMatch(/about works/i);
  });

  test('Musicians link should load MusicianComponent', async ({page}) => {
    await page.goto('http://localhost:4200');
    await page.locator('a[routerLink="/musicians"]').first().click();
    const body = await page.locator('body').first();
    const content = await body.textContent();
    expect(content).toMatch(/musician works/i);
  });

  test('Instruments link should load InstrumentComponent', async ({page}) => {
    await page.goto('http://localhost:4200');
    await page.locator('a[routerLink="/instruments"]').first().click();
    const body = await page.locator('body').first();
    const content = await body.textContent();
    expect(content).toMatch(/instrument works/i);
  });

});
