import React from 'react';
import {  Heart, Globe, TrendingUp, Droplets, Sprout, Award, Shield, Target, BarChart3 } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Sprout className="w-10 h-10 text-green-600" />,
      title: 'Modern Agriculture',
      description: 'State-of-the-art drip irrigation, sprinklers, and modern farming techniques for optimal yield and quality.',
      color: 'bg-green-50 border-green-200'
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: '100% Organic',
      description: 'Chemical-free cultivation with organic fertilizers and natural pest management for healthier produce.',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-orange-600" />,
      title: 'Premium Quality',
      description: 'Producing 55+ tonnes of premium onions annually along with diverse crops like Keshar mangoes and vegetables.',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      icon: <Globe className="w-10 h-10 text-purple-600" />,
      title: 'Sustainable Future',
      description: 'Environmental stewardship through water conservation, soil health, and sustainable farming practices.',
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const stats = [
    { number: '55+', label: 'Tonnes Onions/Year', icon: <Sprout className="w-6 h-6" /> },
    { number: '100%', label: 'Organic Products', icon: <Heart className="w-6 h-6" /> },
    { number: '10+', label: 'Crop Varieties', icon: <Award className="w-6 h-6" /> },
    { number: '24/7', label: 'Water Efficient', icon: <Droplets className="w-6 h-6" /> },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Sprout className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            About <span className="text-green-600">Rohokale Farm</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Where tradition meets innovation. We combine time-tested farming wisdom with cutting-edge agricultural technology to deliver premium organic produce while nurturing the earth for future generations.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4 text-green-600">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} rounded-2xl p-8 border hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 items-start">
          {/* Image Side - Expanded */}
          <div className="xl:col-span-3 relative">
            {/* Main Large Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-6">
              <img
                src="/images/green_onion.jpg"
                alt="Rohokale Farm Fields"
                className="w-full h-[600px] md:h-[700px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h4 className="text-2xl md:text-3xl font-bold mb-2">Modern Farming Excellence</h4>
                <p className="text-lg opacity-90">Advanced techniques delivering superior yields</p>
              </div>
            </div>
            
            {/* Secondary Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/drip.jpg"
                  alt="Drip Irrigation"
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Drip Irrigation</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/image.png"
                  alt="Organic Mangoes"
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Keshar Mangoes</p>
                </div>
              </div>
            </div>

            {/* Floating Achievement Card */}
            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 max-w-xs">
              <div className="flex items-center space-x-3 mb-2">
                <Target className="w-6 h-6 text-green-600" />
                <span className="font-bold text-gray-800">High Efficiency</span>
              </div>
              <p className="text-sm text-gray-600">Maximum yield from optimized land usage</p>
            </div>
          </div>

          {/* Content Side - Condensed */}
          <div className="xl:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                Maximizing Output with 
                <span className="text-green-600"> Smart Farming</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Rohokale Farm, we achieve exceptional productivity through efficient land utilization and modern techniques. Our approach delivers higher yields per acre while maintaining premium quality.
              </p>
            </div>

            {/* Achievement Highlights */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100">
              <div className="flex items-center space-x-3 mb-3">
                <BarChart3 className="w-6 h-6 text-green-600" />
                <h4 className="text-lg font-bold text-gray-800">Our Achievement</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                <span className="font-semibold text-green-600">55+ tonnes of onions annually</span> from optimized land usage, 
                significantly higher than traditional farming methods in our region.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                { icon: <Droplets className="w-4 h-4" />, text: 'Water-efficient drip irrigation maximizes crop yield' },
                { icon: <Target className="w-4 h-4" />, text: 'Strategic land optimization for higher productivity' },
                { icon: <Heart className="w-4 h-4" />, text: 'Organic Keshar mangoes with premium quality' },
                { icon: <BarChart3 className="w-4 h-4" />, text: 'Diverse high-yield crops: Brinjal, Jowar, Bajra & more' },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 group-hover:bg-green-200 transition-colors">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1 text-sm">{item.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#products"
                className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Explore Our Products</span>
                <TrendingUp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;