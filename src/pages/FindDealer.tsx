import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FindDealer: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState('')
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  const dealers = [
    {
      id: 1,
      name: "Audi Downtown",
      address: "123 Main Street, Downtown",
      city: "New York, NY 10001",
      phone: "(555) 123-4567",
      distance: "2.3 miles",
      services: ["Sales", "Service", "Parts", "Body Shop"],
      hours: "Mon-Fri: 9AM-8PM, Sat: 9AM-6PM, Sun: 11AM-5PM",
      rating: 4.8,
      reviews: 127
    },
    {
      id: 2,
      name: "Audi Westside",
      address: "456 West Avenue",
      city: "Los Angeles, CA 90210",
      phone: "(555) 987-6543",
      distance: "5.7 miles",
      services: ["Sales", "Service", "Parts"],
      hours: "Mon-Fri: 8AM-7PM, Sat: 9AM-6PM, Sun: 10AM-5PM",
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: "Audi Northside",
      address: "789 North Boulevard",
      city: "Chicago, IL 60601",
      phone: "(555) 456-7890",
      distance: "3.1 miles",
      services: ["Sales", "Service", "Parts", "Body Shop", "Collision"],
      hours: "Mon-Fri: 9AM-8PM, Sat: 9AM-6PM, Sun: 12PM-5PM",
      rating: 4.9,
      reviews: 203
    }
  ]

  return (
    <div style={{backgroundColor: '#1C1C1C', minHeight: '100vh'}}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Find a Dealer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Locate your nearest Audi dealer and discover the services they offer.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Find Your Nearest Dealer</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-white font-semibold mb-4">Location</label>
                <input 
                  type="text" 
                  placeholder="Enter your ZIP code, city, or address"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-4">Services Needed</label>
                <div className="flex flex-wrap gap-3">
                  {["Sales", "Service", "Parts", "Body Shop", "Collision"].map((service) => (
                    <button
                      key={service}
                      onClick={() => toggleService(service)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        selectedServices.includes(service)
                          ? 'bg-white text-black'
                          : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                Search Dealers
              </button>
            </div>
          </div>

          {/* Dealers List */}
          <div className="space-y-6">
            {dealers.map((dealer) => (
              <div key={dealer.id} className="glass-card rounded-3xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold">{dealer.name}</h3>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-green-400">{dealer.distance}</div>
                        <div className="text-sm text-gray-400">Distance</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <span className="text-gray-400 w-20">Address:</span>
                        <span className="text-white">{dealer.address}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-400 w-20">City:</span>
                        <span className="text-white">{dealer.city}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-400 w-20">Phone:</span>
                        <span className="text-white">{dealer.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-400 w-20">Hours:</span>
                        <span className="text-white">{dealer.hours}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-gray-400 mb-2">Services:</div>
                      <div className="flex flex-wrap gap-2">
                        {dealer.services.map((service) => (
                          <span key={service} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-white font-semibold">{dealer.rating}</span>
                        <span className="text-gray-400 ml-2">({dealer.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <button className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                      Get Directions
                    </button>
                    <button className="w-full border-2 border-white text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                      Call Dealer
                    </button>
                    <button className="w-full border-2 border-white text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                      Schedule Service
                    </button>
                    <button className="w-full border-2 border-white text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                      View Inventory
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Dealer Services</h2>
            <p className="text-xl text-gray-300">
              Comprehensive services available at Audi dealerships nationwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Vehicle Sales</h3>
              <p className="text-gray-400 mb-6">Browse new and certified pre-owned Audi vehicles with expert guidance.</p>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• New vehicle inventory</li>
                <li>• Certified pre-owned</li>
                <li>• Financing options</li>
                <li>• Trade-in evaluation</li>
              </ul>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Service & Maintenance</h3>
              <p className="text-gray-400 mb-6">Professional maintenance and repair services by certified technicians.</p>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• Scheduled maintenance</li>
                <li>• Diagnostic services</li>
                <li>• Warranty repairs</li>
                <li>• Express service</li>
              </ul>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔩</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Parts & Accessories</h3>
              <p className="text-gray-400 mb-6">Genuine Audi parts and accessories for your vehicle.</p>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• OEM parts</li>
                <li>• Performance parts</li>
                <li>• Accessories</li>
                <li>• Installation services</li>
              </ul>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Body Shop</h3>
              <p className="text-gray-400 mb-6">Expert collision repair and bodywork services.</p>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• Collision repair</li>
                <li>• Paint matching</li>
                <li>• Frame straightening</li>
                <li>• Insurance claims</li>
              </ul>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Financing</h3>
              <p className="text-gray-400 mb-6">Flexible financing and leasing options to fit your budget.</p>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• Auto loans</li>
                <li>• Lease programs</li>
                <li>• Trade-in financing</li>
                <li>• Special offers</li>
              </ul>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Insurance</h3>
              <p className="text-gray-400 mb-6">Comprehensive insurance coverage for your Audi vehicle.</p>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• Auto insurance</li>
                <li>• Gap coverage</li>
                <li>• Extended warranty</li>
                <li>• Protection plans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Dealer Locations</h2>
            <p className="text-xl text-gray-300">
              Find Audi dealerships across the United States and Canada.
            </p>
          </div>
          
          <div className="glass-card rounded-3xl p-8">
            <div className="w-full h-96 bg-gray-600 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="text-xl font-bold mb-2">Interactive Dealer Map</h3>
                <p className="text-gray-400 mb-4">View all Audi dealerships in your area</p>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Open Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FindDealer
