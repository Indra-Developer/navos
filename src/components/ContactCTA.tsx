export default function ContactCTA() {
  const phoneNumber = "6304963771";

  return (
    <section className="relative w-full bg-navos-navy py-16 md:py-24 overflow-hidden">
      
      {/* Background Abstract Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.2]">
        <svg className="w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="none" fill="none" stroke="#00A3A3" strokeWidth="1.5">
          <path d="M-100 100 Q 200 200, 500 100 T 1100 100 T 1500 200" />
          <path d="M-100 150 Q 200 250, 500 150 T 1100 150 T 1500 250" stroke="#FFFFFF" opacity="0.5" />
          <path d="M-100 200 Q 200 300, 500 200 T 1100 200 T 1500 300" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-[60px] relative z-10 flex flex-col items-center text-center">
        
        {/* Logo at the top */}
        <div className="mb-6 flex justify-center">
          <div className="bg-white p-2 rounded-xl shadow-lg">
            <img 
              src="/mobile-logo.jpeg" 
              alt="NAVOS" 
              className="h-[40px] md:h-[50px] w-auto object-contain rounded-lg" 
            />
          </div>
        </div>

        {/* Headlines */}
        <h2 className="text-white font-black text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] uppercase tracking-tight mb-4 max-w-[800px]">
          We're Ready To Hear From You
        </h2>
        
        <p className="text-gray-300 text-[15px] md:text-lg lg:text-xl font-normal leading-relaxed max-w-[700px] mb-10">
          Connect with NAVOS and take the next step.
        </p>

        {/* Buttons Group linking to your number */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto">
          <a 
            href={`tel:+91${phoneNumber}`} 
            className="w-full md:w-auto bg-navos-teal text-white px-8 py-4 md:py-3.5 rounded-md md:rounded-full font-bold text-[14px] md:text-[15px] shadow-lg hover:bg-teal-500 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Call Us
          </a>
          
          <a 
            href={`https://wa.me/91${phoneNumber}`} 
            target="_blank" 
            rel="noreferrer" 
            className="w-full md:w-auto bg-transparent border-[1.5px] border-white text-white px-8 py-4 md:py-3.5 rounded-md md:rounded-full font-bold text-[14px] md:text-[15px] hover:bg-white/10 transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
        
      </div>
    </section>
  );
}