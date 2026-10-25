const https = require('https');
const fs = require('fs');
const path = require('path');

const pages = [
  { name: 'about', url: 'https://grcorporation.com/about' },
  { name: 'art-of-manufacturing', url: 'https://grcorporation.com/art-of-manufacturing' },
  { name: 'products', url: 'https://grcorporation.com/products' },
  { name: 'industries', url: 'https://grcorporation.com/industries' },
  { name: 'customise', url: 'https://grcorporation.com/customise-your-own-products' },
  { name: 'catalogue', url: 'https://grcorporation.com/catalogue' },
  { name: 'contact-us', url: 'https://grcorporation.com/contact-us' }
];

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await new Promise((resolve, reject) => {
        const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }, timeout: 15000 }, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve(data));
        });
        req.on('error', reject);
        req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
      });
    } catch (e) {
      console.log(`Retry ${i+1} for ${url}: ${e.message}`);
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  return '';
}

async function run() {
  const outDir = path.join(__dirname, 'grc_pages');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  for (const p of pages) {
    console.log('Fetching', p.name, '...');
    const html = await fetchWithRetry(p.url);
    if (html) {
      fs.writeFileSync(path.join(outDir, `${p.name}.html`), html);
      console.log(`Saved ${p.name}.html (${html.length} bytes)`);
    } else {
      console.error(`Failed ${p.name}`);
    }
  }
  console.log('Done downloading all pages!');
}

run();
