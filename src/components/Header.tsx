import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import Logo from './ui/Logo';
import { SITE, telHref } from '../lib/site';
import { useScrollProgress } from '../lib/motion';

const NAV = [
  { name: 'Home', href: '#home' },
  { name: 'Our Story', href: '#about' },
  { name: 'Produce', href: '#products' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector(n.href)).filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          solid ? 'bg-cream-100/85 shadow-[0_1px_0_rgba(20,48,31,.08)] backdrop-blur-xl' : 'bg-gradient-to-b from-black/45 to-transparent'
        }`}
      >
        <nav className={`container-site flex items-center justify-between transition-all duration-500 ${solid ? 'h-16 sm:h-[72px]' : 'h-20 sm:h-24'}`}>
          <a href="#home" aria-label="Rohokale Farm — home" onClick={() => setOpen(false)} className="relative z-10">
            <Logo tone={solid ? 'dark' : 'light'} animated compact={solid} />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href}
                  className={`link-draw mx-3 py-1 text-[15px] font-semibold transition-colors ${
                    solid ? 'text-forest/80 hover:text-forest' : 'text-cream-100/85 hover:text-white'
                  } ${active === item.href ? (solid ? '!text-forest' : '!text-white') : ''}`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={telHref(SITE.phones[0])}
              className={`hidden h-11 w-11 items-center justify-center rounded-full border transition-colors md:inline-flex ${
                solid ? 'border-forest/15 text-forest hover:bg-forest hover:text-cream-100' : 'border-white/30 text-white hover:bg-white/15'
              }`}
              aria-label={`Call ${SITE.phones[0]}`}
            >
              <Phone className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-primary hidden !py-3 sm:inline-flex">
              Get a Quote <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* animated hamburger */}
            <button
              onClick={() => setOpen((o) => !o)}
              className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
                solid ? 'bg-forest text-cream-100' : 'bg-white/15 text-white backdrop-blur'
              }`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span className="relative block h-3 w-5">
                <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 top-1.5 h-0.5 rounded bg-current transition-all duration-300 ${open ? 'w-0 opacity-0' : 'w-3.5'}`} />
                <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
              </span>
            </button>
          </div>
        </nav>
        {/* scroll progress */}
        <div className="h-[2px] origin-left bg-gradient-to-r from-leaf-500 via-keshar-500 to-onion-500" style={{ transform: `scaleX(${progress})` }} />
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 -z-10 bg-cream-100 transition-[clip-path] duration-700 ease-[cubic-bezier(.7,0,.2,1)] lg:hidden ${
          open ? '[clip-path:circle(150%_at_100%_0)]' : 'pointer-events-none [clip-path:circle(0%_at_100%_0)]'
        }`}
      >
        <div className="container-site flex h-full flex-col justify-between pb-10 pt-28">
          <ul className="space-y-1">
            {NAV.map((item, i) => (
              <li
                key={item.href}
                className="overflow-hidden"
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-baseline gap-4 py-2 font-display text-[2.6rem] font-medium leading-tight text-forest transition-all duration-700 ${
                    open ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: open ? `${150 + i * 70}ms` : '0ms' }}
                >
                  <span className="font-sans text-xs font-bold text-keshar-600">0{i + 1}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={`space-y-4 transition-all duration-700 ${open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
            style={{ transitionDelay: open ? '550ms' : '0ms' }}
          >
            <a href="#contact" onClick={() => setOpen(false)} className="btn-dark w-full">
              Get a Quote <ArrowUpRight className="h-4 w-4" />
            </a>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-semibold text-forest/70">
              {SITE.phones.map((p) => (
                <a key={p} href={telHref(p)}>
                  {p}
                </a>
              ))}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
