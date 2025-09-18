import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CustomerSupport: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState('')
  const [contactMethod, setContactMethod] = useState('')

  const supportTopics = [
    {
      id: 'vehicle',
      title: 'Vehicle Support',
      description: 'Questions about your Audi vehicle, features, and operation',
      icon: '🚗'
    },
    {
      id: 'service',
      title: 'Service & Maintenance',
      description: 'Scheduling service, warranty questions, and maintenance',
      icon: '🔧'
    },
    {
      id: 'parts',
      title: 'Parts & Accessories',
      description: 'Finding parts, accessories, and installation support',
      icon: '🔩'
    },
    {
      id: 'finance',
      title: 'Finance & Insurance',
      description: 'Payment questions, insurance claims, and financing',
      icon: '💰'
    },
    {
      id: 'technology',
      title: 'Technology Support',
      description: 'myAudi app, infotainment, and connected services',
      icon: '📱'
    },
    {
      id: 'account',
      title: 'Account & Profile',
      description: 'myAudi account, preferences, and profile management',
      icon: '👤'
    }
  ]

  const contactMethods = [
    {
      id: 'phone',
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      availability: '24/7',
      icon: '📞',
      details: '1-800-AUDI-HELP'
    },
    {
      id: 'chat',
      title: 'Live Chat',
      description: 'Get instant help through our chat system',
      availability: 'Mon-Fri 8AM-8PM',
      icon: '💬',
      details: 'Available now'
    },
    {
      id: 'email',
      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond',
      availability: '24-48 hours',
      icon: '📧',
      details: 'support@audi.com'
    },
    {
      id: 'video',
      title: 'Video Call',
      description: 'Face-to-face support for complex issues',
      availability: 'By appointment',
      icon: '📹',
      details: 'Schedule online'
    }
  ]

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
            Customer Support
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get the help you need with your Audi. Our dedicated support team is here to assist you.
          </p>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How Can We Help?</h2>
            <p className="text-xl text-gray-300">
              Select a topic to get started with your support request.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportTopics.map((topic) => (
              <div 
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`glass-card rounded-3xl p-8 text-center cursor-pointer transition-all duration-300 ${
                  selectedTopic === topic.id 
                    ? 'border-2 border-white bg-white/10' 
                    : 'hover:border-white/40 hover:bg-white/5'
                }`}
              >
                <div className="text-4xl mb-6">{topic.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{topic.title}</h3>
                <p className="text-gray-400">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Contact Methods</h2>
            <p className="text-xl text-gray-300">
              Choose your preferred way to get in touch with our support team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactMethods.map((method) => (
              <div 
                key={method.id}
                onClick={() => setContactMethod(method.id)}
                className={`glass-card rounded-3xl p-8 cursor-pointer transition-all duration-300 ${
                  contactMethod === method.id 
                    ? 'border-2 border-white bg-white/10' 
                    : 'hover:border-white/40 hover:bg-white/5'
                }`}
              >
                <div className="flex items-start space-x-6">
                  <div className="text-4xl">{method.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                    <p className="text-gray-400 mb-4">{method.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Availability:</span>
                        <span className="text-white">{method.availability}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Contact:</span>
                        <span className="text-white font-semibold">{method.details}</span>
                      </div>
                    </div>
                    <button className="mt-4 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                      {method.id === 'phone' ? 'Call Now' : 
                       method.id === 'chat' ? 'Start Chat' :
                       method.id === 'email' ? 'Send Email' : 'Schedule Call'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Service Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Self-Service Options</h2>
            <p className="text-xl text-gray-300">
              Find answers quickly with our self-service resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Knowledge Base</h3>
              <p className="text-gray-400 mb-6">Search our comprehensive knowledge base for answers.</p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Browse Articles
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎥</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Video Tutorials</h3>
              <p className="text-gray-400 mb-6">Watch step-by-step video guides for common tasks.</p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Watch Videos
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Owner's Manual</h3>
              <p className="text-gray-400 mb-6">Download your vehicle's owner's manual and guides.</p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Download Manual
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Search Support</h3>
              <p className="text-gray-400 mb-6">Search for specific topics and get instant answers.</p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Search Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Request Form */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Submit a Support Request</h2>
            <p className="text-xl text-gray-300">
              Can't find what you're looking for? Submit a detailed support request.
            </p>
          </div>
          
          <div className="glass-card rounded-3xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Vehicle Information</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select className="p-4 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="">Select Model</option>
                    <option value="a3">Audi A3</option>
                    <option value="a4">Audi A4</option>
                    <option value="a6">Audi A6</option>
                    <option value="a8">Audi A8</option>
                    <option value="q3">Audi Q3</option>
                    <option value="q5">Audi Q5</option>
                    <option value="q7">Audi Q7</option>
                    <option value="q8">Audi Q8</option>
                    <option value="etron">Audi e-tron</option>
                  </select>
                  <input 
                    type="text" 
                    placeholder="Year"
                    className="p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  />
                  <input 
                    type="text" 
                    placeholder="VIN (optional)"
                    className="p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Support Topic</label>
                <select className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white">
                  <option value="">Select a topic</option>
                  <option value="vehicle">Vehicle Support</option>
                  <option value="service">Service & Maintenance</option>
                  <option value="parts">Parts & Accessories</option>
                  <option value="finance">Finance & Insurance</option>
                  <option value="technology">Technology Support</option>
                  <option value="account">Account & Profile</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Priority Level</label>
                <select className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white">
                  <option value="low">Low - General inquiry</option>
                  <option value="medium">Medium - Need assistance</option>
                  <option value="high">High - Urgent issue</option>
                  <option value="critical">Critical - Vehicle not working</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Description</label>
                <textarea 
                  rows={6}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  placeholder="Please describe your issue or question in detail..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                  Submit Support Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Emergency Support</h2>
          <p className="text-xl text-gray-300 mb-8">
            For urgent issues that require immediate attention, contact our emergency support line.
          </p>
          
          <div className="glass-card rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🚨</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Emergency Hotline</h3>
                <p className="text-gray-400 mb-4">24/7 emergency support for critical issues</p>
                <p className="text-3xl font-bold text-red-400 mb-4">1-800-AUDI-911</p>
                <button className="bg-red-500 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-red-600 transition-colors">
                  Call Emergency Line
                </button>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🚗</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Roadside Assistance</h3>
                <p className="text-gray-400 mb-4">24/7 roadside assistance for breakdowns</p>
                <p className="text-3xl font-bold text-blue-400 mb-4">1-800-AUDI-HELP</p>
                <button className="bg-blue-500 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                  Call Roadside
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

export default CustomerSupport
