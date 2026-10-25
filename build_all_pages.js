import fs from 'fs';
import path from 'path';

const pagesToBuild = [
  { raw: 'about.html', out: 'about.html', title: 'About Us || GR Corporation' },
  { raw: 'art-of-manufacturing.html', out: 'art-of-manufacturing.html', title: 'Art of Manufacturing || GR Corporation' },
  { raw: 'products.html', out: 'products.html', title: 'Products - Discover All || GR Corporation' },
  { raw: 'industries.html', out: 'industries.html', title: 'Industries - Search by Industry || GR Corporation' },
  { raw: 'customise.html', out: 'customise.html', title: 'Customise Your Own Products || GR Corporation' },
  { raw: 'catalogue.html', out: 'catalogue.html', title: 'Catalogue & Lookbooks || GR Corporation' },
  { raw: 'contact-us.html', out: 'contact-us.html', title: 'Contact Us || GR Corporation' },
  { raw: 'Thread.html', out: 'Thread.html', title: 'Thread || GR Corporation' },
  { raw: 'Elastic.html', out: 'Elastic.html', title: 'Elastic || GR Corporation' },
  { raw: 'Ropes-Cords.html', out: 'Ropes-Cords.html', title: 'Ropes / Cords || GR Corporation' },
  { raw: 'Tape-Strap-Webbing.html', out: 'Tape-Strap-Webbing.html', title: 'Webbing / Straps / Belts || GR Corporation' },
  { raw: 'Made-ups.html', out: 'Made-ups.html', title: 'Made-ups || GR Corporation' }
];

function sanitizeHtml(html, pageTitle) {
  // 1. Ensure clean <!DOCTYPE html> and <html><head>
  html = html.replace(/<html[^>]*>[\s\S]*?<head>/i, '<html lang="en">\n<head>');
  if (!html.includes('<!DOCTYPE html>')) {
    html = '<!DOCTYPE html>\n' + html;
  }

  // 2. Remove obsolete or broken local script tags from WordPress/Elementor that lack CDN prefix
  html = html.replace(/<script[^>]+src=["'](?!http|\/\/|\/)[^"']+["'][^>]*><\/script>/gi, (match) => {
    // Check if it's jquery, slick, or waypoints
    if (match.includes('jquery') || match.includes('slick') || match.includes('waypoints')) {
      return ''; // We already provide or bundle these or load via CDN
    }
    // Convert to absolute grcorporation.com URL or remove
    const srcMatch = match.match(/src=["']([^"']+)["']/i);
    if (srcMatch && (srcMatch[1].startsWith('assets/') || srcMatch[1].startsWith('js/'))) {
      return `<script src="https://grcorporation.com/${srcMatch[1]}"></script>`;
    }
    return '';
  });

  // 3. Remove tracker and GTM tags that might error or stall
  html = html.replace(/<script[^>]*>(?:(?!<\/script>)[\s\S])*?(?:googletagmanager|gtag|google-analytics|zdassets)[\s\S]*?<\/script>/gi, '');

  // 4. Fix relative URLs for images to point to live GRC CDN if not local
  html = html.replace(/src=["'](assets\/[^"']+)["']/gi, (match, p1) => `src="https://grcorporation.com/${p1}"`);
  html = html.replace(/src=["'](img\/[^"']+)["']/gi, (match, p1) => `src="https://grcorporation.com/${p1}"`);
  html = html.replace(/src=["'](new\/[^"']+)["']/gi, (match, p1) => `src="https://grcorporation.com/${p1}"`);
  html = html.replace(/src=["'](\.\.\/img\/[^"']+)["']/gi, (match, p1) => `src="https://grcorporation.com/${p1.replace('../', '')}"`);
  
  // 5. Fix CSS url() background images
  html = html.replace(/url\(["']?(img\/[^"')]+)["']?\)/gi, (match, p1) => `url('https://grcorporation.com/${p1}')`);
  html = html.replace(/url\(["']?(assets\/[^"')]+)["']?\)/gi, (match, p1) => `url('https://grcorporation.com/${p1}')`);
  html = html.replace(/url\(["']?(new\/[^"')]+)["']?\)/gi, (match, p1) => `url('https://grcorporation.com/${p1}')`);

  // 6. Fix CSS link tags
  html = html.replace(/<link[^>]+href=["'](?!http|\/\/|\/)[^"']+\.css[^"']*["'][^>]*>/gi, (match) => {
    const hrefMatch = match.match(/href=["']([^"']+)["']/i);
    if (hrefMatch) {
      const href = hrefMatch[1];
      if (href.includes('bootstrap')) {
        return '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">';
      }
      return `<link rel="stylesheet" href="https://grcorporation.com/${href}">`;
    }
    return match;
  });

  // 7. Fix invalid CSS syntax in inline style tags (e.g., extra braces in art-of-manufacturing)
  html = html.replace(/<style[\s\S]*?<\/style>/gi, (match) => {
    return match
      .replace(/\}\s*\}\s*\}/g, '}\n}')
      .replace(/\}\s*\}\s*@media/g, '}\n@media');
  });

  // 8. Fix navigation links to internal HTML files
  html = html.replace(/href=["']index(?:\.html)?["']/gi, 'href="index.html"');
  html = html.replace(/href=["']about(?:\.html)?["']/gi, 'href="about.html"');
  html = html.replace(/href=["']art-of-manufacturing(?:\.html)?["']/gi, 'href="art-of-manufacturing.html"');
  html = html.replace(/href=["']products(?:\.html)?["']/gi, 'href="products.html"');
  html = html.replace(/href=["']industries(?:\.html)?["']/gi, 'href="industries.html"');
  html = html.replace(/href=["']customise-your-own-products(?:-mobile-view)?(?:\.html)?["']/gi, 'href="customise.html"');
  html = html.replace(/href=["']customise(?:\.html)?["']/gi, 'href="customise.html"');
  html = html.replace(/href=["']catalogue(?:\.html)?["']/gi, 'href="catalogue.html"');
  html = html.replace(/href=["']contact-us(?:\.html)?["']/gi, 'href="contact-us.html"');
  html = html.replace(/href=["']Thread(?:\.html)?["']/gi, 'href="Thread.html"');
  html = html.replace(/href=["']Elastic(?:\.html)?["']/gi, 'href="Elastic.html"');
  html = html.replace(/href=["']Ropes-Cords(?:\.html)?["']/gi, 'href="Ropes-Cords.html"');
  html = html.replace(/href=["']Tape-Strap-Webbing(?:\.html)?["']/gi, 'href="Tape-Strap-Webbing.html"');
  html = html.replace(/href=["']Made-ups(?:\.html)?["']/gi, 'href="Made-ups.html"');

  // 9. Standard head injection
  const headInject = `
    <title>${pageTitle}</title>
    <!-- Enhanced typography & icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.lineicons.com/4.0/lineicons.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/src/style.css" />
    <style>
      footer.modern-footer, .modern-footer, .footov, .collection-footer {
        background-color: #000000 !important;
        background: #000000 !important;
        color: #ffffff !important;
      }
      .modern-footer a, .modern-footer p, .modern-footer span, .modern-footer li, .modern-footer .modern-footer__logo {
        color: #ffffff !important;
      }
      .modern-footer a:hover {
        color: #d4af37 !important;
      }
      .modern-footer hr {
        border-color: rgba(255, 255, 255, 0.15) !important;
      }
    </style>
  `;

  if (html.includes('</head>')) {
    html = html.replace('</head>', `${headInject}\n</head>`);
  }

  // 10. Inject main.js module right before </body>
  const bodyInject = `
    <!-- Vite Main JS Application Bundle -->
    <script type="module" src="/src/main.js"></script>
  `;
  if (html.includes('</body>')) {
    html = html.replace('</body>', `${bodyInject}\n</body>`);
  }

  return html;
}

for (const p of pagesToBuild) {
  const rawPath = path.join('grc_raw', p.raw);
  if (fs.existsSync(rawPath)) {
    console.log(`Processing ${p.raw} -> ${p.out}...`);
    const rawContent = fs.readFileSync(rawPath, 'utf-8');
    const transformed = sanitizeHtml(rawContent, p.title);
    fs.writeFileSync(p.out, transformed, 'utf-8');
    console.log(`Generated ${p.out} (${transformed.length} bytes)`);
  } else {
    console.warn(`File not found: ${rawPath}`);
  }
}

console.log('All GRC sub-pages regenerated cleanly!');
