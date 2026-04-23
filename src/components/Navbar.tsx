import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  currentPage?: 'home' | 'about' | 'services' | 'portfolio';
  onNavigate?: (page: 'home' | 'about' | 'services' | 'portfolio') => void;
}

export default function Navbar({ currentPage = 'home', onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'home' || id === 'about' || id === 'services' || id === 'portfolio') {
      if (onNavigate) onNavigate(id as 'home' | 'about' | 'services' | 'portfolio');
    }
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-page-bg border-b border-page-border py-4 shadow-sm text-page-text' : 'bg-black/30 backdrop-blur-sm py-6 text-white border-b border-white/10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex flex-col">
          <span className="font-heading font-bold text-2xl tracking-tighter uppercase transition-colors hover:text-brand-red">
            <span className={`font-black border-2 px-1 mr-1 transition-colors ${isScrolled ? 'border-brand-red text-brand-red bg-page-bg' : 'border-white text-white'}`}>I</span>mpressions
          </span>
          <span className={`text-[10px] tracking-[0.4em] uppercase font-bold mt-1 transition-colors ${isScrolled ? 'text-page-muted' : 'text-gray-300'}`}>Global Strategies Limited</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 hover:text-brand-red ${currentPage === 'home' ? 'text-brand-red' : ''}`}>
            Home
          </a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 hover:text-brand-red ${currentPage === 'about' ? 'text-brand-red' : ''}`}>
            Our Story
          </a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className={`text-[10px] font-bold hover:text-brand-red transition-colors duration-200 uppercase tracking-[0.2em] ${currentPage === 'services' ? 'text-brand-red' : ''}`}>
            Services
          </a>
          <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className={`text-[10px] font-bold hover:text-brand-red transition-colors duration-200 uppercase tracking-[0.2em] ${currentPage === 'portfolio' ? 'text-brand-red' : ''}`}>
            Portfolio
          </a>
          <a href="#contact" className={`px-6 py-3 text-xs font-black uppercase tracking-widest rounded-none transition-all duration-300 ${isScrolled ? 'bg-brand-red text-page-bg hover:bg-page-text hover:text-page-bg' : 'bg-white text-black hover:bg-brand-red hover:text-white'}`}>
            Get a Quote
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden hover:text-brand-red transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-page-bg text-page-text border-t border-page-border shadow-xl"
        >
          <div className="flex flex-col px-4 py-6 space-y-4">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-xs uppercase tracking-widest font-bold hover:text-brand-red transition-colors">Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-xs uppercase tracking-widest font-bold hover:text-brand-red transition-colors">Our Story</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-xs uppercase tracking-widest font-bold hover:text-brand-red transition-colors">Services</a>
            <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="text-xs uppercase tracking-widest font-bold hover:text-brand-red transition-colors">Portfolio</a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
