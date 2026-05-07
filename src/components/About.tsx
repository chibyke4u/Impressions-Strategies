import { motion } from 'motion/react';
import { Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-black">
              Who <span className="text-brand-red">We Are</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand-red mb-8"></div>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                <strong className="text-black">IMPRESSIONS PRINT SOLUTIONS</strong> (Subsidiary of Impressions Global strategies Limited) – Impressions Global Strategies Limited is a leading brand company offering creative design, executive and corporate branding, green printing, website development, training, advertising and social media management/promotions.
              </p>
              <p>
                We deliver both unmatchable printing quality and environmental conscious practices that seeks to exceed client's expectations in the quality of each print production project, Direct imaging (DI) press, provide better image definitions and broader colour spectrums when compared to standard offset pressure.
              </p>
              <p>
                Impression Global Strategies Limited strives for excellence extending beyond the quality of the finished products. The growth of each of our clientele is our top most priority.
              </p>
              <p className="pl-4 border-l-2 border-brand-red text-black italic font-medium">
                We don't just create indelible designs and prints, we help you grow appreciably with adverts and promos as bonus for patronizing us!
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] object-cover rounded-none overflow-hidden relative group">
              <img 
                src="https://picsum.photos/seed/designprint/800/1000" 
                alt="Design and Print" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-red/20 mix-blend-multiply"></div>
            </div>
            
            {/* Mission / Vision Cards overlaying the image */}
            <div className="absolute -left-8 sm:-left-16 -bottom-12 space-y-4 max-w-sm w-full">
              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-[#0F1011] p-6 shadow-2xl border-l-4 border-brand-red rounded-none flex flex-col justify-center"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Target className="text-brand-red w-6 h-6" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Mission</h3>
                </div>
                <p className="text-sm text-gray-400 line-clamp-3">
                  To be the leading brand agency in Africa giving every business a FACE LIFT FOR GROWTH whilst promoting green and sustainable printing.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-[#0F1011] p-6 shadow-2xl border-l-4 border-gray-600 rounded-none flex flex-col justify-center"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="text-white w-6 h-6" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Vision</h3>
                </div>
                <p className="text-sm text-gray-400 line-clamp-3">
                  To be a force to reckon with in promoting green printing - We are on a journey to correct the myth about Print marketing.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
