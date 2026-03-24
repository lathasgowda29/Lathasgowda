import { chromium } from 'playwright';

const url = 'http://localhost:5173/';

const browser = await chromium.launch();
const page = await browser.newPage({
  viewportSize: { width: 1280, height: 1100 },
  deviceScaleFactor: 2
});

await page.goto(url, { waitUntil: 'networkidle' });

// Scroll to "My journey at yellow" section
await page.evaluate(() => {
  const h2 = Array.from(document.querySelectorAll('h2')).find(el =>
    el.textContent?.includes('My journey at yellow')
  );
  if (h2) h2.scrollIntoView({ block: 'center', behavior: 'instant' });
});
await page.waitForTimeout(800);

// Screenshot of section
const section = page.locator('section:has(h2:has-text("My journey at yellow"))');
await section.screenshot({ path: 'screenshot-journey-checks.png' });

// Screenshot for drift comparison - take 2 screenshots 3s apart
await page.screenshot({ path: 'screenshot-journey-t1.png' });
await page.waitForTimeout(3000);
await page.screenshot({ path: 'screenshot-journey-t2.png' });

await browser.close();
console.log('Screenshots saved');
