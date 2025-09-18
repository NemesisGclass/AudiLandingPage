import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Investors: React.FC = () => {
  return (
    <div style={{backgroundColor: '#1C1C1C', minHeight: '100vh'}}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Investor Relations
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive information for investors, analysts, and financial stakeholders of Audi AG.
          </p>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Key Financial Metrics</h2>
            <p className="text-xl text-gray-300">
              Latest financial performance and key indicators for Audi AG.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Revenue</h3>
              <div className="text-3xl font-bold text-green-400 mb-2">€58.2B</div>
              <p className="text-gray-400">Q3 2024</p>
              <div className="text-sm text-green-300 mt-2">+8.5% YoY</div>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Operating Profit</h3>
              <div className="text-3xl font-bold text-blue-400 mb-2">€4.8B</div>
              <p className="text-gray-400">Q3 2024</p>
              <div className="text-sm text-blue-300 mt-2">+12.3% YoY</div>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Vehicle Sales</h3>
              <div className="text-3xl font-bold text-purple-400 mb-2">1.8M</div>
              <p className="text-gray-400">Units YTD</p>
              <div className="text-sm text-purple-300 mt-2">+5.2% YoY</div>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Operating Margin</h3>
              <div className="text-3xl font-bold text-yellow-400 mb-2">8.2%</div>
              <p className="text-gray-400">Q3 2024</p>
              <div className="text-sm text-yellow-300 mt-2">+0.3pp YoY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Reports Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Financial Reports</h2>
            <p className="text-xl text-gray-300">
              Access our latest financial reports, presentations, and investor materials.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Q3 2024 Quarterly Report</h3>
                  <p className="text-gray-300 mb-4">
                    Comprehensive quarterly financial results including revenue, profit, and strategic updates.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">PDF</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Excel</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Presentation</span>
                  </div>
                </div>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors mt-4 md:mt-0">
                  Download
                </button>
              </div>
            </div>
            
            <div className="glass-card rounded-3xl p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Annual Report 2023</h3>
                  <p className="text-gray-300 mb-4">
                    Complete annual financial statements, sustainability report, and strategic outlook.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">PDF</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Interactive</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Sustainability</span>
                  </div>
                </div>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors mt-4 md:mt-0">
                  Download
                </button>
              </div>
            </div>
            
            <div className="glass-card rounded-3xl p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Investor Presentation</h3>
                  <p className="text-gray-300 mb-4">
                    Strategic overview, market analysis, and future outlook for investors and analysts.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">PDF</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">PowerPoint</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Webcast</span>
                  </div>
                </div>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors mt-4 md:mt-0">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stock Information Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Stock Information</h2>
            <p className="text-xl text-gray-300">
              Current stock performance and trading information for Audi AG.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Current Stock Price</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Current Price</span>
                  <span className="text-2xl font-bold text-white">€145.50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Change</span>
                  <span className="text-lg font-semibold text-green-400">+2.30 (+1.61%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Volume</span>
                  <span className="text-lg font-semibold text-white">1,234,567</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Market Cap</span>
                  <span className="text-lg font-semibold text-white">€58.2B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">52-Week High</span>
                  <span className="text-lg font-semibold text-white">€158.90</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">52-Week Low</span>
                  <span className="text-lg font-semibold text-white">€112.30</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Trading Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Exchange</span>
                  <span className="text-lg font-semibold text-white">Frankfurt Stock Exchange</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Ticker Symbol</span>
                  <span className="text-lg font-semibold text-white">NSU</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">ISIN</span>
                  <span className="text-lg font-semibold text-white">DE0006757008</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Dividend Yield</span>
                  <span className="text-lg font-semibold text-white">3.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">P/E Ratio</span>
                  <span className="text-lg font-semibold text-white">12.4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Beta</span>
                  <span className="text-lg font-semibold text-white">1.15</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">ESG & Sustainability</h2>
            <p className="text-xl text-gray-300">
              Our commitment to environmental, social, and governance excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Environmental</h3>
              <p className="text-gray-400 mb-6">Carbon neutrality by 2050 and sustainable manufacturing practices.</p>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• Carbon neutral production</li>
                <li>• Renewable energy usage</li>
                <li>• Circular economy initiatives</li>
                <li>• Water conservation</li>
              </ul>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Social</h3>
              <p className="text-gray-400 mb-6">Diversity, inclusion, and community engagement initiatives.</p>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• Diversity & inclusion</li>
                <li>• Employee development</li>
                <li>• Community programs</li>
                <li>• Safety standards</li>
              </ul>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Governance</h3>
              <p className="text-gray-400 mb-6">Transparent governance and ethical business practices.</p>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• Board diversity</li>
                <li>• Risk management</li>
                <li>• Compliance programs</li>
                <li>• Transparency reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Investor Events</h2>
            <p className="text-xl text-gray-300">
              Upcoming investor conferences, earnings calls, and corporate events.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-2">January 15, 2025</div>
                  <h3 className="text-2xl font-bold mb-4">Q4 2024 Earnings Call</h3>
                  <p className="text-gray-300 mb-4">
                    Live webcast of our fourth quarter 2024 financial results and strategic updates.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Webcast</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Q&A</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Presentation</span>
                  </div>
                </div>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors mt-4 md:mt-0">
                  Register
                </button>
              </div>
            </div>
            
            <div className="glass-card rounded-3xl p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-2">February 20, 2025</div>
                  <h3 className="text-2xl font-bold mb-4">Annual General Meeting</h3>
                  <p className="text-gray-300 mb-4">
                    Annual shareholders meeting with voting on key corporate matters and strategic initiatives.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">In-Person</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Virtual</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Voting</span>
                  </div>
                </div>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors mt-4 md:mt-0">
                  Register
                </button>
              </div>
            </div>
            
            <div className="glass-card rounded-3xl p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-2">March 10, 2025</div>
                  <h3 className="text-2xl font-bold mb-4">Investor Day</h3>
                  <p className="text-gray-300 mb-4">
                    Comprehensive presentation of our strategic roadmap, technology innovations, and financial outlook.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Strategy</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Technology</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Outlook</span>
                  </div>
                </div>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors mt-4 md:mt-0">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Investor Relations Contact</h2>
          <p className="text-xl text-gray-300 mb-8">
            For investor inquiries, analyst meetings, or additional financial information.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Investor Relations</h3>
              <p className="text-gray-400 text-sm mb-4">General investor inquiries</p>
              <p className="text-white font-semibold">investors@audi.com</p>
            </div>
            
            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Financial Analysis</h3>
              <p className="text-gray-400 text-sm mb-4">For analysts and institutional investors</p>
              <p className="text-white font-semibold">analysis@audi.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Investors