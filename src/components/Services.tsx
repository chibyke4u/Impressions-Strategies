import { motion } from 'motion/react';
import { Shirt, Image as ImageIcon, Map, Monitor, StickyNote, Box } from 'lucide-react';

const gridServices = [
  { icon: StickyNote, title: "Posters\nand stickers" },
  { icon: ImageIcon, title: "Banners\nand citylight" },
  { icon: Shirt, title: "T-shirts\nand apparel" },
  { icon: Map, title: "Billboards\nand signs" },
  { icon: Monitor, title: "Flyers\nand booklets" },
  { icon: Box, title: "Packaging\nand cups" },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-page-bg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-page-text mb-4">Corporate Service</h4>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-page-text leading-[1.1] mb-6">
              How can we help<br />your business?
            </h2>
            <p className="text-page-muted text-sm leading-relaxed">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
            </p>
          </div>

          {/* Right Column / Icon Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
            {gridServices.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-start group cursor-pointer"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                  <item.icon size={48} strokeWidth={1} className="text-brand-red" />
                </div>
                <h3 className="text-lg font-bold text-page-text leading-snug whitespace-pre-line group-hover:text-brand-red transition-colors">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
