// Single source of truth for business details used across the site.
export const SITE = {
  name: 'Rohokale Farm',
  tagline: 'Generations of Quality',
  phones: ['+91 9284659472', '+91 7020595294'],
  email: 'info@rohokalefarm.com',
  hours: ['Mon – Sat: 6:00 AM – 6:00 PM', 'Sunday: urgent calls only'],
};

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, '')}`;
export const waHref = (phone: string, text = 'Hello Rohokale Farm, I would like to enquire about your produce.') =>
  `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;

export type ProductCategory = 'vegetables' | 'fruits' | 'grains' | 'seeds';

export interface Product {
  id: string;
  name: string;
  local?: string;
  description: string;
  image: string;
  features: string[];
  category: ProductCategory;
  season: string;
  stat?: string;
  featured?: boolean;
  accent: 'onion' | 'keshar' | 'leaf' | 'soil';
}

export const PRODUCTS: Product[] = [
  {
    id: 'onions',
    name: 'Premium Onions',
    local: 'Kanda',
    description: 'Firm, deep-red onions grown from authentic seed with modern practices, and stored in ventilated sheds for a 10+ month shelf life.',
    image: '/img/onion3',
    features: ['55+ tonnes / year', '10+ month shelf life', 'Multiple varieties'],
    category: 'vegetables',
    season: 'Year-round',
    stat: '55+ t',
    featured: true,
    accent: 'onion',
  },
  {
    id: 'mangoes',
    name: 'Organic Keshar Mangoes',
    local: 'Kesar Amba',
    description: 'Chemical-free Keshar and other varieties, naturally ripened for the saffron-sweet flavour Marathwada is known for.',
    image: '/img/mango',
    features: ['100% organic', 'Naturally ripened', 'Summer harvest'],
    category: 'fruits',
    season: 'Summer',
    stat: '100%',
    featured: true,
    accent: 'keshar',
  },
  {
    id: 'sweet-lime',
    name: 'Sweet Lime',
    local: 'Mosambi',
    description: 'Juicy, refreshing mosambi rich in vitamin C, grown on drip irrigation with careful quality control.',
    image: '/img/lime2',
    features: ['50+ tonnes / year', 'Rich in vitamin C', 'Juicy & refreshing'],
    category: 'fruits',
    season: 'Available',
    stat: '50+ t',
    accent: 'leaf',
  },
  {
    id: 'onion-seeds',
    name: 'Premium Onion Seeds',
    description: 'Hand-selected, high-germination onion seed with strong disease resistance — the same seed we trust in our own fields.',
    image: '/img/onion-seeds-hand',
    features: ['High germination', 'Disease resistant', 'Expert selection'],
    category: 'seeds',
    season: 'Book in advance',
    accent: 'soil',
  },
  {
    id: 'wheat',
    name: 'Wheat',
    local: 'Gahu',
    description: 'Rabi-season wheat grown on our own fields, harvested when the ears turn golden.',
    image: '/img/wheat-field',
    features: ['Rabi harvest', 'Farm-fresh grain', 'Bulk enquiries welcome'],
    category: 'grains',
    season: 'Rabi season',
    accent: 'keshar',
  },
  {
    id: 'jowar',
    name: 'Jowar',
    local: 'Sorghum',
    description: 'Traditional, drought-hardy millet — naturally gluten-free and high in protein.',
    image: '/img/jowar',
    features: ['Gluten-free', 'High protein', 'Traditional farming'],
    category: 'grains',
    season: 'Seasonal',
    accent: 'soil',
  },
  {
    id: 'bajra',
    name: 'Bajra',
    local: 'Pearl Millet',
    description: 'Iron- and fibre-rich pearl millet, grown sustainably using time-tested methods.',
    image: '/img/bajara',
    features: ['Iron rich', 'High fibre', 'Sustainable crop'],
    category: 'grains',
    season: 'Seasonal',
    accent: 'soil',
  },
];

export const FARMS = [
  {
    name: 'Sarola Advai',
    label: 'Farm 01',
    address: 'Bhoyare Pathar Rd, Bhoyare Pathar, Daithane Gunjal, Maharashtra 414103',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d910.843916131635!2d74.5492356476885!3d19.06192964998887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcc9fa343c85db%3A0xd69c2b5aeb588e15!2sRohokale%20Farm!5e1!3m2!1sen!2sin!4v1759071598187!5m2!1sen!2sin',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=19.061928,74.550333',
    grows: ['Premium Onions', 'Drip Irrigation', 'Visitor Center'],
    coordinates: '19.061928, 74.550333',
  },
  {
    name: 'Talpimpri',
    label: 'Farm 02',
    address: 'Near M55C+5HQ Talpimpri, Sambhajinagar, Maharashtra',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1168.938980125049!2d75.17076141777541!3d19.658015632004204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDM5JzI4LjciTiA3NcKwMTAnMTcuMyJF!5e1!3m2!1sen!2sin!4v1759053703222!5m2!1sen!2sin',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=19.658016,75.170761',
    grows: ['Sweet Lime', 'Organic Mangoes', 'Modern Agriculture'],
    coordinates: '19.658016, 75.170761',
  },
];

/** Lets product cards pre-fill the contact form. */
export const INQUIRE_EVENT = 'rf:inquire';
export const inquireAbout = (product: string) => {
  window.dispatchEvent(new CustomEvent(INQUIRE_EVENT, { detail: product }));
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};
