import { Link } from 'react-router-dom';

export default function AboutCTA() {
  return (
    <section className="relative w-full bg-navos-navy py-12 md:py-16 overflow-hidden">
      
      {/* Background Abstract Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
        <svg className="w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="none" fill="none" stroke="#00A3A3" strokeWidth="1">
          <path d="M-100 100 Q 200 200, 500 100 T 1100 100 T 1500 200" />
          <path d="M-100 150 Q 200 250, 500 150 T 1100 150 T 1500 250" />
          <path d="M-100 200 Q 200 300, 500 200 T 1100 200 T 1500 300" stroke="#FFFFFF" />
          <path d="M-100 250 Q 200 350, 500 250 T 1100 250 T 1500 350" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-[60px] relative z-10 flex flex-col items-center text-center">
        
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <div className="bg-white p-2 rounded-xl shadow-lg">
            <img 
              src="/mobile-logo.jpeg" 
              alt="NAVOS" 
              className="h-[40px] md:h-[50px] w-auto object-contain rounded-lg" 
            />
          </div>
        </div>

        <h2 className="text-white font-black text-[26px] md:text-[36px] lg:text-[42px] leading-[1.1] uppercase tracking-tight mb-3 md:mb-4 max-w-[700px]">
          Discover The Navos Maritime Community
        </h2>
        
        <p className="text-gray-300 text-[14px] md:text-base font-normal leading-relaxed max-w-[600px] mb-8 md:mb-10">
          Explore our services and discover how NAVOS connects the maritime world.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full md:w-auto">
          <Link 
            to="/services" 
            className="w-full md:w-auto bg-navos-teal text-white px-6 py-3.5 md:px-8 md:py-3 rounded-md md:rounded-full font-bold text-[13px] md:text-[14px] transition-colors shadow-md flex justify-center items-center"
          >
            Explore Services
          </Link>
          
          <Link 
            to="/contact" 
            className="w-full md:w-auto bg-transparent border-[1.5px] border-white text-white px-6 py-3.5 md:px-8 md:py-3 rounded-md md:rounded-full font-bold text-[13px] md:text-[14px] hover:bg-white/10 transition-colors shadow-md flex justify-center items-center"
          >
            Contact Us
          </Link>
        </div>
        
      </div>
    </section>
  );
}