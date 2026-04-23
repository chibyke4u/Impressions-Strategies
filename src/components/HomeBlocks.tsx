import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';

function StatCounter({ end, suffix }: { end: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1000;
    const step = end / (duration / 16);
    if (step <= 0) {
       setCount(end);
       return;
    }
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, inView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function FeatureSplit() {
  return (
    <section className="py-24 bg-page-bg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2 relative z-10">
          <div className="bg-[#facc15] w-[80%] md:w-[70%] lg:w-full aspect-square rounded-[40px] relative overflow-visible flex items-end justify-center mt-12 lg:mt-0">
            <img src="https://placehold.co/800x1200/9b59b6/fff?text=T-Shirt+Model" alt="Model" className="absolute bottom-0 w-[80%] h-auto object-contain z-10" />
            <img src="https://placehold.co/600x600/60a5fa/fff?text=T-Shirt" alt="Top Graphic" className="absolute -right-[20%] top-1/4 w-[50%] rounded-2xl shadow-2xl border-4 border-page-bg z-20" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-16">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-page-text mb-4">Individual Approach</h4>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black tracking-tighter text-page-text leading-[1.1] mb-6">Let's make a<br />unique print</h2>
          <p className="text-page-muted text-sm leading-relaxed max-w-md mb-8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
          <button className="bg-[#f472b6] text-white font-bold uppercase text-[10px] tracking-widest px-8 py-4 rounded-full shadow-lg hover:bg-black transition-colors hover:shadow-xl">Our Services</button>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-16 bg-page-bg text-page-text transition-colors duration-500 border-y border-page-border">
      <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, ease: "linear", duration: 15 }} className="inline-block text-6xl md:text-[7rem] font-black tracking-tighter uppercase">
        PRODUCT <span className="text-brand-red mx-4">•</span> GRAPHIC <span className="text-brand-red mx-4">•</span> PRODUCT <span className="text-brand-red mx-4">•</span> GRAPHIC <span className="text-brand-red mx-4">•</span>
      </motion.div>
    </div>
  );
}

const portfolioItems = [
  { img: "https://placehold.co/600x800/f472b6/fff?text=Poster", title: "Happy Poster" },
  { img: "https://placehold.co/600x800/a3e635/fff?text=Sport+Jersey", title: "Sport Print" },
  { img: "https://placehold.co/600x800/ef4444/fff?text=Paper+Cup", title: "Pattern Cup" },
  { img: "https://placehold.co/600x800/38bdf8/fff?text=Packaging", title: "Tea Packaging" },
];

export function PortfolioGrid() {
  return (
    <section className="w-full flex flex-col md:flex-row bg-page-bg py-8">
      {portfolioItems.map((item, idx) => (
        <div key={idx} className="w-full md:w-1/4 aspect-[3/4] md:aspect-[3/5] relative group cursor-pointer overflow-hidden p-2">
          <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-2 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-bold uppercase tracking-widest text-xs border-b-2 border-white pb-1 group-hover:-translate-y-2 transition-transform duration-300">View Design</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-page-bg transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-page-text leading-tight tracking-tighter mb-12">"Our first order was a small<br/>batch of coasters. We have not<br/>printed elsewhere since."</h3>
        <div className="flex items-center justify-center gap-12">
          <button className="text-page-text hover:text-brand-red transition-colors"><ArrowLeft size={24} /></button>
          <div className="flex items-center gap-4 text-left">
            <img src="https://i.pravatar.cc/150?img=32" alt="Avatar" className="w-12 h-12 rounded-full border-2 border-brand-red" />
            <div><p className="font-bold text-page-text text-sm">Shirley Brickman</p><p className="text-[10px] text-page-muted uppercase tracking-wider">Client</p></div>
          </div>
          <button className="text-page-text hover:text-brand-red transition-colors"><ArrowRight size={24} /></button>
        </div>
      </div>
    </section>
  );
}

export function VideoBanner() {
  return (
    <section className="pb-24 px-4 max-w-7xl mx-auto bg-page-bg">
      <div className="w-full aspect-[21/9] bg-page-card rounded-[40px] relative overflow-hidden group cursor-pointer border border-page-border">
        <img src="https://placehold.co/1600x800/d63384/fff?text=Sticker+Mockup" alt="Video Thumbnail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border border-white/50 backdrop-blur-md bg-white/20 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-colors duration-500">
            <Play size={24} className="text-white ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
    </section>
  );
}

const accordionData = [
  {
    id: 'printing',
    title: 'Printing services',
    text: 'Utilizing state-of-the-art DI press technology to ensure unmatchable quality, sharper image definitions, and a broader color spectrum—all through sustainable, eco-friendly methods.',
    orders: 16,
    ordersSuffix: 'K+',
    ordersText: 'Adipiscing elit, do eiusm.',
    reviews: 13,
    reviewsSuffix: 'K+',
    reviewsText: 'Sed do eiusmod tempor.',
    image: 'https://placehold.co/600x800/111/fff?text=Hoodie',
    bg: '#facc15'
  },
  {
    id: 'graphic',
    title: 'Graphic design',
    text: 'Expert visual storytelling that captures your brand essence. We create logos, marketing materials, and digital assets that stand out.',
    orders: 24,
    ordersSuffix: 'K+',
    ordersText: 'Creative projects delivered.',
    reviews: 18,
    reviewsSuffix: 'K+',
    reviewsText: 'Satisfied design clients.',
    image: 'https://placehold.co/600x800/3b82f6/fff?text=Design+Assets',
    bg: '#93c5fd'
  },
  {
    id: 'branding',
    title: 'Branding & marketing',
    text: 'Strategic campaigns and brand identity development that position your company for long-term success and market dominance.',
    orders: 10,
    ordersSuffix: 'K+',
    ordersText: 'Brands successfully launched.',
    reviews: 8,
    reviewsSuffix: 'K+',
    reviewsText: '5-star agency reviews.',
    image: 'https://placehold.co/600x800/10b981/fff?text=Marketing+Kit',
    bg: '#6ee7b7'
  }
];

export function AccordionStats() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = accordionData[activeIndex];

  return (
    <section className="py-24 bg-page-bg transition-colors duration-500 border-t border-page-border">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-black text-page-text tracking-tighter leading-tight mb-8">Print for yourself or<br />your business</h2>
          <div className="space-y-0">
            {accordionData.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div key={item.id} className={`border-t ${index === accordionData.length - 1 ? 'border-b' : ''} border-page-border py-6`}>
                  <div 
                    className={`flex justify-between items-center cursor-pointer mb-2 transition-colors ${isActive ? 'text-brand-red' : 'text-page-text hover:text-brand-red'}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="font-bold">{item.title}</span>
                    <span className="font-mono text-xl">{isActive ? '-' : '+'}</span>
                  </div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-page-muted text-sm leading-relaxed pr-8 pt-2">{item.text}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0 flex justify-center">
           <motion.div 
             key={activeData.id}
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
             className="w-[80%] aspect-square rounded-[30px] relative flex flex-col items-center justify-end p-8 pt-20 transition-colors duration-500"
             style={{ backgroundColor: activeData.bg }}
           >
             <img src={activeData.image} className="absolute top-[-10%] w-[90%] max-h-[110%] object-contain block drop-shadow-2xl" alt={activeData.title} />
             <div className="relative z-20 w-[110%] ml-[-5%] mr-[-5%] flex flex-col sm:flex-row gap-4 mt-auto">
               <div className="flex-1 bg-[#f472b6] text-white p-6 rounded-2xl shadow-xl"><p className="text-xs font-bold uppercase tracking-wider mb-2">Orders</p><h4 className="text-4xl lg:text-5xl font-black mb-1"><StatCounter end={activeData.orders} suffix={activeData.ordersSuffix} /></h4><p className="text-[10px] opacity-90">{activeData.ordersText}</p></div>
               <div className="flex-1 bg-[#ea580c] text-white p-6 rounded-2xl shadow-xl"><p className="text-xs font-bold uppercase tracking-wider mb-2">Reviews</p><h4 className="text-4xl lg:text-5xl font-black mb-1"><StatCounter end={activeData.reviews} suffix={activeData.reviewsSuffix} /></h4><p className="text-[10px] opacity-90">{activeData.reviewsText}</p></div>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ClientLogos() {
  return (
    <section className="py-16 bg-white border-t border-page-border">
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
        <img 
          src="/image.png" 
          alt="Our Esteemed Clients" 
          className="w-full max-w-5xl h-auto object-contain"
        />
      </div>
    </section>
  );
}

export function ContactSplit() {
  return (
    <section id="contact" className="flex flex-col lg:flex-row bg-page-bg transition-colors duration-500">
      <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px] bg-[#fbcfe8] relative">
        <img src="https://placehold.co/1000x1200/fbcfe8/111?text=Contact+Rep" alt="Contact Rep" className="w-full h-full object-cover object-top" />
      </div>
      <div className="w-full lg:w-1/2 p-12 md:p-16 lg:p-24 flex flex-col justify-center bg-[#fafafa] dark:bg-[#111]">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-page-text mb-4">Contact Us</h4>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-page-text leading-tight mb-12">Have questions?<br />Get in touch!</h2>
        <form className="space-y-6 w-full max-w-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-page-border py-3 text-page-text focus:outline-none focus:border-brand-red transition-colors text-sm" />
            <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-page-border py-3 text-page-text focus:outline-none focus:border-brand-red transition-colors text-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-page-border py-3 text-page-text focus:outline-none focus:border-brand-red transition-colors text-sm" />
            <input type="tel" placeholder="Phone" className="w-full bg-transparent border-b border-page-border py-3 text-page-text focus:outline-none focus:border-brand-red transition-colors text-sm" />
          </div>
          <textarea placeholder="Message" rows={3} className="w-full bg-transparent border-b border-page-border py-3 text-page-text focus:outline-none focus:border-brand-red transition-colors text-sm resize-none mb-4"></textarea>
          <button type="submit" className="bg-[#fb923c] hover:bg-black text-white font-bold uppercase tracking-widest text-[#10px] px-10 py-4 rounded-full shadow-lg transition-colors mt-4">Get In Touch</button>
        </form>
      </div>
    </section>
  );
}
