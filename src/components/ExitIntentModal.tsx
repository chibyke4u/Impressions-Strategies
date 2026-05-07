import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if cursor leaves towards the top of the window (tabs/address bar)
      if (e.clientY <= 0 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
        // Ensure it doesn't trigger again for this session (simulated via state)
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-white/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#0F1011] text-white p-10 border-2 border-brand-red shadow-2xl"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-brand-red transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="mb-8">
              <h2 className="font-heading text-4xl font-black uppercase text-white mb-2 leading-none">
                Don't Build <br/><span className="text-brand-red">Without A Plan</span>
              </h2>
              <p className="text-sm text-gray-400 tracking-wider uppercase font-bold mt-4">
                Get "The 2026 Brand Identity Checklist"
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  className="w-full bg-white/5 border border-gray-600 rounded-none px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  required
                  className="w-full bg-white/5 border border-gray-600 rounded-none px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-red text-black font-black uppercase tracking-widest py-4 hover:bg-white transition-colors duration-300"
              >
                Download Now
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
