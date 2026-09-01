export default function ServicesHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center overflow-hidden bg-white">
      
      {/* Background Images */}
      <img 
        src="/services-hero-mobile.jpeg" 
        alt="Navos Services" 
        className="absolute inset-0 w-full h-full object-cover block md:hidden"
      />
      <img 
        src="/services-hero-desktop.jpeg" 
        alt="Navos Services" 
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />

      {/* Dark Overlay (Desktop Only - Mobile keeps full color) */}
      <div className="absolute inset-0 bg-navos-navy/40 mix-blend-multiply hidden md:block"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navos-navy/20 to-navos-navy/70 hidden md:block"></div>
      
      {/* Light Overlay (Mobile Only - So dark text is readable) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-transparent block md:hidden z-0"></div>

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-[60px] flex flex-col items-start md:items-center text-left md:text-center mt-[-40px] md:mt-0">
        
        {/* Breadcrumb */}
        <div className="text-[13px] md:text-sm font-medium mb-4 text-navos-navy md:text-gray-300">
          <a href="#" className="hover:text-navos-teal transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-navos-teal md:text-white">Services</span>
        </div>

        <h1 className="text-navos-navy md:text-white font-extrabold text-4xl md:text-5xl lg:text-[64px] leading-[1.1] mb-3 md:mb-5 tracking-tight drop-shadow-sm md:drop-shadow-xl uppercase">
          Our Services
        </h1>
        <p className="text-gray-800 md:text-gray-100 text-[15px] md:text-lg lg:text-xl font-medium drop-shadow-none md:drop-shadow-md max-w-[650px] mx-0 md:mx-auto">
          Solutions and connections for every part of the maritime community.
        </p>
      </div>

    </section>
  );
}