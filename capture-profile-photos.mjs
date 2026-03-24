import { chromium } from 'playwright';

const url = 'http://localhost:5175/';

const browser = await chromium.launch();
const page = await browser.newPage({
  viewportSize: { width: 1280, height: 900 },
  deviceScaleFactor: 2  // Higher resolution for detail
});

await page.goto(url, { waitUntil: 'networkidle' });

// Scroll to center the profile photos in view
await page.evaluate(() => {
  const heading = Array.from(document.querySelectorAll('h2')).find(h =>
    h.textContent?.includes('Words from Collaborators')
  );
  if (heading) {
    heading.scrollIntoView({ block: 'start', behavior: 'instant' });
  }
});
await page.waitForTimeout(600);

// Fine-tune scroll so profile row is centered in viewport
await page.evaluate(() => window.scrollBy(0, 120));
await page.waitForTimeout(400);

// Take screenshot - profile photos should be prominently visible
await page.screenshot({ path: 'screenshot-profile-photos-closeup.png', fullPage: false });

await browser.close();
console.log('Screenshot saved: screenshot-profile-photos-closeup.png');
