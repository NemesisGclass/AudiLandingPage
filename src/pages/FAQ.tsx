import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'vehicle', name: 'Vehicle' },
    { id: 'service', name: 'Service' },
    { id: 'technology', name: 'Technology' },
    { id: 'finance', name: 'Finance' },
    { id: 'warranty', name: 'Warranty' }
  ]

  const faqs = [
    {
      id: 1,
      category: 'vehicle',
      question: 'What is the warranty coverage for my new Audi vehicle?',
      answer: 'All new Audi vehicles come with a 4-year/50,000-mile limited warranty that covers defects in materials or workmanship. This includes coverage for the engine, transmission, and other major components. Additionally, Audi offers extended warranty options for additional peace of mind.'
    },
    {
      id: 2,
      category: 'service',
      question: 'How often should I service my Audi vehicle?',
      answer: 'Audi recommends following the Flexible Service System, which typically means service every 10,000 miles or 12 months, whichever comes first. However, the exact interval depends on your driving conditions and vehicle model. Your vehicle\'s onboard computer will notify you when service is due.'
    },
    {
      id: 3,
      category: 'technology',
      question: 'How do I connect my smartphone to my Audi\'s infotainment system?',
      answer: 'You can connect your smartphone using Apple CarPlay or Android Auto. For wireless connection, ensure Bluetooth is enabled on your phone and follow the pairing process in your vehicle\'s MMI system. For wired connection, use a compatible USB cable connected to the center console.'
    },
    {
      id: 4,
      category: 'finance',
      question: 'What financing options are available for Audi vehicles?',
      answer: 'Audi offers competitive financing rates, lease programs, and certified pre-owned financing. You can apply online, visit your local dealer, or use our payment calculator to estimate monthly payments. Special offers and incentives are available throughout the year.'
    },
    {
      id: 5,
      category: 'warranty',
      question: 'What is covered under Audi\'s extended warranty?',
      answer: 'Audi\'s extended warranty covers major vehicle components including the engine, transmission, electrical systems, and more. Coverage varies by plan, but typically extends protection beyond the standard warranty period. Plans are transferable and can be purchased at any time during the original warranty period.'
    },
    {
      id: 6,
      category: 'vehicle',
      question: 'How do I find my vehicle\'s VIN number?',
      answer: 'Your VIN (Vehicle Identification Number) can be found in several locations: on the driver\'s side dashboard visible through the windshield, on the driver\'s side door jamb, in your vehicle registration documents, or in your insurance paperwork. It\'s a 17-character alphanumeric code.'
    },
    {
      id: 7,
      category: 'service',
      question: 'Can I schedule service appointments online?',
      answer: 'Yes, you can schedule service appointments online through the myAudi app or website. Simply select your preferred dealer, choose a convenient date and time, and specify the type of service needed. You\'ll receive confirmation and can modify or cancel appointments as needed.'
    },
    {
      id: 8,
      category: 'technology',
      question: 'How do I update my Audi\'s navigation system?',
      answer: 'Navigation updates can be downloaded through the myAudi app or website. Connect your vehicle to Wi-Fi or use a USB drive to install updates. Some updates are automatic when connected to Wi-Fi, while others require manual installation. Check your vehicle\'s manual for specific instructions.'
    },
    {
      id: 9,
      category: 'finance',
      question: 'What is Audi\'s lease return process?',
      answer: 'When returning a leased Audi, schedule an inspection appointment with your dealer. The inspection will assess vehicle condition and any excess wear. You can purchase the vehicle, extend the lease, or return it. Any excess mileage or wear charges will be calculated based on your lease agreement.'
    },
    {
      id: 10,
      category: 'warranty',
      question: 'How do I file a warranty claim?',
      answer: 'To file a warranty claim, contact your local Audi dealer or call Audi Customer Service. Provide your VIN, describe the issue, and schedule an inspection if needed. Most warranty repairs are covered at no cost to you, including parts and labor.'
    },
    {
      id: 11,
      category: 'vehicle',
      question: 'What should I do if my Audi breaks down?',
      answer: 'If your Audi breaks down, first ensure your safety by moving to a safe location. Contact Audi Roadside Assistance at 1-800-AUDI-HELP for 24/7 support. They can arrange towing, jump starts, tire changes, and other emergency services. Keep your VIN and location ready when calling.'
    },
    {
      id: 12,
      category: 'service',
      question: 'How much does Audi service cost?',
      answer: 'Service costs vary depending on the type of service and your vehicle model. Basic maintenance like oil changes typically cost $100-200, while major services can range $300-800. Audi offers service packages and prepaid maintenance plans that can help manage costs. Contact your dealer for specific pricing.'
    }
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div style={{backgroundColor: '#1C1C1C', minHeight: '100vh'}}>
      <style>{`
        select {
          background-color: rgba(255, 255, 255, 0.1) !important;
          color: white !important;
        }
        select option {
          background-color: #1C1C1C !important;
          color: white !important;
          padding: 8px 12px;
        }
        select option:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
        select option:checked {
          background-color: rgba(255, 255, 255, 0.2) !important;
        }
      `}</style>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Find answers to common questions about Audi vehicles, services, and ownership.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-white font-semibold mb-4">Search Questions</label>
                <input 
                  type="text" 
                  placeholder="Type your question or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-4">Category</label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {filteredFaqs.map((faq, index) => (
              <div key={faq.id} className="glass-card rounded-3xl p-8">
                <div 
                  className="cursor-pointer"
                  onClick={() => toggleExpanded(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white pr-8">{faq.question}</h3>
                    <div className="text-2xl text-white">
                      {expandedItems.includes(index) ? '−' : '+'}
                    </div>
                  </div>
                </div>
                
                {expandedItems.includes(index) && (
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-4">No Results Found</h3>
              <p className="text-gray-400 mb-6">
                We couldn't find any questions matching your search criteria.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Popular Topics Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Popular Topics</h2>
            <p className="text-xl text-gray-300">
              Browse frequently asked questions by category.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Vehicle Questions</h3>
              <p className="text-gray-400 mb-6">Common questions about Audi vehicles, features, and specifications.</p>
              <div className="text-sm text-gray-300 mb-6">
                <div>• Warranty coverage</div>
                <div>• Vehicle identification</div>
                <div>• Breakdown procedures</div>
                <div>• Maintenance schedules</div>
              </div>
              <button 
                onClick={() => setSelectedCategory('vehicle')}
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                View Vehicle FAQs
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Service Questions</h3>
              <p className="text-gray-400 mb-6">Questions about maintenance, repairs, and service appointments.</p>
              <div className="text-sm text-gray-300 mb-6">
                <div>• Service scheduling</div>
                <div>• Maintenance intervals</div>
                <div>• Service costs</div>
                <div>• Warranty repairs</div>
              </div>
              <button 
                onClick={() => setSelectedCategory('service')}
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                View Service FAQs
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Technology Questions</h3>
              <p className="text-gray-400 mb-6">Help with infotainment, connectivity, and digital features.</p>
              <div className="text-sm text-gray-300 mb-6">
                <div>• Smartphone connection</div>
                <div>• Navigation updates</div>
                <div>• myAudi app</div>
                <div>• Connected services</div>
              </div>
              <button 
                onClick={() => setSelectedCategory('technology')}
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                View Technology FAQs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Call Support</h3>
              <p className="text-gray-400 text-sm mb-4">Speak with our support team</p>
              <p className="text-white font-semibold">1-800-AUDI-HELP</p>
            </div>
            
            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">💬</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Live Chat</h3>
              <p className="text-gray-400 text-sm mb-4">Chat with us online</p>
              <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm">
                Start Chat
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📧</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Email Support</h3>
              <p className="text-gray-400 text-sm mb-4">Send us a detailed message</p>
              <p className="text-white font-semibold text-sm">support@audi.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FAQ
