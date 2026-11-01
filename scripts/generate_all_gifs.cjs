const { GIFEncoder, quantize, applyPalette } = require('gifenc');
const sharp = require('sharp');
const fs = require('fs');

const W = 356;
const H = 772;

async function createGif(imagePaths, outputPath, delayMs = 1600) {
  const gif = GIFEncoder();

  for (const imgPath of imagePaths) {
    if (!fs.existsSync(imgPath)) {
      console.warn(`File not found: ${imgPath}`);
      continue;
    }

    const rgba = await sharp(imgPath)
      .resize(W, H, { fit: 'cover', position: 'top' })
      .raw()
      .toBuffer();

    const palette = quantize(rgba, 256);
    const index = applyPalette(rgba, palette);
    gif.writeFrame(index, W, H, { palette, delay: delayMs });
  }

  gif.finish();
  fs.writeFileSync(outputPath, gif.bytes());
  console.log(`Generated: ${outputPath} (${imagePaths.length} frames)`);
}

async function main() {
  // 1. Attendance: All Present -> 2 Marked Absent
  await createGif([
    'C:/Users/nabee/Downloads/YAQEEL/IMG_2017.PNG',
    'C:/Users/nabee/Downloads/YAQEEL/IMG_2016.PNG'
  ], 'public/assets/demo-attendance.gif', 1600);

  // 2. Exams: Marks Entry -> Exam Analytics & Report Card
  await createGif([
    'C:/Users/nabee/Downloads/YAQEEL/IMG_2012.PNG',
    'C:/Users/nabee/Downloads/YAQEEL/IMG_2013.PNG'
  ], 'public/assets/demo-exams.gif', 1600);

  // 3. Fees: Transactions -> Digital Receipt -> Balance Overview
  await createGif([
    'C:/Users/nabee/Downloads/YAQEEL/IMG_2011.PNG',
    'C:/Users/nabee/Downloads/YAQEEL/IMG_2021.PNG',
    'C:/Users/nabee/Downloads/YAQEEL/IMG_2022.PNG'
  ], 'public/assets/demo-fees.gif', 1500);

  // 4. Payroll: Teacher Work Log / Salary Hours / Permissions
  await createGif([
    'C:/Users/nabee/Downloads/YAQEEL/Frame 20.png',
    'C:/Users/nabee/Downloads/YAQEEL/Frame 20.png'
  ], 'public/assets/demo-payroll.gif', 1600);
}

main().catch(console.error);
