const sharp = require('sharp');

async function generatePerfectScreenMask() {
  const { data: frameData, info } = await sharp('public/assets/iphone-frame.webp')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info; // 389 x 800

  // 1. Build an exact boundary map from the inner cutout of iphone-frame.webp
  // For each y from 14 to 785, find the inner cutout left and right from the corners.
  // Note: in the middle (away from top/bottom curves), left is 18 and right is 371.
  const bounds = new Array(height);

  for (let y = 0; y < height; y++) {
    if (y < 14 || y > 785) {
      bounds[y] = null;
      continue;
    }

    // Search from left:
    // Outer edge has alpha > 50. Inner edge is where alpha drops to 0.
    let leftScreen = -1;
    let rightScreen = -1;

    let state = 0; // 0: outside, 1: bezel
    for (let x = 0; x < width / 2; x++) {
      const a = frameData[(y * width + x) * 4 + 3];
      if (state === 0 && a > 80) {
        state = 1;
      } else if (state === 1 && a < 80) {
        leftScreen = x;
        break;
      }
    }

    state = 0;
    for (let x = width - 1; x >= width / 2; x--) {
      const a = frameData[(y * width + x) * 4 + 3];
      if (state === 0 && a > 80) {
        state = 1;
      } else if (state === 1 && a < 80) {
        rightScreen = x;
        break;
      }
    }

    // Fallbacks if not found (e.g. at y = 14)
    if (leftScreen === -1) leftScreen = 72;
    if (rightScreen === -1) rightScreen = width - 73;

    bounds[y] = { left: leftScreen, right: rightScreen };
  }

  // Create clean mask buffer
  const mask = Buffer.alloc(width * height * 4, 0);

  for (let y = 0; y < height; y++) {
    if (!bounds[y]) continue;
    const { left, right } = bounds[y];
    for (let x = left; x <= right; x++) {
      const idx = (y * width + x) * 4;
      mask[idx] = 255;
      mask[idx + 1] = 255;
      mask[idx + 2] = 255;
      mask[idx + 3] = 255;
    }
  }

  // Apply a subtle 0.5px Gaussian blur to anti-alias the mask edges cleanly
  await sharp(mask, { raw: { width, height, channels: 4 } })
    .blur(0.6)
    .png()
    .toFile('public/assets/screen-mask.png');

  console.log('Generated anti-aliased public/assets/screen-mask.png');
}

generatePerfectScreenMask().catch(console.error);
