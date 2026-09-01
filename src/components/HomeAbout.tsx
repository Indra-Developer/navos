import { Link } from 'react-router-dom';

export default function HomeAbout() {
  return (
    <section className="relative w-full bg-white py-10 lg:py-16 overflow-hidden">
      
      {/* --- BACKGROUND WAVE GRAPHICS (Desktop Only) --- */}
      <svg className="absolute top-0 right-0 w-[300px] h-[300px] hidden lg:block opacity-40 pointer-events-none" viewBox="0 0 400 400" fill="none">
        <path d="M0,50 Q200,150 400,0" stroke="#00A3A3" strokeWidth="1" opacity="0.3" fill="none"/>
        <path d="M0,80 Q200,180 400,30" stroke="#0B1B3D" strokeWidth="1" opacity="0.2" fill="none"/>
        <path d="M0,110 Q200,210 400,60" stroke="#00A3A3" strokeWidth="1" opacity="0.3" fill="none"/>
        <path d="M0,140 Q200,240 400,90" stroke="#0B1B3D" strokeWidth="1" opacity="0.2" fill="none"/>
      </svg>
      <svg className="absolute bottom-0 left-0 w-[300px] h-[200px] hidden lg:block opacity-40 pointer-events-none" viewBox="0 0 400 300" fill="none">
        <path d="M-100,250 Q100,150 400,300" stroke="#00A3A3" strokeWidth="1" opacity="0.3" fill="none"/>
        <path d="M-100,280 Q100,180 400,330" stroke="#0B1B3D" strokeWidth="1" opacity="0.2" fill="none"/>
        <path d="M-100,310 Q100,210 400,360" stroke="#00A3A3" strokeWidth="1" opacity="0.3" fill="none"/>
      </svg>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[60px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* LEFT: Image Section */}
        <div className="w-full h-[240px] md:h-[320px] lg:h-[400px] relative rounded-xl lg:rounded-none overflow-hidden shadow-lg lg:shadow-none">
          <img 
            src="/about-image.jpeg" 
            alt="NAVOS Maritime Operations" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* RIGHT: Text Content Section */}
        <div className="flex flex-col py-2 lg:py-0">
          
          <span className="text-navos-teal font-semibold tracking-wider text-xs lg:text-sm mb-2 uppercase">
            ABOUT NAVOS
          </span>
          
          <h2 className="text-navos-navy font-black text-[30px] md:text-4xl lg:text-[40px] leading-[1.1] mb-4 uppercase tracking-tight">
            Connecting People <br className="hidden lg:block"/>
            Across the Maritime <br className="hidden lg:block"/>
            World
          </h2>

          <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-6 lg:mb-8 max-w-[600px]">
            NAVOS Marine Solutions is dedicated to fostering meaningful connections within the global maritime industry. We empower seafarers and shipping companies by bridging gaps and providing innovative platforms for growth and collaboration.
          </p>

          {/* Highlights Grid */}
          <div className="flex flex-row justify-between lg:grid lg:grid-cols-3 gap-2 lg:gap-4 mb-8">
            
            {/* Highlight 1 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 lg:flex-none">
              <svg className="w-6 h-6 lg:w-8 lg:h-8 text-navos-teal mb-2 lg:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M4.9 19.1l14.2-14.2" />
              </svg>
              <h4 className="text-navos-navy font-bold text-[10px] lg:text-[14px] uppercase lg:capitalize leading-tight mb-0 lg:mb-1 max-w-[80px] lg:max-w-none">
                Maritime <br className="block lg:hidden"/> Opportunities
              </h4>
              <p className="hidden lg:block text-gray-600 text-[12px] leading-relaxed pr-2">
                Access to diverse career paths and professional development.
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 lg:flex-none">
              <svg className="w-6 h-6 lg:w-8 lg:h-8 text-navos-teal mb-2 lg:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              <h4 className="text-navos-navy font-bold text-[10px] lg:text-[14px] uppercase lg:capitalize leading-tight mb-0 lg:mb-1 max-w-[80px] lg:max-w-none">
                Industry <br className="block lg:hidden"/> Connections
              </h4>
              <p className="hidden lg:block text-gray-600 text-[12px] leading-relaxed pr-2">
                Building a strong network for businesses and professionals.
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 lg:flex-none">
              <svg className="w-6 h-6 lg:w-8 lg:h-8 text-navos-teal mb-2 lg:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 0v8m-7 0h14" />
                <path d="M6 14s1 2 6 2 6-2 6-2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h4 className="text-navos-navy font-bold text-[10px] lg:text-[14px] uppercase lg:capitalize leading-tight mb-0 lg:mb-1 max-w-[80px] lg:max-w-none">
                Community <br className="block lg:hidden"/> Support
              </h4>
              <p className="hidden lg:block text-gray-600 text-[12px] leading-relaxed pr-2">
                Resources and initiatives for seafarer well-being and success.
              </p>
            </div>

          </div>

          {/* Button */}
          <Link 
            to="/about" 
            className="w-full lg:w-max bg-navos-teal lg:bg-navos-navy text-white px-7 py-3 lg:py-3 rounded-md font-bold text-[13px] hover:opacity-90 transition-opacity flex items-center justify-center lg:justify-start gap-2 shadow-lg lg:shadow-none uppercase lg:normal-case"
          >
            Learn More About NAVOS
            <svg className="w-5 h-5 block lg:hidden opacity-70" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z"/>
            </svg>
          </Link>

        </div>
      </div>
      
    </section>
  );
}