import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Careers: React.FC = () => {
  return (
    <div style={{backgroundColor: '#1C1C1C', minHeight: '100vh'}}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Careers at Audi
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join our team and help shape the future of premium mobility. Discover exciting career opportunities at Audi.
          </p>
        </div>
      </section>

      {/* Why Work at Audi Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Work at Audi?</h2>
            <p className="text-xl text-gray-300">
              Be part of a company that values innovation, diversity, and excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-400">Work on cutting-edge technologies and be part of the automotive revolution.</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-400">Contribute to sustainable mobility solutions and environmental responsibility.</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Diversity</h3>
              <p className="text-gray-400">Join a diverse, inclusive workplace that values different perspectives.</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Growth</h3>
              <p className="text-gray-400">Advance your career with comprehensive development programs and opportunities.</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-400">Be part of a premium brand known for quality and craftsmanship.</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
              <p className="text-gray-400">Make a difference on a global scale in the automotive industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Areas Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Career Areas</h2>
            <p className="text-xl text-gray-300">
              Explore opportunities across different departments and specializations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Engineering</h3>
              <p className="text-gray-400 mb-6">Design and develop the next generation of Audi vehicles.</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Mechanical Engineering</li>
                <li>• Electrical Engineering</li>
                <li>• Software Development</li>
                <li>• Autonomous Systems</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                View Jobs
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Design</h3>
              <p className="text-gray-400 mb-6">Create beautiful, functional designs that define Audi's aesthetic.</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Automotive Design</li>
                <li>• Interior Design</li>
                <li>• Color & Trim</li>
                <li>• User Experience</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                View Jobs
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Business</h3>
              <p className="text-gray-400 mb-6">Drive business strategy and operations across global markets.</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Marketing</li>
                <li>• Sales</li>
                <li>• Finance</li>
                <li>• Strategy</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                View Jobs
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Manufacturing</h3>
              <p className="text-gray-400 mb-6">Ensure quality production and operational excellence.</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Production Management</li>
                <li>• Quality Assurance</li>
                <li>• Supply Chain</li>
                <li>• Operations</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                View Jobs
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Research & Development</h3>
              <p className="text-gray-400 mb-6">Pioneer breakthrough technologies and innovations.</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Advanced Materials</li>
                <li>• Battery Technology</li>
                <li>• AI & Machine Learning</li>
                <li>• Future Mobility</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                View Jobs
              </button>
            </div>
            
            <div className="glass-card rounded-3xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Human Resources</h3>
              <p className="text-gray-400 mb-6">Support and develop our most valuable asset - our people.</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Talent Acquisition</li>
                <li>• Learning & Development</li>
                <li>• Employee Relations</li>
                <li>• Diversity & Inclusion</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                View Jobs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Featured Opportunities</h2>
            <p className="text-xl text-gray-300">
              Discover exciting job openings across different locations and departments.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Senior Software Engineer - Autonomous Driving</h3>
                  <p className="text-gray-400 mb-4">Ingolstadt, Germany • Full-time</p>
                  <p className="text-gray-300 mb-4">
                    Lead the development of autonomous driving systems and AI-powered vehicle technologies. 
                    Work with cutting-edge sensors, machine learning algorithms, and real-time systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">C++</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Computer Vision</span>
                  </div>
                </div>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors mt-4 md:mt-0">
                  Apply Now
                </button>
              </div>
            </div>
            
            <div className="glass-card rounded-3xl p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">UX Designer - Digital Experience</h3>
                  <p className="text-gray-400 mb-4">San Jose, CA • Full-time</p>
                  <p className="text-gray-300 mb-4">
                    Design intuitive and engaging user experiences for Audi's digital products and services. 
                    Create user-centered designs that enhance the driving experience.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Figma</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">User Research</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Prototyping</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Design Systems</span>
                  </div>
                </div>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors mt-4 md:mt-0">
                  Apply Now
                </button>
              </div>
            </div>
            
            <div className="glass-card rounded-3xl p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Battery Systems Engineer</h3>
                  <p className="text-gray-400 mb-4">Neckarsulm, Germany • Full-time</p>
                  <p className="text-gray-300 mb-4">
                    Develop next-generation battery systems for electric vehicles. Work on battery management, 
                    thermal systems, and energy optimization for Audi's e-tron lineup.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">MATLAB</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Simulink</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Battery Technology</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Thermal Management</span>
                  </div>
                </div>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors mt-4 md:mt-0">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Employee Benefits</h2>
            <p className="text-xl text-gray-300">
              Comprehensive benefits package designed to support your well-being and success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Competitive Salary</h3>
              <p className="text-gray-400">Market-leading compensation packages</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Health & Wellness</h3>
              <p className="text-gray-400">Comprehensive health insurance and wellness programs</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Learning & Development</h3>
              <p className="text-gray-400">Continuous learning opportunities and career development</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏖️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Work-Life Balance</h3>
              <p className="text-gray-400">Flexible working arrangements and generous time off</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore current opportunities and start your journey with Audi today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-200 transition-colors">
              Browse All Jobs
            </button>
            <button className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-colors">
              Create Job Alert
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Careers