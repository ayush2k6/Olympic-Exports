import fs from 'fs';

const pages = ['about', 'art-of-manufacturing', 'catalogue', 'contact-us', 'industries', 'products', 'customise', 'Thread'];

for (const p of pages) {
  const html = fs.readFileSync(`grc_raw/${p}.html`, 'utf-8');
  console.log(`\n================== ${p} ==================`);
  
  // Find where main starts and ends
  // Typically after </header> or <div class="canvas-menu">...
  // and before <footer
  const footerIdx = html.indexOf('<footer');
  const canvasIdx = html.indexOf('<!-- Canvas menu -->');
  const canvasCloseIdx = html.indexOf('<!-- End canvas menu -->', canvasIdx !== -1 ? canvasIdx : 0);
  
  let startIdx = canvasCloseIdx !== -1 ? canvasCloseIdx + 24 : html.indexOf('</header>') + 9;
  let body = footerIdx !== -1 ? html.substring(startIdx, footerIdx) : html.substring(startIdx);

  // Remove scripts
  const cleanBody = body.replace(/<script[\s\S]*?<\/script>/gi, '');
  
  // Find sections or main divs
  const matches = [...cleanBody.matchAll(/<(?:section|div|main)[^>]*class=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
  console.log('Top classes:', matches.slice(0, 10).join(' | '));

  // Extract titles / headings
  const h = [...cleanBody.matchAll(/<h[1-5][^>]*>([\s\S]*?)<\/h[1-5]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
  console.log('Headings:', h.slice(0, 8));

  // First 200 text characters
  const sampleText = cleanBody.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 200);
  console.log('Text:', sampleText);
}
