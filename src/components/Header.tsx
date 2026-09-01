import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Gets the current URL path

  const phoneNumber = "6304963771";
  const formattedPhone = "+91" + phoneNumber;

  // Helper function to close the mobile menu when a link is clicked
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Helper to check if a path is active to show the teal underline
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full bg-navos-white sticky top-0 z-[100] shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
      {/* Desktop & Mobile Container */}
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px] h-[76px] md:h-[95px] flex items-center justify-between">

        {/* 1. Logo Section (Now clickable to go home) */}
        <Link to="/" onClick={closeMenu} className="flex-shrink-0 flex items-center cursor-pointer">
          {/* Desktop Logo (Hidden on mobile) */}
          <img
            src="/desktop-logo.jpeg"
            alt="NAVOS Marine Solutions"
            className="hidden md:block h-[50px] lg:h-[95px] w-auto object-contain"
          />
          {/* Mobile Logo (Hidden on desktop) */}
          <img
            src="/mobile-logo.jpeg"
            alt="NAVOS Marine Solutions"
            className="block md:hidden h-[66px] w-auto object-contain py-1"
          />
        </Link>

        {/* 2. Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12 ml-auto mr-8 lg:mr-12">

          <Link to="/" className={`font-semibold relative group text-[15px] lg:text-base transition-colors ${isActive('/') ? 'text-navos-navy' : 'text-navos-navy/80 hover:text-navos-teal'}`}>
            Home
            {isActive('/') && <span className="absolute -bottom-[6px] left-0 w-[110%] h-[2.5px] bg-gradient-to-r from-navos-teal to-transparent rounded-full"></span>}
          </Link>

          <Link to="/about" className={`font-semibold relative group text-[15px] lg:text-base transition-colors ${isActive('/about') ? 'text-navos-navy' : 'text-navos-navy/80 hover:text-navos-teal'}`}>
            About Us
            {isActive('/about') && <span className="absolute -bottom-[6px] left-0 w-[110%] h-[2.5px] bg-gradient-to-r from-navos-teal to-transparent rounded-full"></span>}
          </Link>

          <Link to="/services" className={`font-semibold relative group text-[15px] lg:text-base transition-colors ${isActive('/services') ? 'text-navos-navy' : 'text-navos-navy/80 hover:text-navos-teal'}`}>
            Services
            {isActive('/services') && <span className="absolute -bottom-[6px] left-0 w-[110%] h-[2.5px] bg-gradient-to-r from-navos-teal to-transparent rounded-full"></span>}
          </Link>

          <Link to="/contact" className={`font-semibold relative group text-[15px] lg:text-base transition-colors ${isActive('/contact') ? 'text-navos-navy' : 'text-navos-navy/80 hover:text-navos-teal'}`}>
            Contact Us
            {isActive('/contact') && <span className="absolute -bottom-[6px] left-0 w-[110%] h-[2.5px] bg-gradient-to-r from-navos-teal to-transparent rounded-full"></span>}
          </Link>

        </nav>

        {/* 3. Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <a href={`tel:${formattedPhone}`} className="px-5 py-2.5 rounded-md bg-navos-navy text-white font-medium hover:bg-opacity-90 transition-colors flex items-center gap-2.5 text-[15px]">
            {/* Phone Icon */}
            <svg className="w-4 h-4 text-navos-teal" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Us
          </a>

          <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-md bg-navos-teal text-white font-medium hover:bg-teal-600 transition-colors flex items-center gap-2 text-[15px]">
            {/* WhatsApp Icon */}
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* 4. Mobile Hamburger Icon */}
        <button
          className="md:hidden p-1 text-navos-navy focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            /* Close Icon */
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Icon matching design */
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 5. Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-navos-white border-t border-gray-100 px-6 py-6 shadow-xl absolute w-full left-0 top-[76px]">
          <nav className="flex flex-col space-y-6">

            <Link to="/" onClick={closeMenu} className={`font-bold text-lg ${isActive('/') ? 'text-navos-teal' : 'text-navos-navy'}`}>
              Home
            </Link>
            <Link to="/about" onClick={closeMenu} className={`font-bold text-lg ${isActive('/about') ? 'text-navos-teal' : 'text-navos-navy'}`}>
              About Us
            </Link>
            <Link to="/services" onClick={closeMenu} className={`font-bold text-lg ${isActive('/services') ? 'text-navos-teal' : 'text-navos-navy'}`}>
              Services
            </Link>
            <Link to="/contact" onClick={closeMenu} className={`font-bold text-lg ${isActive('/contact') ? 'text-navos-teal' : 'text-navos-navy'}`}>
              Contact Us
            </Link>

            <div className="pt-6 mt-2 border-t border-gray-100 flex flex-col gap-3">
              <a href={`tel:${formattedPhone}`} onClick={closeMenu} className="w-full py-3.5 rounded-md bg-navos-navy text-white font-semibold text-center flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-navos-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call Us
              </a>
              <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noreferrer" onClick={closeMenu} className="w-full py-3.5 rounded-md bg-navos-teal text-white font-semibold text-center flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </nav>
            </div>
          )}
    </header>
  );
}