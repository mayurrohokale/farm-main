import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Picture from './ui/Picture';
import { useCountUp, useInView } from '../lib/motion';

const SLIDES = [
  { base: '/img/drip-lines', alt: 'Long rows of drip lines across freshly prepared soil at sunrise', caption: 'Drip lines laid at sunrise', place: 'Ready for the new crop', pos: '50% 50%' },
  { base: '/img/morning-fields', alt: 'Morning over young onion rows, with mango trees and a hill beyond', caption: 'Morning on the farm', place: 'Onion nursery & mango trees', pos: '50% 62%' },
  { base: '/img/sunset-field', alt: 'Sun setting behind a tree over a lush green field', caption: 'Golden hour on the farm', place: 'Evening light', pos: '50% 28%' },
  { base: '/img/green_onion', alt: 'Onion crop with hills and wind turbines in the distance', caption: 'Onion fields', place: 'Daithane Gunjal', pos: '50% 40%' },
  { base: '/img/onion3', alt: 'A basket of freshly harvested red onions', caption: 'Fresh onion harvest', place: '55+ tonnes a year', pos: '50% 50%' },
  { base: '/img/mango', alt: 'A crate of organic Keshar mangoes', caption: 'Organic Keshar mangoes', place: 'Summer harvest', pos: '50% 50%' },
  { base: '/img/wheat-field', alt: 'Wheat field turning golden under a clear sky', caption: 'Wheat turning gold', place: 'Rabi season', pos: '50% 42%' },
  { base: '/img/lime', alt: 'Sweet lime trees heavy with fruit', caption: 'Sweet lime orchard', place: '50+ tonnes a year', pos: '50% 50%' },
];

const DURATION = 6500;

const STATS = [
  { value: 55, suffix: '+', unit: 't', label: 'Onions every year' },
  { value: 50, suffix: '+', unit: 't', label: 'Sweet lime every year' },
  { value: 100, suffix: '%', unit: '', label: 'Organic Keshar mangoes' },
  { value: 2, suffix: '', unit: '', label: 'Family farms in Maharashtra' },
];

const Stat: React.FC<{ s: (typeof STATS)[number]; start: boolean; i: number }> = ({ s, start, i }) => {
  const n = useCountUp(s.value, start, 1600 + i * 200);
  return (
    <div className="px-4 py-5 sm:px-6 lg:py-6">
      <div className="font-display text-3xl font-semibold text-cream-100 sm:text-4xl lg:text-5xl">
        {n}
        <span className="text-keshar-400">{s.suffix}</span>
        {s.unit && <span className="ml-1 text-lg font-normal text-cream-100/60 sm:text-xl">{s.unit}</span>}
      </div>
      <div className="mt-1 text-xs font-medium text-cream-100/65 sm:text-sm">{s.label}</div>
    </div>
  );
};

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const touchX = useRef<number | null>(null);
  const { ref: statsRef, inView } = useInView<HTMLDivElement>(0.2);

  const go = useCallback((i: number) => setCurrent((i + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => go(current + 1), DURATION);
    return () => clearTimeout(t);
  }, [current, playing, go]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-forest text-cream-100"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(current + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      {/* Slides with Ken Burns */}
      <div className="absolute inset-0">
        {SLIDES.map((s, i) => (
          <div
            key={s.base}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden={i !== current}
          >
            <Picture
              base={s.base}
              alt={s.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              className={`h-full w-full object-cover ${i === current ? 'animate-kenburns' : ''}`}
              style={{ objectPosition: s.pos }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/25 to-forest/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/80 via-forest/35 to-forest/5 max-lg:from-forest/60 max-lg:via-forest/45 max-lg:to-forest/35" />
      </div>

      {/* Copy */}
      <div className="container-site relative z-10 flex flex-1 flex-col justify-center pb-10 pt-32 sm:pt-36">
        <div className={`max-w-4xl ${loaded ? 'is-visible' : ''}`}>
          <p
            className={`eyebrow !text-keshar-400 transition-all duration-700 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
            Family farm · Maharashtra, India
          </p>
          <h1 className="mt-5 font-display text-[2.9rem] font-semibold leading-[0.98] tracking-tight sm:text-7xl lg:text-[6.2rem]">
            {['Rooted', 'in', 'soil.'].map((w, i) => (
              <React.Fragment key={w}>
                <span className="split-word">
                  <span style={{ '--d': `${150 + i * 90}ms` } as React.CSSProperties}>{w}</span>
                </span>{' '}
              </React.Fragment>
            ))}
            <br />
            {['Grown', 'for'].map((w, i) => (
              <React.Fragment key={w}>
                <span className="split-word">
                  <span style={{ '--d': `${450 + i * 90}ms` } as React.CSSProperties}>{w}</span>
                </span>{' '}
              </React.Fragment>
            ))}
            <span className="split-word">
              <span style={{ '--d': '630ms' } as React.CSSProperties} className="font-normal italic text-keshar-400">
                generations.
              </span>
            </span>
          </h1>
          <p
            className={`mt-6 max-w-xl text-base leading-relaxed text-cream-100/80 transition-all delay-[900ms] duration-1000 sm:text-lg ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Premium onions, organic Keshar mangoes and sweet lime from our family fields in Maharashtra — grown from authentic seed with
            drip irrigation and a lot of patience.
          </p>
          <div
            className={`mt-8 flex flex-col gap-3 transition-all delay-[1100ms] duration-1000 sm:flex-row ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <a href="#products" className="btn-primary">
              Explore our produce <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              Bulk & wholesale enquiry
            </a>
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="container-site relative z-10 flex items-end justify-between gap-4 pb-5">
        <div className="min-w-0">
          <p key={current} className="lb-in truncate text-sm font-semibold text-cream-100">
            {SLIDES[current].caption}
            <span className="ml-2 font-normal text-cream-100/60">— {SLIDES[current].place}</span>
          </p>
          <div className="mt-3 flex gap-1.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.base}
                onClick={() => go(i)}
                className="group relative h-6 w-8 sm:w-12"
                aria-label={`Show slide ${i + 1}: ${s.caption}`}
                aria-current={i === current}
              >
                <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/25 group-hover:bg-white/40">
                  {i === current && (
                    <span
                      key={`${current}-${playing}`}
                      className={`absolute inset-0 rounded-full bg-keshar-400 ${playing ? 'pill-progress' : ''}`}
                      style={{ '--dur': `${DURATION}ms` } as React.CSSProperties}
                    />
                  )}
                  {i < current && <span className="absolute inset-0 rounded-full bg-cream-100/70" />}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button onClick={() => go(current - 1)} className="hero-ctrl" aria-label="Previous slide">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={() => setPlaying((p) => !p)} className="hero-ctrl" aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}>
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button onClick={() => go(current + 1)} className="hero-ctrl" aria-label="Next slide">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Stats strip */}
      <div ref={statsRef} className="relative z-10 border-t border-white/10 bg-forest/70 backdrop-blur-md">
        <div className="container-site grid grid-cols-2 divide-white/10 lg:grid-cols-4 lg:divide-x [&>*:nth-child(odd)]:border-r [&>*:nth-child(odd)]:border-white/10 lg:[&>*:nth-child(odd)]:border-r-0 [&>*:nth-child(-n+2)]:border-b [&>*:nth-child(-n+2)]:border-white/10 lg:[&>*:nth-child(-n+2)]:border-b-0">
          {STATS.map((s, i) => (
            <Stat key={s.label} s={s} start={inView} i={i} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
