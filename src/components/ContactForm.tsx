export default function ContactForm() {
  return (
    <section className="relative w-full bg-[#F4F7F9] py-12 lg:py-24 overflow-hidden">
      
      {/* Subtle Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4] hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none">
          <path d="M-100 200C300 300 600 50 1000 200C1400 350 1500 150 1600 250" stroke="#00A3A3" strokeWidth="1" />
          <path d="M-100 300C300 400 600 150 1000 300C1400 450 1500 250 1600 350" stroke="#00A3A3" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          
          {/* LEFT: Contact Details */}
          <div className="flex flex-col">
            <h2 className="text-navos-navy font-black text-[28px] lg:text-[40px] uppercase leading-tight mb-8">
              Contact <br className="hidden lg:block"/> Navos
            </h2>

            <div className="flex flex-col gap-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-navos-teal text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </div>
                <p className="text-navos-navy font-bold text-[15px] lg:text-[16px]">
                  Phone: <span className="font-normal text-gray-700">+91 6304963771</span>
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-navos-teal text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <p className="text-navos-navy font-bold text-[15px] lg:text-[16px]">
                  Email: <span className="font-normal text-gray-700">info@navosmarine.com</span>
                </p>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border-[1.5px] border-navos-teal text-navos-teal flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                </div>
                <p className="text-navos-navy font-bold text-[15px] lg:text-[16px]">
                  WhatsApp: <span className="font-normal text-gray-700">+91 6304963771</span>
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-navos-teal text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <p className="text-navos-navy font-bold text-[15px] lg:text-[16px] mt-2">
                  Address: <span className="font-normal text-gray-700 block mt-0.5">123 Maritime Plaza, Suite 400,<br/>Port City, PC 10001</span>
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT: Form Section */}
          <div className="flex flex-col mt-4 lg:mt-0">
            <h2 className="text-navos-navy font-black text-[22px] lg:text-[28px] uppercase tracking-wide mb-6">
              Send an Enquiry
            </h2>

            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Your Name" className="w-full bg-white border border-gray-200 text-navos-navy rounded-lg px-5 py-4 shadow-sm focus:outline-none focus:border-navos-teal font-medium" />
              <input type="email" placeholder="Your Email" className="w-full bg-white border border-gray-200 text-navos-navy rounded-lg px-5 py-4 shadow-sm focus:outline-none focus:border-navos-teal font-medium" />
              <input type="text" placeholder="Subject" className="w-full bg-white border border-gray-200 text-navos-navy rounded-lg px-5 py-4 shadow-sm focus:outline-none focus:border-navos-teal font-medium" />
              <textarea placeholder="Message here..." rows={4} className="w-full bg-white border border-gray-200 text-navos-navy rounded-lg px-5 py-4 shadow-sm focus:outline-none focus:border-navos-teal font-medium resize-none"></textarea>

              {/* Only WhatsApp Button as requested */}
              <a 
                href="https://wa.me/916304963771" 
                target="_blank" 
                rel="noreferrer"
                className="w-full lg:w-1/2 mt-2 bg-navos-navy text-white px-8 py-4 rounded-lg font-bold text-[15px] hover:bg-opacity-90 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 text-navos-teal" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </form>

          </div>

        </div>
      </div>
    </section>
  );
}