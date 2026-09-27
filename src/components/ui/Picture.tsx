import React from 'react';

interface Props extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  /** path without extension, e.g. `/img/onion3` — expects `<base>.webp` and `<base>-sm.webp` */
  base: string;
  alt: string;
  sizes?: string;
}

/** Responsive, optimised WebP image with a small variant for phones. */
const Picture: React.FC<Props> = ({ base, alt, sizes = '100vw', loading = 'lazy', ...rest }) => (
  <img
    src={`${base}.webp`}
    srcSet={`${base}-sm.webp 720w, ${base}.webp 1600w`}
    sizes={sizes}
    alt={alt}
    loading={loading}
    decoding="async"
    draggable={false}
    {...rest}
  />
);

export default Picture;
