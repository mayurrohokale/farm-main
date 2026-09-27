import React, { useLayoutEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Phone, Star } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Picture from './ui/Picture';
import { PRODUCTS, Product, SITE, inquireAbout, telHref } from '../lib/site';
import { useTilt } from '../lib/motion';

const FILTERS = [
  { id: 'all', name: 'All' },
  { id: 'vegetables', name: 'Vegetables' },
  { id: 'fruits', name: 'Fruits' },
  { id: 'grains', name: 'Grains & Millets' },
  { id: 'seeds', name: 'Seeds' },
] as const;

const ACCENT: Record<Product['accent'], string> = {
  onion: 'bg-onion-500 text-white',
  keshar: 'bg-keshar-500 text-forest',
  leaf: 'bg-leaf-600 text-white',
  soil: 'bg-soil-500 text-cream-100',
};

const ProductCard: React.FC<{ p: Product; i: number }> = ({ p, i }) => {
  const tilt = useTilt<HTMLElement>(5);
  return (
    <div data-reveal="up" style={{ '--d': `${(i % 3) * 110}ms` } as React.CSSProperties}>
      <article
        ref={tilt}
        className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-cream-50 shadow-soft ring-1 ring-forest/5 transition-[transform,box-shadow] duration-300 ease-out hover:shadow-lift"
      >
        {/* cursor spotlight */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: 'radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(233,162,59,.14), transparent 45%)' }}
        />
        <div className="relative aspect-[4/3] overflow-hidden">
          <Picture base={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" sizes="(min-width:1024px) 30vw, (min-width:768px) 45vw, 92vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${ACCENT[p.accent]}`}>{p.season}</span>
            {p.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-cream-50/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-forest backdrop-blur">
                <Star className="h-3 w-3 fill-keshar-500 text-keshar-500" /> Signature
              </span>
            )}
          </div>
          {p.stat && (
            <div className="absolute bottom-3 right-4 font-display text-4xl font-semibold text-cream-100 drop-shadow transition-transform duration-500 group-hover:-translate-y-1">
              {p.stat}
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-2xl font-semibold text-forest">{p.name}</h3>
            {p.local && <span className="shrink-0 font-display text-sm italic text-ink/45">{p.local}</span>}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink/65">{p.description}</p>
          <ul className="mt-5 space-y-2">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-sm font-semibold text-forest/85">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-leaf-100 text-leaf-700">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <button
            onClick={() => inquireAbout(p.name)}
            className="mt-7 inline-flex items-center justify-between gap-2 rounded-full border-2 border-forest/10 py-2 pl-5 pr-2 text-sm font-bold text-forest transition-all duration-300 hover:border-forest hover:bg-forest hover:text-cream-100"
          >
            Enquire about {p.name.split(' ').slice(-1)[0].toLowerCase()}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-keshar-500 text-forest transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </article>
    </div>
  );
};

const Products: React.FC = () => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]['id']>('all');
  const tabsRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  // sliding pill behind the active filter
  useLayoutEffect(() => {
    const update = () => {
      const el = tabsRef.current?.querySelector<HTMLButtonElement>(`[data-id="${filter}"]`);
      if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [filter]);

  const shown = filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="products" className="relative bg-cream-200/60 py-20 sm:py-28 lg:py-32">
      <div className="container-site">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our produce"
            title="Fresh from our fields to your business."
            accent={[3, 4]}
            intro="Grown with modern, sustainable practices and supplied fresh or in bulk. Pricing depends on season and quantity — ask us for a quote."
          />
          <div className="-mx-4 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0" data-reveal="up">
            <div ref={tabsRef} role="tablist" aria-label="Filter produce" className="relative inline-flex rounded-full bg-cream-50 p-1.5 shadow-soft ring-1 ring-forest/5">
              <span
                aria-hidden="true"
                className="absolute bottom-1.5 top-1.5 rounded-full bg-forest transition-all duration-500 ease-[cubic-bezier(.5,1.6,.4,.9)]"
                style={{ left: indicator.left, width: indicator.width }}
              />
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  data-id={f.id}
                  role="tab"
                  aria-selected={filter === f.id}
                  onClick={() => setFilter(f.id)}
                  className={`relative z-10 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-bold transition-colors duration-300 sm:px-5 ${
                    filter === f.id ? 'text-cream-100' : 'text-forest/70 hover:text-forest'
                  }`}
                >
                  {f.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div key={filter} className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {shown.map((p, i) => (
            <ProductCard key={p.id} p={p} i={i} />
          ))}
        </div>

        {/* Bulk CTA */}
        <div data-reveal="zoom" className="relative mt-16 overflow-hidden rounded-[2rem] bg-keshar-500 px-6 py-12 text-forest sm:px-12 lg:mt-24 lg:px-16 lg:py-16">
          <svg className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 animate-spin-slow text-forest/10" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
          </svg>
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="eyebrow !text-forest/70">Bulk & custom orders</span>
              <h3 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Supplying traders, retailers & <em className="font-normal">restaurants.</em>
              </h3>
              <p className="mt-4 max-w-xl text-forest/75">
                Competitive pricing, custom packing and dependable dispatch schedules — tell us what you need and when.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <button onClick={() => inquireAbout('Bulk order')} className="btn-dark">
                Request a bulk quote <ArrowUpRight className="h-4 w-4" />
              </button>
              <a href={telHref(SITE.phones[0])} className="btn border-2 border-forest/20 text-forest hover:border-forest">
                <Phone className="h-4 w-4" /> {SITE.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
