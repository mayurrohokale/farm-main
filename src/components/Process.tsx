import React from 'react';
import { PackageCheck, Sprout, Sun, Truck } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Picture from './ui/Picture';
import { useInView } from '../lib/motion';

const STEPS = [
  { icon: Sprout, title: 'Select the seed', text: 'Authentic, high-germination seed chosen for our soil and climate.', img: '/img/onion-seeds' },
  { icon: Sun, title: 'Grow with care', text: 'Drip-irrigated rows, balanced nutrition and daily attention in the field.', img: '/img/green_onion' },
  { icon: PackageCheck, title: 'Harvest & sort', text: 'Picked at the right time, then graded and sorted by hand for quality.', img: '/img/onion2' },
  { icon: Truck, title: 'Store & deliver', text: 'Stored in ventilated sheds and packed to order for our buyers.', img: '/img/1682310464179' },
];

const Process: React.FC = () => {
  const { ref, inView } = useInView<HTMLOListElement>(0.25);

  return (
    <section className="relative overflow-hidden bg-forest py-20 text-cream-100 grain sm:py-28">
      <div className="container-site relative">
        <SectionHeading
          tone="light"
          eyebrow="Seed to shipment"
          title="How our produce reaches you."
          accent={[4]}
          intro="Four simple steps, done carefully — the same way every season."
        />

        <ol ref={ref} className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {/* connecting line that draws across on scroll (desktop) */}
          <span aria-hidden="true" className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block">
            <span
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-keshar-500 to-leaf-300 transition-[width] duration-[2000ms] ease-out"
              style={{ width: inView ? '100%' : '0%' }}
            />
          </span>
          {STEPS.map(({ icon: Icon, title, text, img }, i) => (
            <li key={title} data-reveal="up" style={{ '--d': `${i * 180}ms` } as React.CSSProperties} className="group relative">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-forest text-keshar-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-keshar-500 group-hover:text-forest">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl">
                <Picture base={img} alt="" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110" sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 90vw" />
              </div>
              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-display text-sm italic text-keshar-400">0{i + 1}</span>
                <h3 className="font-display text-2xl font-semibold">{title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-cream-100/65">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
