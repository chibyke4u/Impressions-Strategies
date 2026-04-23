import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Quote, ShoppingBag, BookOpen, BadgeCheck, Shirt, Moon, Sun } from 'lucide-react';
import { AccordionStats, ClientLogos, ContactSplit } from './HomeBlocks';

export default function AboutPage() {
  return (
    <div className="bg-page-bg text-page-text transition-colors duration-500 overflow-x-hidden pt-24">
      {/* Sticky Sub-nav */}
      <div className="sticky top-20 z-40 bg-page-bg/80 backdrop-blur-md border-b border-page-border py-4 px-6 md:px-12 flex justify-between items-center transition-colors duration-500 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-[12px] font-black uppercase tracking-[0.2em] hover:text-brand-red transition-colors">Our Story</span>
        </div>
      </div>

      {/* 1. Hero */}
      <section className="w-full py-32 bg-gradient-to-br from-pink-300 via-pink-400 to-[#fb923c] flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-12 flex space-x-2">
            <span className="w-2 h-2 rounded-full bg-white opacity-80 shadow-sm"></span>
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-[8rem] font-black text-white px-4 text-center tracking-tighter"
        >
          About Us
        </motion.h1>
      </section>

      {/* 2. Top Services */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-page-bg transition-colors duration-500">
        <div className="flex flex-col md:flex-row gap-16 mb-24">
           <div className="w-full md:w-1/2">
             <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-page-muted">Top Services</h4>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-page-text">Crafting prints for<br/>your business</h2>
           </div>
           <div className="w-full md:w-1/2 flex flex-col gap-6 text-page-muted text-sm leading-relaxed justify-center sm:pl-8">
              <p>Impressions Print Solutions is a proud subsidiary of Impressions Global Strategies Limited. We are on a journey to redefine the branding and print marketing industry across the African continent by proving that premium quality and eco-friendly practices can go hand-in-hand.</p>
              <p>We consistently seek to exceed our clients' expectations in every print production project we handle.</p>
           </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-page-border pt-20">
            <div className="group cursor-pointer">
              <ShoppingBag strokeWidth={1} className="w-16 h-16 text-[#f472b6] mb-6 group-hover:-translate-y-2 transition-transform duration-300" />
              <h3 className="font-bold text-xl leading-snug mb-6 text-page-text group-hover:text-brand-red transition-colors">Branded<br/>packages</h3>
              <ArrowRight size={18} className="text-page-muted group-hover:text-brand-red group-hover:translate-x-2 transition-all" />
            </div>
            <div className="group cursor-pointer">
              <BookOpen strokeWidth={1} className="w-16 h-16 text-[#f472b6] mb-6 group-hover:-translate-y-2 transition-transform duration-300" />
              <h3 className="font-bold text-xl leading-snug mb-6 text-page-text group-hover:text-brand-red transition-colors">Branded<br/>notepads</h3>
              <ArrowRight size={18} className="text-page-muted group-hover:text-brand-red group-hover:translate-x-2 transition-all" />
            </div>
            <div className="group cursor-pointer">
              <BadgeCheck strokeWidth={1} className="w-16 h-16 text-[#f472b6] mb-6 group-hover:-translate-y-2 transition-transform duration-300" />
              <h3 className="font-bold text-xl leading-snug mb-6 text-page-text group-hover:text-brand-red transition-colors">Branded<br/>badges</h3>
              <ArrowRight size={18} className="text-page-muted group-hover:text-brand-red group-hover:translate-x-2 transition-all" />
            </div>
            <div className="group cursor-pointer">
               <Shirt strokeWidth={1} className="w-16 h-16 text-[#f472b6] mb-6 group-hover:-translate-y-2 transition-transform duration-300" />
              <h3 className="font-bold text-xl leading-snug mb-6 text-page-text group-hover:text-brand-red transition-colors">Branded<br/>clothes</h3>
              <ArrowRight size={18} className="text-page-muted group-hover:text-brand-red group-hover:translate-x-2 transition-all" />
            </div>
        </div>
      </section>

      {/* 3. Creative Approach */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2 relative">
           <div className="bg-[#fb923c] w-full max-w-[600px] aspect-square rounded-[40px] flex items-center justify-center p-8 mx-auto xl:ml-0">
             <img src="https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=800&q=80" alt="Phone Cases Mockup" className="w-[105%] max-w-none object-cover rounded-3xl drop-shadow-2xl hover:scale-105 transition-transform duration-700 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/20" />
           </div>
        </div>
        <div className="w-full lg:w-1/2 xl:pl-16">
           <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-page-muted">Our Mission</h4>
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-page-text leading-[1.05] mb-8">Giving every business a<br/>face lift for<br/>growth</h2>
           <p className="text-page-muted text-sm leading-relaxed mb-10 max-w-md border-l-[3px] border-[#f472b6] pl-6 font-medium">
             To be the leading brand agency in Africa giving every business a FACE LIFT FOR GROWTH whilst promoting green and sustainable printing. We are dedicated to creating indelible impressions in the day-to-day business of individuals, SMEs, Multinationals, Corporate bodies, and Government entities across the African Continent.
           </p>
           <button className="bg-[#f472b6] text-white font-bold uppercase tracking-widest text-[10px] px-10 py-5 rounded-full shadow-lg hover:bg-black transition-colors hover:shadow-xl">Discover the Impressions Difference</button>
        </div>
      </section>

      {/* 4. Infinite Marquee */}
      <div className="w-full overflow-hidden whitespace-nowrap py-16 text-page-text transition-colors duration-500 my-12">
        <motion.div animate={{ x: [0, -2500] }} transition={{ repeat: Infinity, ease: "linear", duration: 30 }} className="inline-block text-[10rem] sm:text-[15rem] md:text-[20rem] font-black tracking-tighter leading-none hover:text-brand-red transition-colors duration-500 cursor-default">
          ckage Printin ckage Printin ckage Printin 
        </motion.div>
      </div>

      {/* 5. What We Do */}
      <section className="py-32 bg-[#fafafa] dark:bg-[#0a0a0a] transition-colors duration-500 border-y border-page-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16 lg:gap-24">
          
          <div className="w-full md:w-1/2 flex flex-col gap-16">
             <div>
               <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-page-muted">What We Do</h4>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-page-text">Elevate your brand<br/>with stunning<br/>packaging</h2>
             </div>
             <div className="bg-[#3b82f6] aspect-[4/5] rounded-[40px] flex items-center justify-center p-8 w-[85%] mx-auto shadow-xl border border-page-border group overflow-hidden">
               <img src="https://images.unsplash.com/photo-1548839140-5b5832a5bc65?w=800&auto=format&fit=crop&q=80" alt="Packaging Mockup" className="w-[85%] object-cover rounded-2xl drop-shadow-2xl group-hover:-translate-y-4 transition-transform duration-700 shadow-black/30 bg-white" />
             </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col gap-12 md:pt-32">
             <div className="bg-[#facc15] aspect-square rounded-[40px] overflow-hidden shadow-xl border border-page-border">
               <img src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?w=800&q=80" alt="Designer working" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
             </div>
             <p className="text-page-muted font-medium text-sm leading-relaxed max-w-sm pl-8">
               <strong className="text-page-text block mb-2 uppercase tracking-widest text-xs">Our Vision</strong>
               To be a force to reckon with in promoting green printing. We are actively on a journey to correct the myth that print marketing is not environmentally friendly, utilizing our unique, sustainable, and eco-friendly strategies to increase entrepreneurs in print marketing.
             </p>
          </div>
          
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 lg:py-32 bg-[#fafafa] dark:bg-[#0a0a0a] transition-colors duration-500 border-b border-page-border">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
          <Quote className="w-12 h-12 text-[#f472b6] mb-10" fill="currentColor" />
          
          <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-page-text leading-relaxed tracking-tight mb-16 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc in orci bibendum dignissim quis in turpis. In id enim at lacus commodo mattis a a massa. Nam bibendum id magna vitae tristique.
          </h3>
          
          <div className="flex items-center justify-between w-full max-w-lg mb-12">
            <button className="text-page-muted hover:text-[#f472b6] transition-colors"><ArrowLeft size={28} /></button>
            <div className="flex flex-col items-center gap-2">
              <p className="font-bold text-page-text text-sm">Misty Smith</p>
              <p className="text-[10px] text-page-muted uppercase tracking-widest font-bold">Client</p>
            </div>
            <button className="text-page-muted hover:text-[#f472b6] transition-colors"><ArrowRight size={28} /></button>
          </div>
          
          <div className="flex justify-center items-center -space-x-4">
            <img src="https://i.pravatar.cc/150?img=33" className="w-12 h-12 rounded-full border-[3px] border-[#fafafa] dark:border-[#0a0a0a] grayscale hover:grayscale-0 transition-all cursor-pointer" alt="Avatar 1"/>
            <img src="https://i.pravatar.cc/150?img=32" className="w-16 h-16 rounded-full border-[3px] border-[#f472b6] shadow-xl z-10" alt="Active Avatar"/>
            <img src="https://i.pravatar.cc/150?img=11" className="w-12 h-12 rounded-full border-[3px] border-[#fafafa] dark:border-[#0a0a0a] grayscale hover:grayscale-0 transition-all cursor-pointer" alt="Avatar 3"/>
          </div>
        </div>
      </section>

      {/* Existing Shared Blocks */}
      <AccordionStats />
      <ClientLogos />
      <ContactSplit />
      
    </div>
  );
}
