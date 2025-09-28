import React from 'react';
import { FileText, Scale, ShieldCheck, Truck, CreditCard, AlertTriangle, ArrowLeft, CheckCircle } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Terms and conditions for using Rohokale Farm services and products
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: September 28, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          
          {/* Agreement */}
          <section>
            <div className="flex items-center mb-4">
              <Scale className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Agreement to Terms</h2>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="text-gray-700 leading-relaxed">
                By accessing our website, placing orders, or using any of our services, you agree to be bound by these Terms of Service. 
                If you do not agree with any part of these terms, please do not use our services.
              </p>
            </div>
          </section>

          {/* Services */}
          <section>
            <div className="flex items-center mb-4">
              <ShieldCheck className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-gray-800 mb-2">Products Offered</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Premium organic onions</li>
                  <li>• Fresh vegetables and produce</li>
                  <li>• Organic Keshar mangoes</li>
                  <li>• Grains, millets, and seeds</li>
                  <li>• Custom bulk orders</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-800 mb-2">Additional Services</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Farm visits and tours</li>
                  <li>• Agricultural consultation</li>
                  <li>• Wholesale partnerships</li>
                  <li>• Custom packaging solutions</li>
                  <li>• Educational programs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Orders and Payment */}
          <section>
            <div className="flex items-center mb-4">
              <CreditCard className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Orders and Payment</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Order Process</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• All orders are subject to availability and confirmation</li>
                  <li>• We reserve the right to refuse or cancel orders at our discretion</li>
                  <li>• Order confirmation will be sent via email or phone</li>
                  <li>• Bulk orders require advance notice (minimum 48-72 hours)</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Payment Terms</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Payment required before delivery for retail orders</li>
                  <li>• Wholesale customers may be eligible for credit terms</li>
                  <li>• All prices are subject to change without notice</li>
                  <li>• Additional charges may apply for expedited delivery</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Delivery and Quality */}
          <section>
            <div className="flex items-center mb-4">
              <Truck className="w-6 h-6 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Delivery and Quality Assurance</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <Truck className="w-4 h-4 text-orange-600 mr-2" />
                    Delivery Terms
                  </h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Delivery areas within 50km of our farms</li>
                    <li>• Standard delivery: 2-3 business days</li>
                    <li>• Bulk orders: 3-5 business days</li>
                    <li>• Weather conditions may affect delivery</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Quality Standards
                  </h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Fresh, organic, pesticide-free produce</li>
                    <li>• Quality inspection before dispatch</li>
                    <li>• Proper packaging and handling</li>
                    <li>• 24-hour freshness guarantee</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Returns and Refunds */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Returns and Refunds</h2>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Return Policy</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Quality issues: Full refund/replacement</li>
                    <li>• Report within 24 hours of delivery</li>
                    <li>• Photo evidence may be required</li>
                    <li>• Perishable goods policy applies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Refund Process</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Refunds processed within 5-7 business days</li>
                    <li>• Original payment method preferred</li>
                    <li>• Processing fees may apply</li>
                    <li>• Replacement products when available</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">As a customer, you agree to:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-gray-700 space-y-2">
                  <li>• Provide accurate contact and delivery information</li>
                  <li>• Be available during scheduled delivery times</li>
                  <li>• Inspect products upon delivery</li>
                  <li>• Report quality issues promptly</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• Make payments as per agreed terms</li>
                  <li>• Handle products appropriately after delivery</li>
                  <li>• Respect our staff and farm property</li>
                  <li>• Follow safety guidelines during farm visits</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Limitations */}
          <section>
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Liability and Limitations</h2>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="font-semibold text-gray-800 mb-3">Important Disclaimers</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Products are provided "as is" subject to natural variations</li>
                <li>• We are not liable for losses due to weather, transportation delays, or force majeure events</li>
                <li>• Maximum liability limited to the cost of products purchased</li>
                <li>• Seasonal availability may affect product selection</li>
                <li>• Farm visit participants assume responsibility for their safety</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on our website, including text, images, logos, and trademarks, is the property of Rohokale Farm. 
              Unauthorized use or reproduction is prohibited.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700">
              We reserve the right to terminate or suspend services to any customer who violates these terms, 
              engages in fraudulent activities, or poses a risk to our operations or other customers.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700">
              These Terms of Service are governed by the laws of Maharashtra, India. 
              Any disputes will be resolved through the appropriate legal channels in Maharashtra.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service or any issues with our products and services, contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700"><strong>Email:</strong> info@rohokalefarm.com</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +91 9284659472</p>
                </div>
                <div>
                  <p className="text-gray-700"><strong>Business Hours:</strong> Monday - Saturday, 6 AM - 6 PM</p>
                  <p className="text-gray-700"><strong>Response Time:</strong> Within 24-48 hours</p>
                </div>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. 
              Continued use of our services constitutes acceptance of the updated terms.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;