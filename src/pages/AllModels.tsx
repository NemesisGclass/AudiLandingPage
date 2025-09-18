import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AllModels: React.FC = () => {
  const [activeModel, setActiveModel] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showVideo, setShowVideo] = useState(true)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const nextModel = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveModel((prev) => (prev + 1) % models.length)
    setTimeout(() => setIsTransitioning(false), 1000)
  }

  const prevModel = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveModel((prev) => (prev - 1 + models.length) % models.length)
    setTimeout(() => setIsTransitioning(false), 1000)
  }

  const models = [
    {
      name: "Audi e-tron GT",
      type: "Electric Performance",
      price: "From $106,500",
      range: "238 miles",
      acceleration: "3.9s 0-60 mph",
      power: "522 HP",
      image: "/e-tron-GT.jpg",
      video: "etron-video.mp4",
      description: "The future of electric performance. Experience instant acceleration and zero emissions without compromising on luxury."
    },
    {
      name: "Audi R8",
      type: "Supercar",
      price: "From $148,000",
      range: "N/A",
      acceleration: "3.2s 0-60 mph",
      power: "562 HP",
      image: "/r8.jpg",
      video: "audiR8.mp4",
      description: "Pure performance unleashed. The R8 delivers heart-pounding acceleration and precision engineering."
    },
    {
      name: "Audi RS6",
      type: "Performance Wagon",
      price: "From $115,000",
      range: "N/A",
      acceleration: "3.5s 0-60 mph",
      power: "591 HP",
      image: "/rs6.jpg",
      video: "rs6-video.mp4",
      description: "Power meets practicality. The RS6 combines supercar performance with everyday versatility."
    },
    {
      name: "Audi RS7",
      type: "Performance Sedan",
      price: "From $120,000",
      range: "N/A",
      acceleration: "3.6s 0-60 mph",
      power: "591 HP",
      image: "/RS7.jpg",
      video: "RS7-video.mp4",
      description: "Sophisticated power. The RS7 delivers exhilarating performance wrapped in elegant design."
    }
  ]

  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#1C1C1C'}}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInDelay {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
          50% { box-shadow: 0 0 40px rgba(255, 255, 255, 0.2); }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fadeInDelay 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .gradient-text {
          background: linear-gradient(45deg, #ffffff, #e5e7eb, #ffffff);
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Videos for Each Model */}
        {models.map((model, index) => (
          <div key={index}>
            {index === activeModel && showVideo && (
              <div className="absolute inset-0 transition-all duration-1000 ease-out">
                <video
                  src={`/${model.video}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: '100vw',
                    height: '100vh',
                    objectFit: 'cover'
                  }}
                ></video>
              </div>
            )}
            {index === activeModel && !showVideo && (
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out"
                style={{
                  backgroundImage: `url('${model.image}')`,
                  width: '100vw',
                  height: '100vh',
                  objectFit: 'cover'
                }}
              ></div>
            )}
          </div>
        ))}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            {/* Left Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-2xl">
                  {models[activeModel].name}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 animate-fade-in drop-shadow-lg">
                  {models[activeModel].type}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl leading-relaxed animate-fade-in-delay drop-shadow-md">
                  {models[activeModel].description}
                </p>
              </div>
              
              {/* Stats Grid */}
              <div className={`grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12 transition-all duration-700 delay-200 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <div className="text-center group bg-black/30 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-black/40 transition-all duration-300 overflow-hidden">
                  <div className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300 drop-shadow-lg break-words">
                    {models[activeModel].price}
                  </div>
                  <div className="text-xs text-gray-300 drop-shadow-md">Starting Price</div>
                </div>
                <div className="text-center group bg-black/30 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-black/40 transition-all duration-300 overflow-hidden">
                  <div className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300 drop-shadow-lg break-words">
                    {models[activeModel].range}
                  </div>
                  <div className="text-xs text-gray-300 drop-shadow-md">Range</div>
                </div>
                <div className="text-center group bg-black/30 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-black/40 transition-all duration-300 overflow-hidden">
                  <div className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300 drop-shadow-lg break-words">
                    {models[activeModel].acceleration}
                  </div>
                  <div className="text-xs text-gray-300 drop-shadow-md">Acceleration</div>
                </div>
                <div className="text-center group bg-black/30 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-black/40 transition-all duration-300 overflow-hidden">
                  <div className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300 drop-shadow-lg break-words">
                    {models[activeModel].power}
                  </div>
                  <div className="text-xs text-gray-300 drop-shadow-md">Power</div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-700 delay-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <Link to="/configure" className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl touch-manipulation inline-block">
                  Configure
                </Link>
                <Link to="/test-drive" className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm text-center touch-manipulation">
                  Test Drive
                </Link>
              </div>
            </div>
            
            {/* Right Panel - Hidden on mobile, shown on desktop */}
            <div className={`hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative group">
                <div className={`bg-black/40 backdrop-blur-xl rounded-3xl border border-white/20 p-8 transition-all duration-500 ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'} group-hover:border-white/30 group-hover:bg-black/50`}>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                      {models[activeModel].name.split(' ')[1]}
                    </div>
                    <div className="text-gray-300 mb-8 animate-fade-in">Model Overview</div>
                    <div className={`space-y-4 transition-all duration-700 delay-200 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                      <div className="flex justify-between group/item py-2 border-b border-white/10">
                        <span className="text-gray-400 group-hover/item:text-white transition-colors">Type</span>
                        <span className="text-white font-semibold group-hover/item:text-blue-400 transition-colors">{models[activeModel].type}</span>
                      </div>
                      <div className="flex justify-between group/item py-2 border-b border-white/10">
                        <span className="text-gray-400 group-hover/item:text-white transition-colors">Price</span>
                        <span className="text-white font-semibold group-hover/item:text-green-400 transition-colors">{models[activeModel].price}</span>
                      </div>
                      <div className="flex justify-between group/item py-2 border-b border-white/10">
                        <span className="text-gray-400 group-hover/item:text-white transition-colors">Power</span>
                        <span className="text-white font-semibold group-hover/item:text-red-400 transition-colors">{models[activeModel].power}</span>
                      </div>
                      <div className="flex justify-between group/item py-2">
                        <span className="text-gray-400 group-hover/item:text-white transition-colors">Acceleration</span>
                        <span className="text-white font-semibold group-hover/item:text-yellow-400 transition-colors">{models[activeModel].acceleration}</span>
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
            onClick={prevModel}
            disabled={isTransitioning}
            className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group touch-manipulation"
          >
            <ChevronLeft size={24} className="sm:w-8 sm:h-8 text-white group-hover:text-blue-400 transition-colors" />
          </button>
        </div>
        
        <div className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20">
          <button
            onClick={nextModel}
            disabled={isTransitioning}
            className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group touch-manipulation"
          >
            <ChevronRight size={24} className="sm:w-8 sm:h-8 text-white group-hover:text-blue-400 transition-colors" />
          </button>
        </div>

        {/* Model Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
            {models.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true)
                    setActiveModel(index)
                    setTimeout(() => setIsTransitioning(false), 1000)
                  }
                }}
                disabled={isTransitioning}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeModel === index 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/50 hover:bg-white/75 hover:scale-110'
                } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
              />
            ))}
          </div>
        </div>
        
        {/* Model Counter */}
        <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-20">
          <div className="bg-black/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-2 border border-white/10">
            <span className="text-white font-semibold text-sm sm:text-base">
              {activeModel + 1} / {models.length}
            </span>
          </div>
        </div>
        
        {/* Video Indicator */}
        {showVideo && (
          <div className="absolute top-4 sm:top-8 right-16 sm:right-24 z-20">
            <div className="bg-red-500/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 border border-red-400/50">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-white text-xs font-semibold">LIVE</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Video Control Button */}
        <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-20">
          <button
            onClick={() => setShowVideo(!showVideo)}
            className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 group touch-manipulation"
          >
            {showVideo ? (
              <Pause size={20} className="sm:w-6 sm:h-6 text-white group-hover:text-blue-400 transition-colors" />
            ) : (
              <Play size={20} className="sm:w-6 sm:h-6 text-white group-hover:text-blue-400 transition-colors" />
            )}
          </button>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Advanced Technology</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of automotive innovation with cutting-edge technology that enhances every drive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8 h-80 hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mb-6 border border-gray-600">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">AI-Powered Systems</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Advanced artificial intelligence that learns your driving patterns and optimizes performance for every journey.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8 h-80 hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mb-6 border border-gray-600">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Electric Performance</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Instant torque delivery and zero emissions without compromising on the exhilarating Audi driving experience.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8 h-80 hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mb-6 border border-gray-600">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Safety First</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Comprehensive safety systems with predictive technology that anticipates and prevents potential hazards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-32" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Performance Metrics</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Numbers that speak to the engineering excellence behind every Audi model.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-500">
                  <div className="text-4xl font-bold">0-60</div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-2xl font-bold">
                  3.2s
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Acceleration</h3>
              <p className="text-gray-400">Lightning-fast acceleration from standstill</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-500">
                  <div className="text-4xl font-bold">522</div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-2xl font-bold">
                  HP
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Power Output</h3>
              <p className="text-gray-400">Exceptional horsepower for thrilling performance</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-500">
                  <div className="text-4xl font-bold">238</div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-2xl font-bold">
                  mi
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Electric Range</h3>
              <p className="text-gray-400">Extended range for worry-free electric driving</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-500">
                  <div className="text-4xl font-bold">270</div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-2xl font-bold">
                  kW
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Charging</h3>
              <p className="text-gray-400">Ultra-fast charging for minimal downtime</p>
            </div>
          </div>
        </div>
      </section>

        {/* Model Comparison */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Compare Models</h2>
              <p className="text-xl text-gray-400">Find the perfect Audi for your lifestyle</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">By Price Range</h3>
                  <div className="space-y-3">
                    <button className="block w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                      Under $50,000
                    </button>
                    <button className="block w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                      $50,000 - $80,000
                    </button>
                    <button className="block w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                      Over $80,000
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">By Body Style</h3>
                  <div className="space-y-3">
                    <button className="block w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                      Sedan
                    </button>
                    <button className="block w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                      SUV
                    </button>
                    <button className="block w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                      Sport
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">By Fuel Type</h3>
                  <div className="space-y-3">
                    <button className="block w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                      Gasoline
                    </button>
                    <button className="block w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                      Electric
                    </button>
                    <button className="block w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                      Hybrid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Call to Action */}
      <section className="py-32" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Experience Audi?</h2>
            <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
              Discover the perfect Audi model for your lifestyle. Configure, test drive, and experience the future of automotive excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/configure" className="bg-white text-black px-12 py-6 text-xl font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block">
                Configure Your Audi
              </Link>
              <Link to="/test-drive" className="border-2 border-white text-white px-12 py-6 text-xl font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 inline-block">
                Schedule Test Drive
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-600">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customize</h3>
                <p className="text-gray-400">Personalize every detail to match your preferences</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-600">
                  <span className="text-2xl">🚗</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Test Drive</h3>
                <p className="text-gray-400">Experience the performance firsthand</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-600">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Own</h3>
                <p className="text-gray-400">Join the Audi family and enjoy premium ownership</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default AllModels
