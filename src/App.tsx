import { ChevronRight, Play, Star, Shield, Zap, Users } from 'lucide-react'
import Navbar from './components/Navbar'
import CarCard from './components/CarCard'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Add top padding to account for fixed navbar */}
      <div className="pt-20">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            }}
          ></div>
        </video>
        
      </section>

      {/* Models Section */}
      <section id="models" className="py-20 bg-black">
        <div className="w-full">
          <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Models</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start px-8">
            <CarCard 
              name="Audi R8"
              image="/r8.jpg"
              video="/audiR8.mp4"
            />
            <CarCard 
              name="Audi RS6"
              image="/rs6.jpg"
              video="/rs6-video.mp4"
            />
            <CarCard 
              name="Audi RS7"
              image="/RS7.jpg"
              video="/RS7-video.mp4"
            />
            <CarCard 
              name="Audi E-tron GT"
              image="/e-tron-GT.jpg"
              video="/etron-video.mp4"
            />
          </div>
        </div>
      </section>

      {/* About V8 Engine Section */}
      <section id="about" className="py-20 pb-32 bg-black flex justify-center">
        <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">V8 Engine</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the raw power and precision of Audi's legendary V8 engine technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-6">Unleash Pure Performance</h3>
              <p className="text-lg text-gray-400 mb-8">
                Our V8 engine represents the pinnacle of automotive engineering, delivering 
                exceptional power, torque, and efficiency. Every component is precision-crafted 
                to provide an exhilarating driving experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-gray-300">4.0L Twin-Turbo V8 Engine</span>
                </div>
                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-gray-300">591 HP Power Output</span>
                </div>
                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-gray-300">590 lb-ft Torque</span>
                </div>
                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-gray-300">0-60 mph in 3.1 seconds</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div 
                className="h-96 bg-cover bg-center rounded-2xl"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      </div>
    </div>
  )
}

export default App
