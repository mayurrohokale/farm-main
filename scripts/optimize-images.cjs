/*
 * Generates the responsive images the site serves from the originals in public/images.
 *   public/img/<name>-{720,1280,1920}.{avif,webp}
 * AVIF q62 / WebP q80 are visually lossless for these photos (checked at 100% crop).
 * Usage: npm i -D sharp && node scripts/optimize-images.cjs
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '../public/images');
const OUT = path.join(__dirname, '../public/img');
const FILES = ['field.jpg', 'drip.jpg', 'green_onion.jpg', 'onion.jpg', 'onion2.jpg', 'onion3.jpg', 'onion_field.jpg', 'mango.jpg', 'mango3.png', 'lime.jpg', 'lime2.jpg', 'jowar.png', 'bajara.png', 'onion-seeds.png', '1682310464179.jpg', 'onion-seeds-hand.jpg', 'sunset-field.jpg', 'mango-tree.jpg', 'drip-lines.jpg', 'wheat-green.jpg', 'wheat-field.jpg'];
const WIDTHS = [720, 1280, 1920];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  for (const f of FILES) {
    const base = f.replace(/\.[^.]+$/, '');
    for (const w of WIDTHS) {
      const img = sharp(path.join(SRC, f)).rotate().resize({ width: w, withoutEnlargement: true });
      await img.clone().avif({ quality: 62, effort: 6 }).toFile(path.join(OUT, `${base}-${w}.avif`));
      await img.clone().webp({ quality: 80, effort: 6, smartSubsample: true }).toFile(path.join(OUT, `${base}-${w}.webp`));
    }
    console.log('✓', base);
  }
})();
