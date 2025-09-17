import React, { useState, useEffect } from 'react'
import { Calendar, Clock, MapPin, User, Phone, Mail, CheckCircle, Star, ArrowRight, Play } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TestDrive: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedModel, setSelectedModel] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    interests: []
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const models = [
    {
      id: 'e-tron-gt',
      name: 'Audi e-tron GT',
      type: 'Electric Performance',
      image: '/e-tron-GT.jpg',
      features: ['522 HP', '238 mi range', '3.9s 0-60 mph'],
      description: 'Experience the future of electric performance'
    },
    {
      id: 'r8',
      name: 'Audi R8',
      type: 'Supercar',
      image: '/r8.jpg',
      features: ['562 HP', 'V10 Engine', '3.2s 0-60 mph'],
      description: 'Pure performance unleashed'
    },
    {
      id: 'rs6',
      name: 'Audi RS6',
      type: 'Performance Wagon',
      image: '/rs6.jpg',
      features: ['591 HP', 'AWD', '3.5s 0-60 mph'],
      description: 'Power meets practicality'
    },
    {
      id: 'rs7',
      name: 'Audi RS7',
      type: 'Performance Sedan',
      image: '/RS7.jpg',
      features: ['591 HP', 'Luxury Interior', '3.6s 0-60 mph'],
      description: 'Sophisticated power'
    }
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ]

  const interests = [
    'Performance', 'Electric Vehicles', 'Luxury Features', 'Safety Technology',
    'Design', 'Comfort', 'Technology', 'Efficiency'
  ]

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log('Test drive request submitted:', { selectedModel, selectedDate, selectedTime, formData })
    setCurrentStep(5) // Success step
  }

  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#1C1C1C'}}>
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-slide-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-fade-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }
        
        .gradient-border {
          position: relative;
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border-radius: 16px;
        }
        
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4);
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
        }
      `}</style>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Test Drive Experience
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience Audi's cutting-edge technology and performance firsthand. 
              Book your personalized test drive today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => setCurrentStep(1)}
                className="bg-white text-black px-12 py-6 text-xl font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Test Drive
              </button>
              <button className="border-2 border-white text-white px-12 py-6 text-xl font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                Watch Experience
                <Play className="inline ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Test Drive Booking Form */}
      <section className="py-32" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Book Your Test Drive</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience Audi's innovation and performance in a personalized test drive session.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center space-x-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                    currentStep >= step 
                      ? 'bg-white text-black' 
                      : 'bg-white/20 text-white/50'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 mx-4 transition-all duration-300 ${
                      currentStep > step ? 'bg-white' : 'bg-white/20'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="glass-card rounded-3xl p-12">
            {/* Step 1: Model Selection */}
            {currentStep === 1 && (
              <div className="animate-slide-up">
                <h3 className="text-3xl font-bold mb-8 text-center">Choose Your Model</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {models.map((model) => (
                    <div
                      key={model.id}
                      onClick={() => setSelectedModel(model.id)}
                      className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                        selectedModel === model.id ? 'ring-2 ring-white' : ''
                      }`}
                    >
                      <div className="glass-card rounded-2xl p-6 h-full">
                        <div 
                          className="h-48 bg-cover bg-center rounded-xl mb-4"
                          style={{ backgroundImage: `url('${model.image}')` }}
                        ></div>
                        <h4 className="text-xl font-bold mb-2">{model.name}</h4>
                        <p className="text-gray-400 mb-4">{model.type}</p>
                        <div className="space-y-2">
                          {model.features.map((feature, index) => (
                            <div key={index} className="text-sm text-gray-300 flex items-center">
                              <CheckCircle size={16} className="text-green-400 mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-8">
                  <button
                    onClick={nextStep}
                    disabled={!selectedModel}
                    className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    Continue
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Date & Time Selection */}
            {currentStep === 2 && (
              <div className="animate-slide-up">
                <h3 className="text-3xl font-bold mb-8 text-center">Select Date & Time</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-xl font-semibold mb-6 flex items-center">
                      <Calendar className="mr-3" size={24} />
                      Choose Date
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {['Today', 'Tomorrow', 'This Weekend', 'Next Week'].map((date) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={`p-4 rounded-lg text-left transition-all duration-300 ${
                            selectedDate === date 
                              ? 'bg-white text-black' 
                              : 'glass-card hover:bg-white/10'
                          }`}
                        >
                          <div className="font-semibold">{date}</div>
                          <div className="text-sm opacity-75">Available</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-6 flex items-center">
                      <Clock className="mr-3" size={24} />
                      Choose Time
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg text-center transition-all duration-300 ${
                            selectedTime === time 
                              ? 'bg-white text-black' 
                              : 'glass-card hover:bg-white/10'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStep}
                    className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!selectedDate || !selectedTime}
                    className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    Continue
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Personal Information */}
            {currentStep === 3 && (
              <div className="animate-slide-up">
                <h3 className="text-3xl font-bold mb-8 text-center">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-lg font-semibold mb-3">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold mb-3">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold mb-3 flex items-center">
                      <Mail className="mr-2" size={20} />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold mb-3 flex items-center">
                      <Phone className="mr-2" size={20} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-lg font-semibold mb-3 flex items-center">
                      <MapPin className="mr-2" size={20} />
                      Preferred Location
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white transition-all duration-300"
                    >
                      <option value="">Select a location</option>
                      <option value="downtown">Downtown Showroom</option>
                      <option value="airport">Airport Location</option>
                      <option value="suburbs">Suburban Dealership</option>
                      <option value="home">Home Delivery</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStep}
                    className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.location}
                    className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    Continue
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Interests & Experience */}
            {currentStep === 4 && (
              <div className="animate-slide-up">
                <h3 className="text-3xl font-bold mb-8 text-center">Your Interests</h3>
                
                <div className="mb-12">
                  <h4 className="text-xl font-semibold mb-6">What interests you most?</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        onClick={() => handleInterestToggle(interest)}
                        className={`p-4 rounded-lg text-center transition-all duration-300 ${
                          formData.interests.includes(interest)
                            ? 'bg-white text-black'
                            : 'glass-card hover:bg-white/10'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-6">Driving Experience</h4>
                  <div className="space-y-4">
                    {['Beginner', 'Intermediate', 'Advanced', 'Professional'].map((level) => (
                      <button
                        key={level}
                        onClick={() => setFormData(prev => ({ ...prev, experience: level }))}
                        className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                          formData.experience === level
                            ? 'bg-white text-black'
                            : 'glass-card hover:bg-white/10'
                        }`}
                      >
                        <div className="font-semibold">{level}</div>
                        <div className="text-sm opacity-75">
                          {level === 'Beginner' && 'New to premium vehicles'}
                          {level === 'Intermediate' && 'Some experience with luxury cars'}
                          {level === 'Advanced' && 'Experienced with high-performance vehicles'}
                          {level === 'Professional' && 'Professional driver or enthusiast'}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStep}
                    className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center"
                  >
                    Book Test Drive
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Success */}
            {currentStep === 5 && (
              <div className="animate-fade-scale text-center">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-slow">
                  <CheckCircle size={48} className="text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-6">Test Drive Booked!</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Your test drive has been successfully scheduled. We'll send you a confirmation email with all the details.
                </p>
                <div className="glass-card rounded-2xl p-8 max-w-md mx-auto mb-8">
                  <h4 className="text-lg font-semibold mb-4">Booking Summary</h4>
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Model:</span>
                      <span className="text-white">{models.find(m => m.id === selectedModel)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Date:</span>
                      <span className="text-white">{selectedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Time:</span>
                      <span className="text-white">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Location:</span>
                      <span className="text-white">{formData.location}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300"
                >
                  Book Another Test Drive
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Why Choose Audi?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the perfect blend of performance, luxury, and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Star size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Experience</h3>
              <p className="text-gray-400 leading-relaxed">
                Immerse yourself in luxury with our premium vehicles and personalized service that exceeds expectations.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Guidance</h3>
              <p className="text-gray-400 leading-relaxed">
                Our knowledgeable specialists will guide you through every feature and help you find your perfect Audi.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <User size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Personalized Service</h3>
              <p className="text-gray-400 leading-relaxed">
                Every test drive is tailored to your interests and driving style for a truly personalized experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default TestDrive
