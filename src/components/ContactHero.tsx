export default function ContactHero() {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] md:h-[450px] lg:h-[550px] flex items-center overflow-hidden bg-[#EBF3F8]">
      
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/contact-hero-mobile.jpeg" 
          alt="Contact Navos" 
          className="w-full h-full object-cover block md:hidden"
        />
        <img 
          src="/contact-hero-desktop.jpeg" 
          alt="Contact Navos" 
          className="w-full h-full object-cover object-right hidden md:block"
        />
      </div>

      {/* Gradients to fade the image into the background color for text readability */}
      {/* Desktop Gradient (Fades Left to Right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#EBF3F8] via-[#EBF3F8]/90 to-transparent hidden md:block w-[70%]"></div>
      
      {/* Mobile Gradient (Fades Top to Bottom) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EBF3F8] via-[#EBF3F8]/80 to-transparent block md:hidden h-[80%]"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-[60px] flex flex-col items-start text-left">
        
        {/* Breadcrumb */}
        <div className="text-[13px] md:text-sm font-medium mb-4 text-navos-teal">
          <a href="/" className="hover:text-teal-700 transition-colors">Home</a>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-navos-navy">Contact</span>
        </div>

        <h1 className="text-navos-navy font-black text-4xl md:text-5xl lg:text-[64px] leading-[1.1] mb-3 md:mb-5 tracking-tight uppercase">
          Let's Connect
        </h1>
        <p className="text-gray-700 text-[15px] md:text-lg lg:text-xl font-medium max-w-[450px]">
          Have a question or need maritime assistance? We are here to help.
        </p>
      </div>

    </section>
  );
}