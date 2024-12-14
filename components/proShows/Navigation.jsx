// import React from 'react';

// export default function Navigation() {
//   return (
//     <nav className=" w-full p-5 z-50 bg-gradient-to-b from-black/80 to-transparent">
//       <div className="flex gap-8 text-white/80 hover:text-white transition-colors">
//         <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
//         <a href="#" className="hover:text-orange-500 transition-colors">Contacts</a>
//         <a href="#" className="hover:text-orange-500 transition-colors">Info</a>
//       </div>
//     </nav>
//   );
// }

import React, { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute w-full z-50 bg-gradient-to-b from-black/80 to-transparent">
      {/* Main Navigation Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-lg sm:text-xl">Logo</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <a href="#" className="text-white/80 hover:text-white hover:text-orange-500 transition-colors text-sm lg:text-base font-medium px-2 py-1">
              Home
            </a>
            <a href="#" className="text-white/80 hover:text-white hover:text-orange-500 transition-colors text-sm lg:text-base font-medium px-2 py-1">
              Contacts
            </a>
            <a href="#" className="text-white/80 hover:text-white hover:text-orange-500 transition-colors text-sm lg:text-base font-medium px-2 py-1">
              Info
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-lg border-t border-white/10">
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:text-orange-500 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:text-orange-500 transition-colors"
          >
            Contacts
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:text-orange-500 transition-colors"
          >
            Info
          </a>
        </div>
      </div>
    </nav>
  );
}