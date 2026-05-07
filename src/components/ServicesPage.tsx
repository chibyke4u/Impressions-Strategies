import { motion } from 'motion/react';
import { PenTool, Briefcase, Leaf, Monitor, Share2, GraduationCap, Settings, Edit3, CalendarCheck, Package } from 'lucide-react';
import { ClientLogos, ContactSplit } from './HomeBlocks';

export default function ServicesPage() {
  return (
    <div className="w-full pt-0 bg-page-bg transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative pt-44 pb-32 bg-gradient-to-br from-[#f472b6] via-[#f87171] to-[#fb923c] overflow-hidden">
        {/* Subtle background graphics */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path stroke="white" strokeWidth="0.5" fill="none" d="M0,50 Q25,0 50,50 T100,50" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase mb-6 drop-shadow-sm"
            >
              Our Services
            </motion.h1>
        </div>
      </section>

      {/* Comprehensive Solutions Grid */}
      <section className="py-24 bg-page-bg transition-colors duration-500 relative">
         <div className="max-w-7xl mx-auto px-4 flex flex-col xl:flex-row gap-16 xl:gap-24">
            <div className="w-full xl:w-1/3">
               <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-page-muted">Corporate Service</h4>
               <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] text-page-text mb-6">Comprehensive Solutions to Elevate Your Business</h2>
               <p className="text-page-muted text-sm leading-relaxed max-w-sm">From concept to execution, we are a leading brand company offering a full spectrum of services.</p>
            </div>
            
            <div className="w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
               <div className="flex flex-col text-center items-center group cursor-pointer">
                  <div className="mb-6 text-[#f472b6] group-hover:scale-110 transition-transform duration-300"><PenTool size={42} strokeWidth={1.5} /></div>
                  <h3 className="text-lg font-bold text-page-text mb-3">Creative Design</h3>
                  <p className="text-xs text-page-muted leading-relaxed">Crafting indelible designs that capture your brand's essence and tell your unique story.</p>
               </div>
               
               <div className="flex flex-col text-center items-center group cursor-pointer">
                  <div className="mb-6 text-[#f472b6] group-hover:scale-110 transition-transform duration-300"><Briefcase size={42} strokeWidth={1.5} /></div>
                  <h3 className="text-lg font-bold text-page-text mb-3">Executive & Corporate Branding</h3>
                  <p className="text-xs text-page-muted leading-relaxed">Elevating your professional image with cohesive and powerful corporate identity packages.</p>
               </div>

               <div className="flex flex-col text-center items-center group cursor-pointer">
                  <div className="mb-6 text-[#f472b6] group-hover:scale-110 transition-transform duration-300"><Leaf size={42} strokeWidth={1.5} /></div>
                  <h3 className="text-lg font-bold text-page-text mb-3">Green Printing & DI</h3>
                  <p className="text-xs text-page-muted leading-relaxed">Utilizing state-of-the-art DI press technology to ensure unmatchable quality via eco-friendly methods.</p>
               </div>

               <div className="flex flex-col text-center items-center group cursor-pointer">
                  <div className="mb-6 text-[#f472b6] group-hover:scale-110 transition-transform duration-300"><Monitor size={42} strokeWidth={1.5} /></div>
                  <h3 className="text-lg font-bold text-page-text mb-3">Website Development</h3>
                  <p className="text-xs text-page-muted leading-relaxed">Building highly functional and visually stunning online experiences.</p>
               </div>

               <div className="flex flex-col text-center items-center group cursor-pointer">
                  <div className="mb-6 text-[#f472b6] group-hover:scale-110 transition-transform duration-300"><Share2 size={42} strokeWidth={1.5} /></div>
                  <h3 className="text-lg font-bold text-page-text mb-3">Advertising & Social</h3>
                  <p className="text-xs text-page-muted leading-relaxed">Managing your digital presence and running targeted promotions to reach your full potential.</p>
               </div>

               <div className="flex flex-col text-center items-center group cursor-pointer">
                  <div className="mb-6 text-[#f472b6] group-hover:scale-110 transition-transform duration-300"><GraduationCap size={42} strokeWidth={1.5} /></div>
                  <h3 className="text-lg font-bold text-page-text mb-3">Training</h3>
                  <p className="text-xs text-page-muted leading-relaxed">Equipping individuals and teams with the skills they need to thrive.</p>
               </div>
            </div>
         </div>
      </section>

      {/* The Impressions Bonus (Split Section) */}
      <section className="py-24 bg-page-bg transition-colors duration-500 border-t border-page-border overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
             <div className="w-full md:w-1/2 relative md:pr-8">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-tr from-[#fb923c] to-[#f472b6] relative group">
                   <img src="https://images.unsplash.com/photo-1629814402684-ab3a863fd439?auto=format&fit=crop&q=80&w=800" alt="Brand Identity Book Mockup" className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                      <h3 className="text-5xl lg:text-7xl font-black text-center tracking-tighter leading-none mix-blend-overlay opacity-90 -rotate-6">BRAND<br/>YOUR<br/>LEGACY</h3>
                   </div>
                </div>
                
                {/* Rotating Circular Text Animation */}
                <div className="absolute -bottom-8 right-0 md:-right-8 w-32 h-32 bg-page-bg border border-page-border rounded-full flex items-center justify-center shadow-2xl overflow-hidden transition-colors duration-500 z-10 hidden sm:flex">
                    <motion.div 
                        className="relative w-full h-full animate-[spin_10s_linear_infinite]"
                    >
                        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                        <defs><path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" /></defs>
                        <text className="text-[10.5px] uppercase tracking-[0.2em] font-bold" fill="currentColor">
                            <textPath href="#circle" className="text-brand-red">
                                Impressions Global &bull; About Us &bull; 
                            </textPath>
                        </text>
                        </svg>
                    </motion.div>
                </div>
             </div>

             <div className="w-full md:w-1/2">
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-page-text leading-[1.05] mb-8">The<br/>Impressions<br/>Bonus</h2>
                 <p className="text-page-muted text-sm leading-relaxed mb-6 font-medium">
                    We believe in partnerships. When you work with us, you don't just get great designs; you get an agency dedicated to your expansion.
                 </p>
                 <p className="text-page-muted text-sm leading-relaxed mb-10">
                    We offer added adverts and promos to boost your bottom line, ensuring that your growth remains our ultimate success metric.
                 </p>
                 <button className="bg-[#f472b6] text-white font-bold uppercase tracking-widest text-[10px] px-10 py-5 rounded-full shadow-lg hover:bg-black hover:text-white transition-colors duration-300 hover:shadow-xl dark:text-white dark:hover:bg-white dark:hover:text-black">Request a Custom Quote</button>
             </div>
         </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-24 bg-page-bg transition-colors duration-500 border-t border-page-border">
         <div className="mb-16 text-center">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-page-muted">What We Do</h4>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] text-page-text">Our popular services</h2>
         </div>
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f3f4f6] dark:bg-[#1a1b1e] rounded-[30px] p-8 flex flex-col items-center text-center group cursor-pointer transition-colors duration-500">
               <span className="text-[10px] text-page-muted uppercase tracking-widest font-bold mb-2">What We Do</span>
               <h3 className="text-xl font-black text-page-text tracking-tighter mb-8">Corporate Kits</h3>
               <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-[#fb923c] relative">
                  <img src="https://images.unsplash.com/photo-1634942537034-2b96ac4e1877?w=600&q=80" alt="Corporate Kit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <span className="text-xs font-bold uppercase tracking-widest text-page-text group-hover:text-[#f472b6] transition-colors border-b-2 border-page-text group-hover:border-[#f472b6] pb-1">Read More</span>
            </div>
            
            <div className="bg-[#f3f4f6] dark:bg-[#1a1b1e] rounded-[30px] p-8 flex flex-col items-center text-center group cursor-pointer transition-colors duration-500">
               <span className="text-[10px] text-page-muted uppercase tracking-widest font-bold mb-2">What We Do</span>
               <h3 className="text-xl font-black text-page-text tracking-tighter mb-8">Eco Brochures</h3>
               <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-[#f472b6] relative">
                  <img src="https://images.unsplash.com/photo-1544458874-8178d8a571da?w=600&q=80" alt="Brochures" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale mix-blend-multiply opacity-90" />
               </div>
               <span className="text-xs font-bold uppercase tracking-widest text-page-text group-hover:text-[#f472b6] transition-colors border-b-2 border-page-text group-hover:border-[#f472b6] pb-1">Read More</span>
            </div>

            <div className="bg-[#f3f4f6] dark:bg-[#1a1b1e] rounded-[30px] p-8 flex flex-col items-center text-center group cursor-pointer transition-colors duration-500">
               <span className="text-[10px] text-page-muted uppercase tracking-widest font-bold mb-2">What We Do</span>
               <h3 className="text-xl font-black text-page-text tracking-tighter mb-8">Brand Posters</h3>
               <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-[#3b82f6] relative">
                  <img src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&q=80" alt="Brand Posters" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <span className="text-xs font-bold uppercase tracking-widest text-page-text group-hover:text-[#f472b6] transition-colors border-b-2 border-page-text group-hover:border-[#f472b6] pb-1">Read More</span>
            </div>
         </div>
      </section>

      {/* Massive Marquee Banner */}
      <section className="border-y border-page-border bg-page-bg transition-colors duration-500 overflow-hidden py-10 flex">
         <motion.div 
            className="flex whitespace-nowrap min-w-full"
            animate={{ x: [0, -1035] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
         >
            {[...Array(2)].map((_, i) => (
               <div key={i} className="flex shrink-0">
                  <span className="text-7xl md:text-9xl font-black text-page-text opacity-5 tracking-tighter mx-8">CUSTOM PRINT</span>
                  <span className="text-7xl md:text-9xl font-black text-page-text opacity-5 tracking-tighter mx-8">BRAND STRATEGY</span>
               </div>
            ))}
         </motion.div>
      </section>

      {/* The Process Section */}
      <section className="py-24 bg-page-bg transition-colors duration-500">
         <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3">
               <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-page-muted">The Process</h4>
               <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-[1.05] text-page-text mb-4">How we create<br/>custom products</h2>
               <p className="text-xs text-page-muted leading-relaxed">Our seamless workflows ensure precision, speed, and uncompromising quality at every step.</p>
            </div>
            
            <div className="w-full md:w-2/3 flex flex-col gap-10">
               <div className="flex gap-6 group cursor-default">
                  <div className="w-12 h-12 rounded-full border border-page-border flex items-center justify-center shrink-0 text-page-muted group-hover:text-brand-red group-hover:border-brand-red transition-all shadow-sm">
                     <Settings size={18} />
                  </div>
                  <div>
                     <h3 className="text-lg font-bold text-page-text mb-2">Creative Freestyle</h3>
                     <p className="text-xs text-page-muted leading-relaxed max-w-sm">An unconstrained creative workspace to develop initial visual identity, branding concepts, and narratives without technical parameters.</p>
                  </div>
               </div>
               
               <div className="flex gap-6 group cursor-default">
                  <div className="w-12 h-12 rounded-full border border-page-border flex items-center justify-center shrink-0 text-page-muted group-hover:text-brand-red group-hover:border-brand-red transition-all shadow-sm">
                     <Edit3 size={18} />
                  </div>
                  <div>
                     <h3 className="text-lg font-bold text-page-text mb-2">Technical & Structural Refinement</h3>
                     <p className="text-xs text-page-muted leading-relaxed max-w-sm">Transition to technical stages to optimize web structures and rigorously calibrate designs for high-quality DI printing.</p>
                  </div>
               </div>

               <div className="flex gap-6 group cursor-default">
                  <div className="w-12 h-12 rounded-full border border-page-border flex items-center justify-center shrink-0 text-page-muted group-hover:text-brand-red group-hover:border-brand-red transition-all shadow-sm">
                     <CalendarCheck size={18} />
                  </div>
                  <div>
                     <h3 className="text-lg font-bold text-page-text mb-2">Sustainable Output</h3>
                     <p className="text-xs text-page-muted leading-relaxed max-w-sm">Perform final pre-flight checks to ensure all production materials align perfectly with your sustainable and eco-friendly printing strategies.</p>
                  </div>
               </div>

               <div className="flex gap-6 group cursor-default">
                  <div className="w-12 h-12 rounded-full border border-page-border flex items-center justify-center shrink-0 text-page-muted group-hover:text-brand-red group-hover:border-brand-red transition-all shadow-sm">
                     <Package size={18} />
                  </div>
                  <div>
                     <h3 className="text-lg font-bold text-page-text mb-2">Campaign Sync</h3>
                     <p className="text-xs text-page-muted leading-relaxed max-w-sm">Extract core design elements to generate synchronized promotional materials and bonus advertisements that drive measurable growth for your clients.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Grid Portfolio Highlights */}
      <section className="bg-page-bg transition-colors duration-500 overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-4 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             <div className="aspect-square bg-page-border rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=500&q=80" alt="Print Mockup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="aspect-square bg-page-border rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1544458874-8178d8a571da?w=500&q=80" alt="Print Mockup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="aspect-square bg-page-border rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&q=80" alt="Print Mockup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="aspect-square bg-page-border rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1634942537034-2b96ac4e1877?w=500&q=80" alt="Print Mockup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
         </div>
      </section>

      {/* Form and Logos pulled from common blocks */}
      <ContactSplit />
      <ClientLogos />
    </div>
  );
}
