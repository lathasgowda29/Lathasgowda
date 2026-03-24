import { chromium } from 'playwright';

const url = 'http://localhost:5175/';
const viewport = { width: 1280, height: 800 };

const browser = await chromium.launch();
const page = await browser.newPage({ viewportSize: viewport });

await page.goto(url, { waitUntil: 'networkidle' });

// 1. Hero section (top of page)
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshot-hero.png', fullPage: false });

// 2. Scroll to case studies section
await page.evaluate(() => window.scrollTo(0, 900));
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshot-case-studies.png', fullPage: false });

// 3. Scroll to bottom CTA section
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshot-bottom-cta.png', fullPage: false });

// 4. Full page screenshot
await page.evaluate(() => window.scrollTo(0, 0));
await page.screenshot({ path: 'screenshot-full-page.png', fullPage: true });

await browser.close();
console.log('Screenshots saved: screenshot-hero.png, screenshot-case-studies.png, screenshot-bottom-cta.png, screenshot-full-page.png');
