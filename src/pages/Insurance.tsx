import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Insurance: React.FC = () => {
  return (
    <div style={{backgroundColor: '#1C1C1C', minHeight: '100vh'}}>
      <style>{`
        select {
          background-color: rgba(255, 255, 255, 0.1) !important;
          color: white !important;
        }
        select option {
          background-color: #1C1C1C !important;
          color: white !important;
          padding: 8px 12px;
        }
        select option:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
        select option:checked {
          background-color: rgba(255, 255, 255, 0.2) !important;
        }
      `}</style>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Audi Insurance
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive insurance coverage designed specifically for Audi vehicles and drivers.
          </p>
        </div>
      </section>

      {/* Coverage Types Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Comprehensive Coverage */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Comprehensive Coverage</h3>
              <p className="text-gray-400 mb-6">Protection against theft, vandalism, and natural disasters.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Theft protection</li>
                <li>• Vandalism coverage</li>
                <li>• Natural disaster protection</li>
                <li>• Fire and flood coverage</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Learn More
              </button>
            </div>

            {/* Collision Coverage */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Collision Coverage</h3>
              <p className="text-gray-400 mb-6">Coverage for damage to your vehicle in accidents.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Accident damage repair</li>
                <li>• OEM parts guarantee</li>
                <li>• Rental car coverage</li>
                <li>• Diminished value protection</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Learn More
              </button>
            </div>

            {/* Liability Coverage */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Liability Coverage</h3>
              <p className="text-gray-400 mb-6">Protection for damages you cause to others.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Bodily injury liability</li>
                <li>• Property damage liability</li>
                <li>• Legal defense coverage</li>
                <li>• Medical payments</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Learn More
              </button>
            </div>

            {/* Uninsured Motorist */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚫</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Uninsured Motorist</h3>
              <p className="text-gray-400 mb-6">Protection when hit by uninsured or underinsured drivers.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Uninsured motorist coverage</li>
                <li>• Underinsured motorist</li>
                <li>• Hit-and-run protection</li>
                <li>• Medical expense coverage</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Learn More
              </button>
            </div>

            {/* Roadside Assistance */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Roadside Assistance</h3>
              <p className="text-gray-400 mb-6">24/7 roadside assistance and emergency services.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• 24/7 emergency service</li>
                <li>• Towing and jump starts</li>
                <li>• Lockout service</li>
                <li>• Flat tire assistance</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Learn More
              </button>
            </div>

            {/* Gap Insurance */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Gap Insurance</h3>
              <p className="text-gray-400 mb-6">Coverage for the difference between loan balance and vehicle value.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Loan/lease gap coverage</li>
                <li>• Depreciation protection</li>
                <li>• Total loss coverage</li>
                <li>• Peace of mind</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Audi Insurance?</h2>
            <p className="text-xl text-gray-300">
              Experience the benefits of insurance designed specifically for Audi owners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold mb-4">OEM Parts</h3>
              <p className="text-gray-400">Only genuine Audi parts used for repairs</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Certified Technicians</h3>
              <p className="text-gray-400">Repairs performed by Audi-certified technicians</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-4">24/7 Claims</h3>
              <p className="text-gray-400">Round-the-clock claims support and assistance</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Competitive Rates</h3>
              <p className="text-gray-400">Special rates for Audi owners and drivers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Get Your Free Quote</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a personalized insurance quote for your Audi in just a few minutes.
          </p>
          
          <div className="glass-card rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-left text-white font-semibold mb-2">Vehicle Information</label>
                <select className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white mb-4">
                  <option value="">Select your Audi model</option>
                  <option value="a3">Audi A3</option>
                  <option value="a4">Audi A4</option>
                  <option value="a6">Audi A6</option>
                  <option value="a8">Audi A8</option>
                  <option value="q3">Audi Q3</option>
                  <option value="q5">Audi Q5</option>
                  <option value="q7">Audi Q7</option>
                  <option value="q8">Audi Q8</option>
                  <option value="etron">Audi e-tron</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Vehicle Year"
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-left text-white font-semibold mb-2">Driver Information</label>
                <input 
                  type="text" 
                  placeholder="Full Name"
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 mb-4"
                />
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-left text-white font-semibold mb-2">Coverage Preferences</label>
                <select className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white">
                  <option value="">Select coverage level</option>
                  <option value="basic">Basic Coverage</option>
                  <option value="standard">Standard Coverage</option>
                  <option value="premium">Premium Coverage</option>
                  <option value="comprehensive">Comprehensive Coverage</option>
                </select>
              </div>
              <div>
                <label className="block text-left text-white font-semibold mb-2">Current Insurance</label>
                <select className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white">
                  <option value="">Current insurance provider</option>
                  <option value="none">No current insurance</option>
                  <option value="geico">Geico</option>
                  <option value="statefarm">State Farm</option>
                  <option value="progressive">Progressive</option>
                  <option value="allstate">Allstate</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <button className="w-full bg-white text-black py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors mt-6">
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our insurance specialists are here to help you find the perfect coverage for your Audi.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Call Us</h3>
              <p className="text-gray-400 text-sm mb-4">Speak with an insurance specialist</p>
              <p className="text-white font-semibold">1-800-AUDI-INS</p>
            </div>
            
            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">💬</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Live Chat</h3>
              <p className="text-gray-400 text-sm mb-4">Chat with us online</p>
              <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm">
                Start Chat
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📧</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <p className="text-gray-400 text-sm mb-4">Get a detailed quote</p>
              <p className="text-white font-semibold text-sm">insurance@audi.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Insurance
