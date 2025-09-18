import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutAudi: React.FC = () => {
  return (
    <div style={{backgroundColor: '#1C1C1C', minHeight: '100vh'}}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Audi
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the story behind Audi's commitment to innovation, performance, and luxury automotive excellence.
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded in 1909, Audi has been at the forefront of automotive innovation for over a century. 
                From our humble beginnings in Germany to becoming a global luxury brand, we've consistently 
                pushed the boundaries of what's possible in automotive engineering.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Our commitment to "Vorsprung durch Technik" (Advancement through Technology) drives everything 
                we do. We believe that technology should enhance the driving experience, making every journey 
                more enjoyable, safer, and more connected.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">1909</div>
                  <div className="text-gray-400">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">100+</div>
                  <div className="text-gray-400">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">1.8M+</div>
                  <div className="text-gray-400">Vehicles Sold Annually</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400">Models</div>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-3xl p-8">
              <div 
                className="w-full h-64 bg-cover bg-center rounded-2xl mb-6"
                style={{
                  backgroundImage: `url('https://uploads.audi-mediacenter.com/system/production/media/51942/images/2127be2cdf0f8403dace2bf9d778948d3e47b5f0/A1710301_web_2880.jpg?1698284401')`
                }}
              ></div>
              <h3 className="text-2xl font-bold mb-4">Audi Headquarters</h3>
              <p className="text-gray-400">
                Our global headquarters in Ingolstadt, Germany, serves as the heart of our innovation 
                and design philosophy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do at Audi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-400">Pioneering new technologies and pushing the boundaries of automotive excellence.</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-400">Committed to environmental responsibility and sustainable mobility solutions.</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality</h3>
              <p className="text-gray-400">Uncompromising standards in design, engineering, and craftsmanship.</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Community</h3>
              <p className="text-gray-400">Building connections and fostering a global community of Audi enthusiasts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Innovation & Technology</h2>
            <p className="text-xl text-gray-300">
              Leading the automotive industry with cutting-edge technology and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔋</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Electric Mobility</h3>
              <p className="text-gray-400 mb-6">Pioneering the future of electric vehicles with our e-tron lineup.</p>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• Advanced battery technology</li>
                <li>• Fast charging capabilities</li>
                <li>• Sustainable materials</li>
                <li>• Smart energy management</li>
              </ul>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Autonomous Driving</h3>
              <p className="text-gray-400 mb-6">Developing next-generation autonomous driving technologies.</p>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• AI-powered systems</li>
                <li>• Advanced sensors</li>
                <li>• Machine learning</li>
                <li>• Safety-first approach</li>
              </ul>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Digital Experience</h3>
              <p className="text-gray-400 mb-6">Creating seamless digital experiences for our customers.</p>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• Connected services</li>
                <li>• Smartphone integration</li>
                <li>• Over-the-air updates</li>
                <li>• Personalized features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-300">
              Meet the visionaries leading Audi into the future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold mb-2">Markus Duesmann</h3>
              <p className="text-gray-400 mb-4">CEO, Audi AG</p>
              <p className="text-gray-300 text-sm">
                Leading Audi's transformation into a premium mobility provider with a focus on electric vehicles and digitalization.
              </p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold mb-2">Jürgen Rittersberger</h3>
              <p className="text-gray-400 mb-4">CFO, Audi AG</p>
              <p className="text-gray-300 text-sm">
                Overseeing Audi's financial strategy and ensuring sustainable growth in the evolving automotive landscape.
              </p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold mb-2">Oliver Hoffmann</h3>
              <p className="text-gray-400 mb-4">CTO, Audi AG</p>
              <p className="text-gray-300 text-sm">
                Driving innovation in automotive technology and leading Audi's research and development initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Global Presence</h2>
            <p className="text-xl text-gray-300">
              Audi operates in over 100 countries worldwide, bringing premium mobility to every corner of the globe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Manufacturing</h3>
              <p className="text-gray-400">State-of-the-art production facilities across Europe, Asia, and the Americas.</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Dealerships</h3>
              <p className="text-gray-400">Over 5,000 authorized dealerships providing exceptional customer service.</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">R&D Centers</h3>
              <p className="text-gray-400">Innovation hubs driving the future of automotive technology.</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Employees</h3>
              <p className="text-gray-400">Over 90,000 dedicated professionals worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Audi Family</h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover more about Audi's commitment to innovation, sustainability, and premium mobility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-200 transition-colors">
              Explore Our Models
            </button>
            <button className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-colors">
              Learn About Careers
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutAudi