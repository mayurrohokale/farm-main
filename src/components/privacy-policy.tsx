import React from 'react';
import { Shield, Eye, Lock, Users, Mail, Phone, Calendar, ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            How Rohokale Farm collects, uses, and protects your personal information
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: September 28, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          
          {/* Introduction */}
          <section>
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              At Rohokale Farm, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, 
              contact us, or engage with our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Personal Information</h3>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Name and contact details (email, phone number)</li>
                  <li>• Business information (company name, role)</li>
                  <li>• Inquiry details and communication preferences</li>
                  <li>• Order history and delivery addresses</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Automatically Collected Information</h3>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• IP address and browser information</li>
                  <li>• Website usage data and analytics</li>
                  <li>• Cookies and similar tracking technologies</li>
                  <li>• Device information and preferences</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-gray-800 mb-2">Service Delivery</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Process and fulfill orders</li>
                  <li>• Provide customer support</li>
                  <li>• Schedule farm visits</li>
                  <li>• Send product updates</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-800 mb-2">Communication</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Respond to inquiries</li>
                  <li>• Send newsletters (with consent)</li>
                  <li>• Provide technical support</li>
                  <li>• Share farming updates</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-gray-800 mb-2">Business Operations</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Improve our services</li>
                  <li>• Analyze website usage</li>
                  <li>• Manage business relationships</li>
                  <li>• Comply with legal requirements</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-gray-800 mb-2">Marketing</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Send promotional offers (opt-in)</li>
                  <li>• Share seasonal updates</li>
                  <li>• Invite to farm events</li>
                  <li>• Product recommendations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6">
              <li>• <strong>Service Providers:</strong> With trusted partners who help us operate our business (delivery services, payment processors)</li>
              <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li>• <strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of our business</li>
              <li>• <strong>Consent:</strong> With your explicit permission for specific purposes</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Encryption</h4>
                  <p className="text-sm text-gray-600">Data encrypted in transit and at rest</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Access Control</h4>
                  <p className="text-sm text-gray-600">Limited access to authorized personnel</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Monitoring</h4>
                  <p className="text-sm text-gray-600">Regular security audits and monitoring</p>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Access:</strong> Request copies of your personal data</li>
                  <li>• <strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li>• <strong>Deletion:</strong> Request deletion of your personal data</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Portability:</strong> Receive your data in a portable format</li>
                  <li>• <strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li>• <strong>Restriction:</strong> Limit how we process your data</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. 
              You can control cookie preferences through your browser settings.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center mb-2">
                    <Mail className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-gray-700">info@rohokalefarm.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-gray-700">+91 9284659472</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-gray-700">Response time: Within 48 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page 
              and updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;