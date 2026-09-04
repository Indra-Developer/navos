import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const phoneNumber = "6304963771";
  const formattedPhone = "+91 " + phoneNumber;

  const closeMenu = () => setIsMobileMenuOpen(false);
  const isActive = (path: string) => location.pathname === path;

  // Add a subtle shadow only when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`w-full sticky top-0 z-[100] transition-all duration-300 bg-white ${
        scrolled ? 'shadow-[0_4px_20px_rgba(11,27,61,0.08)] py-0' : 'shadow-none py-1 md:py-2'
      }`}
    >
      {/* --- MAIN HEADER CONTENT --- */}
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px] h-[76px] md:h-[90px] flex items-center justify-between">

        {/* 1. Logo Section */}
        <Link to="/" onClick={closeMenu} className="flex-shrink-0 flex items-center cursor-pointer">
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            src="/desktop-logo.jpeg"
            alt="NAVOS Marine Solutions"
            className="hidden md:block h-[55px] lg:h-[75px] w-auto object-contain mix-blend-multiply"
          />
          <img
            src="/mobile-logo.jpeg"
            alt="NAVOS Marine Solutions"
            className="block md:hidden h-[56px] w-auto object-contain py-1 mix-blend-multiply"
          />
        </Link>

        {/* 2. Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12 ml-auto mr-8 lg:mr-10">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Contact Us', path: '/contact' }
          ].map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              className={`font-bold relative group text-[15px] transition-colors ${
                isActive(item.path) ? 'text-navos-teal' : 'text-navos-navy hover:text-navos-teal'
              }`}
            >
              {item.name}
              {/* Animated Underline for Active State */}
              {isActive(item.path) && (
                <motion.span 
                  layoutId="underline"
                  className="absolute -bottom-[6px] left-0 w-full h-[3px] bg-navos-teal rounded-full"
                />
              )}
              {/* Hover Underline (Only shows if not active) */}
              {!isActive(item.path) && (
                <span className="absolute -bottom-[6px] left-0 w-0 h-[3px] bg-navos-teal rounded-full transition-all duration-300 group-hover:w-full opacity-50" />
              )}
            </Link>
          ))}
        </nav>

        {/* 3. Desktop Actions (Styled matching your screenshot) */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`tel:+91${phoneNumber}`} 
            className="px-6 py-2.5 rounded-md bg-navos-navy text-white font-semibold flex items-center gap-2 text-[14px] shadow-sm hover:shadow-md transition-shadow"
          >
            Call Us
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/91${phoneNumber}`} 
            target="_blank" 
            rel="noreferrer" 
            className="px-6 py-2.5 rounded-md bg-navos-navy text-white font-semibold flex items-center gap-2 text-[14px] shadow-sm hover:shadow-md transition-shadow"
          >
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            WhatsApp
          </motion.a>
        </div>

        {/* 4. Mobile Hamburger Icon */}
        <button
          className="md:hidden p-2 text-navos-navy focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 5. Animated Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.1)] absolute w-full left-0 top-[76px] z-50"
          >
            <nav className="flex flex-col px-6 py-6 space-y-2">

              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Contact Us', path: '/contact' }
              ].map((item) => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  onClick={closeMenu} 
                  className={`font-black text-[18px] uppercase tracking-wide border-b border-gray-100 py-3 ${
                    isActive(item.path) ? 'text-navos-teal' : 'text-navos-navy'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-6 mt-2 flex flex-col gap-3">
                <a href={`tel:+91${phoneNumber}`} onClick={closeMenu} className="w-full py-4 rounded-md bg-navos-navy text-white font-bold text-center flex items-center justify-center gap-2 shadow-md">
                  Call Us
                </a>
                <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noreferrer" onClick={closeMenu} className="w-full py-4 rounded-md bg-navos-teal text-white font-bold text-center flex items-center justify-center gap-2 shadow-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}