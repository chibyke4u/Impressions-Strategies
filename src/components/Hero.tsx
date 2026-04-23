import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Upload, Star } from 'lucide-react';
import { MouseEvent } from 'react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    // Normalize to -0.5 to 0.5
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Smooth springs
  const springConfig = { stiffness: 150, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transforms for main container
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  // Transforms for floating elements (parallax depth)
  const tx1 = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const ty1 = useTransform(smoothY, [-0.5, 0.5], [-30, 30]);
  
  const tx2 = useTransform(smoothX, [-0.5, 0.5], [40, -40]);
  const ty2 = useTransform(smoothY, [-0.5, 0.5], [40, -40]);

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFBFF] pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
    >
      
      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Top Left Yellow Circle */}
         <motion.div style={{ x: tx1, y: ty1 }} className="absolute top-32 left-[10%] lg:left-[20%] w-12 h-12 rounded-bl-full bg-yellow-400 opacity-80" />
         
         {/* Top Blue Dot */}
         <motion.div style={{ x: tx2, y: ty2 }} className="absolute top-10 left-[45%] w-8 h-8 rounded-full bg-blue-500 opacity-80" />
         
         {/* Bottom Yellow Dot */}
         <motion.div style={{ x: tx1, y: ty1 }} className="absolute bottom-20 left-[35%] w-10 h-10 rounded-full bg-yellow-400 opacity-90" />
         
         {/* Pink Hex/Shape right */}
         <motion.div style={{ x: tx2, y: ty2 }} className="absolute top-20 right-10 w-24 h-24 bg-pink-400 rounded-tl-full opacity-80" />
         
         {/* Blue Shape bottom right */}
         <motion.div style={{ x: tx1, y: ty1 }} className="absolute bottom-20 right-10 w-16 h-16 bg-blue-400 rounded-tr-full opacity-80" />
         
         {/* Thin curved lines (decorative) */}
         <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path stroke="#f472b6" strokeWidth="0.2" fill="none" d="M0,80 Q25,20 50,80 T100,50" />
         </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ transformStyle: "preserve-3d" }}>
        
        {/* Left Column - Text content */}
        <div className="max-w-xl z-10 pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[1.05] tracking-tight mb-8 text-gray-900"
          >
            YOUR PRINTING <br />
            <span className="text-[#F28eb9]">EXPERTS</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 font-medium max-w-lg mb-8"
          >
            Providing elite printing solutions, sustainable materials, and comprehensive digital architecture for modern brands.
          </motion.p>
        </div>

        {/* Right Column - Image & Floating Cards (Tilting Container) */}
        <motion.div 
          className="relative z-10 h-full flex justify-center items-center mt-20 lg:mt-0"
          style={{ 
            rotateX, 
            rotateY,
            transformStyle: "preserve-3d" 
          }}
        >
           
           {/* Pink/Purple Background Circle */}
           <div 
             className="absolute w-[350px] h-[350px] md:w-[480px] md:h-[480px] rounded-full bg-gradient-to-br from-[#f8b4d9] to-[#c084e3] opacity-90 z-0" 
             style={{ transform: "translateZ(-20px)" }}
           />
           
           {/* Main Image */}
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="relative z-10 flex justify-center items-end h-[500px]"
             style={{ transform: "translateZ(30px)" }}
           >
             {/* Using an Unsplash placeholder as image generation quota is exceeded. 
                 You can drop a cutout PNG here. */}
             <img 
               src="https://images.unsplash.com/photo-1520975954732-57dd22299614?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Man wearing printed t-shirt" 
               className="h-[500px] w-auto object-cover rounded-t-[5rem] rounded-b-[2rem] shadow-2xl border-4 border-white/50"
             />
           </motion.div>

           {/* Floating Interaction Elements with Hover Effects */}
           
           {/* Upload Design Card */}
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="absolute bottom-16 -left-4 md:-left-12 lg:-left-20 bg-white rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] p-3 pr-2 flex items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-300 z-20 group"
             style={{ transform: "translateZ(80px)" }}
           >
              <div className="bg-[#f8b4d9] p-3 rounded-xl text-white group-hover:bg-[#f48ebf] transition-colors">
                <Upload size={20} />
              </div>
              <div className="flex flex-col pr-2">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Your design</span>
                <span className="text-sm font-bold text-gray-900 leading-tight">Japan gull</span>
              </div>
              <button className="bg-gradient-to-r from-[#e78065] to-[#f29969] text-white text-[10px] uppercase font-black py-2.5 px-6 rounded-xl hover:opacity-90 transition-opacity">
                UPLOAD
              </button>
           </motion.div>

           {/* Order Card */}
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.8 }}
             className="absolute top-10 -right-4 md:-right-8 lg:-right-12 bg-white rounded-3xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] p-4 flex flex-col items-center gap-2 cursor-pointer hover:scale-[1.02] hover:shadow-[0_25px_40px_rgba(0,0,0,0.15)] transition-all duration-300 z-20"
             style={{ transform: "translateZ(60px)" }}
           >
              <div className="w-[120px] h-[140px] bg-gray-50 rounded-2xl overflow-hidden mb-1 border border-gray-100 p-2">
                <img src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Japan Gull graphic" className="w-full h-full object-cover rounded-xl" />
              </div>
              <span className="text-[13px] font-bold text-gray-800">Japan Gull</span>
              <div className="flex gap-[3px] text-yellow-400 mb-2">
                <Star size={12} fill="currentColor" className="opacity-100" />
                <Star size={12} fill="currentColor" className="opacity-100" />
                <Star size={12} fill="currentColor" className="opacity-100" />
                <Star size={12} fill="currentColor" className="opacity-100" />
                <Star size={12} fill="currentColor" className="opacity-100" />
              </div>
              <button className="bg-gradient-to-r from-[#e78065] to-[#f29969] text-white text-[10px] uppercase font-black py-2.5 w-full rounded-xl hover:opacity-90 transition-opacity">
                ORDER
              </button>
           </motion.div>
           
        </motion.div>
      </div>
    </section>
  );
}
