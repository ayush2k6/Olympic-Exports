import fs from 'fs';

const EXACT_CANONICAL_FOOTER = `  <footer class="modern-footer collection-footer footov">
    <div class="container container--type-4">

      <!-- Top Footer Horizontal Menu -->
      <div class="modern-footer__top-nav">
        <ul class="modern-footer__menu">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="art-of-manufacturing.html">Art of Manufacturing</a></li>
          <li><a href="products.html">All Products</a></li>
          <li><a href="customise.html">Customise &amp; OEM</a></li>
          <li><a href="catalogue.html">Official Catalogue</a></li>
          <li><a href="contact-us.html">Contact Us</a></li>
        </ul>
      </div>

      <!-- 4-Column Luxury Corporate Ledger Grid -->
      <div class="footer-lux-grid">

        <!-- Column 1: Brand & Legacy -->
        <div class="footer-col">
          <a href="index.html" class="footer-brand-lockup">
            <img src="/images/logo-dark-bg.png" alt="Olympic Exports Crest" class="footer-brand-logo-img">
            <div>
              <h4 class="footer-brand-title">OLYMPIC EXPORTS PVT. LTD.</h4>
            </div>
          </a>
          <p class="footer-heritage-desc">
            Established in 1994 in the historic leather hub of Kanpur. Manufacturing and exporting luxury hand-carved
            tooling belts, beaded belts, Kilim bags, narrow fabrics, and Goodyear welted footwear worldwide.
          </p>
        </div>

        <!-- Column 2: 7 Manufacturing Divisions -->
        <div class="footer-col">
          <h5 class="footer-col-title">MANUFACTURING DIVISIONS</h5>
          <ul class="footer-links-list">
            <li><a href="leather-belts.html">Hand-Carved Tooling Belts</a></li>
            <li><a href="beaded-belts.html">Tribal Aztec Beaded Belts</a></li>
            <li><a href="kilim-bags.html">Kilim Tapestry Bags &amp; Luggage</a></li>
            <li><a href="leather-bags.html">Handcrafted Leather Bags</a></li>
            <li><a href="shoe-laces.html">Waxed Cotton Shoelaces &amp; Cords</a></li>
            <li><a href="elastic-bands.html">Technical Elastic &amp; Webbing</a></li>
            <li><a href="footwear.html">Goodyear Welted Boots &amp; Shoes</a></li>
          </ul>
        </div>

        <!-- Column 3: Global Export & Trade Services -->
        <div class="footer-col">
          <h5 class="footer-col-title">EXPORT &amp; TRADE DESK</h5>
          <ul class="footer-links-list">
            <li><a href="about.html">Heritage &amp; Factory Tour</a></li>
            <li><a href="art-of-manufacturing.html">Art of Manufacturing</a></li>
            <li><a href="customise.html">Custom Dies &amp; OEM Tooling</a></li>
            <li><a href="catalogue.html">Download Official Line Sheet</a></li>
            <li><a href="catalogue.html">Request Archival Dossier</a></li>
            <li><a href="contact-us.html">Request Counter-Sample Deck</a></li>
          </ul>
        </div>

        <!-- Column 4: Factory Atelier & Direct Contacts -->
        <div class="footer-col">
          <h5 class="footer-col-title">CONTACT US</h5>
          <div class="footer-contact-block">
            <div class="footer-contact-item">
              <a href="https://maps.google.com/?q=56-D+Defence+Colony+Jajmau+Kanpur" target="_blank">
                56-D, Defence Colony, Jajmau,<br>
                Kanpur &ndash; 208010, Uttar Pradesh, India
              </a>
            </div>
            <div class="footer-contact-item">
              <div>
                <a href="tel:+919839086636">+91 98390 86636</a> <span style="font-size: 0.72rem; color: #888;">(Mr.
                  Farhan Mirza)</span><br>
                <a href="tel:+917388814225">+91 73888 14225</a> <span style="font-size: 0.72rem; color: #888;">(Mr.
                  Ayaan Mirza)</span>
              </div>
            </div>
            <div class="footer-contact-item">
              <div>
                <a href="mailto:Olympic.Mirza@yahoo.com">Olympic.Mirza@yahoo.com</a><br>
                <a href="mailto:Olympic.Mirza@yahoo.com">Olympic.Mirza@yahoo.com</a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Copyright & Legal Compliance Bottom Bar -->
      <div class="footer-bottom-bar">
        <div class="footer-bottom-inner">
          <p>&copy; 2026 Olympic Exports Pvt. Ltd.</p>
          <div class="footer-legal-links">
            <a href="about.html">Export Terms &amp; FOB Standards</a>
            <span>&bull;</span>
            <a href="art-of-manufacturing.html">REACH &amp; SVHC Compliance</a>
            <span>&bull;</span>
            <a href="contact-us.html">Privacy Policy</a>
            <span>&bull;</span>
            <a href="contact-us.html">Direct B2B Inquiry</a>
          </div>
        </div>
      </div>

    </div>
  </footer>`;

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  const footerRegex = /<footer[\s\S]*?<\/footer>/i;

  if (footerRegex.test(content)) {
    content = content.replace(footerRegex, EXACT_CANONICAL_FOOTER.trim());
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated footer in: ${file}`);
  } else {
    console.warn(`No footer found in: ${file}`);
  }
}

console.log('All footers across all HTML pages have been set to the exact canonical footer!');
