import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <>
      <style>{`
        .footer-grid {
          display: grid;
          gap: 3rem;
          margin-bottom: 4rem;
          width: 100%;
        }
        
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        .footer-container {
          max-width: 80rem;
          margin: 0 auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        @media (max-width: 767px) {
          .footer-container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        .newsletter-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 28rem;
          margin: 0 auto;
        }
        
        @media (min-width: 640px) {
          .newsletter-container {
            flex-direction: row;
          }
        }
        
        .footer-main {
          background-color: black;
          border-top: 1px solid rgba(55, 65, 81, 0.5);
          padding-top: 5rem;
          padding-bottom: 5rem;
          width: 100%;
        }
        
        @media (max-width: 767px) {
          .footer-main {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
        }
        
        .social-icons {
          display: flex;
          gap: 1.5rem;
        }
        
        @media (max-width: 767px) {
          .social-icons {
            gap: 1rem;
          }
        }
        
        .legal-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }
        
        @media (max-width: 767px) {
          .legal-links {
            gap: 1rem;
          }
        }
      `}</style>
      <footer className="footer-main">
        <div className="footer-container">
          
          {/* Main Footer Content */}
          <div className="footer-grid">
          
          {/* Company */}
          <div style={{textAlign: 'center'}}>
            <h3 style={{color: 'white', fontWeight: '600', fontSize: '1.125rem', marginBottom: '1.5rem'}}>Company</h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={{marginBottom: '1rem'}}><Link to="/about" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>About Audi</Link></li>
              <li style={{marginBottom: '1rem'}}><Link to="/careers" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Careers</Link></li>
              <li style={{marginBottom: '1rem'}}><Link to="/press" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Press</Link></li>
              <li style={{marginBottom: '1rem'}}><Link to="/investors" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Investors</Link></li>
              <li style={{marginBottom: '0'}}><Link to="/sustainability" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Sustainability</Link></li>
            </ul>
          </div>

          {/* Vehicles */}
          <div style={{textAlign: 'center'}}>
            <h3 style={{color: 'white', fontWeight: '600', fontSize: '1.125rem', marginBottom: '1.5rem'}}>Vehicles</h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={{marginBottom: '1rem'}}><Link to="/models" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>All Models</Link></li>
              <li style={{marginBottom: '1rem'}}><Link to="/electric" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Electric Vehicles</Link></li>
              <li style={{marginBottom: '1rem'}}><a href="#sport" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Sport Models</a></li>
              <li style={{marginBottom: '1rem'}}><a href="#luxury" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Luxury Models</a></li>
              <li style={{marginBottom: '0'}}><Link to="/configure" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Vehicle Configurator</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div style={{textAlign: 'center'}}>
            <h3 style={{color: 'white', fontWeight: '600', fontSize: '1.125rem', marginBottom: '1.5rem'}}>Services</h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={{marginBottom: '1rem'}}><Link to="/myaudi" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>myAudi</Link></li>
              <li style={{marginBottom: '1rem'}}><Link to="/service" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Service & Maintenance</Link></li>
              <li style={{marginBottom: '1rem'}}><Link to="/parts" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Parts & Accessories</Link></li>
              <li style={{marginBottom: '1rem'}}><Link to="/finance" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Finance & Leasing</Link></li>
              <li style={{marginBottom: '0'}}><Link to="/insurance" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Insurance</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div style={{textAlign: 'center'}}>
            <h3 style={{color: 'white', fontWeight: '600', fontSize: '1.125rem', marginBottom: '1.5rem'}}>Support</h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={{marginBottom: '1rem'}}><Link to="/contact" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Contact Us</Link></li>
              <li style={{marginBottom: '1rem'}}><Link to="/find-dealer" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Find a Dealer</Link></li>
              <li style={{marginBottom: '1rem'}}><Link to="/test-drive" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Schedule Test Drive</Link></li>
              <li style={{marginBottom: '1rem'}}><Link to="/customer-support" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Customer Support</Link></li>
              <li style={{marginBottom: '0'}}><Link to="/faq" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div style={{backgroundColor: 'rgba(17, 24, 39, 0.5)', borderRadius: '0.5rem', padding: '2rem', marginBottom: '4rem', width: '100%'}}>
          <div style={{maxWidth: '42rem', margin: '0 auto', textAlign: 'center'}}>
            <h3 style={{color: 'white', fontWeight: '600', fontSize: '1.25rem', marginBottom: '1rem'}}>Stay Connected</h3>
            <p style={{color: '#9ca3af', marginBottom: '1.5rem'}}>Get the latest news, updates, and exclusive offers from Audi.</p>
            <div className="newsletter-container">
              <input 
                type="email" 
                placeholder="Enter your email address"
                style={{flex: 1, padding: '0.75rem 1rem', backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '0.5rem', color: 'white', fontSize: '1rem'}}
              />
              <button style={{padding: '0.75rem 1.5rem', backgroundColor: 'white', color: 'black', fontWeight: '500', borderRadius: '0.5rem', border: 'none', cursor: 'pointer'}}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Legal */}
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem'}}>
          
          {/* Social Media */}
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h4 style={{color: 'white', fontWeight: '500', marginBottom: '1rem'}}>Follow Audi</h4>
            <div className="social-icons">
              {/* Instagram */}
              <a href="https://instagram.com/audi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.205 4.771 1.74 4.919 4.99.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.99-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.19-4.771-1.699-4.919-4.99-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.99 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* Twitter */}
              <a href="https://twitter.com/audi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              {/* YouTube */}
              <a href="https://youtube.com/audi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/company/audi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
        
        {/* Legal Links */}
        <div style={{textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(55, 65, 81, 0.3)'}}>
          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem'}}>
            <Link to="/privacy" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Privacy Policy</Link>
            <Link to="/terms" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Terms of Service</Link>
            <Link to="/cookies" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Cookie Policy</Link>
            <Link to="/legal" style={{color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#9ca3af'}>Legal Notice</Link>
          </div>
        </div>
        
        {/* Copyright */}
        <div style={{textAlign: 'center', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(55, 65, 81, 0.3)'}}>
          <p style={{color: '#6b7280', fontSize: '0.875rem', margin: 0}}>
            © 2025 Audi AG. All rights reserved. | Audi is a trademark of AUDI AG.
          </p>
          <p style={{color: '#4b5563', fontSize: '0.75rem', marginTop: '0.5rem', margin: '0.5rem 0 0 0'}}>
            All consumption and emission values are based on the characteristics of the German market.
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
