const fs = require('fs');

// Load 3dicons data
const iconsData = JSON.parse(fs.readFileSync('extracted_design/3dicons_data.json', 'utf8'));

// Load current index.html
let html = fs.readFileSync('index.html', 'utf8');

// Build the new tiles HTML
const items = [
  'Students', 'Batches', 'Attendance', 'Fees', 'Receipts', 'Exams', 'Report cards',
  'Payroll', 'Reports', 'Notices', 'Parent app', 'WhatsApp', 'Roles', 'Timetable'
];

let newTilesHtml = '<div class="tiles">';
for (const label of items) {
  const icon = iconsData[label];
  if (!icon) {
    console.error('Missing icon for label:', label);
    process.exit(1);
  }
  newTilesHtml += `\n    <div class="it"><img class="it-icon" src="${icon.b64}" alt="${label}" loading="lazy"><span>${label}</span></div>`;
}
newTilesHtml += '\n  </div>';

// Match and replace old .tiles
const oldTilesRegex = /<div class="tiles">[\s\S]*?<\/div>/;
if (oldTilesRegex.test(html)) {
  html = html.replace(oldTilesRegex, newTilesHtml);
  console.log('Replaced .tiles markup with 3D icons from 3dicons.co!');
} else {
  console.error('Could not find .tiles regex in HTML');
  process.exit(1);
}

// Remove old .it:before CSS rule and update .it and .it-icon CSS
// Old: .it:before{content:"";width:30px;height:30px;border-radius:9px;background:var(--c)}
const oldItBefore = '.it:before{content:"";width:30px;height:30px;border-radius:9px;background:var(--c)}';
html = html.replace(oldItBefore, '/* .it:before replaced with 3dicons */');

// Add enhanced 3dicon tile CSS
const newTilesCss = `
/* 3dicons.co Enhanced Tiles */
.tiles{
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 16px;
  margin-top: 48px;
}
.it{
  aspect-ratio: 1;
  border-radius: 20px;
  background: var(--card);
  border: 1px solid var(--line);
  box-shadow: 0 14px 26px -16px rgba(0,0,0,.35);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  padding: 10px 4px;
  text-align: center;
  transition: transform .2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow .2s ease, border-color .2s ease;
  user-select: none;
}
.it:hover{
  transform: translateY(-4px);
  box-shadow: 0 20px 32px -14px rgba(0,0,0,.45);
  border-color: var(--accent);
}
.it-icon{
  width: 44px;
  height: 44px;
  object-fit: contain;
  filter: drop-shadow(0 6px 12px rgba(0,0,0,0.18));
  transition: transform .25s cubic-bezier(0.16, 1, 0.3, 1);
  display: block;
}
.it:hover .it-icon{
  transform: scale(1.12);
}
.it span{
  line-height: 1.2;
}
@media(max-width:860px){
  .tiles{
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
  .it{
    border-radius: 16px;
    padding: 8px 4px;
    font-size: 12px;
  }
  .it-icon{
    width: 38px;
    height: 38px;
  }
}
@media(max-width:480px){
  .tiles{
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .it{
    border-radius: 14px;
    font-size: 11.5px;
    gap: 6px;
  }
  .it-icon{
    width: 34px;
    height: 34px;
  }
}
`;

html = html.replace('</style>', newTilesCss + '\n</style>');

// Save to index.html and extracted_design
fs.writeFileSync('index.html', html, 'utf8');
fs.writeFileSync('extracted_design/final_design.html', html, 'utf8');

// Also save to Downloads folder
const downloadPathEnDash = 'C:/Users/nabee/Downloads/Yaqeel \u2013 Attendance, fees and exams for schools and tuition centres.html';
const downloadPathHyphen = 'C:/Users/nabee/Downloads/Yaqeel - Attendance, fees and exams for schools and tuition centres.html';

fs.writeFileSync(downloadPathEnDash, html, 'utf8');
fs.writeFileSync(downloadPathHyphen, html, 'utf8');

console.log('Successfully updated 3dicons in all files! File size:', html.length);
