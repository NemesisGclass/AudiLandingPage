import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutAudi: React.FC = () => {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#1C1C1C'}}>
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">About Audi</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the story behind one of the world's most prestigious automotive brands, 
              where innovation meets tradition in perfect harmony.
            </p>
          </div>
        </section>

        {/* Company History */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">Our Heritage</h2>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  Founded in 1909, Audi has been at the forefront of automotive innovation for over a century. 
                  From the iconic four rings representing the merger of four German automobile manufacturers 
                  to today's cutting-edge electric vehicles, Audi continues to push the boundaries of what's possible.
                </p>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  Our commitment to "Vorsprung durch Technik" (Advancement through Technology) drives everything we do, 
                  from engineering excellence to sustainable mobility solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300">Founded in 1909</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300">Over 100 years of innovation</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300">Global presence in 100+ countries</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div 
                  className="h-96 bg-cover bg-center rounded-2xl"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Our Mission & Vision</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6">Mission</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  To create premium vehicles that combine cutting-edge technology with exceptional design, 
                  delivering unparalleled driving experiences while advancing sustainable mobility for future generations.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6">Vision</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  To be the world's leading premium automotive brand, recognized for innovation, 
                  sustainability, and the perfect fusion of performance and luxury.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">I</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-400">
                  Pioneering new technologies and pushing the boundaries of automotive engineering.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">Q</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Quality</h3>
                <p className="text-gray-400">
                  Uncompromising standards in every aspect of design, engineering, and manufacturing.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">S</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
                <p className="text-gray-400">
                  Committed to environmental responsibility and sustainable mobility solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}

export default AboutAudi
