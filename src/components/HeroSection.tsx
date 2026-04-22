import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-12 md:pt-48 md:pb-24 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-50 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-50 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-50 text-rose-700 text-sm font-semibold uppercase tracking-wider mb-6">
            Now with Sleep Stories
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
            Find your center in a <span className="text-indigo-600">noisy world.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Daily guided meditations, breathing exercises, and ambient soundscapes designed to reduce anxiety and improve focus.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-700 active:scale-95 transition-all">
              Start Free Trial
            </button>
            <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg shadow-sm hover:bg-slate-50 active:scale-95 transition-all flex items-center justify-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              Watch Demo
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 relative w-full max-w-[500px]"
        >
          {/* Abstract Visual Element */}
          <div className="relative z-10 aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80" 
              alt="Meditation App Preview" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
          </div>
          
          {/* Floating Ornament */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-100/60 backdrop-blur-xl rounded-full -z-10"
          />
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-100/60 backdrop-blur-xl rounded-full -z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;