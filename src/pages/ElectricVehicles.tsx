import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Battery, Zap, Recycle, MapPin, Star, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ElectricVehicles: React.FC = () => {
  const [activeVehicle, setActiveVehicle] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const vehicles = [
    {
      id: 'e-tron-gt',
      name: 'Audi e-tron GT',
      type: 'Electric Performance',
      image: '/e-tron-GT.jpg',
      video: 'https://www.youtube.com/watch?v=OLpczBEvHl8',
      price: 'From $106,500',
      range: '238 miles',
      power: '522 HP',
      acceleration: '3.9s',
      charging: '270 kW',
      description: 'The e-tron GT combines breathtaking design with electric performance. With up to 522 horsepower and a range of up to 238 miles, it delivers the perfect blend of power and efficiency.',
      features: ['Quattro AWD', 'Virtual Cockpit', 'Bang & Olufsen Audio', 'Matrix LED Headlights']
    },
    {
      id: 'q4-e-tron',
      name: 'Audi Q4 e-tron',
      type: 'Electric SUV',
      image: '/2022-Audi-Q4_e-tron.jpg',
      video: 'https://www.youtube.com/watch?v=J9t8sp1q3mQ',
      price: 'From $44,995',
      range: '265 miles',
      power: '295 HP',
      acceleration: '5.8s',
      charging: '125 kW',
      description: 'The Q4 e-tron offers the perfect balance of electric efficiency and SUV practicality. With spacious interiors and advanced technology, it\'s designed for modern families.',
      features: ['Spacious Interior', 'Advanced Safety', 'Smart Charging', 'Digital Cockpit']
    },
    {
      id: 'a6-e-tron',
      name: 'Audi A6 e-tron',
      type: 'Electric Sedan',
      image: '/electric-car.png',
      video: 'https://www.youtube.com/watch?v=LXbMoQXmXhc',
      price: 'From $65,000',
      range: '466 miles',
      power: '362 HP',
      acceleration: '5.2s',
      charging: '270 kW',
      description: 'The A6 e-tron represents the future of electric luxury sedans, combining cutting-edge technology with Audi\'s signature design language and performance.',
      features: ['Premium Interior', 'Advanced AI', 'Autonomous Features', 'Sustainable Materials']
    }
  ]

  const nextVehicle = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveVehicle((prev) => (prev + 1) % vehicles.length)
      setIsTransitioning(false)
    }, 300)
  }

  const prevVehicle = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveVehicle((prev) => (prev - 1 + vehicles.length) % vehicles.length)
      setIsTransitioning(false)
    }, 300)
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
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
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
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
        
        .electric-glow {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
        }
        
        .electric-glow:hover {
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
        }
      `}</style>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {vehicles.map((vehicle, index) => (
          <div key={index}>
            {index === activeVehicle && (
              <div className="absolute inset-0 transition-all duration-1000 ease-out">
                {vehicle.video.includes('youtube.com') ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${vehicle.video.split('v=')[1]}?autoplay=1&mute=1&loop=1&playlist=${vehicle.video.split('v=')[1]}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                    className="absolute inset-0 w-full h-full"
                    style={{width: '100vw', height: '100vh', objectFit: 'cover'}}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    src={`/${vehicle.video}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay muted loop playsInline
                    style={{width: '100vw', height: '100vh', objectFit: 'cover'}}
                  ></video>
                )}
              </div>
            )}
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            {/* Left Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-2xl">
                  {vehicles[activeVehicle].name}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 animate-fade-in drop-shadow-lg">
                  {vehicles[activeVehicle].type}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl leading-relaxed animate-fade-in-delay drop-shadow-md">
                  {vehicles[activeVehicle].description}
                </p>
              </div>
              
              {/* Stats Grid */}
              <div className={`grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12 transition-all duration-700 delay-200 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <div className="text-center group glass-card rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/10 transition-all duration-300 overflow-hidden electric-glow">
                  <div className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300 drop-shadow-lg break-words">
                    {vehicles[activeVehicle].range}
                  </div>
                  <div className="text-xs text-gray-300 drop-shadow-md">Range</div>
                </div>
                <div className="text-center group glass-card rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/10 transition-all duration-300 overflow-hidden electric-glow">
                  <div className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300 drop-shadow-lg break-words">
                    {vehicles[activeVehicle].power}
                  </div>
                  <div className="text-xs text-gray-300 drop-shadow-md">Power</div>
                </div>
                <div className="text-center group glass-card rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/10 transition-all duration-300 overflow-hidden electric-glow">
                  <div className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300 drop-shadow-lg break-words">
                    {vehicles[activeVehicle].acceleration}
                  </div>
                  <div className="text-xs text-gray-300 drop-shadow-md">0-60 mph</div>
                </div>
                <div className="text-center group glass-card rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/10 transition-all duration-300 overflow-hidden electric-glow">
                  <div className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300 drop-shadow-lg break-words">
                    {vehicles[activeVehicle].charging}
                  </div>
                  <div className="text-xs text-gray-300 drop-shadow-md">Charging</div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-700 delay-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <Link to="/configure" className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl touch-manipulation inline-block">
                  Configure
                </Link>
                <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm text-center touch-manipulation">
                  Test Drive
                </button>
              </div>
            </div>
            
            {/* Right Panel - Hidden on mobile, shown on desktop */}
            <div className={`hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative group">
                <div className={`glass-card rounded-3xl border border-white/20 p-8 transition-all duration-500 ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'} group-hover:border-white/30 group-hover:bg-white/10 electric-glow`}>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                      {vehicles[activeVehicle].name.split(' ')[1]}
                    </div>
                    <div className="text-gray-300 mb-8 animate-fade-in">Electric Features</div>
                    <div className={`space-y-4 transition-all duration-700 delay-200 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                      <div className="flex justify-between group/item py-2 border-b border-white/10">
                        <span className="text-gray-400 group-hover/item:text-white transition-colors">Price</span>
                        <span className="text-white font-semibold group-hover/item:text-cyan-400 transition-colors">{vehicles[activeVehicle].price}</span>
                      </div>
                      <div className="flex justify-between group/item py-2 border-b border-white/10">
                        <span className="text-gray-400 group-hover/item:text-white transition-colors">Range</span>
                        <span className="text-white font-semibold group-hover/item:text-green-400 transition-colors">{vehicles[activeVehicle].range}</span>
                      </div>
                      <div className="flex justify-between group/item py-2 border-b border-white/10">
                        <span className="text-gray-400 group-hover/item:text-white transition-colors">Power</span>
                        <span className="text-white font-semibold group-hover/item:text-blue-400 transition-colors">{vehicles[activeVehicle].power}</span>
                      </div>
                      <div className="flex justify-between group/item py-2">
                        <span className="text-gray-400 group-hover/item:text-white transition-colors">Charging</span>
                        <span className="text-white font-semibold group-hover/item:text-purple-400 transition-colors">{vehicles[activeVehicle].charging}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <div className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20">
          <button
            onClick={prevVehicle}
            disabled={isTransitioning}
            className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group touch-manipulation electric-glow"
          >
            <ChevronLeft size={24} className="sm:w-8 sm:h-8 text-white group-hover:text-cyan-400 transition-colors" />
          </button>
        </div>
        
        <div className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20">
          <button
            onClick={nextVehicle}
            disabled={isTransitioning}
            className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group touch-manipulation electric-glow"
          >
            <ChevronRight size={24} className="sm:w-8 sm:h-8 text-white group-hover:text-cyan-400 transition-colors" />
          </button>
        </div>

        {/* Vehicle Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-4 glass-card rounded-full px-6 py-3 border border-white/10">
            {vehicles.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isTransitioning) return
                  setIsTransitioning(true)
                  setTimeout(() => {
                    setActiveVehicle(index)
                    setIsTransitioning(false)
                  }, 300)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeVehicle ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Vehicle Counter */}
        <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-20">
          <div className="glass-card rounded-full px-3 sm:px-4 py-1 sm:py-2 border border-white/10">
            <span className="text-white font-semibold text-sm sm:text-base">
              {activeVehicle + 1} / {vehicles.length}
            </span>
          </div>
        </div>
        
      </section>

      {/* Electric Technology Section */}
      <section className="py-32" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Electric Technology</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of automotive innovation with cutting-edge electric technology that enhances every drive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl glass-card border border-white/10 p-8 h-80 hover:border-white/20 transition-all duration-500 electric-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mb-6 border border-gray-600">
                    <Battery size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Advanced Batteries</h3>
                  <p className="text-gray-400 leading-relaxed">
                    State-of-the-art lithium-ion batteries with thermal management systems for optimal performance and longevity.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl glass-card border border-white/10 p-8 h-80 hover:border-white/20 transition-all duration-500 electric-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mb-6 border border-gray-600">
                    <Zap size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Fast Charging</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Ultra-fast charging capabilities up to 270 kW, allowing you to charge from 5% to 80% in just 22 minutes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl glass-card border border-white/10 p-8 h-80 hover:border-white/20 transition-all duration-500 electric-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mb-6 border border-gray-600">
                    <Recycle size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Regenerative Braking</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Intelligent energy recovery system that converts braking energy back into battery power, extending your range.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charging Network Section */}
      <section className="py-32" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-left">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">Charging Network</h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Access to over 150,000 charging points across Europe and North America through our partnership with leading charging networks. Find charging stations near you with our integrated navigation system.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 text-lg">150,000+ charging points</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-4 h-4 bg-green-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 text-lg">Ultra-fast charging up to 270 kW</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-4 h-4 bg-blue-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 text-lg">Integrated navigation with charging stops</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-4 h-4 bg-purple-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 text-lg">Home charging solutions available</span>
                </div>
              </div>
              <button className="mt-8 bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
                Find Charging Stations
                <MapPin className="ml-2" size={20} />
              </button>
            </div>
            
            <div className="relative animate-slide-right">
              <div className="glass-card rounded-3xl p-8 border border-white/20 electric-glow">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-600 animate-float">
                    <MapPin size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Smart Navigation</h3>
                  <p className="text-gray-400">
                    Our intelligent navigation system automatically plans your route with optimal charging stops, ensuring you never run out of power.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 glass-card rounded-lg">
                    <span className="text-gray-400">Next Charging Stop</span>
                    <span className="text-white font-semibold">23 miles</span>
                  </div>
                  <div className="flex justify-between items-center p-4 glass-card rounded-lg">
                    <span className="text-gray-400">Charging Time</span>
                    <span className="text-white font-semibold">18 minutes</span>
                  </div>
                  <div className="flex justify-between items-center p-4 glass-card rounded-lg">
                    <span className="text-gray-400">Range After Charge</span>
                    <span className="text-white font-semibold">238 miles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Impact Section */}
      <section className="py-32" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Environmental Impact</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Numbers that speak to the environmental benefits of choosing electric mobility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto glass-card rounded-full flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-500 electric-glow">
                  <div className="text-4xl font-bold text-green-400">0</div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-green-400">
                  CO₂
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Direct Emissions</h3>
              <p className="text-gray-400">Zero emissions while driving</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto glass-card rounded-full flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-500 electric-glow">
                  <div className="text-4xl font-bold text-blue-400">-40%</div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-blue-400">
                  Carbon
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Carbon Footprint</h3>
              <p className="text-gray-400">Reduced compared to gasoline vehicles</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto glass-card rounded-full flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-500 electric-glow">
                  <div className="text-4xl font-bold text-purple-400">95%</div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-purple-400">
                  Recyclable
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Battery Recyclable</h3>
              <p className="text-gray-400">End-of-life recycling rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Go Electric?</h2>
            <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
              Experience the future of mobility with Audi's electric vehicles. Configure, test drive, and join the electric revolution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/configure" className="bg-white text-black px-12 py-6 text-xl font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center inline-block">
                Configure Your Electric Audi
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <button className="border-2 border-white text-white px-12 py-6 text-xl font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 inline-block flex items-center">
                Schedule Test Drive
                <Star className="ml-2" size={20} />
              </button>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-600 group-hover:scale-110 transition-transform duration-300 electric-glow">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customize</h3>
                <p className="text-gray-400">Personalize every detail to match your preferences</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-600 group-hover:scale-110 transition-transform duration-300 electric-glow">
                  <span className="text-2xl">🚗</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Test Drive</h3>
                <p className="text-gray-400">Experience the electric performance firsthand</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-600 group-hover:scale-110 transition-transform duration-300 electric-glow">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Own</h3>
                <p className="text-gray-400">Join the electric revolution and enjoy premium ownership</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default ElectricVehicles