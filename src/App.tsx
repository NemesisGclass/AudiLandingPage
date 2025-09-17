import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CarCard from './components/CarCard'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Import all pages
import AboutAudi from './pages/AboutAudi'
import Careers from './pages/Careers'
import Press from './pages/Press'
import Investors from './pages/Investors'
import Sustainability from './pages/Sustainability'
import AllModels from './pages/AllModels'
import ElectricVehicles from './pages/ElectricVehicles'
import ContactUs from './pages/ContactUs'
import TestDrive from './pages/TestDrive'

function HomePage() {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#1C1C1C'}}>
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
      <section id="models" className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="w-full">
          <div className="flex flex-col items-center justify-center mb-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Models</h2><br /><br /><br />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center leading-relaxed">
              Discover our premium lineup of high-performance vehicles, each engineered to deliver 
              exceptional driving experiences and cutting-edge technology.
            </p>
          </div><br /><br /><br />

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
      </section><br /><br />

      {/* About V8 Engine Section */}
      <section id="about" className="py-20 pb-32 flex justify-center" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Volkswagen-Audi V8 Engine</h2><br /><br />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center">
              Since 1988, Volkswagen Group has been producing legendary V8 engines that power some of the world's most prestigious vehicles.
            </p>
          </div><br /><br />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-6">Engineering Excellence Since 1988</h3>
              <p className=" text-lg text-gray-400 mb-8">
                The Volkswagen-Audi V8 engine family represents decades of automotive innovation, featuring 90° V-8 configuration with 
                displacement ranging from 3.6–6.0L for gasoline engines and 3.3–4.2L for diesel engines. These engines power 
                vehicles across Audi, Bentley, and Lamborghini brands with DOHC valvetrain and four-valves per cylinder.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-gray-300">90° V-8 Configuration</span>
                </div>
                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-gray-300">32-valve or 40-valve DOHC</span>
                </div>
                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-gray-300">3.6–6.0L Displacement Range</span>
                </div>
                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-gray-300">Production: 1988-Present</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div 
                className="h-96 bg-cover bg-center rounded-2xl"
                style={{
                  backgroundImage: `url('/Audi_S5_V8_FSI_engine.jpg')`
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen text-white" style={{backgroundColor: '#1C1C1C'}}>
        {/* Navigation */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Company Pages */}
          <Route path="/about" element={<AboutAudi />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/sustainability" element={<Sustainability />} />
          
          {/* Vehicle Pages */}
          <Route path="/models" element={<AllModels />} />
          <Route path="/electric" element={<ElectricVehicles />} />
          
          {/* Service Pages */}
          <Route path="/test-drive" element={<TestDrive />} />
          
          {/* Support Pages */}
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
