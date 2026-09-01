export default function AboutTeam() {
  const team = [
    {
      name: "Allu Arjun",
      role: "Founder & CEO",
      image: "/team-1.jpeg",
      bio: "With over 20 years of experience at sea, Capt. Reed founded NAVOS to bridge the gap between maritime professionals and global shipping companies. His vision drives our commitment to excellence and innovation across the entire maritime ecosystem.",
    },
    {
      name: "Kajal",
      role: "Chief Technology Officer",
      image: "/team-2.jpeg",
      bio: "Marcus brings a wealth of expertise in software architecture and maritime tech. He leads the engineering team in building the scalable, secure, and highly responsive platforms that power the NAVOS digital experience.",
    },
    {
      name: "Deepika",
      role: "Head of Operations",
      image: "/team-3.jpeg",
      bio: "Elena oversees our global partnerships and day-to-day operations, ensuring seamless communication between institutes, families, and shipping fleets. She is deeply passionate about seafarer welfare and community support.",
    }
  ];

  return (
    <section className="relative w-full bg-[#F4F7F9] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[60px]">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <span className="text-navos-teal font-bold tracking-wider text-[12px] lg:text-[13px] uppercase mb-2 block">
            Our Leadership
          </span>
          <h2 className="text-navos-navy font-black text-3xl lg:text-[40px] tracking-tight uppercase">
            Meet The Team
          </h2>
        </div>

        {/* Team Members List */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {team.map((member, index) => {
            // Alternating logic: Even index = Image Left, Odd index = Image Right
            const isImageLeft = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`flex flex-col gap-8 lg:gap-16 items-center ${
                  isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                
                {/* Image Container */}
                <div className="w-full lg:w-5/12 relative group">
                  {/* Decorative Background Block */}
                  <div className={`absolute inset-0 bg-navos-teal/10 rounded-[20px] transform translate-y-4 ${isImageLeft ? '-translate-x-4' : 'translate-x-4'} transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0`}></div>
                  
                  <div className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(11,27,61,0.1)] border-[4px] border-white z-10">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left">
                  
                  {/* Accent Line */}
                  <div className="w-12 h-1 bg-navos-teal mb-5 rounded-full"></div>
                  
                  <h3 className="text-navos-navy font-black text-2xl lg:text-[32px] uppercase leading-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-navos-teal font-bold text-[14px] lg:text-[16px] tracking-wide uppercase mb-5">
                    {member.role}
                  </p>
                  
                  <p className="text-gray-600 text-[15px] lg:text-[16px] leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social Icons (LinkedIn / Email placeholders) */}
                  <div className="flex items-center gap-4 text-navos-navy/50">
                    <a href="#" className="hover:text-navos-teal transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="#" className="hover:text-navos-teal transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </a>
                  </div>
                  
                </div>

              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}