import { chromium } from 'playwright';

const url = 'http://localhost:5175/';

const browser = await chromium.launch();
const page = await browser.newPage({
  viewportSize: { width: 1280, height: 1200 },
  deviceScaleFactor: 2
});

await page.goto(url, { waitUntil: 'networkidle' });

// Scroll to testimonials section
await page.evaluate(() => {
  const heading = Array.from(document.querySelectorAll('h2')).find(h =>
    h.textContent?.includes('Words from Collaborators')
  );
  if (heading) heading.scrollIntoView({ block: 'start', behavior: 'instant' });
});
await page.waitForTimeout(600);

// Screenshot the entire testimonials section element (includes divider)
const section = page.locator('section:has(h2:has-text("Words from Collaborators"))');
await section.screenshot({ path: 'screenshot-full-testimonials.png' });

await browser.close();
console.log('Screenshot saved: screenshot-full-testimonials.png');
