/**
 * Makes near-black RGB backgrounds transparent for crayon PNGs (no alpha).
 * Run from repo root: node scripts/knockout-logo-bg.cjs
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const FILES = ["nokia-crayon.png", "enosis-crayon.png", "sammtech-crayon.png"];

function alphaForRgb(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const chroma = max === 0 ? 0 : (max - min) / max;

  // Neutral dark pixels = baked-in black backdrop or its gray fringe.
  if (max < 24 && chroma < 0.2) {
    return 0;
  }
  if (max < 78 && chroma < 0.16) {
    return Math.round(255 * Math.min(1, (max - 24) / 54));
  }

  return 255;
}

async function processFile(filePath) {
  const { data, info } = await sharp(filePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  if (info.channels !== 4) {
    throw new Error(`Expected RGBA, got ${info.channels} channels`);
  }

  const { width, height } = info;
  const out = Buffer.from(data);

  for (let i = 0; i < width * height * 4; i += 4) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    out[i + 3] = alphaForRgb(r, g, b);
  }

  const tmp = `${filePath}.tmp`;
  await sharp(out, {
    raw: { width, height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toFile(tmp);

  fs.renameSync(tmp, filePath);
}

async function main() {
  const dir = path.join(__dirname, "..", "public");
  for (const name of FILES) {
    const fp = path.join(dir, name);
    await processFile(fp);
    console.log("OK", name);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
