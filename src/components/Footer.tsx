import React from 'react';
import { ArrowUp, ArrowUpRight, Heart, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import Logo, { LogoBadge } from './ui/Logo';
import Marquee from './Marquee';
import { PRODUCTS, SITE, telHref } from '../lib/site';

const Footer: React.FC = () => (
  <footer className="relative overflow-hidden bg-forest text-cream-100">
    <Marquee tone="dark" />

    <div className="container-site relative py-16 sm:py-20">
      {/* big CTA */}
      <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-14 lg:flex-row lg:items-end">
        <h2 data-split className="max-w-3xl font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          {['Good', 'food', 'starts', 'in'].map((w, i) => (
            <React.Fragment key={w}>
              <span className="split-word">
                <span style={{ '--d': `${i * 80}ms` } as React.CSSProperties}>{w}</span>
              </span>{' '}
            </React.Fragment>
          ))}
          <span className="split-word">
            <span style={{ '--d': '320ms' } as React.CSSProperties} className="font-normal italic text-keshar-400">
              good soil.
            </span>
          </span>
        </h2>
        <div data-reveal="zoom" className="flex shrink-0 items-center gap-6">
          <LogoBadge className="hidden h-32 w-32 sm:block" />
          <a href="#contact" className="btn-primary">
            Start an enquiry <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="grid gap-12 pt-14 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/60">
            A family farm in Maharashtra growing premium onions, organic Keshar mangoes, sweet lime and millets.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Instagram, label: 'Instagram' },
              { icon: Youtube, label: 'YouTube' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:-translate-y-1 hover:border-keshar-500 hover:bg-keshar-500 hover:text-forest"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-keshar-400">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ['Our story', '#about'],
              ['Produce', '#products'],
              ['Gallery', '#gallery'],
              ['Visit the farm', '#visit'],
              ['Contact', '#contact'],
            ].map(([n, h]) => (
              <li key={h}>
                <a href={h} className="link-draw text-cream-100/75 hover:text-cream-100">
                  {n}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-keshar-400">What we grow</h3>
          <ul className="mt-5 space-y-3 text-sm text-cream-100/75">
            {PRODUCTS.map((p) => (
              <li key={p.id}>{p.name}</li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-keshar-400">Reach us</h3>
          <ul className="mt-5 space-y-4 text-sm text-cream-100/75">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-keshar-400" />
              <span className="flex flex-col gap-1">
                {SITE.phones.map((p) => (
                  <a key={p} href={telHref(p)} className="link-draw hover:text-cream-100">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-keshar-400" />
              <a href={`mailto:${SITE.email}`} className="link-draw break-all hover:text-cream-100">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-keshar-400" />
              <span>
                Daithane Gunjal &amp; Talpimpri,
                <br />
                Maharashtra, India
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* giant wordmark */}
    <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
      <p data-reveal="up" className="container-site -mb-[0.22em] whitespace-nowrap font-display text-[22vw] font-semibold leading-none tracking-tighter text-white/[0.05] lg:text-[17vw]">
        Rohokale
      </p>
    </div>

    <div className="border-t border-white/10">
      <div className="container-site flex flex-col items-center justify-between gap-4 py-6 text-xs text-cream-100/50 sm:flex-row">
        <p className="flex items-center gap-1.5">
          © {new Date().getFullYear()} Rohokale Farm · Crafted with <Heart className="h-3 w-3 fill-onion-500 text-onion-500" />
        </p>
        <div className="flex items-center gap-6">
          <a href="#privacy-policy" className="hover:text-cream-100">
            Privacy
          </a>
          <a href="#terms" className="hover:text-cream-100">
            Terms
          </a>
          <a href="#home" className="inline-flex items-center gap-1 font-semibold text-cream-100/80 hover:text-keshar-400">
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
