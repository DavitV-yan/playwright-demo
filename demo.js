const {webkit, chromium, firefox} = require('playwright');

(async () => {
  for (const browserType of [webkit, firefox, chromium]) {
    const browser = await browserType.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.goto('https://auto.am');
    await page.screenshot({
      path: `screenshot-${browserType.name()}.png`,
    });
    await browser.close();
    console.log('success: ' + browserType.name());
  }
})();
