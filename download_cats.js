import { execSync } from 'child_process';
import fs from 'fs';

const pages = [
  { name: 'Thread', url: 'https://grcorporation.com/Thread' },
  { name: 'Elastic', url: 'https://grcorporation.com/Elastic' },
  { name: 'Ropes-Cords', url: 'https://grcorporation.com/Ropes-Cords' },
  { name: 'Tape-Strap-Webbing', url: 'https://grcorporation.com/Tape-Strap-Webbing' },
  { name: 'Made-ups', url: 'https://grcorporation.com/Made-ups' }
];

for (const p of pages) {
  console.log('Downloading', p.name);
  const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';
  const accept = 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8';
  const cmd = `curl.exe -s -H "User-Agent: ${ua}" -H "Accept: ${accept}" "${p.url}" -o grc_raw/${p.name}.html`;
  try {
    execSync(cmd);
    const size = fs.statSync(`grc_raw/${p.name}.html`).size;
    console.log(`Saved ${p.name}: ${size} bytes`);
  } catch (e) {
    console.error(`Failed ${p.name}:`, e.message);
  }
}
