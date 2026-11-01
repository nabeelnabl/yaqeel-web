const sharp = require('sharp');
const fs = require('fs');

const SCREEN_W = 380;
const SCREEN_H = 780;

async function createAttendanceGif() {
  const img1 = 'C:/Users/nabee/Downloads/YAQEEL/IMG_2017.PNG'; // All present
  const img2 = 'C:/Users/nabee/Downloads/YAQEEL/IMG_2016.PNG'; // 2 absent

  if (!fs.existsSync(img1) || !fs.existsSync(img2)) {
    console.error('Source images for attendance not found');
    return;
  }

  const b1 = await sharp(img1).resize(SCREEN_W, SCREEN_H, { fit: 'cover' }).png().toBuffer();
  const b2 = await sharp(img2).resize(SCREEN_W, SCREEN_H, { fit: 'cover' }).png().toBuffer();

  const combined = await sharp({
    create: {
      width: SCREEN_W,
      height: SCREEN_H * 2,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite([
    { input: b1, top: 0, left: 0 },
    { input: b2, top: SCREEN_H, left: 0 }
  ])
  .png()
  .toBuffer();

  await sharp(combined, { animated: true, pageHeight: SCREEN_H })
    .gif({ loop: 0, delay: [1400, 1400] })
    .toFile('public/assets/demo-attendance.gif');

  console.log('Created demo-attendance.gif successfully!');
}

async function createExamsGif() {
  const img1 = 'C:/Users/nabee/Downloads/YAQEEL/IMG_2012.PNG'; // Mid Term Exam
  const img2 = 'C:/Users/nabee/Desktop/yaqeel web/public/assets/exams-mockup.png';

  const b1 = await sharp(img1).resize(SCREEN_W, SCREEN_H, { fit: 'cover' }).png().toBuffer();

  let b2;
  if (fs.existsSync(img2)) {
    b2 = await sharp(img2).resize(SCREEN_W, SCREEN_H, { fit: 'contain', background: '#F8F9FD' }).png().toBuffer();
  } else {
    b2 = b1;
  }

  const combined = await sharp({
    create: {
      width: SCREEN_W,
      height: SCREEN_H * 2,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite([
    { input: b1, top: 0, left: 0 },
    { input: b2, top: SCREEN_H, left: 0 }
  ])
  .png()
  .toBuffer();

  await sharp(combined, { animated: true, pageHeight: SCREEN_H })
    .gif({ loop: 0, delay: [1500, 1500] })
    .toFile('public/assets/demo-exams.gif');

  console.log('Created demo-exams.gif successfully!');
}

async function createFeesGif() {
  const img1 = 'C:/Users/nabee/Downloads/YAQEEL/IMG_2011.PNG'; // All Transactions
  const img2 = 'C:/Users/nabee/Downloads/YAQEEL/IMG_2021.PNG'; // Receipt
  const img3 = 'C:/Users/nabee/Downloads/YAQEEL/IMG_2022.PNG'; // Fee overview

  const b1 = await sharp(img1).resize(SCREEN_W, SCREEN_H, { fit: 'cover' }).png().toBuffer();
  const b2 = await sharp(img2).resize(SCREEN_W, SCREEN_H, { fit: 'cover' }).png().toBuffer();
  const b3 = await sharp(img3).resize(SCREEN_W, SCREEN_H, { fit: 'cover' }).png().toBuffer();

  const combined = await sharp({
    create: {
      width: SCREEN_W,
      height: SCREEN_H * 3,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite([
    { input: b1, top: 0, left: 0 },
    { input: b2, top: SCREEN_H, left: 0 },
    { input: b3, top: SCREEN_H * 2, left: 0 }
  ])
  .png()
  .toBuffer();

  await sharp(combined, { animated: true, pageHeight: SCREEN_H })
    .gif({ loop: 0, delay: [1400, 1400, 1400] })
    .toFile('public/assets/demo-fees.gif');

  console.log('Created demo-fees.gif successfully!');
}

async function main() {
  await createAttendanceGif();
  await createExamsGif();
  await createFeesGif();
}

main().catch(console.error);
