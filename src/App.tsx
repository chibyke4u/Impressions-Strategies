import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import ExitIntentModal from './components/ExitIntentModal';
import Footer from './components/Footer';

export default function App() {
  // Simple state machine for multi-page simulation
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'portfolio'>('home');

  return (
    <div className="min-h-screen relative font-sans bg-page-bg text-page-text selection:bg-brand-red selection:text-white flex flex-col overflow-x-hidden transition-colors duration-500">
      {/* Decorative crop marks, fixed slightly to match dark mode aesthetics */}
      <div className="fixed top-5 left-5 w-5 h-5 border-t border-l border-page-border z-50 pointer-events-none hidden md:block transition-colors duration-500"></div>
      <div className="fixed top-5 right-5 w-5 h-5 border-t border-r border-page-border z-50 pointer-events-none hidden md:block transition-colors duration-500"></div>
      <div className="fixed bottom-5 left-5 w-5 h-5 border-b border-l border-page-border z-50 pointer-events-none hidden md:block transition-colors duration-500"></div>
      <div className="fixed bottom-5 right-5 w-5 h-5 border-b border-r border-page-border z-50 pointer-events-none hidden md:block transition-colors duration-500"></div>

      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-1 transition-opacity duration-300">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'portfolio' && <PortfolioPage />}
      </main>

      <Footer />

      <ExitIntentModal />
    </div>
  );
}



