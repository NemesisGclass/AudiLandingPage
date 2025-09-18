import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TermsOfService: React.FC = () => {
  return (
    <div style={{backgroundColor: '#1C1C1C', minHeight: '100vh'}}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services. By using our website and services, you agree to be bound by these terms.
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
              <h2 className="text-3xl font-bold mb-6 text-white">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing and using Audi's website, services, and applications, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">2. Use License</h2>
              <p className="text-gray-300 mb-6">
                Permission is granted to temporarily download one copy of the materials on Audi's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Modify or copy the materials</li>
                <li>• Use the materials for any commercial purpose or for any public display</li>
                <li>• Attempt to reverse engineer any software contained on the website</li>
                <li>• Remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">3. Vehicle Sales and Services</h2>
              <p className="text-gray-300 mb-6">
                All vehicle sales are subject to separate purchase agreements. Prices, specifications, and availability are subject to change without notice. Service appointments and maintenance are subject to dealer availability and terms.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-white">Vehicle Information</h3>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Vehicle specifications may vary by region</li>
                <li>• Features and options subject to availability</li>
                <li>• Images may not reflect exact vehicle appearance</li>
                <li>• Fuel economy estimates are EPA estimates</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">4. User Accounts</h2>
              <p className="text-gray-300 mb-6">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
              
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• You must be at least 18 years old to create an account</li>
                <li>• You are responsible for maintaining account security</li>
                <li>• You must notify us immediately of any unauthorized use</li>
                <li>• We reserve the right to suspend or terminate accounts</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">5. Prohibited Uses</h2>
              <p className="text-gray-300 mb-6">
                You may not use our service for any unlawful purpose or to solicit others to perform unlawful acts. Prohibited uses include:
              </p>
              
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Violating any applicable laws or regulations</li>
                <li>• Transmitting harmful or malicious code</li>
                <li>• Attempting to gain unauthorized access to systems</li>
                <li>• Interfering with service operation</li>
                <li>• Collecting user information without consent</li>
                <li>• Impersonating another person or entity</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">6. Intellectual Property</h2>
              <p className="text-gray-300 mb-6">
                The service and its original content, features, and functionality are and will remain the exclusive property of Audi and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>
              
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Audi trademarks and logos are protected</li>
                <li>• Website content is copyrighted material</li>
                <li>• Software and applications are proprietary</li>
                <li>• User-generated content remains user property</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">7. Privacy Policy</h2>
              <p className="text-gray-300 mb-6">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">8. Disclaimers</h2>
              <p className="text-gray-300 mb-6">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Audi excludes all representations, warranties, conditions and terms relating to our website and the use of this website.
              </p>
              
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• No warranty of merchantability or fitness for purpose</li>
                <li>• No warranty of non-infringement</li>
                <li>• No warranty of accuracy or completeness</li>
                <li>• No warranty of uninterrupted or error-free operation</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">9. Limitation of Liability</h2>
              <p className="text-gray-300 mb-6">
                In no event shall Audi, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">10. Indemnification</h2>
              <p className="text-gray-300 mb-6">
                You agree to defend, indemnify, and hold harmless Audi and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">11. Termination</h2>
              <p className="text-gray-300 mb-6">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">12. Governing Law</h2>
              <p className="text-gray-300 mb-6">
                These Terms shall be interpreted and governed by the laws of Germany, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">13. Changes to Terms</h2>
              <p className="text-gray-300 mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">14. Contact Information</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="bg-white/5 rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Legal Department</h4>
                    <p className="text-gray-300">legal@audi.com</p>
                    <p className="text-gray-300">1-800-AUDI-LEGAL</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Customer Service</h4>
                    <p className="text-gray-300">support@audi.com</p>
                    <p className="text-gray-300">1-800-AUDI-HELP</p>
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

export default TermsOfService
