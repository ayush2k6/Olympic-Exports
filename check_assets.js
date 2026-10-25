import fs from 'fs';

const html = fs.readFileSync('grc_raw/about.html', 'utf-8');
const imgs = [];
const regex = /<img[^>]+src=["']([^"']+)["']/gi;
let match;
while ((match = regex.exec(html)) !== null) {
  imgs.push(match[1]);
}

console.log('Total images in about.html:', imgs.length);
console.log('Sample images:', imgs.slice(0, 10));

// Find stylesheets
const css = [];
const cssRegex = /<link[^>]+href=["']([^"']+\.css[^"']*)["']/gi;
while ((match = cssRegex.exec(html)) !== null) {
  css.push(match[1]);
}
console.log('CSS links:', css);
