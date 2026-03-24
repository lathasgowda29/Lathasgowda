import { chromium } from 'playwright';

const url = 'http://localhost:5175/';
const viewport = { width: 1280, height: 900 };

const browser = await chromium.launch();
const page = await browser.newPage({ viewportSize: viewport });

await page.goto(url, { waitUntil: 'networkidle' });

// Scroll to find "How Great Products Take Shape" section
// First scroll to bottom to load everything, then scroll to specific sections
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(800);

// Get page height and scroll positions
const pageInfo = await page.evaluate(() => ({
  scrollHeight: document.body.scrollHeight,
  innerHeight: window.innerHeight
}));
console.log('Page scroll height:', pageInfo.scrollHeight);

// Scroll to "How Great Products Take Shape" section
await page.evaluate(() => {
  const heading = Array.from(document.querySelectorAll('h2')).find(h => 
    h.textContent?.includes('How Great Products Take Shape')
  );
  if (heading) {
    heading.scrollIntoView({ block: 'start', behavior: 'instant' });
  } else {
    window.scrollTo(0, 2800);
  }
});
await page.waitForTimeout(800);
await page.screenshot({ path: 'screenshot-how-products-take-shape.png', fullPage: false });

// Scroll to "Words from Collaborators" section
await page.evaluate(() => {
  const heading = Array.from(document.querySelectorAll('h2')).find(h => 
    h.textContent?.includes('Words from Collaborators')
  );
  if (heading) {
    heading.scrollIntoView({ block: 'start', behavior: 'instant' });
  } else {
    window.scrollTo(0, 3800);
  }
});
await page.waitForTimeout(600);
await page.screenshot({ path: 'screenshot-words-from-collaborators.png', fullPage: false });

// Also take a full page screenshot to see overall structure
await page.evaluate(() => window.scrollTo(0, 0));
await page.screenshot({ path: 'screenshot-full-page-bottom.png', fullPage: true });

await browser.close();
console.log('Screenshots saved.');
