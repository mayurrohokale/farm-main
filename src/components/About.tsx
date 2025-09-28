import React from 'react';
import { Heart, Globe, TrendingUp, Sprout, Award, Shield, Target, BarChart3, Leaf } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Sprout className="w-10 h-10 text-green-600" />,
      title: 'Premium Onion Production',
      description: 'Producing 55+ tonnes of high-quality onions annually with authentic seeds and modern cultivation techniques.',
      color: 'bg-green-50 border-green-200'
    },
    {
      icon: <Heart className="w-10 h-10 text-orange-600" />,
      title: '100% Organic Mangoes',
      description: 'Premium Keshar mangoes grown without chemicals, delivering exceptional taste and nutritional value.',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      icon: <Leaf className="w-10 h-10 text-yellow-600" />,
      title: 'Sweet Lime Excellence',
      description: '50+ tonnes of premium sweet lime production using sustainable farming practices and quality control.',
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: 'Authentic Seeds',
      description: 'High-quality, authentic onion seeds sourced and cultivated for superior yield and disease resistance.',
      color: 'bg-blue-50 border-blue-200'
    }
  ];

  const stats = [
    { number: '55+', label: 'Tonnes Onions/Year', icon: <Sprout className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'text-green-600' },
    { number: '50+', label: 'Tonnes Sweet Lime/Year', icon: <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'text-yellow-600' },
    { number: '100%', label: 'Organic Mangoes', icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'text-orange-600' },
    { number: '100%', label: 'Authentic Seeds', icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'text-purple-600' },
  ];

  const achievements = [
    {
      icon: <BarChart3 className="w-6 h-6 text-green-600" />,
      title: 'High-Yield Onion Production',
      description: '55+ tonnes annually with authentic seed varieties',
      highlight: 'Premium Quality'
    },
    {
      icon: <Heart className="w-6 h-6 text-orange-600" />,
      title: '100% Organic Mangoes',
      description: 'Chemical-free Keshar mangoes with superior taste',
      highlight: 'Organic Certified'
    },
    {
      icon: <Leaf className="w-6 h-6 text-yellow-600" />,
      title: 'Sweet Lime Excellence',
      description: '50+ tonnes of premium sweet lime production',
      highlight: 'Market Leader'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-green-50/20 to-blue-50/20">
      <div className="max-w-7xl mx-auto logo-title px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full mb-4 sm:mb-6">
            <Sprout className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  text-gray-800 mb-4 sm:mb-6">
            About <span className="text-green-600">Rohokale Farm</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Pioneering excellence in agriculture with premium onion production, organic mangoes, and sweet lime cultivation.
            We blend traditional farming wisdom with modern technology to deliver exceptional quality and sustainable farming practices.
          </p>
        </div>

        {/* Stats Section - Responsive Flex Row */}
        <div className="flex flex-row flex-wrap justify-center items-stretch gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20 overflow-x-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="min-w-[140px] sm:min-w-[180px] bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group flex-1"
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full mb-3 sm:mb-4 border ${stat.color} group-hover:bg-gray-50 transition-colors`}>
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} rounded-xl sm:rounded-2xl p-6 sm:p-8 border hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Section - Responsive Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Image Side - Mobile First */}
          <div className="xl:col-span-3 order-2 xl:order-1">
            {/* Main Large Image */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl mb-4 sm:mb-6">
              <img
                src="/images/green_onion.jpg"
                alt="Rohokale Farm Premium Onion Fields"
                className="w-full h-64 sm:h-96 lg:h-[500px] xl:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 text-white">
                <h4 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 sm:mb-2">Premium Agricultural Excellence</h4>
                <p className="text-sm sm:text-base lg:text-lg opacity-90">Advanced cultivation techniques for superior yields</p>
              </div>
            </div>

            {/* Secondary Images Grid - Mango and Sweet Lime */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
                <img
                  src="/images/drip.jpg"
                  alt="Advanced Drip Irrigation System"
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                  <p className="font-semibold text-xs sm:text-sm">Smart Irrigation</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
                <img
                  src="/images/mango3.png"
                  alt="Organic Keshar Mangoes"
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                  <p className="font-semibold text-xs sm:text-sm">Organic Mangoes</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
                <img
                  src="/images/lime2.jpg"
                  alt="Premium Sweet Lime"
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                  <p className="font-semibold text-xs sm:text-sm">Premium Sweet Lime</p>
                </div>
              </div>
            </div>

            {/* Floating Achievement Card - Hidden on mobile */}
            {/* <div className="hidden lg:block absolute top-6 xl:top-8 right-6 xl:right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 xl:p-6 shadow-xl border border-gray-100 max-w-xs">
              <div className="flex items-center space-x-3 mb-2">
                <Zap className="w-5 h-5 xl:w-6 xl:h-6 text-green-600" />
                <span className="font-bold text-gray-800 text-sm xl:text-base">Market Leading</span>
              </div>
              <p className="text-xs xl:text-sm text-gray-600">Exceptional productivity and quality standards</p>
            </div> */}
          </div>

          {/* Content Side - Mobile First */}
          <div className="xl:col-span-2 order-1 xl:order-2 space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
                Agriculture
                <span className="text-green-600"> Pioneers</span>
              </h3>
              <p className="text-base sm:text-lg text-justify text-gray-600 leading-relaxed">
                Rohokale Farm stands at the forefront of modern agriculture, combining authentic seeds with cutting-edge farming techniques to deliver exceptional yields and premium quality produce.
              </p>
            </div>

            {/* Achievement Highlights - Responsive Cards */}
            <div className="space-y-3 sm:space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-r from-white to-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      {achievement.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-sm sm:text-base font-bold text-gray-800 truncate">{achievement.title}</h4>
                        <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full mt-1 sm:mt-0 self-start">
                          {achievement.highlight}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Points - Responsive */}
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: <Sprout className="w-4 h-4" />, text: 'Authentic onion seeds for superior quality and yield' },
                { icon: <Heart className="w-4 h-4" />, text: '100% organic Keshar mangoes without chemicals' },
                { icon: <Leaf className="w-4 h-4" />, text: '50+ tonnes sweet lime and onions production annually' },
                { icon: <BarChart3 className="w-4 h-4" />, text: 'Diverse crops: Brinjal, Jowar, Bajra and more' },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 group-hover:bg-green-200 transition-colors">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1 text-sm sm:text-base">{item.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Button - Responsive */}
            <div className="pt-2 sm:pt-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center w-full sm:w-auto space-x-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="text-sm sm:text-base">Explore Our Premium Products</span>
                <TrendingUp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info Section - Mobile Friendly */}
        <div className="mt-8 sm:mt-12 lg:mt-16 xl:mt-20 bg-gradient-to-r from-green-600 to-green-700 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 text-white">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">Our Commitment to Excellence</h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl opacity-90 max-w-3xl text-justify mx-auto leading-relaxed mb-4 sm:mb-6 lg:mb-8">
              From authentic seed selection to harvest, we maintain the highest standards of quality control.
              Our commitment extends beyond production to sustainable farming practices that preserve the environment for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                <span className="font-semibold text-xs sm:text-sm lg:text-base">Quality Assured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                <span className="font-semibold text-xs sm:text-sm lg:text-base">Sustainably Grown</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                <span className="font-semibold text-xs sm:text-sm lg:text-base">Premium Grade</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;