export default function HomeHowConnects() {
  return (
    <section className="relative w-full bg-white py-10 lg:py-16 overflow-hidden">
      
      {/* --- BACKGROUND SUBTLE WAVES --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] lg:opacity-30 flex items-center justify-center">
        <svg className="w-[200%] md:w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="none" fill="none">
          <path d="M-200 200 C 200 300, 500 100, 900 200 C 1300 300, 1600 100, 1800 200" stroke="#00A3A3" strokeWidth="2" opacity="0.5"/>
          <path d="M-200 220 C 200 320, 500 120, 900 220 C 1300 320, 1600 120, 1800 220" stroke="#0B1B3D" strokeWidth="2" opacity="0.3"/>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px] relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-navos-navy font-black text-2xl lg:text-[32px] tracking-tight uppercase mb-2">
            One Platform. Four Maritime Connections.
          </h2>
          <p className="text-gray-700 text-sm lg:text-base font-medium">
            Connecting the people and organizations that shape the maritime community.
          </p>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW: INFOGRAPHIC DIAGRAM                        */}
        {/* ======================================================== */}
        <div className="hidden lg:block relative w-full max-w-[1000px] mx-auto h-[380px]">
          
          {/* SVG Connection Lines (Adjusted for smaller height) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 380">
            <defs>
              <linearGradient id="lineGradLeft" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#00A3A3" />
                <stop offset="100%" stopColor="#0B1B3D" />
              </linearGradient>
              <linearGradient id="lineGradRight" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00A3A3" />
                <stop offset="100%" stopColor="#0B1B3D" />
              </linearGradient>
            </defs>
            {/* Top Left Line */}
            <path d="M 500 190 C 350 190, 350 75, 240 75" fill="none" stroke="url(#lineGradLeft)" strokeWidth="5" strokeLinecap="round" />
            {/* Bottom Left Line */}
            <path d="M 500 190 C 350 190, 350 305, 240 305" fill="none" stroke="url(#lineGradLeft)" strokeWidth="5" strokeLinecap="round" />
            {/* Top Right Line */}
            <path d="M 500 190 C 650 190, 650 75, 760 75" fill="none" stroke="url(#lineGradRight)" strokeWidth="5" strokeLinecap="round" />
            {/* Bottom Right Line */}
            <path d="M 500 190 C 650 190, 650 305, 760 305" fill="none" stroke="url(#lineGradRight)" strokeWidth="5" strokeLinecap="round" />
          </svg>

          {/* Center NAVOS Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center w-[170px] h-[170px] bg-white rounded-full shadow-[0_8px_30px_rgba(11,27,61,0.12)] border-[6px] border-navos-teal/20 outline outline-[3px] outline-navos-navy">
             {/* Replaced Icon and Text with the Mobile Logo */}
             <img 
               src="/mobile-logo.jpeg" 
               alt="NAVOS Logo" 
               className="w-[100px] h-auto object-contain rounded-xl"
             />
          </div>

          {/* TOP LEFT: SEAFARER */}
          <div className="absolute top-[30px] left-[10px] z-10 flex items-center justify-end w-[230px]">
            <div className="text-right mr-3">
              <h3 className="text-navos-navy font-bold text-lg uppercase mb-0.5">Seafarer</h3>
              <p className="text-gray-600 text-[13px] font-medium">Jobs & Career</p>
            </div>
            <div className="w-[90px] h-[90px] bg-white rounded-full shadow-md border-[4px] border-navos-navy flex items-center justify-center flex-shrink-0 relative overflow-hidden">
               <div className="absolute inset-0 border-2 border-navos-teal rounded-full m-1 pointer-events-none"></div>
               <svg className="w-9 h-9 text-navos-navy" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.69 2 6 4.69 6 8v2H5v2h14v-2h-1V8c0-3.31-2.69-6-6-6zm-4 8c0-2.21 1.79-4 4-4s4 1.79 4 4v2H8V10z" /><path d="M12 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fill="#00A3A3"/></svg>
            </div>
          </div>

          {/* BOTTOM LEFT: INSTITUTE */}
          <div className="absolute top-[260px] left-[10px] z-10 flex items-center justify-end w-[230px]">
            <div className="text-right mr-3">
              <h3 className="text-navos-navy font-bold text-lg uppercase mb-0.5">Institute</h3>
              <p className="text-gray-600 text-[13px] font-medium">Training & Education</p>
            </div>
            <div className="w-[90px] h-[90px] bg-white rounded-full shadow-md border-[4px] border-navos-navy flex items-center justify-center flex-shrink-0 relative overflow-hidden">
               <div className="absolute inset-0 border-2 border-navos-teal rounded-full m-1 pointer-events-none"></div>
               <svg className="w-9 h-9 text-navos-navy" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z" /><path d="M12 18l-5-2.73v-3.72L12 15l5-2.73v3.72L12 18z" fill="#00A3A3"/></svg>
            </div>
          </div>

          {/* TOP RIGHT: COMPANY */}
          <div className="absolute top-[30px] right-[10px] z-10 flex items-center justify-start w-[230px]">
            <div className="w-[90px] h-[90px] bg-white rounded-full shadow-md border-[4px] border-navos-navy flex items-center justify-center flex-shrink-0 relative overflow-hidden">
               <div className="absolute inset-0 border-2 border-navos-teal rounded-full m-1 pointer-events-none"></div>
               <svg className="w-10 h-10 text-navos-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" stroke="#00A3A3" strokeWidth="2"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            </div>
            <div className="text-left ml-3">
              <h3 className="text-navos-navy font-bold text-lg uppercase mb-0.5">Company</h3>
              <p className="text-gray-600 text-[13px] font-medium">Shipping Industry</p>
            </div>
          </div>

          {/* BOTTOM RIGHT: FAMILY */}
          <div className="absolute top-[260px] right-[10px] z-10 flex items-center justify-start w-[230px]">
            <div className="w-[90px] h-[90px] bg-white rounded-full shadow-md border-[4px] border-navos-navy flex items-center justify-center flex-shrink-0 relative overflow-hidden">
               <div className="absolute inset-0 border-2 border-navos-teal rounded-full m-1 pointer-events-none"></div>
               <svg className="w-9 h-9 text-navos-navy" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h14v-8h3L12 3z" /><path d="M12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="#00A3A3"/></svg>
            </div>
            <div className="text-left ml-3">
              <h3 className="text-navos-navy font-bold text-lg uppercase mb-0.5">Family</h3>
              <p className="text-gray-600 text-[13px] font-medium">Support & Resources</p>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* MOBILE VIEW: VERTICAL STACK JOURNEY                      */}
        {/* ======================================================== */}
        <div className="lg:hidden flex flex-col items-center relative mt-4 w-full max-w-[340px] mx-auto">
          
          {/* Mobile Logo */}
          <div className="bg-white px-4 pb-3 z-10">
             <img src="/mobile-logo.jpeg" alt="NAVOS" className="h-[70px] w-auto object-contain rounded-lg" />
          </div>

          {/* Connecting Vertical Teal Line */}
          <div className="absolute top-[50px] bottom-0 left-[24px] md:left-1/2 w-[2px] bg-navos-teal md:-translate-x-1/2 z-0"></div>

          {/* Stacked Journey Cards */}
          <div className="flex flex-col gap-3 w-full relative z-10">
            
            <div className="bg-navos-navy rounded-[10px] p-4 flex items-center gap-4 shadow-md border-l-4 border-navos-teal">
              <svg className="w-8 h-8 text-navos-teal flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              <div>
                <h3 className="text-white font-bold text-base uppercase tracking-wide mb-0.5">Seafarer</h3>
                <p className="text-gray-300 text-[12px]">Jobs & Career</p>
              </div>
            </div>

            <div className="bg-navos-navy rounded-[10px] p-4 flex items-center gap-4 shadow-md border-l-4 border-navos-teal">
              <svg className="w-8 h-8 text-navos-teal flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M19 15v4H5v-4h14m2-2H3v8h18v-8zM17 5H7v4h10V5m2-2H5v8h14V3z"/></svg>
              <div>
                <h3 className="text-white font-bold text-base uppercase tracking-wide mb-0.5">Company</h3>
                <p className="text-gray-300 text-[12px]">Shipping Industry</p>
              </div>
            </div>

            <div className="bg-navos-navy rounded-[10px] p-4 flex items-center gap-4 shadow-md border-l-4 border-navos-teal">
              <svg className="w-8 h-8 text-navos-teal flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z"/></svg>
              <div>
                <h3 className="text-white font-bold text-base uppercase tracking-wide mb-0.5">Institute</h3>
                <p className="text-gray-300 text-[12px]">Training & Education</p>
              </div>
            </div>

            <div className="bg-navos-navy rounded-[10px] p-4 flex items-center gap-4 shadow-md border-l-4 border-navos-teal">
              <svg className="w-8 h-8 text-navos-teal flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
              <div>
                <h3 className="text-white font-bold text-base uppercase tracking-wide mb-0.5">Family</h3>
                <p className="text-gray-300 text-[12px]">Support & Resources</p>
              </div>
            </div>

          </div>
        </div>

      </div>
      
    </section>
  );
}