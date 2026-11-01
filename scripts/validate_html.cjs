const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Check script syntax
const scripts = html.match(/<script[\s\S]*?>([\s\S]*?)<\/script>/g) || [];
console.log('Total scripts found:', scripts.length);
scripts.forEach((s, i) => {
  const code = s.replace(/<script[\s\S]*?>/, '').replace('</script>', '');
  try {
    new Function(code);
    console.log(`Script ${i}: Valid JavaScript syntax!`);
  } catch (err) {
    console.error(`Script ${i} syntax error:`, err);
  }
});

// Check images
const imgs = html.match(/<img[\s\S]*?>/g) || [];
console.log('Total img elements:', imgs.length);
imgs.forEach((img, i) => {
  const srcMatch = img.match(/src="([^"]*)"/);
  const altMatch = img.match(/alt="([^"]*)"/);
  const src = srcMatch ? srcMatch[1] : '';
  const alt = altMatch ? altMatch[1] : '';
  console.log(`Image ${i}: alt="${alt}", length: ${src.length}, prefix: ${src.substring(0, 35)}...`);
});
