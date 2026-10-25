import fs from 'fs';
import path from 'path';

const base = 'C:/Users/Admin/.gemini/antigravity-ide/brain/7817c227-f2e5-4338-8a98-b04a2bceba9b/.system_generated/steps';
const files = [
  { step: '195', name: 'about' },
  { step: '197', name: 'art-of-manufacturing' },
  { step: '199', name: 'products' },
  { step: '201', name: 'industries' },
  { step: '203', name: 'customise' },
  { step: '205', name: 'catalogue' },
  { step: '207', name: 'contact-us' }
];

for (const f of files) {
  const p = path.join(base, f.step, 'content.md');
  const html = fs.readFileSync(p, 'utf-8');
  console.log('==================================================');
  console.log('PAGE:', f.name);
  const headerIdx = html.indexOf('</header>');
  const footerIdx = html.indexOf('<footer');
  if (headerIdx !== -1 && footerIdx !== -1) {
    const mainBody = html.substring(headerIdx + 9, footerIdx);
    
    // Extract non-script clean text sample
    const textSample = mainBody
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    console.log('TEXT LENGTH:', textSample.length);
    console.log('SAMPLE:', textSample.substring(0, 400));

    // Look for images
    const imgs = [...mainBody.matchAll(/src=["']([^"']+\.(?:png|jpg|jpeg|svg|webp))["']/gi)].map(m => m[1]);
    console.log('IMAGES COUNT:', imgs.length, 'FIRST FEW:', imgs.slice(0, 5));
  } else {
    console.log('No header/footer found');
  }
}
