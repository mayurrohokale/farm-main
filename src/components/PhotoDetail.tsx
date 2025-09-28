import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, X, Camera, Grid3X3 } from 'lucide-react';

const PhotoDetail: React.FC = () => {
  const { category, photoId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);

  const images = [
    {
      id: 'onion2',
      src: '/images/onion2.jpg',
      alt: 'Premium onion harvest - 55+ tonnes annual production',
      category: 'Harvest',
      title: 'Premium Onion Harvest',
      description: 'Our premium onion harvest showcases the result of modern farming techniques and careful cultivation. With an annual production of over 55 tonnes, these onions represent the finest quality produce from our organic farm.'
    },
    {
      id: 'drip',
      src: '/images/drip.jpg',
      alt: 'Advanced drip irrigation system in action',
      category: 'Technology',
      title: 'Drip Irrigation System',
      description: 'Our state-of-the-art drip irrigation system ensures efficient water usage and optimal crop growth. This technology helps us maintain sustainable farming practices while maximizing yield.'
    },
    {
      id: 'image',
      src: '/images/mango3.png',
      alt: 'Organic Keshar mangoes on trees',
      category: 'Mango',
      title: 'Organic Keshar Mangoes',
      description: 'Our organic Keshar mangoes are grown without any chemical pesticides or fertilizers. These premium mangoes are known for their exceptional taste and nutritional value.'
    },
    {
      id: 'mango',
      src: '/images/mango1.jpeg',
      alt: 'Fresh ripe mangoes ready for harvest',
      category: 'Mango',
      title: 'Fresh Ripe Mangoes',
      description: 'These fresh ripe mangoes are harvested at the perfect time to ensure maximum sweetness and flavor. Our careful cultivation methods produce mangoes with exceptional taste and texture.'
    },
    {
      id: 'mango2',
      src: '/images/mango2.jpeg',
      alt: 'Premium quality mango varieties',
      category: 'Mango',
      title: 'Premium Mango Varieties',
      description: 'We cultivate multiple premium mango varieties to offer our customers the finest selection. Each variety is carefully tended to bring out its unique characteristics and flavors.'
    },
    {
      id: 'mosambi',
      src: '/images/mosambi_home_page.jpeg',
      alt: 'Fresh organic mosambi (sweet lime) harvest',
      category: 'Mosambi',
      title: 'Organic Mosambi',
      description: 'Our organic mosambi (sweet lime) is grown using natural farming methods. These citrus fruits are rich in vitamin C and have a refreshing sweet-tangy flavor perfect for fresh juice.'
    },
    {
      id: 'field',
      src: '/images/field.jpg',
      alt: 'Modern farm fields with advanced cultivation',
      category: 'Farm',
      title: 'Modern Farm Fields',
      description: 'Our modern farm fields utilize advanced cultivation techniques to ensure optimal crop growth and soil health. The systematic approach to farming helps us maintain high productivity.'
    },
    {
      id: 'green_onion',
      src: '/images/green_onion.jpg',
      alt: 'Fresh green onions ready for harvest',
      category: 'Harvest',
      title: 'Fresh Green Onions',
      description: 'Fresh green onions harvested at the perfect time to ensure maximum flavor and nutritional content. These are grown using organic methods and sustainable farming practices.'
    },
    {
      id: 'brinjal',
      src: '/images/brinjal.jpg',
      alt: 'Organic brinjal cultivation',
      category: 'Vegetables',
      title: 'Organic Brinjal',
      description: 'Our organic brinjal cultivation follows traditional methods combined with modern techniques to produce healthy, chemical-free vegetables for our customers.'
    },
    {
      id: 'seeds',
      src: '/images/seeds.jpg',
      alt: 'Premium quality onion seeds',
      category: 'Seeds',
      title: 'Premium Seeds',
      description: 'High-quality seeds are the foundation of our successful farming. We carefully select and store premium seeds to ensure the best possible crop yield and quality.'
    },
    {
      id: 'jowar',
      src: '/images/jowar.jpg',
      alt: 'Traditional jowar (sorghum) cultivation',
      category: 'Grains',
      title: 'Jowar Cultivation',
      description: 'Traditional jowar cultivation using time-tested methods. This drought-resistant crop is an important part of our sustainable farming approach.'
    },
    {
      id: 'bajra',
      src: '/images/bajra.jpg',
      alt: 'Bajra (pearl millet) farming',
      category: 'Grains',
      title: 'Bajra Farming',
      description: 'Bajra farming represents our commitment to growing nutritious grains. This hardy crop thrives in our climate and provides excellent nutritional value.'
    },
    {
      id: 'moong',
      src: '/images/moong.jpg',
      alt: 'Green gram (moong) harvest',
      category: 'Grains',
      title: 'Green Gram Harvest',
      description: 'Our green gram harvest showcases the success of our organic farming methods. These protein-rich legumes are grown without any chemical inputs.'
    }
  ];

  // Find the current photo and related photos
  const currentPhoto = images.find(img => img.id === photoId);
  const relatedPhotos = category && category !== 'all' 
    ? images.filter(img => img.category === category)
    : images;

  useEffect(() => {
    if (currentPhoto) {
      const currentIndex = relatedPhotos.findIndex(img => img.id === currentPhoto.id);
      setSelectedImage(currentIndex >= 0 ? currentIndex : 0);
    }
  }, [photoId, category]);

  if (!currentPhoto) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Photo not found</h2>
          <button
            onClick={() => navigate(-1)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const openModal = (index: number) => {
    setSelectedImage(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % relatedPhotos.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => prev === 0 ? relatedPhotos.length - 1 : prev - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50/20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Camera className="w-4 h-4" />
              {category && category !== 'all' ? category : 'All Photos'} • {relatedPhotos.length} photos
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Photo Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Photo */}
            <div className="relative">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                className="w-full h-96 lg:h-full object-cover cursor-pointer"
                onClick={() => openModal(selectedImage)}
              />
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-2 rounded-full text-sm font-semibold">
                {currentPhoto.category}
              </div>
            </div>
            
            {/* Details */}
            <div className="p-8 lg:p-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                {currentPhoto.title}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {currentPhoto.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gray-500">Category:</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {currentPhoto.category}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gray-500">Farm:</span>
                  <span className="text-gray-700">Rohokale Organic Farm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Photos Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Related Photos {category && category !== 'all' && `in ${category}`}
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Grid3X3 className="w-4 h-4" />
              {relatedPhotos.length} photos
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {relatedPhotos.map((image, index) => (
              <div
                key={image.id}
                className={`group relative cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  image.id === currentPhoto.id ? 'ring-2 ring-green-500' : ''
                }`}
                onClick={() => {
                  if (image.id !== currentPhoto.id) {
                    navigate(`/photo/${image.category}/${image.id}`);
                  } else {
                    openModal(index);
                  }
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-medium truncate">
                      {image.title}
                    </p>
                  </div>
                </div>
                {image.id === currentPhoto.id && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
                    <Camera className="w-3 h-3" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="flex items-center justify-center h-full">
              <img
                src={relatedPhotos[selectedImage]?.src}
                alt={relatedPhotos[selectedImage]?.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            </div>
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-green-600 px-3 py-2 rounded-full text-sm font-semibold">
                  {relatedPhotos[selectedImage]?.category}
                </span>
                <span className="text-sm opacity-75">
                  {selectedImage + 1} of {relatedPhotos.length}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{relatedPhotos[selectedImage]?.title}</h3>
              <p className="text-sm opacity-90">{relatedPhotos[selectedImage]?.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoDetail;