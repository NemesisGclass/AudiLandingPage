import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <style>{`
        .liquid-glass-nav {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .liquid-glass-nav:hover {
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }
        
        .liquid-glass-dropdown {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        .nav-link-glow {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-link-glow:hover {
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
          transform: translateY(-1px);
        }
        
        .logo-glow {
          transition: all 0.3s ease;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
        }
        
        .logo-glow:hover {
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5));
          transform: scale(1.05);
        }
      `}</style>
      <nav className="liquid-glass-nav fixed top-0 w-full z-50 rounded-b-3xl">
      {/* Desktop Navigation */}
      <div className="hidden md:flex w-full items-center justify-between h-20" style={{paddingLeft: '4rem', paddingRight: '4rem'}}>
        {/* Left side - Navigation Links */}
        <div className="flex items-center">
          <Link to="/models" className="nav-link-glow text-white hover:text-gray-300 font-medium" style={{marginRight: '4rem'}}>
            Models
          </Link>
          <Link to="/test-drive" className="nav-link-glow text-white hover:text-gray-300 font-medium">
            Test Drive
          </Link>
        </div>

        {/* Center - Audi Logo */}
        <div className="flex items-center justify-center">
          <Link to="/">
            <img 
              src="/audilogoWhite.svg" 
              alt="Audi Logo" 
              className="logo-glow h-20 w-auto"
            />
          </Link>
        </div>

        {/* Right side - Navigation Links */}
        <div className="flex items-center">
          <Link to="/electric" className="nav-link-glow text-white hover:text-gray-300 font-medium" style={{marginRight: '4rem'}}>
            Electric
          </Link>
          <Link to="/contact" className="nav-link-glow text-white hover:text-gray-300 font-medium">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-center h-20 px-4 relative">
        {/* Mobile Logo - Perfectly Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img 
              src="/audilogoWhite.svg" 
              alt="Audi Logo" 
              className="logo-glow h-16 w-auto"
            />
          </Link>
        </div>

        {/* Mobile Menu Button - Fixed Position */}
        <button 
          onClick={toggleMenu}
          className="text-white hover:text-gray-300 transition-all duration-300 p-2 absolute right-4"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu 
              size={24} 
              className={`absolute transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
              }`}
            />
            <X 
              size={24} 
              className={`absolute transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden liquid-glass-dropdown transition-all duration-500 ease-in-out overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-6 space-y-12 text-center">
          <Link 
            to="/models" 
            className="nav-link-glow block text-white hover:text-gray-300 font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Models
          </Link>
          <Link 
            to="/test-drive" 
            className="nav-link-glow block text-white hover:text-gray-300 font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Test Drive
          </Link>
          <Link 
            to="/electric" 
            className="nav-link-glow block text-white hover:text-gray-300 font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Electric
          </Link>
          <Link 
            to="/contact" 
            className="nav-link-glow block text-white hover:text-gray-300 font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
