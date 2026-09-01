import { Link } from 'react-router-dom';

export default function Footer() {
  const phoneNumber = "6304963771";
  const formattedPhone = "+91 " + phoneNumber;

  return (
    <footer className="bg-navos-navy text-gray-300 relative overflow-hidden pt-12 lg:pt-16">
      
      {/* Main Footer Content Container */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[60px] flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 items-center md:items-start text-center md:text-left z-10 relative pb-12">
        
        {/* 1. Logo & About Section */}
        <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center md:items-start">
          
          {/* Original Logo (Clickable to Home) */}
          <Link to="/" className="mb-5 block bg-white/95 p-2 rounded-lg shadow-sm hover:opacity-90 transition-opacity">
            <img 
              src="/mobile-logo.jpeg" 
              alt="NAVOS Marine Solutions" 
              className="h-[75px] w-auto object-contain"
            />
          </Link>
          
          <p className="text-[14px] leading-relaxed max-w-[300px] md:max-w-none text-gray-300">
            NAVOS Marine Solutions offers premium maritime services for seafarers, companies, institutes, and families, ensuring excellence and reliability at sea.
          </p>
        </div>

        {/* 2. Quick Links Section */}
        <div className="md:col-span-3 lg:col-span-2 lg:pl-10">
          <h3 className="text-white font-bold text-lg mb-4 md:mb-6 tracking-wide">QUICK LINKS</h3>
          <ul className="flex flex-col space-y-3">
            <li><Link to="/" className="hover:text-navos-teal transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-navos-teal transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-navos-teal transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-navos-teal transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* 3. Our Services Section */}
        <div className="md:col-span-2 lg:col-span-3">
          <h3 className="text-white font-bold text-lg mb-4 md:mb-6 tracking-wide md:whitespace-nowrap">OUR SERVICES</h3>
          <ul className="flex flex-col space-y-3">
            <li><Link to="/services" className="hover:text-navos-teal transition-colors">Seafarer</Link></li>
            <li><Link to="/services" className="hover:text-navos-teal transition-colors">Company</Link></li>
            <li><Link to="/services" className="hover:text-navos-teal transition-colors">Institute</Link></li>
            <li><Link to="/services" className="hover:text-navos-teal transition-colors">Family</Link></li>
          </ul>
        </div>

        {/* 4. Contact Section */}
        <div className="md:col-span-3 lg:col-span-4">
          <h3 className="text-white font-bold text-lg mb-4 md:mb-6 tracking-wide">CONTACT</h3>
          <ul className="flex flex-col space-y-4">
            
            {/* Phone (Click to call) */}
            <li>
              <a href={`tel:+91${phoneNumber}`} className="flex items-start md:items-center justify-center md:justify-start gap-3 hover:text-navos-teal transition-colors group">
                <svg className="w-5 h-5 text-navos-teal group-hover:text-white transition-colors flex-shrink-0 mt-0.5 md:mt-0" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                <span>{formattedPhone}</span>
              </a>
            </li>
            
            {/* Email (Click to email) */}
            <li>
              <a href="mailto:info@navosmarine.com" className="flex items-start md:items-center justify-center md:justify-start gap-3 hover:text-navos-teal transition-colors group">
                <svg className="w-5 h-5 text-navos-teal group-hover:text-white transition-colors flex-shrink-0 mt-0.5 md:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>info@navosmarine.com</span>
              </a>
            </li>
            
            {/* Address */}
            <li className="flex items-start justify-center md:justify-start gap-3">
              <svg className="w-5 h-5 text-navos-teal flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span className="max-w-[200px] leading-snug">Madhurawada, Visakhapatnam, Andhra Pradesh</span>
            </li>
            
            {/* WhatsApp (Click to chat) */}
            <li>
              <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noreferrer" className="flex items-start md:items-center justify-center md:justify-start gap-3 hover:text-navos-teal transition-colors group">
                <svg className="w-5 h-5 text-navos-teal group-hover:text-white transition-colors flex-shrink-0 mt-0.5 md:mt-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                <span>WhatsApp: {formattedPhone}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 5. Pure SVG Wave Separator */}
      <div className="w-full relative h-[40px] md:h-[60px] -mt-4 mb-4">
        <svg preserveAspectRatio="none" viewBox="0 0 1440 60" className="w-full h-full absolute top-0 left-0">
          <path d="M0 30 C 360 -10, 1080 70, 1440 30" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <path d="M0 45 C 400 0, 1000 80, 1440 20" fill="none" stroke="#00A3A3" strokeWidth="2" />
        </svg>
      </div>

      {/* 6. Bottom Bar (Socials, Legal, Copyright) */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[60px] pb-8 pt-2 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Social Icons */}
        <div className="flex space-x-5 md:text-navos-teal text-white">
          <a href="#" className="hover:text-white transition-colors">
            {/* LinkedIn */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            {/* Facebook */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            {/* Twitter / X */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
        </div>

        {/* Legal Text */}
        <div className="text-center text-sm space-y-2 order-3 md:order-2">
          <div className="flex items-center justify-center gap-6">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
          <p className="text-gray-400">© 2026 NAVOS Marine Solutions Private Limited. All Rights Reserved.</p>
        </div>

      </div>
      
    </footer>
  );
}