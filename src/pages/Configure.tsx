import React, { useState, useEffect } from 'react'
import { CheckCircle, Star, ArrowRight, Palette, Settings, Zap, Shield, Car } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Configure: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState('e-tron-gt')
  const [selectedColor, setSelectedColor] = useState('black')
  const [selectedInterior, setSelectedInterior] = useState('black')
  const [selectedWheels, setSelectedWheels] = useState('standard')
  const [selectedPackages, setSelectedPackages] = useState<string[]>([])
  const [currentStep, setCurrentStep] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const [totalPrice, setTotalPrice] = useState(106500)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    calculateTotalPrice()
  }, [selectedModel, selectedColor, selectedInterior, selectedWheels, selectedPackages])

  const models = [
    {
      id: 'e-tron-gt',
      name: 'Audi e-tron GT',
      basePrice: 106500,
      image: '/e-tron-GT.jpg',
      description: 'Electric Performance Sedan',
      features: ['522 HP', '238 mi range', '3.9s 0-60 mph']
    },
    {
      id: 'q4-e-tron',
      name: 'Audi Q4 e-tron',
      basePrice: 44995,
      image: '/2022-Audi-Q4_e-tron.jpg',
      description: 'Electric SUV',
      features: ['295 HP', '265 mi range', '5.8s 0-60 mph']
    },
    {
      id: 'a6-e-tron',
      name: 'Audi A6 e-tron',
      basePrice: 65000,
      image: '/electric-car.png',
      description: 'Electric Luxury Sedan',
      features: ['362 HP', '466 mi range', '5.2s 0-60 mph']
    }
  ]

  const colors = [
    { id: 'black', name: 'Mythos Black', price: 0, hex: '#000000' },
    { id: 'white', name: 'Glacier White', price: 0, hex: '#FFFFFF' },
    { id: 'silver', name: 'Florett Silver', price: 0, hex: '#C0C0C0' },
    { id: 'blue', name: 'Daytona Gray', price: 0, hex: '#2C3E50' },
    { id: 'red', name: 'Tango Red', price: 1200, hex: '#E74C3C' },
    { id: 'green', name: 'District Green', price: 1200, hex: '#27AE60' }
  ]

  const interiors = [
    { id: 'black', name: 'Black Leather', price: 0, image: '/interior-black.jpg' },
    { id: 'brown', name: 'Brown Leather', price: 1200, image: '/interior-brown.jpg' },
    { id: 'white', name: 'White Leather', price: 1200, image: '/interior-white.jpg' },
    { id: 'gray', name: 'Gray Leather', price: 800, image: '/interior-gray.jpg' }
  ]

  const wheels = [
    { id: 'standard', name: 'Standard 19"', price: 0, image: '/wheels-standard.jpg' },
    { id: 'sport', name: 'Sport 20"', price: 1200, image: '/wheels-sport.jpg' },
    { id: 'premium', name: 'Premium 21"', price: 2500, image: '/wheels-premium.jpg' },
    { id: 'carbon', name: 'Carbon Fiber 21"', price: 4500, image: '/wheels-carbon.jpg' }
  ]

  const packages = [
    {
      id: 'premium-plus',
      name: 'Premium Plus Package',
      price: 4500,
      description: 'Advanced driver assistance, premium audio, virtual cockpit',
      features: ['Adaptive Cruise Control', 'Bang & Olufsen Audio', 'Virtual Cockpit Plus']
    },
    {
      id: 'sport',
      name: 'Sport Package',
      price: 3200,
      description: 'Enhanced performance and sporty styling',
      features: ['Sport Suspension', 'Sport Seats', 'Sport Steering Wheel']
    },
    {
      id: 'technology',
      name: 'Technology Package',
      price: 2800,
      description: 'Cutting-edge technology and connectivity',
      features: ['MMI Navigation Plus', 'Wireless Charging', 'WiFi Hotspot']
    },
    {
      id: 'comfort',
      name: 'Comfort Package',
      price: 2100,
      description: 'Enhanced comfort and convenience features',
      features: ['Heated Seats', 'Heated Steering Wheel', 'Power Sunroof']
    }
  ]

  const calculateTotalPrice = () => {
    const model = models.find(m => m.id === selectedModel)
    const color = colors.find(c => c.id === selectedColor)
    const interior = interiors.find(i => i.id === selectedInterior)
    const wheel = wheels.find(w => w.id === selectedWheels)
    
    let total = model?.basePrice || 0
    total += color?.price || 0
    total += interior?.price || 0
    total += wheel?.price || 0
    total += selectedPackages.reduce((sum, pkgId) => {
      const pkg = packages.find(p => p.id === pkgId)
      return sum + (pkg?.price || 0)
    }, 0)
    
    setTotalPrice(total)
  }

  const togglePackage = (packageId: string) => {
    setSelectedPackages(prev => 
      prev.includes(packageId) 
        ? prev.filter(id => id !== packageId)
        : [...prev, packageId]
    )
  }

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const steps = [
    { id: 1, title: 'Model', icon: Car },
    { id: 2, title: 'Color', icon: Palette },
    { id: 3, title: 'Interior', icon: Settings },
    { id: 4, title: 'Wheels', icon: Settings },
    { id: 5, title: 'Packages', icon: Star }
  ]

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
        
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          border-radius: 1rem;
        }
        
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }
        
        .configure-glow {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }
        
        .configure-glow:hover {
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
        }
      `}</style>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Configure Your Audi
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Personalize every detail of your Audi to match your style and preferences. 
              Build your perfect vehicle with our advanced configuration tool.
            </p>
          </div>
        </div>
      </section>

      {/* Configuration Tool */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center space-x-8">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                    currentStep >= step.id 
                      ? 'bg-white text-black' 
                      : 'bg-white/20 text-white/50'
                  }`}>
                    <step.icon size={20} />
                  </div>
                  {step.id < 5 && (
                    <div className={`w-16 h-1 mx-4 transition-all duration-300 ${
                      currentStep > step.id ? 'bg-white' : 'bg-white/20'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Configuration Panel */}
            <div className="glass-card rounded-3xl p-8">
              {/* Step 1: Model Selection */}
              {currentStep === 1 && (
                <div className="animate-slide-up">
                  <h3 className="text-3xl font-bold mb-8 text-center">Choose Your Model</h3>
                  <div className="space-y-6">
                    {models.map((model) => (
                      <div
                        key={model.id}
                        onClick={() => setSelectedModel(model.id)}
                        className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                          selectedModel === model.id ? 'ring-2 ring-white' : ''
                        }`}
                      >
                        <div 
                          className={`glass-card p-6 transition-all duration-300 ${
                            selectedModel === model.id 
                              ? 'border-2 border-white bg-white/10' 
                              : 'border border-white/20 hover:border-white/40 hover:bg-white/5'
                          }`}
                          style={{borderRadius: '1rem'}}
                        >
                          <div className="flex items-center space-x-6 ">
                            <div 
                              className="w-24 h-16 bg-cover bg-center rounded-lg"
                              style={{ backgroundImage: `url('${model.image}')` }}
                            ></div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold mb-2">{model.name}</h4>
                              <p className="text-gray-400 mb-2">{model.description}</p>
                              <div className="flex space-x-4 text-sm">
                                {model.features.map((feature, index) => (
                                  <span key={index} className="text-gray-300">{feature}</span>
                                ))}
                              </div>
                              <p className="text-lg font-semibold mt-2">From ${model.basePrice.toLocaleString()}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Color Selection */}
              {currentStep === 2 && (
                <div className="animate-slide-up">
                  <h3 className="text-3xl font-bold mb-8 text-center">Choose Your Color</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color.id)}
                        className={`p-4 rounded-lg text-left transition-all duration-300 ${
                          selectedColor === color.id 
                            ? 'bg-white text-black border-2 border-white' 
                            : 'glass-card border border-white/20 hover:border-white/40 hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div 
                            className="w-8 h-8 rounded-full border-2 border-white"
                            style={{ backgroundColor: color.hex }}
                          ></div>
                          <div>
                            <div className="font-semibold">{color.name}</div>
                            <div className="text-sm opacity-75">
                              {color.price > 0 ? `+$${color.price.toLocaleString()}` : 'Included'}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Interior Selection */}
              {currentStep === 3 && (
                <div className="animate-slide-up">
                  <h3 className="text-3xl font-bold mb-8 text-center">Choose Your Interior</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {interiors.map((interior) => (
                      <button
                        key={interior.id}
                        onClick={() => setSelectedInterior(interior.id)}
                        className={`p-4 rounded-lg text-left transition-all duration-300 ${
                          selectedInterior === interior.id 
                            ? 'bg-white text-black border-2 border-white' 
                            : 'glass-card border border-white/20 hover:border-white/40 hover:bg-white/5'
                        }`}
                      >
                        <div className="text-center">
                          <div className="w-16 h-12 bg-gray-600 rounded-lg mx-auto mb-3"></div>
                          <div className="font-semibold">{interior.name}</div>
                          <div className="text-sm opacity-75">
                            {interior.price > 0 ? `+$${interior.price.toLocaleString()}` : 'Included'}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Wheels Selection */}
              {currentStep === 4 && (
                <div className="animate-slide-up">
                  <h3 className="text-3xl font-bold mb-8 text-center">Choose Your Wheels</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {wheels.map((wheel) => (
                      <button
                        key={wheel.id}
                        onClick={() => setSelectedWheels(wheel.id)}
                        className={`p-4 rounded-lg text-left transition-all duration-300 ${
                          selectedWheels === wheel.id 
                            ? 'bg-white text-black border-2 border-white' 
                            : 'glass-card border border-white/20 hover:border-white/40 hover:bg-white/5'
                        }`}
                      >
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-3"></div>
                          <div className="font-semibold">{wheel.name}</div>
                          <div className="text-sm opacity-75">
                            {wheel.price > 0 ? `+$${wheel.price.toLocaleString()}` : 'Included'}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Packages Selection */}
              {currentStep === 5 && (
                <div className="animate-slide-up">
                  <h3 className="text-3xl font-bold mb-8 text-center">Choose Your Packages</h3>
                  <div className="space-y-4">
                    {packages.map((pkg) => (
                      <button
                        key={pkg.id}
                        onClick={() => togglePackage(pkg.id)}
                        className={`w-full p-6 rounded-lg text-left transition-all duration-300 ${
                          selectedPackages.includes(pkg.id)
                            ? 'bg-white text-black border-2 border-white'
                            : 'glass-card border border-white/20 hover:border-white/40 hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="text-xl font-bold mb-2">{pkg.name}</h4>
                            <p className="text-gray-400 mb-3">{pkg.description}</p>
                            <div className="space-y-1">
                              {pkg.features.map((feature, index) => (
                                <div key={index} className="flex items-center text-sm">
                                  <CheckCircle size={16} className="mr-2 text-green-400" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">+${pkg.price.toLocaleString()}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 relative z-10">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative z-10"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={currentStep === 5}
                  className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center relative z-10"
                >
                  {currentStep === 5 ? 'Complete' : 'Continue'}
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>

            {/* Summary Panel */}
            <div className="glass-card rounded-3xl p-8 configure-glow">
              <h3 className="text-2xl font-bold mb-8 text-center">Your Configuration</h3>
              
              <div className="space-y-6">
                {/* Selected Model */}
                <div className="border-b border-white/20 pb-4">
                  <h4 className="text-lg font-semibold mb-2">Model</h4>
                  <p className="text-gray-300">{models.find(m => m.id === selectedModel)?.name}</p>
                  <p className="text-sm text-gray-400">${models.find(m => m.id === selectedModel)?.basePrice.toLocaleString()}</p>
                </div>

                {/* Selected Color */}
                <div className="border-b border-white/20 pb-4">
                  <h4 className="text-lg font-semibold mb-2">Exterior Color</h4>
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-6 h-6 rounded-full border border-white"
                      style={{ backgroundColor: colors.find(c => c.id === selectedColor)?.hex }}
                    ></div>
                    <span className="text-gray-300">{colors.find(c => c.id === selectedColor)?.name}</span>
                    {colors.find(c => c.id === selectedColor)?.price! > 0 && (
                      <span className="text-sm text-gray-400">+${colors.find(c => c.id === selectedColor)?.price.toLocaleString()}</span>
                    )}
                  </div>
                </div>

                {/* Selected Interior */}
                <div className="border-b border-white/20 pb-4">
                  <h4 className="text-lg font-semibold mb-2">Interior</h4>
                  <p className="text-gray-300">{interiors.find(i => i.id === selectedInterior)?.name}</p>
                  {interiors.find(i => i.id === selectedInterior)?.price! > 0 && (
                    <p className="text-sm text-gray-400">+${interiors.find(i => i.id === selectedInterior)?.price.toLocaleString()}</p>
                  )}
                </div>

                {/* Selected Wheels */}
                <div className="border-b border-white/20 pb-4">
                  <h4 className="text-lg font-semibold mb-2">Wheels</h4>
                  <p className="text-gray-300">{wheels.find(w => w.id === selectedWheels)?.name}</p>
                  {wheels.find(w => w.id === selectedWheels)?.price! > 0 && (
                    <p className="text-sm text-gray-400">+${wheels.find(w => w.id === selectedWheels)?.price.toLocaleString()}</p>
                  )}
                </div>

                {/* Selected Packages */}
                {selectedPackages.length > 0 && (
                  <div className="border-b border-white/20 pb-4">
                    <h4 className="text-lg font-semibold mb-2">Packages</h4>
                    <div className="space-y-2">
                      {selectedPackages.map(pkgId => {
                        const pkg = packages.find(p => p.id === pkgId)
                        return (
                          <div key={pkgId} className="flex justify-between">
                            <span className="text-gray-300">{pkg?.name}</span>
                            <span className="text-sm text-gray-400">+${pkg?.price.toLocaleString()}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Total Price */}
                <div className="pt-4">
                  <div className="flex justify-between items-center text-2xl font-bold">
                    <span>Total Price</span>
                    <span className="text-green-400">${totalPrice.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">*Prices exclude taxes, fees, and delivery</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-4">
                <button className="w-full bg-white text-black py-4 text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Save Configuration
                </button>
                <button className="w-full border-2 border-white text-white py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300">
                  Schedule Test Drive
                </button>
                <button className="w-full border-2 border-gray-400 text-gray-400 py-4 text-lg font-semibold rounded-lg hover:bg-gray-400 hover:text-black transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Why Configure with Audi?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the perfect blend of personalization, technology, and premium craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 border border-gray-600">
                <Settings size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Personalized Experience</h3>
              <p className="text-gray-400 leading-relaxed">
                Configure every detail to match your style and preferences with our advanced customization tool.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 border border-gray-600">
                <Zap size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-time Pricing</h3>
              <p className="text-gray-400 leading-relaxed">
                See exactly how your choices affect the price with instant updates and transparent pricing.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 border border-gray-600">
                <Shield size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Support</h3>
              <p className="text-gray-400 leading-relaxed">
                Get personalized assistance from our Audi specialists throughout your configuration journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default Configure
