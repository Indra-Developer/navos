export default function AboutVisionMission() {
  return (
    <section className="relative w-full bg-white py-10 lg:py-16">
      <div className="max-w-[1000px] mx-auto px-5 lg:px-[60px]">
        
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-navos-navy font-black text-2xl lg:text-[32px] tracking-wide uppercase">
            Our Vision & Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
          
          {/* VISION CARD */}
          <div className="bg-white border-[1.5px] border-gray-100 rounded-[16px] shadow-[0_6px_20px_rgba(11,27,61,0.06)] p-6 lg:p-8 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[6px] bg-navos-teal"></div>
            
            <svg className="w-16 h-16 text-navos-navy mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <circle cx="12" cy="12" r="8" />
              <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m13.5-5.5l1.5-1.5m-14 14l1.5-1.5m11 0l1.5 1.5m-14-14l1.5 1.5" />
              <path d="M15 9l-6 6M9 9l6 6" stroke="#00A3A3" strokeWidth="2" />
            </svg>
            
            <h3 className="text-navos-navy font-black text-lg lg:text-xl uppercase tracking-wide mb-3">Vision</h3>
            <p className="text-gray-600 text-[14px] leading-relaxed">
              Building a connected maritime ecosystem.
            </p>
          </div>

          {/* MISSION CARD */}
          <div className="bg-white border-[1.5px] border-gray-100 rounded-[16px] shadow-[0_6px_20px_rgba(11,27,61,0.06)] p-6 lg:p-8 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[6px] bg-navos-navy"></div>
            
            <svg className="w-16 h-16 text-navos-navy mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              <path d="M12 17v4m-2-2h4" stroke="#00A3A3" strokeWidth="2" />
            </svg>

            <h3 className="text-navos-navy font-black text-lg lg:text-xl uppercase tracking-wide mb-3">Mission</h3>
            <p className="text-gray-600 text-[14px] leading-relaxed">
              Connecting people, organizations, education, and opportunities across the maritime world.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}