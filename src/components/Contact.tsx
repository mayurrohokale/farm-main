import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Users, Package, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: 'Phone Numbers',
      details: ['+91 98765 43210', '+91 87654 32109'],
      subtitle: 'Available during business hours'
    },
    {
      icon: <Mail className="w-6 h-6 text-green-600" />,
      title: 'Email Addresses',
      details: ['info@rohokalefarm.com', 'orders@rohokalefarm.com'],
      subtitle: 'We respond within 24 hours'
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      title: 'Farm Location',
      details: ['Rohokale Farm', 'Sarola Advai - Bhoyare Pathar Rd', 'Bhoyare Pathar, Daithane Gunjal', 'Maharashtra 414103, India'],
      subtitle: 'GPS coordinates available on request'
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: 'Business Hours',
      details: ['Monday - Saturday: 6:00 AM - 6:00 PM', 'Sunday: Emergency calls only'],
      subtitle: 'Best time to visit: 8 AM - 5 PM'
    }
  ];

  const features = [
    {
      icon: <Package className="w-8 h-8 text-green-600" />,
      title: 'Bulk Orders',
      description: 'Special pricing for restaurants, retailers, and distributors'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Farm Visits',
      description: 'Schedule a visit to see our modern farming practices'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-600" />,
      title: '24/7 Support',
      description: 'Quick response to all your farming and product inquiries'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <MessageCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Get In <span className="text-green-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to experience premium organic produce? Whether you're looking for bulk orders, 
            custom requirements, or just have questions about our farming practices, we're here to help.
          </p>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl mb-6 group-hover:bg-green-50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-fit">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <Phone className="w-8 h-8 text-green-600" />
                Contact Information
              </h3>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-700 mb-1 hover:text-green-600 transition-colors cursor-pointer">
                            {detail}
                          </p>
                        ))}
                        <p className="text-sm text-gray-500 mt-2">{info.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-bold text-gray-800 mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 bg-green-50 hover:bg-green-100 p-4 rounded-xl transition-colors group"
                  >
                    <Phone className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-gray-800">Call Now</span>
                  </a>
                  <a
                    href="mailto:info@rohokalefarm.com"
                    className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 p-4 rounded-xl transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-gray-800">Send Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="xl:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Send Us a Message</h3>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 group-hover:border-gray-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 group-hover:border-gray-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 group-hover:border-gray-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                      Inquiry Type *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 group-hover:border-gray-300"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="bulk-order">Bulk Order (10kg+)</option>
                      <option value="custom-order">Custom Order</option>
                      <option value="wholesale">Wholesale Partnership</option>
                      <option value="farm-visit">Farm Visit Request</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 resize-vertical group-hover:border-gray-300"
                    placeholder="Tell us about your requirements, questions, or how we can help you. Include quantities, delivery dates, or any specific requests..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>We typically respond within 24 hours during business days</span>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Farm</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience organic farming firsthand. Our farm is open for visits by appointment. 
              See our modern irrigation systems and quality produce in action.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30168.32925282504!2d74.550333!3d19.061928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcc9fa343c85db%3A0xd69c2b5aeb588e15!2sRohokale%20Farm!5e0!3m2!1sen!2sus!4v1758230308221!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rohokale Farm Location"
              className="w-full"
            ></iframe>
            
            <div className="p-8 bg-gradient-to-r from-green-50 to-blue-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-green-600" />
                    Directions
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Located on Sarola Advai - Bhoyare Pathar Road, our farm is easily accessible by car. 
                    Free parking available on-site. Please call ahead to schedule your visit.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-600" />
                    Visit Information
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Farm tours available Monday-Saturday, 9 AM - 4 PM. Duration: 45-60 minutes. 
                    Learn about our organic practices, see our irrigation systems, and taste fresh produce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;