const fs = require('fs');
const path = require('path');

const b64 = fs.readFileSync('extracted_design/logo_b64.txt', 'utf8').trim();
const originalHtml = fs.readFileSync('extracted_design/design.html', 'utf8');

const targetSpan = '<span class="mark"><svg viewBox="0 0 16 16" fill="none" stroke="var(--accent-ink)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5l3.2 3L13 4.5"/></svg></span>';

// Update CSS for .mark: transparent background, object-fit cover
let updatedHtml = originalHtml.replace(
  '.mark{width:26px;height:26px;border-radius:7px;background:var(--accent);display:grid;place-items:center}',
  '.mark{width:26px;height:26px;border-radius:7px;background:transparent;display:inline-block;object-fit:cover;vertical-align:middle}'
);

// Add favicon in <head>
updatedHtml = updatedHtml.replace(
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">',
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n<link rel="icon" type="image/png" href="' + b64 + '">\n<link rel="apple-touch-icon" href="' + b64 + '">'
);

// Replace the 3 occurrences of targetSpan:
// 1. Header: <a class="logo" href="#top"><img class="mark" ...>Yaqeel</a>
// 2. Hero: <div class="appicon"><img class="mark" ...></div>
// 3. Footer: <span class="logo"><img class="mark" ...>Yaqeel</span>
const count = (updatedHtml.match(new RegExp(targetSpan.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
console.log('Target spans found to replace:', count);

updatedHtml = updatedHtml.split(targetSpan).join('<img class="mark" src="' + b64 + '" alt="Yaqeel">');

// Save to extracted_design/final_design.html
fs.writeFileSync('extracted_design/final_design.html', updatedHtml, 'utf8');
console.log('Saved extracted_design/final_design.html');

// Save back to user's Downloads folder
const downloadPathEnDash = 'C:/Users/nabee/Downloads/Yaqeel \u2013 Attendance, fees and exams for schools and tuition centres.html';
const downloadPathHyphen = 'C:/Users/nabee/Downloads/Yaqeel - Attendance, fees and exams for schools and tuition centres.html';

fs.writeFileSync(downloadPathEnDash, updatedHtml, 'utf8');
console.log('Updated user file in Downloads (en-dash):', downloadPathEnDash);

fs.writeFileSync(downloadPathHyphen, updatedHtml, 'utf8');
console.log('Updated user file in Downloads (hyphen):', downloadPathHyphen);

// Backup existing index.html to index.react.html if not already backed up
if (!fs.existsSync('index.react.html')) {
  fs.copyFileSync('index.html', 'index.react.html');
  console.log('Backed up index.html to index.react.html');
}

// Copy updated design to index.html so dev server and tunnel serve this design directly!
fs.writeFileSync('index.html', updatedHtml, 'utf8');
console.log('Updated index.html at project root for dev server');
