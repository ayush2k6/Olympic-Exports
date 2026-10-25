import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf-8');

// Ensure all navigation links point to the actual html pages
html = html.replace(/href=["']#about["']/gi, 'href="about.html"');
html = html.replace(/href=["']#heritage["']/gi, 'href="about.html"');
html = html.replace(/href=["']#manufacturing["']/gi, 'href="art-of-manufacturing.html"');
html = html.replace(/href=["']#products["']/gi, 'href="products.html"');
html = html.replace(/href=["']#industries["']/gi, 'href="industries.html"');
html = html.replace(/href=["']#customise["']/gi, 'href="customise.html"');
html = html.replace(/href=["']#catalogue["']/gi, 'href="catalogue.html"');
html = html.replace(/href=["']#contact["']/gi, 'href="contact-us.html"');

// Update menu items in index.html
html = html.replace(/href=["']about["']/gi, 'href="about.html"');
html = html.replace(/href=["']art-of-manufacturing["']/gi, 'href="art-of-manufacturing.html"');
html = html.replace(/href=["']products["']/gi, 'href="products.html"');
html = html.replace(/href=["']industries["']/gi, 'href="industries.html"');
html = html.replace(/href=["']customise-your-own-products(?:-mobile-view)?["']/gi, 'href="customise.html"');
html = html.replace(/href=["']catalogue["']/gi, 'href="catalogue.html"');
html = html.replace(/href=["']contact-us["']/gi, 'href="contact-us.html"');
html = html.replace(/href=["']Thread["']/gi, 'href="Thread.html"');
html = html.replace(/href=["']Elastic["']/gi, 'href="Elastic.html"');
html = html.replace(/href=["']Ropes-Cords["']/gi, 'href="Ropes-Cords.html"');
html = html.replace(/href=["']Tape-Strap-Webbing["']/gi, 'href="Tape-Strap-Webbing.html"');
html = html.replace(/href=["']Made-ups["']/gi, 'href="Made-ups.html"');

fs.writeFileSync('index.html', html, 'utf-8');
console.log('index.html navigation synchronized!');
