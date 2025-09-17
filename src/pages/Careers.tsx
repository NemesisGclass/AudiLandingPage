import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#1C1C1C'}}>
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Careers at Audi</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join our team of innovators, engineers, and visionaries who are shaping the future of mobility.
            </p>
          </div>
        </section>

        {/* Why Work at Audi */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Why Work at Audi?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-400">
                  Work on cutting-edge technologies and be part of the automotive revolution.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">🌍</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
                <p className="text-gray-400">
                  Make a difference in sustainable mobility and environmental responsibility.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">👥</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Team Spirit</h3>
                <p className="text-gray-400">
                  Collaborate with talented professionals from around the world.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">📈</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Growth</h3>
                <p className="text-gray-400">
                  Continuous learning opportunities and career development programs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">⚖️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Work-Life Balance</h3>
                <p className="text-gray-400">
                  Flexible working arrangements and comprehensive benefits package.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">🏆</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-400">
                  Be part of a premium brand known for quality and performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Open Positions</h2>
              <p className="text-xl text-gray-400">Explore current opportunities across our global locations</p>
            </div>
            <div className="space-y-6">
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Software Engineer - Autonomous Driving</h3>
                    <p className="text-gray-400 mb-2">Ingolstadt, Germany</p>
                    <p className="text-gray-300">Develop cutting-edge software for autonomous vehicle systems.</p>
                  </div>
                  <button className="mt-4 md:mt-0 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Design Engineer - Electric Vehicles</h3>
                    <p className="text-gray-400 mb-2">Neckarsulm, Germany</p>
                    <p className="text-gray-300">Design innovative electric vehicle components and systems.</p>
                  </div>
                  <button className="mt-4 md:mt-0 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Marketing Manager - Digital</h3>
                    <p className="text-gray-400 mb-2">Munich, Germany</p>
                    <p className="text-gray-300">Lead digital marketing initiatives and brand campaigns.</p>
                  </div>
                  <button className="mt-4 md:mt-0 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Application Process</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Apply Online</h3>
                <p className="text-gray-400">Submit your application through our career portal</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Initial Review</h3>
                <p className="text-gray-400">Our team reviews your qualifications and experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Interviews</h3>
                <p className="text-gray-400">Meet with our team and showcase your skills</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Welcome Aboard</h3>
                <p className="text-gray-400">Join the Audi family and start your journey</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}

export default Careers
