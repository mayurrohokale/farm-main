import React from 'react';

const ITEMS = ['Premium Onions', 'Keshar Mangoes', 'Sweet Lime', 'Onion Seeds', 'Jowar', 'Bajra', 'Drip Irrigated', 'Authentic Seed'];

const Star = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-keshar-500 sm:h-6 sm:w-6" aria-hidden="true">
    <path fill="currentColor" d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
  </svg>
);

/** Infinite scrolling ticker of what we grow. Pauses on hover. */
const Marquee: React.FC<{ tone?: 'light' | 'dark' }> = ({ tone = 'light' }) => (
  <div
    className={`group relative overflow-hidden border-y py-5 sm:py-7 ${
      tone === 'light' ? 'border-forest/10 bg-cream-100 text-forest' : 'border-white/10 bg-forest text-cream-100'
    }`}
    aria-label={ITEMS.join(', ')}
  >
    <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]" aria-hidden="true">
      {[0, 1].map((k) => (
        <div key={k} className="flex items-center">
          {ITEMS.map((item, i) => (
            <span key={item} className="flex items-center gap-6 px-6 sm:gap-10 sm:px-10">
              <span
                className={`whitespace-nowrap font-display text-2xl font-medium sm:text-4xl ${i % 2 ? 'italic font-normal text-leaf-600' : ''} ${
                  tone === 'dark' && i % 2 ? '!text-keshar-400' : ''
                }`}
              >
                {item}
              </span>
              <Star />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Marquee;
