import React, { useState, useEffect } from 'react';
import { Sprout, Award, Truck, Droplets, Leaf, ChevronLeft, ChevronRight, Tractor } from 'lucide-react';


// Carousel images with your farm images
const carouselImages = [
  {
    url: '/images/mango3.png',
    alt: 'Premium Organic Mangoes',
    title: '100% Organic Keshar Mangoes',
    description: 'Multiple varieties of premium organic mangoes',
    tags: ['Organic Keshar', 'Multiple Varieties', 'Summer Harvest'],
  },
  {
    url: '/images/field.jpg',
    alt: 'Modern Farm Fields',
    title: 'Modern Agriculture',
    description: 'Advanced farming techniques with sustainable practices',
    tags: ['Modern Practices', 'Sustainable Farming', 'Technology Driven'],
  },
  {
    url: '/images/drip.jpg',
    alt: 'Drip Irrigation System',
    title: 'Advanced Irrigation',
    description: 'Water-efficient drip irrigation and sprinkler systems',
    tags: ['Drip Irrigation', 'Water Efficient', 'Smart Farming'],
  },
  {
    url: '/images/onion2.jpg',
    alt: 'Premium Onion Harvest',
    title: '55+ Tonnes Onions Annually',
    description: 'High-quality onion production with modern techniques',
    tags: ['55+ Tonnes Onion', 'Premium Quality', 'Annual Production'],
  },
  {
    url: '/images/lime.jpg',
    alt: 'Fresh Sweet Limes',
    title: '50+ Tonnes Fresh Sweet Limes Anually',
    description: 'Juicy and refreshing sweet limes grown organically',
    tags: ['Premium Sweet Limes', 'Juicy & Refreshing', 'Healthy Choice'],
  }
];

const Hero: React.FC = () => {

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const statsData = [
    // Slide 0: Mangoes
    [
      {
        icon: <Leaf className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />,
        value: "100%",
        label: "Organic Keshar",
      },
      {
        icon: <Sprout className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />,
        value: "Multiple",
        label: "Varieties",
      },
      {
        icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />,
        value: "Summer",
        label: "Harvest",
      },
    ],
    // Slide 1: Modern Agriculture
    [
      {
        icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />,
        value: "Modern",
        label: "Practices",
      },
      {
        icon: <Leaf className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />,
        value: "Sustainable",
        label: "Farming",
      },
      {
        icon: <Tractor className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />,
        value: "Technology",
        label: "Driven",
      },
    ],
    // Slide 2: Advanced Irrigation
    [
      {
        icon: <Droplets className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />,
        value: "Drip",
        label: "Irrigation",
      },
      {
        icon: <Sprout className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />,
        value: "Water",
        label: "Efficient",
      },
      {
        icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />,
        value: "Smart",
        label: "Farming",
      },
    ],
    // Slide 3: Onions
    [
      {
        icon: <Sprout className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />,
        value: "55+",
        label: "Tonnes Onion",
      },
      {
        icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />,
        value: "Premium",
        label: "Quality",
      },
      {
        icon: <Truck className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />,
        value: "10 Mon+",
        label: "shelf life",
      },
    ],
    // Slide 4: Sweet Limes
    [
      {
        icon: <Sprout className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />,
        value: "50+",
        label: "Tonnes Limes",
      },
      {
        icon: <Leaf className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />,
        value: "Juicy &",
        label: "Refreshing",
      },
      {
        icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />,
        value: "Healthy",
        label: "Choice",
      },
    ],
  ];

  const stats = statsData[current];

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <section id="home" className="relative min-h-[91vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
          </div>
        ))}
      </div>

      {/* Navigation Controls - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-200 group hidden sm:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-200 group hidden sm:block"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Dynamic Tags - Simplified for mobile */}
      {/* <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-20 flex flex-wrap gap-1 md:gap-2 justify-center max-w-xs sm:max-w-md md:max-w-4xl px-2 md:px-4">
        {carouselImages[current].tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="bg-green-600/90 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 md:px-4 md:py-2 rounded-full shadow-lg flex items-center gap-1 md:gap-2 uppercase tracking-wide border border-green-500/30 hover:bg-green-500/90 transition-all duration-200"
          >
            <span className="hidden sm:inline">
              {tag.includes('Irrigation') && <Droplets className="w-3 h-3 md:w-4 md:h-4" />}
              {tag.includes('Organic') && <Leaf className="w-3 h-3 md:w-4 md:h-4" />}
              {tag.includes('Modern') && <Award className="w-3 h-3 md:w-4 md:h-4" />}
              {tag.includes('Tonnes') && <Sprout className="w-3 h-3 md:w-4 md:h-4" />}
              {tag.includes('Quality') && <Award className="w-3 h-3 md:w-4 md:h-4" />}
            </span>
            <span className="text-xs md:text-sm">{tag.split(' ')[0]}</span>
          </span>
        ))}
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Dynamic Content Based on Current Slide */}
        <div className="mb-6 md:mb-12 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-2 md:mb-4 text-green-400 " >
            {carouselImages[current].title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed px-4 sm:px-0">
            {carouselImages[current].description}
          </p>
        </div>

        {/* Stats Grid - Redesigned */}
        <div className="flex justify-center gap-4 md:gap-8 max-w-xs sm:max-w-md md:max-w-4xl mx-auto mb-8 md:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-black/20 backdrop-blur-md rounded-xl p-2 md:p-6 text-center border border-white/10 transition-all duration-300 ease-in-out hover:border-emerald-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 w-24 sm:w-32 md:w-40 flex-shrink-0"
            >
              <div className="mb-2 md:mb-4 flex justify-center items-center h-10 md:h-12">
                {React.cloneElement(stat.icon, {
                  className: `${stat.icon.props.className} transition-transform duration-300 group-hover:scale-110`,
                })}
              </div>
              <p className="text-xs sm:text-lg md:text-2xl font-semibold text-white mb-1 md:mb-2">
                {stat.value}
              </p>
              <p className="text-[10px] md:text-sm font-medium text-gray-300 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 md:gap-4 justify-center items-center max-w-xs sm:max-w-md mx-auto">
          <a
            href="#products"
            className="group bg-green-600 hover:bg-green-700 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 w-full"
          >
            <Sprout className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
            <span className="text-sm md:text-base">Explore Products</span>
          </a>
          <a
            href="#contact"
            className="group border-2 border-white/50 hover:bg-white hover:text-gray-800 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-none transform hover:-translate-y-1 w-full text-center"
          >
            <span className="text-sm md:text-base">Get In Touch</span>
          </a>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            className={`relative w-6 sm:w-8 md:w-12 h-2 md:h-3 rounded-full transition-all duration-300 ${idx === current
              ? 'bg-green-500 shadow-lg'
              : 'bg-white/40 hover:bg-white/60'
              }`}
            onClick={() => goToSlide(idx)}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
            aria-label={`Go to slide ${idx + 1}`}
          >
            {idx === current && (
              <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator - Hidden on small mobile */}
      {/* <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1 md:gap-2 hidden sm:flex">
        <span className="text-white/70 text-xs md:text-sm font-medium">Scroll Down</span>
        <ArrowDown className="w-4 h-4 md:w-6 md:h-6 text-white/70 animate-bounce" />
      </div> */}

      {/* Play/Pause Control - Hidden on mobile */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-4 md:top-6 right-4 md:right-6 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 hidden sm:block"
        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isPlaying ? (
          <div className="w-3 h-3 md:w-4 md:h-4 flex gap-1">
            <div className="w-0.5 md:w-1 h-3 md:h-4 bg-current"></div>
            <div className="w-0.5 md:w-1 h-3 md:h-4 bg-current"></div>
          </div>
        ) : (
          <div className="w-3 h-3 md:w-4 md:h-4 border-l-2 md:border-l-4 border-l-current border-y-1 md:border-y-2 border-y-transparent border-r-0"></div>
        )}
      </button>

      {/* Mobile Touch Swipe Area - For better mobile UX */}
      <div className="absolute inset-0 z-20 sm:hidden"
        onTouchStart={(e) => {
          const touchStart = e.touches[0].clientX;
          const handleTouchEnd = (endEvent: TouchEvent) => {
            const touchEnd = endEvent.changedTouches[0].clientX;
            const diff = touchStart - touchEnd;
            if (Math.abs(diff) > 50) {
              if (diff > 0) {
                nextSlide();
              } else {
                prevSlide();
              }
            }
            document.removeEventListener('touchend', handleTouchEnd);
          };
          document.addEventListener('touchend', handleTouchEnd);
        }}
      />
    </section>
  );
};

export default Hero;