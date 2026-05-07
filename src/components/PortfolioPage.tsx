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

      {/* FEATURED WORK Section */}
      <section className="py-24 bg-page-bg transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">
             <h4 className="text-[12px] font-bold uppercase tracking-[0.3em] text-page-muted">Featured Work</h4>
             <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] text-page-text">
               Elevate your brand with stunning packaging
             </h2>
             <p className="text-page-muted font-medium text-base md:text-lg leading-relaxed max-w-lg">
               Our visual mockups include beautifully branded apparel, magazines, billboards, and corporate gifts. We ensure your brand identity is consistently translated across every physical medium.
             </p>
          </div>

          <div className="w-full md:w-1/2">
             <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl border border-page-border group relative">
               <img 
                 src="https://images.unsplash.com/photo-1616464916356-3a777b2b59b1?w=1200&q=80" 
                 alt="Branded Product Packaging Mockup" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
               />
               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
             </div>
          </div>
          
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

      {/* 5. Comprehensive Gallery */}
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

               {/* Gallery Category 5: Product Design */}
               <div className="flex flex-col md:flex-row gap-8 items-center group">
                  <div className="w-full md:w-1/3 md:pr-8 text-center md:text-left">
                     <h3 className="text-3xl font-black text-page-text tracking-tighter mb-4">Product Design</h3>
                     <p className="text-sm text-page-muted leading-relaxed">Our proficient product design services encompass everything from conceptualization and 3D modeling to structural engineering and sustainable packaging solutions. We focus on creating functional, aesthetically pleasing products that resonate with your target audience and enhance brand value.</p>
                  </div>
                  <div className="w-full md:w-2/3 grid grid-cols-2 gap-4 lg:gap-8">
                     <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-page-border relative">
                        <img src="https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?w=800&q=80" alt="Product Design 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     </div>
                     <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-page-border relative mt-8 lg:mt-12">
                        <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80" alt="Product Design 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 delay-100" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 3. Clients Approach Split (Moved) */}
      <section className="py-32 max-w-7xl mx-auto px-4 bg-page-bg transition-colors duration-500 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Side: Image with Red Offset Background */}
          <div className="w-full lg:w-1/2 relative">
             {/* Red Background Box */}
             <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#990000] rounded-[2rem] z-0"></div>
             {/* Foreground Image */}
             <div className="relative z-10 w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e5381bb6e?w=800&q=80" 
                  alt="Business Partners" 
                  className="w-full h-full object-cover" 
                />
             </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
             <h4 className="text-[12px] font-bold uppercase tracking-[0.4em] mb-8 text-black">Esteemed Partners</h4>
             <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-black leading-[1.1] mb-12">Our Esteemed<br/>Clients Include:</h2>
             
             <div className="flex flex-col md:flex-row gap-12 mb-16 border-l-[3px] border-[#990000] pl-8">
               <ul className="space-y-4 text-black text-base font-semibold">
                 <li>• International Breweries Plc.</li>
                 <li>• MyEnvironment MyWealth (Verdant Circus)</li>
                 <li>• iPROJECT & DataPlus ABUJA</li>
                 <li>• TCIL</li>
                 <li>• Eido Group / Collins Bukka</li>
                 <li>• Integrated Waste Solution & Mundriam</li>
               </ul>
               <ul className="space-y-4 text-black text-base font-semibold">
                 <li>• Duduboch Construction Nig. Ltd</li>
                 <li>• IGHUB (ABA)</li>
                 <li>• Acer</li>
                 <li>• Sonar Energy & Sonar Aqua</li>
                 <li>• Develope U Academy</li>
                 <li className="italic opacity-70">...and many more.</li>
               </ul>
             </div>

             <button className="bg-[#990000] text-white font-bold uppercase tracking-widest text-[11px] px-12 py-6 rounded-full shadow-xl hover:bg-black transition-all transform hover:scale-105">
                View Full Gallery / Project Studies
             </button>
          </div>
        </div>
      </section>



      {/* Shared Elements from HomeBlocks */}
      <ClientLogos />
      <ContactSplit />
    </div>
  );
}
