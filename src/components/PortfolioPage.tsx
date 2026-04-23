import { useState } from 'react';
import { motion } from 'motion/react';
import { Shirt, BookOpen, Monitor, Gift, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { AccordionStats, ClientLogos, ContactSplit } from './HomeBlocks';

export default function PortfolioPage() {
  return (
    <div className="bg-page-bg text-page-text transition-colors duration-500 overflow-x-hidden pt-24">
      {/* Sticky Sub-nav */}
      <div className="sticky top-20 z-40 bg-page-bg/80 backdrop-blur-md border-b border-page-border py-4 px-6 md:px-12 flex justify-between items-center transition-colors duration-500 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-[12px] font-black uppercase tracking-[0.2em] hover:text-brand-red transition-colors">Our Portfolio</span>
        </div>
      </div>

      {/* 1. Hero */}
      <section className="w-full py-32 bg-gradient-to-br from-[#f472b6] via-[#f87171] to-[#fb923c] flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-12 flex space-x-2">
            <span className="w-2 h-2 rounded-full bg-white opacity-80 shadow-sm"></span>
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-[8rem] font-black text-white px-4 text-center tracking-tighter"
        >
          Portfolio
        </motion.h1>
      </section>

      {/* 2. Top Services / Portfolio Intro */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-page-bg transition-colors duration-500">
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-24 items-center border-b border-page-border pb-24">
           <div className="w-full xl:w-1/2">
             <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-page-muted">Top Projects</h4>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-page-text">Our Work Speaks<br/>for Itself</h2>
           </div>
           <div className="w-full xl:w-1/2 flex flex-col gap-6 text-page-muted text-sm leading-relaxed justify-center sm:pl-8">
              <p>Creating indelible impressions for SMEs, Multinationals, and Governments. We take immense pride in the success and growth of our esteemed clients.</p>
              <p>Over the years, we have delivered top-tier branding, green printing, and digital solutions across various industries.</p>
           </div>
        </div>
        
        {/* Four Icon Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 pt-24 text-center">
           <div className="flex flex-col items-center group cursor-pointer">
              <div className="mb-4 text-[#f472b6] group-hover:-translate-y-2 transition-transform duration-300"><Shirt size={48} strokeWidth={1} /></div>
              <h3 className="font-bold text-page-text mb-4 group-hover:text-brand-red transition-colors">Branded apparel</h3>
              <ArrowRight size={16} className="text-page-muted group-hover:text-brand-red transition-colors" />
           </div>
           <div className="flex flex-col items-center group cursor-pointer border-l border-page-border">
              <div className="mb-4 text-[#f472b6] group-hover:-translate-y-2 transition-transform duration-300"><BookOpen size={48} strokeWidth={1} /></div>
              <h3 className="font-bold text-page-text mb-4 group-hover:text-brand-red transition-colors">Magazines & Prints</h3>
              <ArrowRight size={16} className="text-page-muted group-hover:text-brand-red transition-colors" />
           </div>
           <div className="flex flex-col items-center group cursor-pointer border-l-0 md:border-l border-page-border">
              <div className="mb-4 text-[#f472b6] group-hover:-translate-y-2 transition-transform duration-300"><Monitor size={48} strokeWidth={1} /></div>
              <h3 className="font-bold text-page-text mb-4 group-hover:text-brand-red transition-colors">Digital Billboards</h3>
              <ArrowRight size={16} className="text-page-muted group-hover:text-brand-red transition-colors" />
           </div>
           <div className="flex flex-col items-center group cursor-pointer border-l border-page-border">
              <div className="mb-4 text-[#f472b6] group-hover:-translate-y-2 transition-transform duration-300"><Gift size={48} strokeWidth={1} /></div>
              <h3 className="font-bold text-page-text mb-4 group-hover:text-brand-red transition-colors">Corporate gifts</h3>
              <ArrowRight size={16} className="text-page-muted group-hover:text-brand-red transition-colors" />
           </div>
        </div>
      </section>

      {/* 3. Clients Approach Split */}
      <section className="py-24 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 lg:gap-8 bg-page-bg transition-colors duration-500 overflow-hidden">
        <div className="w-full lg:w-1/2 relative md:pr-12 md:pb-12">
           <div className="bg-[#fb923c] aspect-square rounded-[2rem] w-[85%] absolute bottom-0 right-0 z-0 shadow-lg border border-page-border opacity-50 dark:opacity-20 hidden md:block"></div>
           <div className="relative z-10 w-full md:w-[90%] aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-zinc-800 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="Corporate Gifts and Business Items" className="w-full h-full object-cover" />
           </div>
        </div>
        <div className="w-full lg:w-1/2 xl:pl-16">
           <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-page-muted">Esteemed Partners</h4>
           <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-page-text leading-[1.05] mb-8">Our Esteemed Clients Include:</h2>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-page-muted text-sm leading-relaxed mb-10 max-w-2xl border-l-[3px] border-[#f472b6] pl-6 font-medium">
             <span>• International Breweries Plc.</span>
             <span>• Duduboch Construction Nig. Ltd</span>
             <span>• MyEnvironment MyWealth (Verdant Circus)</span>
             <span>• IGHUB (ABA)</span>
             <span>• iPROJECT & DataPlus ABUJA</span>
             <span>• Acer</span>
             <span>• TCIL</span>
             <span>• Sonar Energy & Sonar Aqua</span>
             <span>• Eido Group / Collins Bukka</span>
             <span>• Develope U Academy</span>
             <span>• Integrated Waste Solution & Mundriam</span>
             <span className="italic">...and many more.</span>
           </div>
           <button className="bg-[#f472b6] text-white font-bold uppercase tracking-widest text-[10px] px-10 py-5 rounded-full shadow-lg hover:bg-black transition-colors hover:shadow-xl dark:hover:bg-white dark:hover:text-black">
              View Full Gallery / Project Case Studies
           </button>
        </div>
      </section>

      {/* 4. Giant Marquee */}
      <section className="border-y border-page-border bg-page-bg transition-colors duration-500 overflow-hidden flex py-10 md:py-20 cursor-default select-none pointer-events-none">
         <motion.div 
            className="flex whitespace-nowrap w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
         >
            {[...Array(2)].map((_, i) => (
               <div key={i} className="flex shrink-0 items-center">
                  <span className="text-[4rem] sm:text-[6rem] md:text-[10rem] font-black text-page-text opacity-5 tracking-tighter mx-8 uppercase">
                     INTERNATIONAL BREWERIES PLC. • DUDUBOCH CONSTRUCTION • VERDANT CIRCUS • IGHUB • iPROJECT • DATAPLUS • ACER • TCIL • SONAR ENERGY • SONAR AQUA • EIDO GROUP • COLLINS BUKKA • DEVELOPE U ACADEMY • MUNDRIAM • RAMECGROUP • IWSL • BRIGHTHANDS • FRAGUA • LOGMARINE • AMTECH • THE FEMI FOUNDATION • CORDERO • GOFRUITI • BOI • EVE'S RADIANCE CONCEPT • YOUNGLAND • ALTARSTONE • RED SERVICES • PENTOBRICKS LTD • N.D.D.C. • CORNERGATE • MEGATORCH • 
                  </span>
               </div>
            ))}
         </motion.div>
      </section>

      {/* 5. What We Do (Visuals) */}
      <section className="py-24 bg-page-bg transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row relative">
          
          <div className="w-full md:w-1/2 flex flex-col gap-12 text-center md:text-left">
             <div>
               <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-page-muted">Featured Work</h4>
               <h2 className="text-4xl md:text-5xl lg:text-5xl font-black tracking-tighter leading-[1.05] text-page-text">Elevate your brand<br/>with stunning<br/>packaging</h2>
             </div>
             <div className="mt-8 md:mt-24 md:pl-24 relative z-20">
               <div className="bg-[#3b82f6] w-[80%] md:w-full aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl mx-auto md:mx-0 border border-page-border group pl-0 pb-0 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1544458874-8178d8a571da?w=800&q=80" alt="Brochures and Magazines mockup" className="w-[85%] h-[85%] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 shadow-xl" />
               </div>
             </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-12 md:pt-32">
             <div className="bg-[#facc15] aspect-square rounded-[40px] overflow-hidden shadow-xl border border-page-border relative group flex items-center justify-center">
               <img src="https://images.unsplash.com/photo-1529369623266-f5264b696110?w=800&q=80" alt="Branded Apparel" className="w-[80%] h-[80%] object-cover rounded-2xl group-hover:scale-105 transition-all duration-700 shadow-2xl" />
             </div>
             <p className="text-page-muted font-medium text-sm leading-relaxed max-w-sm pl-8">
               Our visual mockups include beautifully branded apparel, magazines, billboards, and corporate gifts. We ensure your brand identity is consistently translated across every physical medium.
             </p>
          </div>
          
        </div>
      </section>

      {/* 6. Comprehensive Gallery */}
      <section className="py-24 bg-page-bg transition-colors duration-500 border-b border-page-border">
         <div className="max-w-7xl mx-auto px-4">
            <div className="mb-20 text-center">
               <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-[#f472b6]">Project Gallery</h4>
               <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] text-page-text">Visual Showcase</h2>
            </div>
            
            <div className="flex flex-col gap-24">
               {/* Gallery Category 1 */}
               <div className="flex flex-col md:flex-row gap-8 items-center group">
                  <div className="w-full md:w-1/3 md:pr-8 text-center md:text-left">
                     <h3 className="text-3xl font-black text-page-text tracking-tighter mb-4">Apparel Brandings</h3>
                     <p className="text-sm text-page-muted leading-relaxed">High-quality custom clothing that transforms your brand into a wearable statement with stunning detailing.</p>
                  </div>
                  <div className="w-full md:w-2/3 grid grid-cols-2 gap-4 lg:gap-8">
                     <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-page-border relative">
                        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80" alt="Apparel Branding 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     </div>
                     <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-page-border relative mt-8 lg:mt-12">
                        <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80" alt="Apparel Branding 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 delay-100" />
                     </div>
                  </div>
               </div>

               {/* Gallery Category 2 */}
               <div className="flex flex-col md:flex-row-reverse gap-8 items-center group">
                  <div className="w-full md:w-1/3 md:pl-8 text-center md:text-left">
                     <h3 className="text-3xl font-black text-page-text tracking-tighter mb-4">Magazines & Prints</h3>
                     <p className="text-sm text-page-muted leading-relaxed">Tangible editorial pieces and stunning prints that demand tactile engagement, driving home your visual identity.</p>
                  </div>
                  <div className="w-full md:w-2/3 grid grid-cols-2 gap-4 lg:gap-8">
                     <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-page-border relative">
                        <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&q=80" alt="Magazine 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 delay-100" />
                     </div>
                     <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-page-border relative mt-8 lg:mt-12">
                        <img src="https://images.unsplash.com/photo-1544458874-8178d8a571da?w=800&q=80" alt="Magazine 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     </div>
                  </div>
               </div>

               {/* Gallery Category 3 */}
               <div className="flex flex-col md:flex-row gap-8 items-center group">
                  <div className="w-full md:w-1/3 md:pr-8 text-center md:text-left">
                     <h3 className="text-3xl font-black text-page-text tracking-tighter mb-4">Digital Billboards</h3>
                     <p className="text-sm text-page-muted leading-relaxed">Massive, dynamic outdoor advertising spaces that capture attention from afar and stop traffic.</p>
                  </div>
                  <div className="w-full md:w-2/3 grid grid-cols-2 gap-4 lg:gap-8">
                     <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-page-border relative">
                        <img src="https://images.unsplash.com/photo-1580982542563-3dc458b68831?w=800&q=80" alt="Billboard 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     </div>
                     <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-page-border relative mt-8 lg:mt-12">
                        <img src="https://images.unsplash.com/photo-1559827260-32caf634b3f8?w=800&q=80" alt="Billboard 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 delay-100" />
                     </div>
                  </div>
               </div>

               {/* Gallery Category 4 */}
               <div className="flex flex-col md:flex-row-reverse gap-8 items-center group">
                  <div className="w-full md:w-1/3 md:pl-8 text-center md:text-left">
                     <h3 className="text-3xl font-black text-page-text tracking-tighter mb-4">Corporate Gifts</h3>
                     <p className="text-sm text-page-muted leading-relaxed">Curated premium gifts and onboarding kits to delight clients, partners, and key stakeholders.</p>
                  </div>
                  <div className="w-full md:w-2/3 grid grid-cols-2 gap-4 lg:gap-8">
                     <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-page-border relative">
                        <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80" alt="Corporate Gift 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 delay-100" />
                     </div>
                     <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-page-border relative mt-8 lg:mt-12">
                        <img src="https://images.unsplash.com/photo-1513224502586-d1e100f4e378?w=800&q=80" alt="Corporate Gift 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     </div>
                  </div>
               </div>
            </div>
         </div>

        {/* Ready to Upgrade Sub-CTA Block matching the testimonial-style text layout underneath */}
        <div className="max-w-3xl mx-auto px-4 mt-32 text-center flex flex-col items-center">
           <div className="text-[#f472b6] mb-8"><Quote size={32} /></div>
           <p className="text-lg md:text-xl font-medium text-page-text leading-relaxed mb-12">
             "We take immense pride in the success and growth of our esteemed clients. Let us craft the visual identity your legacy deserves."
           </p>
           <button className="bg-page-text text-page-bg font-black uppercase tracking-widest text-[12px] px-12 py-6 rounded-full shadow-2xl hover:bg-brand-red hover:text-white transition-all transform hover:scale-105">
             Ready to Upgrade Your Brand? Contact Us
           </button>
        </div>
      </section>

      {/* Shared Elements from HomeBlocks */}
      <AccordionStats />
      <ClientLogos />
      <ContactSplit />
    </div>
  );
}
