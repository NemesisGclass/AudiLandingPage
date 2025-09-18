import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CookiePolicy: React.FC = () => {
  return (
    <div style={{backgroundColor: '#1C1C1C', minHeight: '100vh'}}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Learn about how we use cookies and similar technologies to enhance your experience on our website.
          </p>
          <div className="mt-8 text-sm text-gray-400">
            Last updated: December 20, 2024
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-white">What Are Cookies?</h2>
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">Types of Cookies We Use</h2>
              
              <div className="space-y-8">
                <div className="bg-white/5 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-white">Essential Cookies</h3>
                  <p className="text-gray-300 mb-4">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and remembering your preferences.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Session management and security</li>
                    <li>• Shopping cart functionality</li>
                    <li>• Form data retention</li>
                    <li>• Language and region preferences</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-white">Performance Cookies</h3>
                  <p className="text-gray-300 mb-4">
                    These cookies collect information about how you use our website, such as which pages you visit most often. This helps us improve the performance of our website.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Website usage analytics</li>
                    <li>• Page load times and performance</li>
                    <li>• Error tracking and debugging</li>
                    <li>• User journey analysis</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-white">Functional Cookies</h3>
                  <p className="text-gray-300 mb-4">
                    These cookies enable enhanced functionality and personalization, such as remembering your login status and preferences.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• User authentication</li>
                    <li>• Personalized content</li>
                    <li>• Saved preferences</li>
                    <li>• Social media integration</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-white">Marketing Cookies</h3>
                  <p className="text-gray-300 mb-4">
                    These cookies are used to deliver advertisements that are relevant to you and your interests. They may also be used to limit the number of times you see an advertisement.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Targeted advertising</li>
                    <li>• Campaign effectiveness</li>
                    <li>• Cross-site tracking</li>
                    <li>• Remarketing</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">Third-Party Cookies</h2>
              <p className="text-gray-300 mb-6">
                We may also use third-party cookies from trusted partners to provide additional functionality and services:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Analytics Partners</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Google Analytics</li>
                    <li>• Adobe Analytics</li>
                    <li>• Hotjar</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Social Media</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Facebook</li>
                    <li>• Instagram</li>
                    <li>• YouTube</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Advertising</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Google Ads</li>
                    <li>• Facebook Ads</li>
                    <li>• LinkedIn Ads</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Customer Service</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Live Chat</li>
                    <li>• Support Tickets</li>
                    <li>• Feedback Forms</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">Managing Your Cookie Preferences</h2>
              <p className="text-gray-300 mb-6">
                You have control over cookies and can manage your preferences in several ways:
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/5 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Browser Settings</h3>
                  <p className="text-gray-300 mb-4">
                    Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Chrome</h4>
                      <p className="text-gray-300">Settings → Privacy and Security → Cookies</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Firefox</h4>
                      <p className="text-gray-300">Options → Privacy & Security → Cookies</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Safari</h4>
                      <p className="text-gray-300">Preferences → Privacy → Cookies</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Edge</h4>
                      <p className="text-gray-300">Settings → Cookies and Site Permissions</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">Cookie Consent Manager</h3>
                  <p className="text-gray-300 mb-4">
                    You can manage your cookie preferences using our cookie consent manager, which allows you to choose which types of cookies you want to accept.
                  </p>
                  <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Manage Cookie Preferences
                  </button>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">Impact of Disabling Cookies</h2>
              <p className="text-gray-300 mb-6">
                If you choose to disable cookies, some features of our website may not function properly:
              </p>
              
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• You may need to re-enter information more frequently</li>
                <li>• Some personalized features may not work</li>
                <li>• Shopping cart contents may not be saved</li>
                <li>• Preferences and settings may not be remembered</li>
                <li>• Some third-party integrations may not function</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">Updates to This Policy</h2>
              <p className="text-gray-300 mb-6">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              
              <div className="bg-white/5 rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Privacy Team</h4>
                    <p className="text-gray-300">privacy@audi.com</p>
                    <p className="text-gray-300">1-800-AUDI-PRIVACY</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Data Protection Officer</h4>
                    <p className="text-gray-300">dpo@audi.com</p>
                    <p className="text-gray-300">Audi AG, Ingolstadt, Germany</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CookiePolicy
