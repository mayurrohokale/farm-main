import React from 'react';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Sprout, Award, Shield, Clock, ArrowRight, Heart } from 'lucide-react';

// Redesigned SVG logo for footer
const FarmLogo = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
    {/* Main farm field background */}
    <rect x="4" y="28" width="40" height="16" rx="4" fill="#22C55E" opacity="0.8"/>
    
    {/* Rolling hills */}
    <path d="M4 28 Q12 20 20 28 Q28 20 36 28 Q40 24 44 28 V44 H4 Z" fill="#16A34A"/>
    
    {/* Sun */}
    <circle cx="36" cy="12" r="6" fill="#FCD34D" stroke="#F59E0B" strokeWidth="1"/>
    
    {/* Sun rays */}
    <g stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round">
      <line x1="36" y1="2" x2="36" y2="4"/>
      <line x1="36" y1="20" x2="36" y2="22"/>
      <line x1="46" y1="12" x2="44" y2="12"/>
      <line x1="28" y1="12" x2="26" y2="12"/>
      <line x1="42.5" y1="5.5" x2="41.1" y2="6.9"/>
      <line x1="30.9" y1="17.1" x2="29.5" y2="18.5"/>
      <line x1="42.5" y1="18.5" x2="41.1" y2="17.1"/>
      <line x1="30.9" y1="6.9" x2="29.5" y2="5.5"/>
    </g>
    
    {/* Crops/plants */}
    <g fill="#16A34A">
      <path d="M10 28 Q10 24 12 24 Q14 24 14 28 L12 32 Z"/>
      <path d="M18 28 Q18 22 20 22 Q22 22 22 28 L20 34 Z"/>
      <path d="M26 28 Q26 24 28 24 Q30 24 30 28 L28 32 Z"/>
      <path d="M34 28 Q34 22 36 22 Q38 22 38 28 L36 34 Z"/>
    </g>
    
    {/* Leaves on crops */}
    <g fill="#22C55E">
      <ellipse cx="11" cy="26" rx="2" ry="1"/>
      <ellipse cx="13" cy="26" rx="2" ry="1"/>
      <ellipse cx="19" cy="24" rx="2" ry="1"/>
      <ellipse cx="21" cy="24" rx="2" ry="1"/>
      <ellipse cx="27" cy="26" rx="2" ry="1"/>
      <ellipse cx="29" cy="26" rx="2" ry="1"/>
      <ellipse cx="35" cy="24" rx="2" ry="1"/>
      <ellipse cx="37" cy="24" rx="2" ry="1"/>
    </g>
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const products = [
    'Premium Onions (55+ tonnes)',
    'Organic Keshar Mangoes', 
    'Fresh Vegetables',
    'Grains & Millets',
    'Seeds & Crops'
  ];

  const achievements = [
    { icon: <Sprout className="w-4 h-4" />, text: '55+ Tonnes Annual Production' },
    { icon: <Shield className="w-4 h-4" />, text: '100% Organic Certified' },
    { icon: <Award className="w-4 h-4" />, text: 'Modern Farming Practices' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 rounded-full translate-x-40 translate-y-40"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info - Larger Section */}
            <div className="lg:col-span-5">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-green-100 rounded-full">
                  <FarmLogo />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Rohokale Farm</h3>
                  <p className="text-green-400 font-medium">Modern Organic Agriculture</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-8 text-lg max-w-md">
                Leading the way in sustainable agriculture with 55+ tonnes of organic onions annually. 
                From traditional farming wisdom to modern technology, we deliver premium quality produce 
                with environmental responsibility.
              </p>

              {/* Achievements */}
              <div className="space-y-3 mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Our Achievements</h4>
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-300">
                    <div className="text-green-400">
                      {achievement.icon}
                    </div>
                    <span className="text-sm">{achievement.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Follow Our Journey</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
                    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
                    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
                    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-gray-700 hover:bg-green-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
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
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-6">Our Products</h4>
              <ul className="space-y-3">
                {products.map((product, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <Leaf className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    {product}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <Phone className="w-5 h-5 text-green-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone Numbers</p>
                    <p className="text-gray-300 text-sm">+91 98765 43210</p>
                    <p className="text-gray-300 text-sm">+91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <Mail className="w-5 h-5 text-green-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300 text-sm">info@rohokalefarm.com</p>
                    <p className="text-gray-300 text-sm">orders@rohokalefarm.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <MapPin className="w-5 h-5 text-green-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Farm Location</p>
                    <p className="text-gray-300 text-sm">Sarola Advai - Bhoyare Pathar Rd</p>
                    <p className="text-gray-300 text-sm">Bhoyare Pathar, Daithane Gunjal</p>
                    <p className="text-gray-300 text-sm">Maharashtra 414103, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <Clock className="w-5 h-5 text-green-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Business Hours</p>
                    <p className="text-gray-300 text-sm">Mon - Sat: 6:00 AM - 6:00 PM</p>
                    <p className="text-gray-300 text-sm">Sunday: Emergency calls only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-gray-900 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © {currentYear} Rohokale Farm. All rights reserved.
                </p>
                <Heart className="w-4 h-4 text-red-400" />
                <p className="text-gray-400 text-sm">Made with care for sustainable farming</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  'Privacy Policy',
                  'Terms of Service', 
                  'Organic Certification',
                  'Quality Standards'
                ].map((link, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;