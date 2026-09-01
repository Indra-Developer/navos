export default function HomeHighlights() {
  const highlights = [
    {
      title: "Seafarer Opportunities",
      desktopDesc: "Discover and apply for career opportunities in the maritime industry.",
      mobileDesc: "Find your next job, build your career, and connect with employers.",
      image: "/highlight-1.jpeg",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-navos-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          {/* Ship Wheel & Anchor */}
          <circle cx="12" cy="12" r="7" />
          <path d="M12 2v3m0 14v3M2 12h3m14 0h3m-15.5-7.5l2.1 2.1m10.8 10.8l2.1 2.1m-15-15l2.1-2.1m10.8 10.8l2.1-2.1" />
          <path d="M12 9v5m-2-2c0 1.1.9 2 2 2s2-.9 2-2" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "Maritime Companies",
      desktopDesc: "Connect with leading organizations shaping the shipping world.",
      mobileDesc: "Discover leading shipping companies and industry partners.",
      image: "/highlight-2.jpeg",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-navos-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          {/* Shipping Globe */}
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" stroke="#00A3A3" strokeWidth="2"/>
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        </svg>
      )
    },
    {
      title: "Training & Institutes",
      desktopDesc: "Find the best education and training for your maritime future.",
      mobileDesc: "Enhance your skills with top-tier training and education.",
      image: "/highlight-3.jpeg",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-navos-navy" fill="currentColor" viewBox="0 0 24 24">
          {/* Education / Book Cap */}
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9z" />
          <path d="M4 19h16v2H4z" fill="#00A3A3"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full bg-[#F4F7F9] py-10 lg:py-16 overflow-hidden">
      
      {/* Background Subtle Waves (Desktop) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.25] hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none">
          <path d="M-100 200C300 300 600 50 1000 200C1400 350 1500 150 1600 250" stroke="#00A3A3" strokeWidth="1" />
          <path d="M-100 250C300 350 600 100 1000 250C1400 400 1500 200 1600 300" stroke="#0B1B3D" strokeWidth="1" opacity="0.5"/>
          <path d="M-100 300C300 400 600 150 1000 300C1400 450 1500 250 1600 350" stroke="#00A3A3" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px] relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-navos-navy font-black text-2xl lg:text-[32px] tracking-wide uppercase">
            Explore Maritime Opportunities
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          
          {highlights.map((highlight, index) => (
            <div key={index} className="relative group">
              
              {/* ======================================================== */}
              {/* MOBILE LAYOUT: Horizontal Card with Gradient Overlays    */}
              {/* ======================================================== */}
              <div className="md:hidden relative bg-white border-[1.5px] border-navos-navy rounded-xl overflow-hidden shadow-sm flex items-center min-h-[140px]">
                
                {/* Background Image placed on the right */}
                <div className="absolute right-0 top-0 w-[65%] h-full">
                  <img src={highlight.image} alt={highlight.title} className="w-full h-full object-cover object-right" />
                  {/* Gradient to blend white into the image smoothly */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                </div>

                {/* Mobile Content Overlay */}
                <div className="relative z-10 p-4 w-full max-w-[75%]">
                  <h3 className="text-navos-navy font-black text-[16px] uppercase leading-tight mb-1.5 flex items-start gap-2">
                    {/* Only show icon on mobile if it's the Institute card (matching design) */}
                    {index === 2 && (
                      <span className="flex-shrink-0 text-navos-teal mt-0.5 scale-[0.8]">
                        {highlight.icon}
                      </span>
                    )}
                    {highlight.title}
                  </h3>
                  <p className="text-gray-700 text-[12px] leading-snug mb-3 pr-2">
                    {highlight.mobileDesc}
                  </p>
                  <button className="bg-navos-navy text-white px-4 py-1.5 rounded-md font-bold text-[13px] shadow-md hover:bg-opacity-90 flex items-center gap-1 transition-colors">
                    Explore <span className="text-navos-teal">&rarr;</span>
                  </button>
                </div>
              </div>


              {/* ======================================================== */}
              {/* DESKTOP LAYOUT: Vertical Floating Cards                  */}
              {/* ======================================================== */}
              <div className="hidden md:flex bg-white rounded-[20px] shadow-[0_6px_20px_rgba(11,27,61,0.06)] overflow-hidden flex-col items-center pb-8 transition-transform duration-300 hover:-translate-y-2 h-full border border-gray-100">
                
                {/* Top Half Image */}
                <div className="w-full h-[180px] lg:h-[200px]">
                  <img src={highlight.image} alt={highlight.title} className="w-full h-full object-cover" />
                </div>

                {/* Overlapping Center Icon Circle */}
                <div className="w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center -mt-[32px] relative z-10 shadow-[0_4px_10px_rgba(0,0,0,0.08)] border-b-2 border-navos-teal">
                  {highlight.icon}
                </div>

                {/* Text Content */}
                <div className="px-5 lg:px-6 mt-4 flex flex-col items-center text-center flex-grow">
                  <h3 className="text-navos-navy font-black text-lg lg:text-[20px] uppercase leading-tight mb-3 max-w-[190px]">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-[13px] lg:text-[14px] leading-relaxed mb-5 flex-grow">
                    {highlight.desktopDesc}
                  </p>
                  <a href="#" className="text-navos-navy font-bold text-[14px] hover:text-navos-teal transition-colors flex items-center gap-1.5 mt-auto">
                    Explore <span className="text-lg leading-none">&rarr;</span>
                  </a>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full hidden md:block leading-none z-0">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="w-full h-[140px] lg:h-[220px]">
          {/* Teal Wave */}
          <path 
            d="M0,120 C320,200 500,20 1000,80 C1200,104 1350,60 1440,20 L1440,220 L0,220 Z" 
            fill="#00A3A3" 
          />
          {/* Navy Wave */}
          <path 
            d="M0,220 C200,50 600,280 1440,80 L1440,220 L0,220 Z" 
            fill="#0B1B3D" 
          />
          
        </svg>
      </div>
    </section>
  );
}