import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }, [isDark]);

  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      className="flex items-center gap-2 px-4 py-2 bg-page-card border border-page-border text-page-text rounded-full hover:border-brand-red transition-all cursor-pointer shadow-sm group"
    >
      <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center">
        <motion.div animate={{ y: isDark ? -20 : 0 }} className="absolute flex flex-col gap-5 items-center">
           <Moon size={16} className="text-gray-500 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white" />
           <Sun size={16} className="text-brand-red" />
        </motion.div>
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  );
}
