export default function HomeTestimonials() {
  const testimonials = [
    {
      name: "Capt. John Smith",
      role: "Senior Shipmaster",
      text: "A professional and reliable service that exceeded our expectations. The team at NAVOS is exceptional and knowledgeable. Highly recommended.",
      color: "border-navos-navy", // Left card is Navy in desktop design
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=c0aede",
    },
    {
      name: "Sarah Jenkins",
      role: "Company Representative",
      text: "NAVOS Marine Solutions provides unparalleled reliability and support for our fleet operations. Their expertise is unmatched in the industry.",
      color: "border-navos-teal", // Middle card is Teal
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4",
    },
    {
      name: "Michael Chen",
      role: "Institute Representative",
      text: "Partnering with NAVOS has streamlined our maritime training programs. A professional and reliable service that exceeded our expectations.",
      color: "border-navos-teal", // Right card is Teal
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael&backgroundColor=c0aede",
    }
  ];

  return (
    <section className="relative w-full bg-[#EBF3F8] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px] relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-navos-navy font-black text-2xl lg:text-[36px] tracking-wide uppercase">
            Trusted by the Maritime Community
          </h2>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW: 3 Cards with overlapping avatars           */}
        {/* ======================================================== */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div key={`desktop-${index}`} className="relative bg-white pt-14 pb-10 px-8 text-center flex flex-col items-center">
              
              {/* Colored Top and Bottom Borders */}
              <div className={`absolute top-0 left-0 w-full border-t-[6px] ${item.color}`}></div>
              <div className={`absolute bottom-0 left-0 w-full border-b-[6px] ${item.color}`}></div>

              {/* Overlapping Avatar */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white p-1 shadow-md border-2 border-navos-teal">
                <img src={item.avatar} alt={item.name} className="w-full h-full rounded-full object-cover bg-gray-100" />
              </div>

              {/* Content */}
              <h3 className="text-navos-navy font-bold text-lg mb-1">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.role}</p>
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#2A4B7C]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>

              <p className="text-gray-700 text-[14px] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* ======================================================== */}
        {/* MOBILE VIEW: Single Card Carousel Layout                 */}
        {/* ======================================================== */}
        <div className="md:hidden flex flex-col items-center">
          
          {/* We display the first testimonial for the mobile layout */}
          <div className="bg-white rounded-[20px] shadow-[0_10px_25px_rgba(11,27,61,0.08)] p-6 w-full max-w-[400px]">
            
            {/* Header: Avatar + Info side-by-side */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-full border-2 border-navos-navy p-0.5 flex-shrink-0">
                <img src={testimonials[0].avatar} alt={testimonials[0].name} className="w-full h-full rounded-full object-cover bg-gray-100" />
              </div>
              <div>
                <h3 className="text-navos-navy font-black text-lg leading-tight">{testimonials[0].name}</h3>
                <p className="text-gray-600 text-[13px] mb-1">{testimonials[0].role}</p>
                {/* Golden Stars for Mobile per design */}
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={`m-star-${star}`} className="w-4 h-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Text */}
            <p className="text-gray-700 text-[15px] leading-relaxed">
              {testimonials[0].text}
            </p>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2.5 h-2.5 rounded-full bg-navos-navy"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
          </div>

        </div>

      </div>
    </section>
  );
}