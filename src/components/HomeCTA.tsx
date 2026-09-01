import { Link } from 'react-router-dom';

export default function HomeCTA() {
  const phoneNumber = "6304963771";

  return (
    <section className="relative w-full bg-navos-navy py-12 md:py-16 lg:py-20 overflow-hidden">
      
      {/* Background Abstract Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
        {/* Thin wavy lines for background texture */}
        <svg className="w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="none" fill="none" stroke="#FFFFFF" strokeWidth="1">
          <path d="M-100 100 Q 200 200, 500 100 T 1100 100 T 1500 200" />
          <path d="M-100 150 Q 200 250, 500 150 T 1100 150 T 1500 250" />
          <path d="M-100 200 Q 200 300, 500 200 T 1100 200 T 1500 300" />
          <path d="M-100 250 Q 200 350, 500 250 T 1100 250 T 1500 350" />
          <path d="M-100 300 Q 200 400, 500 300 T 1100 300 T 1500 400" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-[60px] relative z-10 flex flex-col items-center text-center">
        
        {/* Logo with rounded corners (wrapped in white so the JPEG looks clean) */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="bg-white p-2.5 rounded-xl md:rounded-2xl shadow-lg">
            <img 
              src="/mobile-logo.jpeg" 
              alt="NAVOS Marine Solutions" 
              className="h-[40px] md:h-[80px] w-auto object-contain rounded-md" 
            />
          </div>
        </div>

        {/* Headlines */}
        <h2 className="text-white font-black text-[28px] md:text-[38px] lg:text-[48px] leading-[1.1] uppercase tracking-tight mb-3 md:mb-4 max-w-[800px]">
          Let's Move Forward Together
        </h2>
        
        <p className="text-gray-300 text-[14px] md:text-base lg:text-lg font-normal leading-relaxed max-w-[700px] mb-8 md:mb-10">
          Whether you are a seafarer, company, institute, or family, NAVOS is here to connect you with the right resources.
        </p>

        {/* Buttons Group */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 w-full md:w-auto">
          
          {/* Primary Button -> Links to Contact Page */}
          <Link 
            to="/contact" 
            className="w-full md:w-auto bg-navos-teal text-white px-6 py-3.5 md:px-8 md:py-3.5 rounded-md md:rounded-full font-bold text-[13px] md:text-[15px] uppercase md:normal-case hover:bg-teal-500 transition-colors shadow-lg flex justify-center items-center"
          >
            Contact Navos
          </Link>
          
          {/* Secondary Button -> Links to WhatsApp */}
          <a 
            href={`https://wa.me/91${phoneNumber}`} 
            target="_blank" 
            rel="noreferrer" 
            className="w-full md:w-auto bg-transparent border-2 border-white text-white px-6 py-3.5 md:px-8 md:py-3.5 rounded-md md:rounded-full font-bold text-[13px] md:text-[15px] uppercase md:normal-case hover:bg-white/10 transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </a>

        </div>
        
      </div>
    </section>
  );
}