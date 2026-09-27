import React, { useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Navigation, Phone, Send } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { FARMS, INQUIRE_EVENT, SITE, telHref, waHref } from '../lib/site';

const SUBJECTS = ['Product enquiry', 'Bulk order (500 kg+)', 'Custom order', 'Wholesale partnership', 'Farm visit', 'Something else'];

type Form = { name: string; phone: string; email: string; subject: string; product: string; message: string };
const EMPTY: Form = { name: '', phone: '', email: '', subject: '', product: '', message: '' };

const Field: React.FC<{
  id: keyof Form;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}> = ({ id, label, value, onChange, type = 'text', required, textarea }) => {
  const cls =
    'peer w-full rounded-2xl border-2 border-forest/10 bg-cream-50 px-4 pb-2.5 pt-6 text-[15px] text-forest outline-none transition-all duration-300 placeholder:text-transparent hover:border-forest/25 focus:border-leaf-600 focus:bg-white focus:shadow-[0_0_0_4px_rgba(47,125,58,.12)]';
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={id} name={id} rows={5} value={value} onChange={onChange} required={required} placeholder={label} className={`${cls} resize-none`} />
      ) : (
        <input id={id} name={id} type={type} value={value} onChange={onChange} required={required} placeholder={label} className={cls} />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-[11px] font-bold uppercase tracking-wider text-leaf-700 transition-all duration-200 peer-placeholder-shown:top-[1.1rem] peer-placeholder-shown:text-[15px] peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-forest/50 peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-leaf-700"
      >
        {label}
        {required && ' *'}
      </label>
    </div>
  );
};

const Contact: React.FC = () => {
  const [form, setForm] = useState<Form>(EMPTY);
  const [sent, setSent] = useState(false);
  const [flash, setFlash] = useState(false);

  // Product cards dispatch this to pre-fill the form.
  useEffect(() => {
    const onInquire = (e: Event) => {
      const product = (e as CustomEvent<string>).detail;
      setForm((f) => ({
        ...f,
        product,
        subject: product === 'Bulk order' ? SUBJECTS[1] : SUBJECTS[0],
        message: f.message || (product === 'Bulk order' ? 'Hello, I would like a quote for a bulk order of ' : `Hello, I am interested in your ${product.toLowerCase()}. `),
      }));
      setSent(false);
      setFlash(true);
      setTimeout(() => setFlash(false), 1400);
    };
    window.addEventListener(INQUIRE_EVENT, onInquire);
    return () => window.removeEventListener(INQUIRE_EVENT, onInquire);
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const body = () =>
    [
      `Name: ${form.name}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.email ? `Email: ${form.email}` : null,
      `Enquiry: ${form.subject}${form.product && form.product !== 'Bulk order' ? ` — ${form.product}` : ''}`,
      '',
      form.message,
    ]
      .filter((l): l is string => typeof l === 'string')
      .join('\n');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `${form.subject || 'Enquiry'} — ${form.name}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body())}`;
    setSent(true);
  };

  const INFO = [
    { icon: Phone, title: 'Call us', lines: SITE.phones.map((p) => ({ text: p, href: telHref(p) })) },
    { icon: Mail, title: 'Email', lines: [{ text: SITE.email, href: `mailto:${SITE.email}` }] },
    { icon: Clock, title: 'Hours', lines: SITE.hours.map((h) => ({ text: h, href: '' })) },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-cream-200/60 py-20 sm:py-28 lg:py-32">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: intro + info */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Get in touch"
              title="Let’s talk about your next order."
              accent={[4, 5]}
              intro="Bulk orders, custom packing, seasonal availability or a visit to the farm — send us a message and we’ll get back to you within a day."
            />
            <div className="mt-10 space-y-4">
              {INFO.map(({ icon: Icon, title, lines }, i) => (
                <div
                  key={title}
                  data-reveal="left"
                  style={{ '--d': `${i * 100}ms` } as React.CSSProperties}
                  className="group flex items-start gap-4 rounded-2xl bg-cream-50 p-5 ring-1 ring-forest/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest text-keshar-400 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-leaf-700">{title}</p>
                    {lines.map((l) =>
                      l.href ? (
                        <a key={l.text} href={l.href} className="link-draw mt-1 block break-words font-semibold text-forest">
                          {l.text}
                        </a>
                      ) : (
                        <p key={l.text} className="mt-1 text-sm text-ink/70">
                          {l.text}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
            <a
              data-reveal="up"
              href={waHref(SITE.phones[0])}
              target="_blank"
              rel="noreferrer"
              className="btn mt-6 w-full bg-[#1f8f4e] text-white hover:-translate-y-0.5 hover:shadow-lift sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <div
              data-reveal="up"
              className={`relative rounded-[2rem] bg-cream-50 p-6 shadow-lift ring-1 ring-forest/5 transition-shadow duration-500 sm:p-10 ${
                flash ? 'ring-4 ring-keshar-400' : ''
              }`}
            >
              {sent ? (
                <div className="lb-in flex min-h-[460px] flex-col items-center justify-center text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-leaf-100 text-leaf-700">
                    <CheckCircle2 className="h-10 w-10" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-semibold text-forest">Your email is ready to send</h3>
                  <p className="mt-3 max-w-sm text-ink/65">
                    We opened your email app with the details filled in — just press send. Prefer WhatsApp or a call? That works too.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a href={waHref(SITE.phones[0], body())} target="_blank" rel="noreferrer" className="btn-dark">
                      <MessageCircle className="h-4 w-4" /> Send on WhatsApp instead
                    </a>
                    <button onClick={() => (setSent(false), setForm(EMPTY))} className="btn-outline">
                      New message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-forest sm:text-3xl">Send an enquiry</h3>
                      <p className="mt-1 text-sm text-ink/60">We usually reply within 24 hours.</p>
                    </div>
                    {form.product && (
                      <span className="lb-in shrink-0 rounded-full bg-keshar-100 px-3 py-1.5 text-xs font-bold text-keshar-700">{form.product}</span>
                    )}
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field id="name" label="Full name" value={form.name} onChange={onChange} required />
                    <Field id="phone" label="Phone" type="tel" value={form.phone} onChange={onChange} required />
                  </div>
                  <Field id="email" label="Email (optional)" type="email" value={form.email} onChange={onChange} />
                  <div>
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-forest/60">What’s it about? *</p>
                    <div className="flex flex-wrap gap-2">
                      {SUBJECTS.map((s) => (
                        <label key={s} className="cursor-pointer">
                          <input type="radio" name="subject" value={s} checked={form.subject === s} onChange={onChange} required className="peer sr-only" />
                          <span className="inline-block rounded-full border-2 border-forest/10 px-4 py-2 text-sm font-semibold text-forest/75 transition-all duration-200 hover:border-forest/30 peer-checked:border-forest peer-checked:bg-forest peer-checked:text-cream-100 peer-focus-visible:ring-2 peer-focus-visible:ring-keshar-500">
                            {s}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <Field id="message" label="Your message — quantities, dates, delivery location…" value={form.message} onChange={onChange} required textarea />
                  <button type="submit" className="btn-primary group w-full !py-4">
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                    Send enquiry
                  </button>
                  <p className="text-center text-xs text-ink/50">Opens your email app with everything filled in. Nothing is stored on this website.</p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Farm locations */}
        <div id="visit" className="mt-24 lg:mt-32">
          <SectionHeading
            eyebrow="Visit us"
            title="Two farms, one standard of quality."
            accent={[1]}
            intro="See our fields and irrigation in person. Visits are Monday to Saturday, 9 AM – 4 PM — please call ahead so we can show you around."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {FARMS.map((farm, i) => (
              <article
                key={farm.name}
                data-reveal="up"
                style={{ '--d': `${i * 150}ms` } as React.CSSProperties}
                className="group overflow-hidden rounded-[1.75rem] bg-cream-50 shadow-soft ring-1 ring-forest/5 transition-shadow duration-500 hover:shadow-lift"
              >
                <div className="relative h-64 overflow-hidden bg-cream-200 sm:h-72">
                  <iframe
                    src={farm.mapSrc}
                    title={`Map of ${farm.name} farm`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="h-full w-full border-0 grayscale-[35%] transition-all duration-700 group-hover:grayscale-0"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-forest px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-keshar-400">{farm.label}</span>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-2xl font-semibold text-forest">{farm.name}</h3>
                  <p className="mt-2 flex items-start gap-2 text-sm text-ink/65">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" />
                    {farm.address}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {farm.grows.map((g) => (
                      <span key={g} className="rounded-full bg-leaf-50 px-3 py-1 text-xs font-semibold text-leaf-700 ring-1 ring-leaf-200">
                        {g}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-forest/10 pt-5">
                    <span className="flex items-center gap-2 font-mono text-xs text-ink/50">
                      <Navigation className="h-3.5 w-3.5" /> {farm.coordinates}
                    </span>
                    <a href={farm.directions} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-leaf-700 hover:text-forest">
                      Get directions <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
