import React, { useEffect, useRef } from 'react';
import { Droplets, Sun, Waves } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { prefersReducedMotion } from '../lib/motion';

const CLIPS = [
  { src: '/video/drip-drop', poster: '/video/drip-drop-poster.webp', label: 'Drip irrigation', caption: 'One drop at a time, straight to the roots' },
  { src: '/video/sprinkler', poster: '/video/sprinkler-poster.webp', label: 'Sprinklers at sunrise', caption: 'Even coverage across the rows' },
];

const POINTS = [
  { icon: Droplets, title: 'Drip lines on every row', text: 'Water and nutrients go right to the root zone, so nothing is wasted on bare soil.' },
  { icon: Waves, title: 'Sprinklers where they help', text: 'Used for germination and dry spells to keep young crops evenly watered.' },
  { icon: Sun, title: 'Steady through dry months', text: 'Consistent moisture keeps the soil healthy and the harvest dependable, even in peak summer.' },
];

/** Muted, looping clip that only downloads and plays while it is on screen. */
const Clip: React.FC<(typeof CLIPS)[number] & { i: number }> = ({ src, poster, label, caption, i }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !prefersReducedMotion()) v.play().catch(() => undefined);
        else v.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <figure
      data-reveal="up"
      style={{ '--d': `${i * 150}ms` } as React.CSSProperties}
      className={`group relative overflow-hidden rounded-[1.75rem] bg-forest shadow-lift ${i === 1 ? 'sm:mt-16' : ''}`}
    >
      <video
        ref={ref}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={`${label}: ${caption}`}
        className="aspect-[9/16] w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
      >
        <source src={`${src}.webm`} type="video/webm" />
        <source src={`${src}.mp4`} type="video/mp4" />
      </video>
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent p-5 pt-16 text-cream-100">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-keshar-400">{label}</span>
        <span className="mt-1 block font-display text-lg leading-snug">{caption}</span>
      </figcaption>
    </figure>
  );
};

const Irrigation: React.FC = () => (
  <section className="relative overflow-hidden bg-cream-100 py-20 sm:py-28 lg:py-32">
    <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <SectionHeading
          eyebrow="Water, drop by drop"
          title="Every drop goes where the crop needs it."
          accent={[1, 2]}
          intro="Water is precious in Maharashtra. Our fields run on drip lines and sprinklers, so onions, sweet lime and mangoes get steady water without wasting it."
        />
        <ul className="mt-10 space-y-6">
          {POINTS.map(({ icon: Icon, title, text }, i) => (
            <li key={title} data-reveal="left" style={{ '--d': `${150 + i * 100}ms` } as React.CSSProperties} className="group flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf-100 text-leaf-700 transition-all duration-500 group-hover:scale-110 group-hover:bg-forest group-hover:text-keshar-400">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-forest">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/65">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-7">
        {CLIPS.map((c, i) => (
          <Clip key={c.src} {...c} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Irrigation;
