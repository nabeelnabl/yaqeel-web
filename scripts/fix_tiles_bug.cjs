const fs = require('fs');

// Load 3dicons data
const iconsData = JSON.parse(fs.readFileSync('extracted_design/3dicons_data.json', 'utf8'));

let html = fs.readFileSync('index.html', 'utf8');

// Build the clean tiles section
const items = [
  'Students', 'Batches', 'Attendance', 'Fees', 'Receipts', 'Exams', 'Report cards',
  'Payroll', 'Reports', 'Notices', 'Parent app', 'WhatsApp', 'Roles', 'Timetable'
];

let tilesInnerHtml = '';
for (const label of items) {
  const icon = iconsData[label];
  if (!icon) {
    console.error('Missing icon for:', label);
    process.exit(1);
  }
  tilesInnerHtml += `\n    <div class="it"><img class="it-icon" src="${icon.b64}" alt="${label}" loading="lazy"><span>${label}</span></div>`;
}

const cleanAllInOneSection = `<section class="cc"><div class="wrap"><span class="eyebrow">All in one</span><h2 class="serif" style="margin-top:18px">Everything your office does, in one app</h2><div class="tiles">${tilesInnerHtml}\n  </div></div></section>`;

// Target the entire All in one section: from <span class="eyebrow">All in one</span> to </section>
const allInOneRegex = /<section class="cc"><div class="wrap"><span class="eyebrow">All in one<\/span>[\s\S]*?<\/section>/;

if (allInOneRegex.test(html)) {
  html = html.replace(allInOneRegex, cleanAllInOneSection);
  console.log('Successfully replaced entire All in one section cleanly!');
} else {
  console.error('Could not match All in one section regex!');
  process.exit(1);
}

// Remove any remaining orphaned <div class="it" style="--c:#...
html = html.replace(/<div class="it" style="--c:[^>]*>.*?<\/div>/g, '');

// Clean up duplicate CSS
// Remove old .it:before rule if still present
html = html.replace(/\.it:before\{content:""[^}]*\}/g, '');

// Save to index.html and extracted_design
fs.writeFileSync('index.html', html, 'utf8');
fs.writeFileSync('extracted_design/final_design.html', html, 'utf8');

// Also save to Downloads folder
const downloadPathEnDash = 'C:/Users/nabee/Downloads/Yaqeel \u2013 Attendance, fees and exams for schools and tuition centres.html';
const downloadPathHyphen = 'C:/Users/nabee/Downloads/Yaqeel - Attendance, fees and exams for schools and tuition centres.html';

fs.writeFileSync(downloadPathEnDash, html, 'utf8');
fs.writeFileSync(downloadPathHyphen, html, 'utf8');

console.log('Successfully fixed tiles bug in all files! Final length:', html.length);
