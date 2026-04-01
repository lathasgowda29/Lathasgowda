import { chromium } from 'playwright';

const url = 'http://localhost:5175/';

const browser = await chromium.launch();
const page = await browser.newPage({
  viewportSize: { width: 1280, height: 1000 },
  deviceScaleFactor: 2
});

await page.goto(url, { waitUntil: 'networkidle' });

// Get total scroll height
const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
console.log('Page height:', scrollHeight);

// 1. Scroll to "Recognition Along the Way" section
await page.evaluate(() => {
  const h2 = Array.from(document.querySelectorAll('h2')).find(el =>
    el.textContent?.includes('Recognition Along the Way')
  );
  if (h2) h2.scrollIntoView({ block: 'start', behavior: 'instant' });
});
await page.waitForTimeout(600);
await page.screenshot({ path: 'screenshot-journey-section.png', fullPage: false });

// 2. Scroll to CTA section ("Let's Build Better")
await page.evaluate(() => {
  const el = Array.from(document.querySelectorAll('h2')).find(e =>
    e.textContent?.includes("Let's Build Better")
  );
  if (el) el.scrollIntoView({ block: 'center', behavior: 'instant' });
});
await page.waitForTimeout(600);
await page.screenshot({ path: 'screenshot-cta-section.png', fullPage: false });

// 3. Scroll to footer (very bottom)
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(600);
await page.screenshot({ path: 'screenshot-footer.png', fullPage: false });

// 4. Full page bottom portion for context
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 800));
await page.waitForTimeout(400);
await page.screenshot({ path: 'screenshot-bottom-overview.png', fullPage: false });

await browser.close();
console.log('Screenshots saved: journey, cta, footer, bottom-overview');
