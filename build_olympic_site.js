import fs from 'fs';
import path from 'path';

// Company Metadata from the Official Catalogue
const COMPANY = {
  name: 'Olympic Exports Pvt. Ltd.',
  shortName: 'Olympic Exports',
  tagline: 'All type of Leather Shoes, Bags and Belts',
  founded: '1994',
  address: '56-D, Defence Colony, Jajmau, Kanpur, Uttar Pradesh, India - 208010',
  directors: [
    { name: 'Mr. Farhan Mirza', phone: '+91 98390 86636', rawPhone: '9839086636' },
    { name: 'Mr. Ayaan Mirza', phone: '+91 73888 14225', rawPhone: '7388814225' }
  ],
  emails: ['olympic.mirza@gmail.com', 'olympic.mirza@yahoo.in'],
  whatsapp: '919839086636'
};

const pages = [
  'index.html',
  'about.html',
  'art-of-manufacturing.html',
  'products.html',
  'industries.html',
  'customise.html',
  'catalogue.html',
  'contact-us.html',
  'Thread.html',
  'Elastic.html',
  'Ropes-Cords.html',
  'Tape-Strap-Webbing.html',
  'Made-ups.html'
];

function transformPageToOlympic(content, filename) {
  let html = content;

  // 1. Replace GRC brand titles and logos
  html = html.replace(/<title>.*?<\/title>/gi, `<title>${COMPANY.name} || Luxury Leather Goods, Bags & Belts (Est. 1994)</title>`);
  
  // Replace Logo text and images
  html = html.replace(/<h1 class="header__logo">[\s\S]*?<\/h1>/gi, `
    <h1 class="header__logo">
      <a href="index.html" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
        <img src="/images/olympic-logo.svg" alt="Olympic Exports Pvt Ltd" style="height: 48px; width: auto; object-fit: contain;">
        <span class="oe-logo-text" style="font-family: 'Cinzel', serif; font-size: 1.15rem; font-weight: 700; letter-spacing: 0.08em; color: #111;">OLYMPIC <span style="font-weight: 400; font-size: 0.9rem; opacity: 0.85;">EXPORTS</span></span>
      </a>
    </h1>
  `);

  html = html.replace(/<h3 class="mobile-menu__logo">.*?<\/h3>/gi, `
    <h3 class="mobile-menu__logo" style="display: flex; align-items: center; gap: 8px;">
      <img src="/images/olympic-logo.svg" alt="Olympic Exports" style="height: 38px;">
      <span>Olympic Exports</span>
    </h3>
  `);

  // Replace Brand Name occurrences in text
  html = html.replace(/GR Corporation/g, COMPANY.name);
  html = html.replace(/GRC/g, 'Olympic Exports');
  html = html.replace(/GR\s+Corporation/g, COMPANY.name);

  // 2. Replace Contacts and Address across footer and contact blocks
  html = html.replace(/18 C-2,\s*Pokharpur,[\s\S]*?Uttar Pradesh,\s*India/gi, '56-D, Defence Colony, Jajmau,<br>Kanpur - 208010,<br> Uttar Pradesh, India');
  html = html.replace(/Pokharpur/gi, 'Defence Colony, Jajmau');
  html = html.replace(/\+91\s*98381\s*01109/g, '+91 98390 86636 (Mr. Farhan Mirza)');
  html = html.replace(/8400040909/g, '9839086636');
  html = html.replace(/export@grcorporation\.co\.in/gi, 'olympic.mirza@gmail.com');
  html = html.replace(/info@grcorporation\.com/gi, 'olympic.mirza@yahoo.in');

  // WhatsApp link update
  html = html.replace(/href=["']https:\/\/api\.whatsapp\.com\/send\?phone=\+?\d+[^"']*["']/gi, 
    `href="https://api.whatsapp.com/send?phone=919839086636&text=Hello%20Olympic%20Exports%20Pvt%20Ltd%2C%20I%20am%20interested%20in%20your%20Leather%20Goods%20and%20Belts%20Catalogue."`);

  // 3. Footer branding
  html = html.replace(/<div class="modern-footer__logo">[\s\S]*?<\/div>/gi, `
    <div class="modern-footer__logo" style="display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 1.25rem;">
      <img src="/images/olympic-logo.svg" alt="Olympic Exports" style="height: 42px; filter: brightness(0) invert(1);">
      <span style="font-family: 'Cinzel', serif; font-size: 1.25rem; font-weight: 700; color: #fff; letter-spacing: 0.05em;">OLYMPIC EXPORTS</span>
    </div>
  `);

  // Footer address block
  html = html.replace(/<div class="modern-footer__address">[\s\S]*?<\/div>/gi, `
    <div class="modern-footer__address" style="line-height: 1.7; font-size: 0.9rem;">
      <a href="https://maps.google.com/?q=Defence+Colony+Jajmau+Kanpur" target="_blank" style="color: #ccc; text-decoration: none;">
        <strong>56-D, Defence Colony, Jajmau,</strong><br>
        Kanpur - 208010, Uttar Pradesh, India
      </a><br>
      <div style="margin-top: 8px;">
        <a href="tel:9839086636" style="color: #e6c875; text-decoration: none;">+91 98390 86636 (Mr. Farhan Mirza)</a><br>
        <a href="tel:7388814225" style="color: #e6c875; text-decoration: none;">+91 73888 14225 (Mr. Ayaan Mirza)</a>
      </div>
      <div style="margin-top: 8px;">
        <a href="mailto:olympic.mirza@gmail.com" style="color: #fff; text-decoration: none;">olympic.mirza@gmail.com</a> &bull; 
        <a href="mailto:olympic.mirza@yahoo.in" style="color: #fff; text-decoration: none;">olympic.mirza@yahoo.in</a>
      </div>
      <div style="margin-top: 10px; font-size: 0.8rem; color: #888;">
        Govt. Recognized Export House &bull; Est. 1994 &bull; All Type of Leather Shoes, Bags and Belts
      </div>
    </div>
  `);

  // Ensure solid black footer styling
  const footerBlackCss = `
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
        color: #e6c875 !important;
      }
      .modern-footer hr {
        border-color: rgba(255, 255, 255, 0.15) !important;
      }
      header.header--type-4, .header--type-4, #mainHeader {
        background-color: #000000 !important;
        background: #000000 !important;
      }
      .header--type-4 .oe-logo-text,
      .header--type-4.scrolled .oe-logo-text {
        color: #ffffff !important;
      }
    </style>
  `;

  if (html.includes('</head>')) {
    html = html.replace('</head>', `${footerBlackCss}\n</head>`);
  }

  return html;
}

for (const file of pages) {
  if (fs.existsSync(file)) {
    console.log(`Adapting ${file} for Olympic Exports...`);
    const content = fs.readFileSync(file, 'utf-8');
    const updated = transformPageToOlympic(content, file);
    fs.writeFileSync(file, updated, 'utf-8');
    console.log(`Updated ${file}`);
  }
}

console.log('All pages customized for Olympic Exports Pvt. Ltd.!');
