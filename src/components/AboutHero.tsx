import { Link } from 'react-router-dom';

export default function AboutHero() {
  return (
    <section className="relative w-full bg-[#F2F8FB] pt-6 md:pt-10 pb-0 md:pb-10 overflow-hidden flex flex-col">
      
      {/* --- DESKTOP TOP-RIGHT WAVES --- */}
      <div className="absolute top-6 right-0 hidden md:block opacity-[0.35] pointer-events-none scale-90 origin-top-right">
        <svg width="400" height="150" viewBox="0 0 400 150" fill="none">
          <path d="M0 50 Q 100 100 200 50 T 400 50" stroke="#00A3A3" strokeWidth="2" fill="none" />
          <path d="M0 70 Q 100 120 200 70 T 400 70" stroke="#0B1B3D" strokeWidth="2" fill="none" opacity="0.6"/>
          <path d="M0 90 Q 100 140 200 90 T 400 90" stroke="#00A3A3" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* --- TEXT CONTENT --- */}
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px] relative z-20 w-full">
        
        {/* Breadcrumb (Connected) */}
        <div className="text-[12px] md:text-[13px] font-medium mb-4 md:mb-6 text-center md:text-left">
          <Link to="/" className="text-navos-teal hover:text-teal-600 md:text-gray-500 md:hover:text-navos-teal transition-colors">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500 md:text-navos-teal">About Us</span>
        </div>

        {/* Headlines */}
        <div className="text-center md:text-left max-w-[600px] mx-auto md:mx-0 relative z-20">
          <h1 className="text-navos-navy font-black text-3xl md:text-[42px] lg:text-[48px] tracking-tight uppercase mb-2 md:mb-3 drop-shadow-sm md:drop-shadow-none">
            About Navos
          </h1>
          
          {/* Note: Mobile text is White (to overlay the image sky), Desktop is Navy */}
          <p className="text-white md:text-navos-navy text-[15px] md:text-lg leading-snug md:leading-relaxed font-medium md:font-normal drop-shadow-md md:drop-shadow-none">
            Building meaningful connections across the maritime community.
          </p>
        </div>
      </div>

      {/* --- IMAGE SECTION --- */}
      <div className="relative w-full max-w-[1440px] mx-auto md:px-[60px] md:mt-8 z-10">
        
        {/* Mobile Image Container (Pulls up behind the white text) */}
        <div className="block md:hidden w-full h-[340px] relative -mt-[100px] z-0">
          {/* Top fade gradient to seamlessly blend background color into the sky */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#F2F8FB] via-[#F2F8FB]/80 to-transparent z-10"></div>
          
          <img 
            src="/services-hero-mobile.jpeg" 
            alt="About Navos" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Desktop Image Container (Wide Panoramic) */}
        <div className="hidden md:block w-full h-[250px] lg:h-[340px] relative rounded-t-[20px] lg:rounded-[24px] overflow-hidden shadow-xl">
          <img 
            src="/about-hero-desktop.jpeg" 
            alt="Navos Port Operations" 
            className="w-full h-full object-cover"
          />
          
          {/* Decorative Navy Steering Wheel & Wave Overlay on Desktop Image */}
          <div className="absolute bottom-5 right-6 text-navos-navy/80 flex items-center gap-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <circle cx="12" cy="12" r="7" />
              <path d="M12 2v3m0 14v3M2 12h3m14 0h3m-15.5-7.5l2.1 2.1m10.8 10.8l2.1 2.1m-15-15l2.1-2.1m10.8 10.8l2.1-2.1" />
            </svg>
            <svg width="80" height="16" viewBox="0 0 100 20" fill="none">
              <path d="M0 10 Q 25 20 50 10 T 100 10" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}