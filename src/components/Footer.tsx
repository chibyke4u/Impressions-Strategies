import { MapPin, Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0F1011] pt-20 pb-10 border-t border-gray-800 text-slate-400 relative">
      <div className="ruler-line absolute top-0 left-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          <div className="space-y-6">
            <a href="#home" className="flex flex-col inline-block">
              <span className="font-heading font-bold text-3xl tracking-tighter text-white uppercase">
                <span className="text-brand-red font-black border-2 border-brand-red px-1 mr-1">I</span>mpressions
              </span>
              <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-gray-500 mt-1">Global Strategies Limited</span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm">
              We serve as an integral part of your idea/business, offering unmatchable printing quality and environmentally conscious practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-none glass-card-dark border border-gray-800 flex items-center justify-center hover:bg-brand-red hover:text-black transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-none glass-card-dark border border-gray-800 flex items-center justify-center hover:bg-brand-red hover:text-black transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-none glass-card-dark border border-gray-800 flex items-center justify-center hover:bg-brand-red hover:text-black transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-brand-red transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-red transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-red transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-brand-red transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-brand-red mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-sm">69 Stadium Road, Opp Bereton School,<br/>Port Harcourt, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-brand-red mr-3 flex-shrink-0" size={20} />
                <span className="text-sm">07039737527, 08088648454</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-brand-red mr-3 flex-shrink-0" size={20} />
                <a href="mailto:info@igsl.it.com" className="text-sm hover:text-white transition-colors">info@igsl.it.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] font-bold text-gray-600">
          <p>&copy; {new Date().getFullYear()} Impressions Global</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">London / NY / Tokyo / Nigeria</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
