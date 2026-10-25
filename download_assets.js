import { execSync } from 'child_process';
import fs from 'fs';

const cssFiles = [
  'bootstrap.min.css',
  'theme7b30.css',
  'style.css',
  'home-style-ashil.css'
];

if (!fs.existsSync('public/assets')) fs.mkdirSync('public/assets', { recursive: true });

const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';
for (const c of cssFiles) {
  const url = `https://grcorporation.com/assets/${c}`;
  const target = `public/assets/${c}`;
  console.log(`Fetching ${c}`);
  const cmd = `curl.exe -s -H "User-Agent: ${ua}" "${url}" -o "${target}"`;
  execSync(cmd);
  console.log(`Saved ${c}: ${fs.statSync(target).size} bytes`);
}
console.log('Finished downloading CSS assets');
