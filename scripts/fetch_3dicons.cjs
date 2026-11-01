const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const icons = [
  { label: 'Students', slug: 'boy' },
  { label: 'Batches', slug: 'folder' },
  { label: 'Attendance', slug: 'calender' },
  { label: 'Fees', slug: 'rupee' },
  { label: 'Receipts', slug: 'file-text' },
  { label: 'Exams', slug: 'pencil' },
  { label: 'Report cards', slug: 'trophy' },
  { label: 'Payroll', slug: 'wallet' },
  { label: 'Reports', slug: 'chart' },
  { label: 'Notices', slug: 'megaphone' },
  { label: 'Parent app', slug: 'mobile' },
  { label: 'WhatsApp', slug: 'chat-bubble' },
  { label: 'Roles', slug: 'sheild' },
  { label: 'Timetable', slug: 'clock' }
];

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to fetch ${url}: status ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function main() {
  const outDir = path.join('public', 'assets', '3dicons');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const results = {};

  for (const item of icons) {
    const url = `https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/color/${item.slug}-dynamic-color.png`;
    console.log(`Downloading ${item.label} from ${url}...`);
    try {
      const rawBuf = await download(url);
      
      // Save original raw PNG
      const pngPath = path.join(outDir, `${item.slug}.png`);
      fs.writeFileSync(pngPath, rawBuf);

      // Create optimized 160x160 WebP
      const webpBuf = await sharp(rawBuf)
        .resize(160, 160, { fit: 'inside' })
        .webp({ quality: 86, effort: 5 })
        .toBuffer();

      const webpPath = path.join(outDir, `${item.slug}.webp`);
      fs.writeFileSync(webpPath, webpBuf);

      const b64 = 'data:image/webp;base64,' + webpBuf.toString('base64');
      results[item.label] = {
        label: item.label,
        slug: item.slug,
        size: webpBuf.length,
        b64: b64,
        localPath: `/assets/3dicons/${item.slug}.webp`
      };
      console.log(`✓ Processed ${item.label}: ${webpBuf.length} bytes`);
    } catch (err) {
      console.error(`✗ Error for ${item.label}:`, err.message);
    }
  }

  fs.writeFileSync('extracted_design/3dicons_data.json', JSON.stringify(results, null, 2));
  console.log('Saved 3dicons data to extracted_design/3dicons_data.json');
}

main().catch(console.error);
