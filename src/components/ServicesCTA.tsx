import { Link } from 'react-router-dom';

export default function ServicesCTA() {
  const phoneNumber = "6304963771";

  return (
    <section className="relative w-full bg-navos-navy py-16 md:py-24 overflow-hidden">
      
      {/* Background Abstract Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.2]">
        <svg className="w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="none" fill="none" stroke="#00A3A3" strokeWidth="1.5">
          <path d="M-100 100 Q 200 200, 500 100 T 1100 100 T 1500 200" />
          <path d="M-100 150 Q 200 250, 500 150 T 1100 150 T 1500 250" stroke="#FFFFFF" opacity="0.5" />
          <path d="M-100 200 Q 200 300, 500 200 T 1100 200 T 1500 300" />
          <path d="M-100 250 Q 200 350, 500 250 T 1100 250 T 1500 350" stroke="#FFFFFF" opacity="0.3" />
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
          Looking For The Right Maritime Connection?
        </h2>
        
        <p className="text-gray-300 text-[15px] md:text-lg lg:text-xl font-normal leading-relaxed max-w-[700px] mb-10">
          Explore how NAVOS can help you find the right opportunity, information, or connection.
        </p>

        {/* Buttons Group */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto">
          <Link 
            to="/contact" 
            className="w-full md:w-auto bg-navos-teal text-white px-8 py-4 md:py-3.5 rounded-md md:rounded-full font-bold text-[14px] md:text-[15px] shadow-lg hover:bg-teal-500 transition-colors flex justify-center items-center"
          >
            Contact Navos
          </Link>
          
          <a 
            href={`https://wa.me/91${phoneNumber}`} 
            target="_blank" 
            rel="noreferrer" 
            className="w-full md:w-auto bg-transparent border-[1.5px] border-white text-white px-8 py-4 md:py-3.5 rounded-md md:rounded-full font-bold text-[14px] md:text-[15px] hover:bg-white/10 transition-colors shadow-lg flex justify-center items-center"
          >
            WhatsApp
          </a>
        </div>
        
      </div>
    </section>
  );
}