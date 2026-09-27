import React from 'react';

interface Props extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  /** path without size/extension, e.g. `/img/onion3` — see scripts/optimize-images.cjs */
  base: string;
  alt: string;
  sizes?: string;
}

const WIDTHS = [720, 1280, 1920];
const srcSet = (base: string, ext: string) => WIDTHS.map((w) => `${base}-${w}.${ext} ${w}w`).join(', ');

/** Responsive image: AVIF first, WebP fallback, three widths so phones download small files. */
const Picture: React.FC<Props> = ({ base, alt, sizes = '100vw', loading = 'lazy', ...rest }) => (
  <picture className="contents">
    <source type="image/avif" srcSet={srcSet(base, 'avif')} sizes={sizes} />
    <img
      src={`${base}-1280.webp`}
      srcSet={srcSet(base, 'webp')}
      sizes={sizes}
      alt={alt}
      loading={loading}
      decoding="async"
      draggable={false}
      {...rest}
    />
  </picture>
);

export default Picture;
