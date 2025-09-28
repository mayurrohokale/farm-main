import React, { useState } from 'react';
import { Leaf, Star, Award, Droplets, Shield, Sprout, ChevronRight, Eye } from 'lucide-react';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', count: 7 },
    { id: 'vegetables', name: 'Vegetables', count: 2 },
    { id: 'grains', name: 'Grains & Millets', count: 3 },
    { id: 'fruits', name: 'Fruits', count: 1 },
    { id: 'seeds', name: 'Seeds', count: 1 }
  ];

  const products = [
    {
      name: 'Premium Onions',
      description: 'High-quality onions with annual production of up to 55 tonnes. Fresh, organic, and directly from our farm using modern agricultural practices.',
      image: '/images/onion2.jpg',
      features: ['55+ tonnes/year', '10 Month+ shelf life', 'Multiple varieties', 'high yeild production', 'Modern farming'],
      highlight: true, // Featured
      category: 'vegetables',
      price: 'Contact for pricing',
      availability: 'Year-round'
    },
    {
      name: 'Organic Keshar Mangoes',
      description: 'Premium quality Keshar mangoes grown organically. Multiple varieties available during summer season with exceptional taste and quality.',
      image: '/images/mango3.png',
      features: [ '100% organic','Multiple varieties', 'Summer harvest', 'Premium quality', 'Rich in vitamin C'],
      category: 'fruits',
      price: 'Seasonal pricing',
      availability: 'Summer season'
    },
    {
      name: 'Sweet lime',
      description: 'Juicy and refreshing sweet limes grown with organic practices. Perfect for fresh consumption and rich in vitamin C.',
      image: '/images/lime2.jpg',
      features: ['Premium quality', 'Rich in vitamin C', '50+ tonnes/year', 'Juicy and refreshing', 'modern practices'],
      highlight: true, // Featured
      category: 'fruits',
      price: 'Contact for pricing',
      availability: 'Available'
    },
    {
      name: 'Premium Onion Seeds',
      description: 'High-quality onion seeds and crops for farming. Carefully selected varieties with high yield potential and disease resistance.',
      image: '/images/onion-seeds.png',
      features: ['High germination rate', 'Disease resistant', 'Premium quality', 'Expert selection'],
      category: 'seeds',
      price: 'Contact for booking',
      availability: 'Available'
    },
    {
      name: 'Jowar (Sorghum)',
      description: 'Traditional millet grain packed with nutrition. Drought-resistant crop grown with organic methods, perfect for health-conscious consumers.',
      image: '/images/jowar.png',
      features: ['Gluten-free', 'High protein', 'Drought resistant', 'Traditional farming'],
      category: 'grains',
      price: 'Seasonal pricing',
      availability: 'Available'
    },
    {
      name: 'Bajra (Pearl Millet)',
      description: 'Nutritious pearl millet rich in iron and fiber. Grown sustainably for health-conscious consumers with traditional organic methods.',
      image: '/images/bajara.png',
      features: ['Iron rich', 'High fiber', 'Sustainable crop', 'Nutrient dense'],
      category: 'grains',
      price: 'Seasonal pricing',
      availability: 'Available'
    },
    // {
    //   name: 'Green Gram (Moong)',
    //   description: 'High-protein green gram beans perfect for various culinary uses. Grown organically with traditional farming methods.',
    //   image: '/images/moong.jpg',
    //   features: ['High protein', 'Organic farming', 'Traditional methods', 'Versatile use'],
    //   category: 'grains',
    //   price: '₹120-150/kg',
    //   availability: 'Available'
    // }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  const getIcon = (feature: string) => {
    const lowerFeature = feature.toLowerCase();
    if (lowerFeature.includes('organic') || lowerFeature.includes('vitamin')) return <Leaf className="w-4 h-4 text-green-600" />;
    if (lowerFeature.includes('tonnes') || lowerFeature.includes('quality') || lowerFeature.includes('protein') || lowerFeature.includes('iron')) return <Award className="w-4 h-4 text-orange-600" />;
    if (lowerFeature.includes('resistant') || lowerFeature.includes('shelf life') || lowerFeature.includes('chemical-free')) return <Shield className="w-4 h-4 text-blue-600" />;
    if (lowerFeature.includes('modern') || lowerFeature.includes('varieties') || lowerFeature.includes('harvest') || lowerFeature.includes('farming')) return <Sprout className="w-4 h-4 text-purple-600" />;
    return <Droplets className="w-4 h-4 text-cyan-600" />;
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Sprout className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Our Premium <span className="text-green-600">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Farm-fresh, organic produce grown with modern sustainable practices. From our fields to your table,
            experience the difference of authentic organic farming at Rohokale Farm.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${activeCategory === category.id
                ? 'bg-green-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-sm'
                }`}
            >
              {category.name}
              <span className={`text-xs px-2 py-1 rounded-full ${activeCategory === category.id
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-600'
                }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 flex flex-col ${product.highlight ? 'ring-2 ring-green-500 relative' : ''
                }`}
            >
              {product.highlight && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Featured Product
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Organic Badge */}
                <div className="absolute top-4 right-4 bg-green-600/90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs font-semibold flex items-center gap-1">
                  {getIcon(product.features[0])}
                  {product.features[0]}
                </div>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4" />
                    Quick View
                  </button>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                      {product.availability}
                    </span>
                    <span className="text-green-600 font-bold">{product.price}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6 flex-grow">
                  {product.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      {getIcon(feature)}
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                  {product.features.length > 3 && (
                    <div className="text-green-600 text-sm font-medium">
                      +{product.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Action Buttons - Now at the bottom */}
                <div className="flex gap-3 mt-auto">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                    Inquire Now
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="p-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-xl transition-all duration-300">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

          ))}
        </div>

        {/* Custom Orders Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Custom Orders & Bulk Supply
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              We specialize in bulk supply for restaurants, retailers, and distributors.
              Get competitive pricing, custom packaging, and reliable delivery schedules tailored to your business needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
              >
                <Sprout className="w-5 h-5" />
                Contact for Custom Orders
              </a>
              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Call Now: +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;