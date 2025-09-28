import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';


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
      {/* Main Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
          : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 lg:py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 lg:space-x-3 group cursor-pointer">
                <img
                  src='images/logo4.png'
                  alt="Rohokale Farm Logo"
                  className="w-12 h-12 lg:w-14 lg:h-14 object-contain"
                />
                {/* <LeafIcon className="w-8 h-8 lg:w-10 lg:h-10 text-green-600 group-hover:text-green-700 transition-colors" /> */}

              
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
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Header;