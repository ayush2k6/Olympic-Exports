import { createIcons, icons } from 'lucide';

/* ==========================================================================
   OLYMPIC EXPORTS PVT. LTD. - OFFICIAL 1994 CATALOGUE DATABASE
   Manufacturing Divisions:
   1. Bags & Belts (Hand-carved Western Tooling Belts, Beaded Inlays, Kilim & Leather Bags)
   2. Elastic Products (Technical Waistbands, Chelsea Boot Gussets, High-Tension Webbing)
   3. Shoe Laces (Glazed Waxed Cotton, Braided Boot Cords, 3M Reflective Cords)

   Factory: 56-D, Defence Colony, Jajmau, Kanpur, Uttar Pradesh, India - 208010
   Contacts: Mr Farhan Mirza (+91 98390 86636) | Mr Ayaan Mirza (+91 73888 14225)
   Official Email: Olympic.Mirza@yahoo.com
   ========================================================================== */

const PRODUCTS = [
  // =========================================================================
  // DIVISION 1: LEATHER TOOLING BELTS (Series T1 - T5)
  // =========================================================================
  {
    id: 't-01',
    sku: 'Product T1',
    name: 'Classic Floral Western Tooling Belt',
    category: 'Leather Belts',
    industry: 'Western & Outdoor Wear',
    image: '/images/products/leather-tooling-belts/Product T1.png',
    summary: 'Masterfully hand-carved floral and leaf tooling on 9-10 oz vegetable-tanned steerhide leather with hand-burnished edges.',
    specs: {
      material: '100% Full-Grain Vegetable-Tanned Steerhide (Kanpur Tannery)',
      dimensions: '1.5" (38mm) Width | Sizes 32" to 46"',
      performance: 'High-tensile saddle leather, resistant to stretch & cracking',
      finish: 'Natural Antique Saddle Tan, Hand-Dyed Edges',
      buckle: 'Heavy-Duty Antique Silver Engraved Western Floral Buckle',
      moq: '100 Pieces / Size Curve',
      leadTime: '15-20 Business Days'
    },
    tags: ['Western', 'Hand-Carved', 'Tooling', 'Steerhide']
  },
  {
    id: 't-02',
    sku: 'Product T2',
    name: 'Two-Tone Antique Scroll Tooling Belt',
    category: 'Leather Belts',
    industry: 'Boutique & Retail',
    image: '/images/products/leather-tooling-belts/Product T2.png',
    summary: 'Two-tone dark walnut and cognac hand-tooled scrollwork paired with an engraved 3-piece antique buckle set (buckle, keeper, tip).',
    specs: {
      material: 'Vegetable-Tanned Saddle Leather with Aniline Dye',
      dimensions: '1.5" (38mm) Width | Custom Sizing Available',
      performance: 'Double-edge stitched for lifetime structural integrity',
      finish: 'Hand-Rubbed Dark Brown Two-Tone Patina',
      buckle: 'Ornate 3-Piece Western Scroll Buckle Set',
      moq: '100 Pieces',
      leadTime: '15 Business Days'
    },
    tags: ['Two-Tone', 'Scrollwork', 'Buckle Set', 'Western']
  },
  {
    id: 't-03',
    sku: 'Product T3',
    name: 'Sunburst Floral Saddle Tan Tooling Belt',
    category: 'Leather Belts',
    industry: 'Equestrian & Western',
    image: '/images/products/leather-tooling-belts/Product T3.png',
    summary: 'Continuous sunburst and wild rose hand-tooled motifs across the entire strap with natural oil and carnauba wax seal.',
    specs: {
      material: 'Heavy Bridle Grade Cowhide Leather (3.8mm - 4.2mm)',
      dimensions: '1.5" (38mm) Width | Standard & Long Lengths',
      performance: 'Deep tooling relief that retains definition over decades',
      finish: 'Saddle Tan with Natural Carnauba Hand Buffing',
      buckle: 'Solid Brass or Antique Nickel Roller Buckle',
      moq: '120 Pieces',
      leadTime: '14-18 Business Days'
    },
    tags: ['Sunburst', 'Bridle Leather', 'Saddle Tan', 'Hand-Carved']
  },
  {
    id: 't-04',
    sku: 'Product T4',
    name: 'Sunflower Deep-Embossed Western Belt',
    category: 'Leather Belts',
    industry: 'Fashion Accessories',
    image: '/images/products/leather-tooling-belts/Product T4.png',
    summary: 'Artisan hand-stamped sunflower medallions bordered by intricate rope-edge tooling and Chicago screw buckle closure.',
    specs: {
      material: '100% Genuine Full-Grain Indian Buffalo / Steerhide',
      dimensions: '1.25" to 1.75" Widths Available',
      performance: 'Reinforced snap-on system for interchangeable buckles',
      finish: 'Warm Whiskey Brown with Darkened Tooling Background',
      buckle: 'Antique Silver Rope-Edge Western Buckle',
      moq: '100 Pieces',
      leadTime: '12-15 Business Days'
    },
    tags: ['Sunflower', 'Rope Border', 'Interchangeable', 'Buffalo Leather']
  },
  {
    id: 't-05',
    sku: 'Product T5',
    name: 'Vintage Distressed Scroll Carved Belt',
    category: 'Leather Belts',
    industry: 'Casual & Heritage',
    image: '/images/products/leather-tooling-belts/Product T5.png',
    summary: 'Vintage wash hand-carved leather with feather-edge skiving, distressed oil pull-up effect, and heavy western engraved hardware.',
    specs: {
      material: 'Oiled Vegetable-Tanned Cowhide',
      dimensions: '1.5" (38mm) Width | 30" to 48" Waist',
      performance: 'Supple hand-feel that patinas beautifully with wear',
      finish: 'Vintage Distressed Espresso Brown',
      buckle: 'Engraved Brushed Pewter Western Buckle',
      moq: '100 Pieces',
      leadTime: '15 Business Days'
    },
    tags: ['Distressed', 'Vintage', 'Espresso', 'Carved Leather']
  },
  {
    id: 't-06',
    sku: 'Product T6',
    name: 'Heavy Western Floral Tooled Bridle Belt',
    category: 'Leather Belts',
    industry: 'Western Heritage',
    image: '/images/products/leather-tooling-belts/Product T6.png',
    summary: 'High-relief full floral carving on premium English bridle leather with hand-burnished and painted edge bevels.',
    specs: {
      material: '100% Full-Grain Bridle Steerhide (Kanpur Tannery)',
      dimensions: '1.5" (38mm) Width | Sizes 32" to 48"',
      performance: 'High-tensile saddle leather, resistant to stretch & cracking',
      finish: 'Deep Chestnut Saddle Tan, Hand-Dyed Edges',
      buckle: 'Solid Antique Silver Floral Buckle & Keeper',
      moq: '100 Pieces',
      leadTime: '15-20 Business Days'
    },
    tags: ['Bridle Leather', 'High-Relief', 'Western Floral', 'Hand-Carved']
  },

  // =========================================================================
  // DIVISION 1 (CONT.): FASHION BEADED BELTS (Series FT1 - FT5)
  // =========================================================================
  {
    id: 'ft-01',
    sku: 'Product FT1',
    name: 'Sunflower Carved Aztec Beaded Belt',
    category: 'Beaded Belts',
    industry: 'Boho & Western Fashion',
    image: '/images/products/fashion-tooling-belts/Product FT1.png',
    summary: 'Hand-tooled floral leather borders surrounding a vibrant hand-beaded center strip featuring geometric Aztec diamonds in turquoise, coral, and white.',
    specs: {
      material: 'Genuine Full-Grain Leather & Glass Seed Beads',
      dimensions: '1.5" (38mm) Width | Custom Lengths',
      performance: 'Beads tightly woven on reinforced backing; zero loose threads',
      finish: 'Antique Cognac Leather with Western Floral Tooling',
      buckle: 'Removable Engraved Western Silver Buckle Set',
      moq: '80 Pieces / Colorway',
      leadTime: '18-22 Business Days'
    },
    tags: ['Beaded', 'Aztec', 'Turquoise', 'Sunflower', 'Handmade']
  },
  {
    id: 'ft-02',
    sku: 'Product FT2',
    name: 'Basketweave Geometric Beaded Belt',
    category: 'Beaded Belts',
    industry: 'Rodeo & Boutique',
    image: '/images/products/fashion-tooling-belts/Product FT2.png',
    summary: 'Precision basketweave carved leather billet ends with a contrasting monochrome and crimson Navajo tribal beadwork inlay.',
    specs: {
      material: 'Vegetable-Tanned Saddle Leather & Seed Glass Beads',
      dimensions: '1.5" (38mm) Width | Even Sizes 30"-44"',
      performance: 'Heavy nylon lock-stitched borders for rugged endurance',
      finish: 'Chestnut Brown with Black/White/Red Beading',
      buckle: 'Solid Antique Silver Floral Buckle & Keeper',
      moq: '80 Pieces',
      leadTime: '18 Business Days'
    },
    tags: ['Basketweave', 'Navajo', 'Geometric', 'Beaded Leather']
  },
  {
    id: 'ft-03',
    sku: 'Product FT3',
    name: 'Sunrise Diamond Tribal Beaded Belt',
    category: 'Beaded Belts',
    industry: 'Luxury Western Wear',
    image: '/images/products/fashion-tooling-belts/Product FT3.png',
    summary: 'Vibrant fire-sunburst beaded diamond pattern in red, yellow, and royal blue inlaid into hand-carved floral leather with matching tip.',
    specs: {
      material: 'Full-Grain Steerhide & Premium Micro Glass Beads',
      dimensions: '1.5" (38mm) Width | Adjustable 5-Hole Punch',
      performance: 'Lined with soft suede leather back for maximum comfort',
      finish: 'Medium Oil Hand-Burnished Saddle Leather',
      buckle: 'Ornate Antique Engraved Silver Buckle',
      moq: '100 Pieces',
      leadTime: '20 Business Days'
    },
    tags: ['Sunrise Diamond', 'Suede Lined', 'Tribal Beads', 'Western']
  },
  {
    id: 'ft-04',
    sku: 'Product FT4',
    name: 'Turquoise Cross-Hatch Beaded Tooling Belt',
    category: 'Beaded Belts',
    industry: 'Festival & Resort Wear',
    image: '/images/products/fashion-tooling-belts/Product FT4.png',
    summary: 'Cross-hatch tooled leather strap inset with an intricate turquoise and obsidian geometric beadwork strip, finished with antique silver accents.',
    specs: {
      material: 'Hand-Selected Kanpur Harness Leather',
      dimensions: '1.5" (38mm) Width | Custom Sizes',
      performance: 'Hand-sewn beadwork reinforcement with bonded thread',
      finish: 'Natural Honey Tan with Turquoise Bead Inlay',
      buckle: 'Antique Silver Finish Western Floral Buckle',
      moq: '80 Pieces',
      leadTime: '18 Business Days'
    },
    tags: ['Turquoise', 'Cross-Hatch', 'Honey Tan', 'Beaded']
  },
  {
    id: 'ft-05',
    sku: 'Product FT5',
    name: 'Rainbow Aztec Inlay Tooling Belt',
    category: 'Beaded Belts',
    industry: 'Designer Collections',
    image: '/images/products/fashion-tooling-belts/Product FT5.png',
    summary: 'Spectacular multi-hued Aztec tribal motif hand-beaded center with hand-carved floral tooling on both ends and engraved western hardware.',
    specs: {
      material: 'Full-Grain Veg-Tanned Leather & Grade-A Seed Beads',
      dimensions: '1.5" (38mm) Width | Universal Fit',
      performance: 'Weather-resistant and colorfast beadwork',
      finish: 'Rich Walnut Brown with Multi-Color Beading',
      buckle: 'Engraved Heavy Zinc Alloy Western Buckle',
      moq: '100 Pieces',
      leadTime: '20 Business Days'
    },
    tags: ['Rainbow Aztec', 'Multi-Color', 'Tooling', 'Artisan Beaded']
  },

  // =========================================================================
  // DIVISION 2: HANDCRAFTED KILIM & LEATHER BAGS (Series FB1 - FB5)
  // =========================================================================
  {
    id: 'fb-01',
    sku: 'Product FB1',
    name: 'Handcrafted Kilim Tapestry Leather Tote',
    category: 'Leather Bags',
    industry: 'Lifestyle & Travel',
    image: '/images/products/fashion-bags/Product FB1.png',
    summary: 'Spacious everyday tote combining authentic handwoven southwestern kilim wool tapestry with heavy full-grain leather base and shoulder straps.',
    specs: {
      material: 'Handwoven Kilim Wool Tapestry & Full-Grain Cowhide',
      dimensions: '17" W x 13" H x 5.5" D | 10" Handle Drop',
      performance: 'Heavy canvas interior lining with zip pocket & phone slots',
      hardware: 'Solid Antique Brass Rivets & YKK Metal Zippers',
      moq: '30 Pieces / Style',
      leadTime: '20-25 Business Days'
    },
    tags: ['Kilim Tote', 'Handwoven', 'Full-Grain', 'Brass Hardware']
  },
  {
    id: 'fb-02',
    sku: 'Product FB2',
    name: 'Dome-Top Kilim Satchel Backpack',
    category: 'Leather Bags',
    industry: 'Urban & Travel',
    image: '/images/products/fashion-bags/Product FB2.png',
    summary: 'Dome-silhouette leather satchel and mini backpack with hand-carved floral leather trim, kilim front panel, and top carry handle.',
    specs: {
      material: 'Vegetable-Tanned Leather & Hand-Dyed Kilim Tapestry',
      dimensions: '11" W x 12.5" H x 4.5" D',
      performance: 'Convertible adjustable leather straps (backpack / crossbody)',
      hardware: 'Antique Brass Snap & Smooth Glide YKK Zippers',
      moq: '30 Pieces',
      leadTime: '20 Business Days'
    },
    tags: ['Dome Satchel', 'Mini Backpack', 'Hand-Carved', 'Kilim']
  },
  {
    id: 'fb-03',
    sku: 'Product FB3',
    name: 'Kilim Weekender Travel Duffel Bag',
    category: 'Leather Bags',
    industry: 'Luxury Travel & Luggage',
    image: '/images/products/fashion-bags/Product FB3.png',
    summary: 'Cylindrical weekender duffel engineered for overnight trips. Wrap-around leather reinforcement straps, protective bottom studs, and luggage tag.',
    specs: {
      material: 'Heavy-Duty Kilim Tapestry & Oiled Pull-Up Leather',
      dimensions: '22" L x 11.5" W x 11.5" H (Carry-On Compliant)',
      performance: 'Reinforced dual leather handles & padded shoulder strap',
      hardware: 'Heavy-Gauge Brass D-Rings, Swivel Clips & Zippers',
      moq: '25 Pieces',
      leadTime: '25 Business Days'
    },
    tags: ['Travel Duffel', 'Weekender', 'Carry-On', 'Luggage']
  },
  {
    id: 'fb-04',
    sku: 'Product FB4',
    name: 'Kilim Western Shoulder Bag with Flap Pockets',
    category: 'Leather Bags',
    industry: 'Bohemian & Western',
    image: '/images/products/fashion-bags/Product FB4.png',
    summary: 'Artisan shoulder bag with dual exterior leather flap cargo pockets, hand-cut leather fringe accents, and a rich geometric kilim body.',
    specs: {
      material: 'Genuine Pull-Up Cowhide & Geometric Kilim Tapestry',
      dimensions: '14" W x 11" H x 5" D',
      performance: 'Magnetic closure side pockets for quick passport/phone access',
      hardware: 'Hand-Hammered Antique Brass Studs',
      moq: '35 Pieces',
      leadTime: '20 Business Days'
    },
    tags: ['Fringe Bag', 'Side Pockets', 'Boho Western', 'Shoulder Bag']
  },
  {
    id: 'fb-05',
    sku: 'Product FB5',
    name: 'Executive Kilim Voyager Travel Duffle',
    category: 'Leather Bags',
    industry: 'Premium Luggage',
    image: '/images/products/fashion-bags/Product FB5.png',
    summary: 'Full-size travel duffle boasting hand-tooled leather corner patches, floral embossed leather yoke trim, and robust two-way top zip.',
    specs: {
      material: 'Vegetable-Tanned Steerhide Leather & Aztec Kilim Tapestry',
      dimensions: '24" L x 12" W x 13" H',
      performance: 'Reinforced internal wire frame for shape retention',
      hardware: 'Antiqued Brass Heavy Dual Sliders',
      moq: '25 Pieces',
      leadTime: '22 Business Days'
    },
    tags: ['Voyager', 'Large Duffel', 'Tooled Yoke', 'Leather Luggage']
  },

  // =========================================================================
  // DIVISION 3: TECHNICAL ELASTIC PRODUCTS (Narrow Fabrics & Webbing)
  // Authenticated from Factory Mockups: 1inch and 2inch Woven Elastic
  // =========================================================================
  {
    id: 'el-101',
    sku: 'OE-EL-101',
    name: '1" & 2" Heavy-Duty Black Woven Elastic Roll',
    category: 'Elastic Products',
    industry: 'Footwear & Apparel',
    image: '/images/products/elastic/1.jpeg',
    summary: '1inch and 2inch Woven Elastic in color as per requirement. Dense twill woven elastic roll engineered for high modulus tension and edge stability in waistbands, footwear gussets, and utility straps.',
    specs: {
      material: 'High-Bulk Polyester & Natural Latex Rubber',
      dimensions: '1" (25mm) & 2" (50mm) Widths',
      colors: 'Black & Custom Colors as per requirement',
      performance: '140% Elongation with 98% Recovery Retain',
      finish: 'Dense twill face with reinforced non-fray selvage',
      moq: '1,500 Meters',
      leadTime: '10-12 Business Days'
    },
    tags: ['1" & 2" Woven', 'Black Elastic', 'High Modulus', 'Color As Per Req.']
  },
  {
    id: 'el-102',
    sku: 'OE-EL-102',
    name: '1" & 2" High-Recovery Black Woven Elastic Spool',
    category: 'Elastic Products',
    industry: 'Footwear & Boots',
    image: '/images/products/elastic/2.jpeg',
    summary: '1inch and 2inch Woven Elastic in color as per requirement. Spooled heavy-gauge elastic tape with non-roll edge construction specifically crafted for Chelsea boots and apparel waistbands.',
    specs: {
      material: 'Reinforced Heat-Treated Poly & Latex Core',
      dimensions: '1" (25mm) & 2" (50mm) Gauges',
      colors: 'Black & Custom Colors as per requirement',
      performance: 'Firm holding tension, non-curling edge',
      finish: 'Double-woven dense twill face',
      moq: '1,500 Meters',
      leadTime: '10-14 Business Days'
    },
    tags: ['1" & 2" Woven', 'Boot Gusset', 'Reinforced Edge', 'Color As Per Req.']
  },
  {
    id: 'el-103',
    sku: 'OE-EL-103',
    name: 'Multi-Color Coordinated 1" & 2" Woven Elastic Rolls',
    category: 'Elastic Products',
    industry: 'Apparel & Footwear',
    image: '/images/products/elastic/3.jpeg',
    summary: '1inch and 2inch Woven Elastic in color as per requirement. Multi-color coordinated selection in Black, Grey, Red, Tan, Dark Brown, and Navy Blue with yarn-dyed colorfast finish.',
    specs: {
      material: 'Combed Polyester Face with Natural Latex Rubber Core',
      dimensions: '1" (25mm) & 2" (50mm) Options',
      colors: 'Black, Grey, Red, Tan, Brown, Navy & Custom Colors',
      performance: '150% Stretch with zero edge distortion',
      finish: 'Yarn-dyed colorfast finish (Grade 4-5)',
      moq: '1,000 Meters / Color',
      leadTime: '12-15 Business Days'
    },
    tags: ['Multi-Color', '1" & 2" Woven', 'Earth Tones', 'Color As Per Req.']
  },
  {
    id: 'el-104',
    sku: 'OE-EL-104',
    name: '2" Wide Dark Brown Woven Elastic Tape',
    category: 'Elastic Products',
    industry: 'Equestrian & Boots',
    image: '/images/products/elastic/4.jpeg',
    summary: '1inch and 2inch Woven Elastic in color as per requirement. Substantial 2-inch wide woven elastic in deep dark brown / coffee hue, ideal for equestrian gear, footwear side panels, and outerwear.',
    specs: {
      material: 'Dense Double-Woven Polyester & Latex Core',
      dimensions: '2" (50mm) & 1" (25mm) Widths',
      colors: 'Dark Brown / Coffee & Custom Colors as per requirement',
      performance: 'Heavy-duty holding tension, abrasion resistant',
      finish: 'Matte woven texture with stabilized edge',
      moq: '1,500 Meters',
      leadTime: '12-14 Business Days'
    },
    tags: ['2" Wide Profile', 'Dark Brown', 'Heavy Duty', 'Color As Per Req.']
  },
  {
    id: 'el-105',
    sku: 'OE-EL-105',
    name: '5-Core Color 1" & 2" Woven Elastic Assortment',
    category: 'Elastic Products',
    industry: 'Apparel & Uniforms',
    image: '/images/products/elastic/5.jpeg',
    summary: '1inch and 2inch Woven Elastic in color as per requirement. Production-ready core shades: Coffee, Gray, Red, Black, and Brown. Engineered for consistent tension and zero wash degradation.',
    specs: {
      material: 'Dope-Dyed Poly Yarn with High-Grade Elastic Core',
      dimensions: '1" (25mm) & 2" (50mm) Widths',
      colors: 'Coffee, Gray, Red, Black, Brown & Custom Colors',
      performance: 'Colorfast to washing (Grade 4-5), shrinkage <2%',
      finish: 'Soft-touch surface with uniform modulus',
      moq: '1,000 Meters / Color',
      leadTime: '10-14 Business Days'
    },
    tags: ['5 Core Colors', '1" & 2" Woven', 'Colorfast Dyed', 'Color As Per Req.']
  },
  {
    id: 'el-106',
    sku: 'OE-EL-106',
    name: 'Full-Spectrum Pantone 1" & 2" Woven Elastic Collection',
    category: 'Elastic Products',
    industry: 'Fashion & Athleisure',
    image: '/images/products/elastic/6.jpeg',
    summary: '1inch and 2inch Woven Elastic in color as per requirement. Full custom spectrum of 20+ shades including Neon, Emerald, Mustard, Navy, Olive, Fuchsia, and Pastels with laboratory Pantone matching.',
    specs: {
      material: 'Premium Polyester-Elastane Blend',
      dimensions: '1" (25mm) & 2" (50mm) Profiles',
      colors: '20+ Stock Shades + Custom Pantone Dyeing as per requirement',
      performance: 'High-recovery 160% stretch, skin-friendly soft touch',
      finish: 'Vibrant eco-dyed Azo-free formulation',
      moq: '1,000 Meters / Colorway',
      leadTime: '14-18 Business Days'
    },
    tags: ['Full Spectrum', 'Pantone Matching', '1" & 2" Woven', 'Color As Per Req.']
  },
  {
    id: 'el-107',
    sku: 'OE-EL-107',
    name: 'Export-Grade Bundled Spool 1" & 2" Woven Elastic',
    category: 'Elastic Products',
    industry: 'OEM & Volume Export',
    image: '/images/products/elastic/7.jpeg',
    summary: '1inch and 2inch Woven Elastic in color as per requirement. Factory-bundled standardized coils in high-demand colors (Green, Gold, Neon, Navy, Red, White, Tan) ready for rapid manufacturing and export dispatch.',
    specs: {
      material: 'High-Tensile Needle-Loom Woven Elastic',
      dimensions: '1" (25mm) & 2" (50mm) Gauges',
      colors: 'Green, Gold, Neon, Navy, Red, White, Tan & Custom Colors',
      performance: 'Consistent tension throughout full coil length',
      finish: 'Factory-tied export bundles (25m / 50m / 100m spools)',
      moq: '2,000 Meters Combined',
      leadTime: '10-12 Business Days'
    },
    tags: ['Bundled Coils', '1" & 2" Woven', 'Export Packaging', 'Color As Per Req.']
  },

  // =========================================================================
  // DIVISION 4: CUSTOM SHOELACES & CORDS (Series OE-SL-101 - 108)
  // Authenticated from Factory Lace Catalogue Swatch Boards
  // =========================================================================
  {
    id: 'sl-101',
    sku: 'OE-SL-101',
    name: '2.50mm Cotton Round Waxy Dress Laces',
    category: 'Shoe Laces',
    industry: 'Formal Footwear & Dress Shoes',
    image: '/images/products/shoe-laces/1.png',
    summary: 'Glazed carnauba-waxed combed cotton round cords designed for classic oxfords, brogues, and luxury dress footwear across 9 distinct colorways.',
    specs: {
      material: '100% Combed Compact Cotton with Natural Carnauba Wax',
      dimensions: '2.50mm Diameter | 60cm, 75cm, 80cm, 90cm Lengths',
      colors: '9 Colorways (Black, Brown, Light Brown, Tan, Khaki, Navy, Red, Pink, Beige)',
      performance: 'High-friction knot retention, zero fraying under eyelet stress',
      finish: 'Solid Brass or Clear Cellulose Acetate Aglets',
      moq: '1,000 Pairs / Color',
      leadTime: '10 Business Days'
    },
    tags: ['2.50mm Round', 'Waxed Cotton', 'Oxfords', '9 Colorways']
  },
  {
    id: 'sl-102',
    sku: 'OE-SL-102',
    name: '2.75mm – 3.00mm Cotton Round Waxy Laces',
    category: 'Shoe Laces',
    industry: 'Casual & Derby Footwear',
    image: '/images/products/shoe-laces/2.png',
    summary: 'Substantial round waxed cotton cords calibrated in 2.75mm, 2.90mm, and 3.00mm gauges for derbies, chukkas, and casual leather footwear.',
    specs: {
      material: '100% Ring-Spun Cotton with High-Melting Carnauba Wax',
      dimensions: '2.75mm, 2.90mm, 3.00mm Gauges | Custom Lengths',
      colors: 'Black, Dark Brown, Rich Tan, Khaki, Light Khaki',
      performance: 'Firm hand-feel with calibrated thickness for heavy eyelets',
      finish: 'Clear Acetate or Vintage Antique Brass Tips',
      moq: '1,000 Pairs / Color',
      leadTime: '10-12 Business Days'
    },
    tags: ['2.75-3.00mm', 'Waxed Round', 'Derby & Chukka', 'Earth Tones']
  },
  {
    id: 'sl-103',
    sku: 'OE-SL-103',
    name: 'Cotton Round & Tubular Waxy Boot Laces',
    category: 'Shoe Laces',
    industry: 'Heritage Boots & Workwear',
    image: '/images/products/shoe-laces/3.png',
    summary: 'Heavy-gauge specialty waxed laces engineered in 3.5mm/5.0mm solid round cores and 2.5mm tubular weave for heritage boots and workwear.',
    specs: {
      material: 'Multi-Ply Combed Cotton Yarn with Deep Wax Infusion',
      dimensions: '3.5mm Round, 5.0mm Round, 2.5mm Tubular Weave',
      colors: 'Deep Black & Dark Chocolate Brown',
      performance: 'Heavy water-resistant wax glaze preventing mud and moisture soak',
      finish: 'Crimped Rustproof Metal or Sealed Tips',
      moq: '1,200 Pairs',
      leadTime: '12 Business Days'
    },
    tags: ['3.5-5.0mm Round', '2.5mm Tubular', 'Heritage Boots', 'Heavy Waxed']
  },
  {
    id: 'sl-104',
    sku: 'OE-SL-104',
    name: 'Cotton Tubular & Flat Waxy Casual Laces',
    category: 'Shoe Laces',
    industry: 'Sneakers & Casual Shoes',
    image: '/images/products/shoe-laces/4.png',
    summary: 'Engineered flat (4.0mm) and hollow tubular (3.5mm & 4.0mm) glazed cotton cords providing superior knot friction for cupsole sneakers and casual footwear.',
    specs: {
      material: '100% Long-Staple Cotton, Glazed Wax Emulsion',
      dimensions: '3.5mm Tubular, 4.0mm Tubular, 4.0mm Flat',
      colors: 'Jet Black & Deep Earth Brown',
      performance: 'Low-friction lacing with maximum knot grip',
      finish: 'Heat-Fused Cellulose Acetate or Gunmetal Aglets',
      moq: '1,500 Pairs',
      leadTime: '10-12 Business Days'
    },
    tags: ['Tubular & Flat', '4.0mm Profile', 'Waxed Finish', 'Sneaker Laces']
  },
  {
    id: 'sl-105',
    sku: 'OE-SL-105',
    name: '6.00mm – 8.00mm Cotton Flat Waxy Sneaker Laces',
    category: 'Shoe Laces',
    industry: 'Designer Sneakers & Trainers',
    image: '/images/products/shoe-laces/5.png',
    summary: 'Wide flat profile glazed laces in 6.00mm and 8.00mm widths designed for designer luxury sneakers, trainers, and skate footwear in 5 core shades.',
    specs: {
      material: '100% Compact Ring-Spun Cotton with Light Carnauba Glaze',
      dimensions: '6.00mm & 8.00mm Flat Widths | 110cm to 160cm',
      colors: 'Black, Saddle Tan, Navy Blue, Crisp White, Slate Grey',
      performance: 'Smooth glide through eyelets with durable wax shield',
      finish: 'Matte Black PVD or Engraved Metal Aglets',
      moq: '1,500 Pairs',
      leadTime: '12 Business Days'
    },
    tags: ['6mm & 8mm Flat', 'Waxed Cotton', 'Luxury Sneakers', '5 Colors']
  },
  {
    id: 'sl-106',
    sku: 'OE-SL-106',
    name: '6.00mm – 8.00mm Cotton Flat Soft Non-Waxy Laces',
    category: 'Shoe Laces',
    industry: 'Skate, Canvas & Lifestyle',
    image: '/images/products/shoe-laces/6.png',
    summary: 'Natural untreated soft cotton wide flat laces offering maximum flexibility, tactile comfort, and vibrant colorfastness for skate and canvas shoes.',
    specs: {
      material: '100% Natural Combed Cotton (Azo-Free Eco-Dyed)',
      dimensions: '6.00mm & 8.00mm Flat | 100cm, 120cm, 140cm',
      colors: 'Chocolate Brown, Royal Blue, Scarlet Red, Light Tan, Tan, White',
      performance: 'Ultra-soft natural drape, high wash durability, skin safe',
      finish: 'Clear Acetate Aglets or Soft Fused Tips',
      moq: '1,500 Pairs',
      leadTime: '10 Business Days'
    },
    tags: ['Soft Non-Waxy', '6mm & 8mm', 'Vibrant Hues', 'Skate & Canvas']
  },
  {
    id: 'sl-107',
    sku: 'OE-SL-107',
    name: 'Poly Round & Dotted Outdoor Trail Boot Cords',
    category: 'Shoe Laces',
    industry: 'Outdoor, Hiking & Tactical',
    image: '/images/products/shoe-laces/7.png',
    summary: 'High-tenacity filament polyester cords in 3.0mm/3.5mm solid round and 3.5mm jacquard dotted patterns for trekking, trail runners, and work boots.',
    specs: {
      material: 'High-Tenacity Filament Poly Sheath & Continuous Core',
      dimensions: '3.0mm Solid Round, 3.5mm Round, 3.5mm Dotted Weave',
      colors: 'Solid Brown, Brown/Beige, Navy/White, Charcoal/Black, Red/Black',
      performance: 'Tensile breaking force > 850N, rot and mildew resistant',
      finish: 'Heavy-Duty Crimped Rustproof Metal Aglets',
      moq: '2,000 Pairs',
      leadTime: '12-14 Business Days'
    },
    tags: ['Outdoor Cords', 'Jacquard Dotted', 'High Tensile', 'Trail Boots']
  },
  {
    id: 'sl-108',
    sku: 'OE-SL-108',
    name: 'Poly Flex Round Tactical & Hiking Boot Laces',
    category: 'Shoe Laces',
    industry: 'Mountaineering, Tactical & Workwear',
    image: '/images/products/shoe-laces/8.png',
    summary: 'Heavy-duty 32-carrier abrasion-resistant braided flex cords in 3.0mm, 3.5mm, and 4.0mm gauges for tactical, combat, and heavy mountaineering boots.',
    specs: {
      material: 'Braided Industrial Polyester Sheath + Flexible Shock-Absorbing Core',
      dimensions: '3.0mm, 3.5mm, 4.0mm Round | 120cm to 180cm Lengths',
      colors: 'Houndstooth Tan/Brown, Black/Red, Navy/White, Desert Khaki, Red/Black',
      performance: 'High-flex dynamic knot hold, breaking force > 900N',
      finish: 'Heavy Crimped Metal or Molded Reinforced Tips',
      moq: '2,000 Pairs',
      leadTime: '12-15 Business Days'
    },
    tags: ['Tactical Flex', '32-Carrier Shell', 'Work & Combat', 'Flecks & Patterns']
  },


  // =========================================================================
  // ADDITIONAL ARCHIVAL FULL-GRAIN LEATHER LINES (Series LB & BG)
  // =========================================================================
  {
    id: 'lb-301',
    sku: 'OE-LB-301',
    name: 'Italian Bridle Full-Grain Formal Belt',
    category: 'Leather Belts',
    industry: 'Luxury Goods',
    image: '/images/leather-belts.jpg',
    summary: 'Single-piece full-grain vegetable-tanned steer hide with feathered creasing and Italian solid brass buckle.',
    specs: {
      material: '100% Full-Grain Vegetable-Tanned Cow Leather (Kanpur Tannage)',
      dimensions: '32mm & 35mm Width | 3.6mm - 4.0mm Thickness',
      performance: 'Drum-dyed through, no synthetic filler layers',
      finish: 'Hand-burnished wax edge with brushed brass buckle',
      moq: '300 Pcs / Color',
      leadTime: '15-20 Business Days'
    },
    tags: ['Full Grain', 'Formal', 'Italian Finish']
  },
  {
    id: 'lb-302',
    sku: 'OE-LB-302',
    name: 'Hand-Burnished Vintage Cognac Belt',
    category: 'Leather Belts',
    industry: 'Luxury Goods',
    image: '/images/leather-belts.jpg',
    summary: 'Artisan pull-up oil leather that builds a deep, characterful patina over time. Matched with antique nickel hardware.',
    specs: {
      material: 'Heavy Oil Pull-Up Cowhide',
      dimensions: '38mm & 40mm Casual Width | 3.8mm Thickness',
      performance: 'Self-healing surface with natural oils',
      finish: 'Raw-cut beveled edge with beeswax finish',
      moq: '300 Pcs',
      leadTime: '15-18 Business Days'
    },
    tags: ['Pull-Up Leather', 'Casual Denim', 'Patina']
  },
  {
    id: 'bg-401',
    sku: 'OE-BG-401',
    name: 'Heritage 45L Weekender Leather Duffel',
    category: 'Leather Bags',
    industry: 'Luxury Goods',
    image: '/images/products/fashion-bags/Product FB3.png',
    summary: 'Spacious flight-carry cabin duffel constructed from supple full-grain pull-up leather with heavy brass YKK zippers.',
    specs: {
      material: 'Full-Grain Drum-Dyed Waxed Cowhide & 14oz Cotton Duck Lining',
      dimensions: '52cm x 28cm x 26cm (45L Volume)',
      performance: 'Reinforced bottom with 6 solid brass protective feet',
      finish: 'Detachable padded leather shoulder strap & rolled grab handles',
      moq: '100 Pcs / Style',
      leadTime: '25-30 Business Days'
    },
    tags: ['Travel', 'Duffel Bag', 'YKK Zippers']
  },
  {
    id: 'bg-402',
    sku: 'OE-BG-402',
    name: 'Executive 15.6" Laptop Messenger',
    category: 'Leather Bags',
    industry: 'Luxury Goods',
    image: '/images/products/fashion-bags/Product FB4.png',
    summary: 'Classic satchel design with padded laptop compartment, organizer pockets, and secure tuck-lock brass buckles.',
    specs: {
      material: 'Hand-Selected Semi-Vegetable Tanned Leather',
      dimensions: '40cm x 30cm x 10cm',
      performance: 'Impact-absorbing high-density EVA laptop cushion',
      finish: 'Antiqued solid brass hardware and keyclip',
      moq: '150 Pcs',
      leadTime: '20-25 Business Days'
    },
    tags: ['Messenger', 'Laptop Satchel', 'Business']
  },

  // =========================================================================
  // DIVISION 7: MILITARY LEATHER & TACTICAL GEAR (33 MODELS)
  // =========================================================================
  {
    id: 'mh-1',
    sku: 'Product MH1',
    name: 'Classic OWB Molded Leather Holster',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/gun-holsters/1.png',
    summary: 'Hand-molded full-grain steerhide belt holster with reinforced mouth band for smooth one-handed re-holstering.',
    specs: {
      material: 'Full-Grain Kanpur Steerhide, Bonded Nylon Thread, Black/Coyote Tan',
      dimensions: 'Custom Fit per Firearm Blueprint',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '50 Pieces',
      leadTime: '15-20 Days'
    },
    tags: ["OWB Belt Holster", "Vegetable-Tanned", "9-10 oz Steerhide"]
  },
  {
    id: 'mh-2',
    sku: 'Product MH2',
    name: 'Tactical Dual-Slot Belt Slide Holster',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/gun-holsters/2.png',
    summary: 'Close-contour pancake design with twin belt slots for maximum concealment and optimal tactical weight distribution.',
    specs: {
      material: 'Vegetable-Tanned Cowhide, Hand-Burnished Edge, Matte Black',
      dimensions: 'Custom Fit per Firearm Blueprint',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '50 Pieces',
      leadTime: '15-20 Days'
    },
    tags: ["Pancake Style", "Dual Slot", "Full Grain"]
  },
  {
    id: 'mh-3',
    sku: 'Product MH3',
    name: 'Thumb-Break Service Duty Holster',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/gun-holsters/3.png',
    summary: 'Heavy-duty security holster with reinforced steel-insert thumb-break retention strap and covered trigger guard.',
    specs: {
      material: '10 oz Bridle Leather, Steel Reinforced Thumb Break, Blackened Hardware',
      dimensions: 'Custom Fit per Firearm Blueprint',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '50 Pieces',
      leadTime: '15 Business Days'
    },
    tags: ["Thumb-Break", "Duty Holster", "Reinforced Spine"]
  },
  {
    id: 'mh-4',
    sku: 'Product MH4',
    name: 'Concealed Carry IWB Leather Holster',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/gun-holsters/4.png',
    summary: 'Ultra-slim inside-the-waistband profile with tempered spring-steel clip and protective body shield against perspiration.',
    specs: {
      material: '7-8 oz Supple Steerhide, Tempered Steel Clip, Hand-Molded',
      dimensions: 'Custom Fit per Firearm Blueprint',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '100 Pieces',
      leadTime: '12-15 Days'
    },
    tags: ["IWB Concealed", "Spring Clip", "Sweat Shield"]
  },
  {
    id: 'mh-5',
    sku: 'Product MH5',
    name: 'Tactical Vertical Shoulder Rig Holster',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/gun-holsters/5.png',
    summary: 'Adjustable leather 4-point harness system with vertical firearm scabbard and dual counterbalanced magazine pouch.',
    specs: {
      material: 'Full Harness Leather, Solid Brass Snaps, Modular Tie-Downs',
      dimensions: 'Custom Fit per Firearm Blueprint',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '40 Systems',
      leadTime: '20 Business Days'
    },
    tags: ["Shoulder Rig", "Mag Pouch", "Full Harness"]
  },
  {
    id: 'mh-6',
    sku: 'Product MH6',
    name: 'Western Field Quick-Draw Leather Holster',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/gun-holsters/6.png',
    summary: 'Heritage open-top holster sculpted with heavy perimeter border tooling, hammer retention thong, and leg tie slot.',
    specs: {
      material: '9-10 oz Heavy Saddle Leather, Rawhide Hammer Thong, Saddle Tan',
      dimensions: 'Custom Fit per Firearm Blueprint',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '50 Pieces',
      leadTime: '15 Business Days'
    },
    tags: ["Open Top", "Hammer Thong", "Hand-Burnished"]
  },
  {
    id: 'mh-7',
    sku: 'Product MH7',
    name: 'Cross-Draw Driving Leather Holster',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/gun-holsters/7.png',
    summary: 'Angled forward-cant holster engineered for rapid vehicle access, mounted patrol, and seated tactical draw.',
    specs: {
      material: '8-9 oz Steerhide, Reinforced Belt Loop, Deep Havana Brown',
      dimensions: 'Custom Fit per Firearm Blueprint',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '50 Pieces',
      leadTime: '15 Business Days'
    },
    tags: ["Cross-Draw", "Forward Cant", "Vehicle Duty"]
  },
  {
    id: 'mh-8',
    sku: 'Product MH8',
    name: 'Reinforced Combat Drop Holster',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/gun-holsters/8.png',
    summary: 'Extended ride tactical drop holster with reinforced leather shank, thigh-strap slots, and dual retention.',
    specs: {
      material: 'Multi-Layered Steerhide, Mil-Spec Hardware, Matte Tactical Finish',
      dimensions: 'Custom Fit per Firearm Blueprint',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '50 Pieces',
      leadTime: '18 Business Days'
    },
    tags: ["Extended Ride", "Thigh Tie", "Tactical Combat"]
  },
  {
    id: 'mh-9',
    sku: 'Product MH9',
    name: 'Compact Snub-Nose Pocket Holster',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/gun-holsters/9.png',
    summary: 'Rough-out exterior texture keeping the holster anchored in pocket while weapon draws cleanly without snagging.',
    specs: {
      material: 'Rough-Out Cowhide, Smooth Interior, Anti-Print Design',
      dimensions: 'Custom Fit per Firearm Blueprint',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '100 Pieces',
      leadTime: '12 Business Days'
    },
    tags: ["Pocket Carry", "Rough-Out", "Snub-Nose"]
  },
  {
    id: 'mh-10',
    sku: 'Product MH10',
    name: 'Flap-Over Military Service Holster',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/gun-holsters/10.png',
    summary: 'Full-closure protective leather flap holster guarding sidearm against sand, water, and harsh field combat conditions.',
    specs: {
      material: '10 oz Heavy Bridle Leather, Mil-Spec Stud Closure, Olive/Black',
      dimensions: 'Custom Fit per Firearm Blueprint',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '60 Pieces',
      leadTime: '15-18 Days'
    },
    tags: ["Full Flap", "Mil-Spec", "Field Defense"]
  },
  {
    id: 'mh-11',
    sku: 'Product MH11',
    name: 'Artisan Hand-Carved Floral Holster',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/gun-holsters/11.png',
    summary: 'Master artisan carved floral relief tooling on 10 oz saddle leather with antique hand-rubbed two-tone patina.',
    specs: {
      material: '10 oz Vegetable Tanned Steerhide, Hand-Carved Relief, Two-Tone Brown',
      dimensions: 'Custom Fit per Firearm Blueprint',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '40 Pieces',
      leadTime: '20 Business Days'
    },
    tags: ["Floral Carved", "Master Tooling", "Collector Grade"]
  },
  {
    id: 'mb-1',
    sku: 'Product MB1',
    name: 'Heavy Bridle 50-Round Bullet Carrier',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/bullet-box/1.png',
    summary: 'Rigid full-grain saddle leather ammo box with internal caliber dividers, reinforced corners, and heavy brass clasp.',
    specs: {
      material: '9-11 oz Bridle Leather, Solid Brass Clasp, 9mm/.45 ACP Compatible',
      dimensions: 'Caliber Specific 9mm/.45/12GA',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '80 Pieces',
      leadTime: '15 Business Days'
    },
    tags: ["50-Round", "Molded Dividers", "Solid Brass Clasp"]
  },
  {
    id: 'mb-2',
    sku: 'Product MB2',
    name: 'Vintage Military Cartridge Pouch',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/bullet-box/2.png',
    summary: 'Twin-compartment field ammunition carrier with quick-release pull tab and reinforced belt loop backing.',
    specs: {
      material: '8 oz Steerhide, Heavy Copper Rivets, Antique Tan',
      dimensions: 'Caliber Specific 9mm/.45/12GA',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '100 Pieces',
      leadTime: '14 Business Days'
    },
    tags: ["Twin Chamber", "Quick Release", "Belt Mounted"]
  },
  {
    id: 'mb-3',
    sku: 'Product MB3',
    name: 'Tactical 12-Gauge Shell Carrier Box',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/bullet-box/3.png',
    summary: 'Reinforced box designed for 25 shotgun shells with weather-proof overlap lid and heavy-duty steel hardware.',
    specs: {
      material: '10 oz Oiled Steerhide, Weatherproof Overlap, 25-Shell Capacity',
      dimensions: 'Caliber Specific 9mm/.45/12GA',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '80 Pieces',
      leadTime: '15 Business Days'
    },
    tags: ["12 Gauge", "Weatherproof Lid", "Heavy Rivets"]
  },
  {
    id: 'mb-4',
    sku: 'Product MB4',
    name: 'Belt-Mounted Speed-Ammo Carrier',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/bullet-box/4.png',
    summary: 'Ergonomic curved hip carrier holding caliber trays for fast tactical reloading on the range and field operations.',
    specs: {
      material: 'Molded Leather Shell, Suede Lining, Quick-Action Stud Closure',
      dimensions: 'Caliber Specific 9mm/.45/12GA',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '100 Pieces',
      leadTime: '12 Business Days'
    },
    tags: ["Hip Curved", "Speed Reload", "Reinforced Base"]
  },
  {
    id: 'mb-5',
    sku: 'Product MB5',
    name: 'Archival Field Ammo Caddy Box',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/bullet-box/5.png',
    summary: 'Thick 11 oz buffalo leather casing with riveted brass corners, carrying handle, and pad-lockable brass hasp.',
    specs: {
      material: '11 oz Full-Grain Buffalo Leather, Brass Corner Guards, Leather Handle',
      dimensions: 'Caliber Specific 9mm/.45/12GA',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '50 Pieces',
      leadTime: '18 Business Days'
    },
    tags: ["Archival Caddy", "Brass Corners", "Carry Handle"]
  },
  {
    id: 'mk-1',
    sku: 'Product MK1',
    name: 'Combat Fixed-Blade Leather Sheath',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/knife-covers/1.png',
    summary: 'Full-grain steerhide scabbard with integrated blade welt, snap retention strap, and heavy 2.5-inch belt loop.',
    specs: {
      material: '9-10 oz Steerhide, Internal Leather Welt, Matte Tactical Black',
      dimensions: 'Blade Lengths 4" to 12" Custom Fit',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '100 Pieces',
      leadTime: '12-15 Days'
    },
    tags: ["Fixed Blade", "Blade Welt", "Snap Retention"]
  },
  {
    id: 'mk-2',
    sku: 'Product MK2',
    name: 'Scout-Carry Horizontal Knife Sheath',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/knife-covers/2.png',
    summary: 'Low-profile horizontal belt-carry sheath with dual snap loops for ambidextrous lumbar tactical draw.',
    specs: {
      material: '8 oz Steerhide, Twin Belt Straps with Mil-Spec Snaps, Coyote Brown',
      dimensions: 'Blade Lengths 4" to 12" Custom Fit',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '100 Pieces',
      leadTime: '14 Business Days'
    },
    tags: ["Scout Carry", "Horizontal Draw", "Dual Loop"]
  },
  {
    id: 'mk-3',
    sku: 'Product MK3',
    name: 'Bushcraft Sheath with Firesteel Loop',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/knife-covers/3.png',
    summary: 'Heavy survival knife scabbard featuring side-mounted ferrocerium rod sleeve and leg tie paracord eyelet.',
    specs: {
      material: '10 oz Vegetable Tanned Leather, Ferro Rod Loop, Brass Riveted',
      dimensions: 'Blade Lengths 4" to 12" Custom Fit',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '100 Pieces',
      leadTime: '14 Business Days'
    },
    tags: ["Survival", "Firesteel Sleeve", "Leg Tie Eyelet"]
  },
  {
    id: 'mk-4',
    sku: 'Product MK4',
    name: 'Dangler Tactical Hunting Knife Sheath',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/knife-covers/4.png',
    summary: 'Deep-pouch friction fit sheath suspended from a heavy brass D-ring dangler for seated comfort in vehicles.',
    specs: {
      material: 'Saddle Tan Leather, Solid Brass Dangler Ring, Triple Stitched',
      dimensions: 'Blade Lengths 4" to 12" Custom Fit',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '100 Pieces',
      leadTime: '12 Business Days'
    },
    tags: ["Dangler Style", "Friction Fit", "Brass D-Ring"]
  },
  {
    id: 'mk-5',
    sku: 'Product MK5',
    name: 'Heavy Bowie Knife Leather Scabbard',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/knife-covers/5.png',
    summary: 'Reinforced scabbard for 10-12 inch heavy blades with triple-stitched protective welting and copper rivets.',
    specs: {
      material: '11 oz Saddle Leather, Copper Burrs, Double Retention Straps',
      dimensions: 'Blade Lengths 4" to 12" Custom Fit',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '80 Pieces',
      leadTime: '15 Business Days'
    },
    tags: ["Bowie Grade", "Triple Stitched", "Copper Rivets"]
  },
  {
    id: 'mk-6',
    sku: 'Product MK6',
    name: 'Tooled Heritage Leather Dagger Sheath',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/knife-covers/6.png',
    summary: 'Hand-incised basketweave pattern with antique mahogany finish, drainage hole, and protective welted edge.',
    specs: {
      material: 'Hand-Stamped Basketweave, Moisture Drainage Eyelet, Antique Mahogany',
      dimensions: 'Blade Lengths 4" to 12" Custom Fit',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '100 Pieces',
      leadTime: '15 Business Days'
    },
    tags: ["Basketweave", "Drainage Port", "Antique Mahogany"]
  },
  {
    id: 'ms-1',
    sku: 'Product MS1',
    name: 'Tactical 8-Inch Combat Patrol Boot',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/tactical-boots/1.png',
    summary: 'Waterproof full-grain steerhide upper paired with oil-resistant lugged rubber outsole and padded suede collar.',
    specs: {
      material: 'Waterproof Steerhide, Oil-Resistant Rubber Outsole, Full Size Curve',
      dimensions: 'Standard EU/US Combat Size Curve',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '100 Pairs',
      leadTime: '25-30 Days'
    },
    tags: ["8-Inch Upper", "Lugged Outsole", "Goodyear Welted"]
  },
  {
    id: 'ms-2',
    sku: 'Product MS2',
    name: 'Field Duty Desert Tactical Leather Boot',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/tactical-boots/2.png',
    summary: 'Breathable desert suede and buffed cowhide boot engineered for high-heat terrain with speed-lacing eyelets.',
    specs: {
      material: 'Roughout Desert Suede, Speed Eyelets, Anti-Microbial Lining',
      dimensions: 'Standard EU/US Combat Size Curve',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '100 Pairs',
      leadTime: '25-30 Days'
    },
    tags: ["Desert Suede", "Speed Lacing", "Shock Absorbent"]
  },
  {
    id: 'ms-l1',
    sku: 'Product MSL1',
    name: 'Padded Military Leather Rifle Sling',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/rifle-slings/1.png',
    summary: 'Tapered contour leather rifle sling with dense internal closed-cell foam padding and non-slip suede lining.',
    specs: {
      material: '9 oz Bridle Leather, Closed-Cell Foam, Blackened Steel Swivels',
      dimensions: '1" - 1.25" Width | Adjustable 34"-48"',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '100 Pieces',
      leadTime: '15 Business Days'
    },
    tags: ["Padded Shoulder", "Suede Lined", "Mil-Spec Swivel"]
  },
  {
    id: 'ms-l2',
    sku: 'Product MSL2',
    name: 'Cobra Wide-Flare Tactical Rifle Strap',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/rifle-slings/2.png',
    summary: 'Classic flared cobra shape distributing weight evenly across shoulder during long field marches and patrol duty.',
    specs: {
      material: 'Wide 2.5" Shoulder Flare, Knurled Chicago Screws, Havana Brown',
      dimensions: '1" - 1.25" Width | Adjustable 34"-48"',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '100 Pieces',
      leadTime: '14 Business Days'
    },
    tags: ["Cobra Shape", "Weight Distributing", "Chicago Screws"]
  },
  {
    id: 'ms-l3',
    sku: 'Product MSL3',
    name: 'Heavy Bridle 2-Point Combat Sling',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/rifle-slings/3.png',
    summary: '1.25-inch wide solid bridle leather strap with rapid-adjust slide buckle and double heavy brass keepers.',
    specs: {
      material: '1.25" Bridle Leather, Solid Brass Slide Buckle, Matte Black',
      dimensions: '1" - 1.25" Width | Adjustable 34"-48"',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '100 Pieces',
      leadTime: '12 Business Days'
    },
    tags: ["2-Point Combat", "Rapid Adjust", "Double Keepers"]
  },
  {
    id: 'ms-l4',
    sku: 'Product MSL4',
    name: 'Embossed Western Basketweave Rifle Sling',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/rifle-slings/4.png',
    summary: 'Traditional basketweave stamped steerhide with hand-dyed dark edges and heavy-duty mil-spec steel swivels.',
    specs: {
      material: 'Stamped Basketweave Steerhide, Hand-Burnished Edges, Saddle Tan',
      dimensions: '1" - 1.25" Width | Adjustable 34"-48"',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '80 Pieces',
      leadTime: '15 Business Days'
    },
    tags: ["Basketweave", "Hand-Dyed", "Heavy Steel"]
  },
  {
    id: 'ms-l5',
    sku: 'Product MSL5',
    name: 'Tactical Thumb-Hole Shooting Sling',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/rifle-slings/5.png',
    summary: 'Ergonomically placed integrated thumb loop providing steady rifle control during offhand firing and rough terrain.',
    specs: {
      material: 'Reinforced Thumb Loop, Double Edge Stitching, Antique Tan',
      dimensions: '1" - 1.25" Width | Adjustable 34"-48"',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '100 Pieces',
      leadTime: '14 Business Days'
    },
    tags: ["Thumb Loop", "Stability Control", "Saddle Stitched"]
  },
  {
    id: 'ms-l6',
    sku: 'Product MSL6',
    name: 'Quick-Detach Mil-Spec Carbine Sling',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/rifle-slings/6.png',
    summary: 'Heavy oiled buffalo leather paired with quick-release push-button QD swivels for rapid rifle detachment.',
    specs: {
      material: 'Oiled Buffalo Hide, Push-Button QD Swivels, Tactical Coyote',
      dimensions: '1" - 1.25" Width | Adjustable 34"-48"',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '100 Pieces',
      leadTime: '14 Business Days'
    },
    tags: ["Quick Detach", "Oiled Buffalo", "Carbine Strap"]
  },
  {
    id: 'ms-l7',
    sku: 'Product MSL7',
    name: 'Braided Leather Trim Hunting Sling',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/rifle-slings/7.png',
    summary: 'Hand-laced calfskin side braid along 10 oz bridle leather core with non-slip textured back lining.',
    specs: {
      material: 'Hand-Braided Accent Lacing, 10 oz Core, Rich Walnut Finish',
      dimensions: '1" - 1.25" Width | Adjustable 34"-48"',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '80 Pieces',
      leadTime: '18 Business Days'
    },
    tags: ["Braided Lacing", "Non-Slip", "Bridle Leather"]
  },
  {
    id: 'ms-l8',
    sku: 'Product MSL8',
    name: 'Reinforced Sniper Long-Gun Sling',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/rifle-slings/8.png',
    summary: 'Double-layered 1.5-inch heavy harness leather strap engineered for heavy scoped rifles and precision matches.',
    specs: {
      material: '1.5" Harness Leather, Double-Layer Laminated, Heavy Duty Hardware',
      dimensions: '1" - 1.25" Width | Adjustable 34"-48"',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '60 Pieces',
      leadTime: '15 Business Days'
    },
    tags: ["Sniper Grade", "1.5\" Width", "Double Layered"]
  },
  {
    id: 'ms-l9',
    sku: 'Product MSL9',
    name: 'Minimalist Lightweight Scout Rifle Sling',
    category: 'Military Leather',
    industry: 'Defense, Tactical & Law Enforcement',
    image: '/images/products/military-leather/rifle-slings/9.png',
    summary: 'Clean single-ply 1-inch oil-treated latigo leather strap with knurled Chicago screws and burnished edges.',
    specs: {
      material: '1" Oil-Tanned Latigo Leather, Knurled Fasteners, Raw Edge Burnish',
      dimensions: '1" - 1.25" Width | Adjustable 34"-48"',
      performance: 'Mil-spec reinforced rot-proof construction, high tensile wear resistance',
      finish: 'Matte Tactical Black, Coyote Brown & Dark Tan',
      hardware: 'Heavy-Duty Blackened Steel & Solid Brass Snaps',
      moq: '120 Pieces',
      leadTime: '10 Business Days'
    },
    tags: ["Minimalist 1\"", "Latigo Leather", "Field Burnished"]
  }
];


// =========================================================================
// CURATED FLAGSHIP 10 PRODUCTS SHOWCASE
// Exactly 10 items representing manufacturing divisions:
// - Belts (T1 Floral Tooling, FT1 Beaded Aztec, T3 Sunburst Saddle Tan)
// - Bags (FB1 Kilim Tote, FB2 Kilim Shoulder Bag, FB3 Kilim Duffel)
// - Elastic Products (OE-EL-101 Jacquard Band, OE-EL-102 Chelsea Gusset)
// - Shoe Laces (OE-SL-101 2.50mm Waxed Dress Laces, OE-SL-107 Poly Outdoor Boot Cords)
// =========================================================================
const CURATED_10_IDS = [
  't-01',   // Specimen 01: Classic Floral Western Tooling Belt (Bags & Belts)
  'ft-01',  // Specimen 02: Sunflower Carved Aztec Beaded Belt (Bags & Belts)
  'fb-01',  // Specimen 03: Handcrafted Kilim Tapestry Leather Tote (Bags & Belts)
  't-03',   // Specimen 04: Sunburst Floral Saddle Tan Tooling Belt (Bags & Belts)
  'el-101', // Specimen 05: Jacquard Dynamic Comfort Band (Elastic Products)
  'sl-101', // Specimen 06: 2.50mm Cotton Round Waxy Dress Laces (Shoe Laces)
  'fb-03',  // Specimen 07: Kilim Weekender Travel Duffel Bag (Bags & Belts)
  'fb-02',  // Specimen 08: Diamond Kilim Tapestry Shoulder Bag (Bags & Belts)
  'el-102', // Specimen 09: Chelsea Boot Gusset Elastic (Elastic Products)
  'sl-107'  // Specimen 10: Poly Round & Dotted Outdoor Trail Boot Cords (Shoe Laces)
];

const CURATED_10_PRODUCTS = CURATED_10_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

// State Management
const state = {
  sampleCart: JSON.parse(localStorage.getItem('oe_sample_cart') || '[]'),
  activeCategory: 'all',
  currentHeroSlide: 0,
  heroAutoTimer: null
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  createIcons({ icons });
  initHeader();
  initHeroSlider();
  initCanvasMenu();
  initSearchPopup();
  initProductGrid();
  initIndustryDragSlider();
  initFourPillars();
  initCounters();
  initRfqDrawer();
  initContactForm();
  initCatalogueDownload();
  initGoTop();
});

/* ==========================================================================
   HEADER & STICKY BEHAVIOR (GRC Reference: header--type-4)
   ========================================================================== */

function initHeader() {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   HERO COLLECTION SLIDER (GRC Reference: mainhero collection-slider)
   ========================================================================== */

function initHeroSlider() {
  const slides = document.querySelectorAll('.collection-slider__item');
  const dots = document.querySelectorAll('#heroDots .hero-dot');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');
  const totalSlides = slides.length;

  if (totalSlides <= 1) {
    if (slides[0]) slides[0].classList.add('active');
    return;
  }

  const showSlide = (index) => {
    let nextIndex = index;
    if (nextIndex >= totalSlides) nextIndex = 0;
    if (nextIndex < 0) nextIndex = totalSlides - 1;

    state.currentHeroSlide = nextIndex;

    slides.forEach((slide, i) => {
      const isActive = i === nextIndex;
      slide.classList.toggle('active', isActive);
      const currentNumEl = slide.querySelector('.current-slider');
      if (currentNumEl) {
        currentNumEl.textContent = String(nextIndex + 1);
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === nextIndex);
    });
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    state.heroAutoTimer = setInterval(() => {
      showSlide(state.currentHeroSlide + 1);
    }, 6000);
  };

  const stopAutoSlide = () => {
    if (state.heroAutoTimer) clearInterval(state.heroAutoTimer);
  };

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(state.currentHeroSlide + 1);
      startAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(state.currentHeroSlide - 1);
      startAutoSlide();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      showSlide(idx);
      startAutoSlide();
    });
  });

  const heroSection = document.getElementById('home');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoSlide);
    heroSection.addEventListener('mouseleave', startAutoSlide);
  }

  startAutoSlide();
}

/* ==========================================================================
   CANVAS SLIDE-OUT MENU (GRC Reference: js-canvas-menu)
   ========================================================================== */

function initCanvasMenu() {
  const menu = document.getElementById('canvasMenu') || document.querySelector('.js-canvas-menu');
  const openBtns = document.querySelectorAll('#btnOpenMenu, .js-open-canvas-menu');
  const closeBtns = document.querySelectorAll('#btnCloseCanvasMenu, .js-close-canvas-menu');
  const overlay = document.getElementById('canvasMenuOverlay') || document.querySelector('.canvas-menu__overlay');

  if (menu) {
    const openMenu = (e) => {
      if (e) e.preventDefault();
      menu.classList.add('active', 'open');
      menu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = (e) => {
      if (e) e.preventDefault();
      menu.classList.remove('active', 'open');
      menu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    openBtns.forEach(btn => btn.addEventListener('click', openMenu));
    closeBtns.forEach(btn => btn.addEventListener('click', closeMenu));
    if (overlay) overlay.addEventListener('click', closeMenu);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && (menu.classList.contains('active') || menu.classList.contains('open'))) {
        closeMenu();
      }
    });

    // Category filter trigger jumps from canvas menu
    document.querySelectorAll('.canvas-sub-menu .cat-filter-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const filter = trigger.getAttribute('data-filter');
        if (filter && typeof filterProductGrid === 'function') {
          filterProductGrid(filter);
        }
      });
    });
  }

  // Mobile menu support
  const mobileMenu = document.querySelector('.js-mobile-menu');
  const openMobileBtns = document.querySelectorAll('.js-open-mobile-menu');
  const closeMobileBtns = document.querySelectorAll('.js-close-mobile-menu');
  const dropdownBtns = document.querySelectorAll('.js-mobile-menu-dropdown-btn');

  if (mobileMenu) {
    openMobileBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        mobileMenu.classList.add('active', 'open');
        document.body.style.overflow = 'hidden';
      });
    });

    closeMobileBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        mobileMenu.classList.remove('active', 'open');
        document.body.style.overflow = '';
      });
    });

    dropdownBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = btn.closest('.mobile-menu__dropdown');
        if (parent) {
          parent.classList.toggle('active');
          const sub = parent.querySelector('.js-mobile-menu-dropdown-menu');
          if (sub) {
            sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
          }
        }
      });
    });
  }
}

/* ==========================================================================
   INTERACTIVE FULL-SCREEN SEARCH POPUP (GRC Reference: search-popup)
   ========================================================================== */

function initSearchPopup() {
  const popup = document.getElementById('searchPopup') || document.querySelector('.popup-search, .search-popup');
  const openBtns = document.querySelectorAll('#btnOpenSearch, .js-open-popup-search');
  const closeBtns = document.querySelectorAll('#btnCloseSearchPopup, .js-close-popup-search');
  const input = document.getElementById('popupSearchInput') || (popup ? popup.querySelector('input') : null);
  const catBtns = document.querySelectorAll('.search-cat-btn');
  const resultsGrid = document.getElementById('popupSearchResultsGrid');

  if (!popup) return;

  if (!input || !resultsGrid) return;

  let activeSearchCategory = 'all';

  const renderSearchResults = () => {
    const query = input.value.trim().toLowerCase();
    
    let filtered = PRODUCTS.filter(p => {
      const matchCat = (activeSearchCategory === 'all') || (p.category === activeSearchCategory);
      if (!matchCat) return false;

      if (!query) return true;
      return (
        p.name.toLowerCase().includes(query) ||
        p.sku.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query))
      );
    });

    const displayList = filtered.slice(0, 8);

    if (displayList.length === 0) {
      resultsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; color: #888; padding: 2rem;">
          No specimens found matching "${query}". Try searching by SKU (T1, FT2, FB1, EL1) or material.
        </div>
      `;
      return;
    }

    resultsGrid.innerHTML = displayList.map(p => {
      const inCart = state.sampleCart.some(x => x.id === p.id);
      return `
        <div class="result-product">
          <div class="product-grid-item__images">
            <span class="product-grid-item__sku-tag">${p.sku}</span>
            <img src="${p.image}" alt="${p.name}">
          </div>
          <div class="result-product__name">
            <span class="result-product__category">${p.category}</span>
            <a href="#products" class="result-product__title">${p.name}</a>
            <span class="result-product__spec-line">${p.specs.dimensions}</span>
            <div class="result-product__actions">
              <button type="button" class="btn btn-outline-clean btn-sm btn-block ${inCart ? 'in-cart' : ''}" data-rfq-id="${p.id}">
                <i data-lucide="${inCart ? 'check' : 'plus'}" class="icon-xs"></i>
                <span>${inCart ? 'In RFQ' : 'Add Sample'}</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    createIcons({ icons });

    resultsGrid.querySelectorAll('[data-rfq-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-rfq-id');
        const prod = PRODUCTS.find(x => x.id === id);
        if (prod) {
          toggleSampleCart(prod);
          renderSearchResults();
        }
      });
    });
  };

  const openPopup = () => {
    popup.classList.add('active');
    popup.setAttribute('aria-hidden', 'false');
    input.focus();
    renderSearchResults();
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    popup.classList.remove('active');
    popup.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openBtns.forEach(btn => btn.addEventListener('click', openPopup));
  closeBtns.forEach(btn => btn.addEventListener('click', closePopup));

  input.addEventListener('input', renderSearchResults);

  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeSearchCategory = btn.getAttribute('data-cat');
      renderSearchResults();
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('active')) {
      closePopup();
    }
  });
}

/* ==========================================================================
   PRODUCT SHOWCASE GRID (GRC Reference: recently-viewed productgridd)
   ========================================================================== */

function initProductGrid() {
  const container = document.getElementById('productGridContainer');
  const tabs = document.querySelectorAll('.grc-cat-tab');
  const discoverBtn = document.getElementById('btnDiscoverAllProducts');

  if (!container) return;

  renderProductsGrid('all');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-filter');
      filterProductGrid(cat);
    });
  });

  if (discoverBtn) {
    discoverBtn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      const allTab = document.querySelector('.grc-cat-tab[data-filter="all"]');
      if (allTab) allTab.classList.add('active');
      renderProductsGrid('all');
      showToast('Showing all catalogue divisions.');
    });
  }
}

function filterProductGrid(cat) {
  state.activeCategory = cat;
  const tabs = document.querySelectorAll('.grc-cat-tab');
  tabs.forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-filter') === cat);
  });
  renderProductsGrid(cat);
}

function renderProductsGrid(categoryFilter) {
  const container = document.getElementById('productGridContainer');
  if (!container) return;

  let filtered = PRODUCTS;
  if (categoryFilter && categoryFilter !== 'all') {
    filtered = PRODUCTS.filter(p => p.category === categoryFilter);
  }

  const displayList = filtered.slice(0, 12);

  container.innerHTML = displayList.map(p => {
    const inCart = state.sampleCart.some(x => x.id === p.id);
    const moq = p.specs.moq ? p.specs.moq.split('/')[0].trim() : 'Per RFQ';

    return `
      <div class="result-product" data-id="${p.id}">
        <div class="product-grid-item__images">
          <span class="product-grid-item__sku-tag">${p.sku}</span>
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="result-product__name">
          <span class="result-product__category">${p.category}</span>
          <h4 class="result-product__title">${p.name}</h4>
          <span class="result-product__spec-line">
            <strong>Dims:</strong> ${p.specs.dimensions}<br>
            <strong>MOQ:</strong> ${moq} &bull; <strong>Lead:</strong> ${p.specs.leadTime}
          </span>
          <div class="result-product__actions">
            <button type="button" class="btn btn-primary-clean btn-sm btn-block ${inCart ? 'in-cart' : ''}" data-rfq-add="${p.id}">
              <i data-lucide="${inCart ? 'check' : 'plus'}" class="icon-xs"></i>
              <span>${inCart ? 'Staged in RFQ' : 'Request Sample'}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  createIcons({ icons });

  container.querySelectorAll('[data-rfq-add]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-rfq-add');
      const prod = PRODUCTS.find(x => x.id === id);
      if (prod) {
        toggleSampleCart(prod);
        renderProductsGrid(state.activeCategory);
      }
    });
  });
}

/* ==========================================================================
   INDUSTRY SPECIALISATIONS DRAG SLIDER (GRC Reference: itemsdrag)
   ========================================================================== */

function initIndustryDragSlider() {
  const strip = document.getElementById('industryScrollStrip');
  const leftBtn = document.getElementById('dragLeftBtn');
  const rightBtn = document.getElementById('dragRightBtn');

  if (!strip) return;

  if (leftBtn) {
    leftBtn.addEventListener('click', () => {
      strip.scrollBy({ left: -340, behavior: 'smooth' });
    });
  }

  if (rightBtn) {
    rightBtn.addEventListener('click', () => {
      strip.scrollBy({ left: 340, behavior: 'smooth' });
    });
  }

  let isDown = false;
  let startX;
  let scrollLeft;

  strip.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - strip.offsetLeft;
    scrollLeft = strip.scrollLeft;
  });

  strip.addEventListener('mouseleave', () => { isDown = false; });
  strip.addEventListener('mouseup', () => { isDown = false; });
  strip.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - strip.offsetLeft;
    const walk = (x - startX) * 1.5;
    strip.scrollLeft = scrollLeft - walk;
  });
}

/* ==========================================================================
   4 PILLARS HOVER IMAGE REVEAL (GRC Reference: b-page_module-5)
   ========================================================================== */

function initFourPillars() {
  const items = document.querySelectorAll('.b-page_module-5_item');
  items.forEach(item => {
    const link = item.querySelector('.b-page_module_link');
    if (link) {
      link.addEventListener('click', () => {
        const filter = link.getAttribute('data-filter');
        if (filter) {
          filterProductGrid(filter);
        }
      });
    }
  });
}

/* ==========================================================================
   ANIMATED METRICS COUNTER (GRC Reference: number-main botomnum)
   ========================================================================== */

function initCounters() {
  const counters = document.querySelectorAll('.counter1');
  const section = document.querySelector('.number-main');
  if (!counters.length || !section) return;

  const runAnimation = () => {
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const isDecimal = target % 1 !== 0;
      const duration = 2000;
      const start = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        const currentVal = (progress * target).toFixed(isDecimal ? 1 : 0);
        counter.textContent = currentVal;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target;
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runAnimation();
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(section);
}

/* ==========================================================================
   SAMPLE REQUISITION (RFQ) DRAWER
   ========================================================================== */

function initRfqDrawer() {
  const drawer = document.getElementById('rfqDrawer');
  const overlay = document.getElementById('rfqDrawerOverlay');
  const openBtn = document.getElementById('btnOpenRfqDrawer');
  const heroRfqBtn = document.getElementById('btnHeroQuickRfq');
  const closeBtn = document.getElementById('btnCloseRfqDrawer');
  const clearBtn = document.getElementById('btnClearRfqTray');
  const submitBtn = document.getElementById('btnSubmitDrawerRfq');

  const openDrawer = () => {
    if (drawer && overlay) {
      drawer.classList.add('active');
      overlay.classList.add('active');
      drawer.setAttribute('aria-hidden', 'false');
      renderDrawerItems();
      document.body.style.overflow = 'hidden';
    }
  };

  const closeDrawer = () => {
    if (drawer && overlay) {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (openBtn) openBtn.addEventListener('click', openDrawer);
  if (heroRfqBtn) heroRfqBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      state.sampleCart = [];
      saveCart();
      updateCartBadge();
      renderDrawerItems();
      renderProductsGrid(state.activeCategory);
      showToast('Sample requisition tray cleared.');
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      if (state.sampleCart.length === 0) {
        showToast('Please add at least one model to your sample deck first.');
        return;
      }

      let msg = `*OFFICIAL SAMPLE REQUISITION &bull; OLYMPIC EXPORTS PVT. LTD.*\n`;
      msg += `To: Mr. Farhan Mirza & Mr. Ayaan Mirza (Kanpur Export Desk)\n\n`;
      msg += `Hello, we would like to request FOB quotation, production lead times, and physical swatches for:\n\n`;

      state.sampleCart.forEach((item, idx) => {
        msg += `${idx + 1}. *${item.sku}* &bull; ${item.name}\n`;
        msg += `   - Division: ${item.category}\n`;
        msg += `   - Dimensions: ${item.specs.dimensions}\n`;
        msg += `   - MOQ: ${item.specs.moq}\n\n`;
      });

      msg += `Please send wholesale FOB quotation and courier tracking for dispatch to our registered business address. Thank you!`;

      const waUrl = `https://wa.me/919839086636?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
      closeDrawer();
      showToast('Opening WhatsApp with your staged export models...');
    });
  }

  updateCartBadge();
}

function toggleSampleCart(prod) {
  const index = state.sampleCart.findIndex(x => x.id === prod.id);
  if (index >= 0) {
    state.sampleCart.splice(index, 1);
    showToast(`Removed "${prod.name}" from Sample Repertoire.`);
  } else {
    state.sampleCart.push(prod);
    showToast(`Staged "${prod.name}" in Sample Repertoire.`);
  }

  saveCart();
  updateCartBadge();
  renderDrawerItems();
}

function saveCart() {
  localStorage.setItem('oe_sample_cart', JSON.stringify(state.sampleCart));
}

function updateCartBadge() {
  const badge = document.getElementById('headerRfqCount');
  if (badge) {
    badge.textContent = state.sampleCart.length;
  }
}

function renderDrawerItems() {
  const container = document.getElementById('rfqDrawerItems');
  const countEl = document.getElementById('drawerSummaryCount');
  if (!container) return;

  if (countEl) {
    countEl.textContent = `${state.sampleCart.length} Selected Models`;
  }

  if (state.sampleCart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: #888; padding: 4rem 1rem;">
        <i data-lucide="package" style="width: 48px; height: 48px; stroke-width: 1.5; margin-bottom: 1rem; opacity: 0.5;"></i>
        <h4 style="color: #2b221b; font-family: var(--font-serif); margin-bottom: 0.5rem;">Your Sample Deck is Empty</h4>
        <p style="font-size: 0.85rem; color: #666; margin-bottom: 1.5rem;">Browse our 4 manufacturing divisions and click "Request Sample" to stage models.</p>
        <a href="#products" class="btn btn-outline-clean btn-sm" id="btnDrawerBrowseProducts">Browse Products</a>
      </div>
    `;
    createIcons({ icons });

    const browseBtn = document.getElementById('btnDrawerBrowseProducts');
    if (browseBtn) {
      browseBtn.addEventListener('click', () => {
        const closeBtn = document.getElementById('btnCloseRfqDrawer');
        if (closeBtn) closeBtn.click();
      });
    }
    return;
  }

  container.innerHTML = state.sampleCart.map(p => `
    <div class="staged-item-card" style="display: flex; gap: 1rem; padding: 1rem; border-bottom: 1px solid #eee; align-items: center;">
      <img src="${p.image}" alt="${p.name}" style="width: 65px; height: 65px; object-fit: cover; border-radius: 4px;">
      <div style="flex: 1;">
        <span style="font-size: 0.65rem; font-weight: 700; color: var(--leather-saddle);">${p.sku} &bull; ${p.category}</span>
        <h5 style="font-family: var(--font-serif); font-size: 1.05rem; margin: 0.15rem 0;">${p.name}</h5>
        <span style="font-size: 0.75rem; color: #777;">${p.specs.dimensions}</span>
      </div>
      <button type="button" class="btn-remove-item" data-remove-id="${p.id}" style="background: none; border: none; font-size: 1.5rem; color: #999; cursor: pointer; padding: 0.25rem 0.5rem;" title="Remove">&times;</button>
    </div>
  `).join('');

  container.querySelectorAll('[data-remove-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-remove-id');
      const prod = PRODUCTS.find(x => x.id === id);
      if (prod) {
        toggleSampleCart(prod);
        renderProductsGrid(state.activeCategory);
      }
    });
  });
}

/* ==========================================================================
   OFFICIAL RFQ CONTACT FORM
   ========================================================================== */

function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusMsg = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('btnSubmitForm');
    
    const name = document.getElementById('contactName')?.value.trim() || '';
    const company = document.getElementById('contactCompany')?.value.trim() || '';
    const email = document.getElementById('contactEmail')?.value.trim() || '';
    const phone = document.getElementById('contactPhone')?.value.trim() || '';
    const categorySelect = document.getElementById('contactCategory');
    const category = categorySelect ? (categorySelect.options[categorySelect.selectedIndex]?.text || categorySelect.value) : '';
    const destination = document.getElementById('contactDestination')?.value.trim() || '';
    const message = document.getElementById('contactMessage')?.value.trim() || '';

    // Build structured WhatsApp message for Managing Director Farhan Mirza
    let msg = `*NEW OFFICIAL EXPORT INQUIRY*\n`;
    msg += `*Olympic Exports Pvt. Ltd. (Kanpur, India)*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
    msg += `👤 *Buyer / Client:* ${name}\n`;
    msg += `🏢 *Company / Brand:* ${company}\n`;
    msg += `📧 *Corporate Email:* ${email}\n`;
    msg += `📱 *Phone / WhatsApp:* ${phone}\n\n`;
    msg += `📦 *Primary Division:* ${category}\n`;
    msg += `🚢 *Destination Port:* ${destination}\n\n`;
    msg += `*📝 Order Specifications / Target Models:*\n${message}\n\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `_Transmitted via Olympic Exports Portal on ${new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}_`;

    const waUrl = `https://wa.me/919839086636?text=${encodeURIComponent(msg)}`;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Opening WhatsApp to Owner Mr. Farhan Mirza...</span>`;
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i data-lucide="check" class="icon-sm"></i> <span>Requisition Sent to Managing Director</span>`;
        createIcons({ icons });
      }

      if (statusMsg) {
        statusMsg.className = 'clean-status-msg success';
        statusMsg.innerHTML = `<strong>Inquiry Successfully Compiled!</strong> Transmitting to Managing Director Farhan Mirza (+91 98390 86636) on WhatsApp. <a href="${waUrl}" target="_blank" style="color:#15803d;font-weight:700;text-decoration:underline;margin-left:6px;">Click here if WhatsApp didn't open automatically.</a>`;
        statusMsg.classList.remove('hidden');
      }

      showToast('Export inquiry compiled! Opening WhatsApp...');

      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = waUrl;
      } else {
        const newTab = window.open(waUrl, '_blank');
        if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
          window.location.href = waUrl;
        }
      }
    }, 600);
  });
}

/* ==========================================================================
   CATALOGUE DOWNLOAD MODAL & COMPREHENSIVE ARCHIVAL LINE SHEET
   ========================================================================== */

function initCatalogueDownload() {
  const btnHeader = document.getElementById('btnOpenLineSheetModal');
  const btnCanvas = document.getElementById('btnCanvasLineSheet');
  const btnGrid = document.getElementById('btnProductGridLineSheet');
  const modal = document.getElementById('catalogueModal');
  const btnClose = document.getElementById('btnCloseCatalogueModal');
  const btnCancel = document.getElementById('btnCancelCatalogue');
  const form = document.getElementById('catalogueDownloadForm');
  const status = document.getElementById('catModalStatus');

  const openModal = (e) => {
    if (e) e.preventDefault();
    if (modal) modal.classList.add('active');
  };

  const closeModal = () => {
    if (modal) modal.classList.remove('active');
  };

  if (btnHeader) btnHeader.addEventListener('click', openModal);
  if (btnCanvas) btnCanvas.addEventListener('click', openModal);
  if (btnGrid) btnGrid.addEventListener('click', openModal);
  if (btnClose) btnClose.addEventListener('click', closeModal);
  if (btnCancel) btnCancel.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('catBuyerName').value;
      const email = document.getElementById('catBuyerEmail').value;
      const company = document.getElementById('catBuyerCompany').value;

      status.className = 'clean-status-msg success';
      status.innerHTML = `<strong>Official Line Sheet Generated!</strong> A copy has been downloaded for <em>${company}</em>.`;
      status.classList.remove('hidden');

      setTimeout(() => {
        let textContent = `================================================================================\n`;
        textContent += `OLYMPIC EXPORTS PVT. LTD. &bull; OFFICIAL EXPORT CATALOGUE & LINE SHEET (1994-2026)\n`;
        textContent += `================================================================================\n\n`;
        textContent += `COMPANY PROFILE & TRADE LEDGER:\n`;
        textContent += `Corporate Identity: Olympic Exports Pvt. Ltd. (Govt. Recognized Export House)\n`;
        textContent += `Established: 1994 (32+ Years Direct Manufacturing & Export Heritage)\n`;
        textContent += `Factory Address: 56-D, Defence Colony, Jajmau Industrial Area, Kanpur, UP, India - 208010\n`;
        textContent += `Direct Executive Contacts:\n`;
        textContent += `- Farhan Mirza (Managing Director): +91 98390 86636\n`;
        textContent += `- Rukhsaar Mirza (Director): Olympic.Mirza@yahoo.com\n`;
        textContent += `- Ayaan Mirza (Director): +91 73888 14225\n`;
        textContent += `Official Communications: Olympic.Mirza@yahoo.com\n`;
        textContent += `Logistics & Ports: ICD Kanpur (Dry Port) &bull; JNPT / Nhava Sheva (Sea Port) &bull; Delhi IGI (Air)\n`;
        textContent += `Compliance: EU REACH Compliant, Chromium-Free Vegetable Tanning, SVHC Cleared\n\n`;
        textContent += `Requested by: ${name} | ${company} (${email})\n`;
        textContent += `Date of Generation: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}\n\n`;
        textContent += `--------------------------------------------------------------------------------\n`;
        textContent += `COMPLETE MANUFACTURING SPECIFICATIONS MATRIX BY DIVISION (68 MODELS)\n`;
        textContent += `--------------------------------------------------------------------------------\n\n`;

        PRODUCTS.forEach((p, idx) => {
          textContent += `${idx + 1}. SKU: ${p.sku} | Model: ${p.name}\n`;
          textContent += `   Category: ${p.category} | Target Industry: ${p.industry}\n`;
          textContent += `   Material: ${p.specs.material}\n`;
          textContent += `   Dimensions / Sizing: ${p.specs.dimensions}\n`;
          textContent += `   Structure / Tensile: ${p.specs.performance}\n`;
          if (p.specs.finish) textContent += `   Finish: ${p.specs.finish}\n`;
          if (p.specs.buckle) textContent += `   Buckle / Hardware: ${p.specs.buckle}\n`;
          if (p.specs.hardware) textContent += `   Hardware Trim: ${p.specs.hardware}\n`;
          textContent += `   Standard Export MOQ: ${p.specs.moq}\n`;
          textContent += `   Production Lead Time: ${p.specs.leadTime}\n\n`;
        });

        const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `Olympic_Exports_Pvt_Ltd_Export_Line_Sheet_1994_2026.txt`;
        link.click();

        showToast('Olympic Exports Official Line Sheet downloaded.');
        setTimeout(() => closeModal(), 2200);
      }, 600);
    });
  }
}

/* ==========================================================================
   BACK TO TOP (GRC Reference: go-top)
   ========================================================================== */

function initGoTop() {
  const btns = document.querySelectorAll('#goTopBtn, .go-top');
  if (btns.length === 0) return;

  window.addEventListener('scroll', () => {
    const isVisible = window.scrollY > 350;
    btns.forEach(btn => {
      if (isVisible) {
        btn.classList.add('visible', 'active');
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
      } else {
        btn.classList.remove('visible', 'active');
        btn.style.opacity = '0';
        btn.style.pointerEvents = 'none';
      }
    });
  }, { passive: true });

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

/* ==========================================================================
   TOAST NOTIFICATION HELPER
   ========================================================================== */

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i data-lucide="bell" class="icon-xs"></i> <span>${message}</span>`;
  container.appendChild(toast);
  createIcons({ icons });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}
