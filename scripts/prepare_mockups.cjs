const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

async function main() {
  const mockups = [
    { name: 'attendance', file: 'attendance-trio-mockup.png' },
    { name: 'fees', file: 'fees-trio-mockup.png' },
    { name: 'exams', file: 'exams-mockup.png' },
    { name: 'payroll', file: 'payroll-mockup.png' }
  ];

  const results = {};

  for (const m of mockups) {
    const srcPath = path.join('public', 'assets', m.file);
    const webpPath = path.join('public', 'assets', m.file.replace('.png', '.webp'));
    
    // Optimize to 800px WebP at quality 84 for retina clarity
    const buf = await sharp(srcPath)
      .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 84, effort: 6 })
      .toBuffer();
    
    fs.writeFileSync(webpPath, buf);
    const b64 = 'data:image/webp;base64,' + buf.toString('base64');
    results[m.name] = {
      size: buf.length,
      b64: b64,
      webpPath: '/assets/' + m.file.replace('.png', '.webp'),
      pngPath: '/assets/' + m.file
    };
    console.log(`Optimized ${m.name}: ${buf.length} bytes (WebP)`);
  }

  fs.writeFileSync('extracted_design/mockup_data.json', JSON.stringify(results, null, 2));
  console.log('Saved mockup data to extracted_design/mockup_data.json');
}

main().catch(console.error);
