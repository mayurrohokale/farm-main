import React from 'react';
import { ArrowUpRight, Droplets, Leaf, ShieldCheck, Sprout } from 'lucide-react';
import Picture from './ui/Picture';
import SectionHeading from './ui/SectionHeading';
import { useParallax } from '../lib/motion';

const PILLARS = [
  {
    icon: Sprout,
    title: 'Authentic seed',
    text: 'Every onion starts from seed we select and trust — for better yield, colour and disease resistance.',
  },
  {
    icon: Droplets,
    title: 'Drip & sprinkler irrigation',
    text: 'Water goes straight to the roots. Less waste, healthier plants, steadier harvests through dry months.',
  },
  {
    icon: Leaf,
    title: 'Chemical-free mangoes',
    text: 'Our Keshar orchard is grown 100% organically and ripened naturally — the way mangoes should taste.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality at every step',
    text: 'From sowing to sorting to storage, we check the produce ourselves before it ever leaves the farm.',
  },
];

const About: React.FC = () => {
  const backImg = useParallax<HTMLDivElement>(-0.08);
  const frontImg = useParallax<HTMLDivElement>(0.12);

  return (
    <section id="about" className="relative overflow-hidden bg-cream-100 py-20 sm:py-28 lg:py-36">
      {/* decorative contour lines */}
      <svg className="pointer-events-none absolute -right-40 top-10 h-[560px] w-[560px] text-leaf-600/[0.07]" viewBox="0 0 200 200" aria-hidden="true">
        {[...Array(9)].map((_, i) => (
          <circle key={i} cx="100" cy="100" r={20 + i * 10} fill="none" stroke="currentColor" strokeWidth="1" />
        ))}
      </svg>

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Image collage */}
        <div className="relative order-2 lg:order-1 lg:col-span-6">
          <div className="relative mx-auto aspect-[4/5] max-w-md sm:max-w-lg lg:max-w-none">
            <div ref={backImg} className="absolute left-0 top-0 h-[78%] w-[74%]">
              <div data-reveal="clip" className="h-full w-full overflow-hidden rounded-[1.5rem] shadow-lift">
                <Picture base="/img/field" alt="Field prepared for sowing, with farmers at work" className="h-full w-full object-cover" sizes="(min-width:1024px) 40vw, 80vw" />
              </div>
            </div>
            <div ref={frontImg} className="absolute bottom-0 right-0 h-[58%] w-[56%]">
              <div
                data-reveal="clip"
                style={{ '--d': '250ms' } as React.CSSProperties}
                className="h-full w-full overflow-hidden rounded-[1.5rem] border-[6px] border-cream-100 shadow-lift"
              >
                <Picture base="/img/onion" alt="A freshly harvested red onion held in hand" className="h-full w-full object-cover" sizes="(min-width:1024px) 30vw, 60vw" />
              </div>
            </div>
            {/* floating badge */}
            <div
              data-reveal="zoom"
              style={{ '--d': '500ms' } as React.CSSProperties}
              className="absolute bottom-[12%] left-[4%] z-10 animate-floaty rounded-2xl bg-forest p-4 text-cream-100 shadow-lift sm:p-5"
            >
              <div className="font-display text-3xl font-semibold sm:text-4xl">
                10<span className="text-keshar-400">+</span>
              </div>
              <div className="mt-1 max-w-[9rem] text-xs leading-snug text-cream-100/75">months shelf life on our stored onions</div>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="order-1 lg:order-2 lg:col-span-6 lg:pl-8">
          <SectionHeading
            eyebrow="Our story"
            title="A family farm that grows quality, season after season."
            accent={[5, 6]}
            intro="Rohokale Farm is a family-run farm across two locations in Maharashtra. We pair what generations of farming have taught us with modern tools like drip irrigation and authentic seed — so every onion, mango and sweet lime we send out is one we’re proud of."
          />

          <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {PILLARS.map(({ icon: Icon, title, text }, i) => (
              <div key={title} data-reveal="up" style={{ '--d': `${150 + i * 100}ms` } as React.CSSProperties} className="group">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-700 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-forest group-hover:text-keshar-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-forest">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{text}</p>
              </div>
            ))}
          </div>

          <div data-reveal="up" className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#products" className="btn-dark">
              See what we grow <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#visit" className="btn-outline">
              Plan a farm visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
