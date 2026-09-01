export default function ServicesList() {
  const services = [
    {
      title: "Seafarer",
      subtitle: "Jobs, career opportunities, and maritime support services for seafarers.",
      points: ["Career progression pathways", "Global job listings & placement"],
      icon: (
        <svg className="w-10 h-10 lg:w-14 lg:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <circle cx="12" cy="12" r="7" />
          <path d="M12 2v3m0 14v3M2 12h3m14 0h3m-15.5-7.5l2.1 2.1m10.8 10.8l2.1 2.1m-15-15l2.1-2.1m10.8 10.8l2.1-2.1" />
          <path d="M12 9v5m-2-2c0 1.1.9 2 2 2s2-.9 2-2" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "Company",
      subtitle: "Shipping companies, industry connections, and business opportunities.",
      points: ["B2B partnerships & networking", "Fleet management solutions"],
      icon: (
        <svg className="w-10 h-10 lg:w-14 lg:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path d="M3 21h18M4 18v-9m4 9V6m4 12v-6m4 6v-4" />
          <path d="M3 14l5-5 4 4 8-8" stroke="#00A3A3" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Institute",
      subtitle: "Maritime education, training, and learning resources for professionals.",
      points: ["STCW & advanced courses", "E-learning platforms"],
      icon: (
        <svg className="w-10 h-10 lg:w-14 lg:h-14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9z" />
          <path d="M4 19h16v2H4z" fill="#00A3A3"/>
        </svg>
      )
    },
    {
      title: "Family",
      subtitle: "Information, guidance, and resources for seafarer families.",
      points: ["Welfare & support programs", "Community forums & advice"],
      icon: (
        <svg className="w-10 h-10 lg:w-14 lg:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path d="M3 21v-8l9-7 9 7v8H3z" />
          <path d="M12 11c-1.5 0-2.5 1-2.5 2.5S12 17 12 17s2.5-1.5 2.5-3.5S13.5 11 12 11z" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full bg-[#F4F7F9] py-12 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px]">
        
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-navos-navy font-black text-2xl lg:text-[32px] tracking-wide uppercase">
            How Navos Supports The Maritime Community
          </h2>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((svc, idx) => (
            <div key={idx} className="bg-white rounded-[16px] shadow-[0_4px_15px_rgba(11,27,61,0.06)] p-6 lg:p-8 flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center border-[1.5px] border-gray-100">
              
              {/* Icon Container with double ring */}
              <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full border-2 lg:border-[3px] border-navos-teal p-1 lg:p-1.5 flex-shrink-0 flex items-center justify-center mr-4 lg:mr-0 lg:mb-5">
                <div className="w-full h-full rounded-full bg-navos-navy text-white flex items-center justify-center">
                  {svc.icon}
                </div>
              </div>

              {/* Text Block */}
              <div className="flex-1 w-full">
                <h3 className="text-navos-navy font-black text-[17px] lg:text-xl uppercase tracking-wide mb-1.5 lg:mb-3">
                  {svc.title}
                </h3>
                <p className="text-gray-700 text-[13px] lg:text-[14px] leading-snug lg:leading-relaxed mb-3 lg:mb-5 min-h-[40px] lg:min-h-[60px]">
                  {svc.subtitle}
                </p>
                
                {/* Bullet Points (Hidden on mobile for space, shown on desktop) */}
                <ul className="hidden lg:flex flex-col gap-2 text-left mb-6 text-[13px] text-gray-600">
                  {svc.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-navos-navy font-bold mt-0.5">•</span> {pt}
                    </li>
                  ))}
                </ul>

                <a href="#" className="text-navos-teal font-bold text-[13px] lg:text-[14px] hover:underline flex items-center justify-start lg:justify-center gap-1.5">
                  Learn More <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}