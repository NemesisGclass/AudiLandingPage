import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Press: React.FC = () => {
  return (
    <div style={{backgroundColor: '#1C1C1C', minHeight: '100vh'}}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Press Center
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest news, announcements, and media resources from Audi.
          </p>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Latest News</h2>
            <p className="text-xl text-gray-300">
              Stay informed about Audi's latest developments and announcements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-8">
              <div className="w-full h-48 bg-gray-600 rounded-2xl mb-6"></div>
              <div className="text-sm text-gray-400 mb-2">December 15, 2024</div>
              <h3 className="text-xl font-bold mb-4">Audi Announces New Electric Vehicle Lineup for 2025</h3>
              <p className="text-gray-400 mb-6">
                Audi reveals its expanded electric vehicle portfolio, including new models and enhanced technology features.
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Read More
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-8">
              <div className="w-full h-48 bg-gray-600 rounded-2xl mb-6"></div>
              <div className="text-sm text-gray-400 mb-2">December 10, 2024</div>
              <h3 className="text-xl font-bold mb-4">Audi Achieves Record Sales in North American Market</h3>
              <p className="text-gray-400 mb-6">
                Strong performance in the US and Canadian markets drives Audi's global growth strategy forward.
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Read More
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-8">
              <div className="w-full h-48 bg-gray-600 rounded-2xl mb-6"></div>
              <div className="text-sm text-gray-400 mb-2">December 5, 2024</div>
              <h3 className="text-xl font-bold mb-4">Audi Partners with Tech Leaders for Autonomous Driving</h3>
              <p className="text-gray-400 mb-6">
                Strategic partnerships accelerate development of next-generation autonomous driving technologies.
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Press Releases</h2>
            <p className="text-xl text-gray-300">
              Official announcements and corporate communications from Audi.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-2">December 20, 2024</div>
                  <h3 className="text-2xl font-bold mb-4">Audi Unveils Revolutionary Battery Technology</h3>
                  <p className="text-gray-300 mb-4">
                    New solid-state battery technology promises 50% longer range and faster charging times for future Audi electric vehicles.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Technology</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Electric Vehicles</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Innovation</span>
                  </div>
                </div>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors mt-4 md:mt-0">
                  Download PDF
                </button>
              </div>
            </div>
            
            <div className="glass-card rounded-3xl p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-2">December 18, 2024</div>
                  <h3 className="text-2xl font-bold mb-4">Audi Reports Strong Q4 Financial Results</h3>
                  <p className="text-gray-300 mb-4">
                    Record revenue and profitability driven by strong demand for premium vehicles and successful cost management initiatives.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Financial</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Performance</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Growth</span>
                  </div>
                </div>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors mt-4 md:mt-0">
                  Download PDF
                </button>
              </div>
            </div>
            
            <div className="glass-card rounded-3xl p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-2">December 12, 2024</div>
                  <h3 className="text-2xl font-bold mb-4">Audi Expands Manufacturing Operations in North America</h3>
                  <p className="text-gray-300 mb-4">
                    New production facility in Mexico will support growing demand for Audi vehicles in the North American market.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">Manufacturing</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Expansion</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">North America</span>
                  </div>
                </div>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors mt-4 md:mt-0">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Resources Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Media Resources</h2>
            <p className="text-xl text-gray-300">
              High-resolution images, videos, and other media assets for press use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Press Photos</h3>
              <p className="text-gray-400 mb-6">High-resolution images of Audi vehicles, executives, and facilities.</p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Browse Gallery
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Video Content</h3>
              <p className="text-gray-400 mb-6">Product videos, commercials, and behind-the-scenes content.</p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Watch Videos
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Fact Sheets</h3>
              <p className="text-gray-400 mb-6">Technical specifications and detailed information about Audi models.</p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Download Files
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Recent Awards</h2>
            <p className="text-xl text-gray-300">
              Recognition and accolades received by Audi and its vehicles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Car of the Year</h3>
              <p className="text-gray-400 mb-4">Audi e-tron GT</p>
              <p className="text-sm text-gray-300">European Car of the Year 2024</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Safety Award</h3>
              <p className="text-gray-400 mb-4">Audi Q5</p>
              <p className="text-sm text-gray-300">IIHS Top Safety Pick+ 2024</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-400 mb-4">Audi AG</p>
              <p className="text-sm text-gray-300">Carbon Trust Certification</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Design Award</h3>
              <p className="text-gray-400 mb-4">Audi A8</p>
              <p className="text-sm text-gray-300">Red Dot Design Award 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Press Contact</h2>
          <p className="text-xl text-gray-300 mb-8">
            For media inquiries, interviews, or additional information, please contact our press team.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="text-lg font-bold mb-2">General Press</h3>
              <p className="text-gray-400 text-sm mb-4">For general media inquiries</p>
              <p className="text-white font-semibold">press@audi.com</p>
            </div>
            
            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🚗</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Product Press</h3>
              <p className="text-gray-400 text-sm mb-4">For vehicle and technology questions</p>
              <p className="text-white font-semibold">product@audi.com</p>
            </div>
            
            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">💼</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Corporate Press</h3>
              <p className="text-gray-400 text-sm mb-4">For business and financial news</p>
              <p className="text-white font-semibold">corporate@audi.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Press