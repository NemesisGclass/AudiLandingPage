import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Sustainability: React.FC = () => {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#1C1C1C'}}>
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Sustainability</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Driving towards a sustainable future with innovative solutions for carbon-neutral mobility.
            </p>
          </div>
        </section>

        {/* Carbon Neutrality Goals */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Carbon Neutrality Goals</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-gray-900 rounded-lg p-8">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">2025</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Production Sites</h3>
                <p className="text-gray-400">All Audi production sites worldwide will be carbon neutral</p>
              </div>
              <div className="text-center bg-gray-900 rounded-lg p-8">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">2030</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Supply Chain</h3>
                <p className="text-gray-400">Carbon-neutral supply chain across all suppliers</p>
              </div>
              <div className="text-center bg-gray-900 rounded-lg p-8">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">2050</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Complete Neutrality</h3>
                <p className="text-gray-400">Full carbon neutrality across the entire value chain</p>
              </div>
            </div>
          </div>
        </section>

        {/* Electric Vehicle Commitment */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">Electric Vehicle Commitment</h2>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  By 2026, Audi will launch more than 20 fully electric models, representing our commitment 
                  to sustainable mobility and reducing our carbon footprint.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300">20+ electric models by 2026</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300">100% electric lineup by 2033</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300">Advanced battery recycling programs</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div 
                  className="h-96 bg-cover bg-center rounded-2xl"
                  style={{
                    backgroundImage: `url('/electric-car.png')`
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainable Materials */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Sustainable Materials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">♻️</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Recycled Materials</h3>
                <p className="text-gray-400">
                  Using recycled plastics and aluminum in vehicle production
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">🌿</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Natural Fibers</h3>
                <p className="text-gray-400">
                  Incorporating hemp and flax fibers in interior components
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">🔋</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Green Batteries</h3>
                <p className="text-gray-400">
                  Developing batteries with sustainable and recyclable materials
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">🌱</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Bio-Based</h3>
                <p className="text-gray-400">
                  Using bio-based materials for interior surfaces and components
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Environmental Impact</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-black/50 rounded-lg p-6">
                <h3 className="text-3xl font-bold mb-2 text-green-400">-50%</h3>
                <p className="text-gray-400">CO2 Emissions Reduction</p>
                <p className="text-sm text-gray-500 mt-2">Compared to 2018 baseline</p>
              </div>
              <div className="text-center bg-black/50 rounded-lg p-6">
                <h3 className="text-3xl font-bold mb-2 text-blue-400">85%</h3>
                <p className="text-gray-400">Water Recycling</p>
                <p className="text-sm text-gray-500 mt-2">In production processes</p>
              </div>
              <div className="text-center bg-black/50 rounded-lg p-6">
                <h3 className="text-3xl font-bold mb-2 text-yellow-400">100%</h3>
                <p className="text-gray-400">Renewable Energy</p>
                <p className="text-sm text-gray-500 mt-2">At European production sites</p>
              </div>
              <div className="text-center bg-black/50 rounded-lg p-6">
                <h3 className="text-3xl font-bold mb-2 text-purple-400">95%</h3>
                <p className="text-gray-400">Waste Recovery</p>
                <p className="text-sm text-gray-500 mt-2">From production processes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Circular Economy */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Circular Economy</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Creating a closed-loop system where materials are reused, recycled, and repurposed throughout the vehicle lifecycle.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Design for Recycling</h3>
                <p className="text-gray-400">
                  Vehicles designed with end-of-life recycling in mind, using easily separable materials.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Battery Second Life</h3>
                <p className="text-gray-400">
                  Used EV batteries repurposed for energy storage and grid applications.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Parts Remanufacturing</h3>
                <p className="text-gray-400">
                  Refurbishing and remanufacturing components to extend their useful life.
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

export default Sustainability
