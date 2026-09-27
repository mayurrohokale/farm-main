import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Picture from './ui/Picture';

const IMAGES = [
  { base: '/img/morning-fields', title: 'Morning over the onion rows', category: 'Fields', tall: true },
  { base: '/img/sunset-field', title: 'Golden hour over the crop', category: 'Fields', tall: true },
  { base: '/img/onion-seeds-hand', title: 'Onion seed, ready for sowing', category: 'Seeds', tall: true },
  { base: '/img/drip-lines', title: 'Drip lines at sunrise', category: 'Technology', tall: true },
  { base: '/img/mango-tree', title: 'Keshar mangoes on the tree', category: 'Harvest', tall: true },
  { base: '/img/wheat-green', title: 'Young wheat ears', category: 'Fields', tall: true },
  { base: '/img/wheat-field', title: 'Wheat turning gold', category: 'Fields', tall: true },
  { base: '/img/onion_field', title: 'Onion fields in full growth', category: 'Fields', tall: true },
  { base: '/img/mango', title: 'Organic Keshar mangoes', category: 'Harvest' },
  { base: '/img/drip', title: 'Drip-irrigated rows', category: 'Technology' },
  { base: '/img/onion3', title: 'Freshly harvested onions', category: 'Harvest', tall: true },
  { base: '/img/1682310464179', title: 'Evening over the fields', category: 'Fields' },
  { base: '/img/onion2', title: 'Onion storage & loading', category: 'Harvest' },
  { base: '/img/green_onion', title: 'Young onion crop', category: 'Fields', tall: true },
  { base: '/img/field', title: 'Preparing the land', category: 'Fields' },
  { base: '/img/onion', title: 'Deep-red, firm onions', category: 'Harvest' },
  { base: '/img/lime', title: 'Sweet lime (mosambi)', category: 'Harvest' },
  { base: '/img/onion-seeds', title: 'Premium onion seed', category: 'Seeds' },
  { base: '/img/jowar', title: 'Jowar (sorghum)', category: 'Seeds' },
];

const CATS = ['All', 'Fields', 'Harvest', 'Technology', 'Seeds'];

const Gallery: React.FC = () => {
  const [cat, setCat] = useState('All');
  const [open, setOpen] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const shown = cat === 'All' ? IMAGES : IMAGES.filter((i) => i.category === cat);

  const step = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + shown.length) % shown.length)), [shown.length]);

  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, step]);

  const current = open !== null ? shown[open] : null;

  return (
    <section id="gallery" className="bg-cream-100 py-20 sm:py-28 lg:py-32">
      <div className="container-site">
        <SectionHeading
          align="center"
          eyebrow="Gallery"
          title="Life on the farm, season by season."
          accent={[3, 4]}
          intro="A look at our fields, our harvests and the people and tools behind them."
        />

        <div data-reveal="up" className="mt-10 flex flex-wrap justify-center gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                cat === c ? 'scale-105 bg-forest text-cream-100 shadow-soft' : 'bg-cream-50 text-forest/70 ring-1 ring-forest/10 hover:text-forest hover:ring-forest/30'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div key={cat} className="mt-12 columns-2 gap-3 sm:gap-5 lg:columns-3 [&>*]:mb-3 sm:[&>*]:mb-5">
          {shown.map((img, i) => (
            <button
              key={img.base}
              data-reveal="zoom"
              style={{ '--d': `${(i % 6) * 80}ms` } as React.CSSProperties}
              onClick={() => setOpen(i)}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl bg-cream-200 text-left sm:rounded-3xl"
              aria-label={`Open photo: ${img.title}`}
            >
              <Picture
                base={img.base}
                alt={img.title}
                className={`w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 ${img.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
                sizes="(min-width:1024px) 30vw, 48vw"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/0 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-5">
                <span className="translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
                  <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-keshar-400 sm:block">{img.category}</span>
                  <span className="block font-display text-sm font-medium text-cream-100 sm:text-lg">{img.title}</span>
                </span>
                <span className="hidden h-9 w-9 shrink-0 scale-50 items-center justify-center rounded-full bg-cream-100 text-forest opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 sm:flex">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {current && open !== null && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-forest/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={() => setOpen(null)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="container-site flex items-center justify-between py-4 text-cream-100">
            <span className="text-sm font-semibold tabular-nums">
              {open + 1} <span className="text-cream-100/50">/ {shown.length}</span>
            </span>
            <button className="hero-ctrl" onClick={() => setOpen(null)} aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="relative flex flex-1 items-center justify-center px-4 sm:px-20">
            <Picture key={current.base} base={current.base} alt={current.title} loading="eager" onClick={(e) => e.stopPropagation()} className="lb-in max-h-[72vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl" />
            <button className="hero-ctrl absolute left-4 hidden sm:inline-flex" onClick={(e) => (e.stopPropagation(), step(-1))} aria-label="Previous photo">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="hero-ctrl absolute right-4 hidden sm:inline-flex" onClick={(e) => (e.stopPropagation(), step(1))} aria-label="Next photo">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="container-site py-6 text-center text-cream-100">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-keshar-400">{current.category}</p>
            <p className="mt-1 font-display text-xl sm:text-2xl">{current.title}</p>
            <p className="mt-2 text-xs text-cream-100/50 sm:hidden">Swipe to browse</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
