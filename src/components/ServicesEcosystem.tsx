export default function ServicesEcosystem() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden flex flex-col items-center">
      
      <div className="text-center mb-10 lg:mb-16">
        <h2 className="text-navos-navy font-black text-2xl lg:text-[36px] tracking-wide uppercase">
          One Maritime Ecosystem
        </h2>
      </div>

      {/* ======================================================== */}
      {/* DESKTOP VIEW: Circular Hub Diagram                       */}
      {/* ======================================================== */}
      <div className="hidden lg:flex relative w-[800px] h-[500px] items-center justify-center">
        
        {/* Large Connecting Circle Ring */}
        <div className="absolute w-[450px] h-[450px] rounded-full border-[3px] border-navos-teal z-0"></div>

        {/* Center Logo Hub */}
        <div className="absolute z-20 w-[200px] h-[200px] bg-white rounded-full shadow-[0_10px_40px_rgba(11,27,61,0.15)] flex flex-col items-center justify-center border-4 border-navos-navy/5">
          <span className="text-4xl mb-1">⚓</span>
          <span className="text-navos-navy font-black tracking-widest text-xl leading-none">NAVOS</span>
          <span className="text-navos-teal font-bold tracking-widest text-[10px] uppercase mt-1">Platform</span>
        </div>

        {/* TOP: SEAFARER */}
        <div className="absolute top-0 flex flex-col items-center z-10 -mt-8">
          <div className="w-[100px] h-[100px] bg-white rounded-full border-[4px] border-navos-navy flex items-center justify-center mb-3 shadow-md">
            <svg className="w-10 h-10 text-navos-navy" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.69 2 6 4.69 6 8v2H5v2h14v-2h-1V8c0-3.31-2.69-6-6-6zm-4 8c0-2.21 1.79-4 4-4s4 1.79 4 4v2H8V10z" /><path d="M12 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fill="#00A3A3"/></svg>
          </div>
          <h3 className="text-navos-navy font-bold text-lg uppercase leading-tight">Seafarer</h3>
          <p className="text-gray-500 text-[13px] font-medium">Jobs & Career</p>
        </div>

        {/* BOTTOM: INSTITUTE */}
        <div className="absolute bottom-0 flex flex-col items-center z-10 -mb-8">
          <div className="w-[100px] h-[100px] bg-white rounded-full border-[4px] border-navos-navy flex items-center justify-center mb-3 shadow-md">
            <svg className="w-10 h-10 text-navos-navy" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z" /><path d="M12 18l-5-2.73v-3.72L12 15l5-2.73v3.72L12 18z" fill="#00A3A3"/></svg>
          </div>
          <h3 className="text-navos-navy font-bold text-lg uppercase leading-tight">Institute</h3>
          <p className="text-gray-500 text-[13px] font-medium">Training & Education</p>
        </div>

        {/* RIGHT: COMPANY */}
        <div className="absolute right-0 flex items-center z-10 -mr-16">
          <div className="w-[100px] h-[100px] bg-white rounded-full border-[4px] border-navos-navy flex items-center justify-center mr-4 shadow-md">
            <svg className="w-12 h-12 text-navos-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path d="M3 21h18M4 18v-9m4 9V6m4 12v-6m4 6v-4" /><path d="M3 14l5-5 4 4 8-8" stroke="#00A3A3" strokeWidth="2" /></svg>
          </div>
          <div className="text-left">
            <h3 className="text-navos-navy font-bold text-lg uppercase leading-tight">Company</h3>
            <p className="text-gray-500 text-[13px] font-medium">Maritime Industry</p>
          </div>
        </div>

        {/* LEFT: FAMILY */}
        <div className="absolute left-0 flex items-center z-10 -ml-16">
          <div className="text-right mr-4">
            <h3 className="text-navos-navy font-bold text-lg uppercase leading-tight">Family</h3>
            <p className="text-gray-500 text-[13px] font-medium">Support & Resources</p>
          </div>
          <div className="w-[100px] h-[100px] bg-white rounded-full border-[4px] border-navos-navy flex items-center justify-center shadow-md">
            <svg className="w-10 h-10 text-navos-navy" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h14v-8h3L12 3z" /><path d="M12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="#00A3A3"/></svg>
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* MOBILE VIEW: Vertical Stack                              */}
      {/* ======================================================== */}
      <div className="flex lg:hidden flex-col items-center w-full relative">
        <div className="mb-6 z-10 bg-white px-4">
           <img src="/desktop-logo.jpeg" alt="NAVOS" className="h-[60px] w-auto object-contain" />
        </div>
        
        {/* Connecting Line */}
        <div className="absolute top-[30px] bottom-10 left-1/2 w-[2px] bg-navos-teal -translate-x-1/2 z-0"></div>

        <div className="flex flex-col gap-6 z-10">
          
          <div className="flex flex-col items-center bg-white p-2 rounded-xl">
             <div className="w-16 h-16 bg-white rounded-full border-2 border-navos-navy flex items-center justify-center mb-2 shadow-sm">
                <svg className="w-8 h-8 text-navos-teal" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.69 2 6 4.69 6 8v2H5v2h14v-2h-1V8c0-3.31-2.69-6-6-6zm-4 8c0-2.21 1.79-4 4-4s4 1.79 4 4v2H8V10z" /></svg>
             </div>
             <h3 className="text-navos-navy font-bold text-base uppercase">Seafarer</h3>
             <p className="text-gray-500 text-[11px] font-medium">Jobs & Career</p>
          </div>

          <div className="flex flex-col items-center bg-white p-2 rounded-xl">
             <div className="w-16 h-16 bg-white rounded-full border-2 border-navos-navy flex items-center justify-center mb-2 shadow-sm">
                <svg className="w-8 h-8 text-navos-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path d="M3 21h18M4 18v-9m4 9V6m4 12v-6m4 6v-4" /></svg>
             </div>
             <h3 className="text-navos-navy font-bold text-base uppercase">Company</h3>
             <p className="text-gray-500 text-[11px] font-medium">Maritime Industry</p>
          </div>

          <div className="flex flex-col items-center bg-white p-2 rounded-xl">
             <div className="w-16 h-16 bg-white rounded-full border-2 border-navos-navy flex items-center justify-center mb-2 shadow-sm">
                <svg className="w-8 h-8 text-navos-teal" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z" /></svg>
             </div>
             <h3 className="text-navos-navy font-bold text-base uppercase">Institute</h3>
             <p className="text-gray-500 text-[11px] font-medium">Training & Education</p>
          </div>

          <div className="flex flex-col items-center bg-white p-2 rounded-xl">
             <div className="w-16 h-16 bg-white rounded-full border-2 border-navos-navy flex items-center justify-center mb-2 shadow-sm">
                <svg className="w-8 h-8 text-navos-teal" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h14v-8h3L12 3z" /></svg>
             </div>
             <h3 className="text-navos-navy font-bold text-base uppercase">Family</h3>
             <p className="text-gray-500 text-[11px] font-medium">Support & Resources</p>
          </div>

        </div>
      </div>

    </section>
  );
}