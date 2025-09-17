import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#1C1C1C'}}>
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Get in touch with our team. We're here to help with any questions about our vehicles, 
              services, or support needs.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-gray-900 rounded-lg p-8">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">📞</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Phone</h3>
                <p className="text-gray-400 mb-4">Speak directly with our team</p>
                <p className="text-white font-semibold mb-2">1-800-AUDI-USA</p>
                <p className="text-gray-400 text-sm">Mon-Fri: 8AM-8PM EST</p>
              </div>
              <div className="text-center bg-gray-900 rounded-lg p-8">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">✉️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Email</h3>
                <p className="text-gray-400 mb-4">Send us a message anytime</p>
                <p className="text-white font-semibold mb-2">support@audi.com</p>
                <p className="text-gray-400 text-sm">Response within 24 hours</p>
              </div>
              <div className="text-center bg-gray-900 rounded-lg p-8">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">💬</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Live Chat</h3>
                <p className="text-gray-400 mb-4">Chat with us instantly</p>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Send Us a Message</h2>
              <p className="text-xl text-gray-400">Fill out the form below and we'll get back to you</p>
            </div>
            <form className="bg-black rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-300 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white">
                  <option>General Inquiry</option>
                  <option>Vehicle Information</option>
                  <option>Service & Maintenance</option>
                  <option>Parts & Accessories</option>
                  <option>Finance & Leasing</option>
                  <option>Technical Support</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-8">
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-white text-black py-4 text-xl font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Our Offices</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Audi USA Headquarters</h3>
                <div className="space-y-2 text-gray-400">
                  <p>2200 Ferdinand Porsche Drive</p>
                  <p>Herndon, VA 20171</p>
                  <p>United States</p>
                  <p className="text-white font-semibold mt-4">Phone: +1 (703) 364-5000</p>
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Audi AG Headquarters</h3>
                <div className="space-y-2 text-gray-400">
                  <p>Auto-Union-Straße 1</p>
                  <p>85045 Ingolstadt</p>
                  <p>Germany</p>
                  <p className="text-white font-semibold mt-4">Phone: +49 (841) 89-0</p>
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Audi Design Center</h3>
                <div className="space-y-2 text-gray-400">
                  <p>85045 Ingolstadt</p>
                  <p>Bavaria, Germany</p>
                  <p>Europe</p>
                  <p className="text-white font-semibold mt-4">Phone: +49 (841) 89-0</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-black rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How can I schedule a test drive?</h3>
                <p className="text-gray-400">
                  You can schedule a test drive by contacting your local Audi dealer directly, 
                  or by calling our customer service line at 1-800-AUDI-USA.
                </p>
              </div>
              <div className="bg-black rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">What is Audi's warranty coverage?</h3>
                <p className="text-gray-400">
                  Audi offers a comprehensive 4-year/50,000-mile warranty on all new vehicles, 
                  plus additional coverage for specific components and systems.
                </p>
              </div>
              <div className="bg-black rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">How do I find an Audi dealer near me?</h3>
                <p className="text-gray-400">
                  Use our dealer locator tool on our website, or call our customer service line 
                  for assistance finding the nearest authorized Audi dealer.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}

export default ContactUs
