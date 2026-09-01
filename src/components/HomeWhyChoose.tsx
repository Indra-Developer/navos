export default function HomeWhyChoose() {
  const reasons = [
    {
      title: "Maritime Focus",
      mobileDesc: "Specialized expertise in maritime.",
      desktopDesc: "Specialized maritime platform dedicated to industry growth and connectivity.",
      icon: (
        <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          {/* Ship Wheel & Anchor */}
          <circle cx="12" cy="12" r="7" />
          <path d="M12 2v3m0 14v3M2 12h3m14 0h3m-15.5-7.5l2.1 2.1m10.8 10.8l2.1 2.1m-15-15l2.1-2.1m10.8 10.8l2.1-2.1" />
          <path d="M12 9v5m-2-2c0 1.1.9 2 2 2s2-.9 2-2" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "Trusted Connections",
      mobileDesc: "Strong partnerships across the industry.",
      desktopDesc: "Foster verified relationships and secure partnerships across the sector.",
      icon: (
        <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          {/* Globe & Handshake */}
          <circle cx="12" cy="9" r="6" />
          <path d="M6 9c0 3.3 6 6 6 6s6-2.7 6-6" />
          <path d="M8.5 16.5L5 20h14l-3.5-3.5" />
          <path d="M9 18h6" />
        </svg>
      )
    },
    {
      title: "Career Opportunities",
      mobileDesc: "Pathways for growth and advancement.",
      desktopDesc: "Unlock tailored job prospects and professional development resources.",
      icon: (
        <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          {/* Compass / Growth */}
          <circle cx="12" cy="12" r="9" />
          <path d="M16 8l-3 5-5 3 3-5 5-3z" fill="currentColor" opacity="0.2" />
          <path d="M16 8l-3 5-5 3 3-5 5-3z" />
        </svg>
      )
    },
    {
      title: "Industry Support",
      mobileDesc: "Comprehensive resources for stakeholders.",
      desktopDesc: "Access comprehensive tools and support for operational excellence and compliance.",
      icon: (
        <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          {/* Chart / Lighthouse hybrid */}
          <path d="M3 21h18M4 18v-9m4 9V6m4 12v-6m4 6v-4" />
          <path d="M3 14l5-5 4 4 8-8" stroke="#00A3A3" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "People First",
      mobileDesc: "Committed to community well-being.",
      desktopDesc: "Prioritize the well-being and professional advancement of every individual.",
      icon: (
        <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          {/* Heart & House/People */}
          <path d="M3 21v-8l9-7 9 7v8H3z" />
          <path d="M12 11c-1.5 0-2.5 1-2.5 2.5S12 17 12 17s2.5-1.5 2.5-3.5S13.5 11 12 11z" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full bg-[#EBF3F8] py-10 lg:py-16 overflow-hidden">
      
      {/* Background Waves - Matches the subtle lines in the design */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none">
          <path d="M-100 300C200 400 500 100 900 300C1300 500 1500 200 1600 300" stroke="#00A3A3" strokeWidth="1" opacity="0.3"/>
          <path d="M-100 350C200 450 500 150 900 350C1300 550 1500 250 1600 350" stroke="#0B1B3D" strokeWidth="1" opacity="0.15"/>
          <path d="M-100 400C200 500 500 200 900 400C1300 600 1500 300 1600 400" stroke="#00A3A3" strokeWidth="1" opacity="0.3"/>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px] relative z-10 pb-8 lg:pb-12">
        
        {/* Header */}
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-navos-navy font-black text-2xl lg:text-[32px] tracking-wide uppercase lg:mb-2">
            Why Choose Navos?
          </h2>
          <p className="hidden lg:block text-navos-teal font-medium text-base">
            A trusted approach to connecting the maritime community.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-3 lg:gap-5">
          
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white border-[1.5px] border-navos-navy rounded-[14px] shadow-[0_4px_12px_rgba(11,27,61,0.06)] p-4 lg:p-5 flex flex-row lg:flex-col items-center lg:text-center gap-3 lg:gap-4 w-full lg:w-[250px]"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 text-navos-teal lg:text-navos-navy">
                {reason.icon}
              </div>

              {/* Text Content */}
              <div className="flex-1 flex flex-col items-start lg:items-center">
                <h3 className="text-navos-navy font-bold text-[15px] lg:text-[16px] mb-0.5 lg:mb-1.5">
                  {reason.title}
                </h3>
                
                {/* Mobile Description */}
                <p className="block lg:hidden text-gray-600 text-[13px] leading-snug">
                  {reason.mobileDesc}
                </p>
                
                {/* Desktop Description */}
                <p className="hidden lg:block text-gray-600 text-[13px] leading-relaxed">
                  {reason.desktopDesc}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Mobile Footer Logo */}
        <div className="mt-8 flex justify-center lg:hidden opacity-80">
          <img src="/mobile-logo.jpeg" alt="NAVOS" className="h-[45px] w-auto object-contain" />
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