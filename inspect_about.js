import fs from 'fs';

const html = fs.readFileSync('grc_raw/about.html', 'utf-8');
const lines = html.split('\n');

// Find sections
console.log('Total lines:', lines.length);

// Search for major section markers
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('<section') || line.includes('class="site-main"') || line.includes('class="about') || line.includes('<!--') && (line.includes('Section') || line.includes('content') || line.includes('About'))) {
    console.log(`L${i+1}:`, line.trim().substring(0, 100));
  }
}
