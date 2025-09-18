import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FinanceLeasing: React.FC = () => {
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
            Finance & Leasing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Flexible financing and leasing options to make your Audi dreams a reality.
          </p>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Audi Financing */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Audi Financing</h3>
              <p className="text-gray-400 mb-6">Competitive rates and flexible terms to finance your new Audi.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Low APR financing</li>
                <li>• Flexible terms up to 72 months</li>
                <li>• Quick approval process</li>
                <li>• Online application</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Apply Now
              </button>
            </div>

            {/* Audi Leasing */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Audi Leasing</h3>
              <p className="text-gray-400 mb-6">Drive the latest Audi with lower monthly payments and flexible terms.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Lower monthly payments</li>
                <li>• Latest technology</li>
                <li>• Warranty coverage</li>
                <li>• Easy upgrade options</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Learn More
              </button>
            </div>

            {/* Certified Pre-Owned */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Certified Pre-Owned</h3>
              <p className="text-gray-400 mb-6">Quality pre-owned Audis with extended warranty and financing options.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Comprehensive inspection</li>
                <li>• Extended warranty</li>
                <li>• Special financing rates</li>
                <li>• Peace of mind</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Browse CPO
              </button>
            </div>

            {/* Trade-In */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Trade-In Program</h3>
              <p className="text-gray-400 mb-6">Get the best value for your current vehicle with our trade-in program.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Fair market value</li>
                <li>• Instant appraisal</li>
                <li>• Convenient process</li>
                <li>• Tax benefits</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Get Value
              </button>
            </div>

            {/* Insurance */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Audi Insurance</h3>
              <p className="text-gray-400 mb-6">Comprehensive insurance coverage designed specifically for Audi vehicles.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Competitive rates</li>
                <li>• Audi-specific coverage</li>
                <li>• 24/7 claims support</li>
                <li>• OEM parts guarantee</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Get Quote
              </button>
            </div>

            {/* Protection Plans */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Protection Plans</h3>
              <p className="text-gray-400 mb-6">Extended warranty and protection plans for your peace of mind.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Extended warranty</li>
                <li>• Maintenance plans</li>
                <li>• Tire and wheel protection</li>
                <li>• Paint protection</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                View Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Payment Calculator</h2>
            <p className="text-xl text-gray-300">
              Calculate your monthly payments and explore different financing options.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Financing Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-white font-semibold mb-2">Vehicle Price</label>
                  <input 
                    type="number" 
                    placeholder="$50,000"
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Down Payment</label>
                  <input 
                    type="number" 
                    placeholder="$5,000"
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Term (Months)</label>
                  <select className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="36">36 months</option>
                    <option value="48">48 months</option>
                    <option value="60">60 months</option>
                    <option value="72">72 months</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Interest Rate (%)</label>
                  <input 
                    type="number" 
                    placeholder="3.9"
                    step="0.1"
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  />
                </div>
                <button className="w-full bg-white text-black py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Calculate Payment
                </button>
              </div>
            </div>
            
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Leasing Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-white font-semibold mb-2">MSRP</label>
                  <input 
                    type="number" 
                    placeholder="$50,000"
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Residual Value (%)</label>
                  <input 
                    type="number" 
                    placeholder="55"
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Lease Term (Months)</label>
                  <select className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="24">24 months</option>
                    <option value="36">36 months</option>
                    <option value="48">48 months</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Money Factor</label>
                  <input 
                    type="number" 
                    placeholder="0.0015"
                    step="0.0001"
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  />
                </div>
                <button className="w-full bg-white text-black py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Calculate Lease
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Current Offers</h2>
            <p className="text-xl text-gray-300">
              Take advantage of our current financing and leasing specials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">0.9% APR Financing</h3>
              <p className="text-gray-400 mb-6">Special financing rate on select Audi models for qualified buyers.</p>
              <div className="text-3xl font-bold text-green-400 mb-4">0.9% APR</div>
              <p className="text-sm text-gray-400 mb-6">For up to 60 months</p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                View Details
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Lease Special</h3>
              <p className="text-gray-400 mb-6">Low monthly lease payments on new Audi vehicles.</p>
              <div className="text-3xl font-bold text-blue-400 mb-4">$399/mo</div>
              <p className="text-sm text-gray-400 mb-6">Plus tax and fees</p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                View Details
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Trade-In Bonus</h3>
              <p className="text-gray-400 mb-6">Get extra value for your trade-in vehicle.</p>
              <div className="text-3xl font-bold text-purple-400 mb-4">$2,000</div>
              <p className="text-sm text-gray-400 mb-6">Additional trade-in value</p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FinanceLeasing
