import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, ZoomIn, Grid3X3, Filter } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const images = [
    {
      src: '/images/onion2.jpg',
      alt: 'Premium onion harvest - 55+ tonnes annual production',
      category: 'Harvest',
      title: 'Premium Onion Harvest'
    },
    {
      src: '/images/drip.jpg',
      alt: 'Advanced drip irrigation system in action',
      category: 'Technology',
      title: 'Drip Irrigation System'
    },
    {
      src: '/images/image.png',
      alt: 'Organic Keshar mangoes on trees',
      category: 'Fruits',
      title: 'Organic Keshar Mangoes'
    },
    {
      src: '/images/field.jpg',
      alt: 'Modern farm fields with advanced cultivation',
      category: 'Farm',
      title: 'Modern Farm Fields'
    },
    {
      src: '/images/green_onion.jpg',
      alt: 'Fresh green onions ready for harvest',
      category: 'Harvest',
      title: 'Fresh Green Onions'
    },
    {
      src: '/images/brinjal.jpg',
      alt: 'Organic brinjal cultivation',
      category: 'Vegetables',
      title: 'Organic Brinjal'
    },
    {
      src: '/images/seeds.jpg',
      alt: 'Premium quality onion seeds',
      category: 'Seeds',
      title: 'Premium Seeds'
    },
    {
      src: '/images/jowar.jpg',
      alt: 'Traditional jowar (sorghum) cultivation',
      category: 'Grains',
      title: 'Jowar Cultivation'
    },
    {
      src: '/images/bajra.jpg',
      alt: 'Bajra (pearl millet) farming',
      category: 'Grains',
      title: 'Bajra Farming'
    },
    {
      src: '/images/moong.jpg',
      alt: 'Green gram (moong) harvest',
      category: 'Grains',
      title: 'Green Gram Harvest'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', count: images.length },
    { id: 'Harvest', name: 'Harvest', count: images.filter(img => img.category === 'Harvest').length },
    { id: 'Technology', name: 'Technology', count: images.filter(img => img.category === 'Technology').length },
    { id: 'Fruits', name: 'Fruits', count: images.filter(img => img.category === 'Fruits').length },
    { id: 'Vegetables', name: 'Vegetables', count: images.filter(img => img.category === 'Vegetables').length },
    { id: 'Grains', name: 'Grains', count: images.filter(img => img.category === 'Grains').length },
    { id: 'Seeds', name: 'Seeds', count: images.filter(img => img.category === 'Seeds').length },
    { id: 'Farm', name: 'Farm', count: images.filter(img => img.category === 'Farm').length }
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(image => image.category === activeFilter);

  const openModal = (index: number) => {
    const actualIndex = activeFilter === 'all' ? index : images.findIndex(img => img === filteredImages[index]);
    setSelectedImage(actualIndex);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowRight') nextImage();
    if (event.key === 'ArrowLeft') prevImage();
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-green-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Camera className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Farm <span className="text-green-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our farming journey through stunning visuals. From our modern irrigation systems to bountiful harvests, 
            witness the dedication and innovation behind every crop at Rohokale Farm.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`group flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-green-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-sm border border-gray-200'
              }`}
            >
              <Filter className="w-4 h-4" />
              {category.name}
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeFilter === category.id
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-600 group-hover:bg-green-200'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-2xl p-6 mb-12 shadow-lg border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-1">{images.length}</div>
              <div className="text-gray-600 font-medium">Total Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-1">55+</div>
              <div className="text-gray-600 font-medium">Tonnes/Year</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-gray-600 font-medium">Organic</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-1">Modern</div>
              <div className="text-gray-600 font-medium">Technology</div>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-green-600/90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {image.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
            <Grid3X3 className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-2">Want to See More?</h3>
            <p className="text-green-100 mb-6">
              Visit our farm to experience the beauty of organic farming firsthand
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Camera className="w-5 h-5" />
              Schedule Farm Visit
            </a>
          </div>
        </div>

        {/* Enhanced Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-6xl max-h-full w-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="flex items-center justify-center h-full">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                />
              </div>
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-green-600 px-3 py-2 rounded-full text-sm font-semibold">
                    {images[selectedImage].category}
                  </span>
                  <span className="text-sm opacity-75">
                    {selectedImage + 1} of {images.length}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{images[selectedImage].title}</h3>
                <p className="text-sm opacity-90">{images[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;