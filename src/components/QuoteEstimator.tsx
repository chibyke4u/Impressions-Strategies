import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  { id: 'business-cards', name: 'Premium Business Cards', basePrice: 150, unitScale: 100 },
  { id: 'corporate-brochure', name: 'Corporate Brochure', basePrice: 450, unitScale: 50 },
  { id: 'brand-identity', name: 'Full Brand Identity', basePrice: 2500, unitScale: 1 },
];

export default function QuoteEstimator() {
  const [serviceId, setServiceId] = useState(SERVICES[0].id);
  const [quantity, setQuantity] = useState(100);
  const [isEcoFriendly, setIsEcoFriendly] = useState(false);

  const estimatedPrice = useMemo(() => {
    const service = SERVICES.find(s => s.id === serviceId) || SERVICES[0];
    
    // Calculate volume multiplier based on the service's unit scaling
    const volumeMultiplier = Math.max(1, quantity / service.unitScale);
    let total = service.basePrice * volumeMultiplier;
    
    // Eco-friendly premium (+25%)
    if (isEcoFriendly) {
      total = total * 1.25;
    }

    return Math.round(total).toLocaleString();
  }, [serviceId, quantity, isEcoFriendly]);

  return (
    <section id="quote" className="py-24 bg-page-bg border-y border-page-border transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-[10px] font-bold text-brand-red uppercase tracking-[0.2em] mb-2">Instant Quote</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight uppercase text-page-text">Project Estimator</h3>
        </div>

        <div className="bg-page-card p-8 md:p-12 relative overflow-hidden flex flex-col lg:flex-row gap-12 border border-page-border shadow-2xl">
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 text-[20rem] text-page-text/5 select-none pointer-events-none font-bold">
            03
          </div>

          <div className="flex-1 space-y-8 relative z-10">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-page-muted mb-2">Service Type</label>
              <select 
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                className="w-full bg-transparent border-b border-page-border text-page-text py-3 text-lg focus:outline-none focus:border-brand-red transition-colors cursor-pointer appearance-none"
              >
                {SERVICES.map(s => (
                  <option key={s.id} value={s.id} className="bg-page-bg text-black">{s.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-page-muted mb-2">Quantity (Units)</label>
              <input 
                type="number" 
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                className="w-full bg-transparent border-b border-page-border text-page-text py-3 text-lg focus:outline-none focus:border-brand-red transition-colors"
                placeholder="100"
              />
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button 
                onClick={() => setIsEcoFriendly(!isEcoFriendly)}
                className={`w-12 h-6 flex items-center transition-colors px-1 rounded-full ${isEcoFriendly ? 'bg-brand-red' : 'bg-gray-700'}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${isEcoFriendly ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
              <span className="text-sm font-bold uppercase tracking-wider text-page-text">Eco-Friendly / Green Material</span>
            </div>
          </div>

          <div className="flex-1 bg-page-bg p-8 border-l-[16px] border-brand-red flex flex-col justify-center relative z-10 shadow-lg">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-page-muted mb-4">Estimated Range</h4>
            <div className="flex items-baseline">
              <span className="text-2xl font-black text-gray-400 mr-2">$</span>
              <motion.span 
                key={estimatedPrice}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-black text-page-text tracking-tighter"
              >
                {estimatedPrice}
              </motion.span>
            </div>
            <p className="text-page-muted text-xs mt-4 uppercase tracking-wider">Prices are indicative. Final quote subject to exact specifications.</p>
            
            <button className="mt-8 bg-black dark:bg-white dark:text-black text-white font-black uppercase tracking-widest py-4 hover:bg-brand-red hover:text-black transition-colors duration-300 w-full flex justify-center items-center gap-2">
              <CheckCircle2 size={18} /> Request Proposal
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
