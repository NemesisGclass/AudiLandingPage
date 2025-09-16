import React from 'react'

const Navbar = () => {

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800/50 rounded-b-3xl">
      <div className="w-full flex items-center justify-center h-20">
        {/* Center - Audi Logo */}
        <img 
          src="/audilogoWhite.svg" 
          alt="Audi Logo" 
          className="h-20 w-auto"
        />
      </div>
    </nav>
  )
}

export default Navbar
