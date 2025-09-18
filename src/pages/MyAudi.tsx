import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MyAudi: React.FC = () => {
  return (
    <div style={{backgroundColor: '#1C1C1C', minHeight: '100vh'}}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            myAudi
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Your personal Audi experience. Manage your vehicle, access exclusive services, and stay connected with your Audi.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vehicle Management */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Vehicle Management</h3>
              <p className="text-gray-400 mb-6">Monitor your vehicle's status, service history, and maintenance schedule all in one place.</p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Access Dashboard
              </button>
            </div>

            {/* Remote Services */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Remote Services</h3>
              <p className="text-gray-400 mb-6">Lock/unlock doors, start climate control, and check vehicle status from anywhere.</p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Enable Services
              </button>
            </div>

            {/* Service Booking */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Service Booking</h3>
              <p className="text-gray-400 mb-6">Schedule maintenance appointments and track service progress with real-time updates.</p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Book Service
              </button>
            </div>

            {/* Digital Key */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔑</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Digital Key</h3>
              <p className="text-gray-400 mb-6">Use your smartphone as a digital key to unlock and start your Audi vehicle.</p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Setup Digital Key
              </button>
            </div>

            {/* Navigation */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🗺️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Navigation</h3>
              <p className="text-gray-400 mb-6">Get personalized route suggestions and real-time traffic updates.</p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Start Navigation
              </button>
            </div>

            {/* Exclusive Offers */}
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Exclusive Offers</h3>
              <p className="text-gray-400 mb-6">Access special deals, events, and personalized offers just for myAudi members.</p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                View Offers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience myAudi?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Download the myAudi app and start managing your vehicle today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-200 transition-colors">
              Download App
            </button>
            <button className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MyAudi
