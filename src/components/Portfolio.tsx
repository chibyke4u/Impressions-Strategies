import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const clients = [
  { name: 'International Breweries Plc.', category: 'Corporate', seed: 'brewery' },
  { name: 'Duduboch Construction Nig. Ltd', category: 'Construction', seed: 'buildingconstruction' },
  { name: 'MyEnvironment MyWealth', category: 'Green Initiative', seed: 'environment' },
  { name: 'IGHUB (ABA)', category: 'Tech Hub', seed: 'techhubab' },
  { name: 'iPROJECT & DataPlus', category: 'Research', seed: 'dataanalysis' },
  { name: 'Acer TCIL', category: 'Trading', seed: 'financechart' },
  { name: 'Sonar Energy & Sonar Aqua', category: 'Energy & Water', seed: 'offshore' },
  { name: 'Eido Group / Collins Bukka', category: 'Hospitality', seed: 'restaurantfood' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-[10px] font-bold text-brand-red uppercase tracking-[0.2em] mb-2">Selected Works</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight uppercase text-black">Our Esteemed Clients</h3>
          </div>
          <p className="text-gray-600 max-w-md md:text-right">
            A testament to our unwavering commitment to quality and creative excellence across diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-none bg-[#0F1011] border border-gray-200 ${index === 0 || index === 5 ? 'sm:col-span-2 sm:row-span-2 aspect-square sm:aspect-auto' : 'aspect-square'}`}
            >
              <img 
                src={`https://picsum.photos/seed/${client.seed}/800/800`} 
                alt={client.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white font-bold text-lg md:text-xl leading-tight mb-1 group-hover:text-brand-red transition-colors uppercase">{client.name}</h4>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center">
                  {client.category}
                  <ExternalLink size={14} className="ml-2" />
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
