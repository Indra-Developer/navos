import { Link } from 'react-router-dom';

export default function AboutStory() {
  return (
    <section className="relative w-full bg-white py-10 lg:py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* IMAGE SECTION */}
        <div className="relative w-full h-[240px] md:h-[350px] lg:h-[450px] rounded-xl lg:rounded-[20px] overflow-hidden shadow-lg order-1 lg:order-1">
          {/* Mobile Image */}
          <img src="/story-mobile.jpeg" alt="Our Journey" className="w-full h-full object-cover block lg:hidden" />
          {/* Desktop Image */}
          <img src="/story-desktop.jpeg" alt="Our Journey" className="w-full h-full object-cover hidden lg:block" />
          
          {/* Decorative Waves Overlay (Desktop) */}
          <div className="absolute top-4 right-4 hidden lg:block">
            <svg width="80" height="40" viewBox="0 0 100 40" fill="none">
              <path d="M0 10 Q 25 30 50 10 T 100 10" stroke="white" strokeWidth="2" fill="none" opacity="0.8"/>
              <path d="M0 25 Q 25 45 50 25 T 100 25" stroke="white" strokeWidth="2" fill="none" opacity="0.5"/>
            </svg>
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="flex flex-col order-2 lg:order-2">
          <span className="text-navos-teal font-bold tracking-wider text-[11px] lg:text-[13px] mb-2 uppercase">
            The Navos Story
          </span>
          <h2 className="text-navos-navy font-black text-[28px] lg:text-[40px] leading-[1.1] uppercase tracking-tight mb-4">
            Our Maritime <br className="hidden lg:block"/> Journey
          </h2>
          
          <div className="text-gray-700 text-[14px] lg:text-[15px] leading-relaxed space-y-4 mb-6 lg:mb-8">
            <p>
              Founded on deep maritime expertise, NAVOS connects the entire maritime ecosystem—from ship management to crew welfare—bridging gaps to create seamless, efficient, and sustainable operations across the globe.
            </p>
            <p className="hidden lg:block">
              We strive to make navigation through maritime career and operational data seamless and accessible for everyone.
            </p>
          </div>

          {/* Connected Button */}
          <Link 
            to="/services" 
            className="w-full lg:w-max bg-navos-navy lg:bg-navos-teal text-white px-8 py-3.5 lg:py-3 rounded-md font-bold text-[13px] lg:text-[14px] uppercase lg:normal-case shadow-md hover:opacity-90 transition-opacity text-center flex items-center justify-center"
          >
            Explore Our Services
          </Link>
        </div>

      </div>
    </section>
  );
}