const https = require('https');

const icons = [
  { name: 'Students', slug: 'boy' },
  { name: 'Batches', slug: 'folder' },
  { name: 'Attendance', slug: 'calender' },
  { name: 'Fees', slug: 'rupee' },
  { name: 'Receipts', slug: 'file-text' },
  { name: 'Exams', slug: 'pencil' },
  { name: 'Report cards', slug: 'trophy' },
  { name: 'Payroll', slug: 'wallet' },
  { name: 'Reports', slug: 'chart' },
  { name: 'Notices', slug: 'megaphone' },
  { name: 'Parent app', slug: 'mobile' },
  { name: 'WhatsApp', slug: 'chat-bubble' },
  { name: 'Roles', slug: 'sheild' },
  { name: 'Timetable', slug: 'clock' }
];

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode);
    }).on('error', (e) => resolve(500));
  });
}

async function run() {
  for (const item of icons) {
    const colorUrl = 'https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/color/' + item.slug + '-dynamic-color.png';
    const gradUrl = 'https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/gradient/' + item.slug + '-dynamic-gradient.png';
    const cCode = await checkUrl(colorUrl);
    const gCode = await checkUrl(gradUrl);
    console.log(item.name + ' (' + item.slug + '): color=' + cCode + ', grad=' + gCode);
  }
}

run();
