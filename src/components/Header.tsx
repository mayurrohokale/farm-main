import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

// Modern Organic Farm Logo
const FarmLogo = () => (
  <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
    {/* Modern circular background with gradient */}
    <circle cx="24" cy="24" r="22" fill="url(#greenGradient)" stroke="#16A34A" strokeWidth="2"/>
    
    {/* Modern geometric field pattern */}
    <path d="M8 32 Q16 28 24 32 Q32 28 40 32 V40 Q32 36 24 40 Q16 36 8 40 Z" fill="#22C55E" opacity="0.8"/>
    <path d="M8 28 Q16 24 24 28 Q32 24 40 28 V36 Q32 32 24 36 Q16 32 8 36 Z" fill="#16A34A" opacity="0.6"/>
    
    {/* Modern sun with tech lines */}
    <circle cx="32" cy="16" r="4" fill="#FCD34D"/>
    <g stroke="#F59E0B" strokeWidth="1" strokeLinecap="round">
      <line x1="32" y1="8" x2="32" y2="10"/>
      <line x1="32" y1="22" x2="32" y2="24"/>
      <line x1="40" y1="16" x2="38" y2="16"/>
      <line x1="26" y1="16" x2="24" y2="16"/>
      <line x1="36.8" y1="11.2" x2="35.4" y2="12.6"/>
      <line x1="28.6" y1="19.4" x2="27.2" y2="20.8"/>
      <line x1="36.8" y1="20.8" x2="35.4" y2="19.4"/>
      <line x1="28.6" y1="12.6" x2="27.2" y2="11.2"/>
    </g>
    
    {/* Modern stylized crops with tech elements */}
    <g fill="#16A34A">
      {/* Onion representation - layered circles */}
      <circle cx="12" cy="30" r="3" opacity="0.8"/>
      <circle cx="12" cy="30" r="2" fill="#22C55E"/>
      <path d="M12 27 Q12 24 14 26 Q12 22 10 26 Q12 24 12 27" fill="#4ADE80"/>
      
      {/* Mango representation - organic shape */}
      <ellipse cx="20" cy="32" rx="2.5" ry="3.5" fill="#F59E0B" opacity="0.7"/>
      <path d="M20 28 Q18 26 20 24 Q22 26 20 28" fill="#22C55E"/>
      
      {/* Modern grain/wheat */}
      <rect x="27" y="28" width="2" height="8" rx="1" fill="#16A34A"/>
      <circle cx="28" cy="26" r="1" fill="#FCD34D"/>
      <circle cx="26.5" cy="27" r="0.8" fill="#FCD34D"/>
      <circle cx="29.5" cy="27" r="0.8" fill="#FCD34D"/>
      
      {/* Modern vegetable representation */}
      <ellipse cx="36" cy="30" rx="2" ry="4" fill="#8B5CF6" opacity="0.7"/>
      <path d="M36 26 Q34 24 36 22 Q38 24 36 26" fill="#22C55E"/>
    </g>
    
    {/* Modern tech pattern overlay */}
    <g stroke="#16A34A" strokeWidth="0.5" opacity="0.3">
      <path d="M8 24 L12 20 L16 24 L20 20 L24 24 L28 20 L32 24 L36 20 L40 24"/>
      <circle cx="24" cy="24" r="18" fill="none" strokeDasharray="2,2"/>
    </g>
    
    {/* Gradient definitions */}
    <defs>
      <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DCFCE7"/>
        <stop offset="50%" stopColor="#BBF7D0"/>
        <stop offset="100%" stopColor="#86EFAC"/>
      </linearGradient>
    </defs>
    
    {/* Modern connecting lines representing irrigation/technology */}
    <g stroke="#22C55E" strokeWidth="1" opacity="0.4" strokeDasharray="1,1">
      <path d="M12 30 Q18 26 24 30 Q30 26 36 30"/>
      <line x1="24" y1="10" x2="24" y2="38"/>
    </g>
    
    {/* Central modern element - representing innovation */}
    <circle cx="24" cy="24" r="2" fill="#16A34A" opacity="0.8"/>
    <circle cx="24" cy="24" r="1" fill="#4ADE80"/>
  </svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { 
      name: 'Products', 
      href: '#products',
      dropdown: [
        { name: 'Premium Onions', href: '#products' },
        { name: 'Organic Mangoes', href: '#products' },
        { name: 'Fresh Vegetables', href: '#products' },
        { name: 'Grains & Millets', href: '#products' },
        { name: 'Seeds & Crops', href: '#products' }
      ]
    },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`w-full bg-green-600 text-white py-2 transition-all duration-300 ${
        isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6 mb-1 sm:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="truncate">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="truncate">info@rohokalefarm.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-center sm:text-left">Sarola Advai, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
          : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`} style={{ top: isScrolled ? '0' : '44px' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 lg:py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 lg:space-x-3 group cursor-pointer">
              <div className="p-1 lg:p-2 bg-green-50 rounded-xl group-hover:bg-green-100 transition-colors shadow-sm">
                <FarmLogo />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                  Rohokale Farm
                </h1>
                <p className="text-xs lg:text-sm text-green-600 font-medium hidden sm:block">
                  Modern Organic Agriculture
                </p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        className="flex items-center space-x-1 text-gray-700 hover:text-green-600 font-semibold transition-all duration-200 py-2 px-4 rounded-lg hover:bg-green-50"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div 
                        className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 transform ${
                          activeDropdown === item.name 
                            ? 'opacity-100 translate-y-0 visible' 
                            : 'opacity-0 -translate-y-2 invisible'
                        }`}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors font-medium text-sm"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-green-600 font-semibold transition-all duration-200 py-2 px-4 rounded-lg hover:bg-green-50"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              
              {/* CTA Button */}
              <a
                href="#contact"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-2 bg-white/95 backdrop-blur-sm rounded-xl border border-gray-100 shadow-lg mb-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium transition-colors rounded-lg mx-2"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="pl-6 pr-2 py-2 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors rounded-lg text-sm"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium transition-colors rounded-lg mx-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="px-2 pt-2">
                <a
                  href="#contact"
                  className="block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className={`transition-all duration-300 ${
        isScrolled ? 'h-16 lg:h-20' : 'h-24 lg:h-32'
      }`}></div>
    </>
  );
};

export default Header;