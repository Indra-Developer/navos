import { Link } from 'react-router-dom';

export default function HomeHero() {
  return (
    <section className="flex flex-col w-full bg-white">
      
      {/* --- IMAGE & HEADLINE SECTION --- */}
      <div className="relative w-full h-[60vh] min-h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-start overflow-hidden">
        
        {/* Background Images */}
        <img 
          src="/hero-mobile.jpeg" 
          alt="Navos Mobile Hero" 
          className="absolute inset-0 w-full h-full object-cover block md:hidden"
        />
        <img 
          src="/hero-desktop.jpeg" 
          alt="Navos Desktop Hero" 
          className="absolute inset-0 w-full h-full object-cover object-right hidden md:block"
        />

        {/* Left-to-Right Fade Gradient Overlay (matching your contact style) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent hidden md:block w-[65%]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-transparent block md:hidden"></div>

        {/* Left-Aligned Headline Content */}
        <div className="relative z-10 text-left px-6 lg:px-[60px] max-w-[1440px] w-full mx-auto md:-mt-10">
          <div className="max-w-[700px]">
            <h1 className="text-navos-navy font-extrabold text-4xl md:text-5xl lg:text-[64px] leading-[1.1] mb-5 tracking-tight">
              Connecting the <br className="hidden md:block" /> Maritime Ecosystem
            </h1>
            <p className="text-gray-700 text-lg md:text-xl font-medium max-w-[550px]">
              Providing professional maritime expertise and global shipping solutions built on trust.
            </p>
          </div>
        </div>

        {/* Desktop Bottom Wave Overlay */}
        <div className="absolute bottom-0 left-0 w-full hidden md:block leading-none z-0">
          <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="w-full h-[140px] lg:h-[220px]">
            {/* Teal Wave */}
            <path 
              d="M0,120 C320,200 500,20 1000,80 C1200,104 1350,60 1440,20 L1440,220 L0,220 Z" 
              fill="#00A3A3" 
            />
            {/* Navy Wave */}
            <path 
              d="M0,220 C200,50 600,280 1440,80 L1440,220 L0,220 Z" 
              fill="#0B1B3D" 
            />
          </svg>
        </div>
      </div>

      {/* --- BUTTONS SECTION (Below the Image) --- */}
      <div className="w-full bg-white py-8 md:py-10 flex justify-center items-center relative z-10 shadow-sm border-b border-gray-100">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto px-6">
          
          {/* Primary Button */}
          <Link 
            to="/services" 
            className="w-full md:w-auto bg-navos-teal text-white px-10 py-3.5 lg:py-4 rounded-md font-bold text-[15px] lg:text-base hover:bg-teal-600 transition-colors shadow-[0_8px_20px_rgba(0,163,163,0.25)] text-center flex justify-center items-center"
          >
            <span className="block md:hidden">Explore Our Solutions</span>
            <span className="hidden md:block">Our Services</span>
          </Link>
          
          {/* Secondary Button */}
          <Link 
            to="/contact" 
            className="w-full md:w-auto bg-navos-navy text-white px-10 py-3.5 lg:py-4 rounded-md font-bold text-[15px] lg:text-base hover:bg-opacity-90 transition-colors shadow-[0_8px_20px_rgba(11,27,61,0.2)] text-center flex justify-center items-center"
          >
            Contact Us
          </Link>
          
        </div>
      </div>

    </section>
  );
}