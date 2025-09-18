import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LegalNotice: React.FC = () => {
  return (
    <div style={{backgroundColor: '#1C1C1C', minHeight: '100vh'}}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Legal Notice
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Important legal information about Audi AG, our website, and the use of our services.
          </p>
          <div className="mt-8 text-sm text-gray-400">
            Last updated: December 20, 2024
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-white">Company Information</h2>
              
              <div className="bg-white/5 rounded-2xl p-6 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Audi AG</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Registered Office</h4>
                    <p className="text-gray-300">Auto-Union-Straße 1</p>
                    <p className="text-gray-300">85045 Ingolstadt</p>
                    <p className="text-gray-300">Germany</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Contact Information</h4>
                    <p className="text-gray-300">Phone: +49 841 89-0</p>
                    <p className="text-gray-300">Fax: +49 841 89-32500</p>
                    <p className="text-gray-300">Email: info@audi.de</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Legal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Registration</h4>
                    <p className="text-gray-300">District Court of Ingolstadt</p>
                    <p className="text-gray-300">HRB 6</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Tax Information</h4>
                    <p className="text-gray-300">VAT ID: DE 129 275 684</p>
                    <p className="text-gray-300">Tax Number: 143/108/20001</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Management Board</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">Markus Duesmann</h4>
                    <p className="text-gray-300">Chairman of the Board of Management</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Jürgen Rittersberger</h4>
                    <p className="text-gray-300">Member of the Board of Management, Finance and Legal Affairs</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Oliver Hoffmann</h4>
                    <p className="text-gray-300">Member of the Board of Management, Technical Development</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">Website Information</h2>
              
              <div className="bg-white/5 rounded-2xl p-6 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Website Provider</h3>
                <p className="text-gray-300 mb-4">
                  This website is operated by Audi AG. The website is hosted and maintained by Audi's digital services team.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Technical Support</h4>
                    <p className="text-gray-300">webmaster@audi.com</p>
                    <p className="text-gray-300">+49 841 89-0</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Content Management</h4>
                    <p className="text-gray-300">content@audi.com</p>
                    <p className="text-gray-300">Digital Marketing Team</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">Intellectual Property</h2>
              <p className="text-gray-300 mb-6">
                All content on this website, including text, images, graphics, logos, and software, is the property of Audi AG or its licensors and is protected by copyright and other intellectual property laws.
              </p>
              
              <div className="bg-white/5 rounded-2xl p-6 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Trademarks</h3>
                <p className="text-gray-300 mb-4">
                  The following trademarks are owned by Audi AG or its affiliates:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Audi (word mark and logo)</li>
                  <li>• quattro (word mark and logo)</li>
                  <li>• e-tron (word mark and logo)</li>
                  <li>• RS (word mark and logo)</li>
                  <li>• S (word mark and logo)</li>
                  <li>• All model names (A3, A4, A6, A8, Q3, Q5, Q7, Q8, etc.)</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">Disclaimer</h2>
              <p className="text-gray-300 mb-6">
                The information on this website is provided for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.
              </p>
              
              <div className="bg-white/5 rounded-2xl p-6 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Limitation of Liability</h3>
                <p className="text-gray-300 mb-4">
                  In no event will Audi AG be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Technical errors or interruptions</li>
                  <li>• Inaccurate or outdated information</li>
                  <li>• Third-party content or links</li>
                  <li>• Security breaches or data loss</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">External Links</h2>
              <p className="text-gray-300 mb-6">
                Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Audi AG. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">Governing Law</h2>
              <p className="text-gray-300 mb-6">
                This legal notice and your use of this website are governed by and construed in accordance with the laws of Germany. Any disputes relating to this legal notice or your use of this website will be subject to the exclusive jurisdiction of the courts of Germany.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">Data Protection</h2>
              <p className="text-gray-300 mb-6">
                The protection of your personal data is important to us. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your personal information.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">Accessibility</h2>
              <p className="text-gray-300 mb-6">
                Audi AG is committed to making its website accessible to all users, including those with disabilities. We strive to comply with applicable accessibility standards and guidelines.
              </p>
              
              <div className="bg-white/5 rounded-2xl p-6 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Accessibility Features</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Alternative text for images</li>
                  <li>• Keyboard navigation support</li>
                  <li>• Screen reader compatibility</li>
                  <li>• High contrast mode support</li>
                  <li>• Text size adjustment options</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">Updates to This Notice</h2>
              <p className="text-gray-300 mb-6">
                We may update this Legal Notice from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated notice on our website.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">Contact Information</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Legal Notice or our website, please contact us:
              </p>
              
              <div className="bg-white/5 rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Legal Department</h4>
                    <p className="text-gray-300">legal@audi.com</p>
                    <p className="text-gray-300">+49 841 89-0</p>
                    <p className="text-gray-300">Auto-Union-Straße 1, 85045 Ingolstadt</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Website Support</h4>
                    <p className="text-gray-300">webmaster@audi.com</p>
                    <p className="text-gray-300">1-800-AUDI-HELP</p>
                    <p className="text-gray-300">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LegalNotice
