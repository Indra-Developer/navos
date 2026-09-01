export default function HomeServices() {
  const services = [
    {
      title: "Seafarer",
      icon: (
        <svg className="w-7 h-7 md:w-8 md:h-8 text-navos-navy" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.69 2 6 4.69 6 8v2H5v2h14v-2h-1V8c0-3.31-2.69-6-6-6zm-4 8c0-2.21 1.79-4 4-4s4 1.79 4 4v2H8V10zm4 12c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          {/* Captain Hat Detail */}
          <path d="M7 6h10v2H7z" fill="#00A3A3" />
        </svg>
      ),
      mobileDesc: "Dedicated support for seafarers, including recruitment, training, and career development.",
      desktopDesc: "Explore maritime job opportunities, access training resources, and manage your career path effectively. Connect with employers and advance in your profession."
    },
    {
      title: "Company",
      icon: (
        <svg className="w-7 h-7 md:w-8 md:h-8 text-navos-navy" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 15v4H5v-4h14m2-2H3v8h18v-8zM17 5H7v4h10V5m2-2H5v8h14V3z"/>
          {/* Water Wave Detail */}
          <path d="M3 22h18v2H3z" fill="#00A3A3"/>
        </svg>
      ),
      mobileDesc: "Comprehensive solutions for shipping companies, from fleet management to consultancy.",
      desktopDesc: "Streamline crew recruitment, manage vessel operations, and find qualified personnel. Enhance efficiency and compliance in your maritime business."
    },
    {
      title: "Institute",
      icon: (
        <svg className="w-7 h-7 md:w-8 md:h-8 text-navos-navy" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
        </svg>
      ),
      mobileDesc: "Partnering with maritime institutes for education and training programs.",
      desktopDesc: "Promote courses, attract students, and collaborate with industry partners. Showcase your programs and facilities to the maritime community."
    },
    {
      title: "Family",
      icon: (
        <svg className="w-7 h-7 md:w-8 md:h-8 text-navos-navy" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      mobileDesc: "Resources and support for families of seafarers and maritime professionals.",
      desktopDesc: "Stay connected with seafarers, access support networks, and find resources for well-being and community engagement. Support your loved ones at sea."
    }
  ];

  return (
    <section className="relative w-full bg-[#F8FAFC] md:bg-white py-10 md:py-16 lg:py-20 overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px] relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-left md:text-center mb-8 md:mb-10">
          <h2 className="text-navos-navy font-black text-2xl md:text-3xl lg:text-[36px] tracking-tight uppercase mb-2 md:mb-3">
            Our Services
          </h2>
          <p className="hidden md:block text-gray-700 text-base">
            Connecting every part of the maritime community.
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-[14px] md:rounded-3xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] md:shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-b-[5px] md:border-b-0 border-navos-teal p-4 md:p-6 flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-5 text-left md:text-center h-full transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Icon Circle */}
              <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-navos-teal/10 flex items-center justify-center flex-shrink-0">
                {service.icon}
              </div>

              {/* Text Content */}
              <div className="flex-1 flex flex-col items-start md:items-center w-full">
                <h3 className="text-navos-navy font-bold text-[17px] md:text-xl uppercase md:capitalize mb-1.5 md:mb-3">
                  {service.title}
                </h3>
                
                {/* Mobile Text */}
                <p className="block md:hidden text-gray-700 text-[13px] leading-snug mb-2">
                  {service.mobileDesc}
                </p>
                
                {/* Desktop Text */}
                <p className="hidden md:block text-gray-600 text-[13px] leading-relaxed mb-6 flex-grow">
                  {service.desktopDesc}
                </p>

                {/* Mobile Link */}
                <a href="#" className="block md:hidden text-navos-teal font-bold text-[13px] hover:underline flex items-center gap-1">
                  Learn More <span className="text-lg leading-none">&rarr;</span>
                </a>
                
                {/* Desktop Pill Button */}
                <a href="#" className="hidden md:inline-flex bg-navos-teal text-white px-6 py-2 rounded-full font-semibold text-[13px] hover:bg-teal-600 transition-colors mt-auto items-center gap-2">
                  Learn More <span>&rarr;</span>
                </a>
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