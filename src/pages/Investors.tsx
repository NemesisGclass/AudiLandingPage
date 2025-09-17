import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Investors: React.FC = () => {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#1C1C1C'}}>
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Investor Relations</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover investment opportunities and financial performance of the Audi brand within the Volkswagen Group.
            </p>
          </div>
        </section>

        {/* Financial Highlights */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Financial Highlights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-gray-900 rounded-lg p-6">
                <h3 className="text-3xl font-bold mb-2">€58.7B</h3>
                <p className="text-gray-400">Revenue 2023</p>
              </div>
              <div className="text-center bg-gray-900 rounded-lg p-6">
                <h3 className="text-3xl font-bold mb-2">1.9M</h3>
                <p className="text-gray-400">Vehicles Delivered</p>
              </div>
              <div className="text-center bg-gray-900 rounded-lg p-6">
                <h3 className="text-3xl font-bold mb-2">€4.2B</h3>
                <p className="text-gray-400">Operating Profit</p>
              </div>
              <div className="text-center bg-gray-900 rounded-lg p-6">
                <h3 className="text-3xl font-bold mb-2">7.1%</h3>
                <p className="text-gray-400">Operating Margin</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stock Information */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Stock Information</h2>
              <p className="text-xl text-gray-400">Audi AG is part of the Volkswagen Group (VOW.DE)</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-black/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Current Stock Price</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">VOW.DE (Frankfurt)</span>
                    <span className="text-white font-semibold">€142.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Change</span>
                    <span className="text-green-400 font-semibold">+2.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Volume</span>
                    <span className="text-white font-semibold">1.2M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Market Cap</span>
                    <span className="text-white font-semibold">€68.5B</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Key Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">P/E Ratio</span>
                    <span className="text-white font-semibold">8.2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Dividend Yield</span>
                    <span className="text-white font-semibold">3.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">52W High</span>
                    <span className="text-white font-semibold">€158.20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">52W Low</span>
                    <span className="text-white font-semibold">€98.45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Reports */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Financial Reports</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Q3 2024 Financial Results</h3>
                    <p className="text-gray-400 mb-2">Published: November 15, 2024</p>
                    <p className="text-gray-300">Third quarter financial performance and strategic updates.</p>
                  </div>
                  <button className="mt-4 md:mt-0 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Download PDF
                  </button>
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Annual Report 2023</h3>
                    <p className="text-gray-400 mb-2">Published: March 20, 2024</p>
                    <p className="text-gray-300">Comprehensive annual report including financial statements and sustainability metrics.</p>
                  </div>
                  <button className="mt-4 md:mt-0 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Download PDF
                  </button>
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Sustainability Report 2023</h3>
                    <p className="text-gray-400 mb-2">Published: April 10, 2024</p>
                    <p className="text-gray-300">Environmental, social, and governance performance metrics.</p>
                  </div>
                  <button className="mt-4 md:mt-0 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Strategy */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Investment Strategy</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">⚡</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Electrification</h3>
                <p className="text-gray-400">
                  Massive investment in electric vehicle technology and charging infrastructure.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">🤖</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Autonomous Driving</h3>
                <p className="text-gray-400">
                  Leading development in autonomous driving technology and AI integration.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">🌱</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
                <p className="text-gray-400">
                  Commitment to carbon neutrality and sustainable manufacturing processes.
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

export default Investors
