import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={{backgroundColor: '#1C1C1C', minHeight: '100vh'}}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
              <h2 className="text-3xl font-bold mb-6 text-white">1. Information We Collect</h2>
              <p className="text-gray-300 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                purchase a vehicle, schedule service, or contact us for support.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-white">Personal Information</h3>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Name, email address, and phone number</li>
                <li>• Mailing address and billing information</li>
                <li>• Vehicle information and preferences</li>
                <li>• Service history and maintenance records</li>
                <li>• Communication preferences</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-white">Automatically Collected Information</h3>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Device information and IP address</li>
                <li>• Browser type and version</li>
                <li>• Website usage patterns and preferences</li>
                <li>• Location data (with your consent)</li>
                <li>• Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                communicate with you, and ensure the security of our systems.
              </p>
              
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Process vehicle purchases and service appointments</li>
                <li>• Provide customer support and technical assistance</li>
                <li>• Send important updates about your vehicle or account</li>
                <li>• Improve our products, services, and user experience</li>
                <li>• Comply with legal obligations and protect our rights</li>
                <li>• Prevent fraud and ensure security</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">3. Information Sharing</h2>
              <p className="text-gray-300 mb-6">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information in the following limited circumstances:
              </p>
              
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• With authorized dealers and service providers</li>
                <li>• With your explicit consent</li>
                <li>• To comply with legal requirements</li>
                <li>• To protect our rights and prevent fraud</li>
                <li>• In connection with business transfers</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">4. Data Security</h2>
              <p className="text-gray-300 mb-6">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Encryption of data in transit and at rest</li>
                <li>• Regular security assessments and updates</li>
                <li>• Access controls and authentication measures</li>
                <li>• Employee training on data protection</li>
                <li>• Incident response procedures</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">5. Your Rights</h2>
              <p className="text-gray-300 mb-6">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Access to your personal information</li>
                <li>• Correction of inaccurate information</li>
                <li>• Deletion of your personal information</li>
                <li>• Restriction of processing</li>
                <li>• Data portability</li>
                <li>• Objection to processing</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">6. Cookies and Tracking</h2>
              <p className="text-gray-300 mb-6">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
                and provide personalized content. You can control cookie preferences through your browser settings.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">7. Children's Privacy</h2>
              <p className="text-gray-300 mb-6">
                Our services are not directed to children under 13 years of age. We do not knowingly 
                collect personal information from children under 13. If we become aware that we have 
                collected such information, we will take steps to delete it.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">8. International Transfers</h2>
              <p className="text-gray-300 mb-6">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your information in accordance 
                with applicable data protection laws.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">9. Changes to This Policy</h2>
              <p className="text-gray-300 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any material 
                changes by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-white mt-12">10. Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="bg-white/5 rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Privacy Officer</h4>
                    <p className="text-gray-300">privacy@audi.com</p>
                    <p className="text-gray-300">1-800-AUDI-HELP</p>
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

export default PrivacyPolicy
