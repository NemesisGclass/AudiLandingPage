import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ElectricVehicles: React.FC = () => {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#1C1C1C'}}>
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Electric Vehicles</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of mobility with Audi's innovative electric vehicle lineup, 
              combining performance, luxury, and sustainability.
            </p>
          </div>
        </section>

        {/* Electric Lineup */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Electric Vehicle Lineup</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div 
                  className="h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/e-tron-GT.jpg')`
                  }}
                ></div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">Audi e-tron GT</h3>
                  <p className="text-gray-400 mb-4">Starting from $106,500</p>
                  <p className="text-gray-300 mb-6">
                    The e-tron GT combines breathtaking design with electric performance. 
                    With up to 522 horsepower and a range of up to 238 miles, it delivers 
                    the perfect blend of power and efficiency.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <span className="text-sm text-gray-400">Range</span>
                      <p className="text-lg font-semibold">238 miles</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-400">Power</span>
                      <p className="text-lg font-semibold">522 HP</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-400">0-60 mph</span>
                      <p className="text-lg font-semibold">3.9s</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-400">Charging</span>
                      <p className="text-lg font-semibold">270 kW</p>
                    </div>
                  </div>
                  <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div 
                  className="h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                  }}
                ></div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">Audi Q4 e-tron</h3>
                  <p className="text-gray-400 mb-4">Starting from $44,995</p>
                  <p className="text-gray-300 mb-6">
                    The Q4 e-tron offers the perfect balance of electric efficiency and SUV practicality. 
                    With spacious interiors and advanced technology, it's designed for modern families.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <span className="text-sm text-gray-400">Range</span>
                      <p className="text-lg font-semibold">265 miles</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-400">Power</span>
                      <p className="text-lg font-semibold">295 HP</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-400">0-60 mph</span>
                      <p className="text-lg font-semibold">5.8s</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-400">Charging</span>
                      <p className="text-lg font-semibold">125 kW</p>
                    </div>
                  </div>
                  <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Electric Technology */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Electric Technology</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">🔋</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Advanced Batteries</h3>
                <p className="text-gray-400">
                  State-of-the-art lithium-ion batteries with thermal management systems 
                  for optimal performance and longevity.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">⚡</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Fast Charging</h3>
                <p className="text-gray-400">
                  Ultra-fast charging capabilities up to 270 kW, allowing you to charge 
                  from 5% to 80% in just 22 minutes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">🔄</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Regenerative Braking</h3>
                <p className="text-gray-400">
                  Intelligent energy recovery system that converts braking energy back 
                  into battery power, extending your range.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Charging Network */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">Charging Network</h2>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  Access to over 150,000 charging points across Europe and North America through 
                  our partnership with leading charging networks. Find charging stations near you 
                  with our integrated navigation system.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300">150,000+ charging points</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300">Ultra-fast charging up to 270 kW</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300">Integrated navigation with charging stops</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300">Home charging solutions available</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div 
                  className="h-96 bg-cover bg-center rounded-2xl"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Impact */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Environmental Impact</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-black/50 rounded-lg p-8">
                <h3 className="text-3xl font-bold mb-2 text-green-400">0</h3>
                <p className="text-gray-400">Direct CO2 Emissions</p>
                <p className="text-sm text-gray-500 mt-2">While driving</p>
              </div>
              <div className="text-center bg-black/50 rounded-lg p-8">
                <h3 className="text-3xl font-bold mb-2 text-blue-400">-40%</h3>
                <p className="text-gray-400">Carbon Footprint</p>
                <p className="text-sm text-gray-500 mt-2">Compared to gasoline vehicles</p>
              </div>
              <div className="text-center bg-black/50 rounded-lg p-8">
                <h3 className="text-3xl font-bold mb-2 text-purple-400">95%</h3>
                <p className="text-gray-400">Battery Recyclable</p>
                <p className="text-sm text-gray-500 mt-2">End-of-life recycling</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}

export default ElectricVehicles
