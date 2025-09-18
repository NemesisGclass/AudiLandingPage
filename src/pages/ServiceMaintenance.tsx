import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ServiceMaintenance: React.FC = () => {
  return (
    <div style={{backgroundColor: '#1C1C1C', minHeight: '100vh'}}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Service & Maintenance
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Keep your Audi performing at its best with our comprehensive service and maintenance programs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Regular Maintenance */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Regular Maintenance</h3>
              <p className="text-gray-400 mb-6">Scheduled maintenance to keep your Audi running smoothly and efficiently.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Oil changes and filter replacements</li>
                <li>• Brake system inspection</li>
                <li>• Tire rotation and alignment</li>
                <li>• Fluid level checks</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Schedule Service
              </button>
            </div>

            {/* Diagnostic Services */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Diagnostic Services</h3>
              <p className="text-gray-400 mb-6">Advanced diagnostic tools to identify and resolve any issues with your vehicle.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Engine diagnostics</li>
                <li>• Electrical system checks</li>
                <li>• Performance analysis</li>
                <li>• Safety system inspection</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Book Diagnostic
              </button>
            </div>

            {/* Warranty Service */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Warranty Service</h3>
              <p className="text-gray-400 mb-6">Comprehensive warranty coverage with certified Audi technicians.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Factory warranty repairs</li>
                <li>• Extended warranty coverage</li>
                <li>• Recall service</li>
                <li>• Technical service bulletins</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Check Warranty
              </button>
            </div>

            {/* Express Service */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Express Service</h3>
              <p className="text-gray-400 mb-6">Quick service options for busy schedules and minor maintenance needs.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Oil changes in 30 minutes</li>
                <li>• Tire services</li>
                <li>• Battery replacement</li>
                <li>• Wiper blade installation</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Express Service
              </button>
            </div>

            {/* Mobile Service */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚐</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Mobile Service</h3>
              <p className="text-gray-400 mb-6">Convenient service at your location with our mobile service team.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Service at home or office</li>
                <li>• Same-day appointments</li>
                <li>• Certified technicians</li>
                <li>• Quality guarantee</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Request Mobile Service
              </button>
            </div>

            {/* Service Plans */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Service Plans</h3>
              <p className="text-gray-400 mb-6">Prepaid service plans for predictable maintenance costs and peace of mind.</p>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>• Prepaid maintenance</li>
                <li>• Extended service plans</li>
                <li>• Flexible payment options</li>
                <li>• Transferable coverage</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                View Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Centers Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Find a Service Center</h2>
            <p className="text-xl text-gray-300">
              Locate the nearest Audi service center and schedule your appointment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Service Center Locator</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Enter your ZIP code or city"
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                />
                <button className="w-full bg-white text-black py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Find Service Centers
                </button>
              </div>
            </div>
            
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Schedule Online</h3>
              <p className="text-gray-300 mb-6">
                Book your service appointment online and choose your preferred time slot.
              </p>
              <button className="w-full bg-white text-black py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServiceMaintenance
