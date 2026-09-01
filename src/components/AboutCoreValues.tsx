export default function AboutCoreValues() {
  const values = [
    { title: "Integrity", text: "Upholding ethical standards and honesty in all actions.", icon: <path d="M12 2v20M5 10l7-5 7 5M4 22h16" /> },
    { title: "Trust", text: "Building reliable relationships through transparency.", icon: <path d="M8.5 16.5L5 20h14l-3.5-3.5M9 18h6M6 9c0 3.3 6 6 6 6s6-2.7 6-6" /> },
    { title: "Professionalism", text: "Delivering expertise and excellence in every service.", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
    { title: "Connection", text: "Fostering collaboration within the industry.", icon: <path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757" /> },
    { title: "Growth", text: "Commitment to continuous learning and advancement.", icon: <path d="M3 21h18M4 18v-9m4 9V6m4 12v-6m4 6v-4" /> },
    { title: "People First", text: "Prioritizing the well-being of our team.", icon: <path d="M12 11c-1.5 0-2.5 1-2.5 2.5S12 17 12 17s2.5-1.5 2.5-3.5S13.5 11 12 11zM3 21v-8l9-7 9 7v8H3z" /> },
  ];

  return (
    <section className="relative w-full bg-[#EBF3F8] py-10 lg:py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px] relative z-10">
        
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-navos-navy font-black text-2xl lg:text-[32px] tracking-wide uppercase">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
          {values.map((val, idx) => (
            <div key={idx} className="bg-white border-[1.5px] border-navos-navy/10 rounded-[12px] p-4 lg:p-6 flex flex-row lg:flex-col items-center lg:text-center gap-4 lg:gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center text-navos-navy flex-shrink-0">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="w-full h-full">
                  {val.icon}
                </svg>
              </div>
              <div className="flex flex-col items-start lg:items-center">
                <h3 className="text-navos-navy font-bold text-[15px] lg:text-[17px] mb-1 uppercase lg:capitalize">{val.title}</h3>
                <p className="text-gray-600 text-[12px] lg:text-[13px] leading-snug lg:leading-relaxed">{val.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}