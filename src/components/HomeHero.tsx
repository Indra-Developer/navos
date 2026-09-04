import { Link } from 'react-router-dom';

export default function HomeHero() {
  return (
    <section className="flex flex-col w-full bg-white">
      
      {/* --- HERO IMAGE ONLY --- */}
      <div className="relative w-full h-[60vh] min-h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center overflow-hidden bg-navos-navy">
        
        {/* Background Images */}
        <img 
          src="/hero-mobile.png" 
          alt="Navos Mobile Hero" 
          className="absolute inset-0 w-full h-full object-cover block md:hidden"
        />
        <img 
          src="/hero-desktop.png" 
          alt="Navos Desktop Hero" 
          className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
        />

        {/* Beautiful Multi-Layer Wave Overlay (Visible on Mobile & Desktop) */}
        <div className="absolute bottom-0 left-0 w-full leading-none z-10 translate-y-[1px]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[50px] md:h-[100px] lg:h-[150px]">
            {/* Teal Wave Layer */}
            <path d="M0,40 C280,100 540,0 900,40 C1200,70 1350,10 1440,0 L1440,120 L0,120 Z" fill="#00A3A3" fillOpacity="0.6" />
            {/* Navy Wave Layer */}
            <path d="M0,70 C300,120 600,20 960,70 C1200,100 1350,40 1440,20 L1440,120 L0,120 Z" fill="#0B1B3D" fillOpacity="0.8" />
            {/* White Wave Layer (Blends smoothly into the button section) */}
            <path d="M0,100 C320,60 640,120 1000,70 C1200,40 1350,80 1440,50 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </div>

      {/* --- BUTTONS SECTION (Below the Image) --- */}
      <div className="w-full bg-white py-8 md:py-10 flex justify-center items-center relative z-10 shadow-sm border-b border-gray-100">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto px-6">
          
          <Link 
            to="/services" 
            className="w-full md:w-auto bg-navos-teal text-white px-10 py-3.5 lg:py-4 rounded-md font-bold text-[15px] lg:text-base hover:bg-teal-600 transition-colors shadow-[0_8px_20px_rgba(0,163,163,0.25)] text-center flex justify-center items-center"
          >
            <span className="block md:hidden">Explore Our Solutions</span>
            <span className="hidden md:block">Our Services</span>
          </Link>
          
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