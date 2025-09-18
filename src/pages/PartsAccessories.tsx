import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PartsAccessories: React.FC = () => {
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
            Parts & Accessories
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Genuine Audi parts and accessories to enhance your vehicle's performance, style, and functionality.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Performance Parts */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏎️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Performance Parts</h3>
              <p className="text-gray-400 mb-6">Enhance your Audi's performance with genuine high-performance components.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Sport exhaust systems</li>
                <li>• Performance air filters</li>
                <li>• Sport suspension components</li>
                <li>• Brake upgrade kits</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Shop Performance
              </button>
            </div>

            {/* Exterior Accessories */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Exterior Accessories</h3>
              <p className="text-gray-400 mb-6">Customize your Audi's exterior with premium accessories and styling elements.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Body kits and spoilers</li>
                <li>• Chrome and black trim</li>
                <li>• Roof racks and carriers</li>
                <li>• Mud flaps and guards</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Shop Exterior
              </button>
            </div>

            {/* Interior Accessories */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🪑</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Interior Accessories</h3>
              <p className="text-gray-400 mb-6">Enhance comfort and functionality with premium interior accessories.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Floor mats and liners</li>
                <li>• Seat covers and cushions</li>
                <li>• Storage organizers</li>
                <li>• Ambient lighting kits</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Shop Interior
              </button>
            </div>

            {/* Technology */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Technology</h3>
              <p className="text-gray-400 mb-6">Upgrade your Audi with the latest technology and connectivity features.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Wireless charging pads</li>
                <li>• USB adapters and cables</li>
                <li>• Navigation updates</li>
                <li>• Smartphone integration</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Shop Technology
              </button>
            </div>

            {/* Maintenance Parts */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Maintenance Parts</h3>
              <p className="text-gray-400 mb-6">Keep your Audi running smoothly with genuine maintenance parts.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Oil filters and fluids</li>
                <li>• Air filters and cabin filters</li>
                <li>• Brake pads and rotors</li>
                <li>• Spark plugs and coils</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Shop Maintenance
              </button>
            </div>

            {/* Lifestyle Accessories */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎒</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Lifestyle Accessories</h3>
              <p className="text-gray-400 mb-6">Complete your Audi lifestyle with branded accessories and merchandise.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Audi branded apparel</li>
                <li>• Travel accessories</li>
                <li>• Key chains and wallets</li>
                <li>• Collectible items</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Shop Lifestyle
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Featured Products</h2>
            <p className="text-xl text-gray-300">
              Discover our most popular parts and accessories for your Audi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="w-24 h-24 bg-gray-600 rounded-2xl mx-auto mb-4"></div>
              <h3 className="text-lg font-bold mb-2">Audi Sport Exhaust</h3>
              <p className="text-gray-400 text-sm mb-4">Enhanced sound and performance</p>
              <p className="text-xl font-bold mb-4">$2,499</p>
              <button className="w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Add to Cart
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="w-24 h-24 bg-gray-600 rounded-2xl mx-auto mb-4"></div>
              <h3 className="text-lg font-bold mb-2">Carbon Fiber Spoiler</h3>
              <p className="text-gray-400 text-sm mb-4">Aerodynamic styling upgrade</p>
              <p className="text-xl font-bold mb-4">$1,299</p>
              <button className="w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Add to Cart
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="w-24 h-24 bg-gray-600 rounded-2xl mx-auto mb-4"></div>
              <h3 className="text-lg font-bold mb-2">Wireless Charging Pad</h3>
              <p className="text-gray-400 text-sm mb-4">Convenient phone charging</p>
              <p className="text-xl font-bold mb-4">$199</p>
              <button className="w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Add to Cart
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="w-24 h-24 bg-gray-600 rounded-2xl mx-auto mb-4"></div>
              <h3 className="text-lg font-bold mb-2">All-Weather Floor Mats</h3>
              <p className="text-gray-400 text-sm mb-4">Protect your interior</p>
              <p className="text-xl font-bold mb-4">$149</p>
              <button className="w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Parts Lookup Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Find Parts for Your Vehicle</h2>
          <p className="text-xl text-gray-300 mb-8">
            Enter your VIN or select your vehicle to find compatible parts and accessories.
          </p>
          
          <div className="glass-card rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-left text-white font-semibold mb-2">Vehicle Identification Number (VIN)</label>
                <input 
                  type="text" 
                  placeholder="Enter your 17-digit VIN"
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-left text-white font-semibold mb-2">Or Select Your Vehicle</label>
                <select className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white">
                  <option value="">Choose your Audi model</option>
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
              </div>
            </div>
            <button className="w-full bg-white text-black py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors mt-6">
              Find Parts
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PartsAccessories
