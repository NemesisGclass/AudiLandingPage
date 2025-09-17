import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Press: React.FC = () => {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#1C1C1C'}}>
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Press Center</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest news, press releases, and media resources from Audi.
            </p>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Latest News</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-gray-900 rounded-lg overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                  }}
                ></div>
                <div className="p-6">
                  <span className="text-sm text-gray-400">December 15, 2024</span>
                  <h3 className="text-xl font-bold mb-3 mt-2">Audi Announces New Electric Vehicle Lineup</h3>
                  <p className="text-gray-400 mb-4">
                    Audi reveals its latest electric vehicles featuring advanced battery technology and autonomous driving capabilities.
                  </p>
                  <a href="#" className="text-white hover:text-gray-300 font-semibold">Read More →</a>
                </div>
              </article>

              <article className="bg-gray-900 rounded-lg overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                  }}
                ></div>
                <div className="p-6">
                  <span className="text-sm text-gray-400">December 10, 2024</span>
                  <h3 className="text-xl font-bold mb-3 mt-2">Audi Wins Design Excellence Award</h3>
                  <p className="text-gray-400 mb-4">
                    The Audi design team receives recognition for innovative vehicle design and sustainable materials.
                  </p>
                  <a href="#" className="text-white hover:text-gray-300 font-semibold">Read More →</a>
                </div>
              </article>

              <article className="bg-gray-900 rounded-lg overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                  }}
                ></div>
                <div className="p-6">
                  <span className="text-sm text-gray-400">December 5, 2024</span>
                  <h3 className="text-xl font-bold mb-3 mt-2">Sustainability Milestone Achieved</h3>
                  <p className="text-gray-400 mb-4">
                    Audi reaches carbon neutrality in production facilities across Europe.
                  </p>
                  <a href="#" className="text-white hover:text-gray-300 font-semibold">Read More →</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Press Releases</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <span className="text-sm text-gray-400">December 20, 2024</span>
                    <h3 className="text-2xl font-bold mb-2 mt-1">Audi Q8 e-tron Sets New Range Record</h3>
                    <p className="text-gray-300">Official press release announcing the new range capabilities of the Audi Q8 e-tron.</p>
                  </div>
                  <button className="mt-4 md:mt-0 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Download PDF
                  </button>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <span className="text-sm text-gray-400">December 18, 2024</span>
                    <h3 className="text-2xl font-bold mb-2 mt-1">Audi Sport Performance Center Opens</h3>
                    <p className="text-gray-300">New state-of-the-art facility dedicated to high-performance vehicle development.</p>
                  </div>
                  <button className="mt-4 md:mt-0 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Download PDF
                  </button>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <span className="text-sm text-gray-400">December 12, 2024</span>
                    <h3 className="text-2xl font-bold mb-2 mt-1">Partnership with Tech Giants Announced</h3>
                    <p className="text-gray-300">Strategic collaboration for next-generation autonomous driving technology.</p>
                  </div>
                  <button className="mt-4 md:mt-0 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Resources */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Media Resources</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">📸</span>
                </div>
                <h3 className="text-xl font-bold mb-4">High-Res Images</h3>
                <p className="text-gray-400 mb-4">Download high-resolution images of our vehicles</p>
                <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Access Gallery
                </button>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">🎥</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Video Content</h3>
                <p className="text-gray-400 mb-4">Professional videos and B-roll footage</p>
                <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  View Videos
                </button>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Fact Sheets</h3>
                <p className="text-gray-400 mb-4">Technical specifications and vehicle data</p>
                <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Download PDFs
                </button>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">👤</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Expert Contacts</h3>
                <p className="text-gray-400 mb-4">Connect with our technical experts</p>
                <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}

export default Press
