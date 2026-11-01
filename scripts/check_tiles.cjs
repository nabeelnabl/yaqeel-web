const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('class="tiles"') || l.includes('class="it"')) {
    console.log(`Line ${i+1}: ${l.substring(0, 120)}`);
  }
});
