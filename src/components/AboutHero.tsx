export default function AboutHero() {
  return (
    <section className="relative w-full h-[55vh] min-h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-navos-navy">
      
      {/* Background Images */}
      <img 
        src="/about-hero-mobile.png"
        alt="About Navos" 
        className="absolute inset-0 w-full h-full object-cover object-center block md:hidden"
      />
      <img
        src="/about-hero-desktop.png" 
        alt="About Navos"
        className="absolute inset-0 w-full h-full  object-center hidden md:block"
      />

      {/* Beautiful Multi-Layer Wave Overlay */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-10 translate-y-[1px]">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[50px] md:h-[100px] lg:h-[150px]">
          <path d="M0,40 C280,100 540,0 900,40 C1200,70 1350,10 1440,0 L1440,120 L0,120 Z" fill="#00A3A3" fillOpacity="0.6" />
          <path d="M0,70 C300,120 600,20 960,70 C1200,100 1350,40 1440,20 L1440,120 L0,120 Z" fill="#0B1B3D" fillOpacity="0.8" />
          <path d="M0,100 C320,60 640,120 1000,70 C1200,40 1350,80 1440,50 L1440,120 L0,120 Z" fill="#FFFFFF" />
        </svg>
      </div>

    </section>
  );
}