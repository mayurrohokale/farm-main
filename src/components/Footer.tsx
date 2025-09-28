import React from 'react';
import { Leaf, Phone, Mail, MapPin, Instagram, Youtube, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="">
                <img
                  src='/cropped-logo.png'
                  alt="Rohokale Farm Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Rohokale Farm</h3>
                <p className="text-green-400 text-sm">Generations of Quality.</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Leading sustainable agriculture with 100+ tonnes annual production. 
              Premium organic produce with modern farming practices.
            </p>

            {/* Social Media */}
            <div className="flex space-x-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Products', href: '#products' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Products</h4>
            <ul className="space-y-2">
              {[
                'Premium Onions & sweet-limes',
                'Organic Keshar & other Mangoes', 
                // 'Fresh Vegetables',
                'Grains & Millets',
                'onion Seeds & Crops'
              ].map((product, index) => (
                <li key={index} className="text-gray-300 text-sm flex items-center">
                  <Leaf className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                  {product}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">+91 9284659472</p>
                  <p className="text-gray-300 text-sm">+91 8080272025</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">info@rohokalefarm.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Bhoyare Pathar, Daithane Gunjal,</p>
                  <p className='text-gray-300 text-sm'>M55C+5HQ Talpimpri, Sambhajinagar,</p>
                  <p className="text-gray-300 text-sm">Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Rohokale Farm. All rights reserved.
              </p>
              <p>Crafted with Love</p>
              <Heart className="w-3 h-3 text-red-400" />
            </div>
            
            <div className="flex space-x-6">
              <a href="#privacy-policy" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;