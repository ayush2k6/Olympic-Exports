import fs from 'fs';

// ============================================================
// SHARED TEMPLATE PARTS FOR OLYMPIC EXPORTS
// ============================================================

const SHARED_HEAD = (title, desc) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${desc}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.lineicons.com/4.0/lineicons.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="/src/style.css">
  <style>
    footer.modern-footer, .modern-footer { background-color: #000 !important; background: #000 !important; color: #fff !important; }
    .modern-footer a, .modern-footer p, .modern-footer span, .modern-footer li, .modern-footer .modern-footer__logo { color: #fff !important; }
    .modern-footer a:hover { color: #e6c875 !important; }
    .modern-footer hr { border-color: rgba(255,255,255,0.15) !important; }
    header.header--type-4, .header--type-4, #mainHeader { background-color: #000 !important; background: #000 !important; }
    .header--type-4 .oe-logo-text, .header--type-4.scrolled .oe-logo-text { color: #fff !important; }
    .page-banner { height: 50vh; min-height: 380px; background: linear-gradient(135deg, #1a0f05, #2d1a08); position: relative; overflow: hidden; display: flex; align-items: flex-end; padding-bottom: 4.5rem; }
    .page-banner img.cover { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.3; }
    .page-banner .container { position: relative; z-index: 2; }
    .page-banner .kicker { font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase; color: #c9a96e; margin-bottom: 0.75rem; }
    .page-banner h1 { font-family: 'Cinzel', serif; font-size: clamp(2rem, 5vw, 4rem); font-weight: 700; color: #fff; line-height: 1.1; margin: 0; }
    .page-banner .breadcrumb-row { color: rgba(255,255,255,0.5); font-size: 0.8rem; margin-top: 1rem; }
    .page-banner .breadcrumb-row a { color: rgba(255,255,255,0.5); text-decoration: none; }
    body { font-family: 'Libre Baskerville', 'Lora', Georgia, serif; font-variant-numeric: lining-nums tabular-nums; }
  </style>`;

const SHARED_FLOATWP = `
<a href="https://api.whatsapp.com/send?phone=919839086636&text=Hello%20Olympic%20Exports%20Pvt%20Ltd" class="floatwp" target="_blank">
  <i class="fa fa-whatsapp my-float"></i>
</a>`;

const SHARED_HEADER = `
<header class="header header--type-4" id="mainHeader">
  <div class="container container--type-3">
    <div class="header__container d-flex align-items-center">
      <div class="header__desktop-menu">
        <a href="#" class="js-open-canvas-menu"><i class="lnil lnil-line-double"></i><span>Menu</span></a>
      </div>
      <h1 class="header__logo">
        <a href="index.html" style="display:flex;align-items:center;gap:10px;text-decoration:none;">
          <img src="/images/logo-dark-bg.png" alt="Olympic Exports" style="height:44px;width:auto;">
          <span style="font-family:'Cinzel',serif;font-size:1.1rem;font-weight:700;letter-spacing:0.08em;color:#fff;">OLYMPIC <span style="font-weight:400;font-size:0.85rem;opacity:0.85;color:#fff;">EXPORTS</span></span>
        </a>
      </h1>
      <div style="width: 72px;"></div>
    </div>
  </div>
</header>`;

const SHARED_CANVAS = `
<div class="canvas-menu js-canvas-menu">
  <div class="canvas-menu__overlay js-close-canvas-menu"></div>
  <div class="canvas-menu__content">
    <div class="canvas-menu__close"><a href="#" class="js-close-canvas-menu"><i class="lnil lnil-close"></i><span>Close</span></a></div>
    <div style="padding:2rem;border-bottom:1px solid #eee;">
      <img src="/images/logo-dark-bg.png" alt="Olympic Exports" style="height:34px;margin-bottom:0.5rem;"><br>
      <strong style="font-family:'Cinzel',serif;">OLYMPIC EXPORTS</strong><br>
      <small style="color:#888;">Govt. Recognized Export House &bull; Jajmau, Kanpur</small>
    </div>
    <ul class="canvas-menu__nav">
      <li><a href="index.html" class="canvas-nav__item">Home</a></li>
      <li>
        <div class="canvas-nav__item">Explore Olympic Exports</div>
        <div class="nav__mega-menu"><div class="mega-menu__standard-column">
          <div class="standard-column__title">Explore</div>
          <ul class="standard-column__nav"><table>
            <tr><li><td><a href="about.html">About Us (Est. 1994)</a></td></li></tr>
            <tr><li><td><a href="art-of-manufacturing.html">Art of Manufacturing</a></td></li></tr>
          </table></ul>
        </div></div>
      </li>
      <li>
        <div class="canvas-nav__item">Search by Products</div>
        <div class="nav__mega-menu"><div class="mega-menu__standard-column">
          <div class="standard-column__title"><a href="products.html" class="text-dark"><b>Discover All</b></a></div>
          <div class="standard-column__title"><table>
            <tr><li><td><a href="leather-belts.html">Leather Belts (Tooled)</a></td></li></tr>
            <tr><li><td><a href="beaded-belts.html">Beaded Belts (Aztec)</a></td></li></tr>
            <tr><li><td><a href="kilim-bags.html">Kilim Bags &amp; Luggage</a></td></li></tr>
            <tr><li><td><a href="leather-bags.html">Leather Bags</a></td></li></tr>
            <tr><li><td><a href="shoe-laces.html">Shoe Laces &amp; Cords</a></td></li></tr>
            <tr><li><td><a href="elastic-bands.html">Elastic Bands &amp; Webbing</a></td></li></tr>
            <tr><li><td><a href="footwear.html">Footwear (Goodyear Welted)</a></td></li></tr>
          </table></div>
        </div></div>
      </li>
      <li>
        <div class="canvas-nav__item">Search by Industry</div>
        <div class="nav__mega-menu"><div class="mega-menu__standard-column">
          <div class="standard-column__title"><a href="industries.html" class="text-dark"><b>Discover All</b></a></div>
          <div class="standard-column__title"><table>
            <tr><li><td><a href="industries.html">Western &amp; Equestrian</a></td></li></tr>
            <tr><li><td><a href="industries.html">Footwear &amp; Bootmaking</a></td></li></tr>
            <tr><li><td><a href="industries.html">Boutique Fashion Retail</a></td></li></tr>
            <tr><li><td><a href="industries.html">Adventure &amp; Outdoor</a></td></li></tr>
            <tr><li><td><a href="industries.html">OEM &amp; Private Label</a></td></li></tr>
          </table></div>
        </div></div>
      </li>
      <li><a href="customise.html" class="canvas-nav__item">Customise Your Own Products</a></li>
      <li><a href="catalogue.html" class="canvas-nav__item">Catalogue</a></li>
      <li><a href="contact-us.html" class="canvas-nav__item">Contact Us</a></li>
    </ul>
    <div style="padding:2rem;border-top:1px solid #eee;font-size:0.8rem;">
      <strong>Kanpur Direct Desk:</strong><br>
      <a href="tel:9839086636" style="color:#8B5E1E;">+91 98390 86636</a> (Mr. Farhan Mirza)<br>
      <a href="tel:7388814225" style="color:#8B5E1E;">+91 73888 14225</a> (Mr. Ayaan Mirza)
    </div>
  </div>
</div>`;

const SHARED_FOOTER = `
<footer class="modern-footer collection-footer footov">
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
</footer>
<script type="module" src="/src/main.js"></script>
</body>
</html>`;

// ============================================================
// PRODUCT CATEGORY PAGES
// ============================================================

const categories = [
  {
    file: 'leather-belts.html',
    title: 'Leather Belts (Hand-Tooled Western) || Olympic Exports',
    desc: 'Premium hand-carved Western tooling belts in full-grain vegetable-tanned steerhide. MOQ 100 pieces. Manufacturer from Kanpur, India since 1994.',
    bannerImg: '/images/products/leather-tooling-belts/Product T1.png',
    bannerKicker: 'Division 01 &bull; Hand-Tooled Western Craftsmanship',
    bannerTitle: 'Leather Belts',
    breadcrumb: 'Products',
    breadcrumbLink: 'products.html',
    intro: 'Our flagship product line since 1994 — hand-carved Western tooling belts made from the finest vegetable-tanned full-grain steerhide sourced from Jajmau\'s best tanneries. Every belt is individually incised by master artisans using swivel-knife carving techniques refined over generations.',
    specRows: [
      ['Material', '9-10 oz Full-Grain Vegetable-Tanned Steerhide / Cowhide'],
      ['Tanning Method', 'Traditional Bark-Pit Vegetable Tanning (Chromium-Free, SVHC Compliant)'],
      ['Available Widths', '1.25" (32mm), 1.50" (38mm), 1.75" (44mm), 2.00" (50mm)'],
      ['Length Range', 'Sizes 28" to 52" (Custom sizing available)'],
      ['Tooling Styles', 'Floral Western, Scroll Arabesque, Sunflower, Rope-Edge, Geometric'],
      ['Finishes', 'Saddle Tan, Dark Walnut, Cognac, Black, Two-Tone Antique'],
      ['Buckles', 'Solid Brass, Antique Nickel, Antique Silver (Western, Roller, 3-Piece Sets)'],
      ['Edge Treatment', 'Hand-burnished, Beveled, Heat-sealed'],
      ['Standard MOQ', '100 Pieces / Size Curve'],
      ['Custom Tooling MOQ', '50 Pieces per pattern'],
      ['Lead Time', '15–20 Business Days from approved sample'],
      ['Packing', 'Individual polybag + master carton (24 pcs) | Private label hang-tags available'],
    ],
    products: [
      { name: 'Classic Floral Western Tooling Belt', sku: 'LB-T01', img: '/images/products/leather-tooling-belts/Product T1.png', desc: 'Continuous floral and wild rose hand-incised motifs on 9-10 oz steerhide. Natural saddle tan finish with heavy-duty antique silver Western buckle.' },
      { name: 'Two-Tone Scroll Arabesque Belt', sku: 'LB-T02', img: '/images/products/leather-tooling-belts/Product T2.png', desc: 'Dark walnut and cognac two-tone scrollwork paired with an engraved 3-piece buckle set (buckle, keeper, tip).' },
      { name: 'Sunburst Floral Saddle Tan Belt', sku: 'LB-T03', img: '/images/products/leather-tooling-belts/Product T3.png', desc: 'Continuous sunburst and rose motifs on heavy bridle-grade cowhide. Natural carnauba wax hand-buffed finish.' },
      { name: 'Sunflower Deep-Embossed Belt', sku: 'LB-T04', img: '/images/products/leather-tooling-belts/Product T4.png', desc: 'Artisan hand-stamped sunflower medallions bordered by rope-edge tooling on Indian buffalo leather.' },
      { name: 'Vintage Distressed Scroll Belt', sku: 'LB-T05', img: '/images/products/leather-tooling-belts/Product T5.png', desc: 'Antiqued distressed finish with deep geometric scroll tooling and engraved concho Chicago screw closure.' },
      { name: 'Heavy Western Floral Tooled Bridle Belt', sku: 'LB-T06', img: '/images/products/leather-tooling-belts/Product T6.png', desc: 'High-relief full floral carving on premium English bridle leather with hand-burnished and painted edge bevels.' },
    ]
  },
  {
    file: 'beaded-belts.html',
    title: 'Beaded Belts (Tribal Aztec Handmade) || Olympic Exports',
    desc: 'Tribal Aztec hand-beaded belts with intricate geometric inlay patterns. Manufacturer from Kanpur since 1994. MOQ 50 pieces.',
    bannerImg: '/images/products/fashion-tooling-belts/Product FT1.png',
    bannerKicker: 'Division 02 &bull; Tribal Aztec Hand-Beaded Craftsmanship',
    bannerTitle: 'Beaded Belts',
    breadcrumb: 'Products',
    breadcrumbLink: 'products.html',
    intro: 'Each Olympic Exports beaded belt is a wearable art piece — individually hand-threaded using glass seed beads, acrylic stones, or natural shell beads arranged into Aztec, Southwestern, and Navajo-inspired geometric patterns on a genuine leather base.',
    specRows: [
      ['Base Material', 'Full-Grain Cowhide or Split Leather (3mm–4mm thickness)'],
      ['Bead Types', 'Glass Seed Beads, Miyuki Delica, Acrylic Faceted, Natural Shell, Bone'],
      ['Bead Pattern Styles', 'Aztec Geometric, Navajo Diamond, Southwestern Chevron, Tribal Animal Motifs'],
      ['Available Widths', '1.50" (38mm), 2.00" (50mm), 3.00" (75mm) — Statement Width'],
      ['Length Range', 'XS to XXL (Custom on request)'],
      ['Closure Options', 'Hook-and-bar, Chicago screw, Magnetic snap, Button stud'],
      ['Colour Matching', 'Custom Pantone bead colour matching available for private label orders'],
      ['Standard MOQ', '50 Pieces per style'],
      ['Custom Design MOQ', '25 Pieces per pattern (minimum 3 patterns)'],
      ['Lead Time', '20–28 Business Days'],
      ['Certification', 'Nickel-free hardware on request; child-safe bead finish available'],
    ],
    products: [
      { name: 'Aztec Sunburst Beaded Belt', sku: 'BB-A01', img: '/images/products/fashion-tooling-belts/Product FT1.png', desc: 'Bold Aztec sunburst in terracotta, cream and midnight blue seed beads on 2" genuine leather base.' },
      { name: 'Navajo Diamond Statement Belt', sku: 'BB-A02', img: '/images/products/fashion-tooling-belts/Product FT2.png', desc: 'Classic Navajo diamond repeat pattern in black, white, and red acrylic faceted beads. 3" statement width.' },
      { name: 'Southwestern Rainbow Chevron', sku: 'BB-A03', img: '/images/products/fashion-tooling-belts/Product FT3.png', desc: 'Multi-colour chevron stripe in glass seed beads across full length on cognac split leather base.' },
      { name: 'Tribal Eagle Totem Belt', sku: 'BB-A04', img: '/images/products/fashion-tooling-belts/Product FT4.png', desc: 'Detailed eagle and feather totem motif in natural shell and bone beads on dark brown leather.' },
      { name: 'Aztec Calendar Medallion Belt', sku: 'BB-A05', img: '/images/products/fashion-tooling-belts/Product FT5.png', desc: 'Single centrepiece Aztec calendar medallion hand-beaded with Miyuki Delica precision beads.' },
    ]
  },
  {
    file: 'kilim-bags.html',
    title: 'Kilim Bags & Tapestry Luggage || Olympic Exports',
    desc: 'Handwoven Kilim tapestry bags, totes, and luggage from Olympic Exports Kanpur. Southwestern patterns in vibrant wool and leather trim.',
    bannerImg: '/images/products/fashion-bags/Product FB3.png',
    bannerKicker: 'Division 03 &bull; Kilim Tapestry Craft',
    bannerTitle: 'Kilim Bags',
    breadcrumb: 'Products',
    breadcrumbLink: 'products.html',
    intro: 'Bringing the ancient art of flat-weave kilim tapestry to modern accessories, Olympic Exports produces handwoven kilim bags, totes, duffels, and saddle bags featuring bold Southwestern and Turkish geometric patterns hand-woven in vibrant wool blends, with genuine leather trim and hardware.',
    specRows: [
      ['Fabric', 'Handwoven Kilim (Wool/Cotton/Jute Blend) with Genuine Leather Trim'],
      ['Weave Style', 'Flat-Weave Kilim, Slit-Tapestry, Sumak Technique'],
      ['Pattern Styles', 'Southwestern Geometric, Turkish Tribal, Aztec Diamonds, Persian Medallion'],
      ['Lining', 'Full cotton canvas or polyester lining with interior zipper pocket'],
      ['Hardware', 'Antique brass D-rings, strap loops, and zipper pulls'],
      ['Product Types', 'Tote Bags, Crossbody Bags, Duffel Bags, Saddle Bags, Luggage Bags, Clutch Purses'],
      ['Strap Options', 'Leather handles, cotton webbing strap, adjustable crossbody strap'],
      ['Standard MOQ', '50 Pieces per style'],
      ['Lead Time', '25–35 Business Days'],
      ['Packing', 'Individual dustbag + private label swing tag available'],
    ],
    products: [
      { name: 'Kilim Aztec Tote Bag', sku: 'KB-K01', img: '/images/products/fashion-bags/Product FB1.png', desc: 'Large-format handwoven Aztec kilim tote with full leather bottom panel and double leather handles.' },
      { name: 'Turkish Tribal Crossbody', sku: 'KB-K02', img: '/images/products/fashion-bags/Product FB4.png', desc: 'Compact Turkish geometric pattern kilim crossbody with antique brass hardware and 120cm adjustable strap.' },
      { name: 'Southwestern Duffel Bag', sku: 'KB-K03', img: '/images/products/fashion-bags/Product FB3.png', desc: 'Weekend travel duffel in bold southwestern kilim with full-length zip, leather carry handles, and detachable shoulder strap.' },
      { name: 'Kilim Saddle & Rucksack Bag', sku: 'KB-K04', img: '/images/products/fashion-bags/Product FB2.png', desc: 'Classic western-style saddle bag with kilim body panel, leather flap, and antique concho closures.' },
      { name: 'Persian Medallion Travel Duffle', sku: 'KB-K05', img: '/images/products/fashion-bags/Product FB5.png', desc: 'Artisanal travel duffle with Persian medallion tapestry panel, tooled leather yoke and reinforced bottom.' },
    ]
  },
  {
    file: 'leather-bags.html',
    title: 'Leather Bags (Handcrafted) || Olympic Exports',
    desc: 'Handcrafted full-grain leather bags from Olympic Exports Kanpur. Totes, satchels, briefcases, and crossbody styles. B2B export MOQ 50 pieces.',
    bannerImg: '/images/products/fashion-bags/Product FB5.png',
    bannerKicker: 'Division 04 &bull; Handcrafted Leather Bag Manufacturing',
    bannerTitle: 'Leather Bags',
    breadcrumb: 'Products',
    breadcrumbLink: 'products.html',
    intro: 'From structured executive briefcases to relaxed weekend totes, Olympic Exports crafts premium full-grain and top-grain leather bags in Kanpur using traditional stitching and finishing techniques. All hardware is solid brass or antique nickel, and all edges are hand-burnished.',
    specRows: [
      ['Leather Grade', 'Full-Grain Cowhide (1.8mm–2.2mm), Top-Grain Pebble Leather, Nubuck'],
      ['Tanning', 'Vegetable-tanned (natural) or Chrome-tanned (softer drape)'],
      ['Stitch', 'Saddle stitch (hand) or lockstitch (machine) with waxed polyester thread'],
      ['Hardware', 'Solid Brass, Antique Nickel, Gunmetal — all custom-sourceable'],
      ['Edge Treatment', 'Hand-burnished, Painted, Folded'],
      ['Lining Options', 'Cotton canvas, jacquard, or suede lining with organiser pockets'],
      ['Product Types', 'Tote, Satchel, Briefcase / Portfolio, Crossbody, Backpack, Duffle'],
      ['Standard MOQ', '50 Pieces per style'],
      ['Lead Time', '20–30 Business Days'],
      ['Branding', 'Brand stamp, embossed logo, branded hardware, custom hang tag'],
    ],
    products: [
      { name: 'Artisanal Voyager Travel Bag', sku: 'LBG-B01', img: '/images/products/fashion-bags/Product FB5.png', desc: 'Full-size travel bag boasting hand-tooled leather corner patches, floral embossed leather yoke trim, and robust dual top zips.' },
      { name: 'Handcrafted Heritage Kilim & Leather Tote', sku: 'LBG-B02', img: '/images/products/fashion-bags/Product FB1.png', desc: 'Spacious everyday tote combining authentic handwoven southwestern kilim wool tapestry with heavy full-grain leather base and shoulder straps.' },
      { name: 'Vintage Tribal Satchel & Crossbody', sku: 'LBG-B03', img: '/images/products/fashion-bags/Product FB4.png', desc: 'Artisan shoulder bag with dual exterior leather flap cargo pockets, hand-cut leather accents, and rich geometric tapestry body.' },
      { name: 'Dome-Top Heritage Leather Backpack', sku: 'LBG-B04', img: '/images/products/fashion-bags/Product FB2.png', desc: 'Dome-silhouette leather satchel and backpack with hand-carved floral leather trim, front panel tapestry, and top carry handle.' },
      { name: 'Southwestern Weekender Duffle', sku: 'LBG-B05', img: '/images/products/fashion-bags/Product FB3.png', desc: 'Cylindrical weekender duffel engineered for travel with wrap-around leather reinforcement straps and protective bottom studs.' },
    ]
  },
  {
    file: 'shoe-laces.html',
    title: 'Shoe Laces & Boot Cords || Olympic Exports',
    desc: 'Glazed waxed cotton shoe laces, braided boot cords, round laces, flat laces, and 3M reflective cords from Olympic Exports Kanpur.',
    bannerImg: '/images/shoelaces.jpg',
    bannerKicker: 'Division 05 &bull; Premium Shoelace & Boot Cord Manufacturing',
    bannerTitle: 'Shoe Laces & Cords',
    breadcrumb: 'Products',
    breadcrumbLink: 'products.html',
    intro: 'One of our heritage product lines — Olympic Exports has been manufacturing premium shoelaces since 1994. From glazed waxed cotton round laces for dress shoes to braided 550-paracord boot cords, our lace manufacturing covers every footwear application across width, construction, material, and tip style.',
    specRows: [
      ['Materials', 'Waxed Cotton, Braided Polyester, Nylon, Paracord 550, Leather Thong, Jute'],
      ['Constructions', 'Round (3mm–8mm dia.), Flat (7mm–15mm width), Oval, Tubular, Twisted'],
      ['Finishes', 'Glossy Waxed, Matte Waxed, Natural Unfinished, 3M Scotchlite Reflective'],
      ['Tip Types', 'Brass Aglet, Nickel Aglet, Plastic Aglet, Knotted, Whipped, Heat-Sealed'],
      ['Lengths', '27", 30", 36", 40", 45", 54", 60", 72", 84" — or custom cut'],
      ['Colours', 'Full Pantone matching — custom colour dyeing available from 500m MOQ'],
      ['Applications', 'Oxford Dress Shoes, Work Boots, Chelsea Boots, Athletic, Western, Hiking, Military'],
      ['Standard MOQ', '500 Pairs per style per colour'],
      ['Bulk Roll MOQ', '500m per construction type'],
      ['Lead Time', '10–15 Business Days'],
      ['Packing', 'Tied pairs or spooled rolls — private label header card available'],
    ],
    products: [
      { name: 'Glazed Waxed Round Cotton Lace', sku: 'SL-L01', img: '/images/shoelaces.jpg', desc: 'Smooth-finish waxed cotton round laces for dress shoes and Oxfords. Available in 27" to 45" length, natural white to black.' },
      { name: 'Braided Polyester Boot Cord', sku: 'SL-L02', img: '/images/shoelaces.jpg', desc: 'Heavy 5mm round braided polyester cord for work boots and hiking footwear. 48"–84" lengths with brass aglets.' },
      { name: '3M Reflective Safety Lace', sku: 'SL-L03', img: '/images/shoelaces.jpg', desc: '3M Scotchlite flat reflective lace for high-visibility safety boots and tactical footwear.' },
      { name: 'Leather Thong Boot Lace', sku: 'SL-L04', img: '/images/shoelaces.jpg', desc: 'Rustic leather thong laces in natural tan and dark brown for western cowboy and moccasin boots.' },
      { name: 'Flat Waxed Canvas Lace', sku: 'SL-L05', img: '/images/shoelaces.jpg', desc: 'Bold 10mm flat waxed laces for classic brogues and chukka boots in 30+ colours.' },
    ]
  },
  {
    file: 'elastic-bands.html',
    title: 'Elastic Bands & Webbing || Olympic Exports',
    desc: 'Technical 1inch and 2inch woven elastic bands in custom colors as per requirement, Chelsea boot gussets, and narrow webbing from Olympic Exports Kanpur.',
    bannerImg: '/images/products/elastic/3.jpeg',
    bannerKicker: 'Division 06 &bull; Technical Elastic & Webbing Manufacturing',
    bannerTitle: 'Elastic Bands',
    breadcrumb: 'Products',
    breadcrumbLink: 'products.html',
    intro: 'Olympic Exports manufactures 1inch and 2inch woven elastic in custom colors as per buyer requirement, supplying footwear brands, bootmakers, apparel manufacturers, and accessories producers worldwide. Our elastic division specializes in Chelsea boot gussets, waistbands, and narrow technical webbings.',
    specRows: [
      ['Type', '1" & 2" Woven Elastic, Technical Webbing, Chelsea Gusset'],
      ['Width Range', '1" (25mm), 2" (50mm), and custom widths (6mm to 150mm) on request'],
      ['Colors', 'Custom colors as per requirement (Full Pantone Matching)'],
      ['Elasticity', '110% – 160% stretch depending on specification'],
      ['Yarns', 'Rubber core / Spandex with High-Bulk Polyester / Nylon face yarn'],
      ['Weave/Knit', 'Dense Twill, Plain, Herringbone, Non-Roll Selvage'],
      ['Applications', 'Chelsea Boot Gussets, Waistbands, Footwear, Sports, Utility Strapping'],
      ['Certifications', 'OEKO-TEX Standard 100 on request, EU REACH SVHC compliant'],
      ['Standard MOQ', '1,000m to 1,500m per width per colour'],
      ['Lead Time', '10–14 Business Days'],
      ['Packing', 'Rolls / Spools on cardboard core, Master carton'],
    ],
    products: [
      { name: '1" & 2" Heavy-Duty Black Woven Elastic Roll', sku: 'OE-EL-101', img: '/images/products/elastic/1.jpeg', desc: '1inch and 2inch Woven Elastic in color as per requirement. Dense twill woven elastic roll engineered for high modulus tension and edge stability.' },
      { name: '1" & 2" High-Recovery Black Woven Elastic Spool', sku: 'OE-EL-102', img: '/images/products/elastic/2.jpeg', desc: '1inch and 2inch Woven Elastic in color as per requirement. Spooled heavy-gauge elastic tape with non-roll edge construction.' },
      { name: 'Multi-Color Coordinated 1" & 2" Woven Elastic Rolls', sku: 'OE-EL-103', img: '/images/products/elastic/3.jpeg', desc: '1inch and 2inch Woven Elastic in color as per requirement. Multi-color coordinated selection in Black, Grey, Red, Tan, Dark Brown, and Navy Blue.' },
      { name: '2" Wide Dark Brown Woven Elastic Tape', sku: 'OE-EL-104', img: '/images/products/elastic/4.jpeg', desc: '1inch and 2inch Woven Elastic in color as per requirement. Substantial 2-inch wide woven elastic in deep dark brown / coffee hue.' },
      { name: '5-Core Color 1" & 2" Woven Elastic Assortment', sku: 'OE-EL-105', img: '/images/products/elastic/5.jpeg', desc: '1inch and 2inch Woven Elastic in color as per requirement. Production-ready core shades: Coffee, Gray, Red, Black, and Brown.' },
      { name: 'Full-Spectrum Pantone 1" & 2" Woven Elastic Collection', sku: 'OE-EL-106', img: '/images/products/elastic/6.jpeg', desc: '1inch and 2inch Woven Elastic in color as per requirement. Full custom spectrum of 20+ shades with laboratory Pantone matching.' },
      { name: 'Export-Grade Bundled Spool 1" & 2" Woven Elastic', sku: 'OE-EL-107', img: '/images/products/elastic/7.jpeg', desc: '1inch and 2inch Woven Elastic in color as per requirement. Factory-bundled standardized coils in high-demand export colors.' },
    ]
  },
  {
    file: 'footwear.html',
    title: 'Footwear (Goodyear Welted Boots & Shoes) || Olympic Exports',
    desc: 'Goodyear welted boots, brogues, and classic Oxford footwear manufactured in Kanpur, India. Premium leather uppers, natural rubber soles. MOQ 100 pairs.',
    bannerImg: '/images/leather-shoes.jpg',
    bannerKicker: 'Division 07 &bull; Goodyear Welted Footwear Manufacturing',
    bannerTitle: 'Footwear',
    breadcrumb: 'Products',
    breadcrumbLink: 'products.html',
    intro: 'The pinnacle of Olympic Exports\' manufacturing capability — Goodyear welted boots and classic dress shoes crafted with European last shapes, vegetable-tanned leather uppers, and Goodyear-stitched natural rubber or leather soles. REACH-compliant for the EU market.',
    specRows: [
      ['Construction Method', 'Goodyear Welt (Stitched-Down), Blake Stitch, Cemented (on request)'],
      ['Upper Leather', 'Full-Grain Vegetable-Tanned Cowhide, Pebble Leather, Suede, Pull-Up'],
      ['Lining', 'Full leather lining (breathable, anti-bacterial)'],
      ['Insole', 'Leather and cork combination (moldable to foot shape after break-in)'],
      ['Outsole', 'Natural Rubber (Vibram), Leather, Crepe, Synthetic Commando'],
      ['Last Shapes', 'Round Toe, Chisel Toe, Almond Toe (European lasts available)'],
      ['Height Options', 'Oxford (low), Derby, Chukka (mid), Chelsea (mid), Service Boot (high)'],
      ['Heel Types', 'Stacked Leather, Rubber Block, Western Cowboy'],
      ['Colours', 'Saddle Tan, Dark Brown, Black, Oxblood, Natural'],
      ['Standard MOQ', '100 Pairs per style per size curve (EU 38–EU 46)'],
      ['Lead Time', '30–45 Business Days'],
      ['Certification', 'EU REACH compliant, Chrome-free tanning available'],
    ],
    products: [
      { name: 'Service Boot (Goodyear Welted)', sku: 'FW-B01', img: '/images/leather-shoes.jpg', desc: 'Classic high-top service boot in dark brown full-grain leather, Vibram commando sole, and speed lace hooks.' },
      { name: 'Chelsea Boot (Goodyear Welted)', sku: 'FW-B02', img: '/images/leather-shoes.jpg', desc: 'Clean-line Chelsea boot in pebble leather with knitted elastic gusset, stacked leather heel, and natural rubber sole.' },
      { name: 'Classic Oxford (Blake Stitch)', sku: 'FW-B03', img: '/images/leather-shoes.jpg', desc: 'Sleek 5-eyelet Oxford in pull-up tan leather with burnished toecap, leather sole, and heel.' },
      { name: 'Wingtip Brogue Derby', sku: 'FW-B04', img: '/images/leather-shoes.jpg', desc: 'Full-brogue wingtip Derby in cognac pebble leather, Goodyear welted with natural rubber sole.' },
      { name: 'Western Cowboy Boot', sku: 'FW-B05', img: '/images/leather-shoes.jpg', desc: 'Traditional western cowboy boot in tan tooled full-grain leather with underslung heel and pointed toe.' },
    ]
  }
];

// ============================================================
// BUILD EACH CATEGORY PAGE
// ============================================================
function buildProductRow(p) {
  return `
      <div class="col-md-4 col-sm-6 mb-4">
        <div class="product-cat-card" style="background:#fff;border:1px solid #e8d9c0;border-radius:4px;overflow:hidden;">
          <div style="position:relative;height:220px;overflow:hidden;background:#fdfaf5;">
            <img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">
            <div style="position:absolute;top:10px;left:10px;background:rgba(139,94,30,0.9);color:#fff;font-size:0.65rem;letter-spacing:0.1em;padding:3px 8px;font-weight:700;">${p.sku}</div>
          </div>
          <div style="padding:1.25rem;">
            <h4 style="font-family:'Cinzel',serif;font-size:0.95rem;color:#1a0f05;margin-bottom:0.5rem;">${p.name}</h4>
            <p style="font-size:0.825rem;color:#5a4738;line-height:1.6;margin-bottom:1rem;">${p.desc}</p>
            <a href="contact-us.html?sku=${p.sku}" class="eighth-button" style="font-size:0.75rem;padding:0.5rem 1rem;">Request Sample</a>
          </div>
        </div>
      </div>`;
}

for (const cat of categories) {
  const html = `${SHARED_HEAD(cat.title, cat.desc)}
</head>
<body class="absolute-header">
${SHARED_FLOATWP}
${SHARED_HEADER}
${SHARED_CANVAS}

<!-- Page Banner -->
<div class="page-banner">
  <img src="${cat.bannerImg}" alt="${cat.bannerTitle}" class="cover">
  <div class="container">
    <div class="kicker">${cat.bannerKicker}</div>
    <h1>${cat.bannerTitle}</h1>
    <div class="breadcrumb-row"><a href="index.html">Home</a> &rarr; <a href="${cat.breadcrumbLink}">${cat.breadcrumb}</a> &rarr; ${cat.bannerTitle}</div>
  </div>
</div>

<!-- Product Intro -->
<section style="background:#fdfaf5;padding:5rem 0 3rem;">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-7">
        <div style="font-size:0.7rem;letter-spacing:0.25em;text-transform:uppercase;color:#8B5E1E;margin-bottom:1rem;">Olympic Exports Pvt. Ltd.</div>
        <h2 style="font-family:'Cinzel',serif;font-size:2.25rem;color:#1a0f05;margin-bottom:1.25rem;">${cat.bannerTitle}</h2>
        <p style="font-size:1rem;line-height:1.85;color:#5a4738;">${cat.intro}</p>
        <div style="margin-top:2rem;display:flex;gap:1rem;flex-wrap:wrap;">
          <a href="contact-us.html" class="eighth-button">Request Catalogue</a>
          <a href="https://api.whatsapp.com/send?phone=919839086636&text=Hi%2C%20I%20need%20info%20on%20${encodeURIComponent(cat.bannerTitle)}" target="_blank" class="eighth-button without-background">WhatsApp Now</a>
        </div>
      </div>
      <div class="col-md-5 mt-4 mt-md-0">
        <div style="background:#111;color:#fff;padding:2rem;border-radius:4px;">
          <div style="font-family:'Cinzel',serif;font-size:0.9rem;margin-bottom:1rem;color:#c9a96e;">DIRECT MANUFACTURER</div>
          <div style="font-size:0.875rem;line-height:2;">
            <div><strong>Olympic Exports Pvt. Ltd.</strong></div>
            <div style="color:#aaa;">56-D, Defence Colony, Jajmau, Kanpur</div>
            <div style="color:#aaa;">Uttar Pradesh, India — 208010</div>
            <div style="margin-top:0.75rem;"><a href="tel:9839086636" style="color:#e6c875;">+91 98390 86636</a></div>
            <div><a href="tel:7388814225" style="color:#e6c875;">+91 73888 14225</a></div>
            <div style="margin-top:0.5rem;"><a href="mailto:Olympic.Mirza@yahoo.com" style="color:#e6c875;">Olympic.Mirza@yahoo.com</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Specifications -->
<section style="background:#fff;padding:4rem 0;">
  <div class="container">
    <h3 style="font-family:'Cinzel',serif;font-size:1.6rem;color:#1a0f05;margin-bottom:2rem;">Technical Specifications</h3>
    <table class="table table-bordered" style="font-size:0.9rem;">
      <tbody>
        ${cat.specRows.map(([label, val]) => `<tr><td style="font-weight:600;color:#1a0f05;background:#fdfaf5;width:30%;">${label}</td><td style="color:#5a4738;">${val}</td></tr>`).join('\n        ')}
      </tbody>
    </table>
  </div>
</section>

<!-- Product Grid -->
<section style="background:#fdfaf5;padding:5rem 0;">
  <div class="container">
    <h3 style="font-family:'Cinzel',serif;font-size:1.6rem;color:#1a0f05;margin-bottom:0.5rem;">Product Models</h3>
    <p style="color:#5a4738;margin-bottom:3rem;">Representative models from our current export catalogue. Custom specifications and private label branding available.</p>
    <div class="row">
      ${cat.products.map(buildProductRow).join('')}
    </div>
    <div style="text-align:center;margin-top:3rem;padding:2.5rem;background:#111;border-radius:4px;color:#fff;">
      <h4 style="font-family:'Cinzel',serif;margin-bottom:1rem;">Need Custom Specifications?</h4>
      <p style="color:#aaa;margin-bottom:1.5rem;">Our directors personally handle all RFQ enquiries. Contact us for custom sizing, OEM private label, die development, and bulk pricing.</p>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
        <a href="contact-us.html" class="eighth-button">Send RFQ</a>
        <a href="catalogue.html" class="eighth-button without-background">Download Catalogue</a>
      </div>
    </div>
  </div>
</section>

${SHARED_FOOTER}`;

  fs.writeFileSync(cat.file, html, 'utf-8');
  console.log(`Built: ${cat.file}`);
}

// ============================================================
// UPDATE VITE CONFIG + PRODUCTS PAGE
// ============================================================

// Also update products.html to show all 7 divisions
const productsHtml = `${SHARED_HEAD('Products — All Divisions || Olympic Exports', 'Discover all 7 manufacturing divisions of Olympic Exports Pvt. Ltd. — Leather Belts, Beaded Belts, Kilim Bags, Leather Bags, Shoe Laces, Elastic Bands, Footwear. Est. 1994, Kanpur.')}
</head>
<body class="absolute-header">
${SHARED_FLOATWP}
${SHARED_HEADER}
${SHARED_CANVAS}

<div class="page-banner">
  <img src="/images/hero.jpg" alt="Olympic Exports Products" class="cover">
  <div class="container">
    <div class="kicker">Est. 1994 &bull; 7 Manufacturing Divisions</div>
    <h1>Discover All Products</h1>
    <div class="breadcrumb-row"><a href="index.html">Home</a> &rarr; Products</div>
  </div>
</div>

<section style="background:#fdfaf5;padding:5rem 0;">
  <div class="container">
    <div style="text-align:center;margin-bottom:4rem;">
      <div style="font-size:0.7rem;letter-spacing:0.25em;color:#8B5E1E;text-transform:uppercase;margin-bottom:1rem;">Olympic Exports Pvt. Ltd. | Kanpur, India</div>
      <h2 style="font-family:'Cinzel',serif;font-size:2.5rem;color:#1a0f05;margin-bottom:1rem;">Our 7 Manufacturing Divisions</h2>
      <p style="max-width:650px;margin:0 auto;color:#5a4738;font-size:1rem;line-height:1.8;">From hand-carved Western tooling belts to Goodyear welted footwear, Olympic Exports manufactures across 7 specialist divisions from our Jajmau, Kanpur factory. All products available for B2B export with private label and custom OEM programs.</p>
    </div>
    <div class="row">
      ${[
        { file: 'leather-belts.html', img: '/images/products/leather-tooling-belts/Product T1.png', title: 'Leather Belts', sub: 'Hand-Carved Western Tooling', code: '01' },
        { file: 'beaded-belts.html', img: '/images/products/fashion-tooling-belts/Product FT1.png', title: 'Beaded Belts', sub: 'Tribal Aztec Hand-Beaded', code: '02' },
        { file: 'kilim-bags.html', img: '/images/products/fashion-bags/Product FB1.png', title: 'Kilim Bags', sub: 'Handwoven Tapestry Bags & Luggage', code: '03' },
        { file: 'leather-bags.html', img: '/images/products/fashion-bags/Product FB5.png', title: 'Leather Bags', sub: 'Handcrafted Full-Grain Bags', code: '04' },
        { file: 'shoe-laces.html', img: '/images/shoelaces.jpg', title: 'Shoe Laces', sub: 'Waxed Cotton & Boot Cords', code: '05' },
        { file: 'elastic-bands.html', img: '/images/elastics.jpg', title: 'Elastic Bands', sub: 'Technical Webbing & Gussets', code: '06' },
        { file: 'footwear.html', img: '/images/leather-shoes.jpg', title: 'Footwear', sub: 'Goodyear Welted Boots & Shoes', code: '07' },
      ].map(d => `
      <div class="col-md-4 col-sm-6 mb-4">
        <a href="${d.file}" style="text-decoration:none;">
          <div style="background:#fff;border:1px solid #e8d9c0;border-radius:4px;overflow:hidden;transition:transform 0.2s,box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 12px 40px rgba(0,0,0,0.12)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
            <div style="height:240px;overflow:hidden;position:relative;">
              <img src="${d.img}" alt="${d.title}" style="width:100%;height:100%;object-fit:cover;">
              <div style="position:absolute;top:12px;left:12px;background:rgba(139,94,30,0.95);color:#fff;font-size:0.65rem;letter-spacing:0.15em;padding:4px 10px;font-weight:700;">DIV. ${d.code}</div>
            </div>
            <div style="padding:1.5rem;">
              <h3 style="font-family:'Cinzel',serif;font-size:1.15rem;color:#1a0f05;margin-bottom:0.35rem;">${d.title}</h3>
              <p style="font-size:0.8rem;color:#8B5E1E;letter-spacing:0.05em;text-transform:uppercase;margin:0;">${d.sub}</p>
            </div>
          </div>
        </a>
      </div>`).join('')}
    </div>
    <div style="text-align:center;margin-top:3rem;padding:3rem;background:#111;border-radius:4px;color:#fff;">
      <h4 style="font-family:'Cinzel',serif;margin-bottom:0.75rem;">B2B Export Enquiries Welcome</h4>
      <p style="color:#aaa;max-width:500px;margin:0 auto 1.5rem;">Contact our directors directly for pricing, samples, and OEM programs. We export to USA, UK, Germany, France, Australia and 35+ countries.</p>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
        <a href="contact-us.html" class="eighth-button">Send RFQ</a>
        <a href="catalogue.html" class="eighth-button without-background">Download Catalogue</a>
      </div>
    </div>
  </div>
</section>

${SHARED_FOOTER}`;

fs.writeFileSync('products.html', productsHtml, 'utf-8');
console.log('Built: products.html');
console.log('All Olympic Exports product pages built successfully!');
