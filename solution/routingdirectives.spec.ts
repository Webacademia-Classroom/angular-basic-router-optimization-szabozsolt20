import { chromium } from 'playwright';
import { expect, test } from '@playwright/test';
const { exec } = require('child_process');
const { join } = require('path');

const indexPath = join(__dirname, 'dist/angular-im-2023-signals-ngrx/browser/index.html');

// test.beforeAll(async () => {
//   await new Promise<void>(async (resolve, reject) => {
//     exec('ng build', (error) => {
//       if (error) {
//         reject(error);
//         return;
//       }
//       resolve();
//     });
//   });
// });

test('should open the HomePage', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`./`);
  expect(await page.title()).toBe('AngularRouterDirectives');
  await browser.close();
});
